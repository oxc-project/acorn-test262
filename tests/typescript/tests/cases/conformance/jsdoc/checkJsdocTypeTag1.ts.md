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
            "value": "hello world",
            "raw": "\"hello world\"",
            "start": 43,
            "end": 56
          },
          "definite": false,
          "start": 39,
          "end": 56
        }
      ],
      "declare": false,
      "start": 35,
      "end": 57
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
            "start": 85,
            "end": 86
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 89,
            "end": 91
          },
          "definite": false,
          "start": 85,
          "end": 91
        }
      ],
      "declare": false,
      "start": 81,
      "end": 92
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
            "name": "anyT",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 119
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 122,
            "end": 123
          },
          "definite": false,
          "start": 115,
          "end": 123
        }
      ],
      "declare": false,
      "start": 111,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyT",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 129
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 132,
          "end": 139
        },
        "start": 125,
        "end": 139
      },
      "directive": null,
      "start": 125,
      "end": 140
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
            "name": "anyT1",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 168
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 171,
            "end": 172
          },
          "definite": false,
          "start": 163,
          "end": 172
        }
      ],
      "declare": false,
      "start": 159,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyT1",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 179
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "\"hi\"",
          "start": 182,
          "end": 186
        },
        "start": 174,
        "end": 186
      },
      "directive": null,
      "start": 174,
      "end": 187
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 220
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
                "start": 224,
                "end": 225
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
                "start": 230,
                "end": 231
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 234,
                "end": 235
              },
              "start": 230,
              "end": 235
            },
            "id": null,
            "generator": false,
            "start": 223,
            "end": 235
          },
          "definite": false,
          "start": 219,
          "end": 235
        }
      ],
      "declare": false,
      "start": 213,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 239,
            "end": 240
          }
        ],
        "optional": false,
        "start": 237,
        "end": 241
      },
      "directive": null,
      "start": 237,
      "end": 242
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 275
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
                "start": 279,
                "end": 280
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
                "start": 285,
                "end": 286
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 289,
                "end": 290
              },
              "start": 285,
              "end": 290
            },
            "id": null,
            "generator": false,
            "start": 278,
            "end": 290
          },
          "definite": false,
          "start": 274,
          "end": 290
        }
      ],
      "declare": false,
      "start": 268,
      "end": 291
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 294,
            "end": 295
          }
        ],
        "optional": false,
        "start": 292,
        "end": 296
      },
      "directive": null,
      "start": 292,
      "end": 297
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
            "start": 338,
            "end": 340
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
                "start": 344,
                "end": 345
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
                "start": 350,
                "end": 351
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 354,
                "end": 355
              },
              "start": 350,
              "end": 355
            },
            "id": null,
            "generator": false,
            "start": 343,
            "end": 355
          },
          "definite": false,
          "start": 338,
          "end": 355
        }
      ],
      "declare": false,
      "start": 332,
      "end": 356
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
          "start": 357,
          "end": 359
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 360,
            "end": 361
          }
        ],
        "optional": false,
        "start": 357,
        "end": 362
      },
      "directive": null,
      "start": 357,
      "end": 363
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
            "start": 412,
            "end": 414
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
                "start": 418,
                "end": 419
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
                "start": 424,
                "end": 425
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 428,
                "end": 429
              },
              "start": 424,
              "end": 429
            },
            "id": null,
            "generator": false,
            "start": 417,
            "end": 429
          },
          "definite": false,
          "start": 412,
          "end": 429
        }
      ],
      "declare": false,
      "start": 406,
      "end": 430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 433
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 434,
            "end": 435
          }
        ],
        "optional": false,
        "start": 431,
        "end": 436
      },
      "directive": null,
      "start": 431,
      "end": 437
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
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 474
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 477,
            "end": 479
          },
          "definite": false,
          "start": 469,
          "end": 479
        }
      ],
      "declare": false,
      "start": 465,
      "end": 480
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
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 517
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 520,
            "end": 522
          },
          "definite": false,
          "start": 512,
          "end": 522
        }
      ],
      "declare": false,
      "start": 508,
      "end": 523
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 523
}
```
