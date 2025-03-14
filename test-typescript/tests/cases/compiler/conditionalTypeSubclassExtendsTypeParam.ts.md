conditionalTypeSubclassExtendsTypeParam.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 144,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "decorators": [],
              "name": "getField2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 71,
              "end": 144,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 92,
                "end": 144,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 94,
                  "end": 144,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 99,
                    "end": 144,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 100,
                        "end": 104,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 102,
                          "end": 103,
                          "typeName": {
                            "type": "Identifier",
                            "start": 102,
                            "end": 103,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 100,
                          "end": 101,
                          "typeName": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 101,
                            "decorators": [],
                            "name": "M",
                            "optional": false
                          }
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
                                "decorators": [],
                                "name": "K",
                                "optional": false
                              }
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
                                  "decorators": [],
                                  "name": "MR",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "falseType": {
                          "type": "TSIndexedAccessType",
                          "start": 139,
                          "end": 143,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 141,
                            "end": 142,
                            "typeName": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 142,
                              "decorators": [],
                              "name": "K",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 139,
                            "end": 140,
                            "typeName": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 140,
                              "decorators": [],
                              "name": "M",
                              "optional": false
                            }
                          }
                        },
                        "trueType": {
                          "type": "TSIndexedAccessType",
                          "start": 131,
                          "end": 136,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 134,
                            "end": 135,
                            "typeName": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 135,
                              "decorators": [],
                              "name": "K",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 131,
                            "end": 133,
                            "typeName": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 133,
                              "decorators": [],
                              "name": "MR",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 99,
                    "decorators": [],
                    "name": "Field",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 71,
                "end": 90,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 72,
                    "end": 89,
                    "const": false,
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
                          "decorators": [],
                          "name": "M",
                          "optional": false
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Model",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 32,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 30,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "decorators": [],
                "name": "MR",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 47,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 45,
              "end": 47,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 36,
              "decorators": [],
              "name": "MR",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 148,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 186,
        "end": 189,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 167,
        "decorators": [],
        "name": "Field",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 167,
        "end": 185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 180,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 178,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 178,
                "end": 180,
                "decorators": [],
                "name": "TR",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 184,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 184,
              "decorators": [],
              "name": "TR",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
