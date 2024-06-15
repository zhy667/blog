document.addEventListener('DOMContentLoaded', () => {
    // 查找具有类名 'ng-tns-c1798928316-91' 的 <mat-label> 元素
    const target = document.querySelector('.ng-tns-c1798928316-91');
  
    // 检查目标元素是否存在
    if (target) {
      // 创建一个按钮元素
      const ele = document.createElement('button');
      ele.innerText = 'click me';
  
      // 添加点击事件监听器
      ele.addEventListener('click', () => {
        alert('The button was clicked');
        document.getElementById('demo').innerHTML = 'Hello World';
      });
  
      // 将按钮插入到目标元素之后
      target.insertAdjacentElement('afterend', ele);
    } else {
      console.error('找不到元素: .ng-tns-c1798928316-91');
    }
  });
  