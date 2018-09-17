import { InlineViewStrategy } from "aurelia-framework";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormService } from "../../services/form-service";
import { ValidateResult } from "aurelia-validation";
import { ArrayRules } from "../../rules/array-rules";
import { DefaultsService } from "../../services/defaults-service";
import { FormInstances } from "../../services/form-instances";
export declare class SfArray {
    arrayRules: ArrayRules;
    configuration: SchemaFormConfiguration;
    private formService;
    private logger;
    private defaultsService;
    private formInstances;
    form: IFormOverride;
    model: any[];
    formInstance: string;
    id: string;
    kind: string;
    viewStrategy: string;
    itemViewStrategy: InlineViewStrategy;
    tabTitleTemplate: InlineViewStrategy;
    validationErrors: string[];
    errors: ValidateResult[];
    binded: boolean;
    private formCtrl;
    constructor(arrayRules: ArrayRules, configuration: SchemaFormConfiguration, formService: FormService, logger: SchemaFormLogger, defaultsService: DefaultsService, formInstances: FormInstances);
    bind(): Promise<void>;
    initializeArray(): Promise<void>;
    attached(): void;
    determineViewStrategy(): Promise<void>;
    createItemView(): Promise<void>;
    private bindRules;
    add(validate: boolean): Promise<void>;
    remove(index: number, validate: boolean): Promise<void>;
    private selectTab;
    readonly isDisabled: boolean;
    readonly atCapacity: boolean;
    readonly atMinimumCapacity: boolean;
    validate(): Promise<import("aurelia-validation/dist/commonjs/controller-validate-result").ControllerValidateResult>;
}
//# sourceMappingURL=sf-array.d.ts.map