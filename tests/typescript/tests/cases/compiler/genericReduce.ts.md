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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "An",
                "raw": "\"An\"",
                "start": 9,
                "end": 13
              },
              {
                "type": "Literal",
                "value": "array",
                "raw": "\"array\"",
                "start": 15,
                "end": 22
              },
              {
                "type": "Literal",
                "value": "of",
                "raw": "\"of\"",
                "start": 24,
                "end": 28
              },
              {
                "type": "Literal",
                "value": "strings",
                "raw": "\"strings\"",
                "start": 30,
                "end": 39
              }
            ],
            "start": 8,
            "end": 40
          },
          "definite": false,
          "start": 4,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 51
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 55
              },
              "optional": false,
              "computed": false,
              "start": 50,
              "end": 55
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 62
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 69
                  },
                  "optional": false,
                  "computed": false,
                  "start": 61,
                  "end": 69
                },
                "id": null,
                "generator": false,
                "start": 56,
                "end": 69
              }
            ],
            "optional": false,
            "start": 50,
            "end": 70
          },
          "definite": false,
          "start": 46,
          "end": 70
        }
      ],
      "declare": false,
      "start": 42,
      "end": 71
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 82
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 81,
              "end": 89
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 92
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 105
                  },
                  "start": 100,
                  "end": 105
                },
                "id": null,
                "generator": false,
                "start": 90,
                "end": 105
              }
            ],
            "optional": false,
            "start": 81,
            "end": 106
          },
          "definite": false,
          "start": 76,
          "end": 106
        }
      ],
      "declare": false,
      "start": 72,
      "end": 107
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 114
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduceRight",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 130
              },
              "optional": false,
              "computed": false,
              "start": 117,
              "end": 130
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 133
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 142
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  },
                  "start": 141,
                  "end": 146
                },
                "id": null,
                "generator": false,
                "start": 131,
                "end": 146
              }
            ],
            "optional": false,
            "start": 117,
            "end": 147
          },
          "definite": false,
          "start": 112,
          "end": 147
        }
      ],
      "declare": false,
      "start": 108,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 152
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 154
          },
          "optional": false,
          "computed": false,
          "start": 150,
          "end": 154
        },
        "right": {
          "type": "Literal",
          "value": "fail",
          "raw": "\"fail\"",
          "start": 157,
          "end": 163
        },
        "start": 150,
        "end": 163
      },
      "directive": null,
      "start": 150,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 234
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 248
          },
          "optional": false,
          "computed": false,
          "start": 232,
          "end": 248
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 249,
            "end": 250
          }
        ],
        "optional": false,
        "start": 232,
        "end": 251
      },
      "directive": null,
      "start": 232,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 304
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 306
          },
          "optional": false,
          "computed": false,
          "start": 302,
          "end": 306
        },
        "right": {
          "type": "Literal",
          "value": "fail",
          "raw": "\"fail\"",
          "start": 309,
          "end": 315
        },
        "start": 302,
        "end": 315
      },
      "directive": null,
      "start": 302,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 386
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 400
          },
          "optional": false,
          "computed": false,
          "start": 384,
          "end": 400
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 401,
            "end": 402
          }
        ],
        "optional": false,
        "start": 384,
        "end": 403
      },
      "directive": null,
      "start": 384,
      "end": 404
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
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 461
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 472
              },
              "optional": false,
              "computed": false,
              "start": 464,
              "end": 472
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 473,
                  "end": 479
                }
              ],
              "start": 472,
              "end": 480
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 484
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 486,
                    "end": 487
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 493
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 496,
                    "end": 497
                  },
                  "start": 492,
                  "end": 497
                },
                "id": null,
                "generator": false,
                "start": 482,
                "end": 497
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 499,
                "end": 501
              }
            ],
            "optional": false,
            "start": 464,
            "end": 502
          },
          "definite": false,
          "start": 459,
          "end": 502
        }
      ],
      "declare": false,
      "start": 455,
      "end": 503
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 541
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 555
          },
          "optional": false,
          "computed": false,
          "start": 539,
          "end": 555
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 556,
            "end": 557
          }
        ],
        "optional": false,
        "start": 539,
        "end": 558
      },
      "directive": null,
      "start": 539,
      "end": 559
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 613
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "charAt",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 620
          },
          "optional": false,
          "computed": false,
          "start": 611,
          "end": 620
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 621,
            "end": 622
          }
        ],
        "optional": false,
        "start": 611,
        "end": 623
      },
      "directive": null,
      "start": 611,
      "end": 624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 686
}
```
