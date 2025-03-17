__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 526,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 39,
        "name": "hoisting",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 257,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 48,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 52,
                "end": 54,
                "id": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "name": "a0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 62,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 58,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 61,
                  "end": 62,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 68,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 81,
              "end": 112,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 91,
                  "end": 106,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 95,
                      "end": 97,
                      "id": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 97,
                        "name": "b0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 99,
                      "end": 105,
                      "id": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 101,
                        "name": "b1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 104,
                        "end": 105,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "IfStatement",
            "start": 118,
            "end": 159,
            "test": {
              "type": "Literal",
              "start": 122,
              "end": 126,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 128,
              "end": 159,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 138,
                  "end": 153,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 142,
                      "end": 144,
                      "id": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 144,
                        "name": "c0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 146,
                      "end": 152,
                      "id": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 148,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 151,
                        "end": 152,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ForStatement",
            "start": 165,
            "end": 193,
            "init": {
              "type": "VariableDeclaration",
              "start": 170,
              "end": 179,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 174,
                  "end": 179,
                  "id": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 178,
                    "end": 179,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "test": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 185,
              "end": 193,
              "body": []
            }
          },
          {
            "type": "ForInStatement",
            "start": 199,
            "end": 224,
            "left": {
              "type": "VariableDeclaration",
              "start": 204,
              "end": 209,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 208,
                  "end": 209,
                  "id": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 216,
              "end": 224,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 230,
            "end": 255,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 235,
              "end": 240,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 239,
                  "end": 240,
                  "id": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 247,
              "end": 255,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 259,
      "end": 524,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 291,
        "name": "hoistingWithAwait",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 294,
        "end": 524,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 300,
            "end": 315,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 304,
                "end": 306,
                "id": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "name": "a0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 308,
                "end": 314,
                "id": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 310,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 313,
                  "end": 314,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 321,
            "end": 365,
            "id": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 334,
              "end": 365,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 344,
                  "end": 359,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 348,
                      "end": 350,
                      "id": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 350,
                        "name": "b0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 352,
                      "end": 358,
                      "id": {
                        "type": "Identifier",
                        "start": 352,
                        "end": 354,
                        "name": "b1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 357,
                        "end": 358,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExpressionStatement",
            "start": 371,
            "end": 379,
            "expression": {
              "type": "AwaitExpression",
              "start": 371,
              "end": 378,
              "argument": {
                "type": "Literal",
                "start": 377,
                "end": 378,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 385,
            "end": 426,
            "test": {
              "type": "Literal",
              "start": 389,
              "end": 393,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 395,
              "end": 426,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 405,
                  "end": 420,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 409,
                      "end": 411,
                      "id": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 411,
                        "name": "c0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    },
                    {
                      "type": "VariableDeclarator",
                      "start": 413,
                      "end": 419,
                      "id": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 415,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 418,
                        "end": 419,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ForStatement",
            "start": 432,
            "end": 460,
            "init": {
              "type": "VariableDeclaration",
              "start": 437,
              "end": 446,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 441,
                  "end": 446,
                  "id": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 445,
                    "end": 446,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "test": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 452,
              "end": 460,
              "body": []
            }
          },
          {
            "type": "ForInStatement",
            "start": 466,
            "end": 491,
            "left": {
              "type": "VariableDeclaration",
              "start": 471,
              "end": 476,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 475,
                  "end": 476,
                  "id": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 476,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 480,
              "end": 481,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 483,
              "end": 491,
              "body": []
            }
          },
          {
            "type": "ForOfStatement",
            "start": 497,
            "end": 522,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 502,
              "end": 507,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 506,
                  "end": 507,
                  "id": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 507,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 511,
              "end": 512,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 514,
              "end": 522,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
