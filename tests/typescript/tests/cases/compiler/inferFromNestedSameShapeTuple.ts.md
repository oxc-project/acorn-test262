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
        "name": "Magic",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 27
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 29
          }
        ],
        "start": 27,
        "end": 30
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "typeArguments": null,
          "start": 33,
          "end": 34
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 52
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 51,
                    "end": 52
                  },
                  "start": 45,
                  "end": 52
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 63,
                      "end": 64
                    },
                    "start": 57,
                    "end": 64
                  },
                  "start": 54,
                  "end": 64
                }
              ],
              "start": 44,
              "end": 65
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 78
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 76,
                  "end": 78
                },
                "start": 70,
                "end": 78
              },
              "start": 67,
              "end": 78
            }
          ],
          "start": 43,
          "end": 79
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "typeArguments": null,
          "start": 82,
          "end": 83
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 86,
          "end": 91
        },
        "start": 33,
        "end": 91
      },
      "declare": false,
      "start": 17,
      "end": 92
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 100
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Magic",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 108
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  ],
                  "start": 110,
                  "end": 118
                }
              ],
              "start": 109,
              "end": 119
            }
          ],
          "start": 108,
          "end": 120
        },
        "start": 103,
        "end": 120
      },
      "declare": false,
      "start": 94,
      "end": 120
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 153
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 156
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 156
          }
        ],
        "start": 153,
        "end": 157
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 168
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 172
                },
                "typeArguments": null,
                "start": 170,
                "end": 172
              },
              "start": 168,
              "end": 172
            },
            "accessibility": null,
            "static": false,
            "start": 166,
            "end": 172
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Recursive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 205
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 206,
                            "end": 208
                          },
                          "typeArguments": null,
                          "start": 206,
                          "end": 208
                        }
                      ],
                      "start": 205,
                      "end": 209
                    },
                    "start": 196,
                    "end": 209
                  },
                  "start": 196,
                  "end": 211
                },
                "start": 187,
                "end": 211
              },
              "start": 185,
              "end": 211
            },
            "accessibility": null,
            "static": false,
            "start": 177,
            "end": 211
          }
        ],
        "start": 160,
        "end": 213
      },
      "declare": false,
      "start": 139,
      "end": 213
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getIds",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 238
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
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 241
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 239,
            "end": 241
          }
        ],
        "start": 238,
        "end": 242
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 268
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 271
                        },
                        "typeArguments": null,
                        "start": 269,
                        "end": 271
                      }
                    ],
                    "start": 268,
                    "end": 272
                  },
                  "start": 259,
                  "end": 272
                },
                "start": 259,
                "end": 274
              },
              "start": 250,
              "end": 274
            },
            "start": 248,
            "end": 274
          },
          "start": 243,
          "end": 274
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
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 279
            },
            "typeArguments": null,
            "start": 277,
            "end": 279
          },
          "start": 277,
          "end": 281
        },
        "start": 275,
        "end": 281
      },
      "body": null,
      "expression": false,
      "start": 215,
      "end": 282
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
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 295
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
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
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 305,
                          "end": 307
                        },
                        "value": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 309,
                          "end": 312
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 305,
                        "end": 312
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 318,
                          "end": 326
                        },
                        "value": {
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
                                    "name": "id",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 339,
                                    "end": 341
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "'b'",
                                    "start": 343,
                                    "end": 346
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 339,
                                  "end": 346
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "children",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 356,
                                    "end": 364
                                  },
                                  "value": {
                                    "type": "ArrayExpression",
                                    "elements": [],
                                    "start": 366,
                                    "end": 368
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 356,
                                  "end": 368
                                }
                              ],
                              "start": 329,
                              "end": 374
                            }
                          ],
                          "start": 328,
                          "end": 375
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 318,
                        "end": 375
                      }
                    ],
                    "start": 299,
                    "end": 377
                  }
                ],
                "start": 298,
                "end": 378
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 387
                },
                "typeArguments": null,
                "start": 382,
                "end": 387
              },
              "start": 298,
              "end": 387
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 416
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 417,
                        "end": 423
                      }
                    ],
                    "start": 416,
                    "end": 424
                  },
                  "start": 407,
                  "end": 424
                },
                "start": 407,
                "end": 426
              },
              "start": 398,
              "end": 426
            },
            "start": 298,
            "end": 426
          },
          "definite": false,
          "start": 290,
          "end": 426
        }
      ],
      "declare": false,
      "start": 284,
      "end": 426
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 437
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getIds",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 446
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 452
              }
            ],
            "optional": false,
            "start": 440,
            "end": 453
          },
          "definite": false,
          "start": 434,
          "end": 453
        }
      ],
      "declare": false,
      "start": 428,
      "end": 453
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 498
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getIds",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 507
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
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
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 517
                          },
                          "value": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "'a'",
                            "start": 519,
                            "end": 522
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 515,
                          "end": 522
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 528,
                            "end": 536
                          },
                          "value": {
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
                                      "name": "id",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 549,
                                      "end": 551
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": "b",
                                      "raw": "'b'",
                                      "start": 553,
                                      "end": 556
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 549,
                                    "end": 556
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "children",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 566,
                                      "end": 574
                                    },
                                    "value": {
                                      "type": "ArrayExpression",
                                      "elements": [],
                                      "start": 576,
                                      "end": 578
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 566,
                                    "end": 578
                                  }
                                ],
                                "start": 539,
                                "end": 584
                              }
                            ],
                            "start": 538,
                            "end": 585
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 528,
                          "end": 585
                        }
                      ],
                      "start": 509,
                      "end": 587
                    }
                  ],
                  "start": 508,
                  "end": 588
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 597
                  },
                  "typeArguments": null,
                  "start": 592,
                  "end": 597
                },
                "start": 508,
                "end": 597
              }
            ],
            "optional": false,
            "start": 501,
            "end": 598
          },
          "definite": false,
          "start": 494,
          "end": 598
        }
      ],
      "declare": false,
      "start": 488,
      "end": 598
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 638,
        "end": 640
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
              "start": 641,
              "end": 642
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 641,
            "end": 642
          }
        ],
        "start": 640,
        "end": 643
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 647,
            "end": 653
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 657
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
                        "start": 660,
                        "end": 661
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 663,
                            "end": 664
                          },
                          "typeArguments": null,
                          "start": 663,
                          "end": 664
                        },
                        "start": 661,
                        "end": 664
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 660,
                      "end": 664
                    }
                  ],
                  "start": 658,
                  "end": 666
                }
              ],
              "start": 657,
              "end": 667
            },
            "start": 655,
            "end": 667
          }
        ],
        "start": 646,
        "end": 668
      },
      "declare": false,
      "start": 633,
      "end": 669
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 677
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
              "start": 678,
              "end": 679
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 678,
            "end": 679
          }
        ],
        "start": 677,
        "end": 680
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 684,
              "end": 686
            },
            "start": 684,
            "end": 686
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 688,
              "end": 690
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
                        "start": 693,
                        "end": 694
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 696,
                            "end": 697
                          },
                          "typeArguments": null,
                          "start": 696,
                          "end": 697
                        },
                        "start": 694,
                        "end": 697
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 693,
                      "end": 697
                    }
                  ],
                  "start": 691,
                  "end": 699
                }
              ],
              "start": 690,
              "end": 700
            },
            "start": 688,
            "end": 700
          }
        ],
        "start": 683,
        "end": 701
      },
      "declare": false,
      "start": 670,
      "end": 702
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "qq",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 715
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 717
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 716,
            "end": 717
          }
        ],
        "start": 715,
        "end": 718
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 724
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 726
                    },
                    "typeArguments": null,
                    "start": 725,
                    "end": 726
                  }
                ],
                "start": 724,
                "end": 727
              },
              "start": 722,
              "end": 727
            },
            "start": 720,
            "end": 727
          },
          "start": 719,
          "end": 727
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 734
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 736
                    },
                    "typeArguments": null,
                    "start": 735,
                    "end": 736
                  }
                ],
                "start": 734,
                "end": 737
              },
              "start": 732,
              "end": 737
            },
            "start": 730,
            "end": 737
          },
          "start": 729,
          "end": 737
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 746
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 750
              },
              "start": 745,
              "end": 750
            },
            "directive": null,
            "start": 745,
            "end": 751
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 757
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 761
              },
              "start": 756,
              "end": 761
            },
            "directive": null,
            "start": 756,
            "end": 762
          }
        ],
        "start": 739,
        "end": 774
      },
      "expression": false,
      "start": 704,
      "end": 774
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 774
}
```
