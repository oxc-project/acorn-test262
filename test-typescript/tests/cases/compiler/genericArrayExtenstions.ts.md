__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 170,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 170,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 60,
          "end": 170,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 98,
              "end": 140,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 98,
                "end": 104,
                "decorators": [],
                "name": "concat",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 104,
                "end": 140,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 120,
                    "end": 133,
                    "argument": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 128,
                      "decorators": [],
                      "name": "items",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 128,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 130,
                        "end": 133,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 130,
                          "end": 131,
                          "typeName": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 134,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 136,
                    "end": 139,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 137,
                      "typeName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 104,
                  "end": 119,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 105,
                      "end": 118,
                      "const": false,
                      "constraint": {
                        "type": "TSArrayType",
                        "start": 115,
                        "end": 118,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 115,
                          "end": 116,
                          "typeName": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 116,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 141,
              "end": 168,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "decorators": [],
                "name": "concat",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 147,
                "end": 168,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 148,
                    "end": 161,
                    "argument": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 156,
                      "decorators": [],
                      "name": "items",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 161,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 158,
                        "end": 161,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 158,
                          "end": 159,
                          "typeName": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 159,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 162,
                  "end": 167,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 164,
                    "end": 167,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 164,
                      "end": 165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          ]
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 36,
          "decorators": [],
          "name": "ObservableArray",
          "optional": false
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 51,
            "end": 59,
            "expression": {
              "type": "Identifier",
              "start": 51,
              "end": 56,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 56,
              "end": 59,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 57,
                  "end": 58,
                  "typeName": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            }
          }
        ],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 36,
          "end": 39,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 37,
              "end": 38,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
