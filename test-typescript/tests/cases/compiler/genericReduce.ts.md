genericReduce.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
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
                "raw": "\"An\"",
                "value": "An"
              },
              {
                "type": "Literal",
                "start": 15,
                "end": 22,
                "raw": "\"array\"",
                "value": "array"
              },
              {
                "type": "Literal",
                "start": 24,
                "end": 28,
                "raw": "\"of\"",
                "value": "of"
              },
              {
                "type": "Literal",
                "start": 30,
                "end": 39,
                "raw": "\"strings\"",
                "value": "strings"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 70,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 56,
                "end": 69,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 61,
                  "end": 69,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 69,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 55,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 55,
                "decorators": [],
                "name": "map",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "n1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 106,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 90,
                "end": 105,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 100,
                  "end": 105,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 81,
              "end": 89,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 89,
                "decorators": [],
                "name": "reduce",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 114,
            "decorators": [],
            "name": "n2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 117,
            "end": 147,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 131,
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
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 117,
              "end": 130,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 119,
                "end": 130,
                "decorators": [],
                "name": "reduceRight",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 150,
            "end": 152,
            "decorators": [],
            "name": "n1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 157,
          "end": 163,
          "raw": "\"fail\"",
          "value": "fail"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 252,
      "expression": {
        "type": "CallExpression",
        "start": 232,
        "end": 251,
        "arguments": [
          {
            "type": "Literal",
            "start": 249,
            "end": 250,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 232,
          "end": 248,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 232,
            "end": 234,
            "decorators": [],
            "name": "n1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 235,
            "end": 248,
            "decorators": [],
            "name": "toExponential",
            "optional": false
          }
        },
        "optional": false
      }
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "decorators": [],
            "name": "n2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 309,
          "end": 315,
          "raw": "\"fail\"",
          "value": "fail"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 404,
      "expression": {
        "type": "CallExpression",
        "start": 384,
        "end": 403,
        "arguments": [
          {
            "type": "Literal",
            "start": 401,
            "end": 402,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 384,
          "end": 400,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "decorators": [],
            "name": "n2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 387,
            "end": 400,
            "decorators": [],
            "name": "toExponential",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 461,
            "decorators": [],
            "name": "n3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 464,
            "end": 502,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 482,
                "end": 497,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 492,
                  "end": 497,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 493,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 497,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 486,
                    "end": 487,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 499,
                "end": 501,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 464,
              "end": 472,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 466,
                "end": 472,
                "decorators": [],
                "name": "reduce",
                "optional": false
              }
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 539,
      "end": 559,
      "expression": {
        "type": "CallExpression",
        "start": 539,
        "end": 558,
        "arguments": [
          {
            "type": "Literal",
            "start": 556,
            "end": 557,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 539,
          "end": 555,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 539,
            "end": 541,
            "decorators": [],
            "name": "n3",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 542,
            "end": 555,
            "decorators": [],
            "name": "toExponential",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 611,
      "end": 624,
      "expression": {
        "type": "CallExpression",
        "start": 611,
        "end": 623,
        "arguments": [
          {
            "type": "Literal",
            "start": 621,
            "end": 622,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 611,
          "end": 620,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 611,
            "end": 613,
            "decorators": [],
            "name": "n3",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 614,
            "end": 620,
            "decorators": [],
            "name": "charAt",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
