__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 530,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 207,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 20,
            "end": 87,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 25,
              "end": 38,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 31,
                  "end": 38,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 31,
                    "end": 38,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 32,
                        "end": 34,
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 42,
              "end": 54,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 43,
                  "end": 53,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 44,
                      "end": 49,
                      "value": "key",
                      "raw": "'key'"
                    },
                    {
                      "type": "Literal",
                      "start": 51,
                      "end": 52,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 56,
              "end": 87,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 66,
                  "end": 81,
                  "expression": {
                    "type": "CallExpression",
                    "start": 66,
                    "end": 80,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 66,
                      "end": 77,
                      "object": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 73,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 77,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 78,
                        "end": 79,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ForOfStatement",
            "start": 93,
            "end": 160,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 98,
              "end": 111,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 104,
                  "end": 111,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 104,
                    "end": 111,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 105,
                        "end": 106,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 108,
                        "end": 110,
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 115,
              "end": 127,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 116,
                  "end": 126,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 117,
                      "end": 122,
                      "value": "key",
                      "raw": "'key'"
                    },
                    {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 129,
              "end": 160,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 139,
                  "end": 154,
                  "expression": {
                    "type": "CallExpression",
                    "start": 139,
                    "end": 153,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 139,
                      "end": 150,
                      "object": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 146,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 150,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ForOfStatement",
            "start": 166,
            "end": 205,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 171,
              "end": 185,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 177,
                  "end": 185,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 177,
                    "end": 185,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 178,
                        "end": 180,
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 182,
                        "end": 184,
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 189,
              "end": 201,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 190,
                  "end": 200,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 191,
                      "end": 196,
                      "value": "key",
                      "raw": "'key'"
                    },
                    {
                      "type": "Literal",
                      "start": 198,
                      "end": 199,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 203,
              "end": 205,
              "body": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 210,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 221,
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 224,
        "end": 357,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 230,
            "end": 268,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 235,
              "end": 248,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 241,
                  "end": 248,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 241,
                    "end": 248,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 242,
                        "end": 244,
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 246,
                        "end": 247,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 252,
              "end": 264,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 253,
                  "end": 263,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 254,
                      "end": 259,
                      "value": "key",
                      "raw": "'key'"
                    },
                    {
                      "type": "Literal",
                      "start": 261,
                      "end": 262,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 266,
              "end": 268,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 274,
            "end": 312,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 279,
              "end": 292,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 285,
                  "end": 292,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 285,
                    "end": 292,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 286,
                        "end": 287,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 289,
                        "end": 291,
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 296,
              "end": 308,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 297,
                  "end": 307,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 298,
                      "end": 303,
                      "value": "key",
                      "raw": "'key'"
                    },
                    {
                      "type": "Literal",
                      "start": 305,
                      "end": 306,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 310,
              "end": 312,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 318,
            "end": 355,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 323,
              "end": 335,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 329,
                  "end": 335,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 329,
                    "end": 335,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 330,
                        "end": 331,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 333,
                        "end": 334,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 339,
              "end": 351,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 340,
                  "end": 350,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 341,
                      "end": 346,
                      "value": "key",
                      "raw": "'key'"
                    },
                    {
                      "type": "Literal",
                      "start": 348,
                      "end": 349,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 353,
              "end": 355,
              "body": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 359,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 370,
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 373,
        "end": 530,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 379,
            "end": 425,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 384,
              "end": 401,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 390,
                  "end": 401,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 390,
                    "end": 401,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ArrayPattern",
                        "start": 391,
                        "end": 400,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "ArrayPattern",
                            "start": 392,
                            "end": 399,
                            "decorators": [],
                            "elements": [
                              {
                                "type": "Identifier",
                                "start": 393,
                                "end": 395,
                                "decorators": [],
                                "name": "_a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 397,
                                "end": 398,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 405,
              "end": 421,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 406,
                  "end": 420,
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "start": 407,
                      "end": 419,
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "start": 408,
                          "end": 418,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 409,
                              "end": 414,
                              "value": "key",
                              "raw": "'key'"
                            },
                            {
                              "type": "Literal",
                              "start": 416,
                              "end": 417,
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 423,
              "end": 425,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 431,
            "end": 477,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 436,
              "end": 453,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 442,
                  "end": 453,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 442,
                    "end": 453,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ArrayPattern",
                        "start": 443,
                        "end": 452,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "ArrayPattern",
                            "start": 444,
                            "end": 451,
                            "decorators": [],
                            "elements": [
                              {
                                "type": "Identifier",
                                "start": 445,
                                "end": 446,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 448,
                                "end": 450,
                                "decorators": [],
                                "name": "_b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 457,
              "end": 473,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 458,
                  "end": 472,
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "start": 459,
                      "end": 471,
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "start": 460,
                          "end": 470,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 461,
                              "end": 466,
                              "value": "key",
                              "raw": "'key'"
                            },
                            {
                              "type": "Literal",
                              "start": 468,
                              "end": 469,
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 475,
              "end": 477,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 483,
            "end": 528,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 488,
              "end": 504,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 494,
                  "end": 504,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 494,
                    "end": 504,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ArrayPattern",
                        "start": 495,
                        "end": 503,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "ArrayPattern",
                            "start": 496,
                            "end": 502,
                            "decorators": [],
                            "elements": [
                              {
                                "type": "Identifier",
                                "start": 497,
                                "end": 498,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 500,
                                "end": 501,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 508,
              "end": 524,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 509,
                  "end": 523,
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "start": 510,
                      "end": 522,
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "start": 511,
                          "end": 521,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 512,
                              "end": 517,
                              "value": "key",
                              "raw": "'key'"
                            },
                            {
                              "type": "Literal",
                              "start": 519,
                              "end": 520,
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 526,
              "end": 528,
              "body": []
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
