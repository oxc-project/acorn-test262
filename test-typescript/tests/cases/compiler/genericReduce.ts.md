__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 686,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 40,
            "elements": [
              {
                "type": "Literal",
                "start": 9,
                "end": 13,
                "value": "An",
                "raw": "\"An\""
              },
              {
                "type": "Literal",
                "start": 15,
                "end": 22,
                "value": "array",
                "raw": "\"array\""
              },
              {
                "type": "Literal",
                "start": 24,
                "end": 28,
                "value": "of",
                "raw": "\"of\""
              },
              {
                "type": "Literal",
                "start": 30,
                "end": 39,
                "value": "strings",
                "raw": "\"strings\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 70,
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 55,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 55,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 56,
                "end": 69,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 61,
                  "end": 69,
                  "object": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 69,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "name": "n1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 106,
            "callee": {
              "type": "MemberExpression",
              "start": 81,
              "end": 89,
              "object": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "name": "reduce",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 90,
                "end": 105,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 100,
                  "end": 105,
                  "left": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 114,
            "name": "n2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 117,
            "end": 147,
            "callee": {
              "type": "MemberExpression",
              "start": 117,
              "end": 130,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 119,
                "end": 130,
                "name": "reduceRight",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 131,
                "end": 146,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 141,
                  "end": 146,
                  "left": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 150,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 150,
          "end": 154,
          "object": {
            "type": "Identifier",
            "start": 150,
            "end": 152,
            "name": "n1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 157,
          "end": 163,
          "value": "fail",
          "raw": "\"fail\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 252,
      "expression": {
        "type": "CallExpression",
        "start": 232,
        "end": 251,
        "callee": {
          "type": "MemberExpression",
          "start": 232,
          "end": 248,
          "object": {
            "type": "Identifier",
            "start": 232,
            "end": 234,
            "name": "n1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 248,
            "name": "toExponential",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 249,
            "end": 250,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 316,
      "expression": {
        "type": "AssignmentExpression",
        "start": 302,
        "end": 315,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 302,
          "end": 306,
          "object": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "name": "n2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 309,
          "end": 315,
          "value": "fail",
          "raw": "\"fail\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 404,
      "expression": {
        "type": "CallExpression",
        "start": 384,
        "end": 403,
        "callee": {
          "type": "MemberExpression",
          "start": 384,
          "end": 400,
          "object": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "name": "n2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 387,
            "end": 400,
            "name": "toExponential",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 401,
            "end": 402,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 455,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 461,
            "name": "n3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 464,
            "end": 502,
            "callee": {
              "type": "MemberExpression",
              "start": 464,
              "end": 472,
              "object": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 466,
                "end": 472,
                "name": "reduce",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 482,
                "end": 497,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 486,
                    "end": 487,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 492,
                  "end": 497,
                  "left": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 493,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 497,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 499,
                "end": 501,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 472,
              "end": 480,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 473,
                  "end": 479
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 539,
      "end": 559,
      "expression": {
        "type": "CallExpression",
        "start": 539,
        "end": 558,
        "callee": {
          "type": "MemberExpression",
          "start": 539,
          "end": 555,
          "object": {
            "type": "Identifier",
            "start": 539,
            "end": 541,
            "name": "n3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 542,
            "end": 555,
            "name": "toExponential",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 556,
            "end": 557,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 611,
      "end": 624,
      "expression": {
        "type": "CallExpression",
        "start": 611,
        "end": 623,
        "callee": {
          "type": "MemberExpression",
          "start": 611,
          "end": 620,
          "object": {
            "type": "Identifier",
            "start": 611,
            "end": 613,
            "name": "n3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 614,
            "end": 620,
            "name": "charAt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 621,
            "end": 622,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
