var validate = require('../src/validator').production;


it("#01. Quality Hasil Produksi Spinning should valid", function () {
    var WindingQualitySampling = require('../src/production/spinning/winding/winding-quality-sampling');
    validate.spinning.winding.windingQualitySampling(new WindingQualitySampling());
});

it("#02. Output Hasil Produksi Spinning should valid", function () {
    var WindingProductionOutput = require('../src/production/spinning/winding/winding-production-output');
    validate.spinning.winding.windingProductionOutput(new WindingProductionOutput());
});

it("#03. Sales Contract Finishing Printing should valid", function () {
    var SalesContract = require('../src/production/finishing-printing/sales-contract');
    validate.finishingPrinting.salesContract(new SalesContract());
});

it("#04. Daily Operation Finishing Printing should valid", function () {
    var DailyOperation = require('../src/production/finishing-printing/daily-operation');
    validate.finishingPrinting.dailyOperation(new DailyOperation());
});

it("#05. Monitoring Event Item Finishing Printing should valid", function () {
    var MonitoringEventItem = require('../src/production/finishing-printing/monitoring-event-item');
    validate.finishingPrinting.monitoringEventItem(new MonitoringEventItem());
});

it("#06. Monitoring Event Finishing Printing should valid", function () {
    var MonitoringEvent = require('../src/production/finishing-printing/monitoring-event');
    validate.finishingPrinting.monitoringEvent(new MonitoringEvent());
});
