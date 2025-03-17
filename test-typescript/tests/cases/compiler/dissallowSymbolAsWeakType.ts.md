__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 314,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 15,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 9,
                "end": 15
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 29,
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 24,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 25,
                "end": 28,
                "value": "s",
                "raw": "'s'"
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
      "start": 32,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "name": "ws",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 43,
            "end": 59,
            "callee": {
              "type": "Identifier",
              "start": 47,
              "end": 54,
              "name": "WeakSet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 71,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 70,
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 67,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "name": "ws",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 67,
            "name": "add",
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
            "start": 68,
            "end": 69,
            "name": "s",
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
      "start": 72,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 72,
        "end": 81,
        "callee": {
          "type": "MemberExpression",
          "start": 72,
          "end": 78,
          "object": {
            "type": "Identifier",
            "start": 72,
            "end": 74,
            "name": "ws",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "name": "has",
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
            "start": 79,
            "end": 80,
            "name": "s",
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
      "start": 83,
      "end": 96,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 95,
        "callee": {
          "type": "MemberExpression",
          "start": 83,
          "end": 92,
          "object": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "name": "ws",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 92,
            "name": "delete",
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
            "start": 93,
            "end": 94,
            "name": "s",
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
      "start": 98,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "name": "wm",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 109,
            "end": 134,
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 120,
              "name": "WeakMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Literal",
                        "start": 126,
                        "end": 131,
                        "value": false,
                        "raw": "false"
                      }
                    ]
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 152,
      "expression": {
        "type": "CallExpression",
        "start": 136,
        "end": 151,
        "callee": {
          "type": "MemberExpression",
          "start": 136,
          "end": 142,
          "object": {
            "type": "Identifier",
            "start": 136,
            "end": 138,
            "name": "wm",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 139,
            "end": 142,
            "name": "set",
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
            "start": 143,
            "end": 144,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 146,
            "end": 150,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 163,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 162,
        "callee": {
          "type": "MemberExpression",
          "start": 153,
          "end": 159,
          "object": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "name": "wm",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 156,
            "end": 159,
            "name": "has",
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
            "start": 160,
            "end": 161,
            "name": "s",
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
      "start": 164,
      "end": 174,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 173,
        "callee": {
          "type": "MemberExpression",
          "start": 164,
          "end": 170,
          "object": {
            "type": "Identifier",
            "start": 164,
            "end": 166,
            "name": "wm",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 170,
            "name": "get",
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
            "start": 171,
            "end": 172,
            "name": "s",
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
      "start": 175,
      "end": 188,
      "expression": {
        "type": "CallExpression",
        "start": 175,
        "end": 187,
        "callee": {
          "type": "MemberExpression",
          "start": 175,
          "end": 184,
          "object": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "name": "wm",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 184,
            "name": "delete",
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
            "start": 185,
            "end": 186,
            "name": "s",
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
      "start": 190,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "name": "wr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 201,
            "end": 215,
            "callee": {
              "type": "Identifier",
              "start": 205,
              "end": 212,
              "name": "WeakRef",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 213,
                "end": 214,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 217,
        "end": 227,
        "callee": {
          "type": "MemberExpression",
          "start": 217,
          "end": 225,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "name": "wr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 225,
            "name": "deref",
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
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 240,
            "end": 274,
            "callee": {
              "type": "Identifier",
              "start": 244,
              "end": 264,
              "name": "FinalizationRegistry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 265,
                "end": 273,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 271,
                  "end": 273,
                  "body": []
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 296,
      "expression": {
        "type": "CallExpression",
        "start": 276,
        "end": 295,
        "callee": {
          "type": "MemberExpression",
          "start": 276,
          "end": 286,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 278,
            "end": 286,
            "name": "register",
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
            "start": 287,
            "end": 288,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Literal",
            "start": 290,
            "end": 294,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 313,
      "expression": {
        "type": "CallExpression",
        "start": 297,
        "end": 312,
        "callee": {
          "type": "MemberExpression",
          "start": 297,
          "end": 309,
          "object": {
            "type": "Identifier",
            "start": 297,
            "end": 298,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 299,
            "end": 309,
            "name": "unregister",
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
            "start": 310,
            "end": 311,
            "name": "s",
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
