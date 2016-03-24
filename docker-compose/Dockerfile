# Ubuntu 14.04
# Nginx

FROM ubuntu:14.04

MAINTAINER Piero Divasto (pdivasto@gmail.com)

# Update base image
# Add sources for latest nginx
# Install software requirements
RUN apt-get update && \
apt-get install -y software-properties-common && \
nginx=stable && \
add-apt-repository ppa:nginx/$nginx && \
apt-get update && \
apt-get upgrade -y && \
apt-get -y install supervisor nginx && \
apt-get remove --purge -y software-properties-common && \
apt-get autoremove -y && \
apt-get clean && \
apt-get autoclean && \
echo -n > /var/lib/apt/extended_states && \
rm -rf /var/lib/apt/lists/* && \
rm -rf /usr/share/man/?? && \
rm -rf /usr/share/man/??_*

# tweak nginx config
RUN sed -i -e"s/worker_processes  1/worker_processes 5/" /etc/nginx/nginx.conf && \
sed -i -e"s/keepalive_timeout\s*65/keepalive_timeout 2/" /etc/nginx/nginx.conf && \
sed -i -e"s/keepalive_timeout 2/keepalive_timeout 2;\n\tclient_max_body_size 100m/" /etc/nginx/nginx.conf && \
echo "daemon off;" >> /etc/nginx/nginx.conf

# nginx site conf
RUN rm -Rf /etc/nginx/conf.d/* && \
rm -Rf /etc/nginx/sites-available/default && \
mkdir -p /etc/nginx/ssl/
COPY ./nginx-configuration.conf /etc/nginx/sites-available/default.conf
RUN ln -s /etc/nginx/sites-available/default.conf /etc/nginx/sites-enabled/default.conf

# Copy SPA-WEB into Container
COPY ./app /usr/share/nginx/html/app

# Copy configuration.js pointing to '/api' which will be redirected by nginx.
# Please check 'nginx-configuration.conf' in 'upstream' block to set the SPA-REST
# API server URL/IP
COPY ./configuration-docker.js /usr/share/nginx/html/app/js/configuration.js

# Supervisor Config
COPY ./supervisord.conf /etc/supervisord.conf

# Start Supervisord
COPY ./start.sh /start.sh
RUN chmod 755 /start.sh

# Setup Volume
VOLUME ["/usr/share/nginx/html"]
RUN chown -Rf www-data.www-data /usr/share/nginx/html/

EXPOSE 80

CMD ["/bin/bash", "/start.sh"]
