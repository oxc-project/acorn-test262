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
        "name": "use",
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
          "start": 34,
          "end": 40,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 40,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 37,
              "end": 40
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 62,
            "name": "z0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "z1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "z2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "z3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 92,
                "end": 94,
                "value": 20,
                "raw": "20"
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 100,
          "end": 107,
          "expression": {
            "type": "CallExpression",
            "start": 100,
            "end": 106,
            "callee": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
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
              "id": {
                "type": "ArrayPattern",
                "start": 119,
                "end": 123,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 120,
                    "end": 122,
                    "name": "z0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
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
                    "value": 1,
                    "raw": "1"
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 135,
          "end": 143,
          "expression": {
            "type": "CallExpression",
            "start": 135,
            "end": 142,
            "callee": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 141,
                "name": "z0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
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
              "id": {
                "type": "ArrayPattern",
                "start": 154,
                "end": 163,
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "start": 155,
                    "end": 162,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 156,
                        "end": 161,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 161,
                          "name": "z1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 171,
                          "end": 172,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 179,
          "end": 187,
          "expression": {
            "type": "CallExpression",
            "start": 179,
            "end": 186,
            "callee": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 183,
                "end": 185,
                "name": "z1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
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
              "id": {
                "type": "ObjectPattern",
                "start": 198,
                "end": 205,
                "properties": [
                  {
                    "type": "Property",
                    "start": 199,
                    "end": 204,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 204,
                      "name": "z2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 213,
                      "end": 214,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 222,
          "end": 230,
          "expression": {
            "type": "CallExpression",
            "start": 222,
            "end": 229,
            "callee": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 226,
                "end": 228,
                "name": "z2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
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
              "id": {
                "type": "ObjectPattern",
                "start": 241,
                "end": 253,
                "properties": [
                  {
                    "type": "Property",
                    "start": 242,
                    "end": 252,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 243,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 245,
                      "end": 252,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 246,
                          "end": 251,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 247,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 251,
                            "name": "z3",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 261,
                      "end": 267,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 262,
                          "end": 266,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 263,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 265,
                            "end": 266,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 275,
          "end": 283,
          "expression": {
            "type": "CallExpression",
            "start": 275,
            "end": 282,
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 278,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 279,
                "end": 281,
                "name": "z3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 293,
      "expression": {
        "type": "CallExpression",
        "start": 286,
        "end": 292,
        "callee": {
          "type": "Identifier",
          "start": 286,
          "end": 289,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 302,
      "expression": {
        "type": "CallExpression",
        "start": 294,
        "end": 301,
        "callee": {
          "type": "Identifier",
          "start": 294,
          "end": 297,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "name": "z0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 311,
      "expression": {
        "type": "CallExpression",
        "start": 303,
        "end": 310,
        "callee": {
          "type": "Identifier",
          "start": 303,
          "end": 306,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 307,
            "end": 309,
            "name": "z1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 320,
      "expression": {
        "type": "CallExpression",
        "start": 312,
        "end": 319,
        "callee": {
          "type": "Identifier",
          "start": 312,
          "end": 315,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 316,
            "end": 318,
            "name": "z2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 329,
      "expression": {
        "type": "CallExpression",
        "start": 321,
        "end": 328,
        "callee": {
          "type": "Identifier",
          "start": 321,
          "end": 324,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "z3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 336,
            "name": "z6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 343,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 346,
            "end": 350,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 364,
                "end": 365,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 368,
                "end": 370,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
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
              "id": {
                "type": "ArrayPattern",
                "start": 382,
                "end": 386,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 383,
                    "end": 385,
                    "name": "z6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
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
                    "value": true,
                    "raw": "true"
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
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
                  "id": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 420,
                    "end": 421,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
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
                  "id": {
                    "type": "ObjectPattern",
                    "start": 437,
                    "end": 444,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 438,
                        "end": 443,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 439,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 443,
                          "name": "z6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 450,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 452,
                          "end": 453,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "const",
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
                  "name": "use",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 468,
                    "end": 469,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 480,
              "end": 488,
              "expression": {
                "type": "CallExpression",
                "start": 480,
                "end": 487,
                "callee": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 483,
                  "name": "use",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 484,
                    "end": 486,
                    "name": "z6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        {
          "type": "ExpressionStatement",
          "start": 499,
          "end": 506,
          "expression": {
            "type": "CallExpression",
            "start": 499,
            "end": 505,
            "callee": {
              "type": "Identifier",
              "start": 499,
              "end": 502,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 503,
                "end": 504,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 511,
          "end": 519,
          "expression": {
            "type": "CallExpression",
            "start": 511,
            "end": 518,
            "callee": {
              "type": "Identifier",
              "start": 511,
              "end": 514,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 515,
                "end": 517,
                "name": "z6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 522,
      "end": 529,
      "expression": {
        "type": "CallExpression",
        "start": 522,
        "end": 528,
        "callee": {
          "type": "Identifier",
          "start": 522,
          "end": 525,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 526,
            "end": 527,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 530,
      "end": 538,
      "expression": {
        "type": "CallExpression",
        "start": 530,
        "end": 537,
        "callee": {
          "type": "Identifier",
          "start": 530,
          "end": 533,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 534,
            "end": 536,
            "name": "z6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 544,
            "end": 545,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 548,
            "end": 553,
            "value": false,
            "raw": "false"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 559,
            "end": 561,
            "name": "z5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 564,
            "end": 565,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 583,
                "end": 585,
                "value": "",
                "raw": "\"\""
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
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
              "id": {
                "type": "ArrayPattern",
                "start": 597,
                "end": 601,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 598,
                    "end": 600,
                    "name": "z5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
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
                    "value": 5,
                    "raw": "5"
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
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
                  "id": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 631,
                    "name": "_z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 634,
                    "end": 635,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
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
                  "id": {
                    "type": "ObjectPattern",
                    "start": 651,
                    "end": 659,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 652,
                        "end": 658,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 652,
                          "end": 653,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 655,
                          "end": 658,
                          "name": "_z5",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 665,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 667,
                          "end": 668,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 721,
              "end": 729,
              "expression": {
                "type": "CallExpression",
                "start": 721,
                "end": 728,
                "callee": {
                  "type": "Identifier",
                  "start": 721,
                  "end": 724,
                  "name": "use",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 725,
                    "end": 727,
                    "name": "_z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        {
          "type": "ExpressionStatement",
          "start": 740,
          "end": 747,
          "expression": {
            "type": "CallExpression",
            "start": 740,
            "end": 746,
            "callee": {
              "type": "Identifier",
              "start": 740,
              "end": 743,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 744,
                "end": 745,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "directive": null
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 750,
      "end": 757,
      "expression": {
        "type": "CallExpression",
        "start": 750,
        "end": 756,
        "callee": {
          "type": "Identifier",
          "start": 750,
          "end": 753,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 754,
            "end": 755,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
