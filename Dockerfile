FROM alpine:3.6

RUN apk --no-cache add tini \
    && apk --no-cache add --virtual devs tar curl \
    && mkdir -p /var/www/html/dist

#Install Caddy Server, and All Middleware
RUN curl "https://caddyserver.com/download/linux/amd64?plugins=hook.service,http.cache,http.cors,http.expires,http.login,http.minify,http.ratelimit,http.realip,net,tls.dns.googlecloud&license=" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy

#Remove build devs
RUN apk del devs

COPY ./dist /var/www/html/dist
COPY Caddyfile.production /var/www/html/Caddyfile

ENTRYPOINT ["/sbin/tini"]
CMD ["caddy", "-quic", "--conf", "/var/www/html/Caddyfile"]
