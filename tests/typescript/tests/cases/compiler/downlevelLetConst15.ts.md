__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 757,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict"
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 13,
      "end": 42,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 54,
          "definite": false,
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
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 62,
            "decorators": [],
            "name": "z0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 70,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 74,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "BlockStatement",
      "start": 76,
      "end": 285,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 82,
          "end": 95,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 88,
              "end": 94,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 92,
                "end": 94,
                "raw": "20",
                "value": 20
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 100,
          "end": 107,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 100,
            "end": 106,
            "arguments": [
              {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 113,
          "end": 130,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 119,
              "end": 129,
              "definite": false,
              "id": {
                "type": "ArrayPattern",
                "start": 119,
                "end": 123,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 120,
                    "end": 122,
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
                "start": 126,
                "end": 129,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 127,
                    "end": 128,
                    "raw": "1",
                    "value": 1
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 135,
          "end": 143,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 135,
            "end": 142,
            "arguments": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 141,
                "decorators": [],
                "name": "z0",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 148,
          "end": 174,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 154,
              "end": 174,
              "definite": false,
              "id": {
                "type": "ArrayPattern",
                "start": 154,
                "end": 163,
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 155,
                    "end": 162,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 156,
                        "end": 161,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 161,
                          "decorators": [],
                          "name": "z1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ArrayExpression",
                "start": 166,
                "end": 174,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 167,
                    "end": 173,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 168,
                        "end": 172,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 171,
                          "end": 172,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 179,
          "end": 187,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 179,
            "end": 186,
            "arguments": [
              {
                "type": "Identifier",
                "start": 183,
                "end": 185,
                "decorators": [],
                "name": "z1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 192,
          "end": 217,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 198,
              "end": 216,
              "definite": false,
              "id": {
                "type": "ObjectPattern",
                "start": 198,
                "end": 205,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 199,
                    "end": 204,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 204,
                      "decorators": [],
                      "name": "z2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              },
              "init": {
                "type": "ObjectExpression",
                "start": 208,
                "end": 216,
                "properties": [
                  {
                    "type": "Property",
                    "start": 210,
                    "end": 214,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 213,
                      "end": 214,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 222,
          "end": 230,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 222,
            "end": 229,
            "arguments": [
              {
                "type": "Identifier",
                "start": 226,
                "end": 228,
                "decorators": [],
                "name": "z2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 235,
          "end": 270,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 241,
              "end": 269,
              "definite": false,
              "id": {
                "type": "ObjectPattern",
                "start": 241,
                "end": 253,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 242,
                    "end": 252,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 243,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectPattern",
                      "start": 245,
                      "end": 252,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 246,
                          "end": 251,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 247,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 251,
                            "decorators": [],
                            "name": "z3",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              },
              "init": {
                "type": "ObjectExpression",
                "start": 256,
                "end": 269,
                "properties": [
                  {
                    "type": "Property",
                    "start": 258,
                    "end": 267,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 261,
                      "end": 267,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 262,
                          "end": 266,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 263,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 265,
                            "end": 266,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "ExpressionStatement",
          "start": 275,
          "end": 283,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 275,
            "end": 282,
            "arguments": [
              {
                "type": "Identifier",
                "start": 279,
                "end": 281,
                "decorators": [],
                "name": "z3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 278,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 293,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 286,
        "end": 292,
        "arguments": [
          {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 286,
          "end": 289,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 302,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 294,
        "end": 301,
        "arguments": [
          {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "decorators": [],
            "name": "z0",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 294,
          "end": 297,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 311,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 303,
        "end": 310,
        "arguments": [
          {
            "type": "Identifier",
            "start": 307,
            "end": 309,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 303,
          "end": 306,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 320,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 312,
        "end": 319,
        "arguments": [
          {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 312,
          "end": 315,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 329,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 321,
        "end": 328,
        "arguments": [
          {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 321,
          "end": 324,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 336,
            "decorators": [],
            "name": "z6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 343,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 346,
            "end": 350,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "BlockStatement",
      "start": 352,
      "end": 521,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 358,
          "end": 371,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 364,
              "end": 370,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 364,
                "end": 365,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 368,
                "end": 370,
                "raw": "\"\"",
                "value": ""
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 376,
          "end": 395,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 382,
              "end": 395,
              "definite": false,
              "id": {
                "type": "ArrayPattern",
                "start": 382,
                "end": 386,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 383,
                    "end": 385,
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
                "start": 389,
                "end": 395,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 390,
                    "end": 394,
                    "raw": "true",
                    "value": true
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "BlockStatement",
          "start": 400,
          "end": 494,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 410,
              "end": 422,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 416,
                  "end": 421,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 420,
                    "end": 421,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "VariableDeclaration",
              "start": 431,
              "end": 455,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 437,
                  "end": 455,
                  "definite": false,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 437,
                    "end": 444,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 438,
                        "end": 443,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 439,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 443,
                          "decorators": [],
                          "name": "z6",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 447,
                    "end": 455,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 449,
                        "end": 453,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 450,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 452,
                          "end": 453,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 464,
              "end": 471,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 464,
                "end": 470,
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
                "callee": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 467,
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 480,
              "end": 488,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 480,
                "end": 487,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 484,
                    "end": 486,
                    "decorators": [],
                    "name": "z6",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 483,
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        {
          "type": "ExpressionStatement",
          "start": 499,
          "end": 506,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 499,
            "end": 505,
            "arguments": [
              {
                "type": "Identifier",
                "start": 503,
                "end": 504,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 499,
              "end": 502,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 511,
          "end": 519,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 511,
            "end": 518,
            "arguments": [
              {
                "type": "Identifier",
                "start": 515,
                "end": 517,
                "decorators": [],
                "name": "z6",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 511,
              "end": 514,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 522,
      "end": 529,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 522,
        "end": 528,
        "arguments": [
          {
            "type": "Identifier",
            "start": 526,
            "end": 527,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 522,
          "end": 525,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 530,
      "end": 538,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 530,
        "end": 537,
        "arguments": [
          {
            "type": "Identifier",
            "start": 534,
            "end": 536,
            "decorators": [],
            "name": "z6",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 530,
          "end": 533,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 540,
      "end": 554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 544,
          "end": 553,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 544,
            "end": 545,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 548,
            "end": 553,
            "raw": "false",
            "value": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 565,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 559,
            "end": 561,
            "decorators": [],
            "name": "z5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 564,
            "end": 565,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "BlockStatement",
      "start": 567,
      "end": 749,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 573,
          "end": 586,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 579,
              "end": 585,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 583,
                "end": 585,
                "raw": "\"\"",
                "value": ""
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "VariableDeclaration",
          "start": 591,
          "end": 608,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 597,
              "end": 607,
              "definite": false,
              "id": {
                "type": "ArrayPattern",
                "start": 597,
                "end": 601,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 598,
                    "end": 600,
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
                "start": 604,
                "end": 607,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 605,
                    "end": 606,
                    "raw": "5",
                    "value": 5
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        {
          "type": "BlockStatement",
          "start": 613,
          "end": 735,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 623,
              "end": 636,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 629,
                  "end": 635,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 631,
                    "decorators": [],
                    "name": "_z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 634,
                    "end": 635,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "VariableDeclaration",
              "start": 645,
              "end": 671,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 651,
                  "end": 670,
                  "definite": false,
                  "id": {
                    "type": "ObjectPattern",
                    "start": 651,
                    "end": 659,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 652,
                        "end": 658,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 652,
                          "end": 653,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 655,
                          "end": 658,
                          "decorators": [],
                          "name": "_z5",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 662,
                    "end": 670,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 664,
                        "end": 668,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 665,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 667,
                          "end": 668,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 721,
              "end": 729,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 721,
                "end": 728,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 725,
                    "end": 727,
                    "decorators": [],
                    "name": "_z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 721,
                  "end": 724,
                  "decorators": [],
                  "name": "use",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        {
          "type": "ExpressionStatement",
          "start": 740,
          "end": 747,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 740,
            "end": 746,
            "arguments": [
              {
                "type": "Identifier",
                "start": 744,
                "end": 745,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 740,
              "end": 743,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 750,
      "end": 757,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 750,
        "end": 756,
        "arguments": [
          {
            "type": "Identifier",
            "start": 754,
            "end": 755,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 750,
          "end": 753,
          "decorators": [],
          "name": "use",
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
