__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 523,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 56,
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
            "end": 56,
            "raw": "\"hello world\"",
            "value": "hello world",
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
      "start": 81,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 89,
            "end": 91,
            "raw": "10",
            "value": 10,
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
      "start": 111,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 119,
            "decorators": [],
            "name": "anyT",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 122,
            "end": 123,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 140,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 125,
        "end": 139,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 125,
          "end": 129,
          "decorators": [],
          "name": "anyT",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 132,
          "end": 139,
          "raw": "\"hello\"",
          "value": "hello",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 168,
            "decorators": [],
            "name": "anyT1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 171,
            "end": 172,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 187,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 174,
        "end": 186,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 174,
          "end": 179,
          "decorators": [],
          "name": "anyT1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 182,
          "end": 186,
          "raw": "\"hi\"",
          "value": "hi",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 223,
            "end": 235,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 230,
              "end": 235,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 234,
                "end": 235,
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
                "start": 224,
                "end": 225,
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
      "start": 237,
      "end": 242,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 237,
        "end": 241,
        "arguments": [
          {
            "type": "Literal",
            "start": 239,
            "end": 240,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 237,
          "end": 238,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 290,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 278,
            "end": 290,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 285,
              "end": 290,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 289,
                "end": 290,
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
                "start": 279,
                "end": 280,
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
      "start": 292,
      "end": 297,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 292,
        "end": 296,
        "arguments": [
          {
            "type": "Literal",
            "start": 294,
            "end": 295,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 343,
            "end": 355,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 350,
              "end": 355,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 350,
                "end": 351,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 354,
                "end": 355,
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
                "start": 344,
                "end": 345,
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
      "start": 357,
      "end": 363,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 357,
        "end": 362,
        "arguments": [
          {
            "type": "Literal",
            "start": 360,
            "end": 361,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 357,
          "end": 359,
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
      "start": 406,
      "end": 430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 414,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 417,
            "end": 429,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 424,
              "end": 429,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 428,
                "end": 429,
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
                "start": 418,
                "end": 419,
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
      "start": 431,
      "end": 437,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 431,
        "end": 436,
        "arguments": [
          {
            "type": "Literal",
            "start": 434,
            "end": 435,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 431,
          "end": 433,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 465,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 479,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 474,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 477,
            "end": 479,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 522,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 517,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 520,
            "end": 522,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
