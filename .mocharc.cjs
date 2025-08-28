module.exports = {
  //reporter: 'node_modules/mochawesome',
  spec: 'test_cases/**/03.Successful_order.js',
  'reporter-option': [
    'overwrite=false',
    'reportTitle=Selenium WD:test',
    'reportFilename=[status]_[datetime]-[name]-report',
    'timestamp=longDate',
    'showPassed=true',
    'json=true',
    'code=true',
    'charts=true',
    'autoOpen=true',
    'inline=true',
    'showHooks=true',
    'help=true',
  ],
};
console.log("Loaded .mocharc.cjs configuration");