__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 63,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 61,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 44,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 61,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 61,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 45,
                  "end": 56,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 56,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 55,
                        "end": 56,
                        "typeName": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 23,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 84,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 83,
          "raw": "\"./privacyCheckExternalModuleExportAssignmentOfGenericClass_0\"",
          "value": "./privacyCheckExternalModuleExportAssignmentOfGenericClass_0"
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 86,
      "end": 99,
      "expression": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 100,
      "end": 139,
      "body": {
        "type": "TSInterfaceBody",
        "start": 114,
        "end": 139,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 137,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 136,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 128,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 129,
                      "end": 135
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 128,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 113,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
