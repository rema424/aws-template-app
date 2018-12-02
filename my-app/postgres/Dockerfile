FROM postgres:10.3

# RUN localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8

# ENV LANG="ja_JP.UTF-8" \
#   LANGUAGE="ja_JP:ja" \
#   LC_ALL="ja_JP.UTF-8"

ENV LC_ALL="ja_JP.UTF-8"