"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var bootstrap_validation_renderer_1 = require("./renderers/bootstrap-validation-renderer");
var PluginOptions = /** @class */ (function () {
    function PluginOptions() {
        /**
         * @property modifies DOM to display error/success states
         * @default BootstrapValidationRenderer "targets Bootstrap v4"
         */
        this.validationRenderer = new bootstrap_validation_renderer_1.BootstrapValidationRenderer();
        /**
         * @property global validation message overrides, choose which messages you want to override (default)
         * @default empty "use validator's default message"
         */
        this.validationMessages = {};
        /**
         * @property sets the log level (available values from LogManager.logLevel)
         * @default none "only initialization is logged"
         */
        this.logLevel = aurelia_framework_1.LogManager.logLevel.none;
        this.templates = {
            boolean: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-boolean.html'),
            number: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-number.html'),
            numberRange: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-number-range.html'),
            string: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string.html'),
            stringRadioEnum: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-radio-enum.html'),
            stringSelectEnum: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-select-enum.html'),
            object: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-object.html'),
            array: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array.html'),
            arrayTabs: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array-tabs.html'),
            arrayStringEnum: aurelia_framework_1.PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array-string-enum.html')
        };
    }
    return PluginOptions;
}());
exports.PluginOptions = PluginOptions;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsdURBQXlEO0FBQ3pELDJGQUF3RjtBQUd4RjtJQXlCRTtRQXhCQTs7O1dBR0c7UUFDSCx1QkFBa0IsR0FBdUIsSUFBSSwyREFBMkIsRUFBRSxDQUFDO1FBUTNFOzs7V0FHRztRQUNILHVCQUFrQixHQUF3QixFQUFFLENBQUM7UUFFN0M7OztXQUdHO1FBQ0gsYUFBUSxHQUFXLDhCQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUcxQyxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsT0FBTyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLGdEQUFnRCxDQUFDO1lBQzlFLE1BQU0sRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywrQ0FBK0MsQ0FBQztZQUM1RSxXQUFXLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMscURBQXFELENBQUM7WUFDdkYsTUFBTSxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDO1lBQzVFLGVBQWUsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywwREFBMEQsQ0FBQztZQUNoRyxnQkFBZ0IsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywyREFBMkQsQ0FBQztZQUNsRyxNQUFNLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUM7WUFDNUUsS0FBSyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDO1lBQzFFLFNBQVMsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxtREFBbUQsQ0FBQztZQUNuRixlQUFlLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMERBQTBELENBQUM7U0FDakcsQ0FBQztJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF2Q1ksc0NBQWEiLCJmaWxlIjoicGx1Z2luLW9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgSVRlbXBsYXRlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgTG9nTWFuYWdlciwgUExBVEZPUk0gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlcic7XG5pbXBvcnQgeyBJVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXMnO1xuXG5leHBvcnQgY2xhc3MgUGx1Z2luT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBAcHJvcGVydHkgbW9kaWZpZXMgRE9NIHRvIGRpc3BsYXkgZXJyb3Ivc3VjY2VzcyBzdGF0ZXNcbiAgICogQGRlZmF1bHQgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIFwidGFyZ2V0cyBCb290c3RyYXAgdjRcIlxuICAgKi9cbiAgdmFsaWRhdGlvblJlbmRlcmVyOiBWYWxpZGF0aW9uUmVuZGVyZXIgPSBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyKCk7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBkZWZpbmVzIG1vZHVsZU5hbWVzIG9mIGZvcm0gZWxlbWVudHNcbiAgICogQGRlZmF1bHQgYm9vdHN0cmFwNCBcInByZS1kZWZpbmVkIGN1c3RvbSBlbGVtZW50c1wiXG4gICAqL1xuICB0ZW1wbGF0ZXM6IElUZW1wbGF0ZXM7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBnbG9iYWwgdmFsaWRhdGlvbiBtZXNzYWdlIG92ZXJyaWRlcywgY2hvb3NlIHdoaWNoIG1lc3NhZ2VzIHlvdSB3YW50IHRvIG92ZXJyaWRlIChkZWZhdWx0KVxuICAgKiBAZGVmYXVsdCBlbXB0eSBcInVzZSB2YWxpZGF0b3IncyBkZWZhdWx0IG1lc3NhZ2VcIlxuICAgKi9cbiAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBJVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBzZXRzIHRoZSBsb2cgbGV2ZWwgKGF2YWlsYWJsZSB2YWx1ZXMgZnJvbSBMb2dNYW5hZ2VyLmxvZ0xldmVsKVxuICAgKiBAZGVmYXVsdCBub25lIFwib25seSBpbml0aWFsaXphdGlvbiBpcyBsb2dnZWRcIlxuICAgKi9cbiAgbG9nTGV2ZWw6IG51bWJlciA9IExvZ01hbmFnZXIubG9nTGV2ZWwubm9uZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IHtcbiAgICAgIGJvb2xlYW46IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1ib29sZWFuLmh0bWwnKSxcbiAgICAgIG51bWJlcjogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LW51bWJlci5odG1sJyksXG4gICAgICBudW1iZXJSYW5nZTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LW51bWJlci1yYW5nZS5odG1sJyksXG4gICAgICBzdHJpbmc6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmcuaHRtbCcpLFxuICAgICAgc3RyaW5nUmFkaW9FbnVtOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtc3RyaW5nLXJhZGlvLWVudW0uaHRtbCcpLFxuICAgICAgc3RyaW5nU2VsZWN0RW51bTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LXN0cmluZy1zZWxlY3QtZW51bS5odG1sJyksXG4gICAgICBvYmplY3Q6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1vYmplY3QuaHRtbCcpLFxuICAgICAgYXJyYXk6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1hcnJheS5odG1sJyksXG4gICAgICBhcnJheVRhYnM6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1hcnJheS10YWJzLmh0bWwnKSxcbiAgICAgIGFycmF5U3RyaW5nRW51bTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5LXN0cmluZy1lbnVtLmh0bWwnKVxuICAgIH07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
