### 0.0.6

* new 新增abc应用自动检测和abc目录导入增加配置功能

### 0.0.5 ###

* bugfix 当文件不存在却返回200，现在返回正确的404了
* bugfix url路径中包含两个斜杠的现在可以正确代理了
* new 新增更新和消息提示的ui

### 0.0.4 ###

* bugfix 解决node@32位下request.url返回带域名的url的问题
* bugfix 修复当只保留一个全局场景时，新增加一个场景后无法切换场景的bug
* new 对访客提供新界面
* new 增加不使用任何场景的功能

### 0.0.3 ###

* bugfix 处理一下非127.0.0.1的访问匹配不到规则的问题

### 0.0.2 ###

* bugfix 解决了utf8文件被combo的问题
* bugfix 修复了部分无用信息写入配置文件的问题
* new 在响应头里加了一些便于调试的信息

###0.0.1###

* new 主功能，主ui亮相
