__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 15,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 9,
                "end": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 29,
            "arguments": [
              {
                "type": "Literal",
                "start": 25,
                "end": 28,
                "raw": "'s'",
                "value": "s"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 24,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "ws",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 43,
            "end": 59,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 55,
                "end": 58,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "decorators": [],
              "name": "WeakSet",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 71,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 70,
        "arguments": [
          {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 67,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "decorators": [],
            "name": "ws",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 67,
            "decorators": [],
            "name": "add",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 72,
        "end": 81,
        "arguments": [
          {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 72,
          "end": 78,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 74,
            "decorators": [],
            "name": "ws",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "has",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 96,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 95,
        "arguments": [
          {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 83,
          "end": 92,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "decorators": [],
            "name": "ws",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 92,
            "decorators": [],
            "name": "delete",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "decorators": [],
            "name": "wm",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 109,
            "end": 134,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 121,
                "end": 133,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 122,
                    "end": 132,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      },
                      {
                        "type": "Literal",
                        "start": 126,
                        "end": 131,
                        "raw": "false",
                        "value": false
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 120,
              "decorators": [],
              "name": "WeakMap",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 152,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 151,
        "arguments": [
          {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          {
            "type": "Literal",
            "start": 146,
            "end": 150,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 136,
          "end": 142,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 136,
            "end": 138,
            "decorators": [],
            "name": "wm",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 139,
            "end": 142,
            "decorators": [],
            "name": "set",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 163,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 162,
        "arguments": [
          {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 153,
          "end": 159,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "decorators": [],
            "name": "wm",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 156,
            "end": 159,
            "decorators": [],
            "name": "has",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 174,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 173,
        "arguments": [
          {
            "type": "Identifier",
            "start": 171,
            "end": 172,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 164,
          "end": 170,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 164,
            "end": 166,
            "decorators": [],
            "name": "wm",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 170,
            "decorators": [],
            "name": "get",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 175,
        "end": 187,
        "arguments": [
          {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 175,
          "end": 184,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "decorators": [],
            "name": "wm",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 184,
            "decorators": [],
            "name": "delete",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "decorators": [],
            "name": "wr",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 201,
            "end": 215,
            "arguments": [
              {
                "type": "Identifier",
                "start": 213,
                "end": 214,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 205,
              "end": 212,
              "decorators": [],
              "name": "WeakRef",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 217,
        "end": 227,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 217,
          "end": 225,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "decorators": [],
            "name": "wr",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 225,
            "decorators": [],
            "name": "deref",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 240,
            "end": 274,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 265,
                "end": 273,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 271,
                  "end": 273,
                  "body": []
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 244,
              "end": 264,
              "decorators": [],
              "name": "FinalizationRegistry",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 296,
      "expression": {
        "type": "CallExpression",
        "start": 276,
        "end": 295,
        "arguments": [
          {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          {
            "type": "Literal",
            "start": 290,
            "end": 294,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 276,
          "end": 286,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 278,
            "end": 286,
            "decorators": [],
            "name": "register",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 313,
      "expression": {
        "type": "CallExpression",
        "start": 297,
        "end": 312,
        "arguments": [
          {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "decorators": [],
            "name": "s",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 297,
          "end": 309,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 297,
            "end": 298,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 299,
            "end": 309,
            "decorators": [],
            "name": "unregister",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
