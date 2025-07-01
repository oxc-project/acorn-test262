__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Client",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 32
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 35,
        "end": 41
      },
      "declare": false,
      "start": 21,
      "end": 41
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UpdatedClient",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 82
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 84
          }
        ],
        "start": 82,
        "end": 85
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "typeArguments": null,
            "start": 88,
            "end": 89
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 98,
                    "end": 104
                  },
                  "start": 96,
                  "end": 104
                },
                "accessibility": null,
                "static": false,
                "start": 93,
                "end": 104
              }
            ],
            "start": 92,
            "end": 105
          }
        ],
        "start": 88,
        "end": 105
      },
      "declare": false,
      "start": 64,
      "end": 105
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createClient",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 132
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 140
                    },
                    "constraint": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSConstructorType",
                          "abstract": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "args",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 164,
                                "end": 168
                              },
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSAnyKeyword",
                                    "start": 170,
                                    "end": 173
                                  },
                                  "start": 170,
                                  "end": 175
                                },
                                "start": 168,
                                "end": 175
                              },
                              "value": null,
                              "start": 161,
                              "end": 175
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Client",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 180,
                                "end": 186
                              },
                              "typeArguments": null,
                              "start": 180,
                              "end": 186
                            },
                            "start": 177,
                            "end": 186
                          },
                          "start": 156,
                          "end": 186
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Record",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 210,
                            "end": 216
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 217,
                                "end": 223
                              },
                              {
                                "type": "TSConstructorType",
                                "abstract": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "RestElement",
                                    "decorators": [],
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 233,
                                      "end": 237
                                    },
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSArrayType",
                                        "elementType": {
                                          "type": "TSAnyKeyword",
                                          "start": 239,
                                          "end": 242
                                        },
                                        "start": 239,
                                        "end": 244
                                      },
                                      "start": 237,
                                      "end": 244
                                    },
                                    "value": null,
                                    "start": 230,
                                    "end": 244
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Client",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 249,
                                      "end": 255
                                    },
                                    "typeArguments": null,
                                    "start": 249,
                                    "end": 255
                                  },
                                  "start": 246,
                                  "end": 255
                                },
                                "start": 225,
                                "end": 255
                              }
                            ],
                            "start": 216,
                            "end": 256
                          },
                          "start": 210,
                          "end": 256
                        }
                      ],
                      "start": 153,
                      "end": 256
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 139,
                    "end": 256
                  }
                ],
                "start": 135,
                "end": 279
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clientDef",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 295
                      },
                      "typeArguments": null,
                      "start": 294,
                      "end": 295
                    },
                    "start": 292,
                    "end": 295
                  },
                  "start": 283,
                  "end": 295
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 300
                  },
                  "extendsType": {
                    "type": "TSConstructorType",
                    "abstract": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 321
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 323,
                              "end": 326
                            },
                            "start": 323,
                            "end": 328
                          },
                          "start": 321,
                          "end": 328
                        },
                        "value": null,
                        "start": 314,
                        "end": 328
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 340
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 339,
                          "end": 340
                        },
                        "start": 333,
                        "end": 340
                      },
                      "start": 330,
                      "end": 340
                    },
                    "start": 309,
                    "end": 340
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UpdatedClient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 358
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 359,
                            "end": 360
                          },
                          "typeArguments": null,
                          "start": 359,
                          "end": 360
                        }
                      ],
                      "start": 358,
                      "end": 361
                    },
                    "start": 345,
                    "end": 361
                  },
                  "falseType": {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 395
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 406
                        },
                        "typeArguments": null,
                        "start": 405,
                        "end": 406
                      },
                      "start": 399,
                      "end": 406
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 410
                          },
                          "typeArguments": null,
                          "start": 409,
                          "end": 410
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 411,
                            "end": 412
                          },
                          "typeArguments": null,
                          "start": 411,
                          "end": 412
                        },
                        "start": 409,
                        "end": 413
                      },
                      "extendsType": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 430,
                              "end": 434
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 436,
                                  "end": 439
                                },
                                "start": 436,
                                "end": 441
                              },
                              "start": 434,
                              "end": 441
                            },
                            "value": null,
                            "start": 427,
                            "end": 441
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 452,
                                "end": 453
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 452,
                              "end": 453
                            },
                            "start": 446,
                            "end": 453
                          },
                          "start": 443,
                          "end": 453
                        },
                        "start": 422,
                        "end": 453
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UpdatedClient",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 500,
                          "end": 513
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 514,
                                "end": 515
                              },
                              "typeArguments": null,
                              "start": 514,
                              "end": 515
                            }
                          ],
                          "start": 513,
                          "end": 516
                        },
                        "start": 500,
                        "end": 516
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 527,
                        "end": 532
                      },
                      "start": 409,
                      "end": 532
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 385,
                    "end": 538
                  },
                  "start": 299,
                  "end": 538
                },
                "start": 297,
                "end": 538
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 553,
                        "end": 557
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 561,
                        "end": 564
                      },
                      "start": 553,
                      "end": 564
                    },
                    "start": 546,
                    "end": 564
                  }
                ],
                "start": 542,
                "end": 566
              },
              "id": null,
              "generator": false,
              "start": 135,
              "end": 566
            },
            "definite": false,
            "start": 120,
            "end": 566
          }
        ],
        "declare": false,
        "start": 114,
        "end": 566
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 566
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 566
}
```
