__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "CONST",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 340
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 9000,
              "raw": "9000",
              "start": 343,
              "end": 347
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 350,
              "end": 351
            },
            "start": 343,
            "end": 351
          },
          "definite": false,
          "start": 335,
          "end": 351
        }
      ],
      "declare": false,
      "start": 329,
      "end": 352
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 365
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 373
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 376,
              "end": 378
            },
            "computed": false,
            "start": 372,
            "end": 378
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 385
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 199,
                "raw": "199",
                "start": 388,
                "end": 391
              },
              "operator": "*",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 398
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "floor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 404
                  },
                  "optional": false,
                  "computed": false,
                  "start": 394,
                  "end": 404
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 409
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 416
                        },
                        "optional": false,
                        "computed": false,
                        "start": 405,
                        "end": 416
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 405,
                      "end": 418
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000",
                      "start": 421,
                      "end": 425
                    },
                    "start": 405,
                    "end": 425
                  }
                ],
                "optional": false,
                "start": 394,
                "end": 426
              },
              "start": 388,
              "end": 426
            },
            "computed": false,
            "start": 384,
            "end": 426
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 433
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 437
              },
              "operator": "-",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 441,
                  "end": 444
                },
                "operator": "*",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 451
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 452,
                      "end": 457
                    },
                    "optional": false,
                    "computed": false,
                    "start": 447,
                    "end": 457
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 462
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 469
                          },
                          "optional": false,
                          "computed": false,
                          "start": 458,
                          "end": 469
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 458,
                        "end": 471
                      },
                      "operator": "%",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 474,
                        "end": 475
                      },
                      "start": 458,
                      "end": 475
                    }
                  ],
                  "optional": false,
                  "start": 447,
                  "end": 476
                },
                "start": 441,
                "end": 476
              },
              "start": 436,
              "end": 477
            },
            "computed": false,
            "start": 432,
            "end": 477
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 484
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "CONST",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 492
            },
            "computed": false,
            "start": 483,
            "end": 492
          }
        ],
        "start": 366,
        "end": 495
      },
      "const": true,
      "declare": false,
      "start": 353,
      "end": 495
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 329,
  "end": 495
}
```
