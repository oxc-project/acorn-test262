__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 24
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "'s'",
                "start": 25,
                "end": 28
              }
            ],
            "optional": false,
            "start": 18,
            "end": 29
          },
          "definite": false,
          "start": 6,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ws",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 40
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakSet",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 55,
                "end": 58
              }
            ],
            "start": 43,
            "end": 59
          },
          "definite": false,
          "start": 38,
          "end": 59
        }
      ],
      "declare": false,
      "start": 32,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ws",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 67
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 67
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          }
        ],
        "optional": false,
        "start": 61,
        "end": 70
      },
      "directive": null,
      "start": 61,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ws",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 74
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "has",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 78
          },
          "optional": false,
          "computed": false,
          "start": 72,
          "end": 78
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          }
        ],
        "optional": false,
        "start": 72,
        "end": 81
      },
      "directive": null,
      "start": 72,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ws",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "delete",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 92
          },
          "optional": false,
          "computed": false,
          "start": 83,
          "end": 92
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          }
        ],
        "optional": false,
        "start": 83,
        "end": 95
      },
      "directive": null,
      "start": 83,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wm",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 106
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 120
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 124
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 126,
                        "end": 131
                      }
                    ],
                    "start": 122,
                    "end": 132
                  }
                ],
                "start": 121,
                "end": 133
              }
            ],
            "start": 109,
            "end": 134
          },
          "definite": false,
          "start": 104,
          "end": 134
        }
      ],
      "declare": false,
      "start": 98,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wm",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 138
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "set",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 142
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 142
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 144
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 146,
            "end": 150
          }
        ],
        "optional": false,
        "start": 136,
        "end": 151
      },
      "directive": null,
      "start": 136,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wm",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 155
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "has",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 159
          },
          "optional": false,
          "computed": false,
          "start": 153,
          "end": 159
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 161
          }
        ],
        "optional": false,
        "start": 153,
        "end": 162
      },
      "directive": null,
      "start": 153,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wm",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 166
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 170
          },
          "optional": false,
          "computed": false,
          "start": 164,
          "end": 170
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 172
          }
        ],
        "optional": false,
        "start": 164,
        "end": 173
      },
      "directive": null,
      "start": 164,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wm",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 177
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "delete",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 184
          },
          "optional": false,
          "computed": false,
          "start": 175,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
          }
        ],
        "optional": false,
        "start": 175,
        "end": 187
      },
      "directive": null,
      "start": 175,
      "end": 188
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wr",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 198
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "WeakRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 212
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 214
              }
            ],
            "start": 201,
            "end": 215
          },
          "definite": false,
          "start": 196,
          "end": 215
        }
      ],
      "declare": false,
      "start": 190,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wr",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "deref",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 225
          },
          "optional": false,
          "computed": false,
          "start": 217,
          "end": 225
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 217,
        "end": 227
      },
      "directive": null,
      "start": 217,
      "end": 228
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 237
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "FinalizationRegistry",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 264
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 271,
                  "end": 273
                },
                "id": null,
                "generator": false,
                "start": 265,
                "end": 273
              }
            ],
            "start": 240,
            "end": 274
          },
          "definite": false,
          "start": 236,
          "end": 274
        }
      ],
      "declare": false,
      "start": 230,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 277
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "register",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 286
          },
          "optional": false,
          "computed": false,
          "start": 276,
          "end": 286
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 290,
            "end": 294
          }
        ],
        "optional": false,
        "start": 276,
        "end": 295
      },
      "directive": null,
      "start": 276,
      "end": 296
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 298
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "unregister",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 309
          },
          "optional": false,
          "computed": false,
          "start": 297,
          "end": 309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 311
          }
        ],
        "optional": false,
        "start": 297,
        "end": 312
      },
      "directive": null,
      "start": 297,
      "end": 313
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 313
}
```
