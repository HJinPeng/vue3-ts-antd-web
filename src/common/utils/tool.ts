/**
 * 创建一个“构造符合bem规范css类名”的函数
 * @param {String} ns - 前缀
 * @return {Function} 构造符合bem规范css类名的函数
 * @example const bem = createBem('button');
 *          bem(); // 'x-button' - 返回命名空间
 *          bem('icon'); // 'x-button__icon' - 子元素
 *          bem(':disabled'); // 'x-button--disabled' - 冒号代表修饰符
 *          bem(':primary', 'icon', ':hover'); // 'x-button--primary__icon--hover' - 任意数量的参数
 *          bem({primary: true}); // 'x-button x-button--primary' - 对象类型代表可选修饰符
 *          bem({primary: true, focus: true, plain: false}, 'icon'); // 'x-button__icon x-button--primary__icon x-button--focus__icon' - 多个可选修饰符
 */

type BemParams = Array<string | { [key: string]: boolean }>;
export function createBem(...ns: BemParams): (...params: BemParams) => string {
  const _ns = resolve("x-" + ns[0], ...ns.slice(1));
  return function (...params: BemParams) {
    return resolve(_ns, ...params);
  };
}

function resolve(ns: string, ...params: BemParams): string {
  let plain = ns,
    whole: string[] = [];
  for (const p of params) {
    if (p) {
      if (typeof p === "string") {
        const name = p.charAt(0) === ":" ? `--${p.slice(1)}` : `__${p}`;
        plain += name;
        whole = whole.map((item) => item + name);
      } else {
        Object.keys(p).forEach((name) => {
          if (name && p[name]) {
            whole.push(`${plain}--${name}`);
          }
        });
      }
    }
  }
  return plain + (whole.length ? " " : "") + whole.join(" ");
}
