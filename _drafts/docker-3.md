达成最终的目的，将 Jekyll 博客通过 Docker 的方式，跑在自建服务器上。







```
docker run --rm -v /C/Users/Administrator/Git/pengloo53.github.io:/site -v /C/Users/Administrator/Git/docker-jekyll/_site:/site/_site -it docker-jekyll:0.0.1 build 
```

- `FROM jekyll as jekyll-serve` 基于上面的镜像，再制作一个
- `COPY docker-entrypoint.sh /usr/local/bin/` 
- `RUN npm install`：在`/app`目录下，运行`npm install`命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。
- `EXPOSE 3000`：将容器 3000 端口暴露出来， 允许外部连接这个端口。
- CMD 命令是在启动 container 的时候执行命令

在镜像里使用了 CMD 的命令，就不能在启动容器的时候，再添加执行命令了。例如类似下面的命令就不对了。

```bash
docker container run -p 8000:3000 -it koa-demo /bin/bash
```

CMD [ "bundle", "exec", "jekyll", "serve", "--trace", "--force_polling", "-H", "0.0.0.0", "-P", "4000" ]

###

`docker-entrypoint.sh` 脚本

```bash
#!/bin/bash
set -e

if [ ! -f Gemfile ]; then
  echo "NOTE: hmm, I don't see a Gemfile so I don't think there's a jekyll site here"
  echo "Either you didn't mount a volume, or you mounted it incorrectly."
  echo "Be sure you're in your jekyll site root and use something like this to launch"
  echo ""
  echo "docker run -p 4000:4000 -v \$(pwd):/site bretfisher/jekyll-serve"
  echo ""
  echo "NOTE: To create a new site, you can use the sister image bretfisher/jekyll like:"
  echo ""
  echo "docker run -v \$(pwd):/site bretfisher/jekyll new ."
  exit 1
fi

bundle install --retry 5 --jobs 20

exec "$@"
```











## Docker Compose

```bash
version: '2.4'

services:
  jekyll:
    image: bretfisher/jekyll-serve
    volumes:
      - .:/site
    ports:
      - '4000:4000'
```

