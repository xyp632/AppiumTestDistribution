import _ from 'lodash'

export function getPassFailTotalCountPerDevice(reportData) {
    let sizeOfReportData = reportData.length
    let testResults = _.slice(reportData, 0, sizeOfReportData - 1)
    let testResultsPerDevice = _.groupBy(testResults, (testResult) => testResult.model)
    let devicesPassFailCount = []
    _.forIn(testResultsPerDevice, (tests, key) => {
        let passTests = _.filter(tests, (test) => test.testDetails.results === "Pass")
        let failTests = _.filter(tests, (test) => test.testDetails.results === "Fail")
        let skipTests = _.filter(tests,(test) => test.testDetails.results === "Skip")
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