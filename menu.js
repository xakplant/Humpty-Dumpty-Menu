


var ANIT_menu = function(){
    
    var catalog, list;
    
    this.rawSelector = '[data-type="menu-btn"]';
    this.selector = this.rawSelector.substring(1,this.rawSelector.length-1);
    
        
    
    this.btn = document.querySelector(this.rawSelector);
    this.menu = document.querySelector('.nav-content');
    this.switch = false;
    
    this.list = document.querySelector('.nav-menu');
    this.catalog = document.querySelector('.dpropdown-c');
    this.btnBack = document.querySelector('[data-type="btn-back"]');
    
    this.openMenu();
    
    this.dropDown();

    
    // Перелистнуть каталог
    
    catalog = this.catalog;
    
    catalog.addEventListener('click', function(){
        
        ANIT_menu.list.style.marginLeft = '-100%';
        ANIT_menu.list.classList.add('child-none');
        
        
    }, ANIT_menu);
    
    
    this.btnBack.addEventListener('click', function(){
        
        ANIT_menu.list.style.marginLeft = '0%';
        ANIT_menu.list.classList.remove('child-none');
        
        
    }, ANIT_menu);
    
}

ANIT_menu.prototype.openMenu = function(){
    // Открыть-закрыть меню
    btn = this.btn; //Кнопка открывания и закрывания меню
    list = this.list; // Контейнер с меню
    catalog = this.catalog // кнопка открытия меню каталога
    
    
    ANIT_menu = this;


    function openMenu(){
        if(ANIT_menu.switch === false){
            ANIT_menu.menu.classList.add('active');
            

            
            ANIT_menu.switch = true;
            
            document.body.style.height = window.outerHeight + 'px';
            document.body.style.overflow = 'hidden';
            
        }  else {
           ANIT_menu.menu.classList.remove('active');

            ANIT_menu.switch = false;
            document.body.style.height = '';
            document.body.style.overflow = '';
        }  
    }
    
    btn.addEventListener('click', openMenu, ANIT_menu);
    
    
    function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };
    
    let x0 = null;

    function lock(e) { x0 = unify(e).clientX };
    
    let i = 0;

    function move(e) {  
      if(x0 || x0 === 0) {
        let dx = unify(e).clientX - x0, s = Math.sign(dx);
        if((i > 0 || s < 0))
          openMenu(ANIT_menu);
        x0 = null
      }
    };
    
    
    list.addEventListener('touchstart', lock, false);
    list.addEventListener('touchend', move, ANIT_menu);

    
}
ANIT_menu.prototype.dropDown = function(){
    
    
    var tree = document.querySelector('[data-type="anit-dropdown"]');
    
    
    function ANIT_dropdown(){
        
        
        if(event.target = 'li.dropdown'){
            if(event.target.classList.contains('active')){
                
                event.target.classList.remove('active')
                
            } else {
                event.target.classList.add('active')
            }
        }
        
    
    }
    
    
    tree.addEventListener('click', ANIT_dropdown, false);

    
}

