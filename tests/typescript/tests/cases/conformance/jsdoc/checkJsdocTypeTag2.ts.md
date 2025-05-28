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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 47,
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
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 88,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 87,
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
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 147,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 146,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 141,
              "end": 146,
              "left": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 145,
                "end": 146,
                "value": 1,
                "raw": "1"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 161,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 160,
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 150,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 151,
            "end": 159,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 228,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 227,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 222,
              "end": 227,
              "left": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 226,
                "end": 227,
                "value": 1,
                "raw": "1"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 269,
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
          "callee": {
            "type": "Identifier",
            "start": 263,
            "end": 265,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 266,
              "end": 267,
              "value": 0,
              "raw": "0"
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 345,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 344,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "CallExpression",
              "start": 330,
              "end": 344,
              "callee": {
                "type": "MemberExpression",
                "start": 330,
                "end": 338,
                "object": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 338,
                  "decorators": [],
                  "name": "concat",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 339,
                  "end": 343,
                  "value": "hi",
                  "raw": "\"hi\""
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 352,
      "expression": {
        "type": "CallExpression",
        "start": 346,
        "end": 351,
        "callee": {
          "type": "Identifier",
          "start": 346,
          "end": 348,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 349,
            "end": 350,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 419,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 418,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 413,
              "end": 418,
              "left": {
                "type": "Identifier",
                "start": 413,
                "end": 414,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 417,
                "end": 418,
                "value": 1,
                "raw": "1"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 420,
      "end": 426,
      "expression": {
        "type": "CallExpression",
        "start": 420,
        "end": 425,
        "callee": {
          "type": "Identifier",
          "start": 420,
          "end": 422,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 423,
            "end": 424,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
