let selectedGlassSample = '';
let selectedScene = '';
let selectedColorOption = ''; // 用来记录选中的颜色选项

// 场景选择事件
document.querySelectorAll('.scenes .btn').forEach(button => {
    button.addEventListener('click', (event) => {
        selectedScene = event.target.src; // 记录选择的场景
        console.log('选中的场景:', selectedScene);

        // 清空玻璃样本和颜色选项
        selectedGlassSample = '';
        selectedColorOption = '';

        updateSidebar();  // 更新sidebar，清空颜色选项
        updateDisplay();  // 更新展示区域

        // 清空之前的颜色选项
        const sidebarButtons = document.querySelector('.sidebar-buttons');
        sidebarButtons.innerHTML = '';  // 清除sidebar中的按钮
    });
});

// 玻璃样本选择事件
document.querySelectorAll('.glass-samples .btn').forEach(button => {
    button.addEventListener('click', (event) => {
        if (!selectedScene) {  // 如果没有选择场景
            alert('Please select a scene first..');  // 提示用户选择场景
            return;  // 阻止继续执行
        }
        selectedGlassSample = event.target.src; // 记录选择的玻璃样本
        console.log('选中的玻璃样本:', selectedGlassSample);
        updateSidebar(); // 更新sidebar显示颜色选项
        selectedColorOption = '';  // 清空颜色选项
    });
});

// 更新sidebar中的颜色选项
function updateSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarButtons = sidebar.querySelector('.sidebar-buttons');

    // 清空之前的按钮
    sidebarButtons.innerHTML = '';

    // 颜色选项的映射数据
    const colorOptions = {
        s1: {
            'p1': ['images/wc3.png', 'images/wc4.png'],
            'p2': ['images/wc1.png', 'images/wc2.png'],
            'p3': ['showroomcolor/Modern_Kitchen_Backsplash_6-3_black.png',
                    'showroomcolor/Modern_Kitchen_Backsplash_6-3_grey.png',
                    'showroomcolor/Modern_Kitchen_Backsplash_6-3_red.png',
                    'showroomcolor/Modern_Kitchen_Backsplash_6-3_turquoise.png',
                    'showroomcolor/Modern_Kitchen_Backsplash_6-3_yellowOchre.png',
                   ],
            'p4': [
                'showroomcolor/Bathroom_red.png',
                'showroomcolor/Bathroom_Turquoise.png'
            ],
            'p5': [
                'showroomcolor/Bathroom_red.png',
                'showroomcolor/Bathroom_Turquoise.png'
            ],
            'p6': [
                'showroomcolor/Modern_Kitchen_Backsplash_6-6_Black.png',
                'showroomcolor/Modern_Kitchen_Backsplash_6-6_OliveGreen.png',
                'showroomcolor/Modern_Kitchen_Backsplash_6-6_White_BlackDot.png',
                'showroomcolor/Modern_Kitchen_Backsplash_6-6_White_RedDot.png',
            ],
          'p7': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p8': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p9': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p10': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p11': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p12': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p13': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p14': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p15': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p16': [
                'showroomcolor/Modern_Kitchen_Backsplash_6-16_GreenishTone.png',
                'showroomcolor/Modern_Kitchen_Backsplash_6-16_GreyishTone.png',
                'showroomcolor/Modern_Kitchen_Backsplash_6-16_OrangeBrown.png',
            ],

        },
        s2: {
            'p1': ['images1/wrc3.png', 'images1/wrc4.png'],
            'p2': ['images1/wrc1.png', 'images1/wrc2.png'],
            'p3': ['showroomcolor/Wine Cellar_6-3_FrostedWhite.png', 
                    'showroomcolor/Wine Cellar_6-3_Gold.png',
                    'showroomcolor/Wine Cellar_6-3_GoldSemiTrans.png',
                    'showroomcolor/Wine Cellar_6-3_RedOxide.png',
                    'showroomcolor/Wine Cellar_6-3_DarkGrey.png',
                    'showroomcolor/Wine Cellar_6-3_RedSemiTrans.png',
            ],
        },
        s3: {
            'p1': ['images2/a1.png', 'images2/a4.png'],
            'p2': ['images2/a3.png', 'images2/a2.png'],
            'p3': [
                'showroomcolor/Bathroom_6-3_Frosted.png',
                'showroomcolor/Bathroom_6-3_grey.png',
                'showroomcolor/Bathroom_6-3_red.png',
                'showroomcolor/Bathroom_6-3_Turquoise.png',
                'showroomcolor/Bathroom_6-3_White.png'
            ],
            'p4': [
                'showroomcolor/Bathroom_red.png',
                'showroomcolor/Bathroom_Turquoise.png'
            ],
            'p5': [
                'showroomcolor/Bathroom_red.png',
                'showroomcolor/Bathroom_Turquoise.png'
            ],
            'p6': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p7': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p8': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p9': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p10': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p11': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p12': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p13': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p14': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p15': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p16': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p17': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],

            'p18': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],

            'p19': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p20': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p21': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p22': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p23': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p24': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p25': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png']
        },

        s4: {
            'p1': ['images2/a1.png', 'images2/a4.png'],
            'p2': ['images2/a3.png', 'images2/a2.png'],
            'p3': [
                'showroomcolor/Railing_6-3__White.png',
                'showroomcolor/Railing_6-3_FrostedWhite.png',
                'showroomcolor/Railing_6-3_RedSemiTrans.png',
                'showroomcolor/Railing_6-3_YellowOchre.png',
            ],
            'p4': [
                'showroomcolor/Bathroom_red.png',
                'showroomcolor/Bathroom_Turquoise.png'
            ],
            'p5': [
                'showroomcolor/Bathroom_red.png',
                'showroomcolor/Bathroom_Turquoise.png'
            ],
            'p6': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p7': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p8': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p9': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p10': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p11': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p12': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p13': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p14': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p15': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p16': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p17': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],

            'p18': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],

            'p19': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p20': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p21': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p22': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p23': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p24': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p25': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png']
        },

        s5: {
            'p1': ['images2/a1.png', 'images2/a4.png'],
            'p2': ['images2/a3.png', 'images2/a2.png'],
            'p3': [
                'showroomcolor/Partition_6-3_Beige.png',
                'showroomcolor/Partition_6-3_FrostedWhite.png',
                'showroomcolor/Partition_6-3_RedSemiTrans.png',
                'showroomcolor/Partition_6-3_White.png'
            ],
            'p4': [
                'showroomcolor/Bathroom_red.png',
                'showroomcolor/Bathroom_Turquoise.png'
            ],
            'p5': [
                'showroomcolor/Partition_6-3_Beige.png',
                'showroomcolor/Partition_6-3_FrostedWhite.png',
                'showroomcolor/Partition_6-3_RedSemiTrans.png',
                'showroomcolor/Partition_6-3_White.png'
            ],
            'p6': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p7': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p8': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p9': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p10': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p11': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p12': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p13': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p14': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p15': [
                'showroomcolor/Bathroom_6-6_BronzeGlass.png',
                'showroomcolor/Bathroom_6-6_EuroGreyGlass.png',
                'showroomcolor/Bathroom_6-6_GreenGlass.png',
                'showroomcolor/Bathroom_6-6_White&FrostedWhiteBKGD.png',
                'showroomcolor/Bathroom_6-6_yellowOchre.png',
                'showroomcolor/Bathroom_6-6_White.png'
            ],
            'p16': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p17': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],

            'p18': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],

            'p19': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p20': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p21': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p22': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p23': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p24': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png'
            ],
            'p25': [
                'showroomcolor/Bathroom_6-16_EarthTone.png',
                'showroomcolor/Bathroom_6-16_GreyishBlue.png',
                'showroomcolor/Bathroom_6-16_LightFrostedWhite.png',
                'showroomcolor/Bathroom_6-16_White&FrostedWhite.png']

             // 更多玻璃样本映射...
        }
    };

    // 根据选择的场景和玻璃样本加载颜色选项
    if (selectedScene && selectedGlassSample) {
        const sceneKey = selectedScene.includes('s1') ? 's1' : selectedScene.includes('s2') ? 's2' : selectedScene.includes('s3') ? 's3' : selectedScene.includes('s4') ? 's4' :'s5';
        const glassSampleKey = selectedGlassSample.split('/').pop().split('.')[0];  // 提取玻璃样本ID (例如 '6-1')

        const selectedColors = colorOptions[sceneKey] && colorOptions[sceneKey][glassSampleKey];

        if (selectedColors) {
            selectedColors.forEach((color) => {
                addSidebarButton(color); // 动态添加颜色选项按钮
            });
        }
    }

    // 显示sidebar
    sidebar.classList.add('show');
    const displayArea = document.querySelector('.display-area');
    displayArea.classList.add('shrink');
}

// 向sidebar中添加按钮
function addSidebarButton(imageSrc) {
    const sidebarButtons = document.querySelector('.sidebar-buttons');
    const button = document.createElement('button');
    button.classList.add('btn');
    const img = document.createElement('img');
    img.src = imageSrc;
    button.appendChild(img);
    button.addEventListener('click', () => {
        selectedColorOption = imageSrc; // 更新选中的颜色选项
        console.log('选中的颜色选项:', selectedColorOption); 
        updateDisplay(); // 更新展示区域
    });
    sidebarButtons.appendChild(button);
}

// 页面跳转函数
function goToPage(page) {
    window.location.href = page;  // 跳转到指定的页面
}

// 关闭sidebar功能
document.querySelector('#closeSidebar').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const displayArea = document.querySelector('.display-area');

    // 关闭sidebar时，移除show类并恢复展示区域大小
    sidebar.classList.remove('show');
    displayArea.classList.remove('shrink');
});

// 更新展示区域（图像展示）
function updateDisplay() {
    const displayArea = document.querySelector('.display-area');

    // 清除所有的前景和背景图像
    displayArea.innerHTML = '';

    if (selectedScene) {
        // 设置场景背景图
        const overlayScene = document.createElement('img');
        overlayScene.src = selectedScene;
        overlayScene.style.position = 'absolute';
        overlayScene.style.maxWidth = '80%';  // 场景图和玻璃样本图大小一致
        overlayScene.style.maxHeight = '80%';
        overlayScene.style.objectFit = 'contain';
        overlayScene.style.zIndex = '1'; // 确保场景在底层
        displayArea.appendChild(overlayScene);  // 添加场景到展示区
    }

    if (selectedGlassSample && selectedColorOption) {
        // 如果玻璃样本和颜色选项都选择了，展示玻璃样本
        const overlayGlass = document.createElement('img');
        overlayGlass.src = selectedColorOption; // 使用颜色选项作为玻璃样本
        overlayGlass.style.position = 'absolute';
        overlayGlass.style.maxWidth = '80%';
        overlayGlass.style.maxHeight = '80%';
        overlayGlass.style.zIndex = '2';  // 确保玻璃样本图像在场景之上
        overlayGlass.style.objectFit = 'contain';  // 保持比例显示
        displayArea.appendChild(overlayGlass);  // 添加玻璃样本到展示区
    }
}

// 获取弹出窗口和关闭按钮
const popupWindow = document.getElementById("popupWindow");
const closePopupBtn = document.getElementById("closePopupBtn");
const newBtn = document.querySelector(".new-btn");

// 点击 new-btn 时，显示弹出窗口
newBtn.addEventListener("click", function() {
    popupWindow.style.display = "flex"; // 显示弹出窗口
});

// 点击关闭按钮时，隐藏弹出窗口
closePopupBtn.addEventListener("click", function() {
    popupWindow.style.display = "none"; // 隐藏弹出窗口
});

// 点击遮罩区域时，也关闭弹出窗口
popupWindow.addEventListener("click", function(e) {
    if (e.target === popupWindow) {
        popupWindow.style.display = "none"; // 隐藏弹出窗口
    }
});
