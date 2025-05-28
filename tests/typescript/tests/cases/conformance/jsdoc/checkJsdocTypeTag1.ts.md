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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 56,
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
            "value": "hello world",
            "raw": "\"hello world\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 92,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 91,
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
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 124,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 123,
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
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 140,
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
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 173,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 172,
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
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 187,
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
          "value": "hi",
          "raw": "\"hi\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 236,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 235,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 230,
              "end": 235,
              "left": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 234,
                "end": 235,
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
      "start": 237,
      "end": 242,
      "expression": {
        "type": "CallExpression",
        "start": 237,
        "end": 241,
        "callee": {
          "type": "Identifier",
          "start": 237,
          "end": 238,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 239,
            "end": 240,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 291,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 290,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 285,
              "end": 290,
              "left": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 289,
                "end": 290,
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
      "start": 292,
      "end": 297,
      "expression": {
        "type": "CallExpression",
        "start": 292,
        "end": 296,
        "callee": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 294,
            "end": 295,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 356,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 355,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 350,
              "end": 355,
              "left": {
                "type": "Identifier",
                "start": 350,
                "end": 351,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 354,
                "end": 355,
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
      "start": 357,
      "end": 363,
      "expression": {
        "type": "CallExpression",
        "start": 357,
        "end": 362,
        "callee": {
          "type": "Identifier",
          "start": 357,
          "end": 359,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 360,
            "end": 361,
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
      "start": 406,
      "end": 430,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 429,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 424,
              "end": 429,
              "left": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 428,
                "end": 429,
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
      "start": 431,
      "end": 437,
      "expression": {
        "type": "CallExpression",
        "start": 431,
        "end": 436,
        "callee": {
          "type": "Identifier",
          "start": 431,
          "end": 433,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 434,
            "end": 435,
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
      "start": 465,
      "end": 480,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 479,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 523,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 522,
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
