export default class Function {

    static convertTimestampToDate(value) {

         if(typeof value === undefined || typeof value === 'undefined' || value === undefined || value === 'undefined' || value === null || isNaN(value) ) return '';           

          return new Intl.DateTimeFormat('pt-BR', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(value);
         
    }

    static convertDateToTimestamp  (value)  {

        let arr =  value.split('/');                       
        
        let dt = +new Date(new Date(arr[2] + '-' + arr[1] + '-' + arr[0]).getTime() + 24*60*60*1000);

       return dt;
         
   
       }

    static formatCurrency(prefix,value){
        
          prefix = prefix === 'undefined' || prefix === undefined ? '' : prefix;
          value = value === 'undefined' || value === undefined ? 0 : value;

          let newValue = this.formatDecimal(value.toString(),2,true);          
          newValue = newValue.toString().replace('-','');
        
          return parseFloat(value) >= 0 ? prefix + ' ' + newValue : '-' + prefix + ' '  + newValue;
       
    }

    static formatDecimal(value,Decimal_Qtd,onchange) {      
        if(onchange){
            value = value.split('.').join('').replace(',','');            
        }else{
            value = value.toFixed(Decimal_Qtd).replace('.','').replace(',','');
            
        }
        let num = Number(value);     
        
        let divisor = parseInt("1" + this.Right("0000000",Decimal_Qtd));
        if(isNaN(num))
            return '0,00';

        value = (num/divisor).toFixed(Decimal_Qtd).replace('.',',');
        let part = value.split(',');
        let part_1 = this.formatInt(part[0]).toString();
        let part_2 = part[1].toString();

        return part_1 + ',' + part_2;
    }  

    static formatInt(value) {        
        if (isNaN(parseFloat(value)))
            return '';          
        
        value = value.split('.').join('');
        return parseFloat(value).toLocaleString('pt-BR');
    }

    static Right(str, n){
        if (n <= 0)
           return "";
        else if (n > String(str).length)
           return str;
        else {
            let iLen = String(str).length;
           return String(str).substring(iLen, iLen - n);
        }
    }

    static isValidDate(date) {

       let newValue = date.split('/').join('');
      
       if(isNaN(newValue)){
           return false;
       }
       if(date.length < 10)
            return true;

       let temp = date.split('/');                 

       let d = new Date(temp[1] + '/' + temp[0] + '/' + temp[2]);

     

        return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[0]) && d.getFullYear() == Number(temp[2]));
      }

      static extentionFile(file){
        let f = file.split('.');            
        return f[1];
    }

}