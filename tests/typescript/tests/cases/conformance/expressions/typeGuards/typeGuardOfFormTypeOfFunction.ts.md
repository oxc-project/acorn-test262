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
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 15,
              "end": 18
            },
            "start": 13,
            "end": 18
          },
          "start": 12,
          "end": 18
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "prefix": true,
                "start": 30,
                "end": 38
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 43,
                "end": 53
              },
              "start": 30,
              "end": 53
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "directive": null,
                  "start": 65,
                  "end": 67
                }
              ],
              "start": 55,
              "end": 81
            },
            "alternate": null,
            "start": 26,
            "end": 81
          }
        ],
        "start": 20,
        "end": 83
      },
      "expression": false,
      "start": 0,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 96
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 100,
              "end": 107
            },
            "start": 98,
            "end": 107
          },
          "start": 97,
          "end": 107
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 127
                },
                "prefix": true,
                "start": 119,
                "end": 127
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 132,
                "end": 142
              },
              "start": 119,
              "end": 142
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 155
                  },
                  "directive": null,
                  "start": 154,
                  "end": 156
                }
              ],
              "start": 144,
              "end": 175
            },
            "alternate": null,
            "start": 115,
            "end": 175
          }
        ],
        "start": 109,
        "end": 177
      },
      "expression": false,
      "start": 85,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 190
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 194,
              "end": 196
            },
            "start": 192,
            "end": 196
          },
          "start": 191,
          "end": 196
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 216
                },
                "prefix": true,
                "start": 208,
                "end": 216
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 221,
                "end": 231
              },
              "start": 208,
              "end": 231
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "directive": null,
                  "start": 243,
                  "end": 245
                }
              ],
              "start": 233,
              "end": 264
            },
            "alternate": null,
            "start": 204,
            "end": 264
          }
        ],
        "start": 198,
        "end": 266
      },
      "expression": false,
      "start": 179,
      "end": 266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 279
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
              "start": 280,
              "end": 281
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 280,
            "end": 281
          }
        ],
        "start": 279,
        "end": 282
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 287
              },
              "typeArguments": null,
              "start": 286,
              "end": 287
            },
            "start": 284,
            "end": 287
          },
          "start": 283,
          "end": 287
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 307
                },
                "prefix": true,
                "start": 299,
                "end": 307
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 312,
                "end": 322
              },
              "start": 299,
              "end": 322
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 335
                  },
                  "directive": null,
                  "start": 334,
                  "end": 336
                }
              ],
              "start": 324,
              "end": 359
            },
            "alternate": null,
            "start": 295,
            "end": 359
          }
        ],
        "start": 289,
        "end": 361
      },
      "expression": false,
      "start": 268,
      "end": 361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 374
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 381
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 383,
                      "end": 389
                    },
                    "start": 381,
                    "end": 389
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 380,
                  "end": 389
                }
              ],
              "start": 378,
              "end": 391
            },
            "start": 376,
            "end": 391
          },
          "start": 375,
          "end": 391
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 411
                },
                "prefix": true,
                "start": 403,
                "end": 411
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 416,
                "end": 426
              },
              "start": 403,
              "end": 426
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 439
                  },
                  "directive": null,
                  "start": 438,
                  "end": 440
                }
              ],
              "start": 428,
              "end": 456
            },
            "alternate": null,
            "start": 399,
            "end": 456
          }
        ],
        "start": 393,
        "end": 458
      },
      "expression": false,
      "start": 363,
      "end": 458
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 471
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 481,
                  "end": 487
                },
                "start": 478,
                "end": 487
              },
              "start": 475,
              "end": 487
            },
            "start": 473,
            "end": 487
          },
          "start": 472,
          "end": 487
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "prefix": true,
                "start": 499,
                "end": 507
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 512,
                "end": 522
              },
              "start": 499,
              "end": 522
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 534,
                    "end": 535
                  },
                  "directive": null,
                  "start": 534,
                  "end": 536
                }
              ],
              "start": 524,
              "end": 559
            },
            "alternate": null,
            "start": 495,
            "end": 559
          }
        ],
        "start": 489,
        "end": 561
      },
      "expression": false,
      "start": 460,
      "end": 561
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 575
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "type": "TSStringKeyword",
                  "start": 579,
                  "end": 585
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 595,
                      "end": 601
                    },
                    "start": 592,
                    "end": 601
                  },
                  "start": 589,
                  "end": 601
                }
              ],
              "start": 579,
              "end": 602
            },
            "start": 577,
            "end": 602
          },
          "start": 576,
          "end": 602
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 621,
                  "end": 622
                },
                "prefix": true,
                "start": 614,
                "end": 622
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 627,
                "end": 637
              },
              "start": 614,
              "end": 637
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "directive": null,
                  "start": 649,
                  "end": 651
                }
              ],
              "start": 639,
              "end": 674
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 695
                  },
                  "directive": null,
                  "start": 694,
                  "end": 696
                }
              ],
              "start": 684,
              "end": 713
            },
            "start": 610,
            "end": 713
          }
        ],
        "start": 604,
        "end": 715
      },
      "expression": false,
      "start": 563,
      "end": 715
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 726,
        "end": 729
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 735,
                        "end": 736
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 738,
                          "end": 744
                        },
                        "start": 736,
                        "end": 744
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 735,
                      "end": 744
                    }
                  ],
                  "start": 733,
                  "end": 746
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 756,
                      "end": 762
                    },
                    "start": 753,
                    "end": 762
                  },
                  "start": 750,
                  "end": 762
                }
              ],
              "start": 733,
              "end": 763
            },
            "start": 731,
            "end": 763
          },
          "start": 730,
          "end": 763
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 783
                },
                "prefix": true,
                "start": 775,
                "end": 783
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 788,
                "end": 798
              },
              "start": 775,
              "end": 798
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 810,
                    "end": 811
                  },
                  "directive": null,
                  "start": 810,
                  "end": 812
                }
              ],
              "start": 800,
              "end": 835
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 855,
                    "end": 856
                  },
                  "directive": null,
                  "start": 855,
                  "end": 857
                }
              ],
              "start": 845,
              "end": 881
            },
            "start": 771,
            "end": 881
          }
        ],
        "start": 765,
        "end": 883
      },
      "expression": false,
      "start": 717,
      "end": 883
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 894,
        "end": 897
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 903,
                        "end": 904
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 906,
                          "end": 912
                        },
                        "start": 904,
                        "end": 912
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 903,
                      "end": 912
                    }
                  ],
                  "start": 901,
                  "end": 914
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 919,
                        "end": 920
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 922,
                          "end": 928
                        },
                        "start": 920,
                        "end": 928
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 919,
                      "end": 928
                    }
                  ],
                  "start": 917,
                  "end": 930
                }
              ],
              "start": 901,
              "end": 930
            },
            "start": 899,
            "end": 930
          },
          "start": 898,
          "end": 930
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 949,
                  "end": 950
                },
                "prefix": true,
                "start": 942,
                "end": 950
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 955,
                "end": 965
              },
              "start": 942,
              "end": 965
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 977,
                    "end": 978
                  },
                  "directive": null,
                  "start": 977,
                  "end": 979
                }
              ],
              "start": 967,
              "end": 995
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1015,
                    "end": 1016
                  },
                  "directive": null,
                  "start": 1015,
                  "end": 1017
                }
              ],
              "start": 1005,
              "end": 1057
            },
            "start": 938,
            "end": 1057
          }
        ],
        "start": 932,
        "end": 1059
      },
      "expression": false,
      "start": 885,
      "end": 1059
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f100",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1096
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
              "start": 1097,
              "end": 1098
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1097,
            "end": 1098
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1101
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
                  "start": 1116,
                  "end": 1117
                },
                "typeArguments": null,
                "start": 1116,
                "end": 1117
              },
              "start": 1110,
              "end": 1117
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1100,
            "end": 1117
          }
        ],
        "start": 1096,
        "end": 1118
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 1124,
                "end": 1125
              },
              "typeArguments": null,
              "start": 1124,
              "end": 1125
            },
            "start": 1122,
            "end": 1125
          },
          "start": 1119,
          "end": 1125
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "keys",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1134
                },
                "typeArguments": null,
                "start": 1133,
                "end": 1134
              },
              "start": 1133,
              "end": 1136
            },
            "start": 1131,
            "end": 1136
          },
          "start": 1127,
          "end": 1136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1140,
          "end": 1144
        },
        "start": 1138,
        "end": 1144
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1163
                  },
                  "init": null,
                  "definite": false,
                  "start": 1162,
                  "end": 1163
                }
              ],
              "declare": false,
              "start": 1156,
              "end": 1163
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1171
            },
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1189,
                        "end": 1193
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1196,
                          "end": 1199
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1200,
                          "end": 1201
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1196,
                        "end": 1202
                      },
                      "definite": false,
                      "start": 1189,
                      "end": 1202
                    }
                  ],
                  "declare": false,
                  "start": 1183,
                  "end": 1203
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1223,
                        "end": 1227
                      },
                      "prefix": true,
                      "start": 1216,
                      "end": 1227
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": "function",
                      "raw": "'function'",
                      "start": 1231,
                      "end": 1241
                    },
                    "start": 1216,
                    "end": 1241
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1255,
                          "end": 1259
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1260,
                          "end": 1264
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1255,
                        "end": 1264
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1265,
                          "end": 1268
                        }
                      ],
                      "optional": false,
                      "start": 1255,
                      "end": 1269
                    },
                    "directive": null,
                    "start": 1255,
                    "end": 1270
                  },
                  "alternate": null,
                  "start": 1212,
                  "end": 1270
                }
              ],
              "start": 1173,
              "end": 1276
            },
            "start": 1151,
            "end": 1276
          }
        ],
        "start": 1145,
        "end": 1278
      },
      "expression": false,
      "start": 1083,
      "end": 1278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "configureStore",
        "optional": false,
        "typeAnnotation": null,
        "start": 1311,
        "end": 1325
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
              "start": 1326,
              "end": 1327
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1336,
              "end": 1342
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1326,
            "end": 1342
          }
        ],
        "start": 1325,
        "end": 1343
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "reducer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1360,
                      "end": 1364
                    },
                    "start": 1357,
                    "end": 1364
                  },
                  "start": 1354,
                  "end": 1364
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1368,
                    "end": 1374
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                            "start": 1381,
                            "end": 1382
                          },
                          "typeArguments": null,
                          "start": 1381,
                          "end": 1382
                        },
                        "start": 1375,
                        "end": 1382
                      },
                      {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1390,
                            "end": 1394
                          },
                          "start": 1387,
                          "end": 1394
                        },
                        "start": 1384,
                        "end": 1394
                      }
                    ],
                    "start": 1374,
                    "end": 1395
                  },
                  "start": 1368,
                  "end": 1395
                }
              ],
              "start": 1353,
              "end": 1395
            },
            "start": 1351,
            "end": 1395
          },
          "start": 1344,
          "end": 1395
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rootReducer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1426,
                          "end": 1430
                        },
                        "start": 1423,
                        "end": 1430
                      },
                      "start": 1420,
                      "end": 1430
                    },
                    "start": 1418,
                    "end": 1430
                  },
                  "start": 1407,
                  "end": 1430
                },
                "init": null,
                "definite": false,
                "start": 1407,
                "end": 1430
              }
            ],
            "declare": false,
            "start": 1403,
            "end": 1431
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reducer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1447,
                  "end": 1454
                },
                "prefix": true,
                "start": 1440,
                "end": 1454
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "'function'",
                "start": 1459,
                "end": 1469
              },
              "start": 1440,
              "end": 1469
            },
            "consequent": {
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
                      "name": "rootReducer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1481,
                      "end": 1492
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reducer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1495,
                      "end": 1502
                    },
                    "start": 1481,
                    "end": 1502
                  },
                  "directive": null,
                  "start": 1481,
                  "end": 1503
                }
              ],
              "start": 1471,
              "end": 1509
            },
            "alternate": null,
            "start": 1436,
            "end": 1509
          }
        ],
        "start": 1397,
        "end": 1511
      },
      "expression": false,
      "start": 1302,
      "end": 1511
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f101",
        "optional": false,
        "typeAnnotation": null,
        "start": 1522,
        "end": 1526
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "type": "TSStringKeyword",
                  "start": 1530,
                  "end": 1536
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1539,
                    "end": 1545
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1546,
                        "end": 1552
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1554,
                        "end": 1557
                      }
                    ],
                    "start": 1545,
                    "end": 1558
                  },
                  "start": 1539,
                  "end": 1558
                }
              ],
              "start": 1530,
              "end": 1558
            },
            "start": 1528,
            "end": 1558
          },
          "start": 1527,
          "end": 1558
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1580,
                    "end": 1581
                  },
                  "prefix": true,
                  "start": 1573,
                  "end": 1581
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 1586,
                  "end": 1594
                },
                "start": 1573,
                "end": 1594
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1598,
                  "end": 1599
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anything",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1600,
                  "end": 1608
                },
                "optional": false,
                "computed": false,
                "start": 1598,
                "end": 1608
              },
              "start": 1573,
              "end": 1608
            },
            "start": 1566,
            "end": 1609
          }
        ],
        "start": 1560,
        "end": 1611
      },
      "expression": false,
      "start": 1513,
      "end": 1611
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1611
}
```
