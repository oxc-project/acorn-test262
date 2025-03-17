__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 814,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "name": "rec1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 108,
        "body": [
          {
            "type": "IfStatement",
            "start": 26,
            "end": 106,
            "test": {
              "type": "BinaryExpression",
              "start": 30,
              "end": 49,
              "left": {
                "type": "CallExpression",
                "start": 30,
                "end": 43,
                "callee": {
                  "type": "MemberExpression",
                  "start": 30,
                  "end": 41,
                  "object": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 34,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 41,
                    "name": "random",
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
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 46,
                "end": 49,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 51,
              "end": 75,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 57,
                  "end": 71,
                  "argument": {
                    "type": "CallExpression",
                    "start": 64,
                    "end": 70,
                    "callee": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 68,
                      "name": "rec1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 81,
              "end": 106,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 87,
                  "end": 102,
                  "argument": {
                    "type": "Literal",
                    "start": 94,
                    "end": 101,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
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
      "start": 110,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 129,
        "name": "rec2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 224,
        "body": [
          {
            "type": "IfStatement",
            "start": 136,
            "end": 222,
            "test": {
              "type": "BinaryExpression",
              "start": 140,
              "end": 159,
              "left": {
                "type": "CallExpression",
                "start": 140,
                "end": 153,
                "callee": {
                  "type": "MemberExpression",
                  "start": 140,
                  "end": 151,
                  "object": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 144,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 151,
                    "name": "random",
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
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 156,
                "end": 159,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 161,
              "end": 191,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 167,
                  "end": 187,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 174,
                    "end": 186,
                    "argument": {
                      "type": "CallExpression",
                      "start": 180,
                      "end": 186,
                      "callee": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 184,
                        "name": "rec2",
                        "typeAnnotation": null,
                        "decorators": [],
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
            "alternate": {
              "type": "BlockStatement",
              "start": 197,
              "end": 222,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 203,
                  "end": 218,
                  "argument": {
                    "type": "Literal",
                    "start": 210,
                    "end": 217,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
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
      "start": 226,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 245,
        "name": "rec3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 248,
        "end": 268,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 252,
            "end": 266,
            "argument": {
              "type": "CallExpression",
              "start": 259,
              "end": 265,
              "callee": {
                "type": "Identifier",
                "start": 259,
                "end": 263,
                "name": "rec3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
      "start": 270,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 289,
        "name": "rec4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 292,
        "end": 318,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 296,
            "end": 316,
            "argument": {
              "type": "AwaitExpression",
              "start": 303,
              "end": 315,
              "argument": {
                "type": "CallExpression",
                "start": 309,
                "end": 315,
                "callee": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 313,
                  "name": "rec4",
                  "typeAnnotation": null,
                  "decorators": [],
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
    {
      "type": "FunctionDeclaration",
      "start": 320,
      "end": 432,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 339,
        "name": "rec5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 342,
        "end": 432,
        "body": [
          {
            "type": "IfStatement",
            "start": 346,
            "end": 430,
            "test": {
              "type": "BinaryExpression",
              "start": 350,
              "end": 369,
              "left": {
                "type": "CallExpression",
                "start": 350,
                "end": 363,
                "callee": {
                  "type": "MemberExpression",
                  "start": 350,
                  "end": 361,
                  "object": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 354,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 361,
                    "name": "random",
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
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 366,
                "end": 369,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 371,
              "end": 399,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 377,
                  "end": 395,
                  "argument": {
                    "type": "CallExpression",
                    "start": 386,
                    "end": 392,
                    "callee": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 390,
                      "name": "rec1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 405,
              "end": 430,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 411,
                  "end": 426,
                  "argument": {
                    "type": "Literal",
                    "start": 418,
                    "end": 425,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
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
      "start": 434,
      "end": 552,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 453,
        "name": "rec6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 456,
        "end": 552,
        "body": [
          {
            "type": "IfStatement",
            "start": 460,
            "end": 550,
            "test": {
              "type": "BinaryExpression",
              "start": 464,
              "end": 483,
              "left": {
                "type": "CallExpression",
                "start": 464,
                "end": 477,
                "callee": {
                  "type": "MemberExpression",
                  "start": 464,
                  "end": 475,
                  "object": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 468,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 475,
                    "name": "random",
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
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 480,
                "end": 483,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 485,
              "end": 519,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 491,
                  "end": 515,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 498,
                    "end": 514,
                    "argument": {
                      "type": "CallExpression",
                      "start": 506,
                      "end": 512,
                      "callee": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 510,
                        "name": "rec1",
                        "typeAnnotation": null,
                        "decorators": [],
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
            "alternate": {
              "type": "BlockStatement",
              "start": 525,
              "end": 550,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 531,
                  "end": 546,
                  "argument": {
                    "type": "Literal",
                    "start": 538,
                    "end": 545,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
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
      "type": "VariableDeclaration",
      "start": 554,
      "end": 597,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 596,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 596,
            "name": "ps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 596,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 572,
                "end": 596,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 572,
                    "end": 587,
                    "typeName": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 579,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 579,
                      "end": 587,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 580,
                          "end": 586
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 590,
                    "end": 596
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 599,
      "end": 708,
      "id": {
        "type": "Identifier",
        "start": 614,
        "end": 618,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 621,
        "end": 708,
        "body": [
          {
            "type": "IfStatement",
            "start": 625,
            "end": 706,
            "test": {
              "type": "BinaryExpression",
              "start": 629,
              "end": 648,
              "left": {
                "type": "CallExpression",
                "start": 629,
                "end": 642,
                "callee": {
                  "type": "MemberExpression",
                  "start": 629,
                  "end": 640,
                  "object": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 633,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 640,
                    "name": "random",
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
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 645,
                "end": 648,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 650,
              "end": 670,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 656,
                  "end": 666,
                  "argument": {
                    "type": "Identifier",
                    "start": 663,
                    "end": 665,
                    "name": "ps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 676,
              "end": 706,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 682,
                  "end": 702,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 689,
                    "end": 701,
                    "argument": {
                      "type": "CallExpression",
                      "start": 695,
                      "end": 701,
                      "callee": {
                        "type": "Identifier",
                        "start": 695,
                        "end": 699,
                        "name": "foo1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
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
      "start": 710,
      "end": 813,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 729,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 732,
        "end": 813,
        "body": [
          {
            "type": "IfStatement",
            "start": 736,
            "end": 811,
            "test": {
              "type": "BinaryExpression",
              "start": 740,
              "end": 759,
              "left": {
                "type": "CallExpression",
                "start": 740,
                "end": 753,
                "callee": {
                  "type": "MemberExpression",
                  "start": 740,
                  "end": 751,
                  "object": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 744,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 751,
                    "name": "random",
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
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 756,
                "end": 759,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 761,
              "end": 781,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 767,
                  "end": 777,
                  "argument": {
                    "type": "Identifier",
                    "start": 774,
                    "end": 776,
                    "name": "ps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 787,
              "end": 811,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 793,
                  "end": 807,
                  "argument": {
                    "type": "CallExpression",
                    "start": 800,
                    "end": 806,
                    "callee": {
                      "type": "Identifier",
                      "start": 800,
                      "end": 804,
                      "name": "foo2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            }
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
