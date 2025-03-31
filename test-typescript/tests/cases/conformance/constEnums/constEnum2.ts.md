__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 353,
  "end": 519,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 364,
            "name": "CONST",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 367,
            "end": 375,
            "left": {
              "type": "Literal",
              "start": 367,
              "end": 371,
              "value": 9000,
              "raw": "9000"
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "start": 374,
              "end": 375,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 377,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 396,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 397,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 400,
            "end": 402,
            "value": 10,
            "raw": "10"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 408,
          "end": 450,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 412,
            "end": 450,
            "left": {
              "type": "Literal",
              "start": 412,
              "end": 415,
              "value": 199,
              "raw": "199"
            },
            "operator": "*",
            "right": {
              "type": "CallExpression",
              "start": 418,
              "end": 450,
              "callee": {
                "type": "MemberExpression",
                "start": 418,
                "end": 428,
                "object": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 422,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 428,
                  "name": "floor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 429,
                  "end": 449,
                  "left": {
                    "type": "CallExpression",
                    "start": 429,
                    "end": 442,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 429,
                      "end": 440,
                      "object": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 433,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 440,
                        "name": "random",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "start": 445,
                    "end": 449,
                    "value": 1000,
                    "raw": "1000"
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 456,
          "end": 501,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 457,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 460,
            "end": 501,
            "left": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "-",
            "right": {
              "type": "BinaryExpression",
              "start": 465,
              "end": 500,
              "left": {
                "type": "Literal",
                "start": 465,
                "end": 468,
                "value": 100,
                "raw": "100"
              },
              "operator": "*",
              "right": {
                "type": "CallExpression",
                "start": 471,
                "end": 500,
                "callee": {
                  "type": "MemberExpression",
                  "start": 471,
                  "end": 481,
                  "object": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 475,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 476,
                    "end": 481,
                    "name": "floor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 482,
                    "end": 499,
                    "left": {
                      "type": "CallExpression",
                      "start": 482,
                      "end": 495,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 482,
                        "end": 493,
                        "object": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 486,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 487,
                          "end": 493,
                          "name": "random",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": "%",
                    "right": {
                      "type": "Literal",
                      "start": 498,
                      "end": 499,
                      "value": 8,
                      "raw": "8"
                    }
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 507,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 511,
            "end": 516,
            "name": "CONST",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 390,
        "end": 519,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 396,
            "end": 402,
            "id": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 400,
              "end": 402,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 408,
            "end": 450,
            "id": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 412,
              "end": 450,
              "left": {
                "type": "Literal",
                "start": 412,
                "end": 415,
                "value": 199,
                "raw": "199"
              },
              "operator": "*",
              "right": {
                "type": "CallExpression",
                "start": 418,
                "end": 450,
                "callee": {
                  "type": "MemberExpression",
                  "start": 418,
                  "end": 428,
                  "object": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 422,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 428,
                    "name": "floor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 429,
                    "end": 449,
                    "left": {
                      "type": "CallExpression",
                      "start": 429,
                      "end": 442,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 429,
                        "end": 440,
                        "object": {
                          "type": "Identifier",
                          "start": 429,
                          "end": 433,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 434,
                          "end": 440,
                          "name": "random",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "start": 445,
                      "end": 449,
                      "value": 1000,
                      "raw": "1000"
                    }
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 456,
            "end": 501,
            "id": {
              "type": "Identifier",
              "start": 456,
              "end": 457,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 460,
              "end": 501,
              "left": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "-",
              "right": {
                "type": "BinaryExpression",
                "start": 465,
                "end": 500,
                "left": {
                  "type": "Literal",
                  "start": 465,
                  "end": 468,
                  "value": 100,
                  "raw": "100"
                },
                "operator": "*",
                "right": {
                  "type": "CallExpression",
                  "start": 471,
                  "end": 500,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 471,
                    "end": 481,
                    "object": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 475,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 481,
                      "name": "floor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 482,
                      "end": 499,
                      "left": {
                        "type": "CallExpression",
                        "start": 482,
                        "end": 495,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 482,
                          "end": 493,
                          "object": {
                            "type": "Identifier",
                            "start": 482,
                            "end": 486,
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 493,
                            "name": "random",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "%",
                      "right": {
                        "type": "Literal",
                        "start": 498,
                        "end": 499,
                        "value": 8,
                        "raw": "8"
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 507,
            "end": 516,
            "id": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 511,
              "end": 516,
              "name": "CONST",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
