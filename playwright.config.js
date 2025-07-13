// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config = ({
  testDir: './tests',
  retries:1,
  timeout:30*1000,
  expect: {
    timeout:5*1000,

  },
  reporter: 'html',
  
  use: {
    
      browsername: 'chromium',
      headless :false,
      screenshot : 'on', //only-on-failure
      trace : 'off',//off,on or on-first-retry
      
    }

});
module.exports=config;

