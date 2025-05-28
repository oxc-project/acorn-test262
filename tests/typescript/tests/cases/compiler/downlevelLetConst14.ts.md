__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 709,
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
      "start": 13,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
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
          "start": 34,
          "end": 40,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 40,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 37,
              "end": 40
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
      "start": 44,
      "end": 55,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 52,
            "end": 54,
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
      "start": 56,
      "end": 75,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 62,
            "decorators": [],
            "name": "z0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 74,
            "decorators": [],
            "name": "z3",
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
      "type": "BlockStatement",
      "start": 76,
      "end": 255,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 82,
          "end": 93,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 86,
              "end": 92,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 90,
                "end": 92,
                "value": 20,
                "raw": "20"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 98,
          "end": 105,
          "expression": {
            "type": "CallExpression",
            "start": 98,
            "end": 104,
            "callee": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 102,
                "end": 103,
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
          "start": 111,
          "end": 126,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 115,
              "end": 125,
              "id": {
                "type": "ArrayPattern",
                "start": 115,
                "end": 119,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 116,
                    "end": 118,
                    "decorators": [],
                    "name": "z0",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ArrayExpression",
                "start": 122,
                "end": 125,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 123,
                    "end": 124,
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
          "start": 131,
          "end": 139,
          "expression": {
            "type": "CallExpression",
            "start": 131,
            "end": 138,
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 135,
                "end": 137,
                "decorators": [],
                "name": "z0",
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
              "end": 158,
              "id": {
                "type": "ArrayPattern",
                "start": 148,
                "end": 152,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 149,
                    "end": 151,
                    "decorators": [],
                    "name": "z1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ArrayExpression",
                "start": 155,
                "end": 158,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 156,
                    "end": 157,
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
          "end": 171,
          "expression": {
            "type": "CallExpression",
            "start": 163,
            "end": 170,
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
                "end": 169,
                "decorators": [],
                "name": "z1",
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
          "start": 176,
          "end": 199,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 180,
              "end": 198,
              "id": {
                "type": "ObjectPattern",
                "start": 180,
                "end": 187,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 181,
                    "end": 186,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 186,
                      "decorators": [],
                      "name": "z2",
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
                "start": 190,
                "end": 198,
                "properties": [
                  {
                    "type": "Property",
                    "start": 192,
                    "end": 196,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 195,
                      "end": 196,
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
          "start": 204,
          "end": 212,
          "expression": {
            "type": "CallExpression",
            "start": 204,
            "end": 211,
            "callee": {
              "type": "Identifier",
              "start": 204,
              "end": 207,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 208,
                "end": 210,
                "decorators": [],
                "name": "z2",
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
          "start": 217,
          "end": 240,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 221,
              "end": 239,
              "id": {
                "type": "ObjectPattern",
                "start": 221,
                "end": 228,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 222,
                    "end": 227,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 227,
                      "decorators": [],
                      "name": "z3",
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
                "start": 231,
                "end": 239,
                "properties": [
                  {
                    "type": "Property",
                    "start": 233,
                    "end": 237,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 234,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 236,
                      "end": 237,
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
          "start": 245,
          "end": 253,
          "expression": {
            "type": "CallExpression",
            "start": 245,
            "end": 252,
            "callee": {
              "type": "Identifier",
              "start": 245,
              "end": 248,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 249,
                "end": 251,
                "decorators": [],
                "name": "z3",
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
      "start": 256,
      "end": 263,
      "expression": {
        "type": "CallExpression",
        "start": 256,
        "end": 262,
        "callee": {
          "type": "Identifier",
          "start": 256,
          "end": 259,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 260,
            "end": 261,
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
      "start": 264,
      "end": 272,
      "expression": {
        "type": "CallExpression",
        "start": 264,
        "end": 271,
        "callee": {
          "type": "Identifier",
          "start": 264,
          "end": 267,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "decorators": [],
            "name": "z0",
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
      "start": 273,
      "end": 281,
      "expression": {
        "type": "CallExpression",
        "start": 273,
        "end": 280,
        "callee": {
          "type": "Identifier",
          "start": 273,
          "end": 276,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "decorators": [],
            "name": "z1",
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
      "start": 282,
      "end": 290,
      "expression": {
        "type": "CallExpression",
        "start": 282,
        "end": 289,
        "callee": {
          "type": "Identifier",
          "start": 282,
          "end": 285,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 286,
            "end": 288,
            "decorators": [],
            "name": "z2",
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
      "start": 291,
      "end": 299,
      "expression": {
        "type": "CallExpression",
        "start": 291,
        "end": 298,
        "callee": {
          "type": "Identifier",
          "start": 291,
          "end": 294,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "decorators": [],
            "name": "z3",
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
      "start": 300,
      "end": 307,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 306,
            "decorators": [],
            "name": "z6",
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
      "start": 308,
      "end": 321,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 320,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 313,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 316,
            "end": 320,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "BlockStatement",
      "start": 322,
      "end": 481,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 328,
          "end": 339,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 332,
              "end": 338,
              "id": {
                "type": "Identifier",
                "start": 332,
                "end": 333,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 336,
                "end": 338,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 344,
          "end": 361,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 348,
              "end": 361,
              "id": {
                "type": "ArrayPattern",
                "start": 348,
                "end": 352,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 349,
                    "end": 351,
                    "decorators": [],
                    "name": "z6",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ArrayExpression",
                "start": 355,
                "end": 361,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 356,
                    "end": 360,
                    "value": true,
                    "raw": "true"
                  }
                ]
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "BlockStatement",
          "start": 366,
          "end": 454,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 376,
              "end": 386,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 380,
                  "end": 385,
                  "id": {
                    "type": "Identifier",
                    "start": 380,
                    "end": 381,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 384,
                    "end": 385,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 395,
              "end": 415,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 399,
                  "end": 415,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 399,
                    "end": 406,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 400,
                        "end": 405,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 400,
                          "end": 401,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 403,
                          "end": 405,
                          "decorators": [],
                          "name": "z6",
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
                    "start": 409,
                    "end": 415,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 410,
                        "end": 414,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 411,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 413,
                          "end": 414,
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
              "start": 424,
              "end": 431,
              "expression": {
                "type": "CallExpression",
                "start": 424,
                "end": 430,
                "callee": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 427,
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 428,
                    "end": 429,
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
              "start": 440,
              "end": 448,
              "expression": {
                "type": "CallExpression",
                "start": 440,
                "end": 447,
                "callee": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 443,
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 444,
                    "end": 446,
                    "decorators": [],
                    "name": "z6",
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
          "start": 459,
          "end": 466,
          "expression": {
            "type": "CallExpression",
            "start": 459,
            "end": 465,
            "callee": {
              "type": "Identifier",
              "start": 459,
              "end": 462,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 463,
                "end": 464,
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
          "start": 471,
          "end": 479,
          "expression": {
            "type": "CallExpression",
            "start": 471,
            "end": 478,
            "callee": {
              "type": "Identifier",
              "start": 471,
              "end": 474,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 475,
                "end": 477,
                "decorators": [],
                "name": "z6",
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
      "start": 482,
      "end": 489,
      "expression": {
        "type": "CallExpression",
        "start": 482,
        "end": 488,
        "callee": {
          "type": "Identifier",
          "start": 482,
          "end": 485,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 486,
            "end": 487,
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
      "start": 490,
      "end": 498,
      "expression": {
        "type": "CallExpression",
        "start": 490,
        "end": 497,
        "callee": {
          "type": "Identifier",
          "start": 490,
          "end": 493,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 494,
            "end": 496,
            "decorators": [],
            "name": "z6",
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
      "start": 500,
      "end": 514,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 513,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 505,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 508,
            "end": 513,
            "value": false,
            "raw": "false"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 515,
      "end": 526,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 525,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 521,
            "decorators": [],
            "name": "z5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 524,
            "end": 525,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "BlockStatement",
      "start": 527,
      "end": 701,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 533,
          "end": 544,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 537,
              "end": 543,
              "id": {
                "type": "Identifier",
                "start": 537,
                "end": 538,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 541,
                "end": 543,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 549,
          "end": 564,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 553,
              "end": 563,
              "id": {
                "type": "ArrayPattern",
                "start": 553,
                "end": 557,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 554,
                    "end": 556,
                    "decorators": [],
                    "name": "z5",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ArrayExpression",
                "start": 560,
                "end": 563,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 561,
                    "end": 562,
                    "value": 5,
                    "raw": "5"
                  }
                ]
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "BlockStatement",
          "start": 569,
          "end": 687,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 579,
              "end": 590,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 583,
                  "end": 589,
                  "id": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 585,
                    "decorators": [],
                    "name": "_z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 588,
                    "end": 589,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 599,
              "end": 623,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 603,
                  "end": 622,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 603,
                    "end": 611,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 604,
                        "end": 610,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 605,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 607,
                          "end": 610,
                          "decorators": [],
                          "name": "_z5",
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
                    "start": 614,
                    "end": 622,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 616,
                        "end": 620,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 616,
                          "end": 617,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 619,
                          "end": 620,
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
              "start": 673,
              "end": 681,
              "expression": {
                "type": "CallExpression",
                "start": 673,
                "end": 680,
                "callee": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 676,
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 677,
                    "end": 679,
                    "decorators": [],
                    "name": "_z",
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
          "start": 692,
          "end": 699,
          "expression": {
            "type": "CallExpression",
            "start": 692,
            "end": 698,
            "callee": {
              "type": "Identifier",
              "start": 692,
              "end": 695,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 696,
                "end": 697,
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
      "start": 702,
      "end": 709,
      "expression": {
        "type": "CallExpression",
        "start": 702,
        "end": 708,
        "callee": {
          "type": "Identifier",
          "start": 702,
          "end": 705,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 706,
            "end": 707,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
