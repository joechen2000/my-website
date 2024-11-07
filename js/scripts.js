// Optimized JavaScript with enhanced interactivity and smoother visuals

document.addEventListener('DOMContentLoaded', () => {
    const controller = new ScrollMagic.Controller();

    // Add smooth fade-in effect for each section during scroll
    document.querySelectorAll('.section').forEach((section) => {
        const scene = new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(section, 'active')
        .addTo(controller);
    });

    // Add click event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('.interactive');
    interactiveElements.forEach(element => {
        element.addEventListener('click', () => {
            const contentId = element.getAttribute('data-content');
            fetch(`data/${contentId}.json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.parts) {
                        displayModal(data.title, data.parts);
                    } else {
                        displayModal(data.title, [{ heading: '', content: data.content }]);
                    }
                })
                .catch(error => console.error('Error fetching content:', error));
        });
    });

    // Add parallax effect for interactive images within sections
    const parallaxImages = document.querySelectorAll('.interactive img');
    parallaxImages.forEach((img) => {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const imgOffset = img.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition > imgOffset - window.innerHeight && scrollPosition < imgOffset + img.clientHeight) {
                img.style.transform = `translateY(${(scrollPosition - imgOffset) * 0.2}px)`;
            }
        });
    });

    // Smooth horizontal scroll interaction for horizontal container
    const horizontalContainer = document.querySelector('.horizontal-scroll-container');
    horizontalContainer.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            horizontalContainer.scrollBy({
                left: e.deltaY * 2,
                behavior: 'smooth'
            });
        }
    });

    // Display modal with zoom in and out animation
    function displayModal(title, parts) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content animate__animated animate__fadeInDown">
                <span class="close-button">&times;</span>
                <h2>${title}</h2>
                ${parts.map(part => `<h3>${part.heading}</h3><p>${part.content}</p>`).join('')}
            </div>
        `;

        document.body.appendChild(modal);
        
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    }

    function closeModal(modal) {
        modal.classList.remove('animate__fadeInDown');
        modal.classList.add('animate__fadeOutUp');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 500);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        // ScrollMagic 滾動動畫
        const controller = new ScrollMagic.Controller();
    
        // 為每個 section 添加滾動動畫
        document.querySelectorAll('.section').forEach((section) => {
            const scene = new ScrollMagic.Scene({
                triggerElement: section,
                triggerHook: 0.8,
                reverse: false
            })
            .setClassToggle(section, 'active')
            .addTo(controller);
        });
    
        // 為SDG 16互動元素添加點擊事件
        const sdg16Element = document.getElementById('sdg16-link');
        sdg16Element.addEventListener('click', () => {
            // 顯示 SDG 16 的模態框，這裡可以載入具體內容
            const title = "SDG 16：和平與正義制度";
            const content = `
                <p>可持續發展目標16（SDG 16）旨在推動建立和平、正義且強有力的制度，確保所有人都能夠享有基本人權。</p>
                <p>聯合國致力於推動國際合作以維持全球和平，打擊腐敗、減少暴力、確保普遍的司法公平。</p>
                <p><a href="https://sdgs.un.org/goals/goal16" target="_blank">點擊這裡查看聯合國關於SDG 16的行動報告（連結至聯合國官網）</a></p>
            `;
            displayModal(title, [{ heading: '', content: content }]);
        });
    });
    
    // 顯示模態框的函數
    function displayModal(title, parts) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        
        let contentHtml = `<h2>${title}</h2>`;
        parts.forEach(part => {
            contentHtml += `<h3>${part.heading}</h3><p>${part.content}</p>`;
        });
    
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                ${contentHtml}
            </div>
        `;
    
        document.body.appendChild(modal);
    
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
    


    // Interactive call-to-action button animation
    const ctaButton = document.querySelector('.call-to-action button');
    ctaButton.addEventListener('mouseover', () => {
        gsap.to(ctaButton, { scale: 1.1, backgroundColor: '#ff8800', duration: 0.3 });
    });
    ctaButton.addEventListener('mouseout', () => {
        gsap.to(ctaButton, { scale: 1, backgroundColor: '#ffaa00', duration: 0.3 });
    });
    ctaButton.addEventListener('click', () => {
        gsap.to(ctaButton, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
        setTimeout(() => {
            alert('感謝您支持人權行動！');
        }, 200);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 使用 ScrollMagic 建立滾動控制器
    const controller = new ScrollMagic.Controller();

    // 為每個 section 添加滾動動畫
    document.querySelectorAll('.section').forEach((section) => {
        const scene = new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.8,
            reverse: false
        })
        .setClassToggle(section, 'active')
        .addTo(controller);
    });


    

    // 為互動元素添加點擊事件
    const sdg16Link = document.getElementById('sdg16-link');
    sdg16Link.addEventListener('click', () => {
        // 可以在這裡定義要載入的具體內容
        const contentTitle = "SDG 16：和平與正義制度";
        const contentParts = [
            {
                heading: "和平與正義制度",
                content: "SDG 16 旨在促進和平與包容的社會，以實現可持續發展，並為所有人提供司法保護。這一目標還強調需要建立有效、負責任和包容的機構，以促進包容性決策。"
            },
            {
                heading: "聯合國的行動",
                content: "聯合國為推進和平與正義制度實施了許多行動，這些行動包括打擊腐敗、減少武裝衝突、保護人權和加強司法制度等。"
            }
        ];

        // 調用函數顯示內容
        displayModal(contentTitle, contentParts);
    });

    function displayModal(title, parts) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        let contentHtml = `<h2>${title}</h2>`;
        parts.forEach(part => {
            contentHtml += `<h3>${part.heading}</h3><p>${part.content}</p>`;
        });

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                ${contentHtml}
            </div>
        `;

        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
});
