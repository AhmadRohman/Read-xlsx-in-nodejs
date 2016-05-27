/**
 * Created by Ahmad rohman on 5/27/16.
 */
var xlsx = require('excel');
var Employees = require('../models/employees');

function convertxlsxToJson(array){
  var batas = array[0].join();
  var header = batas.split(',');
  var employeesData = [];
  for(var i = 1, panjang = array.length; i < panjang; i++ ){
    var Embaris = array[i].join();
    var baris   = Embaris.split(',');
    var EmData = {};

    for( var r=0; r< baris.length; r++){
      EmData[header[r]] = baris[r];
    }
    employeesData.push(EmData);
  }
  return employeesData;
}

exports.index = function(r1, r2){
  r2.render("index", {title : 'Read xlsx file in nodejs'});
};

exports.readexls = function(r1, r2){
  xlsx('./public/file/employees.xlsx', function(error, xlsxdata){
    if(error) throw error;
    else{
      var convert_to_JASON = JSON.stringify(convertxlsxToJson(xlsxdata));
      var employees = JSON.parse(convert_to_JASON);
      Employees.find(function(e, emdata){
        if(e) throw e;
        else{
          r2.render('employees', {title : 'Read xlsx file in nodejs', employ : employees, employe: emdata});
        }
      });
    }
  });
};

exports.save_employees = function(r1, r2){
  xlsx('./public/file/employees.xlsx', function(error, xlsxdata){
    if(error) throw error;
    else{
      var convert_to_JASON = JSON.stringify(convertxlsxToJson(xlsxdata));
      var employees = JSON.parse(convert_to_JASON);
      for(var r = 0; r < employees.length; r++){
        new Employees(employees[r]).save(function(er){
          if(er) throw e;
        });
      }
      r2.redirect('/read-xlsx')
    }
  });
};

exports.delete = function(r1, r2){
  Employees.remove({_id : r1.params._id}, function(e){
    if(e) throw e;
    else
      r2.redirect('/read-xlsx');
  })
};