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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 364,
            "decorators": [],
            "name": "CONST",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 367,
            "end": 375,
            "operator": "%",
            "left": {
              "type": "Literal",
              "start": 367,
              "end": 371,
              "raw": "9000",
              "value": 9000
            },
            "right": {
              "type": "Literal",
              "start": 374,
              "end": 375,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 377,
      "end": 519,
      "body": {
        "type": "TSEnumBody",
        "start": 390,
        "end": 519,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 396,
            "end": 402,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 400,
              "end": 402,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "TSEnumMember",
            "start": 408,
            "end": 450,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 412,
              "end": 450,
              "operator": "*",
              "left": {
                "type": "Literal",
                "start": 412,
                "end": 415,
                "raw": "199",
                "value": 199
              },
              "right": {
                "type": "CallExpression",
                "start": 418,
                "end": 450,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 429,
                    "end": 449,
                    "operator": "*",
                    "left": {
                      "type": "CallExpression",
                      "start": 429,
                      "end": 442,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 429,
                        "end": 440,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 429,
                          "end": 433,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 434,
                          "end": 440,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 445,
                      "end": 449,
                      "raw": "1000",
                      "value": 1000
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 418,
                  "end": 428,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 422,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 428,
                    "decorators": [],
                    "name": "floor",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 456,
            "end": 501,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 456,
              "end": 457,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 460,
              "end": 501,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 465,
                "end": 500,
                "operator": "*",
                "left": {
                  "type": "Literal",
                  "start": 465,
                  "end": 468,
                  "raw": "100",
                  "value": 100
                },
                "right": {
                  "type": "CallExpression",
                  "start": 471,
                  "end": 500,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 482,
                      "end": 499,
                      "operator": "%",
                      "left": {
                        "type": "CallExpression",
                        "start": 482,
                        "end": 495,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 482,
                          "end": 493,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 482,
                            "end": 486,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 487,
                            "end": 493,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 498,
                        "end": 499,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 471,
                    "end": 481,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 475,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 481,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 507,
            "end": 516,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 511,
              "end": 516,
              "decorators": [],
              "name": "CONST",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
