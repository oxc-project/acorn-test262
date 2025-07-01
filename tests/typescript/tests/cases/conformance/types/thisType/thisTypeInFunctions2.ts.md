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
        "name": "IndexedWithThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 25
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
              "name": "init",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 74
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 84,
                        "end": 88
                      },
                      "start": 82,
                      "end": 88
                    },
                    "start": 78,
                    "end": 88
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 93,
                    "end": 97
                  },
                  "start": 90,
                  "end": 97
                },
                "start": 77,
                "end": 97
              },
              "start": 75,
              "end": 97
            },
            "accessibility": null,
            "static": false,
            "start": 70,
            "end": 98
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "willDestroy",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 124,
                        "end": 127
                      },
                      "start": 122,
                      "end": 127
                    },
                    "start": 118,
                    "end": 127
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 132,
                    "end": 136
                  },
                  "start": 129,
                  "end": 136
                },
                "start": 117,
                "end": 136
              },
              "start": 115,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 103,
            "end": 137
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 153,
                    "end": 159
                  },
                  "start": 151,
                  "end": 159
                },
                "start": 143,
                "end": 159
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 162,
                    "end": 168
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 171,
                    "end": 177
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 180,
                    "end": 187
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 190,
                    "end": 196
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 199,
                    "end": 208
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 211,
                    "end": 215
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 218,
                    "end": 220
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 231,
                            "end": 234
                          },
                          "start": 229,
                          "end": 234
                        },
                        "start": 225,
                        "end": 234
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 243
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 244,
                              "end": 247
                            },
                            "start": 244,
                            "end": 249
                          },
                          "start": 243,
                          "end": 249
                        },
                        "value": null,
                        "start": 236,
                        "end": 249
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 254,
                        "end": 257
                      },
                      "start": 251,
                      "end": 257
                    },
                    "start": 224,
                    "end": 257
                  }
                ],
                "start": 162,
                "end": 258
              },
              "start": 160,
              "end": 258
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 142,
            "end": 259
          }
        ],
        "start": 26,
        "end": 261
      },
      "declare": false,
      "start": 0,
      "end": 261
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndexedWithoutThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 290
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
              "name": "init",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 375
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
                    "type": "TSVoidKeyword",
                    "start": 384,
                    "end": 388
                  },
                  "start": 381,
                  "end": 388
                },
                "start": 378,
                "end": 388
              },
              "start": 376,
              "end": 388
            },
            "accessibility": null,
            "static": false,
            "start": 371,
            "end": 389
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "willDestroy",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 405
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
                    "type": "TSVoidKeyword",
                    "start": 414,
                    "end": 418
                  },
                  "start": 411,
                  "end": 418
                },
                "start": 408,
                "end": 418
              },
              "start": 406,
              "end": 418
            },
            "accessibility": null,
            "static": false,
            "start": 394,
            "end": 419
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 435,
                    "end": 441
                  },
                  "start": 433,
                  "end": 441
                },
                "start": 425,
                "end": 441
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 444,
                "end": 447
              },
              "start": 442,
              "end": 447
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 424,
            "end": 448
          }
        ],
        "start": 291,
        "end": 450
      },
      "declare": false,
      "start": 262,
      "end": 450
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SimpleInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 476
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 486
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 490,
                    "end": 496
                  },
                  "start": 488,
                  "end": 496
                },
                "start": 487,
                "end": 496
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 483,
            "end": 498
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 506
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 510,
                "end": 516
              },
              "start": 508,
              "end": 516
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 503,
            "end": 517
          }
        ],
        "start": 477,
        "end": 519
      },
      "declare": false,
      "start": 451,
      "end": 519
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extend1",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 544
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndexedWithThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 566
              },
              "typeArguments": null,
              "start": 551,
              "end": 566
            },
            "start": 549,
            "end": 566
          },
          "start": 545,
          "end": 566
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 569,
          "end": 573
        },
        "start": 567,
        "end": 573
      },
      "body": null,
      "expression": false,
      "start": 520,
      "end": 574
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extend2",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 599
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IndexedWithoutThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 624
              },
              "typeArguments": null,
              "start": 606,
              "end": 624
            },
            "start": 604,
            "end": 624
          },
          "start": 600,
          "end": 624
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 627,
          "end": 631
        },
        "start": 625,
        "end": 631
      },
      "body": null,
      "expression": false,
      "start": 575,
      "end": 632
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simple",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 656
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SimpleInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 677
              },
              "typeArguments": null,
              "start": 662,
              "end": 677
            },
            "start": 660,
            "end": 677
          },
          "start": 657,
          "end": 677
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 680,
          "end": 684
        },
        "start": 678,
        "end": 684
      },
      "body": null,
      "expression": false,
      "start": 633,
      "end": 685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "extend1",
          "optional": false,
          "typeAnnotation": null,
          "start": 687,
          "end": 694
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
                  "name": "init",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 705
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 718,
                          "end": 722
                        },
                        "directive": null,
                        "start": 718,
                        "end": 722
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 807,
                            "end": 811
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "willDestroy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 812,
                            "end": 823
                          },
                          "optional": false,
                          "computed": false,
                          "start": 807,
                          "end": 823
                        },
                        "directive": null,
                        "start": 807,
                        "end": 823
                      }
                    ],
                    "start": 708,
                    "end": 829
                  },
                  "expression": false,
                  "start": 705,
                  "end": 829
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 701,
                "end": 829
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 839
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 841,
                  "end": 843
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 835,
                "end": 843
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 852
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 865,
                            "end": 869
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "url",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 870,
                            "end": 873
                          },
                          "optional": false,
                          "computed": false,
                          "start": 865,
                          "end": 873
                        },
                        "directive": null,
                        "start": 865,
                        "end": 874
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 937,
                            "end": 941
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "willDestroy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 942,
                            "end": 953
                          },
                          "optional": false,
                          "computed": false,
                          "start": 937,
                          "end": 953
                        },
                        "directive": null,
                        "start": 937,
                        "end": 954
                      }
                    ],
                    "start": 855,
                    "end": 960
                  },
                  "expression": false,
                  "start": 852,
                  "end": 960
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 849,
                "end": 960
              }
            ],
            "start": 695,
            "end": 962
          }
        ],
        "optional": false,
        "start": 687,
        "end": 963
      },
      "directive": null,
      "start": 687,
      "end": 964
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "extend2",
          "optional": false,
          "typeAnnotation": null,
          "start": 965,
          "end": 972
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
                  "name": "init",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 979,
                  "end": 983
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 996,
                          "end": 1000
                        },
                        "directive": null,
                        "start": 996,
                        "end": 1000
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1066,
                            "end": 1070
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mine",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1071,
                            "end": 1075
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1066,
                          "end": 1075
                        },
                        "directive": null,
                        "start": 1066,
                        "end": 1075
                      }
                    ],
                    "start": 986,
                    "end": 1081
                  },
                  "expression": false,
                  "start": 983,
                  "end": 1081
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 979,
                "end": 1081
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mine",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1087,
                  "end": 1091
                },
                "value": {
                  "type": "Literal",
                  "value": 13,
                  "raw": "13",
                  "start": 1093,
                  "end": 1095
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1087,
                "end": 1095
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1101,
                  "end": 1104
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 1117,
                          "end": 1121
                        },
                        "directive": null,
                        "start": 1117,
                        "end": 1121
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1187,
                            "end": 1191
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mine",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1192,
                            "end": 1196
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1187,
                          "end": 1196
                        },
                        "directive": null,
                        "start": 1187,
                        "end": 1196
                      }
                    ],
                    "start": 1107,
                    "end": 1202
                  },
                  "expression": false,
                  "start": 1104,
                  "end": 1202
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1101,
                "end": 1202
              }
            ],
            "start": 973,
            "end": 1204
          }
        ],
        "optional": false,
        "start": 965,
        "end": 1205
      },
      "directive": null,
      "start": 965,
      "end": 1206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "simple",
          "optional": false,
          "typeAnnotation": null,
          "start": 1208,
          "end": 1214
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1221,
                  "end": 1224
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1225,
                      "end": 1226
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1245,
                              "end": 1246
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1247,
                              "end": 1253
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1245,
                            "end": 1253
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1256,
                                "end": 1260
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1261,
                                "end": 1264
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1256,
                              "end": 1264
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1256,
                            "end": 1266
                          },
                          "start": 1245,
                          "end": 1266
                        },
                        "start": 1238,
                        "end": 1267
                      }
                    ],
                    "start": 1228,
                    "end": 1273
                  },
                  "expression": false,
                  "start": 1224,
                  "end": 1273
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1221,
                "end": 1273
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1279,
                  "end": 1282
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 14,
                          "raw": "14",
                          "start": 1302,
                          "end": 1304
                        },
                        "start": 1295,
                        "end": 1305
                      }
                    ],
                    "start": 1285,
                    "end": 1311
                  },
                  "expression": false,
                  "start": 1282,
                  "end": 1311
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1279,
                "end": 1311
              }
            ],
            "start": 1215,
            "end": 1313
          }
        ],
        "optional": false,
        "start": 1208,
        "end": 1314
      },
      "directive": null,
      "start": 1208,
      "end": 1314
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1314
}
```
