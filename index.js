window.onload = function(){

    var pages = ["mainpage", "workspage"];
    var visiblePage = null;

    function toggleVisibility(pageId){
        if(visiblePage === pageId) {
            visiblePage = null;
        } else {
            visiblePage = pageId
        }

        hideNonVisiblePage();
    }

    function hideNonVisiblePage() {
        
        var pagesId, paged;

        for(var i = 0; i < pages.length; i++) {
            pagesId = pages[i];
            paged = document.getElementById(pagesId);

            if(visiblePage === pagesId) {
                paged.style.display = 'block';
            } else {
                paged.style.display = 'none';
            }
        }
    }
}