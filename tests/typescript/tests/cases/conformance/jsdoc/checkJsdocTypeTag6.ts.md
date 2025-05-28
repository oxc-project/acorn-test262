__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 863,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 51,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 41,
            "end": 49,
            "argument": {
              "type": "Literal",
              "start": 48,
              "end": 49,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 112,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 93,
            "end": 112,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 103,
                "end": 107,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 109,
              "end": 112,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 151,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 164,
        "decorators": [],
        "name": "add1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 171,
        "end": 188,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 173,
            "end": 186,
            "argument": {
              "type": "BinaryExpression",
              "start": 180,
              "end": 185,
              "left": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 238,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 251,
        "decorators": [],
        "name": "add2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 252,
          "end": 253,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 255,
          "end": 256,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 275,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 260,
            "end": 273,
            "argument": {
              "type": "BinaryExpression",
              "start": 267,
              "end": 272,
              "left": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 395,
      "end": 432,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "decorators": [],
        "name": "add3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 409,
          "end": 410,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 412,
          "end": 413,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 415,
        "end": 432,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 417,
            "end": 430,
            "argument": {
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
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 559,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 590,
        "decorators": [],
        "name": "funcWithMoreParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 591,
          "end": 595,
          "decorators": [],
          "name": "more",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 597,
        "end": 599,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 636,
      "end": 690,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 642,
          "end": 689,
          "id": {
            "type": "Identifier",
            "start": 642,
            "end": 668,
            "decorators": [],
            "name": "variableWithMoreParameters",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 671,
            "end": 689,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 681,
                "end": 685,
                "decorators": [],
                "name": "more",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 687,
              "end": 689,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 727,
      "end": 772,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 733,
          "end": 771,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 756,
            "decorators": [],
            "name": "arrowWithMoreParameters",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 759,
            "end": 771,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 760,
                "end": 764,
                "decorators": [],
                "name": "more",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 769,
              "end": 771,
              "body": []
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
      "start": 783,
      "end": 863,
      "expression": {
        "type": "ObjectExpression",
        "start": 784,
        "end": 861,
        "properties": [
          {
            "type": "Property",
            "start": 816,
            "end": 849,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 816,
              "end": 840,
              "decorators": [],
              "name": "methodWithMoreParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 840,
              "end": 849,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 841,
                  "end": 845,
                  "decorators": [],
                  "name": "more",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 847,
                "end": 849,
                "body": []
              },
              "expression": false
            },
            "method": true,
            "shorthand": false,
            "computed": false,
            "optional": false
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
