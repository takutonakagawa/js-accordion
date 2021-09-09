(() =>{

    class Accordion {
        // 初期化
        constructor(obj){
            console.log(obj)
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            const triggerLen = $trigger.length;
            let i = 0;
            while(i < triggerLen){
            $trigger[i].addEventListener('click', (e) => this.clickHandler(e));
            i++;
            }
        }
            
        clickHandler = (e) =>{
            e.preventDefault();
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        }
    }

    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    });

    const dummyAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a'
    });

    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName: 'dt'
    });



})();