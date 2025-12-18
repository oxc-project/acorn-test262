__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "StateConfig",
    "start": 5,
    "end": 16,
    "range": [
      5,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "TAction",
    "start": 17,
    "end": 24,
    "range": [
      17,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 25,
    "end": 32,
    "range": [
      25,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 47,
    "end": 52,
    "range": [
      47,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "TAction",
    "start": 55,
    "end": 62,
    "range": [
      55,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "states",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "StateConfig",
    "start": 89,
    "end": 100,
    "range": [
      89,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "TAction",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 116,
    "end": 120,
    "range": [
      116,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "StateSchema",
    "start": 121,
    "end": 132,
    "range": [
      121,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "states",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 148,
    "end": 154,
    "range": [
      148,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 155,
    "end": 161,
    "range": [
      155,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "StateSchema",
    "start": 163,
    "end": 174,
    "range": [
      163,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 181,
    "end": 188,
    "range": [
      181,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 189,
    "end": 197,
    "range": [
      189,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 198,
    "end": 211,
    "range": [
      198,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 215,
    "end": 222,
    "range": [
      215,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 223,
    "end": 230,
    "range": [
      223,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "StateConfig",
    "start": 231,
    "end": 242,
    "range": [
      231,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "TAction",
    "start": 243,
    "end": 250,
    "range": [
      243,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "TAction",
    "start": 255,
    "end": 262,
    "range": [
      255,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 263,
    "end": 270,
    "range": [
      263,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 271,
    "end": 277,
    "range": [
      271,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 280,
    "end": 287,
    "range": [
      280,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "String",
    "value": "\"entry\"",
    "start": 288,
    "end": 295,
    "range": [
      288,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 297,
    "end": 304,
    "range": [
      297,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 305,
    "end": 311,
    "range": [
      305,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 314,
    "end": 321,
    "range": [
      314,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "String",
    "value": "\"entry\"",
    "start": 322,
    "end": 329,
    "range": [
      322,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 333,
    "end": 339,
    "range": [
      333,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 343,
    "end": 349,
    "range": [
      343,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 356,
    "end": 358,
    "range": [
      356,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 359,
    "end": 364,
    "range": [
      359,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 365,
    "end": 372,
    "range": [
      365,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 375,
    "end": 380,
    "range": [
      375,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "StateConfig",
    "start": 381,
    "end": 392,
    "range": [
      381,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 393,
    "end": 396,
    "range": [
      393,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 400,
    "end": 407,
    "range": [
      400,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "TAction",
    "start": 416,
    "end": 423,
    "range": [
      416,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 425,
    "end": 432,
    "range": [
      425,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 436,
    "end": 441,
    "range": [
      436,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "inferredParams1",
    "start": 442,
    "end": 457,
    "range": [
      442,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 460,
    "end": 473,
    "range": [
      460,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 478,
    "end": 483,
    "range": [
      478,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 485,
    "end": 490,
    "range": [
      485,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "states",
    "start": 494,
    "end": 500,
    "range": [
      494,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 519,
    "end": 524,
    "range": [
      519,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 547,
    "end": 552,
    "range": [
      547,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 554,
    "end": 556,
    "range": [
      554,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 563,
    "end": 568,
    "range": [
      563,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "inferredParams2",
    "start": 569,
    "end": 584,
    "range": [
      569,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 587,
    "end": 600,
    "range": [
      587,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 605,
    "end": 610,
    "range": [
      605,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 612,
    "end": 617,
    "range": [
      612,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "states",
    "start": 621,
    "end": 627,
    "range": [
      621,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 646,
    "end": 651,
    "range": [
      646,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 653,
    "end": 658,
    "range": [
      653,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 674,
    "end": 679,
    "range": [
      674,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 681,
    "end": 683,
    "range": [
      681,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 785,
    "end": 790,
    "range": [
      785,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "checkType",
    "start": 791,
    "end": 800,
    "range": [
      791,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 809,
    "end": 811,
    "range": [
      809,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 815,
    "end": 822,
    "range": [
      815,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 826,
    "end": 831,
    "range": [
      826,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 838,
    "end": 840,
    "range": [
      838,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 841,
    "end": 846,
    "range": [
      841,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 851,
    "end": 856,
    "range": [
      851,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 869,
    "end": 871,
    "range": [
      869,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 872,
    "end": 877,
    "range": [
      872,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 880,
    "end": 885,
    "range": [
      880,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "checked",
    "start": 886,
    "end": 893,
    "range": [
      886,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "checkType",
    "start": 896,
    "end": 905,
    "range": [
      896,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 910,
    "end": 916,
    "range": [
      910,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 921,
    "end": 927,
    "range": [
      921,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 941,
    "end": 943,
    "range": [
      941,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 944,
    "end": 950,
    "range": [
      944,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 957,
    "end": 960,
    "range": [
      957,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 967,
    "end": 970,
    "range": [
      967,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "checked",
    "start": 1020,
    "end": 1027,
    "range": [
      1020,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1124,
    "end": 1133,
    "range": [
      1124,
      1133
    ]
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 1134,
    "end": 1139,
    "range": [
      1134,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 1146,
    "end": 1151,
    "range": [
      1146,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1153,
    "end": 1159,
    "range": [
      1153,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "anotherField",
    "start": 1165,
    "end": 1177,
    "range": [
      1165,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1179,
    "end": 1185,
    "range": [
      1179,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1190,
    "end": 1198,
    "range": [
      1190,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "doStuffWithStuff",
    "start": 1199,
    "end": 1215,
    "range": [
      1199,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1218,
    "end": 1225,
    "range": [
      1218,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 1226,
    "end": 1231,
    "range": [
      1226,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1241,
    "end": 1243,
    "range": [
      1241,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1244,
    "end": 1249,
    "range": [
      1244,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1254,
    "end": 1259,
    "range": [
      1254,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 1260,
    "end": 1265,
    "range": [
      1260,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1286,
    "end": 1288,
    "range": [
      1286,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1289,
    "end": 1293,
    "range": [
      1289,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1294,
    "end": 1300,
    "range": [
      1294,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 1305,
    "end": 1308,
    "range": [
      1305,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1318,
    "end": 1324,
    "range": [
      1318,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1327,
    "end": 1329,
    "range": [
      1327,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1338,
    "end": 1342,
    "range": [
      1338,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1351,
    "end": 1357,
    "range": [
      1351,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "doStuffWithStuff",
    "start": 1369,
    "end": 1385,
    "range": [
      1369,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 1388,
    "end": 1393,
    "range": [
      1388,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "anotherField",
    "start": 1398,
    "end": 1410,
    "range": [
      1398,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1412,
    "end": 1415,
    "range": [
      1412,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 1417,
    "end": 1422,
    "range": [
      1417,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1424,
    "end": 1427,
    "range": [
      1424,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1432,
    "end": 1440,
    "range": [
      1432,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "doStuffWithStuffArr",
    "start": 1441,
    "end": 1460,
    "range": [
      1441,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1463,
    "end": 1470,
    "range": [
      1463,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 1471,
    "end": 1476,
    "range": [
      1471,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1478,
    "end": 1481,
    "range": [
      1478,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1488,
    "end": 1490,
    "range": [
      1488,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1491,
    "end": 1496,
    "range": [
      1491,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1501,
    "end": 1506,
    "range": [
      1501,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "Stuff",
    "start": 1507,
    "end": 1512,
    "range": [
      1507,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1536,
    "end": 1538,
    "range": [
      1536,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1539,
    "end": 1543,
    "range": [
      1539,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1544,
    "end": 1550,
    "range": [
      1544,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 1555,
    "end": 1558,
    "range": [
      1555,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1568,
    "end": 1574,
    "range": [
      1568,
      1574
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1575,
    "end": 1578,
    "range": [
      1575,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1579,
    "end": 1581,
    "range": [
      1579,
      1581
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1592,
    "end": 1596,
    "range": [
      1592,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1605,
    "end": 1611,
    "range": [
      1605,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1612,
    "end": 1615,
    "range": [
      1612,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "doStuffWithStuffArr",
    "start": 1625,
    "end": 1644,
    "range": [
      1625,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 1653,
    "end": 1658,
    "range": [
      1653,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "anotherField",
    "start": 1663,
    "end": 1675,
    "range": [
      1663,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1677,
    "end": 1680,
    "range": [
      1677,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 1682,
    "end": 1687,
    "range": [
      1682,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1689,
    "end": 1692,
    "range": [
      1689,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1794,
    "end": 1798,
    "range": [
      1794,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "XNumber",
    "start": 1799,
    "end": 1806,
    "range": [
      1799,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1814,
    "end": 1820,
    "range": [
      1814,
      1820
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1824,
    "end": 1831,
    "range": [
      1824,
      1831
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1832,
    "end": 1840,
    "range": [
      1832,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1841,
    "end": 1844,
    "range": [
      1841,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1847,
    "end": 1854,
    "range": [
      1847,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "XNumber",
    "start": 1855,
    "end": 1862,
    "range": [
      1855,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1864,
    "end": 1869,
    "range": [
      1864,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1875,
    "end": 1877,
    "range": [
      1875,
      1877
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1878,
    "end": 1883,
    "range": [
      1878,
      1883
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1888,
    "end": 1893,
    "range": [
      1888,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "XNumber",
    "start": 1894,
    "end": 1901,
    "range": [
      1894,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1912,
    "end": 1916,
    "range": [
      1912,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1919,
    "end": 1927,
    "range": [
      1919,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1928,
    "end": 1931,
    "range": [
      1928,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1932,
    "end": 1937,
    "range": [
      1932,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1943,
    "end": 1949,
    "range": [
      1943,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1954,
    "end": 1960,
    "range": [
      1954,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1967,
    "end": 1973,
    "range": [
      1967,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1974,
    "end": 1977,
    "range": [
      1974,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 1978,
    "end": 1983,
    "range": [
      1978,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2049,
    "end": 2052,
    "range": [
      2049,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2063,
    "end": 2068,
    "range": [
      2063,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2073,
    "end": 2076,
    "range": [
      2073,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2078,
    "end": 2081,
    "range": [
      2078,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2091,
    "end": 2096,
    "range": [
      2091,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2256,
    "end": 2260,
    "range": [
      2256,
      2260
    ]
  },
  {
    "type": "Identifier",
    "value": "NoErrWithOptProps",
    "start": 2261,
    "end": 2278,
    "range": [
      2261,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2286,
    "end": 2292,
    "range": [
      2286,
      2292
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2298,
    "end": 2304,
    "range": [
      2298,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2308,
    "end": 2315,
    "range": [
      2308,
      2315
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2316,
    "end": 2324,
    "range": [
      2316,
      2324
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2325,
    "end": 2328,
    "range": [
      2325,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2328,
    "end": 2329,
    "range": [
      2328,
      2329
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2329,
    "end": 2330,
    "range": [
      2329,
      2330
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2331,
    "end": 2338,
    "range": [
      2331,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "NoErrWithOptProps",
    "start": 2339,
    "end": 2356,
    "range": [
      2339,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2358,
    "end": 2363,
    "range": [
      2358,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2367,
    "end": 2368,
    "range": [
      2367,
      2368
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2369,
    "end": 2371,
    "range": [
      2369,
      2371
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2372,
    "end": 2377,
    "range": [
      2372,
      2377
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2382,
    "end": 2387,
    "range": [
      2382,
      2387
    ]
  },
  {
    "type": "Identifier",
    "value": "NoErrWithOptProps",
    "start": 2388,
    "end": 2405,
    "range": [
      2388,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2416,
    "end": 2420,
    "range": [
      2416,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2423,
    "end": 2426,
    "range": [
      2423,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2436,
    "end": 2439,
    "range": [
      2436,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2445,
    "end": 2446,
    "range": [
      2445,
      2446
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2450,
    "end": 2453,
    "range": [
      2450,
      2453
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2455,
    "end": 2456,
    "range": [
      2455,
      2456
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2457,
    "end": 2460,
    "range": [
      2457,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2460,
    "end": 2461,
    "range": [
      2460,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2471,
    "end": 2476,
    "range": [
      2471,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2476,
    "end": 2477,
    "range": [
      2476,
      2477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2477,
    "end": 2478,
    "range": [
      2477,
      2478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2478,
    "end": 2479,
    "range": [
      2478,
      2479
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2480,
    "end": 2483,
    "range": [
      2480,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2492,
    "end": 2493,
    "range": [
      2492,
      2493
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2494,
    "end": 2499,
    "range": [
      2494,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2504,
    "end": 2507,
    "range": [
      2504,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2606,
    "end": 2615,
    "range": [
      2606,
      2615
    ]
  },
  {
    "type": "Identifier",
    "value": "WithNestedProp",
    "start": 2616,
    "end": 2630,
    "range": [
      2616,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2635,
    "end": 2639,
    "range": [
      2635,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2641,
    "end": 2647,
    "range": [
      2641,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 2651,
    "end": 2657,
    "range": [
      2651,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2665,
    "end": 2669,
    "range": [
      2665,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2671,
    "end": 2677,
    "range": [
      2671,
      2677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2677,
    "end": 2678,
    "range": [
      2677,
      2678
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2686,
    "end": 2693,
    "range": [
      2686,
      2693
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2694,
    "end": 2702,
    "range": [
      2694,
      2702
    ]
  },
  {
    "type": "Identifier",
    "value": "withNestedProp",
    "start": 2703,
    "end": 2717,
    "range": [
      2703,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2718,
    "end": 2719,
    "range": [
      2718,
      2719
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2720,
    "end": 2727,
    "range": [
      2720,
      2727
    ]
  },
  {
    "type": "Identifier",
    "value": "WithNestedProp",
    "start": 2728,
    "end": 2742,
    "range": [
      2728,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2744,
    "end": 2749,
    "range": [
      2744,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2755,
    "end": 2757,
    "range": [
      2755,
      2757
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2758,
    "end": 2763,
    "range": [
      2758,
      2763
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2768,
    "end": 2773,
    "range": [
      2768,
      2773
    ]
  },
  {
    "type": "Identifier",
    "value": "WithNestedProp",
    "start": 2774,
    "end": 2788,
    "range": [
      2774,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2792,
    "end": 2793,
    "range": [
      2792,
      2793
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2793,
    "end": 2794,
    "range": [
      2793,
      2794
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2803,
    "end": 2808,
    "range": [
      2803,
      2808
    ]
  },
  {
    "type": "Identifier",
    "value": "wnp",
    "start": 2809,
    "end": 2812,
    "range": [
      2809,
      2812
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Identifier",
    "value": "withNestedProp",
    "start": 2815,
    "end": 2829,
    "range": [
      2815,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2831,
    "end": 2835,
    "range": [
      2831,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2837,
    "end": 2842,
    "range": [
      2837,
      2842
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2842,
    "end": 2843,
    "range": [
      2842,
      2843
    ]
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 2844,
    "end": 2850,
    "range": [
      2844,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2852,
    "end": 2853,
    "range": [
      2852,
      2853
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2854,
    "end": 2858,
    "range": [
      2854,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2860,
    "end": 2865,
    "range": [
      2860,
      2865
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2866,
    "end": 2867,
    "range": [
      2866,
      2867
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2867,
    "end": 2868,
    "range": [
      2867,
      2868
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 2869,
    "end": 2874,
    "range": [
      2869,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2874,
    "end": 2875,
    "range": [
      2874,
      2875
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2876,
    "end": 2878,
    "range": [
      2876,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2978,
    "end": 2982,
    "range": [
      2978,
      2982
    ]
  },
  {
    "type": "Identifier",
    "value": "IsLiteralString",
    "start": 2983,
    "end": 2998,
    "range": [
      2983,
      2998
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2999,
    "end": 3000,
    "range": [
      2999,
      3000
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3001,
    "end": 3008,
    "range": [
      3001,
      3008
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3009,
    "end": 3015,
    "range": [
      3009,
      3015
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3017,
    "end": 3018,
    "range": [
      3017,
      3018
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3019,
    "end": 3025,
    "range": [
      3019,
      3025
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3026,
    "end": 3033,
    "range": [
      3026,
      3033
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3036,
    "end": 3037,
    "range": [
      3036,
      3037
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3038,
    "end": 3043,
    "range": [
      3038,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3046,
    "end": 3050,
    "range": [
      3046,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3053,
    "end": 3057,
    "range": [
      3053,
      3057
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepWritable",
    "start": 3058,
    "end": 3070,
    "range": [
      3058,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3071,
    "end": 3072,
    "range": [
      3071,
      3072
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3072,
    "end": 3073,
    "range": [
      3072,
      3073
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3078,
    "end": 3085,
    "range": [
      3078,
      3085
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 3086,
    "end": 3094,
    "range": [
      3086,
      3094
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3095,
    "end": 3096,
    "range": [
      3095,
      3096
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3099,
    "end": 3100,
    "range": [
      3099,
      3100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3103,
    "end": 3104,
    "range": [
      3103,
      3104
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3104,
    "end": 3112,
    "range": [
      3104,
      3112
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3113,
    "end": 3114,
    "range": [
      3113,
      3114
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3114,
    "end": 3115,
    "range": [
      3114,
      3115
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3116,
    "end": 3118,
    "range": [
      3116,
      3118
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3119,
    "end": 3124,
    "range": [
      3119,
      3124
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3127,
    "end": 3128,
    "range": [
      3127,
      3128
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepWritable",
    "start": 3129,
    "end": 3141,
    "range": [
      3129,
      3141
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3141,
    "end": 3142,
    "range": [
      3141,
      3142
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3142,
    "end": 3143,
    "range": [
      3142,
      3143
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3143,
    "end": 3144,
    "range": [
      3143,
      3144
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3145,
    "end": 3146,
    "range": [
      3145,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3151,
    "end": 3160,
    "range": [
      3151,
      3160
    ]
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 3161,
    "end": 3174,
    "range": [
      3161,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 3179,
    "end": 3182,
    "range": [
      3179,
      3182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3182,
    "end": 3183,
    "range": [
      3182,
      3183
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3184,
    "end": 3190,
    "range": [
      3184,
      3190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3190,
    "end": 3191,
    "range": [
      3190,
      3191
    ]
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 3194,
    "end": 3199,
    "range": [
      3194,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3201,
    "end": 3202,
    "range": [
      3201,
      3202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3202,
    "end": 3203,
    "range": [
      3202,
      3203
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3204,
    "end": 3206,
    "range": [
      3204,
      3206
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3207,
    "end": 3214,
    "range": [
      3207,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3214,
    "end": 3215,
    "range": [
      3214,
      3215
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3215,
    "end": 3222,
    "range": [
      3215,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3228,
    "end": 3232,
    "range": [
      3228,
      3232
    ]
  },
  {
    "type": "Identifier",
    "value": "DistributeActors",
    "start": 3233,
    "end": 3249,
    "range": [
      3233,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 3250,
    "end": 3256,
    "range": [
      3250,
      3256
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3256,
    "end": 3257,
    "range": [
      3256,
      3257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3258,
    "end": 3259,
    "range": [
      3258,
      3259
    ]
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 3260,
    "end": 3266,
    "range": [
      3260,
      3266
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3267,
    "end": 3274,
    "range": [
      3267,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 3277,
    "end": 3280,
    "range": [
      3277,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3282,
    "end": 3287,
    "range": [
      3282,
      3287
    ]
  },
  {
    "type": "Identifier",
    "value": "TSrc",
    "start": 3288,
    "end": 3292,
    "range": [
      3288,
      3292
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3293,
    "end": 3294,
    "range": [
      3293,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 3307,
    "end": 3310,
    "range": [
      3307,
      3310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3310,
    "end": 3311,
    "range": [
      3310,
      3311
    ]
  },
  {
    "type": "Identifier",
    "value": "TSrc",
    "start": 3312,
    "end": 3316,
    "range": [
      3312,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3316,
    "end": 3317,
    "range": [
      3316,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3322,
    "end": 3323,
    "range": [
      3322,
      3323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3328,
    "end": 3333,
    "range": [
      3328,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3333,
    "end": 3334,
    "range": [
      3333,
      3334
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3336,
    "end": 3345,
    "range": [
      3336,
      3345
    ]
  },
  {
    "type": "Identifier",
    "value": "MachineConfig",
    "start": 3346,
    "end": 3359,
    "range": [
      3346,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3359,
    "end": 3360,
    "range": [
      3359,
      3360
    ]
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 3360,
    "end": 3366,
    "range": [
      3360,
      3366
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3367,
    "end": 3374,
    "range": [
      3367,
      3374
    ]
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 3375,
    "end": 3388,
    "range": [
      3375,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3388,
    "end": 3389,
    "range": [
      3388,
      3389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3390,
    "end": 3391,
    "range": [
      3390,
      3391
    ]
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 3394,
    "end": 3399,
    "range": [
      3394,
      3399
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3400,
    "end": 3401,
    "range": [
      3400,
      3401
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "Identifier",
    "value": "actors",
    "start": 3408,
    "end": 3414,
    "range": [
      3408,
      3414
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3415,
    "end": 3416,
    "range": [
      3415,
      3416
    ]
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 3417,
    "end": 3423,
    "range": [
      3417,
      3423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3423,
    "end": 3424,
    "range": [
      3423,
      3424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3427,
    "end": 3428,
    "range": [
      3427,
      3428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 3432,
    "end": 3438,
    "range": [
      3432,
      3438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3438,
    "end": 3439,
    "range": [
      3438,
      3439
    ]
  },
  {
    "type": "Identifier",
    "value": "IsLiteralString",
    "start": 3440,
    "end": 3455,
    "range": [
      3440,
      3455
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 3456,
    "end": 3462,
    "range": [
      3456,
      3462
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3462,
    "end": 3463,
    "range": [
      3462,
      3463
    ]
  },
  {
    "type": "String",
    "value": "\"src\"",
    "start": 3463,
    "end": 3468,
    "range": [
      3463,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3471,
    "end": 3478,
    "range": [
      3471,
      3478
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3479,
    "end": 3483,
    "range": [
      3479,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3488,
    "end": 3489,
    "range": [
      3488,
      3489
    ]
  },
  {
    "type": "Identifier",
    "value": "DistributeActors",
    "start": 3490,
    "end": 3506,
    "range": [
      3490,
      3506
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 3507,
    "end": 3513,
    "range": [
      3507,
      3513
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3513,
    "end": 3514,
    "range": [
      3513,
      3514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 3531,
    "end": 3534,
    "range": [
      3531,
      3534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3534,
    "end": 3535,
    "range": [
      3534,
      3535
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3536,
    "end": 3542,
    "range": [
      3536,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3550,
    "end": 3551,
    "range": [
      3550,
      3551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3551,
    "end": 3552,
    "range": [
      3551,
      3552
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3556,
    "end": 3560,
    "range": [
      3556,
      3560
    ]
  },
  {
    "type": "Identifier",
    "value": "NoExtra",
    "start": 3561,
    "end": 3568,
    "range": [
      3561,
      3568
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3570,
    "end": 3571,
    "range": [
      3570,
      3571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3578,
    "end": 3579,
    "range": [
      3578,
      3579
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3579,
    "end": 3580,
    "range": [
      3579,
      3580
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3581,
    "end": 3583,
    "range": [
      3581,
      3583
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3584,
    "end": 3589,
    "range": [
      3584,
      3589
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3590,
    "end": 3591,
    "range": [
      3590,
      3591
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3591,
    "end": 3592,
    "range": [
      3591,
      3592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3596,
    "end": 3603,
    "range": [
      3596,
      3603
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3604,
    "end": 3609,
    "range": [
      3604,
      3609
    ]
  },
  {
    "type": "Identifier",
    "value": "MachineConfig",
    "start": 3610,
    "end": 3623,
    "range": [
      3610,
      3623
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3624,
    "end": 3627,
    "range": [
      3624,
      3627
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3627,
    "end": 3628,
    "range": [
      3627,
      3628
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3629,
    "end": 3630,
    "range": [
      3629,
      3630
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3631,
    "end": 3632,
    "range": [
      3631,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3632,
    "end": 3633,
    "range": [
      3632,
      3633
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3633,
    "end": 3634,
    "range": [
      3633,
      3634
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3634,
    "end": 3635,
    "range": [
      3634,
      3635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3636,
    "end": 3637,
    "range": [
      3636,
      3637
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3638,
    "end": 3643,
    "range": [
      3638,
      3643
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3644,
    "end": 3645,
    "range": [
      3644,
      3645
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3647,
    "end": 3654,
    "range": [
      3647,
      3654
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3655,
    "end": 3663,
    "range": [
      3655,
      3663
    ]
  },
  {
    "type": "Identifier",
    "value": "createXMachine",
    "start": 3664,
    "end": 3678,
    "range": [
      3664,
      3678
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3678,
    "end": 3679,
    "range": [
      3678,
      3679
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3682,
    "end": 3687,
    "range": [
      3682,
      3687
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 3688,
    "end": 3695,
    "range": [
      3688,
      3695
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3696,
    "end": 3703,
    "range": [
      3696,
      3703
    ]
  },
  {
    "type": "Identifier",
    "value": "MachineConfig",
    "start": 3704,
    "end": 3717,
    "range": [
      3704,
      3717
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3717,
    "end": 3718,
    "range": [
      3717,
      3718
    ]
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 3718,
    "end": 3724,
    "range": [
      3718,
      3724
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3724,
    "end": 3725,
    "range": [
      3724,
      3725
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3725,
    "end": 3726,
    "range": [
      3725,
      3726
    ]
  },
  {
    "type": "Identifier",
    "value": "TActor",
    "start": 3729,
    "end": 3735,
    "range": [
      3729,
      3735
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3736,
    "end": 3743,
    "range": [
      3736,
      3743
    ]
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 3744,
    "end": 3757,
    "range": [
      3744,
      3757
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3758,
    "end": 3759,
    "range": [
      3758,
      3759
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 3760,
    "end": 3767,
    "range": [
      3760,
      3767
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3768,
    "end": 3775,
    "range": [
      3768,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3776,
    "end": 3777,
    "range": [
      3776,
      3777
    ]
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 3778,
    "end": 3783,
    "range": [
      3778,
      3783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3783,
    "end": 3784,
    "range": [
      3783,
      3784
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Identifier",
    "value": "actors",
    "start": 3787,
    "end": 3793,
    "range": [
      3787,
      3793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 3795,
    "end": 3808,
    "range": [
      3795,
      3808
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3808,
    "end": 3809,
    "range": [
      3808,
      3809
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3812,
    "end": 3813,
    "range": [
      3812,
      3813
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 3814,
    "end": 3821,
    "range": [
      3814,
      3821
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3821,
    "end": 3822,
    "range": [
      3821,
      3822
    ]
  },
  {
    "type": "String",
    "value": "\"types\"",
    "start": 3822,
    "end": 3829,
    "range": [
      3822,
      3829
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3829,
    "end": 3830,
    "range": [
      3829,
      3830
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3830,
    "end": 3831,
    "range": [
      3830,
      3831
    ]
  },
  {
    "type": "String",
    "value": "\"actors\"",
    "start": 3831,
    "end": 3839,
    "range": [
      3831,
      3839
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3839,
    "end": 3840,
    "range": [
      3839,
      3840
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3841,
    "end": 3842,
    "range": [
      3841,
      3842
    ]
  },
  {
    "type": "Identifier",
    "value": "ProvidedActor",
    "start": 3843,
    "end": 3856,
    "range": [
      3843,
      3856
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3856,
    "end": 3857,
    "range": [
      3856,
      3857
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3858,
    "end": 3859,
    "range": [
      3858,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 3860,
    "end": 3866,
    "range": [
      3860,
      3866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3866,
    "end": 3867,
    "range": [
      3866,
      3867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3869,
    "end": 3870,
    "range": [
      3869,
      3870
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3870,
    "end": 3871,
    "range": [
      3870,
      3871
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3872,
    "end": 3874,
    "range": [
      3872,
      3874
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3875,
    "end": 3880,
    "range": [
      3875,
      3880
    ]
  },
  {
    "type": "Identifier",
    "value": "MachineConfig",
    "start": 3881,
    "end": 3894,
    "range": [
      3881,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3895,
    "end": 3898,
    "range": [
      3895,
      3898
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3898,
    "end": 3899,
    "range": [
      3898,
      3899
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3900,
    "end": 3901,
    "range": [
      3900,
      3901
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3902,
    "end": 3907,
    "range": [
      3902,
      3907
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 3908,
    "end": 3915,
    "range": [
      3908,
      3915
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3915,
    "end": 3916,
    "range": [
      3915,
      3916
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3916,
    "end": 3917,
    "range": [
      3916,
      3917
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 3918,
    "end": 3925,
    "range": [
      3918,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3926,
    "end": 3927,
    "range": [
      3926,
      3927
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3927,
    "end": 3928,
    "range": [
      3927,
      3928
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3929,
    "end": 3930,
    "range": [
      3929,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3930,
    "end": 3931,
    "range": [
      3930,
      3931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3931,
    "end": 3932,
    "range": [
      3931,
      3932
    ]
  },
  {
    "type": "Identifier",
    "value": "TConfig",
    "start": 3933,
    "end": 3940,
    "range": [
      3933,
      3940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3940,
    "end": 3941,
    "range": [
      3940,
      3941
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3943,
    "end": 3948,
    "range": [
      3943,
      3948
    ]
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 3949,
    "end": 3954,
    "range": [
      3949,
      3954
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3957,
    "end": 3958,
    "range": [
      3957,
      3958
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3958,
    "end": 3959,
    "range": [
      3958,
      3959
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3960,
    "end": 3962,
    "range": [
      3960,
      3962
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3963,
    "end": 3970,
    "range": [
      3963,
      3970
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3970,
    "end": 3971,
    "range": [
      3970,
      3971
    ]
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3971,
    "end": 3978,
    "range": [
      3971,
      3978
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3978,
    "end": 3979,
    "range": [
      3978,
      3979
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 3979,
    "end": 3984,
    "range": [
      3979,
      3984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3984,
    "end": 3985,
    "range": [
      3984,
      3985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3985,
    "end": 3986,
    "range": [
      3985,
      3986
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3988,
    "end": 3993,
    "range": [
      3988,
      3993
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 3994,
    "end": 4000,
    "range": [
      3994,
      4000
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4001,
    "end": 4002,
    "range": [
      4001,
      4002
    ]
  },
  {
    "type": "Identifier",
    "value": "createXMachine",
    "start": 4003,
    "end": 4017,
    "range": [
      4003,
      4017
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4017,
    "end": 4018,
    "range": [
      4017,
      4018
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4018,
    "end": 4019,
    "range": [
      4018,
      4019
    ]
  },
  {
    "type": "Identifier",
    "value": "types",
    "start": 4022,
    "end": 4027,
    "range": [
      4022,
      4027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4027,
    "end": 4028,
    "range": [
      4027,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4029,
    "end": 4030,
    "range": [
      4029,
      4030
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4032,
    "end": 4034,
    "range": [
      4032,
      4034
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4035,
    "end": 4036,
    "range": [
      4035,
      4036
    ]
  },
  {
    "type": "Identifier",
    "value": "actors",
    "start": 4041,
    "end": 4047,
    "range": [
      4041,
      4047
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4047,
    "end": 4048,
    "range": [
      4047,
      4048
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4049,
    "end": 4050,
    "range": [
      4049,
      4050
    ]
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 4057,
    "end": 4060,
    "range": [
      4057,
      4060
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4060,
    "end": 4061,
    "range": [
      4060,
      4061
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 4062,
    "end": 4067,
    "range": [
      4062,
      4067
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4067,
    "end": 4068,
    "range": [
      4067,
      4068
    ]
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 4075,
    "end": 4080,
    "range": [
      4075,
      4080
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4080,
    "end": 4081,
    "range": [
      4080,
      4081
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4082,
    "end": 4088,
    "range": [
      4082,
      4088
    ]
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 4089,
    "end": 4094,
    "range": [
      4089,
      4094
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4094,
    "end": 4095,
    "range": [
      4094,
      4095
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4100,
    "end": 4101,
    "range": [
      4100,
      4101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4101,
    "end": 4102,
    "range": [
      4101,
      4102
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4105,
    "end": 4106,
    "range": [
      4105,
      4106
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4106,
    "end": 4107,
    "range": [
      4106,
      4107
    ]
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 4110,
    "end": 4116,
    "range": [
      4110,
      4116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4116,
    "end": 4117,
    "range": [
      4116,
      4117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4118,
    "end": 4119,
    "range": [
      4118,
      4119
    ]
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 4124,
    "end": 4127,
    "range": [
      4124,
      4127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4127,
    "end": 4128,
    "range": [
      4127,
      4128
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 4129,
    "end": 4134,
    "range": [
      4129,
      4134
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4134,
    "end": 4135,
    "range": [
      4134,
      4135
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4138,
    "end": 4139,
    "range": [
      4138,
      4139
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4139,
    "end": 4140,
    "range": [
      4139,
      4140
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 4143,
    "end": 4148,
    "range": [
      4143,
      4148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4150,
    "end": 4152,
    "range": [
      4150,
      4152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4153,
    "end": 4154,
    "range": [
      4153,
      4154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4154,
    "end": 4155,
    "range": [
      4154,
      4155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4155,
    "end": 4156,
    "range": [
      4155,
      4156
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4158,
    "end": 4163,
    "range": [
      4158,
      4163
    ]
  },
  {
    "type": "Identifier",
    "value": "config2",
    "start": 4164,
    "end": 4171,
    "range": [
      4164,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4172,
    "end": 4173,
    "range": [
      4172,
      4173
    ]
  },
  {
    "type": "Identifier",
    "value": "createXMachine",
    "start": 4174,
    "end": 4188,
    "range": [
      4174,
      4188
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4188,
    "end": 4189,
    "range": [
      4188,
      4189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4189,
    "end": 4190,
    "range": [
      4189,
      4190
    ]
  },
  {
    "type": "Identifier",
    "value": "invoke",
    "start": 4193,
    "end": 4199,
    "range": [
      4193,
      4199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4199,
    "end": 4200,
    "range": [
      4199,
      4200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4201,
    "end": 4202,
    "range": [
      4201,
      4202
    ]
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 4207,
    "end": 4210,
    "range": [
      4207,
      4210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4210,
    "end": 4211,
    "range": [
      4210,
      4211
    ]
  },
  {
    "type": "String",
    "value": "\"whatever\"",
    "start": 4212,
    "end": 4222,
    "range": [
      4212,
      4222
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4222,
    "end": 4223,
    "range": [
      4222,
      4223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 4231,
    "end": 4236,
    "range": [
      4231,
      4236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4236,
    "end": 4237,
    "range": [
      4236,
      4237
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4238,
    "end": 4240,
    "range": [
      4238,
      4240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4241,
    "end": 4242,
    "range": [
      4241,
      4242
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4242,
    "end": 4243,
    "range": [
      4242,
      4243
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4243,
    "end": 4244,
    "range": [
      4243,
      4244
    ]
  }
]
```
