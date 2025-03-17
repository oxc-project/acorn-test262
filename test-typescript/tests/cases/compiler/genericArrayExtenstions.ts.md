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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 170,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 36,
          "name": "ObservableArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 60,
          "end": 170,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 98,
              "end": 140,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 98,
                "end": 104,
                "name": "concat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 104,
                "end": 140,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 120,
                    "end": 133,
                    "argument": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 128,
                      "name": "items",
                      "typeAnnotation": null,
                      "decorators": [],
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
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 104,
                  "end": 119,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 105,
                      "end": 118,
                      "name": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 141,
              "end": 168,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "name": "concat",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 147,
                "end": 168,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 148,
                    "end": 161,
                    "argument": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 156,
                      "name": "items",
                      "typeAnnotation": null,
                      "decorators": [],
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "body": null,
                "declare": false,
                "typeParameters": null,
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 36,
          "end": 39,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 37,
              "end": 38,
              "name": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
