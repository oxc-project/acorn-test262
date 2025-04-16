__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1465,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "name": "iterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 17,
            "end": 41,
            "callee": {
              "type": "MemberExpression",
              "start": 17,
              "end": 30,
              "object": {
                "type": "Identifier",
                "start": 17,
                "end": 25,
                "name": "Iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 30,
                "name": "from",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 31,
                "end": 40,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 35,
                    "end": 36,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 38,
                    "end": 39,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 56,
            "name": "mapped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 59,
            "end": 79,
            "callee": {
              "type": "MemberExpression",
              "start": 59,
              "end": 71,
              "object": {
                "type": "Identifier",
                "start": 59,
                "end": 67,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 78,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 126,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 96,
            "name": "filtered",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 99,
            "end": 126,
            "callee": {
              "type": "MemberExpression",
              "start": 99,
              "end": 114,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 107,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 108,
                "end": 114,
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 115,
                "end": 125,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 120,
                  "end": 125,
                  "left": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Literal",
                    "start": 124,
                    "end": 125,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 144,
        "name": "isZero",
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
          "start": 145,
          "end": 154,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 146,
            "end": 154,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 148,
              "end": 154
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 185,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 168,
            "end": 183,
            "argument": {
              "type": "BinaryExpression",
              "start": 175,
              "end": 182,
              "left": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 181,
                "end": 182,
                "value": 0,
                "raw": "0"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 155,
        "end": 163,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 157,
          "end": 163,
          "parameterName": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 163,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 162,
              "end": 163,
              "literal": {
                "type": "Literal",
                "start": 162,
                "end": 163,
                "value": 0,
                "raw": "0"
              }
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 222,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 196,
            "name": "zero",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 199,
            "end": 222,
            "callee": {
              "type": "MemberExpression",
              "start": 199,
              "end": 214,
              "object": {
                "type": "Identifier",
                "start": 199,
                "end": 207,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 208,
                "end": 214,
                "name": "filter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 215,
                "end": 221,
                "name": "isZero",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 247,
            "name": "iteratorFromBare",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 250,
            "end": 361,
            "callee": {
              "type": "MemberExpression",
              "start": 250,
              "end": 263,
              "object": {
                "type": "Identifier",
                "start": 250,
                "end": 258,
                "name": "Iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 259,
                "end": 263,
                "name": "from",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 264,
                "end": 360,
                "properties": [
                  {
                    "type": "Property",
                    "start": 268,
                    "end": 357,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 272,
                      "name": "next",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 272,
                      "end": 357,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 275,
                        "end": 357,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 281,
                            "end": 353,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 288,
                              "end": 352,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 296,
                                  "end": 320,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 296,
                                    "end": 300,
                                    "name": "done",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "BinaryExpression",
                                    "start": 302,
                                    "end": 320,
                                    "left": {
                                      "type": "CallExpression",
                                      "start": 302,
                                      "end": 315,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 302,
                                        "end": 313,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 302,
                                          "end": 306,
                                          "name": "Math",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 307,
                                          "end": 313,
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
                                      "start": 318,
                                      "end": 320,
                                      "value": 0.5,
                                      "raw": ".5"
                                    }
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 328,
                                  "end": 345,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 328,
                                    "end": 333,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 335,
                                    "end": 345,
                                    "value": "a string",
                                    "raw": "\"a string\""
                                  },
                                  "kind": "init",
                                  "optional": false
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
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 365,
      "end": 395,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 378,
        "name": "gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 381,
        "end": 395,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 385,
            "end": 393,
            "expression": {
              "type": "YieldExpression",
              "start": 385,
              "end": 392,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 391,
                "end": 392,
                "value": 0,
                "raw": "0"
              }
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
      "type": "VariableDeclaration",
      "start": 397,
      "end": 458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 457,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 412,
            "name": "mappedGen",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 415,
            "end": 457,
            "callee": {
              "type": "MemberExpression",
              "start": 415,
              "end": 424,
              "object": {
                "type": "CallExpression",
                "start": 415,
                "end": 420,
                "callee": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 418,
                  "name": "gen",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 421,
                "end": 424,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 425,
                "end": 456,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ConditionalExpression",
                  "start": 430,
                  "end": 456,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 430,
                    "end": 437,
                    "left": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 431,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 436,
                      "end": 437,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 440,
                    "end": 446,
                    "value": "zero",
                    "raw": "\"zero\""
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 449,
                    "end": 456,
                    "value": "other",
                    "raw": "\"other\""
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 537,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 536,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 478,
            "name": "mappedValues",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 481,
            "end": 536,
            "callee": {
              "type": "MemberExpression",
              "start": 481,
              "end": 503,
              "object": {
                "type": "CallExpression",
                "start": 481,
                "end": 499,
                "callee": {
                  "type": "MemberExpression",
                  "start": 481,
                  "end": 497,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 481,
                    "end": 490,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 482,
                        "end": 483,
                        "value": 0,
                        "raw": "0"
                      },
                      {
                        "type": "Literal",
                        "start": 485,
                        "end": 486,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 488,
                        "end": 489,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 491,
                    "end": 497,
                    "name": "values",
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
              "property": {
                "type": "Identifier",
                "start": 500,
                "end": 503,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 504,
                "end": 535,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 504,
                    "end": 505,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ConditionalExpression",
                  "start": 509,
                  "end": 535,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 509,
                    "end": 516,
                    "left": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 510,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 515,
                      "end": 516,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 519,
                    "end": 525,
                    "value": "zero",
                    "raw": "\"zero\""
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 528,
                    "end": 535,
                    "value": "other",
                    "raw": "\"other\""
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 540,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 558,
        "name": "GoodIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 567,
        "end": 575,
        "name": "Iterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 584,
        "end": 649,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 588,
            "end": 647,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 588,
              "end": 592,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 592,
              "end": 647,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 595,
                "end": 647,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 601,
                    "end": 643,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 608,
                      "end": 642,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 608,
                        "end": 633,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 610,
                            "end": 621,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 610,
                              "end": 614,
                              "name": "done",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 616,
                              "end": 621,
                              "value": false,
                              "raw": "false"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 623,
                            "end": 631,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 623,
                              "end": 628,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 630,
                              "end": 631,
                              "value": 0,
                              "raw": "0"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 637,
                        "end": 642,
                        "typeName": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 642,
                          "name": "const",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 575,
        "end": 583,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 576,
            "end": 582
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 666,
      "end": 689,
      "expression": {
        "type": "NewExpression",
        "start": 666,
        "end": 688,
        "callee": {
          "type": "Identifier",
          "start": 670,
          "end": 678,
          "name": "Iterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 678,
          "end": 686,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 679,
              "end": 685
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 691,
      "end": 726,
      "id": {
        "type": "Identifier",
        "start": 697,
        "end": 698,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 707,
        "end": 715,
        "name": "Iterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 724,
        "end": 726,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 715,
        "end": 723,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 716,
            "end": 722
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 772,
      "end": 989,
      "id": {
        "type": "Identifier",
        "start": 778,
        "end": 790,
        "name": "BadIterator1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 799,
        "end": 807,
        "name": "Iterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 816,
        "end": 989,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 820,
            "end": 987,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 820,
              "end": 824,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 824,
              "end": 987,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 827,
                "end": 987,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 833,
                    "end": 983,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 837,
                      "end": 855,
                      "left": {
                        "type": "CallExpression",
                        "start": 837,
                        "end": 850,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 837,
                          "end": 848,
                          "object": {
                            "type": "Identifier",
                            "start": 837,
                            "end": 841,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 842,
                            "end": 848,
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
                        "start": 853,
                        "end": 855,
                        "value": 0.5,
                        "raw": ".5"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 857,
                      "end": 913,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 865,
                          "end": 907,
                          "argument": {
                            "type": "TSAsExpression",
                            "start": 872,
                            "end": 906,
                            "expression": {
                              "type": "ObjectExpression",
                              "start": 872,
                              "end": 897,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 874,
                                  "end": 885,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 874,
                                    "end": 878,
                                    "name": "done",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 880,
                                    "end": 885,
                                    "value": false,
                                    "raw": "false"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 887,
                                  "end": 895,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 887,
                                    "end": 892,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 894,
                                    "end": 895,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 901,
                              "end": 906,
                              "typeName": {
                                "type": "Identifier",
                                "start": 901,
                                "end": 906,
                                "name": "const",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 919,
                      "end": 983,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 927,
                          "end": 977,
                          "argument": {
                            "type": "TSAsExpression",
                            "start": 934,
                            "end": 976,
                            "expression": {
                              "type": "ObjectExpression",
                              "start": 934,
                              "end": 967,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 936,
                                  "end": 946,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 936,
                                    "end": 940,
                                    "name": "done",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 942,
                                    "end": 946,
                                    "value": true,
                                    "raw": "true"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 948,
                                  "end": 965,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 948,
                                    "end": 953,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 955,
                                    "end": 965,
                                    "value": "a string",
                                    "raw": "\"a string\""
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 971,
                              "end": 976,
                              "typeName": {
                                "type": "Identifier",
                                "start": 971,
                                "end": 976,
                                "name": "const",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 807,
        "end": 815,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 808,
            "end": 814
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 991,
      "end": 1091,
      "id": {
        "type": "Identifier",
        "start": 997,
        "end": 1009,
        "name": "BadIterator2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1018,
        "end": 1026,
        "name": "Iterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1035,
        "end": 1091,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1039,
            "end": 1089,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1039,
              "end": 1043,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1043,
              "end": 1089,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1046,
                "end": 1089,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1052,
                    "end": 1085,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 1059,
                      "end": 1084,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1061,
                          "end": 1072,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1061,
                            "end": 1065,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1067,
                            "end": 1072,
                            "value": false,
                            "raw": "false"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1074,
                          "end": 1082,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1074,
                            "end": 1079,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1081,
                            "end": 1082,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1026,
        "end": 1034,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 1027,
            "end": 1033
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1093,
      "end": 1292,
      "id": {
        "type": "Identifier",
        "start": 1099,
        "end": 1111,
        "name": "BadIterator3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1120,
        "end": 1128,
        "name": "Iterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1137,
        "end": 1292,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1141,
            "end": 1290,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1141,
              "end": 1145,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1145,
              "end": 1290,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1148,
                "end": 1290,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1154,
                    "end": 1286,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1158,
                      "end": 1176,
                      "left": {
                        "type": "CallExpression",
                        "start": 1158,
                        "end": 1171,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1158,
                          "end": 1169,
                          "object": {
                            "type": "Identifier",
                            "start": 1158,
                            "end": 1162,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1163,
                            "end": 1169,
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
                        "start": 1174,
                        "end": 1176,
                        "value": 0.5,
                        "raw": ".5"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1178,
                      "end": 1225,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1186,
                          "end": 1219,
                          "argument": {
                            "type": "ObjectExpression",
                            "start": 1193,
                            "end": 1218,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 1195,
                                "end": 1206,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1195,
                                  "end": 1199,
                                  "name": "done",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 1201,
                                  "end": 1206,
                                  "value": false,
                                  "raw": "false"
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 1208,
                                "end": 1216,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1208,
                                  "end": 1213,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 1215,
                                  "end": 1216,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1231,
                      "end": 1286,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1239,
                          "end": 1280,
                          "argument": {
                            "type": "ObjectExpression",
                            "start": 1246,
                            "end": 1279,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 1248,
                                "end": 1258,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1248,
                                  "end": 1252,
                                  "name": "done",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 1254,
                                  "end": 1258,
                                  "value": true,
                                  "raw": "true"
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 1260,
                                "end": 1277,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1260,
                                  "end": 1265,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 1267,
                                  "end": 1277,
                                  "value": "a string",
                                  "raw": "\"a string\""
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1128,
        "end": 1136,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 1129,
            "end": 1135
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1294,
      "end": 1347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1308,
          "end": 1346,
          "id": {
            "type": "Identifier",
            "start": 1308,
            "end": 1346,
            "name": "g1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1310,
              "end": 1346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1312,
                "end": 1346,
                "typeName": {
                  "type": "Identifier",
                  "start": 1312,
                  "end": 1321,
                  "name": "Generator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1321,
                  "end": 1346,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1322,
                      "end": 1328
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1330,
                      "end": 1336
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 1338,
                      "end": 1345
                    }
                  ]
                }
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
      "type": "VariableDeclaration",
      "start": 1348,
      "end": 1380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1354,
          "end": 1379,
          "id": {
            "type": "Identifier",
            "start": 1354,
            "end": 1359,
            "name": "iter1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1362,
            "end": 1379,
            "callee": {
              "type": "MemberExpression",
              "start": 1362,
              "end": 1375,
              "object": {
                "type": "Identifier",
                "start": 1362,
                "end": 1370,
                "name": "Iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1371,
                "end": 1375,
                "name": "from",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1376,
                "end": 1378,
                "name": "g1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1382,
      "end": 1426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1396,
          "end": 1425,
          "id": {
            "type": "Identifier",
            "start": 1396,
            "end": 1425,
            "name": "iter2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1401,
              "end": 1425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1403,
                "end": 1425,
                "typeName": {
                  "type": "Identifier",
                  "start": 1403,
                  "end": 1417,
                  "name": "IteratorObject",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1417,
                  "end": 1425,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1418,
                      "end": 1424
                    }
                  ]
                }
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
      "type": "VariableDeclaration",
      "start": 1427,
      "end": 1465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1433,
          "end": 1464,
          "id": {
            "type": "Identifier",
            "start": 1433,
            "end": 1438,
            "name": "iter3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1441,
            "end": 1464,
            "callee": {
              "type": "MemberExpression",
              "start": 1441,
              "end": 1454,
              "object": {
                "type": "Identifier",
                "start": 1441,
                "end": 1446,
                "name": "iter2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1447,
                "end": 1454,
                "name": "flatMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1455,
                "end": 1463,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1463,
                  "name": "g1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
