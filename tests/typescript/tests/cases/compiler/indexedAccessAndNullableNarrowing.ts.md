__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 28
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 29,
                    "end": 35
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 37,
                    "end": 40
                  }
                ],
                "start": 28,
                "end": 41
              },
              "start": 22,
              "end": 41
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 41
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
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
                  "start": 59,
                  "end": 60
                },
                "typeArguments": null,
                "start": 59,
                "end": 60
              },
              "start": 53,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 43,
            "end": 60
          }
        ],
        "start": 11,
        "end": 61
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
              "type": "TSUnionType",
              "types": [
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
                      "start": 65,
                      "end": 66
                    },
                    "typeArguments": null,
                    "start": 65,
                    "end": 66
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 68
                    },
                    "typeArguments": null,
                    "start": 67,
                    "end": 68
                  },
                  "start": 65,
                  "end": 69
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 72,
                  "end": 81
                }
              ],
              "start": 65,
              "end": 81
            },
            "start": 63,
            "end": 81
          },
          "start": 62,
          "end": 81
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 108
              },
              "start": 93,
              "end": 108
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 110,
              "end": 117
            },
            "alternate": null,
            "start": 89,
            "end": 117
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "directive": null,
            "start": 122,
            "end": 124
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 171
              },
              "start": 156,
              "end": 171
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 173,
              "end": 180
            },
            "alternate": null,
            "start": 152,
            "end": 180
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "directive": null,
            "start": 185,
            "end": 187
          }
        ],
        "start": 83,
        "end": 212
      },
      "expression": false,
      "start": 0,
      "end": 212
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 225
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
              "start": 226,
              "end": 227
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 242
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 251,
                    "end": 254
                  }
                ],
                "start": 242,
                "end": 255
              },
              "start": 236,
              "end": 255
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 226,
            "end": 255
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
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
                  "start": 273,
                  "end": 274
                },
                "typeArguments": null,
                "start": 273,
                "end": 274
              },
              "start": 267,
              "end": 274
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 257,
            "end": 274
          }
        ],
        "start": 225,
        "end": 275
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
              "type": "TSUnionType",
              "types": [
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
                      "start": 279,
                      "end": 280
                    },
                    "typeArguments": null,
                    "start": 279,
                    "end": 280
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 282
                    },
                    "typeArguments": null,
                    "start": 281,
                    "end": 282
                  },
                  "start": 279,
                  "end": 283
                },
                {
                  "type": "TSNullKeyword",
                  "start": 286,
                  "end": 290
                }
              ],
              "start": 279,
              "end": 290
            },
            "start": 277,
            "end": 290
          },
          "start": 276,
          "end": 290
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 303
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 308,
                "end": 312
              },
              "start": 302,
              "end": 312
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 314,
              "end": 321
            },
            "alternate": null,
            "start": 298,
            "end": 321
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 327
            },
            "directive": null,
            "start": 326,
            "end": 328
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 366
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 371,
                "end": 375
              },
              "start": 365,
              "end": 375
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 377,
              "end": 384
            },
            "alternate": null,
            "start": 361,
            "end": 384
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 390
            },
            "directive": null,
            "start": 389,
            "end": 391
          }
        ],
        "start": 292,
        "end": 421
      },
      "expression": false,
      "start": 214,
      "end": 421
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 434
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
              "start": 435,
              "end": 436
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 435,
            "end": 436
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 439
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
                  "start": 454,
                  "end": 455
                },
                "typeArguments": null,
                "start": 454,
                "end": 455
              },
              "start": 448,
              "end": 455
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 438,
            "end": 455
          }
        ],
        "start": 434,
        "end": 456
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                  "start": 460,
                  "end": 461
                },
                "typeArguments": null,
                "start": 460,
                "end": 461
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 463
                },
                "typeArguments": null,
                "start": 462,
                "end": 463
              },
              "start": 460,
              "end": 464
            },
            "start": 458,
            "end": 464
          },
          "start": 457,
          "end": 464
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 470,
                      "end": 477
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 478,
                            "end": 479
                          },
                          "typeArguments": null,
                          "start": 478,
                          "end": 479
                        }
                      ],
                      "start": 477,
                      "end": 480
                    },
                    "start": 470,
                    "end": 480
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 481,
                      "end": 482
                    },
                    "typeArguments": null,
                    "start": 481,
                    "end": 482
                  },
                  "start": 470,
                  "end": 483
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 486,
                  "end": 488
                }
              ],
              "start": 470,
              "end": 488
            },
            "start": 468,
            "end": 488
          },
          "start": 466,
          "end": 488
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 501
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 502,
                            "end": 503
                          },
                          "typeArguments": null,
                          "start": 502,
                          "end": 503
                        }
                      ],
                      "start": 501,
                      "end": 504
                    },
                    "start": 494,
                    "end": 504
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 505,
                      "end": 506
                    },
                    "typeArguments": null,
                    "start": 505,
                    "end": 506
                  },
                  "start": 494,
                  "end": 507
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 511,
                      "end": 513
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 516,
                      "end": 520
                    }
                  ],
                  "start": 511,
                  "end": 520
                }
              ],
              "start": 494,
              "end": 521
            },
            "start": 492,
            "end": 521
          },
          "start": 490,
          "end": 521
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 535
              },
              "start": 529,
              "end": 535
            },
            "directive": null,
            "start": 529,
            "end": 536
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 547
              },
              "start": 541,
              "end": 547
            },
            "directive": null,
            "start": 541,
            "end": 548
          }
        ],
        "start": 523,
        "end": 550
      },
      "expression": false,
      "start": 423,
      "end": 550
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 623
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 626,
          "end": 632
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 633,
              "end": 639
            },
            {
              "type": "TSAnyKeyword",
              "start": 641,
              "end": 644
            }
          ],
          "start": 632,
          "end": 645
        },
        "start": 626,
        "end": 645
      },
      "declare": false,
      "start": 609,
      "end": 646
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 657
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AnyObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 669
        },
        "typeArguments": null,
        "start": 660,
        "end": 669
      },
      "declare": false,
      "start": 647,
      "end": 670
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasOwnProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 689,
        "end": 703
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
              "start": 704,
              "end": 705
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 723
              },
              "typeArguments": null,
              "start": 714,
              "end": 723
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 704,
            "end": 723
          }
        ],
        "start": 703,
        "end": 724
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
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
                "start": 738,
                "end": 739
              },
              "typeArguments": null,
              "start": 738,
              "end": 739
            },
            "start": 736,
            "end": 739
          },
          "start": 730,
          "end": 739
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 762
              },
              "typeArguments": null,
              "start": 751,
              "end": 762
            },
            "start": 749,
            "end": 762
          },
          "start": 745,
          "end": 762
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 771
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                  "start": 781,
                  "end": 782
                },
                "typeArguments": null,
                "start": 781,
                "end": 782
              },
              "start": 775,
              "end": 782
            },
            "start": 775,
            "end": 782
          },
          "start": 767,
          "end": 782
        },
        "start": 765,
        "end": 782
      },
      "body": null,
      "expression": false,
      "start": 672,
      "end": 783
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Store",
        "optional": false,
        "typeAnnotation": null,
        "start": 795,
        "end": 800
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 802
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 810
              },
              "typeArguments": null,
              "start": 805,
              "end": 810
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 801,
            "end": 810
          }
        ],
        "start": 800,
        "end": 811
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setState",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 826
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 828
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 843,
                        "end": 844
                      },
                      "typeArguments": null,
                      "start": 843,
                      "end": 844
                    },
                    "start": 837,
                    "end": 844
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 827,
                  "end": 844
                }
              ],
              "start": 826,
              "end": 845
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 851,
                      "end": 852
                    },
                    "typeArguments": null,
                    "start": 851,
                    "end": 852
                  },
                  "start": 849,
                  "end": 852
                },
                "start": 846,
                "end": 852
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
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
                  "start": 859,
                  "end": 865
                },
                "start": 854,
                "end": 865
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 868,
                "end": 872
              },
              "start": 866,
              "end": 872
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 818,
            "end": 873
          }
        ],
        "start": 812,
        "end": 875
      },
      "declare": false,
      "start": 785,
      "end": 875
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "syncStoreProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 893,
          "end": 906
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
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 912,
                "end": 913
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 922,
                  "end": 927
                },
                "typeArguments": null,
                "start": 922,
                "end": 927
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 912,
              "end": 927
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 933,
                "end": 934
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 950
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 951,
                        "end": 952
                      },
                      "typeArguments": null,
                      "start": 951,
                      "end": 952
                    }
                  ],
                  "start": 950,
                  "end": 953
                },
                "start": 943,
                "end": 953
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 933,
              "end": 953
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 960
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 975,
                    "end": 976
                  },
                  "typeArguments": null,
                  "start": 975,
                  "end": 976
                },
                "start": 969,
                "end": 976
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 959,
              "end": 976
            }
          ],
          "start": 906,
          "end": 979
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "store",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 987,
                  "end": 992
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 993,
                        "end": 994
                      },
                      "typeArguments": null,
                      "start": 993,
                      "end": 994
                    }
                  ],
                  "start": 992,
                  "end": 995
                },
                "start": 987,
                "end": 995
              },
              "start": 985,
              "end": 995
            },
            "start": 980,
            "end": 995
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1004,
                  "end": 1005
                },
                "typeArguments": null,
                "start": 1004,
                "end": 1005
              },
              "start": 1002,
              "end": 1005
            },
            "start": 997,
            "end": 1005
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1012,
                  "end": 1013
                },
                "typeArguments": null,
                "start": 1012,
                "end": 1013
              },
              "start": 1010,
              "end": 1013
            },
            "start": 1007,
            "end": 1013
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1027,
                    "end": 1032
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasOwnProperty",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1035,
                        "end": 1049
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1050,
                          "end": 1055
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1057,
                          "end": 1060
                        }
                      ],
                      "optional": false,
                      "start": 1035,
                      "end": 1061
                    },
                    "consequent": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1064,
                        "end": 1069
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1070,
                        "end": 1073
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1064,
                      "end": 1074
                    },
                    "alternate": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1077,
                      "end": 1086
                    },
                    "start": 1035,
                    "end": 1086
                  },
                  "definite": false,
                  "start": 1027,
                  "end": 1086
                }
              ],
              "declare": false,
              "start": 1021,
              "end": 1087
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1101
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1106,
                  "end": 1115
                },
                "start": 1096,
                "end": 1115
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": null,
                "start": 1117,
                "end": 1124
              },
              "alternate": null,
              "start": 1092,
              "end": 1124
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "store",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1129,
                    "end": 1134
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1135,
                    "end": 1143
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1129,
                  "end": 1143
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1144,
                    "end": 1147
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1149,
                    "end": 1154
                  }
                ],
                "optional": false,
                "start": 1129,
                "end": 1155
              },
              "directive": null,
              "start": 1129,
              "end": 1156
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1165,
                  "end": 1170
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1175,
                  "end": 1184
                },
                "start": 1165,
                "end": 1184
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": null,
                "start": 1186,
                "end": 1193
              },
              "alternate": null,
              "start": 1161,
              "end": 1193
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "store",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1203
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1204,
                    "end": 1212
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1198,
                  "end": 1212
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1213,
                    "end": 1216
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1218,
                    "end": 1223
                  }
                ],
                "optional": false,
                "start": 1198,
                "end": 1224
              },
              "directive": null,
              "start": 1198,
              "end": 1225
            }
          ],
          "start": 1015,
          "end": 1227
        },
        "expression": false,
        "start": 884,
        "end": 1227
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 877,
      "end": 1227
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1227
}
```
