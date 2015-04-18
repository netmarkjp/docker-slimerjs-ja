slimerjs-ja
====================

SlimerJS + Japanese Font

- [SlimerJS](http://slimerjs.org/)
- CentOS7
- VLGothic

# Usage

```
docker run --rm -v `pwd`:/data netmarkjp/slimerjs-ja /data/example.js
```

# Advanced Usage

```
docker run --rm -v `pwd`:/data netmarkjp/slimerjs-ja /data/example.js \
 --disk-cache=false \
 --load-images=true \
 --error-log-file=/data/error.log \
 ;
```

# Help

```
docker run --rm netmarkjp/slimerjs-ja --help
```
