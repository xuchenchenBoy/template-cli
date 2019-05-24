#!/usr/bin/env node

const program = require('commander')
const generate = require('../src/generate')
const inquirer = require('inquirer')

program
  .command('generate')
  .description('快速创建页面所需脚本文件')
  .alias('g')
  .action(function() {
    const choices = ['all', 'model', 'route', 'page', 'service']
    const questions = [
      {
        type: 'list',
        name: 'type',
        message: '请选择要创建的模板?',
        choices
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入文件名称'
      }
    ]
    inquirer.prompt(questions)
      .then(answers => {
        const { type, name } = answers;
        generate.run(type, name)
      })
  });
  program.parse(process.argv)