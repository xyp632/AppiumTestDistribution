import _ from 'lodash'
import { getPassFailTotalCountPerDevice,getTotalTimeRequiredToRunTests,getPassFailTotalCount } from '../AppiumReportParser'

describe('Parser', () => {
    describe('Parallel', () => {
        let data = [
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678250,
                    "starttime": 1501678228,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne1.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne1"
                },
                "totaltime": 1500176571,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678252,
                    "starttime": 1501678228,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne1.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne1"
                },
                "totaltime": 1500176574,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678270,
                    "starttime": 1501678251,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne10.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne10"
                },
                "totaltime": 1500176591,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678273,
                    "starttime": 1501678253,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne10.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne10"
                },
                "totaltime": 1500176595,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678293,
                    "starttime": 1501678271,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne11.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne11"
                },
                "totaltime": 1500176614,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678296,
                    "starttime": 1501678274,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne11.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne11"
                },
                "totaltime": 1500176618,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678317,
                    "starttime": 1501678293,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne6.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne6"
                },
                "totaltime": 1500176639,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678322,
                    "starttime": 1501678297,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne6.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne6"
                },
                "totaltime": 1500176644,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678337,
                    "starttime": 1501678318,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne7.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.102:5555/HomePageTest1/testMethodOne7/2017-08-02T18:22:19GooglePixelC_Android_testMethodOne7_failed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 267 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.102:5555, deviceName=android, platform=ANY, systemPort=58445}]\nSession ID: fc33796a-fb44-4485-8c63-0743f5807433\n*** Element info: {Using=id, value=com.android2.calculator3:id/digit33}",
                    "methodname": "testMethodOne7"
                },
                "totaltime": 1500176658,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678342,
                    "starttime": 1501678323,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne7.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.103:5555/HomePageTest1/testMethodOne7/2017-08-02T18:22:25GoogleNexus6_Android_failed_testMethodOne7_framed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 639 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.103:5555, deviceName=android, platform=ANY, systemPort=58659}]\nSession ID: 29386389-52aa-43ce-8f59-ab68e8320ac0\n*** Element info: {Using=id, value=com.android2.calculator3:id/digit33}",
                    "methodname": "testMethodOne7"
                },
                "totaltime": 1500176664,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678358,
                    "starttime": 1501678340,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne8.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne8"
                },
                "totaltime": 1500176680,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678365,
                    "starttime": 1501678346,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne8.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne8"
                },
                "totaltime": 1500176687,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678381,
                    "starttime": 1501678359,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne9.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne9"
                },
                "totaltime": 1500176702,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501678389,
                    "starttime": 1501678366,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne9.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne9"
                },
                "totaltime": 1500176710,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest2",
                    "endtime": 1501678406,
                    "starttime": 1501678385,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne1.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.102:5555/HomePageTest2/testMethodOne1/2017-08-02T18:23:29GooglePixelC_Android_testMethodOne1_failed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 37 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.102:5555, deviceName=android, platform=ANY, systemPort=59978}]\nSession ID: 2591203d-e507-4df9-bf2b-e801a8cab9b7\n*** Element info: {Using=accessibility id, value=login}",
                    "methodname": "testMethodOne1"
                },
                "totaltime": 1500176728,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest2",
                    "endtime": 1501678414,
                    "starttime": 1501678392,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne1.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.103:5555/HomePageTest2/testMethodOne1/2017-08-02T18:23:38GoogleNexus6_Android_failed_testMethodOne1_framed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 27 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.103:5555, deviceName=android, platform=ANY, systemPort=60233}]\nSession ID: f293cbf7-3291-4448-9eed-597f33355a4e\n*** Element info: {Using=accessibility id, value=login}",
                    "methodname": "testMethodOne1"
                },
                "totaltime": 1500176736,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest2",
                    "endtime": 1501678431,
                    "starttime": 1501678409,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne2.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.102:5555/HomePageTest2/testMethodOne2/2017-08-02T18:23:54GooglePixelC_Android_testMethodOne2_failed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 37 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.102:5555, deviceName=android, platform=ANY, systemPort=60505}]\nSession ID: 2b9431cb-6f41-4fea-9396-357b4b6452f1\n*** Element info: {Using=accessibility id, value=login}",
                    "methodname": "testMethodOne2"
                },
                "totaltime": 1500176753,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest2",
                    "endtime": 1501678442,
                    "starttime": 1501678419,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne2.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.103:5555/HomePageTest2/testMethodOne2/2017-08-02T18:24:05GoogleNexus6_Android_failed_testMethodOne2_framed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 34 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.103:5555, deviceName=android, platform=ANY, systemPort=60757}]\nSession ID: 5b443adb-90ad-4760-a0ec-bc4947472f98\n*** Element info: {Using=accessibility id, value=login}",
                    "methodname": "testMethodOne2"
                },
                "totaltime": 1500176764,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest3",
                    "endtime": 1501678465,
                    "starttime": 1501678439,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne3.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne3"
                },
                "totaltime": 1500176787,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest3",
                    "endtime": 1501678477,
                    "starttime": 1501678450,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne3.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne3"
                },
                "totaltime": 1500176798,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest3",
                    "endtime": 1501678490,
                    "starttime": 1501678466,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne4.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne4"
                },
                "totaltime": 1500176811,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest3",
                    "endtime": 1501678503,
                    "starttime": 1501678477,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodOne4.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne4"
                },
                "totaltime": 1500176824,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest4",
                    "endtime": 1501678514,
                    "starttime": 1501678494,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodFour.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodFour"
                },
                "totaltime": 1500176835,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest4",
                    "endtime": 1501678528,
                    "starttime": 1501678506,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodFour.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodFour"
                },
                "totaltime": 1500176850,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest5",
                    "endtime": 1501678538,
                    "starttime": 1501678517,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodFive5.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodFive5"
                },
                "totaltime": 1500176860,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest5",
                    "endtime": 1501678554,
                    "starttime": 1501678531,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.103:5555__testMethodFive5.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodFive5"
                },
                "totaltime": 1500176875,
                "model": "GoogleNexus6_Android",
                "id": "192.168.58.103:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "userMetaData": {
                    "Appium": "1.6.6.beta4",
                    "RunType": "Parallel"
                }
            }
        ]
    
    
        it('should get pass, fail, skip test count per device', () => {
            let passFailTotalCountPerDevice = getPassFailTotalCountPerDevice(data)
            expect(passFailTotalCountPerDevice[0].device).toBe("GooglePixelC_Android")
            expect(passFailTotalCountPerDevice[0].passCount).toBe(10)
            expect(passFailTotalCountPerDevice[0].failCount).toBe(3)
            expect(passFailTotalCountPerDevice[0].skipCount).toBe(0)
            expect(passFailTotalCountPerDevice[1].device).toBe("GoogleNexus6_Android")
            expect(passFailTotalCountPerDevice[1].passCount).toBe(10)
            expect(passFailTotalCountPerDevice[1].failCount).toBe(3)
            expect(passFailTotalCountPerDevice[1].skipCount).toBe(0)
    
        })

        it('should get total time required to run all tests ',()=>{
            console.log(getTotalTimeRequiredToRunTests(data))
        })
    })

    describe('Distribute', () => {
        let data = [
            {
                "testDetails": {
                    "classname": "HomePageTest2",
                    "endtime": 1501679741,
                    "starttime": 1501679720,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne1.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.102:5555/HomePageTest2/testMethodOne1/2017-08-02T18:45:43GooglePixelC_Android_testMethodOne1_failed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.102:5555, deviceName=android, platform=ANY, systemPort=52460}]\nSession ID: 30c2cf7e-a779-4aae-add9-f14a39abbd72\n*** Element info: {Using=accessibility id, value=login}",
                    "methodname": "testMethodOne1"
                },
                "totaltime": 1500178061,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest2",
                    "endtime": 1501679765,
                    "starttime": 1501679744,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne2.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.102:5555/HomePageTest2/testMethodOne2/2017-08-02T18:46:07GooglePixelC_Android_testMethodOne2_failed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 363 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.102:5555, deviceName=android, platform=ANY, systemPort=52947}]\nSession ID: 0fc5be48-cf51-48f7-a365-7a443eb5770e\n*** Element info: {Using=accessibility id, value=login}",
                    "methodname": "testMethodOne2"
                },
                "totaltime": 1500178085,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501679881,
                    "starttime": 1501679860,
                    "results": "Fail",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne7.txt",
                        "screenShotFailure": "screenshot/android/192.168.58.102:5555/HomePageTest1/testMethodOne7/2017-08-02T18:48:03GooglePixelC_Android_testMethodOne7_failed.jpeg"
                    },
                    "exceptiontrace": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 545 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: '3.3.1', revision: '5234b325d5', time: '2017-03-10 09:10:29 +0000'\nSystem info: host: 'insaikrisv-2.local', ip: 'fe80:0:0:0:18aa:d59a:5229:ead0%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.12.5', java.version: '1.8.0_111'\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app=/Users/saikrisv/Documents/workspace/workspace1/TestNGParallelThreadBeforeClass/build/AndroidCalculator.apk, noSign=true, automationName=UIAutomator2, platformName=Android, udid=192.168.58.102:5555, deviceName=android, platform=ANY, systemPort=55168}]\nSession ID: 56dcefed-b989-4262-a05b-e1c1760840ff\n*** Element info: {Using=id, value=com.android2.calculator3:id/digit33}",
                    "methodname": "testMethodOne7"
                },
                "totaltime": 1500178201,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501679792,
                    "starttime": 1501679772,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne1.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne1"
                },
                "totaltime": 1500178112,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501679811,
                    "starttime": 1501679793,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne10.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne10"
                },
                "totaltime": 1500178132,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501679834,
                    "starttime": 1501679812,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne11.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne11"
                },
                "totaltime": 1500178154,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501679859,
                    "starttime": 1501679835,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne6.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne6"
                },
                "totaltime": 1500178179,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501679902,
                    "starttime": 1501679883,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne8.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne8"
                },
                "totaltime": 1500178222,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "testDetails": {
                    "classname": "HomePageTest1",
                    "endtime": 1501679924,
                    "starttime": 1501679903,
                    "results": "Pass",
                    "logs": {
                        "adbLogs": "adblogs/192.168.58.102:5555__testMethodOne9.txt"
                    },
                    "exceptiontrace": "null",
                    "methodname": "testMethodOne9"
                },
                "totaltime": 1500178244,
                "model": "GooglePixelC_Android",
                "id": "192.168.58.102:5555",
                "version": "6.0",
                "platform": "ANDROID"
            },
            {
                "userMetaData": {
                    "Appium": "1.6.6.beta4",
                    "RunType": "Parallel"
                }
            }
        ]
    
    
        it('should get pass, fail, skip test count per device', () => {
            let passFailTotalCountPerDevice = getPassFailTotalCountPerDevice(data)
            expect(passFailTotalCountPerDevice[0].device).toBe("GooglePixelC_Android")
            expect(passFailTotalCountPerDevice[0].passCount).toBe(6)
            expect(passFailTotalCountPerDevice[0].failCount).toBe(3)
            expect(passFailTotalCountPerDevice[0].skipCount).toBe(0)
        })
    })

    it('get total fail pass skip count', () => {
        let data = [{
            device: 'GooglePixelC_Android',
            passCount: 10,
            failCount: 3,
            skipCount: 0
        },
        {
            device: 'GoogleNexus6_Android',
            passCount: 9,
            failCount: 3,
            skipCount: 1
        }]
        let result=getPassFailTotalCount(data)
        expect(result.passCount).toBe(19)
        expect(result.failCount).toBe(6)
        expect(result.skipCount).toBe(1)
    })
})
