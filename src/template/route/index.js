
exports.create = function(name) {
  return `
const Component = () => import('@/pages/${name}/index.vue');

const arr = [
  {
    path: '/${name}',
    name: '${name}',
    component: Component,
    meta: {
      auth: false,
    },
  }
];

export default arr;
  `
}

