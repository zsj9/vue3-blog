import { createVNode, render } from 'vue'
import toastTemplate from '@/components/common/toast.vue'
export interface IProps {
  message?: string;
  status?: string;
}

const useToast = (options: IProps): void => {
  const container = document.createElement('div');
  let bgcolor = ""
  if (options.status === 'success') {
    bgcolor = 'bg-green-400';
  } else if (options.status === 'error') {
    bgcolor = 'bg-red-400';
  } else if (options.status === 'warning') {
    bgcolor = 'bg-yellow-400';
  } else if (options.status === 'info') {
    bgcolor = 'bg-gray-400';
  }
  const opt = { ...options, bgcolor };
  const vm = createVNode(toastTemplate, opt); // 创建vNode
  render(vm, container);

  document.body.appendChild(container);       // 添加到body上

  const timer = setTimeout(() => {
    const dom = vm.el as HTMLDivElement;
    if (dom.querySelector('.toast')) {
      dom.querySelector('.toast')?.classList.add('reomve') // 销毁时添加淡入淡出效果
      const t = setTimeout(() => {             // 淡入淡出效果之后删除dom节点
        render(null, container)
        document.body.removeChild(container)
        clearTimeout(t)
      }, 500);
    }
    clearTimeout(timer)
  }, 1000)
}

export default useToast