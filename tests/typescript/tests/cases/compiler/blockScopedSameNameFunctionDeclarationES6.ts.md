__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "start": 16,
              "end": 22
            },
            "start": 14,
            "end": 22
          },
          "start": 13,
          "end": 22
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
                "start": 34,
                "end": 35
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 40,
                "end": 42
              },
              "start": 34,
              "end": 42
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
                    "start": 63,
                    "end": 66
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
                    "start": 69,
                    "end": 72
                  },
                  "expression": false,
                  "start": 54,
                  "end": 72
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
                      "start": 94,
                      "end": 97
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 94,
                    "end": 99
                  },
                  "directive": null,
                  "start": 94,
                  "end": 100
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
                      "start": 109,
                      "end": 112
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 113,
                        "end": 115
                      }
                    ],
                    "optional": false,
                    "start": 109,
                    "end": 116
                  },
                  "directive": null,
                  "start": 109,
                  "end": 117
                }
              ],
              "start": 44,
              "end": 133
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
                    "start": 162,
                    "end": 165
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
                    "start": 168,
                    "end": 171
                  },
                  "expression": false,
                  "start": 153,
                  "end": 171
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
                      "start": 193,
                      "end": 196
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 193,
                    "end": 198
                  },
                  "directive": null,
                  "start": 193,
                  "end": 199
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
                      "start": 208,
                      "end": 211
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 212,
                        "end": 214
                      }
                    ],
                    "optional": false,
                    "start": 208,
                    "end": 215
                  },
                  "directive": null,
                  "start": 208,
                  "end": 216
                }
              ],
              "start": 143,
              "end": 231
            },
            "start": 30,
            "end": 231
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
                "start": 236,
                "end": 239
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 240,
                  "end": 242
                }
              ],
              "optional": false,
              "start": 236,
              "end": 243
            },
            "directive": null,
            "start": 236,
            "end": 244
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
                "start": 259,
                "end": 262
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 259,
              "end": 264
            },
            "directive": null,
            "start": 259,
            "end": 265
          }
        ],
        "start": 24,
        "end": 268
      },
      "expression": false,
      "start": 0,
      "end": 268
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
          "start": 269,
          "end": 272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 273,
            "end": 275
          }
        ],
        "optional": false,
        "start": 269,
        "end": 276
      },
      "directive": null,
      "start": 269,
      "end": 277
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
          "start": 278,
          "end": 281
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 278,
        "end": 283
      },
      "directive": null,
      "start": 278,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 309
}
```
