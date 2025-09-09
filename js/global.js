$(document).ready(function(){

  function animateOnScroll(element, animationClass) {
        // Deixa os elementos invisíveis no início
        $(element).addClass('animate-on-scroll');

        $(window).on('scroll load', function() {
            $(element).each(function() {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();

                // Quando o elemento entra na tela
                if(windowBottom > elementTop + 50) { // 50px de folga
                    if(!$(this).hasClass('animate__animated')) {
                        $(this).css('opacity', 1); // torna visível
                        $(this).addClass('animate__animated ' + animationClass);
                    }
                }
            });
        });
    }
  
  animateOnScroll('.content-img-perfil', 'animate__fadeInUp');
  animateOnScroll('.p-resume', 'animate__fadeInUp');
  animateOnScroll('.row-data-port', 'animate__fadeInUp');
  animateOnScroll('.exp1', 'animate__fadeInRight');
  animateOnScroll('.exp2', 'animate__fadeInLeft');
  animateOnScroll('.exp3', 'animate__fadeInRight');
  animateOnScroll('.row-port', 'animate__fadeInUp');
  animateOnScroll('.content-item-blog', 'animate__fadeInUp');

	createCanv("83%",0.83,0.17, document.getElementById("canvas1"));
	createCanv("88%",0.88,0.12, document.getElementById("canvas2"));
	createCanv("89%",0.89,0.11, document.getElementById("canvas3"));
	createCanv("90%",0.90,0.10, document.getElementById("canvas4"));

	$(".icons-close-portiflio-popup").on("click", function(){
		$(".popup-fullscreen").fadeOut();
	});
	
	$(".row-port div").on("click", function(){
		$(".popup-fullscreen").fadeIn();
	});

  $(window).on('scroll', function () {
    var scrollPos = $(document).scrollTop();

    $('.container-fluid').each(function () {
      var top = $(this).offset().top - 100; // margem de tolerância
      var bottom = top + $(this).outerHeight();
      var id = $(this).attr('id');

      if (scrollPos >= top && scrollPos <= bottom) {
        $('.nav-header-prt li a').removeClass('menu-active');
        $('.nav-header-prt li a[href="#' + id + '"]').addClass('menu-active');
      }
      if (scrollPos == 0) {
        $('.nav-header-prt li a').removeClass('menu-active');
        $('.nav-header-prt li:first-child() a').addClass('menu-active');
      }
    });
  });

  $(".fa-menu").on("click", function(){
    $(".col-nav-header").toggle("slow");
  });

  $('.btn-topo').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800); // 800ms = duração da animação
  });

  var elem1 = $(".content-destaque-bg");
  elem1.children("h1").addClass("animated fadeInLeftBig");
  elem1.children("p").addClass("animated fadeInRightBig");
  elem1.children(".content-icons-bg").addClass("animated fadeInUpBig");

  var poster = $(".img-port-poster"),
      projectTitle = $(".title-project-poster"),
      bread = $(".breadcumb-portifolio"),
      textPost = $(".text-post-poster"),
      linkPort = $(".link-port");

  $(".port1 div:nth-child(1) div").on("click", function(){
    poster.attr("src", "img/rankel-tumb-edt.png");
    projectTitle.html("Website Rankeltech");
    bread.html('<i class="fa-solid fa-calendar-days"></i> 05 de maio de 2025  <i class="fa-solid fa-user"></i> Marcos Rankel');
    textPost.html("O site rankel.com.br foi desenvolvido para a empresa Rankeltech ferramentas industriais totalmente pensada para facilitar o acesso aos seus produtos e soluções de alta qualidade. Com visual profissional e responsivo, você encontra tudo que precisa de forma rápida, tanto no computador quanto no celular.  O site tá bonito, rápido e fácil de usar. Tudo feito pra você achar o que precisa sem enrolação. Dá uma passada lá e veja o meu trabalho.");
    linkPort.attr("href", "http://rankel.com.br/");
  });

  $(".port1 div:nth-child(2) div").on("click", function(){
    poster.attr("src", "img/personal-tumb.png");
    projectTitle.html("Personal Portifólio");
    bread.html('<i class="fa-solid fa-calendar-days"></i> 03 de junho de 2023  <i class="fa-solid fa-user"></i> Júlio César');
    textPost.html("Esse é um modelo de template de uma página pessoal de portfólio moderna, leve e 100% responsiva — perfeita para apresentar seus trabalhos de forma profissional. O design valoriza seu conteúdo e deixa tudo organizado com estilo. Ideal para designers, desenvolvedores e criativos que querem marcar presença online.");
    linkPort.attr("href", "https://portifoliohtml5css.vercel.app/");
  });

  $(".port1 div:nth-child(3) div").on("click", function(){
    poster.attr("src", "img/esg-tumb.png");
    projectTitle.html("Website ESG Sustentável");
    bread.html('<i class="fa-solid fa-calendar-days"></i> 08 de maio de 2025  <i class="fa-solid fa-user"></i> Hiago Akimoto');
    textPost.html("Site desenvolvido para a ESG Sustentável, empresa focada em soluções ambientais, sociais e de governança corporativa. A plataforma apresenta de forma clara e profissional os serviços, projetos e valores da marca, com design moderno e responsivo. Pensado para transmitir credibilidade e compromisso com a sustentabilidade, o site é fácil de navegar em qualquer dispositivo. Inclui seções institucionais, portfólio de projetos e canais de contato direto. Um espaço digital alinhado aos princípios ESG e à inovação consciente.");
    linkPort.attr("href", "https://esgsustentavel.vercel.app/");
  });

  $(".port2 div:nth-child(1) div").on("click", function(){
    poster.attr("src", "img/wordcode-tumb.png");
    projectTitle.html("Blog Wordcoding");
    bread.html('<i class="fa-solid fa-calendar-days"></i> 23 de abril de 2023  <i class="fa-solid fa-user"></i> Júlio César');
    textPost.html("Este é o meu blog pessoal, desenvolvido por mim na plataforma Blogger com um template exclusivo, pensado nos mínimos detalhes. Aqui compartilho meus conhecimentos, dicas e tutoriais sobre o mundo da tecnologia, de forma prática e acessível. O layout foi criado para oferecer uma leitura agradável, com foco no conteúdo e navegação intuitiva. Tudo foi feito com dedicação para entregar valor a quem quer aprender e se atualizar na área. Se você curte tecnologia, seja bem-vindo — esse espaço é feito pra você!");
    linkPort.attr("href", "https://wordcoding.blogspot.com/");
  });

  $(".port2 div:nth-child(2) div").on("click", function(){
    poster.attr("src", "img/travels-tumb.png");
    projectTitle.html("Template Travels");
    bread.html('<i class="fa-solid fa-calendar-days"></i> 17 de agosto de 2025  <i class="fa-solid fa-user"></i> Júlio César');
    textPost.html("Apresentamos o template exclusivo desenvolvido para a Travels, uma empresa fictícia de viagens criada para inspirar aventuras ao redor do mundo. Com design moderno, visual envolvente e totalmente responsivo, o layout foi pensado para destacar destinos, pacotes promocionais e experiências únicas.");
    linkPort.attr("href", "https://travels-fulltemplate.vercel.app/");
  });

  $(".port2 div:nth-child(3) div").on("click", function(){
    poster.attr("src", "img/rs-tumb.png");
    projectTitle.html("Website RS Cabeceiras");
    bread.html('<i class="fa-solid fa-calendar-days"></i> 28 de janeiro de 2022  <i class="fa-solid fa-user"></i> Rosbon Santos');
    textPost.html("Site desenvolvido para uma fábrica especializada em cabeceiras, com foco em apresentar seus produtos de forma elegante e profissional. O layout foi pensado para valorizar cada modelo com fotos em alta qualidade, informações claras e uma navegação fácil, tanto no desktop quanto no celular. Além disso, o site conta com uma área institucional, catálogo completo e canal de contato direto com a fábrica.");
    linkPort.attr("href", "https://rscabeceirasestofadas.blogspot.com/");
  });

});
	

function isMobile(){
	return $(window).outerWidth() < 768;
}

function createCanv(percent, decimal1, decimal2, elem){
	const canvas = elem;
  const ctx = canvas.getContext("2d");

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;
  const borderWidth = 4;

  // Círculo de fundo com cor #212b36
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius - borderWidth / 2, 0, 2 * Math.PI);
  ctx.fillStyle = "#212b36";
  ctx.fill();

  // Arco verde (83%)
  const startAngle = -0.5 * Math.PI;
  const greenAngle = decimal1 * 2 * Math.PI;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, startAngle + greenAngle);
  ctx.strokeStyle = "#41b548";
  ctx.lineWidth = borderWidth;
  ctx.stroke();

  // Arco branco (17%)
  const whiteAngle = decimal2 * 2 * Math.PI;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle + greenAngle, startAngle + greenAngle + whiteAngle);
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = borderWidth;
  ctx.stroke();

  // Texto central "83%"
  ctx.font = "28px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(percent, centerX, centerY);
}

$(window).on('load', function () {
    $(".overlaypt").remove();
  });

  