__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2100,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 28,
        "decorators": [],
        "name": "PromiseConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 54,
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 63,
                    "end": 66
                  }
                }
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
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "SetConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 145,
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 157,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 154,
                    "end": 157
                  }
                }
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
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Set",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 194,
          "end": 222,
          "decorators": [],
          "name": "s",
          "optional": false,
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
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "NewExpression",
                "start": 234,
                "end": 251,
                "callee": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 241,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "arguments": []
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
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 297,
                "end": 300,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 369,
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 370,
                  "end": 372,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 378,
      "end": 591,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 389,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 390,
          "end": 418,
          "decorators": [],
          "name": "s",
          "optional": false,
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
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "NewExpression",
                "start": 430,
                "end": 447,
                "callee": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 437,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "arguments": []
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
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 493,
                "end": 500,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 584,
                  "decorators": [],
                  "name": "add",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 585,
                  "end": 587,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 593,
      "end": 788,
      "id": {
        "type": "Identifier",
        "start": 602,
        "end": 604,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 605,
          "end": 633,
          "decorators": [],
          "name": "s",
          "optional": false,
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
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
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
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 695,
                "end": 698,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 790,
      "end": 984,
      "id": {
        "type": "Identifier",
        "start": 799,
        "end": 801,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 802,
          "end": 830,
          "decorators": [],
          "name": "s",
          "optional": false,
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
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "NewExpression",
                "start": 842,
                "end": 859,
                "callee": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 849,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "arguments": []
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
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 905,
                "end": 908,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1001,
      "end": 1265,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1007,
        "end": 1008,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1009,
        "end": 1265,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1015,
            "end": 1025,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1015,
              "end": 1016,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1030,
            "end": 1263,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 1038,
              "end": 1056,
              "object": {
                "type": "Identifier",
                "start": 1038,
                "end": 1044,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1045,
                "end": 1056,
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1057,
              "end": 1263,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1068,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1070,
                  "end": 1084,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1075,
                    "end": 1084,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1077,
                      "end": 1084
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "start": 1134,
                              "end": 1138,
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null
                            },
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
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
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
              },
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
                              "decorators": [],
                              "name": "Function",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1209,
                              "end": 1218,
                              "decorators": [],
                              "name": "prototype",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "MemberExpression",
                            "start": 1219,
                            "end": 1237,
                            "object": {
                              "type": "Identifier",
                              "start": 1219,
                              "end": 1225,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1226,
                              "end": 1237,
                              "decorators": [],
                              "name": "hasInstance",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "optional": false,
                          "computed": true
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1239,
                          "end": 1243,
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                          "start": 1250,
                          "end": 1255,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1266,
      "end": 1297,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1272,
        "end": 1273,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1282,
        "end": 1283,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1284,
        "end": 1297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1286,
            "end": 1295,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1286,
              "end": 1287,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1298,
      "end": 1329,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1304,
        "end": 1305,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1314,
        "end": 1315,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1316,
        "end": 1329,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1318,
            "end": 1327,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1318,
              "end": 1319,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1331,
      "end": 1855,
      "id": {
        "type": "Identifier",
        "start": 1340,
        "end": 1343,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1344,
          "end": 1360,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1411,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1428,
                  "end": 1429,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1506,
                  "end": 1507,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 1524,
                  "end": 1525,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
              "argument": {
                "type": "Identifier",
                "start": 1590,
                "end": 1591,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1651,
                "end": 1652,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "start": 1698,
                      "end": 1699,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1957,
      "end": 1988,
      "id": {
        "type": "Identifier",
        "start": 1967,
        "end": 1968,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1996,
        "end": 1997,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1998,
        "end": 2016,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2004,
            "end": 2014,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2004,
              "end": 2005,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2018,
      "end": 2099,
      "id": {
        "type": "Identifier",
        "start": 2027,
        "end": 2030,
        "decorators": [],
        "name": "goo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2031,
          "end": 2035,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 2067,
                "end": 2068,
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2082,
                      "end": 2083,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
