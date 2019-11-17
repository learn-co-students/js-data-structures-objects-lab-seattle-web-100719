// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value)
{
    let thisDriver = {}
    Object.assign(thisDriver, driver);
    Object.assign(thisDriver, {[key]: value})
    return thisDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
    Object.assign(driver, {[key]: value});
    return driver;
}

function deleteFromDriverByKey(driver, key)
{
    let thisDriver = {}
    Object.assign(thisDriver, driver);
    delete thisDriver[key];
    return thisDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key)
{
    delete driver[key];
    return driver;
}