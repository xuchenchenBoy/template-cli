#!/usr/bin/env node

process.title = 'xiangxin-template-cli';

require('commander')
.version(require('../package').version)
.usage('<command> [options]')
.command('generate', '快速创建模板，简写 g')
.parse(process.argv)

require('./generate');