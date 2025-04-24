__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 329,
  "end": 495,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 351,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 340,
            "decorators": [],
            "name": "CONST",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 343,
            "end": 351,
            "operator": "%",
            "left": {
              "type": "Literal",
              "start": 343,
              "end": 347,
              "raw": "9000",
              "value": 9000
            },
            "right": {
              "type": "Literal",
              "start": 350,
              "end": 351,
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
      "start": 353,
      "end": 495,
      "body": {
        "type": "TSEnumBody",
        "start": 366,
        "end": 495,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 372,
            "end": 378,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 376,
              "end": 378,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "TSEnumMember",
            "start": 384,
            "end": 426,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 384,
              "end": 385,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 388,
              "end": 426,
              "operator": "*",
              "left": {
                "type": "Literal",
                "start": 388,
                "end": 391,
                "raw": "199",
                "value": 199
              },
              "right": {
                "type": "CallExpression",
                "start": 394,
                "end": 426,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 405,
                    "end": 425,
                    "operator": "*",
                    "left": {
                      "type": "CallExpression",
                      "start": 405,
                      "end": 418,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 405,
                        "end": 416,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 409,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 416,
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
                      "start": 421,
                      "end": 425,
                      "raw": "1000",
                      "value": 1000
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 394,
                  "end": 404,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 398,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 404,
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
            "start": 432,
            "end": 477,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 432,
              "end": 433,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 436,
              "end": 477,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 441,
                "end": 476,
                "operator": "*",
                "left": {
                  "type": "Literal",
                  "start": 441,
                  "end": 444,
                  "raw": "100",
                  "value": 100
                },
                "right": {
                  "type": "CallExpression",
                  "start": 447,
                  "end": 476,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 458,
                      "end": 475,
                      "operator": "%",
                      "left": {
                        "type": "CallExpression",
                        "start": 458,
                        "end": 471,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 458,
                          "end": 469,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 462,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 469,
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
                        "start": 474,
                        "end": 475,
                        "raw": "8",
                        "value": 8
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 447,
                    "end": 457,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 451,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 457,
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
            "start": 483,
            "end": 492,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 487,
              "end": 492,
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
        "start": 364,
        "end": 365,
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
