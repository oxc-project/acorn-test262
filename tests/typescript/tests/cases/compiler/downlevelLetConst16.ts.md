__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3002,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
    },
    {
      "type": "TSDeclareFunction",
      "start": 14,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 41,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 41,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 56,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 53,
            "end": 55,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 63,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 70,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 78,
      "expression": {
        "type": "CallExpression",
        "start": 71,
        "end": 77,
        "callee": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 86,
      "expression": {
        "type": "CallExpression",
        "start": 79,
        "end": 85,
        "callee": {
          "type": "Identifier",
          "start": 79,
          "end": 82,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 94,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 93,
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 95,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 108,
        "decorators": [],
        "name": "foo1",
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
        "start": 111,
        "end": 209,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 117,
            "end": 127,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 121,
                "end": 126,
                "id": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 125,
                  "end": 126,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 132,
            "end": 139,
            "expression": {
              "type": "CallExpression",
              "start": 132,
              "end": 138,
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 135,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 144,
            "end": 158,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 157,
                "id": {
                  "type": "ArrayPattern",
                  "start": 148,
                  "end": 151,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 154,
                  "end": 157,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 155,
                      "end": 156,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 163,
            "end": 170,
            "expression": {
              "type": "CallExpression",
              "start": 163,
              "end": 169,
              "callee": {
                "type": "Identifier",
                "start": 163,
                "end": 166,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 175,
            "end": 195,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 179,
                "end": 194,
                "id": {
                  "type": "ObjectPattern",
                  "start": 179,
                  "end": 185,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 180,
                      "end": 184,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 188,
                  "end": 194,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 189,
                      "end": 193,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 192,
                        "end": 193,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 200,
            "end": 207,
            "expression": {
              "type": "CallExpression",
              "start": 200,
              "end": 206,
              "callee": {
                "type": "Identifier",
                "start": 200,
                "end": 203,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 211,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 224,
        "decorators": [],
        "name": "foo2",
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
        "start": 227,
        "end": 375,
        "body": [
          {
            "type": "BlockStatement",
            "start": 233,
            "end": 361,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 243,
                "end": 253,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 247,
                    "end": 252,
                    "id": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 248,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 251,
                      "end": 252,
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 262,
                "end": 269,
                "expression": {
                  "type": "CallExpression",
                  "start": 262,
                  "end": 268,
                  "callee": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 265,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "VariableDeclaration",
                "start": 278,
                "end": 292,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 282,
                    "end": 291,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 282,
                      "end": 285,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 283,
                          "end": 284,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "start": 288,
                      "end": 291,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 289,
                          "end": 290,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 301,
                "end": 308,
                "expression": {
                  "type": "CallExpression",
                  "start": 301,
                  "end": 307,
                  "callee": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 304,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 305,
                      "end": 306,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "VariableDeclaration",
                "start": 317,
                "end": 339,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 321,
                    "end": 338,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 321,
                      "end": 327,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 322,
                          "end": 326,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 322,
                            "end": 323,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 326,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 330,
                      "end": 338,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 332,
                          "end": 336,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 333,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 335,
                            "end": 336,
                            "value": 1,
                            "raw": "1"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 348,
                "end": 355,
                "expression": {
                  "type": "CallExpression",
                  "start": 348,
                  "end": 354,
                  "callee": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 351,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 352,
                      "end": 353,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 366,
            "end": 373,
            "expression": {
              "type": "CallExpression",
              "start": 366,
              "end": 372,
              "callee": {
                "type": "Identifier",
                "start": 366,
                "end": 369,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 370,
                  "end": 371,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ClassDeclaration",
      "start": 377,
      "end": 725,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 384,
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
        "start": 385,
        "end": 725,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 391,
            "end": 524,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 393,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 393,
              "end": 524,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 396,
                "end": 524,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 406,
                    "end": 416,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 410,
                        "end": 415,
                        "id": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 411,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 414,
                          "end": 415,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 425,
                    "end": 432,
                    "expression": {
                      "type": "CallExpression",
                      "start": 425,
                      "end": 431,
                      "callee": {
                        "type": "Identifier",
                        "start": 425,
                        "end": 428,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 429,
                          "end": 430,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 441,
                    "end": 455,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 445,
                        "end": 454,
                        "id": {
                          "type": "ArrayPattern",
                          "start": 445,
                          "end": 448,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 446,
                              "end": 447,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 451,
                          "end": 454,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 452,
                              "end": 453,
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 464,
                    "end": 471,
                    "expression": {
                      "type": "CallExpression",
                      "start": 464,
                      "end": 470,
                      "callee": {
                        "type": "Identifier",
                        "start": 464,
                        "end": 467,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 468,
                          "end": 469,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 480,
                    "end": 502,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 484,
                        "end": 501,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 484,
                          "end": 490,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 485,
                              "end": 489,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 485,
                                "end": 486,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 488,
                                "end": 489,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 493,
                          "end": 501,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 495,
                              "end": 499,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 495,
                                "end": 496,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 498,
                                "end": 499,
                                "value": 1,
                                "raw": "1"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 511,
                    "end": 518,
                    "expression": {
                      "type": "CallExpression",
                      "start": 511,
                      "end": 517,
                      "callee": {
                        "type": "Identifier",
                        "start": 511,
                        "end": 514,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 515,
                          "end": 516,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 529,
            "end": 722,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 529,
              "end": 531,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 531,
              "end": 722,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 534,
                "end": 722,
                "body": [
                  {
                    "type": "BlockStatement",
                    "start": 544,
                    "end": 700,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 558,
                        "end": 568,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 562,
                            "end": 567,
                            "id": {
                              "type": "Identifier",
                              "start": 562,
                              "end": 563,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 566,
                              "end": 567,
                              "value": 1,
                              "raw": "1"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 581,
                        "end": 588,
                        "expression": {
                          "type": "CallExpression",
                          "start": 581,
                          "end": 587,
                          "callee": {
                            "type": "Identifier",
                            "start": 581,
                            "end": 584,
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 585,
                              "end": 586,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 601,
                        "end": 615,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 605,
                            "end": 614,
                            "id": {
                              "type": "ArrayPattern",
                              "start": 605,
                              "end": 608,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 606,
                                  "end": 607,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "start": 611,
                              "end": 614,
                              "elements": [
                                {
                                  "type": "Literal",
                                  "start": 612,
                                  "end": 613,
                                  "value": 1,
                                  "raw": "1"
                                }
                              ]
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 628,
                        "end": 635,
                        "expression": {
                          "type": "CallExpression",
                          "start": 628,
                          "end": 634,
                          "callee": {
                            "type": "Identifier",
                            "start": 628,
                            "end": 631,
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 632,
                              "end": 633,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 648,
                        "end": 670,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 652,
                            "end": 669,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 652,
                              "end": 658,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 653,
                                  "end": 657,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 653,
                                    "end": 654,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 656,
                                    "end": 657,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "start": 661,
                              "end": 669,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 663,
                                  "end": 667,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 663,
                                    "end": 664,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 666,
                                    "end": 667,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 683,
                        "end": 690,
                        "expression": {
                          "type": "CallExpression",
                          "start": 683,
                          "end": 689,
                          "callee": {
                            "type": "Identifier",
                            "start": 683,
                            "end": 686,
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 687,
                              "end": 688,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 709,
                    "end": 716,
                    "expression": {
                      "type": "CallExpression",
                      "start": 709,
                      "end": 715,
                      "callee": {
                        "type": "Identifier",
                        "start": 709,
                        "end": 712,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 713,
                          "end": 714,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
            "kind": "method",
            "computed": false,
            "static": false,
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
      "start": 727,
      "end": 1088,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 733,
        "end": 734,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 735,
        "end": 1088,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 741,
            "end": 881,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 741,
              "end": 743,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 743,
              "end": 881,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 746,
                "end": 881,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 756,
                    "end": 768,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 762,
                        "end": 767,
                        "id": {
                          "type": "Identifier",
                          "start": 762,
                          "end": 763,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 766,
                          "end": 767,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 777,
                    "end": 784,
                    "expression": {
                      "type": "CallExpression",
                      "start": 777,
                      "end": 783,
                      "callee": {
                        "type": "Identifier",
                        "start": 777,
                        "end": 780,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 781,
                          "end": 782,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 793,
                    "end": 809,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 799,
                        "end": 808,
                        "id": {
                          "type": "ArrayPattern",
                          "start": 799,
                          "end": 802,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 800,
                              "end": 801,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 805,
                          "end": 808,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 806,
                              "end": 807,
                              "value": 1,
                              "raw": "1"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 818,
                    "end": 825,
                    "expression": {
                      "type": "CallExpression",
                      "start": 818,
                      "end": 824,
                      "callee": {
                        "type": "Identifier",
                        "start": 818,
                        "end": 821,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 822,
                          "end": 823,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 834,
                    "end": 858,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 840,
                        "end": 857,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 840,
                          "end": 846,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 841,
                              "end": 845,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 841,
                                "end": 842,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 844,
                                "end": 845,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 849,
                          "end": 857,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 851,
                              "end": 855,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 851,
                                "end": 852,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 854,
                                "end": 855,
                                "value": 1,
                                "raw": "1"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 867,
                    "end": 874,
                    "expression": {
                      "type": "CallExpression",
                      "start": 867,
                      "end": 873,
                      "callee": {
                        "type": "Identifier",
                        "start": 867,
                        "end": 870,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 871,
                          "end": 872,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 886,
            "end": 1086,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 886,
              "end": 888,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 888,
              "end": 1086,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 891,
                "end": 1086,
                "body": [
                  {
                    "type": "BlockStatement",
                    "start": 901,
                    "end": 1064,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 915,
                        "end": 927,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 921,
                            "end": 926,
                            "id": {
                              "type": "Identifier",
                              "start": 921,
                              "end": 922,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 925,
                              "end": 926,
                              "value": 1,
                              "raw": "1"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 940,
                        "end": 947,
                        "expression": {
                          "type": "CallExpression",
                          "start": 940,
                          "end": 946,
                          "callee": {
                            "type": "Identifier",
                            "start": 940,
                            "end": 943,
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 944,
                              "end": 945,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 960,
                        "end": 976,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 966,
                            "end": 975,
                            "id": {
                              "type": "ArrayPattern",
                              "start": 966,
                              "end": 969,
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 967,
                                  "end": 968,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "start": 972,
                              "end": 975,
                              "elements": [
                                {
                                  "type": "Literal",
                                  "start": 973,
                                  "end": 974,
                                  "value": 1,
                                  "raw": "1"
                                }
                              ]
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 989,
                        "end": 996,
                        "expression": {
                          "type": "CallExpression",
                          "start": 989,
                          "end": 995,
                          "callee": {
                            "type": "Identifier",
                            "start": 989,
                            "end": 992,
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 993,
                              "end": 994,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "VariableDeclaration",
                        "start": 1009,
                        "end": 1033,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1015,
                            "end": 1032,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 1015,
                              "end": 1021,
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1016,
                                  "end": 1020,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1016,
                                    "end": 1017,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 1019,
                                    "end": 1020,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "start": 1024,
                              "end": 1032,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 1026,
                                  "end": 1030,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 1026,
                                    "end": 1027,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 1029,
                                    "end": 1030,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1046,
                        "end": 1053,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1046,
                          "end": 1052,
                          "callee": {
                            "type": "Identifier",
                            "start": 1046,
                            "end": 1049,
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1050,
                              "end": 1051,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1073,
                    "end": 1080,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1073,
                      "end": 1079,
                      "callee": {
                        "type": "Identifier",
                        "start": 1073,
                        "end": 1076,
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1077,
                          "end": 1078,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
            "kind": "method",
            "computed": false,
            "static": false,
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
      "type": "FunctionDeclaration",
      "start": 1090,
      "end": 1212,
      "id": {
        "type": "Identifier",
        "start": 1099,
        "end": 1103,
        "decorators": [],
        "name": "bar1",
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
        "start": 1106,
        "end": 1212,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1112,
            "end": 1124,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1118,
                "end": 1123,
                "id": {
                  "type": "Identifier",
                  "start": 1118,
                  "end": 1119,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1122,
                  "end": 1123,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1129,
            "end": 1136,
            "expression": {
              "type": "CallExpression",
              "start": 1129,
              "end": 1135,
              "callee": {
                "type": "Identifier",
                "start": 1129,
                "end": 1132,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1134,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1141,
            "end": 1157,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1147,
                "end": 1156,
                "id": {
                  "type": "ArrayPattern",
                  "start": 1147,
                  "end": 1150,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1148,
                      "end": 1149,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1153,
                  "end": 1156,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1154,
                      "end": 1155,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1162,
            "end": 1169,
            "expression": {
              "type": "CallExpression",
              "start": 1162,
              "end": 1168,
              "callee": {
                "type": "Identifier",
                "start": 1162,
                "end": 1165,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1166,
                  "end": 1167,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1174,
            "end": 1198,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1180,
                "end": 1197,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1180,
                  "end": 1186,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1181,
                      "end": 1185,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1181,
                        "end": 1182,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1184,
                        "end": 1185,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1189,
                  "end": 1197,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1191,
                      "end": 1195,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1191,
                        "end": 1192,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1194,
                        "end": 1195,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1203,
            "end": 1210,
            "expression": {
              "type": "CallExpression",
              "start": 1203,
              "end": 1209,
              "callee": {
                "type": "Identifier",
                "start": 1203,
                "end": 1206,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1207,
                  "end": 1208,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1214,
      "end": 1385,
      "id": {
        "type": "Identifier",
        "start": 1223,
        "end": 1227,
        "decorators": [],
        "name": "bar2",
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
        "start": 1230,
        "end": 1385,
        "body": [
          {
            "type": "BlockStatement",
            "start": 1236,
            "end": 1371,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 1246,
                "end": 1258,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1252,
                    "end": 1257,
                    "id": {
                      "type": "Identifier",
                      "start": 1252,
                      "end": 1253,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1256,
                      "end": 1257,
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1267,
                "end": 1274,
                "expression": {
                  "type": "CallExpression",
                  "start": 1267,
                  "end": 1273,
                  "callee": {
                    "type": "Identifier",
                    "start": 1267,
                    "end": 1270,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1271,
                      "end": 1272,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "VariableDeclaration",
                "start": 1283,
                "end": 1299,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1289,
                    "end": 1298,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 1289,
                      "end": 1292,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 1290,
                          "end": 1291,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "start": 1295,
                      "end": 1298,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1296,
                          "end": 1297,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1308,
                "end": 1315,
                "expression": {
                  "type": "CallExpression",
                  "start": 1308,
                  "end": 1314,
                  "callee": {
                    "type": "Identifier",
                    "start": 1308,
                    "end": 1311,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1312,
                      "end": 1313,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "VariableDeclaration",
                "start": 1324,
                "end": 1348,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1330,
                    "end": 1347,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 1330,
                      "end": 1336,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1331,
                          "end": 1335,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1331,
                            "end": 1332,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1334,
                            "end": 1335,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 1339,
                      "end": 1347,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1341,
                          "end": 1345,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1341,
                            "end": 1342,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1344,
                            "end": 1345,
                            "value": 1,
                            "raw": "1"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1357,
                "end": 1364,
                "expression": {
                  "type": "CallExpression",
                  "start": 1357,
                  "end": 1363,
                  "callee": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1360,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1361,
                      "end": 1362,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 1376,
            "end": 1383,
            "expression": {
              "type": "CallExpression",
              "start": 1376,
              "end": 1382,
              "callee": {
                "type": "Identifier",
                "start": 1376,
                "end": 1379,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1380,
                  "end": 1381,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSModuleDeclaration",
      "start": 1387,
      "end": 1497,
      "id": {
        "type": "Identifier",
        "start": 1394,
        "end": 1396,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1397,
        "end": 1497,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1403,
            "end": 1413,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1407,
                "end": 1412,
                "id": {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1408,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1411,
                  "end": 1412,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1418,
            "end": 1425,
            "expression": {
              "type": "CallExpression",
              "start": 1418,
              "end": 1424,
              "callee": {
                "type": "Identifier",
                "start": 1418,
                "end": 1421,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1422,
                  "end": 1423,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1430,
            "end": 1444,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1434,
                "end": 1443,
                "id": {
                  "type": "ArrayPattern",
                  "start": 1434,
                  "end": 1437,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1435,
                      "end": 1436,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1440,
                  "end": 1443,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1441,
                      "end": 1442,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1449,
            "end": 1456,
            "expression": {
              "type": "CallExpression",
              "start": 1449,
              "end": 1455,
              "callee": {
                "type": "Identifier",
                "start": 1449,
                "end": 1452,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1453,
                  "end": 1454,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1461,
            "end": 1483,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1465,
                "end": 1482,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1465,
                  "end": 1471,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1466,
                      "end": 1470,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1466,
                        "end": 1467,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1469,
                        "end": 1470,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1474,
                  "end": 1482,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1476,
                      "end": 1480,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1476,
                        "end": 1477,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1479,
                        "end": 1480,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1488,
            "end": 1495,
            "expression": {
              "type": "CallExpression",
              "start": 1488,
              "end": 1494,
              "callee": {
                "type": "Identifier",
                "start": 1488,
                "end": 1491,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1492,
                  "end": 1493,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1499,
      "end": 1657,
      "id": {
        "type": "Identifier",
        "start": 1506,
        "end": 1508,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1509,
        "end": 1657,
        "body": [
          {
            "type": "BlockStatement",
            "start": 1515,
            "end": 1643,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 1525,
                "end": 1535,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1529,
                    "end": 1534,
                    "id": {
                      "type": "Identifier",
                      "start": 1529,
                      "end": 1530,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1533,
                      "end": 1534,
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1544,
                "end": 1551,
                "expression": {
                  "type": "CallExpression",
                  "start": 1544,
                  "end": 1550,
                  "callee": {
                    "type": "Identifier",
                    "start": 1544,
                    "end": 1547,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1548,
                      "end": 1549,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "VariableDeclaration",
                "start": 1560,
                "end": 1574,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1564,
                    "end": 1573,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 1564,
                      "end": 1567,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 1565,
                          "end": 1566,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "start": 1570,
                      "end": 1573,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1571,
                          "end": 1572,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1583,
                "end": 1590,
                "expression": {
                  "type": "CallExpression",
                  "start": 1583,
                  "end": 1589,
                  "callee": {
                    "type": "Identifier",
                    "start": 1583,
                    "end": 1586,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1587,
                      "end": 1588,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "VariableDeclaration",
                "start": 1599,
                "end": 1621,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1603,
                    "end": 1620,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 1603,
                      "end": 1609,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1604,
                          "end": 1608,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1604,
                            "end": 1605,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1607,
                            "end": 1608,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 1612,
                      "end": 1620,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1614,
                          "end": 1618,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1614,
                            "end": 1615,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1617,
                            "end": 1618,
                            "value": 1,
                            "raw": "1"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1630,
                "end": 1637,
                "expression": {
                  "type": "CallExpression",
                  "start": 1630,
                  "end": 1636,
                  "callee": {
                    "type": "Identifier",
                    "start": 1630,
                    "end": 1633,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1634,
                      "end": 1635,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 1648,
            "end": 1655,
            "expression": {
              "type": "CallExpression",
              "start": 1648,
              "end": 1654,
              "callee": {
                "type": "Identifier",
                "start": 1648,
                "end": 1651,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1652,
                  "end": 1653,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1659,
      "end": 1776,
      "id": {
        "type": "Identifier",
        "start": 1666,
        "end": 1668,
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1669,
        "end": 1776,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1675,
            "end": 1687,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1681,
                "end": 1686,
                "id": {
                  "type": "Identifier",
                  "start": 1681,
                  "end": 1682,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1685,
                  "end": 1686,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1692,
            "end": 1699,
            "expression": {
              "type": "CallExpression",
              "start": 1692,
              "end": 1698,
              "callee": {
                "type": "Identifier",
                "start": 1692,
                "end": 1695,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1696,
                  "end": 1697,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1704,
            "end": 1720,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1710,
                "end": 1719,
                "id": {
                  "type": "ArrayPattern",
                  "start": 1710,
                  "end": 1713,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 1711,
                      "end": 1712,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1716,
                  "end": 1719,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1717,
                      "end": 1718,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1725,
            "end": 1732,
            "expression": {
              "type": "CallExpression",
              "start": 1725,
              "end": 1731,
              "callee": {
                "type": "Identifier",
                "start": 1725,
                "end": 1728,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1729,
                  "end": 1730,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1737,
            "end": 1761,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1743,
                "end": 1760,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1743,
                  "end": 1749,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1744,
                      "end": 1748,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1744,
                        "end": 1745,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1747,
                        "end": 1748,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1752,
                  "end": 1760,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1754,
                      "end": 1758,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1754,
                        "end": 1755,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1757,
                        "end": 1758,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1766,
            "end": 1773,
            "expression": {
              "type": "CallExpression",
              "start": 1766,
              "end": 1772,
              "callee": {
                "type": "Identifier",
                "start": 1766,
                "end": 1769,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1770,
                  "end": 1771,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1778,
      "end": 1967,
      "id": {
        "type": "Identifier",
        "start": 1785,
        "end": 1787,
        "decorators": [],
        "name": "M4",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1788,
        "end": 1967,
        "body": [
          {
            "type": "BlockStatement",
            "start": 1794,
            "end": 1929,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 1804,
                "end": 1816,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1810,
                    "end": 1815,
                    "id": {
                      "type": "Identifier",
                      "start": 1810,
                      "end": 1811,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 1814,
                      "end": 1815,
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1825,
                "end": 1832,
                "expression": {
                  "type": "CallExpression",
                  "start": 1825,
                  "end": 1831,
                  "callee": {
                    "type": "Identifier",
                    "start": 1825,
                    "end": 1828,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1829,
                      "end": 1830,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "VariableDeclaration",
                "start": 1841,
                "end": 1857,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1847,
                    "end": 1856,
                    "id": {
                      "type": "ArrayPattern",
                      "start": 1847,
                      "end": 1850,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 1848,
                          "end": 1849,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "start": 1853,
                      "end": 1856,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1854,
                          "end": 1855,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1866,
                "end": 1873,
                "expression": {
                  "type": "CallExpression",
                  "start": 1866,
                  "end": 1872,
                  "callee": {
                    "type": "Identifier",
                    "start": 1866,
                    "end": 1869,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1870,
                      "end": 1871,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "VariableDeclaration",
                "start": 1882,
                "end": 1906,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 1888,
                    "end": 1905,
                    "id": {
                      "type": "ObjectPattern",
                      "start": 1888,
                      "end": 1894,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1889,
                          "end": 1893,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1889,
                            "end": 1890,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1892,
                            "end": 1893,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 1897,
                      "end": 1905,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1899,
                          "end": 1903,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1899,
                            "end": 1900,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1902,
                            "end": 1903,
                            "value": 1,
                            "raw": "1"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 1915,
                "end": 1922,
                "expression": {
                  "type": "CallExpression",
                  "start": 1915,
                  "end": 1921,
                  "callee": {
                    "type": "Identifier",
                    "start": 1915,
                    "end": 1918,
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1919,
                      "end": 1920,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 1934,
            "end": 1941,
            "expression": {
              "type": "CallExpression",
              "start": 1934,
              "end": 1940,
              "callee": {
                "type": "Identifier",
                "start": 1934,
                "end": 1937,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1938,
                  "end": 1939,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1946,
            "end": 1953,
            "expression": {
              "type": "CallExpression",
              "start": 1946,
              "end": 1952,
              "callee": {
                "type": "Identifier",
                "start": 1946,
                "end": 1949,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1950,
                  "end": 1951,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1958,
            "end": 1965,
            "expression": {
              "type": "CallExpression",
              "start": 1958,
              "end": 1964,
              "callee": {
                "type": "Identifier",
                "start": 1958,
                "end": 1961,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1962,
                  "end": 1963,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1969,
      "end": 2150,
      "id": {
        "type": "Identifier",
        "start": 1978,
        "end": 1982,
        "decorators": [],
        "name": "foo3",
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
        "start": 1985,
        "end": 2150,
        "body": [
          {
            "type": "ForStatement",
            "start": 1991,
            "end": 2029,
            "init": {
              "type": "VariableDeclaration",
              "start": 1996,
              "end": 2001,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2000,
                  "end": 2001,
                  "id": {
                    "type": "Identifier",
                    "start": 2000,
                    "end": 2001,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2006,
              "end": 2029,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2016,
                  "end": 2023,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2016,
                    "end": 2022,
                    "callee": {
                      "type": "Identifier",
                      "start": 2016,
                      "end": 2019,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2020,
                        "end": 2021,
                        "decorators": [],
                        "name": "x",
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
            "type": "ForStatement",
            "start": 2034,
            "end": 2079,
            "init": {
              "type": "VariableDeclaration",
              "start": 2039,
              "end": 2051,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2043,
                  "end": 2051,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 2043,
                    "end": 2046,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 2044,
                        "end": 2045,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 2049,
                    "end": 2051,
                    "elements": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2056,
              "end": 2079,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2066,
                  "end": 2073,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2066,
                    "end": 2072,
                    "callee": {
                      "type": "Identifier",
                      "start": 2066,
                      "end": 2069,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2070,
                        "end": 2071,
                        "decorators": [],
                        "name": "y",
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
            "type": "ForStatement",
            "start": 2084,
            "end": 2136,
            "init": {
              "type": "VariableDeclaration",
              "start": 2089,
              "end": 2108,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2093,
                  "end": 2108,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 2093,
                    "end": 2099,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2094,
                        "end": 2098,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2094,
                          "end": 2095,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2097,
                          "end": 2098,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 2102,
                    "end": 2108,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2103,
                        "end": 2107,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2103,
                          "end": 2104,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 2106,
                          "end": 2107,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2113,
              "end": 2136,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2123,
                  "end": 2130,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2123,
                    "end": 2129,
                    "callee": {
                      "type": "Identifier",
                      "start": 2123,
                      "end": 2126,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2127,
                        "end": 2128,
                        "decorators": [],
                        "name": "z",
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
            "type": "ExpressionStatement",
            "start": 2141,
            "end": 2148,
            "expression": {
              "type": "CallExpression",
              "start": 2141,
              "end": 2147,
              "callee": {
                "type": "Identifier",
                "start": 2141,
                "end": 2144,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2145,
                  "end": 2146,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2152,
      "end": 2345,
      "id": {
        "type": "Identifier",
        "start": 2161,
        "end": 2165,
        "decorators": [],
        "name": "foo4",
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
        "start": 2168,
        "end": 2345,
        "body": [
          {
            "type": "ForStatement",
            "start": 2174,
            "end": 2218,
            "init": {
              "type": "VariableDeclaration",
              "start": 2179,
              "end": 2190,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2185,
                  "end": 2190,
                  "id": {
                    "type": "Identifier",
                    "start": 2185,
                    "end": 2186,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2189,
                    "end": 2190,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2195,
              "end": 2218,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2205,
                  "end": 2212,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2205,
                    "end": 2211,
                    "callee": {
                      "type": "Identifier",
                      "start": 2205,
                      "end": 2208,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2209,
                        "end": 2210,
                        "decorators": [],
                        "name": "x",
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
            "type": "ForStatement",
            "start": 2223,
            "end": 2270,
            "init": {
              "type": "VariableDeclaration",
              "start": 2228,
              "end": 2242,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2234,
                  "end": 2242,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 2234,
                    "end": 2237,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 2235,
                        "end": 2236,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 2240,
                    "end": 2242,
                    "elements": []
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2247,
              "end": 2270,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2257,
                  "end": 2264,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2257,
                    "end": 2263,
                    "callee": {
                      "type": "Identifier",
                      "start": 2257,
                      "end": 2260,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2261,
                        "end": 2262,
                        "decorators": [],
                        "name": "y",
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
            "type": "ForStatement",
            "start": 2275,
            "end": 2331,
            "init": {
              "type": "VariableDeclaration",
              "start": 2280,
              "end": 2303,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2286,
                  "end": 2303,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 2286,
                    "end": 2292,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2287,
                        "end": 2291,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2287,
                          "end": 2288,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2290,
                          "end": 2291,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 2295,
                    "end": 2303,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2297,
                        "end": 2301,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2297,
                          "end": 2298,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 2300,
                          "end": 2301,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 2308,
              "end": 2331,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2318,
                  "end": 2325,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2318,
                    "end": 2324,
                    "callee": {
                      "type": "Identifier",
                      "start": 2318,
                      "end": 2321,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2322,
                        "end": 2323,
                        "decorators": [],
                        "name": "z",
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
            "type": "ExpressionStatement",
            "start": 2336,
            "end": 2343,
            "expression": {
              "type": "CallExpression",
              "start": 2336,
              "end": 2342,
              "callee": {
                "type": "Identifier",
                "start": 2336,
                "end": 2339,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2340,
                  "end": 2341,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2347,
      "end": 2424,
      "id": {
        "type": "Identifier",
        "start": 2356,
        "end": 2360,
        "decorators": [],
        "name": "foo5",
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
        "start": 2363,
        "end": 2424,
        "body": [
          {
            "type": "ForInStatement",
            "start": 2369,
            "end": 2410,
            "left": {
              "type": "VariableDeclaration",
              "start": 2374,
              "end": 2379,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2378,
                  "end": 2379,
                  "id": {
                    "type": "Identifier",
                    "start": 2378,
                    "end": 2379,
                    "decorators": [],
                    "name": "x",
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
              "start": 2383,
              "end": 2385,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2387,
              "end": 2410,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2397,
                  "end": 2404,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2397,
                    "end": 2403,
                    "callee": {
                      "type": "Identifier",
                      "start": 2397,
                      "end": 2400,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2401,
                        "end": 2402,
                        "decorators": [],
                        "name": "x",
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
            "type": "ExpressionStatement",
            "start": 2415,
            "end": 2422,
            "expression": {
              "type": "CallExpression",
              "start": 2415,
              "end": 2421,
              "callee": {
                "type": "Identifier",
                "start": 2415,
                "end": 2418,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2419,
                  "end": 2420,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2426,
      "end": 2505,
      "id": {
        "type": "Identifier",
        "start": 2435,
        "end": 2439,
        "decorators": [],
        "name": "foo6",
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
        "start": 2442,
        "end": 2505,
        "body": [
          {
            "type": "ForInStatement",
            "start": 2448,
            "end": 2491,
            "left": {
              "type": "VariableDeclaration",
              "start": 2453,
              "end": 2460,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2459,
                  "end": 2460,
                  "id": {
                    "type": "Identifier",
                    "start": 2459,
                    "end": 2460,
                    "decorators": [],
                    "name": "x",
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
              "start": 2464,
              "end": 2466,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2468,
              "end": 2491,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2478,
                  "end": 2485,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2478,
                    "end": 2484,
                    "callee": {
                      "type": "Identifier",
                      "start": 2478,
                      "end": 2481,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2482,
                        "end": 2483,
                        "decorators": [],
                        "name": "x",
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
            "type": "ExpressionStatement",
            "start": 2496,
            "end": 2503,
            "expression": {
              "type": "CallExpression",
              "start": 2496,
              "end": 2502,
              "callee": {
                "type": "Identifier",
                "start": 2496,
                "end": 2499,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2500,
                  "end": 2501,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2507,
      "end": 2584,
      "id": {
        "type": "Identifier",
        "start": 2516,
        "end": 2520,
        "decorators": [],
        "name": "foo7",
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
        "start": 2523,
        "end": 2584,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 2529,
            "end": 2570,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2534,
              "end": 2539,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2538,
                  "end": 2539,
                  "id": {
                    "type": "Identifier",
                    "start": 2538,
                    "end": 2539,
                    "decorators": [],
                    "name": "x",
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
              "start": 2543,
              "end": 2545,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2547,
              "end": 2570,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2557,
                  "end": 2564,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2557,
                    "end": 2563,
                    "callee": {
                      "type": "Identifier",
                      "start": 2557,
                      "end": 2560,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2561,
                        "end": 2562,
                        "decorators": [],
                        "name": "x",
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
            "type": "ExpressionStatement",
            "start": 2575,
            "end": 2582,
            "expression": {
              "type": "CallExpression",
              "start": 2575,
              "end": 2581,
              "callee": {
                "type": "Identifier",
                "start": 2575,
                "end": 2578,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2579,
                  "end": 2580,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2586,
      "end": 2665,
      "id": {
        "type": "Identifier",
        "start": 2595,
        "end": 2599,
        "decorators": [],
        "name": "foo8",
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
        "start": 2602,
        "end": 2665,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 2608,
            "end": 2651,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2613,
              "end": 2620,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2617,
                  "end": 2620,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 2617,
                    "end": 2620,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 2618,
                        "end": 2619,
                        "decorators": [],
                        "name": "x",
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
              "start": 2624,
              "end": 2626,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2628,
              "end": 2651,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2638,
                  "end": 2645,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2638,
                    "end": 2644,
                    "callee": {
                      "type": "Identifier",
                      "start": 2638,
                      "end": 2641,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2642,
                        "end": 2643,
                        "decorators": [],
                        "name": "x",
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
            "type": "ExpressionStatement",
            "start": 2656,
            "end": 2663,
            "expression": {
              "type": "CallExpression",
              "start": 2656,
              "end": 2662,
              "callee": {
                "type": "Identifier",
                "start": 2656,
                "end": 2659,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2660,
                  "end": 2661,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2667,
      "end": 2749,
      "id": {
        "type": "Identifier",
        "start": 2676,
        "end": 2680,
        "decorators": [],
        "name": "foo9",
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
        "start": 2683,
        "end": 2749,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 2689,
            "end": 2735,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2694,
              "end": 2704,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2698,
                  "end": 2704,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 2698,
                    "end": 2704,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2699,
                        "end": 2703,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2699,
                          "end": 2700,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2702,
                          "end": 2703,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
              "start": 2708,
              "end": 2710,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2712,
              "end": 2735,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2722,
                  "end": 2729,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2722,
                    "end": 2728,
                    "callee": {
                      "type": "Identifier",
                      "start": 2722,
                      "end": 2725,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2726,
                        "end": 2727,
                        "decorators": [],
                        "name": "x",
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
            "type": "ExpressionStatement",
            "start": 2740,
            "end": 2747,
            "expression": {
              "type": "CallExpression",
              "start": 2740,
              "end": 2746,
              "callee": {
                "type": "Identifier",
                "start": 2740,
                "end": 2743,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2744,
                  "end": 2745,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2751,
      "end": 2831,
      "id": {
        "type": "Identifier",
        "start": 2760,
        "end": 2765,
        "decorators": [],
        "name": "foo10",
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
        "start": 2768,
        "end": 2831,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 2774,
            "end": 2817,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2779,
              "end": 2786,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2785,
                  "end": 2786,
                  "id": {
                    "type": "Identifier",
                    "start": 2785,
                    "end": 2786,
                    "decorators": [],
                    "name": "x",
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
              "start": 2790,
              "end": 2792,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2794,
              "end": 2817,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2804,
                  "end": 2811,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2804,
                    "end": 2810,
                    "callee": {
                      "type": "Identifier",
                      "start": 2804,
                      "end": 2807,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2808,
                        "end": 2809,
                        "decorators": [],
                        "name": "x",
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
            "type": "ExpressionStatement",
            "start": 2822,
            "end": 2829,
            "expression": {
              "type": "CallExpression",
              "start": 2822,
              "end": 2828,
              "callee": {
                "type": "Identifier",
                "start": 2822,
                "end": 2825,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2826,
                  "end": 2827,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2833,
      "end": 2915,
      "id": {
        "type": "Identifier",
        "start": 2842,
        "end": 2847,
        "decorators": [],
        "name": "foo11",
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
        "start": 2850,
        "end": 2915,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 2856,
            "end": 2901,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2861,
              "end": 2870,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2867,
                  "end": 2870,
                  "id": {
                    "type": "ArrayPattern",
                    "start": 2867,
                    "end": 2870,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 2868,
                        "end": 2869,
                        "decorators": [],
                        "name": "x",
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
              "start": 2874,
              "end": 2876,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2878,
              "end": 2901,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2888,
                  "end": 2895,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2888,
                    "end": 2894,
                    "callee": {
                      "type": "Identifier",
                      "start": 2888,
                      "end": 2891,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2892,
                        "end": 2893,
                        "decorators": [],
                        "name": "x",
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
            "type": "ExpressionStatement",
            "start": 2906,
            "end": 2913,
            "expression": {
              "type": "CallExpression",
              "start": 2906,
              "end": 2912,
              "callee": {
                "type": "Identifier",
                "start": 2906,
                "end": 2909,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2910,
                  "end": 2911,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 2917,
      "end": 3002,
      "id": {
        "type": "Identifier",
        "start": 2926,
        "end": 2931,
        "decorators": [],
        "name": "foo12",
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
        "start": 2934,
        "end": 3002,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 2940,
            "end": 2988,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2945,
              "end": 2957,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2951,
                  "end": 2957,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 2951,
                    "end": 2957,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2952,
                        "end": 2956,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2952,
                          "end": 2953,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2955,
                          "end": 2956,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
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
              "start": 2961,
              "end": 2963,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2965,
              "end": 2988,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2975,
                  "end": 2982,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2975,
                    "end": 2981,
                    "callee": {
                      "type": "Identifier",
                      "start": 2975,
                      "end": 2978,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 2979,
                        "end": 2980,
                        "decorators": [],
                        "name": "x",
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
            "type": "ExpressionStatement",
            "start": 2993,
            "end": 3000,
            "expression": {
              "type": "CallExpression",
              "start": 2993,
              "end": 2999,
              "callee": {
                "type": "Identifier",
                "start": 2993,
                "end": 2996,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2997,
                  "end": 2998,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
