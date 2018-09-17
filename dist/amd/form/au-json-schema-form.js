var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../resources/logger", "./form-controller", "../services/form-service", "../resources/guid", "../services/form-instances"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, logger_1, form_controller_1, form_service_1, guid_1, form_instances_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuJsonSchemaForm = /** @class */ (function () {
        function AuJsonSchemaForm(validationControllerFactory, configuration, logger, formService, formInstances) {
            this.validationControllerFactory = validationControllerFactory;
            this.configuration = configuration;
            this.logger = logger;
            this.formService = formService;
            this.formInstances = formInstances;
            this.log = logger.info;
            this.id = guid_1.Guid.newGuid();
        }
        AuJsonSchemaForm.prototype.schemaChanged = function () {
            this.log("schemaChanged");
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.formChanged = function () {
            this.log("formChanged");
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.bind = function () {
            this.log("bind", arguments);
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.createValidationController = function () {
            if (this.validationController === undefined) {
                this.validationController = this.validationControllerFactory.createForCurrentScope();
                this.validationController.addRenderer(this.configuration.validationRenderer);
            }
        };
        AuJsonSchemaForm.prototype.buildForm = function () {
            if (this.schema.type !== "object" && this.schema.type !== "array") {
                this.logger.error("The schema must start with an object or an array");
                return;
            }
            if (this.formView) {
                this.formView = null;
            }
            this.log("buildForm", this.options);
            this.createValidationController();
            this.buildViewStrategy();
        };
        AuJsonSchemaForm.prototype.buildViewStrategy = function () {
            this.log("buildViewStrategy");
            this.form.$schema = this.schema;
            this.formView = new aurelia_framework_1.InlineViewStrategy("<template>" + this.formService.getSfTemplate("model", "form", this.schema.type, this.id) + "</template>");
            this.formInstance = {
                schema: this.schema,
                form: this.form,
                formController: new form_controller_1.FormController(this.logger, this.options, this.validationController),
                validationController: this.validationController,
                formOptions: this.options
            };
            this.logger.warn("buildViewStrategy completed", this.formInstance);
            this.formInstances.set(this.id, this.formInstance);
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], AuJsonSchemaForm.prototype, "schema", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], AuJsonSchemaForm.prototype, "form", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], AuJsonSchemaForm.prototype, "model", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], AuJsonSchemaForm.prototype, "options", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", aurelia_validation_1.ValidationController)
        ], AuJsonSchemaForm.prototype, "validationController", void 0);
        AuJsonSchemaForm = __decorate([
            aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration, logger_1.SchemaFormLogger, form_service_1.FormService, form_instances_1.FormInstances),
            aurelia_framework_1.customElement("au-json-schema-form"),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory,
                schema_form_configuration_1.SchemaFormConfiguration,
                logger_1.SchemaFormLogger,
                form_service_1.FormService,
                form_instances_1.FormInstances])
        ], AuJsonSchemaForm);
        return AuJsonSchemaForm;
    }());
    exports.AuJsonSchemaForm = AuJsonSchemaForm;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFxQkE7UUFtQkUsMEJBQ1UsMkJBQXdELEVBQ3hELGFBQXNDLEVBQ3RDLE1BQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGFBQTRCO1lBSjVCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7WUFDeEQsa0JBQWEsR0FBYixhQUFhLENBQXlCO1lBQ3RDLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBRXBDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRUQsd0NBQWEsR0FBYjtZQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxzQ0FBVyxHQUFYO1lBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELCtCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELHFEQUEwQixHQUExQjtZQUNFLElBQUksSUFBSSxDQUFDLG9CQUFvQixLQUFLLFNBQVMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUNyRixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUM5RTtRQUNILENBQUM7UUFFRCxvQ0FBUyxHQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2dCQUN0RSxPQUFPO2FBQ1I7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCw0Q0FBaUIsR0FBakI7WUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksc0NBQWtCLENBQ3BDLGVBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFhLENBQUMsQ0FBQztZQUN4RyxJQUFJLENBQUMsWUFBWSxHQUFHO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixjQUFjLEVBQUUsSUFBSSxnQ0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3hGLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7Z0JBQy9DLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTzthQUMxQixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUE5RVM7WUFBVCw0QkFBUTs7d0RBQStCO1FBRTlCO1lBQVQsNEJBQVE7O3NEQUFxQjtRQUV3QjtZQUFyRCw0QkFBUSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsK0JBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7dURBQU87UUFFbEQ7WUFBVCw0QkFBUTs7eURBQXVCO1FBRXRCO1lBQVQsNEJBQVE7c0NBQXVCLHlDQUFvQjtzRUFBQztRQVQxQyxnQkFBZ0I7WUFSNUIsMEJBQU0sQ0FDTCxnREFBMkIsRUFDM0IsbURBQXVCLEVBQ3ZCLHlCQUFnQixFQUNoQiwwQkFBVyxFQUNYLDhCQUFhLENBQ2Q7WUFDQSxpQ0FBYSxDQUFDLHFCQUFxQixDQUFDOzZDQXFCSSxnREFBMkI7Z0JBQ3pDLG1EQUF1QjtnQkFDOUIseUJBQWdCO2dCQUNYLDBCQUFXO2dCQUNULDhCQUFhO1dBeEIzQixnQkFBZ0IsQ0FnRjVCO1FBQUQsdUJBQUM7S0FoRkQsQUFnRkMsSUFBQTtJQWhGWSw0Q0FBZ0IiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgaW5qZWN0LCBiaW5kYWJsZSwgSW5saW5lVmlld1N0cmF0ZWd5LCBjdXN0b21FbGVtZW50LCBDb250YWluZXIsIGJpbmRpbmdNb2RlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuL2Zvcm0tY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybVNlcnZpY2UsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxyXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XHJcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xyXG5cclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuXHJcbiAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgbW9kZWw7XHJcblxyXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XHJcblxyXG4gIEBiaW5kYWJsZSB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XHJcblxyXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIGZvcm1JbnN0YW5jZTogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5OiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXHJcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkge1xyXG4gICAgdGhpcy5sb2cgPSBsb2dnZXIuaW5mbztcclxuICAgIHRoaXMuaWQgPSBHdWlkLm5ld0d1aWQoKTtcclxuICB9XHJcblxyXG4gIHNjaGVtYUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLmxvZyhcInNjaGVtYUNoYW5nZWRcIik7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgZm9ybUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLmxvZyhcImZvcm1DaGFuZ2VkXCIpO1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZyhcImJpbmRcIiwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVWYWxpZGF0aW9uQ29udHJvbGxlcigpIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LmNyZWF0ZUZvckN1cnJlbnRTY29wZSgpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZFJlbmRlcmVyKHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVpbGRGb3JtKCkge1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgIT09IFwib2JqZWN0XCIgJiYgdGhpcy5zY2hlbWEudHlwZSAhPT0gXCJhcnJheVwiKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiVGhlIHNjaGVtYSBtdXN0IHN0YXJ0IHdpdGggYW4gb2JqZWN0IG9yIGFuIGFycmF5XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb3JtVmlldykge1xyXG4gICAgICB0aGlzLmZvcm1WaWV3ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMubG9nKFwiYnVpbGRGb3JtXCIsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB0aGlzLmNyZWF0ZVZhbGlkYXRpb25Db250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XHJcbiAgfVxyXG5cclxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcclxuICAgIHRoaXMubG9nKFwiYnVpbGRWaWV3U3RyYXRlZ3lcIik7XHJcbiAgICB0aGlzLmZvcm0uJHNjaGVtYSA9IHRoaXMuc2NoZW1hO1xyXG4gICAgdGhpcy5mb3JtVmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koXHJcbiAgICAgIGA8dGVtcGxhdGU+JHt0aGlzLmZvcm1TZXJ2aWNlLmdldFNmVGVtcGxhdGUoXCJtb2RlbFwiLCBcImZvcm1cIiwgdGhpcy5zY2hlbWEudHlwZSwgdGhpcy5pZCl9PC90ZW1wbGF0ZT5gKTtcclxuICAgIHRoaXMuZm9ybUluc3RhbmNlID0ge1xyXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLFxyXG4gICAgICBmb3JtOiB0aGlzLmZvcm0sXHJcbiAgICAgIGZvcm1Db250cm9sbGVyOiBuZXcgRm9ybUNvbnRyb2xsZXIodGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucywgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciksXHJcbiAgICAgIHZhbGlkYXRpb25Db250cm9sbGVyOiB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLFxyXG4gICAgICBmb3JtT3B0aW9uczogdGhpcy5vcHRpb25zXHJcbiAgICB9O1xyXG4gICAgdGhpcy5sb2dnZXIud2FybihcImJ1aWxkVmlld1N0cmF0ZWd5IGNvbXBsZXRlZFwiLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLmZvcm1JbnN0YW5jZXMuc2V0KHRoaXMuaWQsIHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=