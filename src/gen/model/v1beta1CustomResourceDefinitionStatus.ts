/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1beta1CustomResourceDefinitionCondition } from './v1beta1CustomResourceDefinitionCondition';
import { V1beta1CustomResourceDefinitionNames } from './v1beta1CustomResourceDefinitionNames';

/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
*/
export class V1beta1CustomResourceDefinitionStatus {
    'acceptedNames': V1beta1CustomResourceDefinitionNames;
    /**
    * Conditions indicate state for particular aspects of a CustomResourceDefinition
    */
    'conditions': Array<V1beta1CustomResourceDefinitionCondition>;
    /**
    * StoredVersions are all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so the migration controller can first finish a migration to another version (i.e. that no old objects are left in the storage), and then remove the rest of the versions from this list. None of the versions in this list can be removed from the spec.Versions field.
    */
    'storedVersions': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acceptedNames",
            "baseName": "acceptedNames",
            "type": "V1beta1CustomResourceDefinitionNames"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1beta1CustomResourceDefinitionCondition>"
        },
        {
            "name": "storedVersions",
            "baseName": "storedVersions",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CustomResourceDefinitionStatus.attributeTypeMap;
    }
}

