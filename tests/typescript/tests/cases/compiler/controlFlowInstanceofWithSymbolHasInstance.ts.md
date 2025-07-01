__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PromiseConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 42
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 54
              },
              "optional": false,
              "computed": false,
              "start": 36,
              "end": 54
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 63,
                    "end": 66
                  },
                  "start": 61,
                  "end": 66
                },
                "start": 56,
                "end": 66
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 74
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 85
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 86,
                          "end": 89
                        }
                      ],
                      "start": 85,
                      "end": 90
                    },
                    "start": 78,
                    "end": 90
                  },
                  "start": 78,
                  "end": 90
                },
                "start": 69,
                "end": 90
              },
              "start": 67,
              "end": 90
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 35,
            "end": 91
          }
        ],
        "start": 29,
        "end": 93
      },
      "declare": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 119
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 133
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 145
              },
              "optional": false,
              "computed": false,
              "start": 127,
              "end": 145
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 154,
                    "end": 157
                  },
                  "start": 152,
                  "end": 157
                },
                "start": 147,
                "end": 157
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 165
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 172
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 173,
                          "end": 176
                        }
                      ],
                      "start": 172,
                      "end": 177
                    },
                    "start": 169,
                    "end": 177
                  },
                  "start": 169,
                  "end": 177
                },
                "start": 160,
                "end": 177
              },
              "start": 158,
              "end": 177
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 126,
            "end": 178
          }
        ],
        "start": 120,
        "end": 180
      },
      "declare": false,
      "start": 95,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 193
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 200
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 201,
                        "end": 207
                      }
                    ],
                    "start": 200,
                    "end": 208
                  },
                  "start": 197,
                  "end": 208
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 214
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 215,
                        "end": 221
                      }
                    ],
                    "start": 214,
                    "end": 222
                  },
                  "start": 211,
                  "end": 222
                }
              ],
              "start": 197,
              "end": 222
            },
            "start": 195,
            "end": 222
          },
          "start": 194,
          "end": 222
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 231
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 241
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 242,
                      "end": 248
                    }
                  ],
                  "start": 241,
                  "end": 249
                },
                "arguments": [],
                "start": 234,
                "end": 251
              },
              "start": 230,
              "end": 251
            },
            "directive": null,
            "start": 230,
            "end": 252
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "directive": null,
            "start": 257,
            "end": 259
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 285
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 300
              },
              "start": 284,
              "end": 300
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 313
                  },
                  "directive": null,
                  "start": 312,
                  "end": 314
                }
              ],
              "start": 302,
              "end": 336
            },
            "alternate": null,
            "start": 280,
            "end": 336
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "directive": null,
            "start": 341,
            "end": 343
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 369
                },
                "optional": false,
                "computed": false,
                "start": 364,
                "end": 369
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 370,
                  "end": 372
                }
              ],
              "optional": false,
              "start": 364,
              "end": 373
            },
            "directive": null,
            "start": 364,
            "end": 374
          }
        ],
        "start": 224,
        "end": 376
      },
      "expression": false,
      "start": 182,
      "end": 376
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 396
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 397,
                        "end": 403
                      }
                    ],
                    "start": 396,
                    "end": 404
                  },
                  "start": 393,
                  "end": 404
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 410
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 411,
                        "end": 417
                      }
                    ],
                    "start": 410,
                    "end": 418
                  },
                  "start": 407,
                  "end": 418
                }
              ],
              "start": 393,
              "end": 418
            },
            "start": 391,
            "end": 418
          },
          "start": 390,
          "end": 418
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 437
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 438,
                      "end": 444
                    }
                  ],
                  "start": 437,
                  "end": 445
                },
                "arguments": [],
                "start": 430,
                "end": 447
              },
              "start": 426,
              "end": 447
            },
            "directive": null,
            "start": 426,
            "end": 448
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 454
            },
            "directive": null,
            "start": 453,
            "end": 455
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 500
              },
              "start": 480,
              "end": 500
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 512,
                    "end": 513
                  },
                  "directive": null,
                  "start": 512,
                  "end": 514
                }
              ],
              "start": 502,
              "end": 551
            },
            "alternate": null,
            "start": 476,
            "end": 551
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 557
            },
            "directive": null,
            "start": 556,
            "end": 558
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 580
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 584
                },
                "optional": false,
                "computed": false,
                "start": 579,
                "end": 584
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 585,
                  "end": 587
                }
              ],
              "optional": false,
              "start": 579,
              "end": 588
            },
            "directive": null,
            "start": 579,
            "end": 589
          }
        ],
        "start": 420,
        "end": 591
      },
      "expression": false,
      "start": 378,
      "end": 591
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 602,
        "end": 604
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 608,
                    "end": 611
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 612,
                        "end": 618
                      }
                    ],
                    "start": 611,
                    "end": 619
                  },
                  "start": 608,
                  "end": 619
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 625
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 626,
                        "end": 632
                      }
                    ],
                    "start": 625,
                    "end": 633
                  },
                  "start": 622,
                  "end": 633
                }
              ],
              "start": 608,
              "end": 633
            },
            "start": 606,
            "end": 633
          },
          "start": 605,
          "end": 633
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 641,
              "end": 642
            },
            "directive": null,
            "start": 641,
            "end": 643
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 698
              },
              "start": 682,
              "end": 698
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 710,
                    "end": 711
                  },
                  "directive": null,
                  "start": 710,
                  "end": 712
                }
              ],
              "start": 700,
              "end": 748
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 768,
                    "end": 769
                  },
                  "directive": null,
                  "start": 768,
                  "end": 770
                }
              ],
              "start": 758,
              "end": 786
            },
            "start": 678,
            "end": 786
          }
        ],
        "start": 635,
        "end": 788
      },
      "expression": false,
      "start": 593,
      "end": 788
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 799,
        "end": 801
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 808
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 809,
                        "end": 815
                      }
                    ],
                    "start": 808,
                    "end": 816
                  },
                  "start": 805,
                  "end": 816
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 822
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 823,
                        "end": 829
                      }
                    ],
                    "start": 822,
                    "end": 830
                  },
                  "start": 819,
                  "end": 830
                }
              ],
              "start": 805,
              "end": 830
            },
            "start": 803,
            "end": 830
          },
          "start": 802,
          "end": 830
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 839
              },
              "right": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 849
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 850,
                      "end": 856
                    }
                  ],
                  "start": 849,
                  "end": 857
                },
                "arguments": [],
                "start": 842,
                "end": 859
              },
              "start": 838,
              "end": 859
            },
            "directive": null,
            "start": 838,
            "end": 860
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 866
            },
            "directive": null,
            "start": 865,
            "end": 867
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 892,
                "end": 893
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 908
              },
              "start": 892,
              "end": 908
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 920,
                    "end": 921
                  },
                  "directive": null,
                  "start": 920,
                  "end": 922
                }
              ],
              "start": 910,
              "end": 944
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 964,
                    "end": 965
                  },
                  "directive": null,
                  "start": 964,
                  "end": 966
                }
              ],
              "start": 954,
              "end": 982
            },
            "start": 888,
            "end": 982
          }
        ],
        "start": 832,
        "end": 984
      },
      "expression": false,
      "start": 790,
      "end": 984
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1008
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1016
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1018,
                "end": 1024
              },
              "start": 1016,
              "end": 1024
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1015,
            "end": 1025
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1044
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1056
              },
              "optional": false,
              "computed": false,
              "start": 1038,
              "end": 1056
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1058,
                      "end": 1059
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1058,
                    "end": 1059
                  }
                ],
                "start": 1057,
                "end": 1060
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
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
                        "start": 1067,
                        "end": 1068
                      },
                      "typeArguments": null,
                      "start": 1067,
                      "end": 1068
                    },
                    "start": 1065,
                    "end": 1068
                  },
                  "start": 1061,
                  "end": 1068
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1077,
                      "end": 1084
                    },
                    "start": 1075,
                    "end": 1084
                  },
                  "start": 1070,
                  "end": 1084
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1087,
                    "end": 1092
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                          "start": 1106,
                          "end": 1107
                        },
                        "typeArguments": null,
                        "start": 1106,
                        "end": 1107
                      },
                      "extendsType": {
                        "type": "TSConstructorType",
                        "abstract": true,
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
                              "start": 1134,
                              "end": 1138
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 1140,
                                "end": 1143
                              },
                              "start": 1138,
                              "end": 1143
                            },
                            "value": null,
                            "start": 1131,
                            "end": 1143
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1154,
                                "end": 1155
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1154,
                              "end": 1155
                            },
                            "start": 1148,
                            "end": 1155
                          },
                          "start": 1145,
                          "end": 1155
                        },
                        "start": 1117,
                        "end": 1155
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1159,
                          "end": 1160
                        },
                        "typeArguments": null,
                        "start": 1159,
                        "end": 1160
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 1171,
                        "end": 1176
                      },
                      "start": 1106,
                      "end": 1176
                    },
                    "start": 1106,
                    "end": 1176
                  },
                  "start": 1087,
                  "end": 1182
                },
                "start": 1085,
                "end": 1182
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Function",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1200,
                              "end": 1208
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prototype",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1209,
                              "end": 1218
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1200,
                            "end": 1218
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1219,
                              "end": 1225
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "hasInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1226,
                              "end": 1237
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1219,
                            "end": 1237
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1200,
                          "end": 1238
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1239,
                          "end": 1243
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1200,
                        "end": 1243
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1244,
                          "end": 1248
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1250,
                          "end": 1255
                        }
                      ],
                      "optional": false,
                      "start": 1200,
                      "end": 1256
                    },
                    "start": 1193,
                    "end": 1257
                  }
                ],
                "start": 1183,
                "end": 1263
              },
              "expression": false,
              "start": 1057,
              "end": 1263
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1030,
            "end": 1263
          }
        ],
        "start": 1009,
        "end": 1265
      },
      "abstract": false,
      "declare": false,
      "start": 1001,
      "end": 1265
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1272,
        "end": 1273
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1282,
        "end": 1283
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1289,
                "end": 1295
              },
              "start": 1287,
              "end": 1295
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1286,
            "end": 1295
          }
        ],
        "start": 1284,
        "end": 1297
      },
      "abstract": false,
      "declare": false,
      "start": 1266,
      "end": 1297
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1304,
        "end": 1305
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1314,
        "end": 1315
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1319
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1321,
                "end": 1327
              },
              "start": 1319,
              "end": 1327
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1318,
            "end": 1327
          }
        ],
        "start": 1316,
        "end": 1329
      },
      "abstract": false,
      "declare": false,
      "start": 1298,
      "end": 1329
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1340,
        "end": 1343
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1347,
                    "end": 1348
                  },
                  "typeArguments": null,
                  "start": 1347,
                  "end": 1348
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1351,
                  "end": 1360
                }
              ],
              "start": 1347,
              "end": 1360
            },
            "start": 1345,
            "end": 1360
          },
          "start": 1344,
          "end": 1360
        }
      ],
      "returnType": null,
      "body": {
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
              "start": 1368,
              "end": 1369
            },
            "directive": null,
            "start": 1368,
            "end": 1370
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1397,
                  "end": 1398
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1411
                },
                "start": 1397,
                "end": 1411
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1415,
                  "end": 1416
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1428,
                  "end": 1429
                },
                "start": 1415,
                "end": 1429
              },
              "start": 1397,
              "end": 1429
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
                    "start": 1441,
                    "end": 1442
                  },
                  "directive": null,
                  "start": 1441,
                  "end": 1443
                }
              ],
              "start": 1431,
              "end": 1459
            },
            "alternate": null,
            "start": 1393,
            "end": 1459
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1465
            },
            "directive": null,
            "start": 1464,
            "end": 1466
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1493,
                  "end": 1494
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1506,
                  "end": 1507
                },
                "start": 1493,
                "end": 1507
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1511,
                  "end": 1512
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1524,
                  "end": 1525
                },
                "start": 1511,
                "end": 1525
              },
              "start": 1493,
              "end": 1525
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
                    "start": 1537,
                    "end": 1538
                  },
                  "directive": null,
                  "start": 1537,
                  "end": 1539
                }
              ],
              "start": 1527,
              "end": 1555
            },
            "alternate": null,
            "start": 1489,
            "end": 1555
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1560,
              "end": 1561
            },
            "directive": null,
            "start": 1560,
            "end": 1562
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1590,
                "end": 1591
              },
              "prefix": true,
              "start": 1589,
              "end": 1591
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1603,
                  "end": 1610
                }
              ],
              "start": 1593,
              "end": 1616
            },
            "alternate": null,
            "start": 1585,
            "end": 1616
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1622
            },
            "directive": null,
            "start": 1621,
            "end": 1623
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
                "start": 1638,
                "end": 1639
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1651,
                "end": 1652
              },
              "start": 1638,
              "end": 1652
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
                    "start": 1664,
                    "end": 1665
                  },
                  "directive": null,
                  "start": 1664,
                  "end": 1666
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
                      "start": 1685,
                      "end": 1686
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1698,
                      "end": 1699
                    },
                    "start": 1685,
                    "end": 1699
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
                          "start": 1715,
                          "end": 1716
                        },
                        "directive": null,
                        "start": 1715,
                        "end": 1717
                      }
                    ],
                    "start": 1701,
                    "end": 1737
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
                          "start": 1765,
                          "end": 1766
                        },
                        "directive": null,
                        "start": 1765,
                        "end": 1767
                      }
                    ],
                    "start": 1751,
                    "end": 1783
                  },
                  "start": 1681,
                  "end": 1783
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1792,
                    "end": 1793
                  },
                  "directive": null,
                  "start": 1792,
                  "end": 1794
                }
              ],
              "start": 1654,
              "end": 1806
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
                    "start": 1826,
                    "end": 1827
                  },
                  "directive": null,
                  "start": 1826,
                  "end": 1828
                }
              ],
              "start": 1816,
              "end": 1840
            },
            "start": 1634,
            "end": 1840
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1845,
              "end": 1846
            },
            "directive": null,
            "start": 1845,
            "end": 1847
          }
        ],
        "start": 1362,
        "end": 1855
      },
      "expression": false,
      "start": 1331,
      "end": 1855
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 1967,
        "end": 1968
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1975,
              "end": 1976
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1979,
                "end": 1985
              },
              "start": 1977,
              "end": 1985
            },
            "accessibility": null,
            "static": false,
            "start": 1975,
            "end": 1986
          }
        ],
        "start": 1969,
        "end": 1988
      },
      "declare": false,
      "start": 1957,
      "end": 1988
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 1996,
        "end": 1997
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2004,
              "end": 2005
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2007,
                "end": 2013
              },
              "start": 2005,
              "end": 2013
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2004,
            "end": 2014
          }
        ],
        "start": 1998,
        "end": 2016
      },
      "abstract": false,
      "declare": false,
      "start": 1990,
      "end": 2016
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2027,
        "end": 2030
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 2034,
                "end": 2035
              },
              "typeArguments": null,
              "start": 2034,
              "end": 2035
            },
            "start": 2032,
            "end": 2035
          },
          "start": 2031,
          "end": 2035
        }
      ],
      "returnType": null,
      "body": {
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
              "start": 2043,
              "end": 2044
            },
            "directive": null,
            "start": 2043,
            "end": 2045
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
                "start": 2054,
                "end": 2055
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2067,
                "end": 2068
              },
              "start": 2054,
              "end": 2068
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2080,
                      "end": 2081
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2082,
                      "end": 2083
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2080,
                    "end": 2083
                  },
                  "directive": null,
                  "start": 2080,
                  "end": 2084
                }
              ],
              "start": 2070,
              "end": 2090
            },
            "alternate": null,
            "start": 2050,
            "end": 2090
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2095,
              "end": 2096
            },
            "directive": null,
            "start": 2095,
            "end": 2097
          }
        ],
        "start": 2037,
        "end": 2099
      },
      "expression": false,
      "start": 2018,
      "end": 2099
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2100
}
```
