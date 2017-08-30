import _ from 'lodash'
function secondsToMinutes(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export function getPassFailTotalCountPerDevice(reportData) {
    let sizeOfReportData = reportData.length
    let testResults = _.slice(reportData, 0, sizeOfReportData - 1)
    let testResultsPerDevice = _.groupBy(testResults, (testResult) => testResult.model)
    let devicesPassFailCount = []
    _.forIn(testResultsPerDevice, (tests, key) => {
        let passTests = _.filter(tests, (test) => test.testDetails.results === "Pass")
        let failTests = _.filter(tests, (test) => test.testDetails.results === "Fail")
        let skipTests = _.filter(tests, (test) => test.testDetails.results === "Skip")
        let result = {
            device: key,
            passCount: passTests.length,
            failCount: failTests.length,
            skipCount: skipTests.length
        }
        devicesPassFailCount.push(result)
    })

    return devicesPassFailCount

}

export function getTotalTimeRequiredToRunTests(reportData) {
    let sizeOfReportData = reportData.length
    let testResults = _.slice(reportData, 0, sizeOfReportData - 1)
    let totalTime = 0
    _.map(testResults, (testResult) => {
        totalTime = testResult.totaltime
    })
    return secondsToMinutes(totalTime)
}

export function getPassFailTotalCount(devicesPassFailCount) {

    let passCount = _.sumBy(devicesPassFailCount, function (o) { return o.passCount; });
    let failCount = _.sumBy(devicesPassFailCount, function (o) { return o.failCount; });
    let skipCount = _.sumBy(devicesPassFailCount, function (o) { return o.skipCount; });

    return {
        passCount,
        failCount,
        skipCount
    }

}



