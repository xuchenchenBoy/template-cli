const fs = require('fs-extra')
const chalk = require('chalk')
const path = require('path')

const copyModal = (name) => {
  const pageDir = path.join(process.cwd(), `./src/models/${name}`);
  fs.pathExists(pageDir, (existsErr, exists) => {
    if (existsErr) {
      console.log(existsErr)
      return;
    }

    if (exists) {
      console.log(chalk.red('文件已存在，请更换名称'))
    } else {
      fs.copy(
        path.join(__dirname, './template/model'), 
        pageDir, 
        copyErr => {
          if (copyErr) {
            console.log(copyErr)
            return;
          }
          console.log(chalk.gray(`${pageDir} 创建成功`))
        }
      )
    }
  });
}

const copyPage = (name) => {
  const pageFile = path.join(process.cwd(), `./src/pages/${name}/index.vue`);
  fs.pathExists(pageFile, (existsErr, exists) => {
    if (existsErr) {
      console.log(existsErr)
      return;
    }

    if (exists) {
      console.log(chalk.red('文件已存在，请更换名称'))
    } else {
      const pageCreate = require(path.join(__dirname, './template/page/index.js'))
      const data = pageCreate.create(name)
      fs.outputFile(pageFile, data, function(err) {
        if (err) {
          console.log(err)
          return;
        }
        console.log(chalk.gray(`${pageFile} 创建成功`))
      })
    }
  });
}

const copyRoute = (name) => {
  const pageFile = path.join(process.cwd(), `./src/routes/${name}/index.js`);
  fs.pathExists(pageFile, (existsErr, exists) => {
    if (existsErr) {
      console.log(existsErr)
      return;
    }

    if (exists) {
      console.log(chalk.red('文件已存在，请更换名称'))
    } else {
      const routeCreate = require(path.join(__dirname, './template/route/index.js'))
      const data = routeCreate.create(name)
      fs.outputFile(pageFile, data, function(err) {
        if (err) {
          console.log(err)
          return;
        }
        console.log(chalk.gray(`${pageFile} 创建成功`))
      })
    }
  });
}

const copyService = (name) => {
  const pageFile = path.join(process.cwd(), `./src/services/${name}/index.js`);
  fs.pathExists(pageFile, (existsErr, exists) => {
    if (existsErr) {
      console.log(existsErr)
      return;
    }

    if (exists) {
      console.log(chalk.red('文件已存在，请更换名称'))
    } else {
      fs.copy(
        path.join(__dirname, './template/service/index.js'), 
        pageFile, 
        copyErr => {
          if (copyErr) {
            console.log(copyErr)
            return;
          }
          console.log(chalk.gray(`${pageFile} 创建成功`))
        }
      )
    }
  });
}

exports.run = function(type, name) {
  try {
    switch (type) {
      case 'page': {
        copyPage(name);
        break;
      };
  
      case 'route': {
        copyRoute(name);
        break;
      };
  
      case 'service': {
        copyService(name);
        break;
      };
  
      case 'model': {
        copyModal(name)
        break;
      };
  
      case 'all': {
        copyPage(name);
        copyRoute(name);
        copyService(name);
        copyModal(name);
        break;
      };
  
      default: {
        console.log(chalk.red('ERROR: 未知文件类型错误，请联系但丁处理'))
      }
    }
  } catch (err) {
    console.log('请联系但丁，错误信息如下：', err)
  }
}

