$(function(){

    var $container = $('#main-menu');

    function handleMenu() {

        function toggleInfoPanel(anchor) {
          var infoPanelEl = $(this).siblings('.menu-item-info');
          infoPanelEl.toggleClass('is-visible');
        }

        $('.menu-item > a')
          .mouseover(toggleInfoPanel)
          .mouseout(toggleInfoPanel);
    }

    function buildMenuItem(data) {
        var $el,
            $infoPanel;

        $el = $('<li class="menu-item">' +
                    '<a href="#">' + data.title + '</a>' +
                    '<div class="menu-item-info"></div>' +
                '</li>' );

        if(data.infoPanel && data.infoPanel.length) {
            $infoPanel = $('div.menu-item-info', $el);
            data.infoPanel.forEach(function(entry) {
                $infoPanel.append("<img class='menu-item-info-image' src='" + entry.image + "'>");
            });
        }
        return $el;
    }

    $.get('api/menu.json', function(data){
        //data has been loaded.
        //console.log(data);

        //clean the content of the UL element first
        $container.empty();

        data.forEach(function(menuItem) {
            $container.append(buildMenuItem(menuItem));
        });

        $container.append("<div class='cf'></div>");

        handleMenu();

    }, 'json');

});
