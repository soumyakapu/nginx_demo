```
http {
    include mime.types;
    upstream basckendserver {
        server 127.0.0.1:1111;
        server 127.0.0.1:2222;
        server 127.0.0.1:3333;

    }
    server {
        listen 8089;
         root D:/Soumya/Projects/nginx_demo;
        location / {
           proxy_pass http://basckendserver;
        }
        #
        location ~* /count/[0-9] {
            root D:/Soumya/Projects/nginx_demo;
        }
        location /User{
            root D:/Soumya/Projects/nginx_demo;
            try_files /User/User.html /index.html =404;
        }
        location /people{
             root D:/Soumya/Projects/nginx_demo;
             try_files /people/index.html /index.html=404;
        }
        # change the urls
        location /employee{
            alias D:/Soumya/Projects/nginx_demo/people;
        }
        # to redirect
        location /person{
            return 307 /people;
        }
    }
}
events {}

```
