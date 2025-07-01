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
        "name": "StateConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 24
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 33,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 39
          }
        ],
        "start": 16,
        "end": 40
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 62
                },
                "typeArguments": null,
                "start": 55,
                "end": 62
              },
              "start": 53,
              "end": 62
            },
            "accessibility": null,
            "static": false,
            "start": 47,
            "end": 62
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "states",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 80
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StateConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 100
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TAction",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 101,
                              "end": 108
                            },
                            "typeArguments": null,
                            "start": 101,
                            "end": 108
                          }
                        ],
                        "start": 100,
                        "end": 109
                      },
                      "start": 89,
                      "end": 109
                    }
                  ],
                  "start": 80,
                  "end": 110
                },
                "start": 74,
                "end": 110
              },
              "start": 72,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 111
          }
        ],
        "start": 43,
        "end": 113
      },
      "declare": false,
      "start": 0,
      "end": 114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 132
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "states",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 145
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 154
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 155,
                      "end": 161
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StateSchema",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 174
                      },
                      "typeArguments": null,
                      "start": 163,
                      "end": 174
                    }
                  ],
                  "start": 154,
                  "end": 175
                },
                "start": 148,
                "end": 175
              },
              "start": 146,
              "end": 175
            },
            "accessibility": null,
            "static": false,
            "start": 139,
            "end": 176
          }
        ],
        "start": 135,
        "end": 178
      },
      "declare": false,
      "start": 116,
      "end": 179
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 211
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 222
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StateConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 242
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TAction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 250
                    },
                    "typeArguments": null,
                    "start": 243,
                    "end": 250
                  }
                ],
                "start": 242,
                "end": 251
              },
              "start": 231,
              "end": 251
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 251
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 262
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 271,
              "end": 277
            },
            "default": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 287
                  },
                  "typeArguments": null,
                  "start": 280,
                  "end": 287
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "entry",
                    "raw": "\"entry\"",
                    "start": 288,
                    "end": 295
                  },
                  "start": 288,
                  "end": 295
                },
                "start": 280,
                "end": 296
              },
              "extendsType": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 321
                  },
                  "typeArguments": null,
                  "start": 314,
                  "end": 321
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "entry",
                    "raw": "\"entry\"",
                    "start": 322,
                    "end": 329
                  },
                  "start": 322,
                  "end": 329
                },
                "start": 314,
                "end": 330
              },
              "falseType": {
                "type": "TSStringKeyword",
                "start": 333,
                "end": 339
              },
              "start": 280,
              "end": 339
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 255,
            "end": 339
          }
        ],
        "start": 211,
        "end": 342
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 355
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 372
                      },
                      "typeArguments": null,
                      "start": 365,
                      "end": 372
                    },
                    "start": 359,
                    "end": 372
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StateConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 392
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 393,
                            "end": 396
                          }
                        ],
                        "start": 392,
                        "end": 397
                      },
                      "start": 381,
                      "end": 397
                    },
                    "start": 375,
                    "end": 397
                  }
                ],
                "start": 359,
                "end": 397
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 407
                  },
                  "typeArguments": null,
                  "start": 400,
                  "end": 407
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 408,
                    "end": 409
                  },
                  "typeArguments": null,
                  "start": 408,
                  "end": 409
                },
                "start": 400,
                "end": 410
              },
              "optional": false,
              "readonly": null,
              "start": 351,
              "end": 412
            },
            "start": 349,
            "end": 412
          },
          "start": 343,
          "end": 412
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 416,
                "end": 423
              },
              "typeArguments": null,
              "start": 416,
              "end": 423
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 432
              },
              "typeArguments": null,
              "start": 425,
              "end": 432
            }
          ],
          "start": 415,
          "end": 433
        },
        "start": 413,
        "end": 433
      },
      "body": null,
      "expression": false,
      "start": 181,
      "end": 434
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "inferredParams1",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 457
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createMachine",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 473
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 478,
                      "end": 483
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 485,
                      "end": 490
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 478,
                    "end": 490
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "states",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 500
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 509
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 519,
                                  "end": 524
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "bar",
                                  "raw": "\"bar\"",
                                  "start": 526,
                                  "end": 531
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 519,
                                "end": 531
                              }
                            ],
                            "start": 511,
                            "end": 538
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 508,
                          "end": 538
                        }
                      ],
                      "start": 502,
                      "end": 543
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 494,
                    "end": 543
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 552
                    },
                    "value": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 554,
                      "end": 556
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 547,
                    "end": 556
                  }
                ],
                "start": 474,
                "end": 559
              }
            ],
            "optional": false,
            "start": 460,
            "end": 560
          },
          "definite": false,
          "start": 442,
          "end": 560
        }
      ],
      "declare": false,
      "start": 436,
      "end": 561
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "inferredParams2",
            "optional": false,
            "typeAnnotation": null,
            "start": 569,
            "end": 584
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createMachine",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 600
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 610
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 612,
                      "end": 617
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 605,
                    "end": 617
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "states",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 627
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 635,
                            "end": 636
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 646,
                                  "end": 651
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "\"foo\"",
                                  "start": 653,
                                  "end": 658
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 646,
                                "end": 658
                              }
                            ],
                            "start": 638,
                            "end": 665
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 635,
                          "end": 665
                        }
                      ],
                      "start": 629,
                      "end": 670
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 621,
                    "end": 670
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 674,
                      "end": 679
                    },
                    "value": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 681,
                      "end": 683
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 674,
                    "end": 683
                  }
                ],
                "start": 601,
                "end": 686
              }
            ],
            "optional": false,
            "start": 587,
            "end": 687
          },
          "definite": false,
          "start": 569,
          "end": 687
        }
      ],
      "declare": false,
      "start": 563,
      "end": 688
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "checkType",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 800
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 804,
                  "end": 805
                }
              ],
              "start": 803,
              "end": 806
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 814
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 824
                      },
                      "typeArguments": null,
                      "start": 823,
                      "end": 824
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 813,
                    "end": 824
                  }
                ],
                "start": 812,
                "end": 825
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 836,
                        "end": 837
                      },
                      "constraint": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 847,
                                "end": 848
                              },
                              "typeArguments": null,
                              "start": 847,
                              "end": 848
                            },
                            "start": 841,
                            "end": 848
                          },
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 857,
                                "end": 858
                              },
                              "typeArguments": null,
                              "start": 857,
                              "end": 858
                            },
                            "start": 851,
                            "end": 858
                          }
                        ],
                        "start": 841,
                        "end": 858
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 861,
                            "end": 862
                          },
                          "typeArguments": null,
                          "start": 861,
                          "end": 862
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 863,
                            "end": 864
                          },
                          "typeArguments": null,
                          "start": 863,
                          "end": 864
                        },
                        "start": 861,
                        "end": 865
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 833,
                      "end": 867
                    },
                    "start": 831,
                    "end": 867
                  },
                  "start": 826,
                  "end": 867
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 877
              },
              "id": null,
              "generator": false,
              "start": 812,
              "end": 877
            },
            "id": null,
            "generator": false,
            "start": 803,
            "end": 877
          },
          "definite": false,
          "start": 791,
          "end": 877
        }
      ],
      "declare": false,
      "start": 785,
      "end": 878
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "checked",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 893
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "checkType",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 905
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 907,
                          "end": 908
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 910,
                            "end": 916
                          },
                          "start": 908,
                          "end": 916
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 907,
                        "end": 917
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 918,
                          "end": 919
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 921,
                            "end": 927
                          },
                          "start": 919,
                          "end": 927
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 918,
                        "end": 927
                      }
                    ],
                    "start": 906,
                    "end": 928
                  }
                ],
                "start": 905,
                "end": 929
              },
              "arguments": [],
              "optional": false,
              "start": 896,
              "end": 931
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 936,
                      "end": 937
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 939,
                        "end": 940
                      },
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 944,
                        "end": 950
                      },
                      "start": 939,
                      "end": 950
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 936,
                    "end": 950
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 954,
                      "end": 955
                    },
                    "value": {
                      "type": "Literal",
                      "value": "y",
                      "raw": "\"y\"",
                      "start": 957,
                      "end": 960
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 954,
                    "end": 960
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 964,
                      "end": 965
                    },
                    "value": {
                      "type": "Literal",
                      "value": "z",
                      "raw": "\"z\"",
                      "start": 967,
                      "end": 970
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 964,
                    "end": 970
                  }
                ],
                "start": 932,
                "end": 1016
              }
            ],
            "optional": false,
            "start": 896,
            "end": 1017
          },
          "definite": false,
          "start": 886,
          "end": 1017
        }
      ],
      "declare": false,
      "start": 880,
      "end": 1018
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "checked",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1027
      },
      "directive": null,
      "start": 1020,
      "end": 1028
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Stuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 1134,
        "end": 1139
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1153,
                "end": 1159
              },
              "start": 1151,
              "end": 1159
            },
            "accessibility": null,
            "static": false,
            "start": 1146,
            "end": 1160
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "anotherField",
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1179,
                "end": 1185
              },
              "start": 1177,
              "end": 1185
            },
            "accessibility": null,
            "static": false,
            "start": 1165,
            "end": 1186
          }
        ],
        "start": 1140,
        "end": 1188
      },
      "declare": false,
      "start": 1124,
      "end": 1188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doStuffWithStuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 1199,
        "end": 1215
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1216,
              "end": 1217
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1231
              },
              "typeArguments": null,
              "start": 1226,
              "end": 1231
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1216,
            "end": 1231
          }
        ],
        "start": 1215,
        "end": 1232
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1239,
                "end": 1240
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1250,
                        "end": 1251
                      },
                      "typeArguments": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "start": 1244,
                    "end": 1251
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Stuff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1260,
                        "end": 1265
                      },
                      "typeArguments": null,
                      "start": 1260,
                      "end": 1265
                    },
                    "start": 1254,
                    "end": 1265
                  }
                ],
                "start": 1244,
                "end": 1265
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1268,
                    "end": 1269
                  },
                  "typeArguments": null,
                  "start": 1268,
                  "end": 1269
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1270,
                    "end": 1271
                  },
                  "typeArguments": null,
                  "start": 1270,
                  "end": 1271
                },
                "start": 1268,
                "end": 1272
              },
              "optional": false,
              "readonly": null,
              "start": 1236,
              "end": 1274
            },
            "start": 1234,
            "end": 1274
          },
          "start": 1233,
          "end": 1274
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1278,
            "end": 1279
          },
          "typeArguments": null,
          "start": 1278,
          "end": 1279
        },
        "start": 1276,
        "end": 1279
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1293
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1294,
                    "end": 1300
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1289,
                  "end": 1300
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1289,
                "end": 1302
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 1305,
                "end": 1308
              },
              "start": 1289,
              "end": 1308
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1325,
                      "end": 1326
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1330,
                        "end": 1331
                      },
                      "typeArguments": null,
                      "start": 1330,
                      "end": 1331
                    },
                    "start": 1325,
                    "end": 1331
                  },
                  "start": 1318,
                  "end": 1331
                }
              ],
              "start": 1310,
              "end": 1337
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1358,
                    "end": 1359
                  },
                  "start": 1351,
                  "end": 1359
                }
              ],
              "start": 1343,
              "end": 1365
            },
            "start": 1286,
            "end": 1365
          }
        ],
        "start": 1280,
        "end": 1367
      },
      "expression": false,
      "start": 1190,
      "end": 1367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doStuffWithStuff",
          "optional": false,
          "typeAnnotation": null,
          "start": 1369,
          "end": 1385
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1388,
                  "end": 1393
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1395,
                  "end": 1396
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1388,
                "end": 1396
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherField",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1398,
                  "end": 1410
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 1412,
                  "end": 1415
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1398,
                "end": 1415
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1417,
                  "end": 1422
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 1424,
                  "end": 1427
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1417,
                "end": 1427
              }
            ],
            "start": 1386,
            "end": 1429
          }
        ],
        "optional": false,
        "start": 1369,
        "end": 1430
      },
      "directive": null,
      "start": 1369,
      "end": 1430
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doStuffWithStuffArr",
        "optional": false,
        "typeAnnotation": null,
        "start": 1441,
        "end": 1460
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1461,
              "end": 1462
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Stuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1476
              },
              "typeArguments": null,
              "start": 1471,
              "end": 1476
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1461,
            "end": 1476
          }
        ],
        "start": 1460,
        "end": 1477
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1486,
                  "end": 1487
                },
                "constraint": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1497,
                          "end": 1498
                        },
                        "typeArguments": null,
                        "start": 1497,
                        "end": 1498
                      },
                      "start": 1491,
                      "end": 1498
                    },
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Stuff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1507,
                          "end": 1512
                        },
                        "typeArguments": null,
                        "start": 1507,
                        "end": 1512
                      },
                      "start": 1501,
                      "end": 1512
                    }
                  ],
                  "start": 1491,
                  "end": 1512
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1515,
                      "end": 1516
                    },
                    "typeArguments": null,
                    "start": 1515,
                    "end": 1516
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1517,
                      "end": 1518
                    },
                    "typeArguments": null,
                    "start": 1517,
                    "end": 1518
                  },
                  "start": 1515,
                  "end": 1519
                },
                "optional": false,
                "readonly": null,
                "start": 1483,
                "end": 1521
              },
              "start": 1483,
              "end": 1523
            },
            "start": 1481,
            "end": 1523
          },
          "start": 1478,
          "end": 1523
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1526,
              "end": 1527
            },
            "typeArguments": null,
            "start": 1526,
            "end": 1527
          },
          "start": 1526,
          "end": 1529
        },
        "start": 1524,
        "end": 1529
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1539,
                    "end": 1543
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1544,
                    "end": 1550
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1539,
                  "end": 1550
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1539,
                "end": 1552
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 1555,
                "end": 1558
              },
              "start": 1539,
              "end": 1558
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1575,
                      "end": 1578
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1582,
                          "end": 1583
                        },
                        "typeArguments": null,
                        "start": 1582,
                        "end": 1583
                      },
                      "start": 1582,
                      "end": 1585
                    },
                    "start": 1575,
                    "end": 1585
                  },
                  "start": 1568,
                  "end": 1585
                }
              ],
              "start": 1560,
              "end": 1591
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1612,
                    "end": 1615
                  },
                  "start": 1605,
                  "end": 1615
                }
              ],
              "start": 1597,
              "end": 1621
            },
            "start": 1536,
            "end": 1621
          }
        ],
        "start": 1530,
        "end": 1623
      },
      "expression": false,
      "start": 1432,
      "end": 1623
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doStuffWithStuffArr",
          "optional": false,
          "typeAnnotation": null,
          "start": 1625,
          "end": 1644
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1653,
                      "end": 1658
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1660,
                      "end": 1661
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1653,
                    "end": 1661
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anotherField",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1663,
                      "end": 1675
                    },
                    "value": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 1677,
                      "end": 1680
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1663,
                    "end": 1680
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1682,
                      "end": 1687
                    },
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 1689,
                      "end": 1692
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1682,
                    "end": 1692
                  }
                ],
                "start": 1651,
                "end": 1694
              }
            ],
            "start": 1645,
            "end": 1697
          }
        ],
        "optional": false,
        "start": 1625,
        "end": 1698
      },
      "directive": null,
      "start": 1625,
      "end": 1698
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 1799,
        "end": 1806
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1811,
              "end": 1812
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1814,
                "end": 1820
              },
              "start": 1812,
              "end": 1820
            },
            "accessibility": null,
            "static": false,
            "start": 1811,
            "end": 1820
          }
        ],
        "start": 1809,
        "end": 1822
      },
      "declare": false,
      "start": 1794,
      "end": 1822
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1841,
        "end": 1844
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1845,
              "end": 1846
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "XNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 1855,
                "end": 1862
              },
              "typeArguments": null,
              "start": 1855,
              "end": 1862
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1845,
            "end": 1862
          }
        ],
        "start": 1844,
        "end": 1863
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1873,
                "end": 1874
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1884,
                        "end": 1885
                      },
                      "typeArguments": null,
                      "start": 1884,
                      "end": 1885
                    },
                    "start": 1878,
                    "end": 1885
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1894,
                        "end": 1901
                      },
                      "typeArguments": null,
                      "start": 1894,
                      "end": 1901
                    },
                    "start": 1888,
                    "end": 1901
                  }
                ],
                "start": 1878,
                "end": 1901
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1904,
                    "end": 1905
                  },
                  "typeArguments": null,
                  "start": 1904,
                  "end": 1905
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1906,
                    "end": 1907
                  },
                  "typeArguments": null,
                  "start": 1906,
                  "end": 1907
                },
                "start": 1904,
                "end": 1908
              },
              "optional": false,
              "readonly": null,
              "start": 1871,
              "end": 1909
            },
            "start": 1869,
            "end": 1909
          },
          "start": 1864,
          "end": 1909
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1912,
          "end": 1916
        },
        "start": 1910,
        "end": 1916
      },
      "body": null,
      "expression": false,
      "start": 1824,
      "end": 1917
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1928,
        "end": 1931
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1940,
                    "end": 1941
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1943,
                      "end": 1949
                    },
                    "start": 1941,
                    "end": 1949
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1940,
                  "end": 1950
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1951,
                    "end": 1952
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1954,
                      "end": 1960
                    },
                    "start": 1952,
                    "end": 1960
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1951,
                  "end": 1960
                }
              ],
              "start": 1939,
              "end": 1961
            },
            "start": 1937,
            "end": 1961
          },
          "start": 1932,
          "end": 1961
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1974,
                "end": 1977
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1978,
                  "end": 1983
                }
              ],
              "optional": false,
              "start": 1974,
              "end": 1984
            },
            "start": 1967,
            "end": 1985
          }
        ],
        "start": 1963,
        "end": 2047
      },
      "expression": false,
      "start": 1919,
      "end": 2047
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 2049,
          "end": 2052
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2054,
                  "end": 2055
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2057,
                  "end": 2058
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2054,
                "end": 2058
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2060,
                  "end": 2061
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2063,
                  "end": 2068
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2060,
                "end": 2068
              }
            ],
            "start": 2053,
            "end": 2069
          }
        ],
        "optional": false,
        "start": 2049,
        "end": 2070
      },
      "directive": null,
      "start": 2049,
      "end": 2071
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 2073,
          "end": 2076
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2082,
                        "end": 2083
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2085,
                        "end": 2086
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2082,
                      "end": 2086
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2088,
                        "end": 2089
                      },
                      "value": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 2091,
                        "end": 2096
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2088,
                      "end": 2096
                    }
                  ],
                  "start": 2081,
                  "end": 2097
                },
                "start": 2078,
                "end": 2097
              }
            ],
            "start": 2077,
            "end": 2098
          }
        ],
        "optional": false,
        "start": 2073,
        "end": 2099
      },
      "directive": null,
      "start": 2073,
      "end": 2100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoErrWithOptProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 2261,
        "end": 2278
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2283,
              "end": 2284
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2286,
                "end": 2292
              },
              "start": 2284,
              "end": 2292
            },
            "accessibility": null,
            "static": false,
            "start": 2283,
            "end": 2293
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2294,
              "end": 2295
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2298,
                "end": 2304
              },
              "start": 2296,
              "end": 2304
            },
            "accessibility": null,
            "static": false,
            "start": 2294,
            "end": 2304
          }
        ],
        "start": 2281,
        "end": 2306
      },
      "declare": false,
      "start": 2256,
      "end": 2306
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 2325,
        "end": 2328
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2329,
              "end": 2330
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoErrWithOptProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 2339,
                "end": 2356
              },
              "typeArguments": null,
              "start": 2339,
              "end": 2356
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2329,
            "end": 2356
          }
        ],
        "start": 2328,
        "end": 2357
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2367,
                "end": 2368
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2378,
                        "end": 2379
                      },
                      "typeArguments": null,
                      "start": 2378,
                      "end": 2379
                    },
                    "start": 2372,
                    "end": 2379
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoErrWithOptProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2388,
                        "end": 2405
                      },
                      "typeArguments": null,
                      "start": 2388,
                      "end": 2405
                    },
                    "start": 2382,
                    "end": 2405
                  }
                ],
                "start": 2372,
                "end": 2405
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2408,
                    "end": 2409
                  },
                  "typeArguments": null,
                  "start": 2408,
                  "end": 2409
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2410,
                    "end": 2411
                  },
                  "typeArguments": null,
                  "start": 2410,
                  "end": 2411
                },
                "start": 2408,
                "end": 2412
              },
              "optional": false,
              "readonly": null,
              "start": 2365,
              "end": 2413
            },
            "start": 2363,
            "end": 2413
          },
          "start": 2358,
          "end": 2413
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2416,
          "end": 2420
        },
        "start": 2414,
        "end": 2420
      },
      "body": null,
      "expression": false,
      "start": 2308,
      "end": 2421
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 2423,
          "end": 2426
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2428,
                  "end": 2429
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2431,
                  "end": 2432
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2428,
                "end": 2432
              }
            ],
            "start": 2427,
            "end": 2433
          }
        ],
        "optional": false,
        "start": 2423,
        "end": 2434
      },
      "directive": null,
      "start": 2423,
      "end": 2435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 2436,
          "end": 2439
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2441,
                  "end": 2442
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2444,
                  "end": 2445
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2441,
                "end": 2445
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2447,
                  "end": 2448
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 2450,
                  "end": 2453
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2447,
                "end": 2453
              }
            ],
            "start": 2440,
            "end": 2454
          }
        ],
        "optional": false,
        "start": 2436,
        "end": 2455
      },
      "directive": null,
      "start": 2436,
      "end": 2456
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 2457,
          "end": 2460
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2462,
                  "end": 2463
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2465,
                  "end": 2466
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2462,
                "end": 2466
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2468,
                  "end": 2469
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2471,
                  "end": 2476
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2468,
                "end": 2476
              }
            ],
            "start": 2461,
            "end": 2477
          }
        ],
        "optional": false,
        "start": 2457,
        "end": 2478
      },
      "directive": null,
      "start": 2457,
      "end": 2479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 2480,
          "end": 2483
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2485,
                  "end": 2486
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2488,
                  "end": 2489
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2485,
                "end": 2489
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2491,
                  "end": 2492
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2494,
                  "end": 2499
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2491,
                "end": 2499
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2501,
                  "end": 2502
                },
                "value": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 2504,
                  "end": 2507
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2501,
                "end": 2507
              }
            ],
            "start": 2484,
            "end": 2508
          }
        ],
        "optional": false,
        "start": 2480,
        "end": 2509
      },
      "directive": null,
      "start": 2480,
      "end": 2510
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithNestedProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 2616,
        "end": 2630
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2635,
              "end": 2639
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2641,
                "end": 2647
              },
              "start": 2639,
              "end": 2647
            },
            "accessibility": null,
            "static": false,
            "start": 2635,
            "end": 2648
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 2651,
              "end": 2657
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2665,
                      "end": 2669
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2671,
                        "end": 2677
                      },
                      "start": 2669,
                      "end": 2677
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2665,
                    "end": 2678
                  }
                ],
                "start": 2659,
                "end": 2682
              },
              "start": 2657,
              "end": 2682
            },
            "accessibility": null,
            "static": false,
            "start": 2651,
            "end": 2682
          }
        ],
        "start": 2631,
        "end": 2684
      },
      "declare": false,
      "start": 2606,
      "end": 2684
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withNestedProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 2703,
        "end": 2717
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2718,
              "end": 2719
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WithNestedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 2728,
                "end": 2742
              },
              "typeArguments": null,
              "start": 2728,
              "end": 2742
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2718,
            "end": 2742
          }
        ],
        "start": 2717,
        "end": 2743
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2753,
                "end": 2754
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2764,
                        "end": 2765
                      },
                      "typeArguments": null,
                      "start": 2764,
                      "end": 2765
                    },
                    "start": 2758,
                    "end": 2765
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WithNestedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2774,
                        "end": 2788
                      },
                      "typeArguments": null,
                      "start": 2774,
                      "end": 2788
                    },
                    "start": 2768,
                    "end": 2788
                  }
                ],
                "start": 2758,
                "end": 2788
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2791,
                    "end": 2792
                  },
                  "typeArguments": null,
                  "start": 2791,
                  "end": 2792
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2793,
                    "end": 2794
                  },
                  "typeArguments": null,
                  "start": 2793,
                  "end": 2794
                },
                "start": 2791,
                "end": 2795
              },
              "optional": false,
              "readonly": null,
              "start": 2751,
              "end": 2796
            },
            "start": 2749,
            "end": 2796
          },
          "start": 2744,
          "end": 2796
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2799,
            "end": 2800
          },
          "typeArguments": null,
          "start": 2799,
          "end": 2800
        },
        "start": 2797,
        "end": 2800
      },
      "body": null,
      "expression": false,
      "start": 2686,
      "end": 2801
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wnp",
            "optional": false,
            "typeAnnotation": null,
            "start": 2809,
            "end": 2812
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withNestedProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 2815,
              "end": 2829
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2831,
                      "end": 2835
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 2837,
                      "end": 2842
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2831,
                    "end": 2842
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2844,
                      "end": 2850
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2854,
                            "end": 2858
                          },
                          "value": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 2860,
                            "end": 2865
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2854,
                          "end": 2865
                        }
                      ],
                      "start": 2852,
                      "end": 2867
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2844,
                    "end": 2867
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2869,
                      "end": 2874
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 2876,
                      "end": 2878
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2869,
                    "end": 2878
                  }
                ],
                "start": 2830,
                "end": 2880
              }
            ],
            "optional": false,
            "start": 2815,
            "end": 2881
          },
          "definite": false,
          "start": 2809,
          "end": 2881
        }
      ],
      "declare": false,
      "start": 2803,
      "end": 2882
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsLiteralString",
        "optional": false,
        "typeAnnotation": null,
        "start": 2983,
        "end": 2998
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2999,
              "end": 3000
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3009,
              "end": 3015
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2999,
            "end": 3015
          }
        ],
        "start": 2998,
        "end": 3016
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 3019,
          "end": 3025
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3034,
            "end": 3035
          },
          "typeArguments": null,
          "start": 3034,
          "end": 3035
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 3038,
            "end": 3043
          },
          "start": 3038,
          "end": 3043
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3046,
            "end": 3050
          },
          "start": 3046,
          "end": 3050
        },
        "start": 3019,
        "end": 3050
      },
      "declare": false,
      "start": 2978,
      "end": 3051
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepWritable",
        "optional": false,
        "typeAnnotation": null,
        "start": 3058,
        "end": 3070
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3071,
              "end": 3072
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3071,
            "end": 3072
          }
        ],
        "start": 3070,
        "end": 3073
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3076,
            "end": 3077
          },
          "typeArguments": null,
          "start": 3076,
          "end": 3077
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 3086,
            "end": 3094
          },
          "typeArguments": null,
          "start": 3086,
          "end": 3094
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3097,
            "end": 3098
          },
          "typeArguments": null,
          "start": 3097,
          "end": 3098
        },
        "falseType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 3114,
            "end": 3115
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3125,
                "end": 3126
              },
              "typeArguments": null,
              "start": 3125,
              "end": 3126
            },
            "start": 3119,
            "end": 3126
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DeepWritable",
              "optional": false,
              "typeAnnotation": null,
              "start": 3129,
              "end": 3141
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3142,
                      "end": 3143
                    },
                    "typeArguments": null,
                    "start": 3142,
                    "end": 3143
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3144,
                      "end": 3145
                    },
                    "typeArguments": null,
                    "start": 3144,
                    "end": 3145
                  },
                  "start": 3142,
                  "end": 3146
                }
              ],
              "start": 3141,
              "end": 3147
            },
            "start": 3129,
            "end": 3147
          },
          "optional": false,
          "readonly": "-",
          "start": 3101,
          "end": 3149
        },
        "start": 3076,
        "end": 3149
      },
      "declare": false,
      "start": 3053,
      "end": 3149
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProvidedActor",
        "optional": false,
        "typeAnnotation": null,
        "start": 3161,
        "end": 3174
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "src",
              "optional": false,
              "typeAnnotation": null,
              "start": 3179,
              "end": 3182
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3184,
                "end": 3190
              },
              "start": 3182,
              "end": 3190
            },
            "accessibility": null,
            "static": false,
            "start": 3179,
            "end": 3191
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "logic",
              "optional": false,
              "typeAnnotation": null,
              "start": 3194,
              "end": 3199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3207,
                      "end": 3214
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSUnknownKeyword",
                          "start": 3215,
                          "end": 3222
                        }
                      ],
                      "start": 3214,
                      "end": 3223
                    },
                    "start": 3207,
                    "end": 3223
                  },
                  "start": 3204,
                  "end": 3223
                },
                "start": 3201,
                "end": 3223
              },
              "start": 3199,
              "end": 3223
            },
            "accessibility": null,
            "static": false,
            "start": 3194,
            "end": 3224
          }
        ],
        "start": 3175,
        "end": 3226
      },
      "declare": false,
      "start": 3151,
      "end": 3226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DistributeActors",
        "optional": false,
        "typeAnnotation": null,
        "start": 3233,
        "end": 3249
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3250,
              "end": 3256
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3250,
            "end": 3256
          }
        ],
        "start": 3249,
        "end": 3257
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3260,
            "end": 3266
          },
          "typeArguments": null,
          "start": 3260,
          "end": 3266
        },
        "extendsType": {
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
                "name": "src",
                "optional": false,
                "typeAnnotation": null,
                "start": 3277,
                "end": 3280
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TSrc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3288,
                      "end": 3292
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3288,
                    "end": 3292
                  },
                  "start": 3282,
                  "end": 3292
                },
                "start": 3280,
                "end": 3292
              },
              "accessibility": null,
              "static": false,
              "start": 3277,
              "end": 3292
            }
          ],
          "start": 3275,
          "end": 3294
        },
        "trueType": {
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
                "name": "src",
                "optional": false,
                "typeAnnotation": null,
                "start": 3307,
                "end": 3310
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TSrc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3312,
                    "end": 3316
                  },
                  "typeArguments": null,
                  "start": 3312,
                  "end": 3316
                },
                "start": 3310,
                "end": 3316
              },
              "accessibility": null,
              "static": false,
              "start": 3307,
              "end": 3317
            }
          ],
          "start": 3299,
          "end": 3323
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3328,
          "end": 3333
        },
        "start": 3260,
        "end": 3333
      },
      "declare": false,
      "start": 3228,
      "end": 3334
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 3346,
        "end": 3359
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3360,
              "end": 3366
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 3375,
                "end": 3388
              },
              "typeArguments": null,
              "start": 3375,
              "end": 3388
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3360,
            "end": 3388
          }
        ],
        "start": 3359,
        "end": 3389
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null,
              "start": 3394,
              "end": 3399
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "actors",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3408,
                      "end": 3414
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TActor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3417,
                          "end": 3423
                        },
                        "typeArguments": null,
                        "start": 3417,
                        "end": 3423
                      },
                      "start": 3415,
                      "end": 3423
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3408,
                    "end": 3424
                  }
                ],
                "start": 3402,
                "end": 3428
              },
              "start": 3400,
              "end": 3428
            },
            "accessibility": null,
            "static": false,
            "start": 3394,
            "end": 3429
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invoke",
              "optional": false,
              "typeAnnotation": null,
              "start": 3432,
              "end": 3438
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsLiteralString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3440,
                    "end": 3455
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TActor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3456,
                            "end": 3462
                          },
                          "typeArguments": null,
                          "start": 3456,
                          "end": 3462
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "src",
                            "raw": "\"src\"",
                            "start": 3463,
                            "end": 3468
                          },
                          "start": 3463,
                          "end": 3468
                        },
                        "start": 3456,
                        "end": 3469
                      }
                    ],
                    "start": 3455,
                    "end": 3470
                  },
                  "start": 3440,
                  "end": 3470
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3479,
                    "end": 3483
                  },
                  "start": 3479,
                  "end": 3483
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DistributeActors",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3490,
                    "end": 3506
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TActor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3507,
                          "end": 3513
                        },
                        "typeArguments": null,
                        "start": 3507,
                        "end": 3513
                      }
                    ],
                    "start": 3506,
                    "end": 3514
                  },
                  "start": 3490,
                  "end": 3514
                },
                "falseType": {
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
                        "name": "src",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3531,
                        "end": 3534
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3536,
                          "end": 3542
                        },
                        "start": 3534,
                        "end": 3542
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3531,
                      "end": 3543
                    }
                  ],
                  "start": 3521,
                  "end": 3551
                },
                "start": 3440,
                "end": 3551
              },
              "start": 3438,
              "end": 3551
            },
            "accessibility": null,
            "static": false,
            "start": 3432,
            "end": 3552
          }
        ],
        "start": 3390,
        "end": 3554
      },
      "declare": false,
      "start": 3336,
      "end": 3554
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoExtra",
        "optional": false,
        "typeAnnotation": null,
        "start": 3561,
        "end": 3568
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3569,
              "end": 3570
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3569,
            "end": 3570
          }
        ],
        "start": 3568,
        "end": 3571
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 3579,
          "end": 3580
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3590,
              "end": 3591
            },
            "typeArguments": null,
            "start": 3590,
            "end": 3591
          },
          "start": 3584,
          "end": 3591
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3594,
              "end": 3595
            },
            "typeArguments": null,
            "start": 3594,
            "end": 3595
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MachineConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 3610,
                "end": 3623
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 3624,
                    "end": 3627
                  }
                ],
                "start": 3623,
                "end": 3628
              },
              "start": 3610,
              "end": 3628
            },
            "start": 3604,
            "end": 3628
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3631,
                "end": 3632
              },
              "typeArguments": null,
              "start": 3631,
              "end": 3632
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3633,
                "end": 3634
              },
              "typeArguments": null,
              "start": 3633,
              "end": 3634
            },
            "start": 3631,
            "end": 3635
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3638,
            "end": 3643
          },
          "start": 3594,
          "end": 3643
        },
        "optional": false,
        "readonly": null,
        "start": 3574,
        "end": 3645
      },
      "declare": false,
      "start": 3556,
      "end": 3645
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createXMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 3664,
        "end": 3678
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 3688,
              "end": 3695
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MachineConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 3704,
                "end": 3717
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TActor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3718,
                      "end": 3724
                    },
                    "typeArguments": null,
                    "start": 3718,
                    "end": 3724
                  }
                ],
                "start": 3717,
                "end": 3725
              },
              "start": 3704,
              "end": 3725
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 3682,
            "end": 3725
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3729,
              "end": 3735
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProvidedActor",
                "optional": false,
                "typeAnnotation": null,
                "start": 3744,
                "end": 3757
              },
              "typeArguments": null,
              "start": 3744,
              "end": 3757
            },
            "default": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TConfig",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3760,
                  "end": 3767
                },
                "typeArguments": null,
                "start": 3760,
                "end": 3767
              },
              "extendsType": {
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
                      "name": "types",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3778,
                      "end": 3783
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
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
                              "name": "actors",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3787,
                              "end": 3793
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ProvidedActor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3795,
                                  "end": 3808
                                },
                                "typeArguments": null,
                                "start": 3795,
                                "end": 3808
                              },
                              "start": 3793,
                              "end": 3808
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3787,
                            "end": 3808
                          }
                        ],
                        "start": 3785,
                        "end": 3809
                      },
                      "start": 3783,
                      "end": 3809
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3778,
                    "end": 3809
                  }
                ],
                "start": 3776,
                "end": 3811
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TConfig",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3814,
                      "end": 3821
                    },
                    "typeArguments": null,
                    "start": 3814,
                    "end": 3821
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "types",
                      "raw": "\"types\"",
                      "start": 3822,
                      "end": 3829
                    },
                    "start": 3822,
                    "end": 3829
                  },
                  "start": 3814,
                  "end": 3830
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "actors",
                    "raw": "\"actors\"",
                    "start": 3831,
                    "end": 3839
                  },
                  "start": 3831,
                  "end": 3839
                },
                "start": 3814,
                "end": 3840
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ProvidedActor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3843,
                  "end": 3856
                },
                "typeArguments": null,
                "start": 3843,
                "end": 3856
              },
              "start": 3760,
              "end": 3856
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3729,
            "end": 3856
          }
        ],
        "start": 3678,
        "end": 3859
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3870,
                "end": 3871
              },
              "constraint": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MachineConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3881,
                        "end": 3894
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 3895,
                            "end": 3898
                          }
                        ],
                        "start": 3894,
                        "end": 3899
                      },
                      "start": 3881,
                      "end": 3899
                    },
                    "start": 3875,
                    "end": 3899
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3908,
                        "end": 3915
                      },
                      "typeArguments": null,
                      "start": 3908,
                      "end": 3915
                    },
                    "start": 3902,
                    "end": 3915
                  }
                ],
                "start": 3875,
                "end": 3915
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3918,
                    "end": 3925
                  },
                  "typeArguments": null,
                  "start": 3918,
                  "end": 3925
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3926,
                    "end": 3927
                  },
                  "typeArguments": null,
                  "start": 3926,
                  "end": 3927
                },
                "start": 3918,
                "end": 3928
              },
              "optional": false,
              "readonly": null,
              "start": 3868,
              "end": 3930
            },
            "start": 3866,
            "end": 3930
          },
          "start": 3860,
          "end": 3930
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 3933,
            "end": 3940
          },
          "typeArguments": null,
          "start": 3933,
          "end": 3940
        },
        "start": 3931,
        "end": 3940
      },
      "body": null,
      "expression": false,
      "start": 3647,
      "end": 3941
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "child",
            "optional": false,
            "typeAnnotation": null,
            "start": 3949,
            "end": 3954
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3963,
                  "end": 3970
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3971,
                  "end": 3978
                },
                "optional": false,
                "computed": false,
                "start": 3963,
                "end": 3978
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 3979,
                  "end": 3984
                }
              ],
              "optional": false,
              "start": 3963,
              "end": 3985
            },
            "id": null,
            "generator": false,
            "start": 3957,
            "end": 3985
          },
          "definite": false,
          "start": 3949,
          "end": 3985
        }
      ],
      "declare": false,
      "start": 3943,
      "end": 3986
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 3994,
            "end": 4000
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createXMachine",
              "optional": false,
              "typeAnnotation": null,
              "start": 4003,
              "end": 4017
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "types",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4022,
                      "end": 4027
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 4029,
                        "end": 4031
                      },
                      "typeAnnotation": {
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
                              "name": "actors",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4041,
                              "end": 4047
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
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
                                      "name": "src",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4057,
                                      "end": 4060
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": "str",
                                          "raw": "\"str\"",
                                          "start": 4062,
                                          "end": 4067
                                        },
                                        "start": 4062,
                                        "end": 4067
                                      },
                                      "start": 4060,
                                      "end": 4067
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 4057,
                                    "end": 4068
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logic",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4075,
                                      "end": 4080
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeQuery",
                                        "exprName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "child",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4089,
                                          "end": 4094
                                        },
                                        "typeArguments": null,
                                        "start": 4082,
                                        "end": 4094
                                      },
                                      "start": 4080,
                                      "end": 4094
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 4075,
                                    "end": 4095
                                  }
                                ],
                                "start": 4049,
                                "end": 4101
                              },
                              "start": 4047,
                              "end": 4101
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 4041,
                            "end": 4102
                          }
                        ],
                        "start": 4035,
                        "end": 4106
                      },
                      "start": 4029,
                      "end": 4106
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4022,
                    "end": 4106
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "invoke",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4110,
                      "end": 4116
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "src",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4124,
                            "end": 4127
                          },
                          "value": {
                            "type": "Literal",
                            "value": "str",
                            "raw": "\"str\"",
                            "start": 4129,
                            "end": 4134
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4124,
                          "end": 4134
                        }
                      ],
                      "start": 4118,
                      "end": 4139
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4110,
                    "end": 4139
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4143,
                      "end": 4148
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 4150,
                      "end": 4152
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4143,
                    "end": 4152
                  }
                ],
                "start": 4018,
                "end": 4154
              }
            ],
            "optional": false,
            "start": 4003,
            "end": 4155
          },
          "definite": false,
          "start": 3994,
          "end": 4155
        }
      ],
      "declare": false,
      "start": 3988,
      "end": 4156
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4164,
            "end": 4171
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createXMachine",
              "optional": false,
              "typeAnnotation": null,
              "start": 4174,
              "end": 4188
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "invoke",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4193,
                      "end": 4199
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "src",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4207,
                            "end": 4210
                          },
                          "value": {
                            "type": "Literal",
                            "value": "whatever",
                            "raw": "\"whatever\"",
                            "start": 4212,
                            "end": 4222
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4207,
                          "end": 4222
                        }
                      ],
                      "start": 4201,
                      "end": 4227
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4193,
                    "end": 4227
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4231,
                      "end": 4236
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 4238,
                      "end": 4240
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4231,
                    "end": 4240
                  }
                ],
                "start": 4189,
                "end": 4242
              }
            ],
            "optional": false,
            "start": 4174,
            "end": 4243
          },
          "definite": false,
          "start": 4164,
          "end": 4243
        }
      ],
      "declare": false,
      "start": 4158,
      "end": 4244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4244
}
```
