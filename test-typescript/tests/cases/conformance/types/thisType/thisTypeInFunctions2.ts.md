__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1315,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 25,
        "name": "IndexedWithThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 26,
        "end": 261,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 98,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "name": "init",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 97,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 77,
                "end": 97,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 78,
                    "end": 88,
                    "name": "this",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 84,
                        "end": 88
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 97,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 93,
                    "end": 97
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 103,
            "end": 137,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 114,
              "name": "willDestroy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 136,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 117,
                "end": 136,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 118,
                    "end": 127,
                    "name": "this",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 122,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 124,
                        "end": 127
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 129,
                  "end": 136,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 132,
                    "end": 136
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 142,
            "end": 259,
            "parameters": [
              {
                "type": "Identifier",
                "start": 143,
                "end": 159,
                "name": "propName",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 159,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 153,
                    "end": 159
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 258,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 162,
                "end": 258,
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
                    "start": 218,
                    "end": 220,
                    "members": []
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 224,
                    "end": 257,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 225,
                        "end": 234,
                        "name": "this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 229,
                          "end": 234,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 231,
                            "end": 234
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "RestElement",
                        "start": 236,
                        "end": 249,
                        "argument": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 243,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 243,
                          "end": 249,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 244,
                            "end": 249,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 244,
                              "end": 247
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 251,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 254,
                        "end": 257
                      }
                    }
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 262,
      "end": 450,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 290,
        "name": "IndexedWithoutThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 291,
        "end": 450,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 371,
            "end": 389,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 375,
              "name": "init",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 388,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 378,
                "end": 388,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 381,
                  "end": 388,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 384,
                    "end": 388
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 394,
            "end": 419,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 405,
              "name": "willDestroy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 418,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 408,
                "end": 418,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 411,
                  "end": 418,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 414,
                    "end": 418
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 424,
            "end": 448,
            "parameters": [
              {
                "type": "Identifier",
                "start": 425,
                "end": 441,
                "name": "propName",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 433,
                  "end": 441,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 435,
                    "end": 441
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 447,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 444,
                "end": 447
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 451,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 476,
        "name": "SimpleInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 477,
        "end": 519,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 483,
            "end": 498,
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 486,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 487,
                "end": 496,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 488,
                  "end": 496,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 490,
                    "end": 496
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 503,
            "end": 517,
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 506,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 508,
              "end": 516,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 510,
                "end": 516
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 520,
      "end": 574,
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 544,
        "name": "extend1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 545,
          "end": 566,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 566,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 551,
              "end": 566,
              "typeName": {
                "type": "Identifier",
                "start": 551,
                "end": 566,
                "name": "IndexedWithThis",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 567,
        "end": 573,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 569,
          "end": 573
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 575,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 599,
        "name": "extend2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 600,
          "end": 624,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 604,
            "end": 624,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 606,
              "end": 624,
              "typeName": {
                "type": "Identifier",
                "start": 606,
                "end": 624,
                "name": "IndexedWithoutThis",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 625,
        "end": 631,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 627,
          "end": 631
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 633,
      "end": 685,
      "id": {
        "type": "Identifier",
        "start": 650,
        "end": 656,
        "name": "simple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 657,
          "end": 677,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 660,
            "end": 677,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 662,
              "end": 677,
              "typeName": {
                "type": "Identifier",
                "start": 662,
                "end": 677,
                "name": "SimpleInterface",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 678,
        "end": 684,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 680,
          "end": 684
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 687,
      "end": 964,
      "expression": {
        "type": "CallExpression",
        "start": 687,
        "end": 963,
        "callee": {
          "type": "Identifier",
          "start": 687,
          "end": 694,
          "name": "extend1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 695,
            "end": 962,
            "properties": [
              {
                "type": "Property",
                "start": 701,
                "end": 829,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 705,
                  "name": "init",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 705,
                  "end": 829,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 708,
                    "end": 829,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 718,
                        "end": 722,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 718,
                          "end": 722
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 807,
                        "end": 823,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 807,
                          "end": 823,
                          "object": {
                            "type": "ThisExpression",
                            "start": 807,
                            "end": 811
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 812,
                            "end": 823,
                            "name": "willDestroy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 835,
                "end": 843,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 839,
                  "name": "mine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 841,
                  "end": 843,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 849,
                "end": 960,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 852,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 852,
                  "end": 960,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 855,
                    "end": 960,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 865,
                        "end": 874,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 865,
                          "end": 873,
                          "object": {
                            "type": "ThisExpression",
                            "start": 865,
                            "end": 869
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 870,
                            "end": 873,
                            "name": "url",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 937,
                        "end": 954,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 937,
                          "end": 953,
                          "object": {
                            "type": "ThisExpression",
                            "start": 937,
                            "end": 941
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 942,
                            "end": 953,
                            "name": "willDestroy",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 965,
      "end": 1206,
      "expression": {
        "type": "CallExpression",
        "start": 965,
        "end": 1205,
        "callee": {
          "type": "Identifier",
          "start": 965,
          "end": 972,
          "name": "extend2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 973,
            "end": 1204,
            "properties": [
              {
                "type": "Property",
                "start": 979,
                "end": 1081,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 979,
                  "end": 983,
                  "name": "init",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 983,
                  "end": 1081,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 986,
                    "end": 1081,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 996,
                        "end": 1000,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 996,
                          "end": 1000
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1066,
                        "end": 1075,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1066,
                          "end": 1075,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1066,
                            "end": 1070
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1071,
                            "end": 1075,
                            "name": "mine",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1087,
                "end": 1095,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1087,
                  "end": 1091,
                  "name": "mine",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1093,
                  "end": 1095,
                  "value": 13,
                  "raw": "13"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1101,
                "end": 1202,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1101,
                  "end": 1104,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1104,
                  "end": 1202,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1107,
                    "end": 1202,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1117,
                        "end": 1121,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 1117,
                          "end": 1121
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1187,
                        "end": 1196,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1187,
                          "end": 1196,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1187,
                            "end": 1191
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1192,
                            "end": 1196,
                            "name": "mine",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1208,
      "end": 1314,
      "expression": {
        "type": "CallExpression",
        "start": 1208,
        "end": 1314,
        "callee": {
          "type": "Identifier",
          "start": 1208,
          "end": 1214,
          "name": "simple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1215,
            "end": 1313,
            "properties": [
              {
                "type": "Property",
                "start": 1221,
                "end": 1273,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1221,
                  "end": 1224,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1224,
                  "end": 1273,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1225,
                      "end": 1226,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1228,
                    "end": 1273,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1238,
                        "end": 1267,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 1245,
                          "end": 1266,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1245,
                            "end": 1253,
                            "object": {
                              "type": "Identifier",
                              "start": 1245,
                              "end": 1246,
                              "name": "n",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1247,
                              "end": 1253,
                              "name": "length",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 1256,
                            "end": 1266,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1256,
                              "end": 1264,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1256,
                                "end": 1260
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1261,
                                "end": 1264,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1279,
                "end": 1311,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1279,
                  "end": 1282,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1282,
                  "end": 1311,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1285,
                    "end": 1311,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1295,
                        "end": 1305,
                        "argument": {
                          "type": "Literal",
                          "start": 1302,
                          "end": 1304,
                          "value": 14,
                          "raw": "14"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
