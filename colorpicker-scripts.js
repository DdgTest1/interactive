// 页面加载完毕后触发动画
window.onload = function() {
    document.body.style.animation = "fadeIn 1s forwards";  // 激活动画
};

// Function to open the sidebar and show the toggle button
function openSidebar(sidebarNum) {
    const allSidebars = document.querySelectorAll('.sidebar');
    allSidebars.forEach(sidebar => {
        sidebar.classList.remove('open');
        sidebar.style.right = '-250px'; // Close all sidebars
    });

    // 打开选中的sidebar
    const sidebar = document.getElementById('sidebar-' + sidebarNum);
    sidebar.style.right = '0'; // Open the selected sidebar
    sidebar.classList.add('open'); // Add the class to make toggle button visible

    // 移动container，让出空间给sidebar
    const container = document.querySelector('.container');
    container.classList.add('sidebar-open');
}

// Function to close all sidebars when toggle button is clicked
function toggleSidebar() {
    const allSidebars = document.querySelectorAll('.sidebar');
    allSidebars.forEach(sidebar => {
        sidebar.style.right = '-250px'; // Close all sidebars
        sidebar.classList.remove('open'); // Hide the toggle button
    });

    // 恢复container位置
    const container = document.querySelector('.container');
    container.classList.remove('sidebar-open');
}

// 使用 RGB 颜色代码替代十六进制
const colors = [
    "rgb(51, 0, 0)", "rgb(51, 25, 0)", "rgb(51, 51, 0)", "rgb(25, 51, 0)",
    "rgb(0, 51, 0)", "rgb(0, 51, 25)", "rgb(0, 51, 51)", "rgb(0, 25, 51)",
    "rgb(0, 0, 51)", "rgb(25, 0, 51)", "rgb(51, 0, 51)", "rgb(51, 0, 25)",
    "rgb(0, 0, 0)", "rgb(102, 0, 0)", "rgb(102, 51, 0)", "rgb(102, 102, 0)",
    "rgb(51, 102, 0)", "rgb(0, 102, 0)", "rgb(0, 102, 51)", "rgb(0, 102, 102)",
    "rgb(0, 51, 102)", "rgb(0, 0, 102)", "rgb(51, 0, 102)", "rgb(102, 0, 102)",
    "rgb(102, 0, 51)", "rgb(32, 32, 32)", "rgb(153, 0, 0)", "rgb(153, 76, 0)",
    "rgb(153, 153, 0)", "rgb(76, 153, 0)", "rgb(0, 153, 0)", "rgb(0, 153, 76)",
    "rgb(0, 153, 153)", "rgb(0, 76, 153)", "rgb(0, 0, 153)", "rgb(76, 0, 153)",
    "rgb(153, 0, 153)", "rgb(153, 0, 76)", "rgb(64, 64, 64)", "rgb(204, 0, 0)",
    "rgb(204, 102, 0)", "rgb(204, 204, 0)", "rgb(102, 204, 0)", "rgb(0, 204, 0)",
    "rgb(0, 204, 102)", "rgb(0, 204, 204)", "rgb(0, 102, 204)", "rgb(0, 0, 204)",
    "rgb(102, 0, 204)", "rgb(204, 0, 204)", "rgb(204, 0, 102)", "rgb(96, 96, 96)",
    "rgb(255, 0, 0)", "rgb(255, 128, 0)", "rgb(255, 255, 0)", "rgb(128, 255, 0)",
    "rgb(0, 250, 0)", "rgb(0, 255, 128)", "rgb(0, 255, 255)", "rgb(0, 128, 255)",
    "rgb(0, 0, 255)", "rgb(127, 0, 255)", "rgb(255, 0, 255)", "rgb(255, 0, 127)",
    "rgb(255, 255, 255)",

    // ... 添加其他 RGB 颜色
];

const colorPicker = document.getElementById('color-picker');
const colorDisplay = document.getElementById('color-display');
const colorCode = document.getElementById('color-code');

// 创建颜色按钮并添加事件处理
colors.forEach(color => {
    const colorBtn = document.createElement('button');
    colorBtn.style.backgroundColor = color;  // 使用 RGB 颜色
    colorBtn.classList.add('color-btn');
    
    colorBtn.onclick = () => {
        // 移除所有按钮的选中状态
        const allColorBtns = document.querySelectorAll('.color-btn');
        allColorBtns.forEach(btn => {
            btn.classList.remove('selected');  // 移除选中状态
        });

        // 给当前点击的按钮添加选中状态
        colorBtn.classList.add('selected');  // 添加选中状态

        // 更改显示颜色
        colorDisplay.style.backgroundColor = color;  
        colorCode.innerText = `Color Code: ${color}`;  // 显示 RGB 代码
    };

    colorPicker.appendChild(colorBtn);
});

// 启用颜色选择器
function enableColorPicker() {
    const colorPickerContainer = document.querySelector('.color-picker-container');
    const colorButtons = document.querySelectorAll('.color-btn');

    // 启用颜色选择器
    colorPickerContainer.style.pointerEvents = 'auto';  // 启用颜色选择器
    colorPickerContainer.style.opacity = '1';  // 恢复正常透明度

    // 启用单个颜色按钮
    colorButtons.forEach(button => {
        button.style.pointerEvents = 'auto';  // 启用颜色按钮
        button.style.opacity = '1';  // 恢复按钮透明度
    });
}

// 修改原有的 changeImage 函数：在点击图片按钮时启用颜色选择器
function changeImage(sidebarId, buttonIndex) {
    const colorDisplay = document.getElementById('color-display');
    const imagePath = `images/sidebar${sidebarId}-${buttonIndex}.png`;  // 根据 sidebar 和按钮索引加载图片

    // 显示图片
    colorDisplay.style.backgroundImage = `url(${imagePath})`;
    colorDisplay.style.backgroundSize = 'cover';
    colorDisplay.style.backgroundPosition = 'center';

    // 启用颜色选择器
    enableColorPicker();
}

// 为每个 sidebar 按钮添加点击事件来启用颜色选择器
const sidebarBtns = document.querySelectorAll('.sidebar-btn');

sidebarBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // 传递参数给 changeImage 函数
        const sidebarId = btn.closest('.sidebar').id;  // 获取 sidebar 的 id
        changeImage(sidebarId.replace('sidebar-', ''), index + 1);  // 按钮索引从 1 开始
    });
});

// 生成按钮并为其添加事件
function generateSidebarButtons(sidebarId) {
    const sidebar = document.getElementById(sidebarId).querySelector('.sidebar-content');

    // 生成100个按钮
    for (let i = 1; i <= 100; i++) {
        const button = document.createElement('button');
        button.classList.add('sidebar-btn');

        // 设置按钮的图片
        const image = document.createElement('img');
        image.src = `images/p${i}.png`;  // 按钮图片：p1.png, p2.png, ..., p100.png
        image.alt = `p${i}.png`;  // 给按钮添加 alt 属性

        button.appendChild(image);

        // 按钮点击时，显示不同的图片
        button.onclick = () => changeImage(sidebarId.replace('sidebar-', ''), i);  // 点击按钮时显示对应图片
        sidebar.appendChild(button);
    }
}

// 为每个 sidebar 生成按钮
generateSidebarButtons('sidebar-1');  // Sidebar 1
generateSidebarButtons('sidebar-2');  // Sidebar 2
generateSidebarButtons('sidebar-3');  // Sidebar 3
generateSidebarButtons('sidebar-4');  // Sidebar 4
generateSidebarButtons('sidebar-5');  // Sidebar 5
