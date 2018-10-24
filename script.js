var dataArr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];


    function barChart(arr, containerId) {
        /* Получаем контейнер */
    var chartContainer = getDiv(containerId);
    
        /* Получаем параметры контейнера */
    var containerWidth = chartContainer.scrollWidth;
    var containerHeight = chartContainer.scrollHeight;
        /* Рассчёт ширины столбца */
    var barWidth = parseInt(containerWidth / arr.length) - 2;

      for(var i = 0; i < arr.length; i++) {
            /* создаём div для столбца */
        var divColumn = document.createElement("div");
        var pColumn = document.createElement("p");
            /* задаём класс из стилей */
        divColumn.setAttribute("class", "bar");
            /* рассчитываем отступ между столбцами */
        divColumn.style.marginLeft = parseInt( i * 2 + i * barWidth) + "px";
            /* рассчитываем высоту столбца */ 
        divColumn.style.height = parseInt(arr[i])*10 + "px";
            /* и ширину */
        divColumn.style.width = parseInt(barWidth) + "px";
            /* регулируем отступ от верха контейнера путём невероятных экспериментов */
        divColumn.style.top = (containerHeight - parseInt(arr[i])) - (parseInt(arr[i])*9) + "px"; /* тут небольшая магия */
            /* задаём градацию цветов с помощью функции, написанной ниже */
        divColumn.style.background = barColor(arr[i]);
            /* добавляем  к констейнеру */
        chartContainer.appendChild(divColumn);
        
      }
      return false;
    }

    /* Градация по цвету в зависимости от значения */
    function barColor(i) {
        if (i <= 5) {
            return "green";
        } else if (i > 5 && i <= 10) {
            return "yellow";
        } else {
            return "red";
        }
    }

    function getDiv(id) {
        return document.getElementById(id); 
    }

    
barChart(dataArr, "container");