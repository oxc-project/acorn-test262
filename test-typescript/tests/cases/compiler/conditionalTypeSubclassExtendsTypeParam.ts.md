__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "name": "Model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 144,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "name": "getField2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 71,
              "end": 144,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 71,
                "end": 90,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 72,
                    "end": 89,
                    "name": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 82,
                      "end": 89,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 88,
                        "end": 89,
                        "typeName": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "name": "M",
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
                "start": 92,
                "end": 144,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 94,
                  "end": 144,
                  "typeName": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 99,
                    "name": "Field",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 99,
                    "end": 144,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 100,
                        "end": 104,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 100,
                          "end": 101,
                          "typeName": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 101,
                            "name": "M",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 102,
                          "end": 103,
                          "typeName": {
                            "type": "Identifier",
                            "start": 102,
                            "end": 103,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSConditionalType",
                        "start": 106,
                        "end": 143,
                        "checkType": {
                          "type": "TSTupleType",
                          "start": 106,
                          "end": 109,
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "start": 107,
                              "end": 108,
                              "typeName": {
                                "type": "Identifier",
                                "start": 107,
                                "end": 108,
                                "name": "K",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "start": 118,
                          "end": 128,
                          "elementTypes": [
                            {
                              "type": "TSTypeOperator",
                              "start": 119,
                              "end": 127,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 125,
                                "end": 127,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 125,
                                  "end": 127,
                                  "name": "MR",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "trueType": {
                          "type": "TSIndexedAccessType",
                          "start": 131,
                          "end": 136,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 131,
                            "end": 133,
                            "typeName": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 133,
                              "name": "MR",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 134,
                            "end": 135,
                            "typeName": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 135,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "falseType": {
                          "type": "TSIndexedAccessType",
                          "start": 139,
                          "end": 143,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 139,
                            "end": 140,
                            "typeName": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 140,
                              "name": "M",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 141,
                            "end": 142,
                            "typeName": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 32,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 30,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "name": "MR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 36,
              "name": "MR",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 45,
              "end": 47,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 148,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 167,
        "name": "Field",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 186,
        "end": 189,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 167,
        "end": 185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 180,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 178,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 178,
                "end": 180,
                "name": "TR",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 184,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 184,
              "name": "TR",
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
