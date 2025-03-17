__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2101,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 28,
        "name": "PromiseConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 93,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 35,
            "end": 91,
            "key": {
              "type": "MemberExpression",
              "start": 36,
              "end": 54,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 42,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 54,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 66,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 63,
                    "end": 66
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 69,
                "end": 90,
                "parameterName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 74,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 90,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 78,
                    "end": 90,
                    "typeName": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 85,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 85,
                      "end": 90,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 86,
                          "end": 89
                        }
                      ]
                    }
                  }
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 95,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 119,
        "name": "SetConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 120,
        "end": 180,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 126,
            "end": 178,
            "key": {
              "type": "MemberExpression",
              "start": 127,
              "end": 145,
              "object": {
                "type": "Identifier",
                "start": 127,
                "end": 133,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 145,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 157,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 157,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 154,
                    "end": 157
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 160,
                "end": 177,
                "parameterName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 165,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 169,
                  "end": 177,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 169,
                    "end": 177,
                    "typeName": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 172,
                      "name": "Set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 172,
                      "end": 177,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 173,
                          "end": 176
                        }
                      ]
                    }
                  }
                }
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
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 193,
        "name": "f1",
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
          "start": 194,
          "end": 222,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 195,
            "end": 222,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 197,
              "end": 222,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 197,
                  "end": 208,
                  "typeName": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 200,
                    "name": "Set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 200,
                    "end": 208,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 201,
                        "end": 207
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 211,
                  "end": 222,
                  "typeName": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 214,
                    "name": "Set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 214,
                    "end": 222,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 215,
                        "end": 221
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 224,
        "end": 376,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 230,
            "end": 252,
            "expression": {
              "type": "AssignmentExpression",
              "start": 230,
              "end": 251,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 234,
                "end": 251,
                "callee": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 241,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 241,
                  "end": 249,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 242,
                      "end": 248
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 259,
            "expression": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 280,
            "end": 336,
            "test": {
              "type": "BinaryExpression",
              "start": 284,
              "end": 300,
              "left": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 297,
                "end": 300,
                "name": "Set",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 302,
              "end": 336,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 312,
                  "end": 314,
                  "expression": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 313,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 341,
            "end": 343,
            "expression": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 364,
            "end": 374,
            "expression": {
              "type": "CallExpression",
              "start": 364,
              "end": 373,
              "callee": {
                "type": "MemberExpression",
                "start": 364,
                "end": 369,
                "object": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 369,
                  "name": "add",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 370,
                  "end": 372,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 378,
      "end": 591,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 389,
        "name": "f2",
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
          "start": 390,
          "end": 418,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 418,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 393,
              "end": 418,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 393,
                  "end": 404,
                  "typeName": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 396,
                    "name": "Set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 396,
                    "end": 404,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 397,
                        "end": 403
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 407,
                  "end": 418,
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 410,
                    "name": "Set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 410,
                    "end": 418,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 411,
                        "end": 417
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 420,
        "end": 591,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 426,
            "end": 448,
            "expression": {
              "type": "AssignmentExpression",
              "start": 426,
              "end": 447,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 430,
                "end": 447,
                "callee": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 437,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 437,
                  "end": 445,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 438,
                      "end": 444
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 453,
            "end": 455,
            "expression": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 476,
            "end": 551,
            "test": {
              "type": "BinaryExpression",
              "start": 480,
              "end": 500,
              "left": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 493,
                "end": 500,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 502,
              "end": 551,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 512,
                  "end": 514,
                  "expression": {
                    "type": "Identifier",
                    "start": 512,
                    "end": 513,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 556,
            "end": 558,
            "expression": {
              "type": "Identifier",
              "start": 556,
              "end": 557,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 579,
            "end": 589,
            "expression": {
              "type": "CallExpression",
              "start": 579,
              "end": 588,
              "callee": {
                "type": "MemberExpression",
                "start": 579,
                "end": 584,
                "object": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 580,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 584,
                  "name": "add",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 585,
                  "end": 587,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 593,
      "end": 788,
      "id": {
        "type": "Identifier",
        "start": 602,
        "end": 604,
        "name": "f3",
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
          "start": 605,
          "end": 633,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 606,
            "end": 633,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 608,
              "end": 633,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 608,
                  "end": 619,
                  "typeName": {
                    "type": "Identifier",
                    "start": 608,
                    "end": 611,
                    "name": "Set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 611,
                    "end": 619,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 612,
                        "end": 618
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 622,
                  "end": 633,
                  "typeName": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 625,
                    "name": "Set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 625,
                    "end": 633,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 626,
                        "end": 632
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 635,
        "end": 788,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 641,
            "end": 643,
            "expression": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 678,
            "end": 786,
            "test": {
              "type": "BinaryExpression",
              "start": 682,
              "end": 698,
              "left": {
                "type": "Identifier",
                "start": 682,
                "end": 683,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 695,
                "end": 698,
                "name": "Set",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 700,
              "end": 748,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 710,
                  "end": 712,
                  "expression": {
                    "type": "Identifier",
                    "start": 710,
                    "end": 711,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 758,
              "end": 786,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 768,
                  "end": 770,
                  "expression": {
                    "type": "Identifier",
                    "start": 768,
                    "end": 769,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 790,
      "end": 984,
      "id": {
        "type": "Identifier",
        "start": 799,
        "end": 801,
        "name": "f4",
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
          "start": 802,
          "end": 830,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 803,
            "end": 830,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 805,
              "end": 830,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 805,
                  "end": 816,
                  "typeName": {
                    "type": "Identifier",
                    "start": 805,
                    "end": 808,
                    "name": "Set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 808,
                    "end": 816,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 809,
                        "end": 815
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 819,
                  "end": 830,
                  "typeName": {
                    "type": "Identifier",
                    "start": 819,
                    "end": 822,
                    "name": "Set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 822,
                    "end": 830,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 823,
                        "end": 829
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 832,
        "end": 984,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 838,
            "end": 860,
            "expression": {
              "type": "AssignmentExpression",
              "start": 838,
              "end": 859,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 838,
                "end": 839,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "NewExpression",
                "start": 842,
                "end": 859,
                "callee": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 849,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 849,
                  "end": 857,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 850,
                      "end": 856
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 865,
            "end": 867,
            "expression": {
              "type": "Identifier",
              "start": 865,
              "end": 866,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 888,
            "end": 982,
            "test": {
              "type": "BinaryExpression",
              "start": 892,
              "end": 908,
              "left": {
                "type": "Identifier",
                "start": 892,
                "end": 893,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 905,
                "end": 908,
                "name": "Set",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 910,
              "end": 944,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 920,
                  "end": 922,
                  "expression": {
                    "type": "Identifier",
                    "start": 920,
                    "end": 921,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 954,
              "end": 982,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 964,
                  "end": 966,
                  "expression": {
                    "type": "Identifier",
                    "start": 964,
                    "end": 965,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1001,
      "end": 1265,
      "id": {
        "type": "Identifier",
        "start": 1007,
        "end": 1008,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1009,
        "end": 1265,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1015,
            "end": 1025,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1015,
              "end": 1016,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1016,
              "end": 1024,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1018,
                "end": 1024
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1030,
            "end": 1263,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 1038,
              "end": 1056,
              "object": {
                "type": "Identifier",
                "start": 1038,
                "end": 1044,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1045,
                "end": 1056,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1057,
              "end": 1263,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1068,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1065,
                    "end": 1068,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1067,
                      "end": 1068,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1067,
                        "end": 1068,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1070,
                  "end": 1084,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1075,
                    "end": 1084,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1077,
                      "end": 1084
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1183,
                "end": 1263,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1193,
                    "end": 1257,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1200,
                      "end": 1256,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1200,
                        "end": 1243,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1200,
                          "end": 1238,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1200,
                            "end": 1218,
                            "object": {
                              "type": "Identifier",
                              "start": 1200,
                              "end": 1208,
                              "name": "Function",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1209,
                              "end": 1218,
                              "name": "prototype",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 1219,
                            "end": 1237,
                            "object": {
                              "type": "Identifier",
                              "start": 1219,
                              "end": 1225,
                              "name": "Symbol",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1226,
                              "end": 1237,
                              "name": "hasInstance",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1239,
                          "end": 1243,
                          "name": "call",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1244,
                          "end": 1248
                        },
                        {
                          "type": "Identifier",
                          "start": 1250,
                          "end": 1255,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1057,
                "end": 1060,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1058,
                    "end": 1059,
                    "name": {
                      "type": "Identifier",
                      "start": 1058,
                      "end": 1059,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1085,
                "end": 1182,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1087,
                  "end": 1182,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1087,
                    "end": 1092,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1106,
                    "end": 1176,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 1106,
                      "end": 1176,
                      "checkType": {
                        "type": "TSTypeReference",
                        "start": 1106,
                        "end": 1107,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1106,
                          "end": 1107,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "extendsType": {
                        "type": "TSConstructorType",
                        "start": 1117,
                        "end": 1155,
                        "abstract": true,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 1131,
                            "end": 1143,
                            "argument": {
                              "type": "Identifier",
                              "start": 1134,
                              "end": 1138,
                              "name": "args",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1138,
                              "end": 1143,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 1140,
                                "end": 1143
                              }
                            },
                            "value": null
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1145,
                          "end": 1155,
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "start": 1148,
                            "end": 1155,
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "start": 1154,
                              "end": 1155,
                              "name": {
                                "type": "Identifier",
                                "start": 1154,
                                "end": 1155,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "start": 1159,
                        "end": 1160,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1159,
                          "end": 1160,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 1171,
                        "end": 1176
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1266,
      "end": 1297,
      "id": {
        "type": "Identifier",
        "start": 1272,
        "end": 1273,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1282,
        "end": 1283,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1284,
        "end": 1297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1286,
            "end": 1295,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1286,
              "end": 1287,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1287,
              "end": 1295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1289,
                "end": 1295
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1298,
      "end": 1329,
      "id": {
        "type": "Identifier",
        "start": 1304,
        "end": 1305,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1314,
        "end": 1315,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1316,
        "end": 1329,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1318,
            "end": 1327,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1318,
              "end": 1319,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1327,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1321,
                "end": 1327
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1331,
      "end": 1855,
      "id": {
        "type": "Identifier",
        "start": 1340,
        "end": 1343,
        "name": "foo",
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
          "start": 1344,
          "end": 1360,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1345,
            "end": 1360,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1347,
              "end": 1360,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1347,
                  "end": 1348,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1347,
                    "end": 1348,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1351,
                  "end": 1360
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1362,
        "end": 1855,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1368,
            "end": 1370,
            "expression": {
              "type": "Identifier",
              "start": 1368,
              "end": 1369,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1393,
            "end": 1459,
            "test": {
              "type": "LogicalExpression",
              "start": 1397,
              "end": 1429,
              "left": {
                "type": "BinaryExpression",
                "start": 1397,
                "end": 1411,
                "left": {
                  "type": "Identifier",
                  "start": 1397,
                  "end": 1398,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1411,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 1415,
                "end": 1429,
                "left": {
                  "type": "Identifier",
                  "start": 1415,
                  "end": 1416,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1428,
                  "end": 1429,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1431,
              "end": 1459,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1441,
                  "end": 1443,
                  "expression": {
                    "type": "Identifier",
                    "start": 1441,
                    "end": 1442,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1464,
            "end": 1466,
            "expression": {
              "type": "Identifier",
              "start": 1464,
              "end": 1465,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1489,
            "end": 1555,
            "test": {
              "type": "LogicalExpression",
              "start": 1493,
              "end": 1525,
              "left": {
                "type": "BinaryExpression",
                "start": 1493,
                "end": 1507,
                "left": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1494,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1506,
                  "end": 1507,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 1511,
                "end": 1525,
                "left": {
                  "type": "Identifier",
                  "start": 1511,
                  "end": 1512,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1524,
                  "end": 1525,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1527,
              "end": 1555,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1537,
                  "end": 1539,
                  "expression": {
                    "type": "Identifier",
                    "start": 1537,
                    "end": 1538,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1560,
            "end": 1562,
            "expression": {
              "type": "Identifier",
              "start": 1560,
              "end": 1561,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1585,
            "end": 1616,
            "test": {
              "type": "UnaryExpression",
              "start": 1589,
              "end": 1591,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 1590,
                "end": 1591,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1593,
              "end": 1616,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1603,
                  "end": 1610,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1621,
            "end": 1623,
            "expression": {
              "type": "Identifier",
              "start": 1621,
              "end": 1622,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1634,
            "end": 1840,
            "test": {
              "type": "BinaryExpression",
              "start": 1638,
              "end": 1652,
              "left": {
                "type": "Identifier",
                "start": 1638,
                "end": 1639,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1651,
                "end": 1652,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1654,
              "end": 1806,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1664,
                  "end": 1666,
                  "expression": {
                    "type": "Identifier",
                    "start": 1664,
                    "end": 1665,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1681,
                  "end": 1783,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1685,
                    "end": 1699,
                    "left": {
                      "type": "Identifier",
                      "start": 1685,
                      "end": 1686,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "start": 1698,
                      "end": 1699,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1701,
                    "end": 1737,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1715,
                        "end": 1717,
                        "expression": {
                          "type": "Identifier",
                          "start": 1715,
                          "end": 1716,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 1751,
                    "end": 1783,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1765,
                        "end": 1767,
                        "expression": {
                          "type": "Identifier",
                          "start": 1765,
                          "end": 1766,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1792,
                  "end": 1794,
                  "expression": {
                    "type": "Identifier",
                    "start": 1792,
                    "end": 1793,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1816,
              "end": 1840,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1826,
                  "end": 1828,
                  "expression": {
                    "type": "Identifier",
                    "start": 1826,
                    "end": 1827,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1845,
            "end": 1847,
            "expression": {
              "type": "Identifier",
              "start": 1845,
              "end": 1846,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 1957,
      "end": 1988,
      "id": {
        "type": "Identifier",
        "start": 1967,
        "end": 1968,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1969,
        "end": 1988,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1975,
            "end": 1986,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1975,
              "end": 1976,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1977,
              "end": 1985,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1979,
                "end": 1985
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1990,
      "end": 2016,
      "id": {
        "type": "Identifier",
        "start": 1996,
        "end": 1997,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1998,
        "end": 2016,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2004,
            "end": 2014,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2004,
              "end": 2005,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2005,
              "end": 2013,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2007,
                "end": 2013
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2018,
      "end": 2099,
      "id": {
        "type": "Identifier",
        "start": 2027,
        "end": 2030,
        "name": "goo",
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
          "start": 2031,
          "end": 2035,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2032,
            "end": 2035,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2034,
              "end": 2035,
              "typeName": {
                "type": "Identifier",
                "start": 2034,
                "end": 2035,
                "name": "X",
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
      "body": {
        "type": "BlockStatement",
        "start": 2037,
        "end": 2099,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2043,
            "end": 2045,
            "expression": {
              "type": "Identifier",
              "start": 2043,
              "end": 2044,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2050,
            "end": 2090,
            "test": {
              "type": "BinaryExpression",
              "start": 2054,
              "end": 2068,
              "left": {
                "type": "Identifier",
                "start": 2054,
                "end": 2055,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 2067,
                "end": 2068,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2070,
              "end": 2090,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2080,
                  "end": 2084,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2080,
                    "end": 2083,
                    "object": {
                      "type": "Identifier",
                      "start": 2080,
                      "end": 2081,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2082,
                      "end": 2083,
                      "name": "y",
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
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2095,
            "end": 2097,
            "expression": {
              "type": "Identifier",
              "start": 2095,
              "end": 2096,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
