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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 351,
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
            "left": {
              "type": "Literal",
              "start": 343,
              "end": 347,
              "value": 9000,
              "raw": "9000"
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "start": 350,
              "end": 351,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 353,
      "end": 495,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 365,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 366,
        "end": 495,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 372,
            "end": 378,
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
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 384,
            "end": 426,
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
              "left": {
                "type": "Literal",
                "start": 388,
                "end": 391,
                "value": 199,
                "raw": "199"
              },
              "operator": "*",
              "right": {
                "type": "CallExpression",
                "start": 394,
                "end": 426,
                "callee": {
                  "type": "MemberExpression",
                  "start": 394,
                  "end": 404,
                  "object": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 398,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 404,
                    "decorators": [],
                    "name": "floor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "start": 405,
                    "end": 425,
                    "left": {
                      "type": "CallExpression",
                      "start": 405,
                      "end": 418,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 405,
                        "end": 416,
                        "object": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 409,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 416,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "start": 421,
                      "end": 425,
                      "value": 1000,
                      "raw": "1000"
                    }
                  }
                ],
                "optional": false
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 432,
            "end": 477,
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
              "left": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "right": {
                "type": "BinaryExpression",
                "start": 441,
                "end": 476,
                "left": {
                  "type": "Literal",
                  "start": 441,
                  "end": 444,
                  "value": 100,
                  "raw": "100"
                },
                "operator": "*",
                "right": {
                  "type": "CallExpression",
                  "start": 447,
                  "end": 476,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 447,
                    "end": 457,
                    "object": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 451,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 457,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 458,
                      "end": 475,
                      "left": {
                        "type": "CallExpression",
                        "start": 458,
                        "end": 471,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 458,
                          "end": 469,
                          "object": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 462,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 463,
                            "end": 469,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "operator": "%",
                      "right": {
                        "type": "Literal",
                        "start": 474,
                        "end": 475,
                        "value": 8,
                        "raw": "8"
                      }
                    }
                  ],
                  "optional": false
                }
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 483,
            "end": 492,
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
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
