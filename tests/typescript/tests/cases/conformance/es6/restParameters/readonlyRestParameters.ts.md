__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 496,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f0",
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
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            }
          }
        },
        {
          "type": "Identifier",
          "start": 23,
          "end": 32,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 26,
              "end": 32
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 34,
        "end": 79,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 40,
            "end": 49,
            "expression": {
              "type": "CallExpression",
              "start": 40,
              "end": 48,
              "callee": {
                "type": "Identifier",
                "start": 40,
                "end": 42,
                "decorators": [],
                "name": "f0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "b",
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
            "start": 54,
            "end": 63,
            "expression": {
              "type": "CallExpression",
              "start": 54,
              "end": 62,
              "callee": {
                "type": "Identifier",
                "start": 54,
                "end": 56,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "b",
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
            "start": 68,
            "end": 77,
            "expression": {
              "type": "CallExpression",
              "start": 68,
              "end": 76,
              "callee": {
                "type": "Identifier",
                "start": 68,
                "end": 70,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
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
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 81,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 92,
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
          "type": "RestElement",
          "start": 93,
          "end": 119,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 96,
            "end": 100,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 119,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 102,
              "end": 119,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 111,
                "end": 119,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 111,
                  "end": 117
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 214,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 127,
            "end": 139,
            "expression": {
              "type": "CallExpression",
              "start": 127,
              "end": 138,
              "callee": {
                "type": "Identifier",
                "start": 127,
                "end": 129,
                "decorators": [],
                "name": "f0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 130,
                  "end": 137,
                  "argument": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 137,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 171,
            "expression": {
              "type": "CallExpression",
              "start": 154,
              "end": 170,
              "callee": {
                "type": "Identifier",
                "start": 154,
                "end": 156,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 157,
                  "end": 162,
                  "value": "abc",
                  "raw": "'abc'"
                },
                {
                  "type": "Literal",
                  "start": 164,
                  "end": 169,
                  "value": "def",
                  "raw": "'def'"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 176,
            "end": 195,
            "expression": {
              "type": "CallExpression",
              "start": 176,
              "end": 194,
              "callee": {
                "type": "Identifier",
                "start": 176,
                "end": 178,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 179,
                  "end": 184,
                  "value": "abc",
                  "raw": "'abc'"
                },
                {
                  "type": "SpreadElement",
                  "start": 186,
                  "end": 193,
                  "argument": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 193,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 200,
            "end": 212,
            "expression": {
              "type": "CallExpression",
              "start": 200,
              "end": 211,
              "callee": {
                "type": "Identifier",
                "start": 200,
                "end": 202,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 203,
                  "end": 210,
                  "argument": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 210,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 216,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 227,
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
          "type": "RestElement",
          "start": 228,
          "end": 262,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 231,
            "end": 235,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 262,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 237,
              "end": 262,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 246,
                "end": 262,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 247,
                    "end": 253
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 255,
                    "end": 261
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 420,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 270,
            "end": 282,
            "expression": {
              "type": "CallExpression",
              "start": 270,
              "end": 281,
              "callee": {
                "type": "Identifier",
                "start": 270,
                "end": 272,
                "decorators": [],
                "name": "f0",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 273,
                  "end": 280,
                  "argument": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 280,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 287,
            "end": 304,
            "expression": {
              "type": "CallExpression",
              "start": 287,
              "end": 303,
              "callee": {
                "type": "Identifier",
                "start": 287,
                "end": 289,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 290,
                  "end": 295,
                  "value": "abc",
                  "raw": "'abc'"
                },
                {
                  "type": "Literal",
                  "start": 297,
                  "end": 302,
                  "value": "def",
                  "raw": "'def'"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 309,
            "end": 328,
            "expression": {
              "type": "CallExpression",
              "start": 309,
              "end": 327,
              "callee": {
                "type": "Identifier",
                "start": 309,
                "end": 311,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 312,
                  "end": 317,
                  "value": "abc",
                  "raw": "'abc'"
                },
                {
                  "type": "SpreadElement",
                  "start": 319,
                  "end": 326,
                  "argument": {
                    "type": "Identifier",
                    "start": 322,
                    "end": 326,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 333,
            "end": 345,
            "expression": {
              "type": "CallExpression",
              "start": 333,
              "end": 344,
              "callee": {
                "type": "Identifier",
                "start": 333,
                "end": 335,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 336,
                  "end": 343,
                  "argument": {
                    "type": "Identifier",
                    "start": 339,
                    "end": 343,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 350,
            "end": 367,
            "expression": {
              "type": "CallExpression",
              "start": 350,
              "end": 366,
              "callee": {
                "type": "Identifier",
                "start": 350,
                "end": 352,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 353,
                  "end": 358,
                  "value": "abc",
                  "raw": "'abc'"
                },
                {
                  "type": "Literal",
                  "start": 360,
                  "end": 365,
                  "value": "def",
                  "raw": "'def'"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 372,
            "end": 391,
            "expression": {
              "type": "CallExpression",
              "start": 372,
              "end": 390,
              "callee": {
                "type": "Identifier",
                "start": 372,
                "end": 374,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 375,
                  "end": 380,
                  "value": "abc",
                  "raw": "'abc'"
                },
                {
                  "type": "SpreadElement",
                  "start": 382,
                  "end": 389,
                  "argument": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 389,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 406,
            "end": 418,
            "expression": {
              "type": "CallExpression",
              "start": 406,
              "end": 417,
              "callee": {
                "type": "Identifier",
                "start": 406,
                "end": 408,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 409,
                  "end": 416,
                  "argument": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 416,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 422,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 433,
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
          "type": "RestElement",
          "start": 434,
          "end": 460,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 437,
            "end": 441,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 441,
            "end": 460,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 443,
              "end": 460,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 452,
                "end": 460,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 452,
                  "end": 458
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 462,
        "end": 496,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 468,
            "end": 484,
            "expression": {
              "type": "AssignmentExpression",
              "start": 468,
              "end": 483,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 468,
                "end": 475,
                "object": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 472,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 473,
                  "end": 474,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 478,
                "end": 483,
                "value": "abc",
                "raw": "'abc'"
              }
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
