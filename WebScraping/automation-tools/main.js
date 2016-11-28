var casper = require('casper').create({
    pageSettings:{
        userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36" 
    }
});

casper.start('https://registro.upb.edu.co/SIGAAPDN/bwlkoids.P_FacIDSel',function(){
    this.fill('form[name=loginform]',{
        'sid': '000008716',
        'PIN': '475893'
    },false);
});
casper.then(function() {
    // Click on 1st result link
    this.click('input[value=Acceso]');
});
casper.waitForSelector('table.menuplaintable',function() {
    this.clickLabel('Docentes y Tutores', 'b');
});
casper.waitForSelector('table.menuplaintable',function() {
    this.clickLabel('Menú de asesores', 'b');
});
casper.waitForSelector('table.menuplaintable',function() {
    this.clickLabel('Seleccionar Alumno', 'a');
});
casper.waitForSelector('table.menuplaintable',function() {
    this.clickLabel('Selección de ID del Alumno', 'a');
});
casper.waitForSelector('table.plaintable',function(){
    this.evaluate(function() {
        seleccion = document.querySelector('select')
        seleccion.value = "201620"
    });
});
casper.then(function() {
    this.click('input[value=Enviar]');
});
casper.waitForSelector('table.plaintable', function(){
    this.sendKeys('input[name=STUD_ID]', '000151516');    
});
casper.then(function() {
    this.click('input[value=Enviar]');
});
casper.waitForSelector('table.plaintable',function() {
    this.click('input[value=Enviar]');
});
casper.waitForSelector('table.plaintable',function() {
    this.clickLabel('Historia Académica UPB', 'a');
});
casper.waitForSelector('table.plaintable',function(){
    this.evaluate(function() {
        selections = document.querySelectorAll('select');
        selections[0].value = "UG";
        selections[1].value = "KAR";
    });
});
casper.then(function() {
    this.evaluate(function(){
        btn = document.querySelectorAll('input');
        btn[2].click();
    });
    //this.click('input[value=Desplegar Hist Académico]');
});

casper.wait(1000, function(){
    this.capture('./output/upb.png');
});
casper.run();

console.log('Fin');