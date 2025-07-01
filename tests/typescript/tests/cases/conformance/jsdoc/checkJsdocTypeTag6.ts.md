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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 48,
              "end": 49
            },
            "start": 41,
            "end": 49
          }
        ],
        "start": 35,
        "end": 51
      },
      "expression": false,
      "start": 22,
      "end": 51
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 90
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 107
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 109,
              "end": 112
            },
            "expression": false,
            "start": 93,
            "end": 112
          },
          "definite": false,
          "start": 89,
          "end": 112
        }
      ],
      "declare": false,
      "start": 85,
      "end": 112
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "add1",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 164
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
          "typeAnnotation": null,
          "start": 165,
          "end": 166
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 169
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 185
              },
              "start": 180,
              "end": 185
            },
            "start": 173,
            "end": 186
          }
        ],
        "start": 171,
        "end": 188
      },
      "expression": false,
      "start": 151,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "add2",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 251
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
          "typeAnnotation": null,
          "start": 252,
          "end": 253
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 256
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 272
              },
              "start": 267,
              "end": 272
            },
            "start": 260,
            "end": 273
          }
        ],
        "start": 258,
        "end": 275
      },
      "expression": false,
      "start": 238,
      "end": 275
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "add3",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
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
          "typeAnnotation": null,
          "start": 409,
          "end": 410
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 413
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "start": 424,
              "end": 429
            },
            "start": 417,
            "end": 430
          }
        ],
        "start": 415,
        "end": 432
      },
      "expression": false,
      "start": 395,
      "end": 432
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "funcWithMoreParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 568,
        "end": 590
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "more",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 595
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 597,
        "end": 599
      },
      "expression": false,
      "start": 559,
      "end": 599
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
            "name": "variableWithMoreParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 668
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "more",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 685
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 687,
              "end": 689
            },
            "expression": false,
            "start": 671,
            "end": 689
          },
          "definite": false,
          "start": 642,
          "end": 689
        }
      ],
      "declare": false,
      "start": 636,
      "end": 690
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
            "name": "arrowWithMoreParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 756
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "more",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 764
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 769,
              "end": 771
            },
            "id": null,
            "generator": false,
            "start": 759,
            "end": 771
          },
          "definite": false,
          "start": 733,
          "end": 771
        }
      ],
      "declare": false,
      "start": 727,
      "end": 772
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodWithMoreParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 840
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "more",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 845
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 847,
                "end": 849
              },
              "expression": false,
              "start": 840,
              "end": 849
            },
            "method": true,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 816,
            "end": 849
          }
        ],
        "start": 784,
        "end": 861
      },
      "directive": null,
      "start": 783,
      "end": 863
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 863
}
```
