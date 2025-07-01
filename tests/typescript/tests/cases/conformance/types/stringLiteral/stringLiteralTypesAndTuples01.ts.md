__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "hello",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 36
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "brave",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 43
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "newish",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 51
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "world",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 58
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 59
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "Hello",
                "raw": "\"Hello\"",
                "start": 63,
                "end": 70
              },
              {
                "type": "Literal",
                "value": "Brave",
                "raw": "\"Brave\"",
                "start": 72,
                "end": 79
              },
              {
                "type": "Literal",
                "value": "New",
                "raw": "\"New\"",
                "start": 81,
                "end": 86
              },
              {
                "type": "Literal",
                "value": "World",
                "raw": "\"World\"",
                "start": 88,
                "end": 95
              }
            ],
            "start": 62,
            "end": 96
          },
          "definite": false,
          "start": 30,
          "end": 96
        }
      ],
      "declare": false,
      "start": 26,
      "end": 97
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RexOrRaptor",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 115
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "t-rex",
              "raw": "\"t-rex\"",
              "start": 118,
              "end": 125
            },
            "start": 118,
            "end": 125
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "raptor",
              "raw": "\"raptor\"",
              "start": 128,
              "end": 136
            },
            "start": 128,
            "end": 136
          }
        ],
        "start": 118,
        "end": 136
      },
      "declare": false,
      "start": 99,
      "end": 136
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "im",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 144
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dinosaur",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 157
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "I'm",
                      "raw": "\"I'm\"",
                      "start": 161,
                      "end": 166
                    },
                    "start": 161,
                    "end": 166
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 168,
                      "end": 171
                    },
                    "start": 168,
                    "end": 171
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RexOrRaptor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 184
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 184
                  }
                ],
                "start": 160,
                "end": 185
              },
              "start": 158,
              "end": 185
            },
            "start": 141,
            "end": 185
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "I'm",
                "raw": "'I\\'m'",
                "start": 189,
                "end": 195
              },
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 197,
                "end": 200
              },
              {
                "type": "Literal",
                "value": "t-rex",
                "raw": "'t-rex'",
                "start": 202,
                "end": 209
              }
            ],
            "start": 188,
            "end": 210
          },
          "definite": false,
          "start": 141,
          "end": 210
        }
      ],
      "declare": false,
      "start": 137,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rawr",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 217
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "dinosaur",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 226
          }
        ],
        "optional": false,
        "start": 213,
        "end": 227
      },
      "directive": null,
      "start": 213,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rawr",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 243
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "dino",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RexOrRaptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 261
              },
              "typeArguments": null,
              "start": 250,
              "end": 261
            },
            "start": 248,
            "end": 261
          },
          "start": 244,
          "end": 261
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 277
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "t-rex",
                "raw": "\"t-rex\"",
                "start": 282,
                "end": 289
              },
              "start": 273,
              "end": 289
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "ROAAAAR!",
                    "raw": "\"ROAAAAR!\"",
                    "start": 308,
                    "end": 318
                  },
                  "start": 301,
                  "end": 319
                }
              ],
              "start": 291,
              "end": 325
            },
            "alternate": null,
            "start": 269,
            "end": 325
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 338
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "raptor",
                "raw": "\"raptor\"",
                "start": 343,
                "end": 351
              },
              "start": 334,
              "end": 351
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "yip yip!",
                    "raw": "\"yip yip!\"",
                    "start": 370,
                    "end": 380
                  },
                  "start": 363,
                  "end": 381
                }
              ],
              "start": 353,
              "end": 387
            },
            "alternate": null,
            "start": 330,
            "end": 387
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "Unexpected ",
                "raw": "\"Unexpected \"",
                "start": 399,
                "end": 412
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "dino",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 419
              },
              "start": 399,
              "end": 419
            },
            "start": 393,
            "end": 420
          }
        ],
        "start": 263,
        "end": 422
      },
      "expression": false,
      "start": 230,
      "end": 422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 422
}
```
