__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 56,
        "body": {
          "type": "TSInterfaceBody",
          "start": 24,
          "end": 56,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 40,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 31,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 42,
              "end": 54,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 45,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 47,
                  "end": 53
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "Person",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 117,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 65,
        "end": 117,
        "body": {
          "type": "TSModuleBlock",
          "start": 75,
          "end": 117,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 78,
              "end": 115,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 85,
                "end": 115,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 98,
                  "end": 115,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 102,
                      "end": 112,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 103,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 103,
                        "end": 111,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 105,
                          "end": 111,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 111,
                            "decorators": [],
                            "name": "Person",
                            "optional": false,
                            "typeAnnotation": null
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
                  "start": 95,
                  "end": 97,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 74,
          "decorators": [],
          "name": "M2",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 163,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 31,
          "raw": "'./foo_0'",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 129,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 118,
                "end": 129,
                "exprName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 129,
                  "decorators": [],
                  "name": "foo0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 132,
            "end": 134,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 155,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 143,
                "end": 155,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 144,
                    "end": 154,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 146,
                      "decorators": [],
                      "name": "M2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 148,
                        "end": 154,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 154,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 158,
            "end": 162,
            "decorators": [],
            "name": "foo0",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
