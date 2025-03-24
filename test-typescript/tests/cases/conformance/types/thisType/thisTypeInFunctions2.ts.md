__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1314,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 261,
      "body": {
        "type": "TSInterfaceBody",
        "start": 26,
        "end": 261,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "init",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 97,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 77,
                "end": 97,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 78,
                    "end": 88,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 84,
                        "end": 88
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 103,
            "end": 137,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 114,
              "decorators": [],
              "name": "willDestroy",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 136,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 117,
                "end": 136,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 118,
                    "end": 127,
                    "decorators": [],
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 122,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 124,
                        "end": 127
                      }
                    }
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 142,
            "end": 259,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 143,
                "end": 159,
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 159,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 153,
                    "end": 159
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 225,
                        "end": 234,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 229,
                          "end": 234,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 231,
                            "end": 234
                          }
                        }
                      },
                      {
                        "type": "RestElement",
                        "start": 236,
                        "end": 249,
                        "argument": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 243,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
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
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 25,
        "decorators": [],
        "name": "IndexedWithThis",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 262,
      "end": 450,
      "body": {
        "type": "TSInterfaceBody",
        "start": 291,
        "end": 450,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 371,
            "end": 389,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 375,
              "decorators": [],
              "name": "init",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 388,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 378,
                "end": 388,
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 394,
            "end": 419,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 405,
              "decorators": [],
              "name": "willDestroy",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 418,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 408,
                "end": 418,
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
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 424,
            "end": 448,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 425,
                "end": 441,
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 433,
                  "end": 441,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 435,
                    "end": 441
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 442,
              "end": 447,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 444,
                "end": 447
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 290,
        "decorators": [],
        "name": "IndexedWithoutThis",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 451,
      "end": 519,
      "body": {
        "type": "TSInterfaceBody",
        "start": 477,
        "end": 519,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 483,
            "end": 498,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 483,
              "end": 486,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 487,
                "end": 496,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 488,
                  "end": 496,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 490,
                    "end": 496
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 503,
            "end": 517,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 506,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 476,
        "decorators": [],
        "name": "SimpleInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 520,
      "end": 574,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 544,
        "decorators": [],
        "name": "extend1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 545,
          "end": 566,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 566,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 551,
              "end": 566,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 551,
                "end": 566,
                "decorators": [],
                "name": "IndexedWithThis",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 567,
        "end": 573,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 569,
          "end": 573
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 575,
      "end": 632,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 599,
        "decorators": [],
        "name": "extend2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 600,
          "end": 624,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 604,
            "end": 624,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 606,
              "end": 624,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 606,
                "end": 624,
                "decorators": [],
                "name": "IndexedWithoutThis",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 625,
        "end": 631,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 627,
          "end": 631
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 633,
      "end": 685,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 650,
        "end": 656,
        "decorators": [],
        "name": "simple",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 657,
          "end": 677,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 660,
            "end": 677,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 662,
              "end": 677,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 662,
                "end": 677,
                "decorators": [],
                "name": "SimpleInterface",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 678,
        "end": 684,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 680,
          "end": 684
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 687,
      "end": 964,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 687,
        "end": 963,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 705,
                  "decorators": [],
                  "name": "init",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 705,
                  "end": 829,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 708,
                    "end": 829,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 718,
                        "end": 722,
                        "directive": null,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 718,
                          "end": 722
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 807,
                        "end": 823,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 807,
                          "end": 823,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 807,
                            "end": 811
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 812,
                            "end": 823,
                            "decorators": [],
                            "name": "willDestroy",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 835,
                "end": 843,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 839,
                  "decorators": [],
                  "name": "mine",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 841,
                  "end": 843,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 849,
                "end": 960,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 852,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 852,
                  "end": 960,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 855,
                    "end": 960,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 865,
                        "end": 874,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 865,
                          "end": 873,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 865,
                            "end": 869
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 870,
                            "end": 873,
                            "decorators": [],
                            "name": "url",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 937,
                        "end": 954,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 937,
                          "end": 953,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 937,
                            "end": 941
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 942,
                            "end": 953,
                            "decorators": [],
                            "name": "willDestroy",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 687,
          "end": 694,
          "decorators": [],
          "name": "extend1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 965,
      "end": 1206,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 965,
        "end": 1205,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 979,
                  "end": 983,
                  "decorators": [],
                  "name": "init",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 983,
                  "end": 1081,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 986,
                    "end": 1081,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 996,
                        "end": 1000,
                        "directive": null,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 996,
                          "end": 1000
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1066,
                        "end": 1075,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1066,
                          "end": 1075,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1066,
                            "end": 1070
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1071,
                            "end": 1075,
                            "decorators": [],
                            "name": "mine",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 1087,
                "end": 1095,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1087,
                  "end": 1091,
                  "decorators": [],
                  "name": "mine",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1093,
                  "end": 1095,
                  "raw": "13",
                  "value": 13
                }
              },
              {
                "type": "Property",
                "start": 1101,
                "end": 1202,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1101,
                  "end": 1104,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1104,
                  "end": 1202,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1107,
                    "end": 1202,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1117,
                        "end": 1121,
                        "directive": null,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 1117,
                          "end": 1121
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1187,
                        "end": 1196,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1187,
                          "end": 1196,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1187,
                            "end": 1191
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1192,
                            "end": 1196,
                            "decorators": [],
                            "name": "mine",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 965,
          "end": 972,
          "decorators": [],
          "name": "extend2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1208,
      "end": 1314,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1208,
        "end": 1314,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1221,
                  "end": 1224,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1224,
                  "end": 1273,
                  "async": false,
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
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1245,
                            "end": 1253,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1245,
                              "end": 1246,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1247,
                              "end": 1253,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 1256,
                            "end": 1266,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1256,
                              "end": 1264,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1256,
                                "end": 1260
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1261,
                                "end": 1264,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1225,
                      "end": 1226,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 1279,
                "end": 1311,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1279,
                  "end": 1282,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1282,
                  "end": 1311,
                  "async": false,
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
                          "raw": "14",
                          "value": 14
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1208,
          "end": 1214,
          "decorators": [],
          "name": "simple",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
