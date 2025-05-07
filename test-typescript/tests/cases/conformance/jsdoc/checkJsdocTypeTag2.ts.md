__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 426,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 43,
            "end": 47,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 87,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 131,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 134,
            "end": 146,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 141,
              "end": 146,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 145,
                "end": 146,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 161,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 160,
        "arguments": [
          {
            "type": "Literal",
            "start": 151,
            "end": 159,
            "raw": "\"string\"",
            "value": "string",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 150,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 212,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 215,
            "end": 227,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 222,
              "end": 227,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 226,
                "end": 227,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 269,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 259,
        "end": 268,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 259,
          "end": 260,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 263,
          "end": 268,
          "arguments": [
            {
              "type": "Literal",
              "start": 266,
              "end": 267,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 263,
            "end": 265,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 320,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 323,
            "end": 344,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 330,
              "end": 344,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 339,
                  "end": 343,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 330,
                "end": 338,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 338,
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 324,
                "end": 325,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 352,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 346,
        "end": 351,
        "arguments": [
          {
            "type": "Literal",
            "start": 349,
            "end": 350,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 346,
          "end": 348,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 406,
            "end": 418,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 413,
              "end": 418,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 413,
                "end": 414,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 417,
                "end": 418,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 407,
                "end": 408,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 420,
      "end": 426,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 420,
        "end": 425,
        "arguments": [
          {
            "type": "Literal",
            "start": 423,
            "end": 424,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 420,
          "end": 422,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
