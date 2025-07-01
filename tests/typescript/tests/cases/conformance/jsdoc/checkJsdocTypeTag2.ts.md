__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 43,
            "end": 47
          },
          "definite": false,
          "start": 39,
          "end": 47
        }
      ],
      "declare": false,
      "start": 35,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 80,
            "end": 87
          },
          "definite": false,
          "start": 76,
          "end": 87
        }
      ],
      "declare": false,
      "start": 72,
      "end": 88
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 131
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 145,
                "end": 146
              },
              "start": 141,
              "end": 146
            },
            "id": null,
            "generator": false,
            "start": 134,
            "end": 146
          },
          "definite": false,
          "start": 129,
          "end": 146
        }
      ],
      "declare": false,
      "start": 123,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 150
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 151,
            "end": 159
          }
        ],
        "optional": false,
        "start": 148,
        "end": 160
      },
      "directive": null,
      "start": 148,
      "end": 161
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 212
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 226,
                "end": 227
              },
              "start": 222,
              "end": 227
            },
            "id": null,
            "generator": false,
            "start": 215,
            "end": 227
          },
          "definite": false,
          "start": 210,
          "end": 227
        }
      ],
      "declare": false,
      "start": 204,
      "end": 228
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 257
          },
          "init": null,
          "definite": false,
          "start": 256,
          "end": 257
        }
      ],
      "declare": false,
      "start": 252,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 260
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 265
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 266,
              "end": 267
            }
          ],
          "optional": false,
          "start": 263,
          "end": 268
        },
        "start": 259,
        "end": 268
      },
      "directive": null,
      "start": 259,
      "end": 269
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 320
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 325
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 331
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 338
                },
                "optional": false,
                "computed": false,
                "start": 330,
                "end": 338
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 339,
                  "end": 343
                }
              ],
              "optional": false,
              "start": 330,
              "end": 344
            },
            "id": null,
            "generator": false,
            "start": 323,
            "end": 344
          },
          "definite": false,
          "start": 318,
          "end": 344
        }
      ],
      "declare": false,
      "start": 312,
      "end": 345
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 348
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 349,
            "end": 350
          }
        ],
        "optional": false,
        "start": 346,
        "end": 351
      },
      "directive": null,
      "start": 346,
      "end": 352
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 403
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 414
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 417,
                "end": 418
              },
              "start": 413,
              "end": 418
            },
            "id": null,
            "generator": false,
            "start": 406,
            "end": 418
          },
          "definite": false,
          "start": 401,
          "end": 418
        }
      ],
      "declare": false,
      "start": 395,
      "end": 419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 422
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 423,
            "end": 424
          }
        ],
        "optional": false,
        "start": 420,
        "end": 425
      },
      "directive": null,
      "start": 420,
      "end": 426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 426
}
```
