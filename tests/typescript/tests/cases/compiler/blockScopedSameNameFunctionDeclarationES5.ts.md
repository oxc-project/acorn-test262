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
                "value": 1,
                "raw": "1",
                "start": 40,
                "end": 41
              },
              "start": 34,
              "end": 41
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
                    "start": 62,
                    "end": 65
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
                    "start": 68,
                    "end": 71
                  },
                  "expression": false,
                  "start": 53,
                  "end": 71
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
                      "start": 102,
                      "end": 105
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 102,
                    "end": 107
                  },
                  "directive": null,
                  "start": 102,
                  "end": 108
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
                      "start": 118,
                      "end": 121
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 122,
                        "end": 124
                      }
                    ],
                    "optional": false,
                    "start": 118,
                    "end": 125
                  },
                  "directive": null,
                  "start": 118,
                  "end": 126
                }
              ],
              "start": 43,
              "end": 142
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
                    "start": 171,
                    "end": 174
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
                    "start": 177,
                    "end": 180
                  },
                  "expression": false,
                  "start": 162,
                  "end": 180
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
                      "start": 211,
                      "end": 214
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 211,
                    "end": 216
                  },
                  "directive": null,
                  "start": 211,
                  "end": 217
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
                      "start": 227,
                      "end": 230
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 231,
                        "end": 233
                      }
                    ],
                    "optional": false,
                    "start": 227,
                    "end": 234
                  },
                  "directive": null,
                  "start": 227,
                  "end": 235
                }
              ],
              "start": 152,
              "end": 251
            },
            "start": 30,
            "end": 251
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
                "start": 256,
                "end": 259
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 260,
                  "end": 262
                }
              ],
              "optional": false,
              "start": 256,
              "end": 263
            },
            "directive": null,
            "start": 256,
            "end": 264
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
                "start": 279,
                "end": 282
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 279,
              "end": 284
            },
            "directive": null,
            "start": 279,
            "end": 285
          }
        ],
        "start": 24,
        "end": 288
      },
      "expression": false,
      "start": 0,
      "end": 288
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
          "start": 289,
          "end": 292
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 293,
            "end": 295
          }
        ],
        "optional": false,
        "start": 289,
        "end": 296
      },
      "directive": null,
      "start": 289,
      "end": 297
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
          "start": 298,
          "end": 301
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 298,
        "end": 303
      },
      "directive": null,
      "start": 298,
      "end": 304
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 329
}
```
