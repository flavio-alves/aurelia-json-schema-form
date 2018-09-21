import { getLogger } from 'aurelia-logging';
import { RulesFactory } from './rules/rules-factory';
import { PLATFORM } from 'aurelia-pal';
import { SchemaFormLogger } from './resources/logger';
import { SchemaFormConfiguration } from './services/schema-form-configuration';
import { PluginOptions } from './plugin-options';
export function configure(frameworkConfig, callback) {
    const logger = getLogger('aurelia-json-schema-form');
    logger.info('initializing aurelia-json-schema-form');
    // create defaults/apply user defined configuration
    const options = new PluginOptions();
    if (callback instanceof Function) {
        callback(options);
    }
    registerLogger(logger, options, frameworkConfig);
    registerConfiguration(logger, options, frameworkConfig);
    frameworkConfig.container.get(RulesFactory).register();
    frameworkConfig.globalResources([
        PLATFORM.moduleName('./form/au-json-schema-form'),
        PLATFORM.moduleName('./value-converters/sf-number-value-converter'),
        PLATFORM.moduleName('./form/array/sf-array'),
        PLATFORM.moduleName('./form/object/sf-object'),
        PLATFORM.moduleName('./form/number/sf-number'),
        PLATFORM.moduleName('./form/text/sf-string'),
        PLATFORM.moduleName('./form/boolean/sf-boolean'),
        PLATFORM.moduleName('./templates/bootstrap4/bootstrap-tooltip')
    ]);
}
function registerLogger(logger, options, frameworkConfig) {
    logger.setLevel(options.logLevel);
    frameworkConfig.container.registerInstance(SchemaFormLogger, logger);
    logger.info('registered logger');
}
function registerConfiguration(logger, options, frameworkConfig) {
    const configuration = new SchemaFormConfiguration(options.validationRenderer, options.templates, options.validationMessages);
    frameworkConfig.container.registerInstance(SchemaFormConfiguration, configuration);
    logger.info('registered configuration', configuration);
}
export * from './form/array/sf-array';
export * from './form/au-json-schema-form';
export * from './form/boolean/sf-boolean';
export * from './form/form-controller';
export * from './form/number/sf-number';
export * from './form/object/sf-object';
export * from './form/text/sf-string';
export * from './interfaces/form-override';
export * from './renderers/bootstrap-validation-renderer';
export * from './resources/guid';
export * from './resources/logger';
export * from './resources/wrapper';
export * from './rules/array-rules';
export * from './rules/boolean-rules';
export * from './rules/common-rules';
export * from './rules/number-rules';
export * from './rules/rules-factory';
export * from './rules/string-rules';
export * from './services/defaults-service';
export * from './services/form-instances';
export * from './services/form-service';
export * from './services/schema-form-configuration';
export * from './value-converters/sf-number-value-converter';
export * from './plugin-options';

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Y0FBYywyQ0FBMkMsQ0FBQztBQUMxRCxjQUFjLGtCQUFrQixDQUFDO0FBQ2pDLGNBQWMsb0JBQW9CLENBQUM7QUFDbkMsY0FBYyxxQkFBcUIsQ0FBQztBQUNwQyxjQUFjLHFCQUFxQixDQUFDO0FBQ3BDLGNBQWMsdUJBQXVCLENBQUM7QUFDdEMsY0FBYyxzQkFBc0IsQ0FBQztBQUNyQyxjQUFjLHNCQUFzQixDQUFDO0FBQ3JDLGNBQWMsdUJBQXVCLENBQUM7QUFDdEMsY0FBYyxzQkFBc0IsQ0FBQztBQUNyQyxjQUFjLDZCQUE2QixDQUFDO0FBQzVDLGNBQWMsMkJBQTJCLENBQUM7QUFDMUMsY0FBYyx5QkFBeUIsQ0FBQztBQUN4QyxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELGNBQWMsOENBQThDLENBQUM7QUFDN0QsY0FBYyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gJ2F1cmVsaWEtbG9nZ2luZyc7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gJy4vcnVsZXMvcnVsZXMtZmFjdG9yeSc7XHJcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSAnLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBQbHVnaW5PcHRpb25zIH0gZnJvbSAnLi9wbHVnaW4tb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgY2FsbGJhY2s/OiAoY29uZmlnOiBQbHVnaW5PcHRpb25zKSA9PiB2b2lkKSB7XHJcbiAgY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKCdhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nKTtcclxuXHJcbiAgbG9nZ2VyLmluZm8oJ2luaXRpYWxpemluZyBhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0nKTtcclxuXHJcbiAgLy8gY3JlYXRlIGRlZmF1bHRzL2FwcGx5IHVzZXIgZGVmaW5lZCBjb25maWd1cmF0aW9uXHJcbiAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQbHVnaW5PcHRpb25zKCk7XHJcbiAgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xyXG5cclxuICByZWdpc3RlckNvbmZpZ3VyYXRpb24obG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xyXG5cclxuICAoZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5nZXQoUnVsZXNGYWN0b3J5KSBhcyBSdWxlc0ZhY3RvcnkpLnJlZ2lzdGVyKCk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0nKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vdmFsdWUtY29udmVydGVycy9zZi1udW1iZXItdmFsdWUtY29udmVydGVyJyksXHJcblxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2FycmF5L3NmLWFycmF5JyksXHJcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdCcpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL251bWJlci9zZi1udW1iZXInKSxcclxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vZm9ybS90ZXh0L3NmLXN0cmluZycpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbicpLFxyXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcCcpXHJcbiAgXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2VyKFxyXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxyXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxyXG4pIHtcclxuICBsb2dnZXIuc2V0TGV2ZWwob3B0aW9ucy5sb2dMZXZlbCk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtTG9nZ2VyLCBsb2dnZXIpO1xyXG5cclxuICBsb2dnZXIuaW5mbygncmVnaXN0ZXJlZCBsb2dnZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxyXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxyXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxyXG4pIHtcclxuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKFxyXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XHJcblxyXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgY29uZmlndXJhdGlvbik7XHJcblxyXG4gIGxvZ2dlci5pbmZvKCdyZWdpc3RlcmVkIGNvbmZpZ3VyYXRpb24nLCBjb25maWd1cmF0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2FycmF5L3NmLWFycmF5JztcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0nO1xyXG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuJztcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL2Zvcm0tY29udHJvbGxlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm9ybS9udW1iZXIvc2YtbnVtYmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtL29iamVjdC9zZi1vYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Zvcm0vdGV4dC9zZi1zdHJpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3J1bGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzL3RlbXBsYXRlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlcy9ndWlkJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvbG9nZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZXNvdXJjZXMvd3JhcHBlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvYXJyYXktcnVsZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2Jvb2xlYW4tcnVsZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL2NvbW1vbi1ydWxlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvbnVtYmVyLXJ1bGVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9ydWxlcy1mYWN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9zdHJpbmctcnVsZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGx1Z2luLW9wdGlvbnMnO1xyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==