__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 657,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 537,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
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
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 23,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 16,
              "end": 23
            }
          }
        },
        {
          "type": "Identifier",
          "start": 25,
          "end": 35,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 35,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 28,
              "end": 35
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 537,
        "body": [
          {
            "type": "IfStatement",
            "start": 43,
            "end": 99,
            "test": {
              "type": "BinaryExpression",
              "start": 47,
              "end": 68,
              "left": {
                "type": "UnaryExpression",
                "start": 47,
                "end": 55,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 60,
                "end": 68,
                "value": "object",
                "raw": "'object'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 70,
              "end": 99,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 80,
                  "end": 93,
                  "expression": {
                    "type": "CallExpression",
                    "start": 80,
                    "end": 92,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 80,
                      "end": 90,
                      "object": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 81,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 90,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 104,
            "end": 165,
            "test": {
              "type": "LogicalExpression",
              "start": 108,
              "end": 134,
              "left": {
                "type": "BinaryExpression",
                "start": 108,
                "end": 129,
                "left": {
                  "type": "UnaryExpression",
                  "start": 108,
                  "end": 116,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 121,
                  "end": 129,
                  "value": "object",
                  "raw": "'object'"
                }
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 136,
              "end": 165,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 146,
                  "end": 159,
                  "expression": {
                    "type": "CallExpression",
                    "start": 146,
                    "end": 158,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 146,
                      "end": 156,
                      "object": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 156,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 170,
            "end": 231,
            "test": {
              "type": "LogicalExpression",
              "start": 174,
              "end": 200,
              "left": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 179,
                "end": 200,
                "left": {
                  "type": "UnaryExpression",
                  "start": 179,
                  "end": 187,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 192,
                  "end": 200,
                  "value": "object",
                  "raw": "'object'"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 202,
              "end": 231,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 212,
                  "end": 225,
                  "expression": {
                    "type": "CallExpression",
                    "start": 212,
                    "end": 224,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 212,
                      "end": 222,
                      "object": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 222,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 236,
            "end": 302,
            "test": {
              "type": "LogicalExpression",
              "start": 240,
              "end": 271,
              "left": {
                "type": "LogicalExpression",
                "start": 240,
                "end": 246,
                "left": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 250,
                "end": 271,
                "left": {
                  "type": "UnaryExpression",
                  "start": 250,
                  "end": 258,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 263,
                  "end": 271,
                  "value": "object",
                  "raw": "'object'"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 273,
              "end": 302,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 283,
                  "end": 296,
                  "expression": {
                    "type": "CallExpression",
                    "start": 283,
                    "end": 295,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 283,
                      "end": 293,
                      "object": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 293,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 307,
            "end": 373,
            "test": {
              "type": "LogicalExpression",
              "start": 311,
              "end": 342,
              "left": {
                "type": "LogicalExpression",
                "start": 311,
                "end": 317,
                "left": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 321,
                "end": 342,
                "left": {
                  "type": "UnaryExpression",
                  "start": 321,
                  "end": 329,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 329,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 334,
                  "end": 342,
                  "value": "object",
                  "raw": "'object'"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 344,
              "end": 373,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 354,
                  "end": 367,
                  "expression": {
                    "type": "CallExpression",
                    "start": 354,
                    "end": 366,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 354,
                      "end": 364,
                      "object": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 364,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 378,
            "end": 449,
            "test": {
              "type": "LogicalExpression",
              "start": 382,
              "end": 418,
              "left": {
                "type": "LogicalExpression",
                "start": 382,
                "end": 393,
                "left": {
                  "type": "LogicalExpression",
                  "start": 382,
                  "end": 388,
                  "left": {
                    "type": "Identifier",
                    "start": 382,
                    "end": 383,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 387,
                    "end": 388,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 397,
                "end": 418,
                "left": {
                  "type": "UnaryExpression",
                  "start": 397,
                  "end": 405,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 405,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 410,
                  "end": 418,
                  "value": "object",
                  "raw": "'object'"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 420,
              "end": 449,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 430,
                  "end": 443,
                  "expression": {
                    "type": "CallExpression",
                    "start": 430,
                    "end": 442,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 430,
                      "end": 440,
                      "object": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 440,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 454,
            "end": 535,
            "test": {
              "type": "LogicalExpression",
              "start": 458,
              "end": 504,
              "left": {
                "type": "LogicalExpression",
                "start": 458,
                "end": 479,
                "left": {
                  "type": "LogicalExpression",
                  "start": 458,
                  "end": 474,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 458,
                    "end": 469,
                    "left": {
                      "type": "LogicalExpression",
                      "start": 458,
                      "end": 464,
                      "left": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 459,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 464,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 469,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 479,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 483,
                "end": 504,
                "left": {
                  "type": "UnaryExpression",
                  "start": 483,
                  "end": 491,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 491,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 496,
                  "end": 504,
                  "value": "object",
                  "raw": "'object'"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 506,
              "end": 535,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 516,
                  "end": 529,
                  "expression": {
                    "type": "CallExpression",
                    "start": 516,
                    "end": 528,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 516,
                      "end": 526,
                      "object": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 517,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 526,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 561,
      "end": 657,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 572,
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
          "start": 573,
          "end": 583,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 574,
            "end": 583,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 576,
              "end": 583
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 584,
        "end": 589,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 586,
          "end": 589
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 590,
        "end": 657,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 596,
            "end": 655,
            "argument": {
              "type": "LogicalExpression",
              "start": 603,
              "end": 654,
              "left": {
                "type": "LogicalExpression",
                "start": 603,
                "end": 629,
                "left": {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 608,
                  "end": 629,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 608,
                    "end": 616,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 615,
                      "end": 616,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 621,
                    "end": 629,
                    "value": "object",
                    "raw": "'object'"
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "start": 633,
                "end": 654,
                "callee": {
                  "type": "MemberExpression",
                  "start": 633,
                  "end": 649,
                  "object": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 634,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 635,
                    "end": 649,
                    "decorators": [],
                    "name": "hasOwnProperty",
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
                    "start": 650,
                    "end": 653,
                    "value": "x",
                    "raw": "'x'"
                  }
                ],
                "optional": false
              }
            }
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
