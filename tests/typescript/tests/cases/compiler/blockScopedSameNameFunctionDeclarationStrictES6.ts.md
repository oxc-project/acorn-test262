__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 30,
              "end": 36
            },
            "start": 28,
            "end": 36
          },
          "start": 27,
          "end": 36
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 54,
                "end": 56
              },
              "start": 48,
              "end": 56
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 80
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 83,
                    "end": 86
                  },
                  "expression": false,
                  "start": 68,
                  "end": 86
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 98
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 95,
                    "end": 100
                  },
                  "directive": null,
                  "start": 95,
                  "end": 101
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 113
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 114,
                        "end": 116
                      }
                    ],
                    "optional": false,
                    "start": 110,
                    "end": 117
                  },
                  "directive": null,
                  "start": 110,
                  "end": 118
                }
              ],
              "start": 58,
              "end": 134
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 166
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 169,
                    "end": 172
                  },
                  "expression": false,
                  "start": 154,
                  "end": 172
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 185
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 182,
                    "end": 187
                  },
                  "directive": null,
                  "start": 182,
                  "end": 188
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 200
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 201,
                        "end": 203
                      }
                    ],
                    "optional": false,
                    "start": 197,
                    "end": 204
                  },
                  "directive": null,
                  "start": 197,
                  "end": 205
                }
              ],
              "start": 144,
              "end": 221
            },
            "start": 44,
            "end": 221
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 229
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 230,
                  "end": 232
                }
              ],
              "optional": false,
              "start": 226,
              "end": 233
            },
            "directive": null,
            "start": 226,
            "end": 234
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 242
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 239,
              "end": 244
            },
            "directive": null,
            "start": 239,
            "end": 245
          }
        ],
        "start": 38,
        "end": 257
      },
      "expression": false,
      "start": 14,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 261
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 262,
            "end": 264
          }
        ],
        "optional": false,
        "start": 258,
        "end": 265
      },
      "directive": null,
      "start": 258,
      "end": 266
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 270
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 267,
        "end": 272
      },
      "directive": null,
      "start": 267,
      "end": 273
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 298
}
```
