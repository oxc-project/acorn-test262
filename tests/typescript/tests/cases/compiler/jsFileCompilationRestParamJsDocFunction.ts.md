__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 373,
  "end": 760,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 373,
      "end": 737,
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 387,
        "decorators": [],
        "name": "apply",
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
          "start": 388,
          "end": 392,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 394,
          "end": 401,
          "decorators": [],
          "name": "thisArg",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "RestElement",
          "start": 403,
          "end": 410,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 406,
            "end": 410,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 737,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 418,
            "end": 443,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 422,
                "end": 442,
                "id": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 428,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 431,
                  "end": 442,
                  "object": {
                    "type": "Identifier",
                    "start": 431,
                    "end": 435,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 442,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 448,
            "end": 697,
            "discriminant": {
              "type": "Identifier",
              "start": 456,
              "end": 462,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 474,
                "end": 508,
                "test": {
                  "type": "Literal",
                  "start": 479,
                  "end": 480,
                  "value": 0,
                  "raw": "0"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 482,
                    "end": 508,
                    "argument": {
                      "type": "CallExpression",
                      "start": 489,
                      "end": 507,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 489,
                        "end": 498,
                        "object": {
                          "type": "Identifier",
                          "start": 489,
                          "end": 493,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 498,
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 499,
                          "end": 506,
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 517,
                "end": 560,
                "test": {
                  "type": "Literal",
                  "start": 522,
                  "end": 523,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 525,
                    "end": 560,
                    "argument": {
                      "type": "CallExpression",
                      "start": 532,
                      "end": 559,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 532,
                        "end": 541,
                        "object": {
                          "type": "Identifier",
                          "start": 532,
                          "end": 536,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 537,
                          "end": 541,
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 542,
                          "end": 549,
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "MemberExpression",
                          "start": 551,
                          "end": 558,
                          "object": {
                            "type": "Identifier",
                            "start": 551,
                            "end": 555,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 556,
                            "end": 557,
                            "value": 0,
                            "raw": "0"
                          },
                          "optional": false,
                          "computed": true
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 569,
                "end": 621,
                "test": {
                  "type": "Literal",
                  "start": 574,
                  "end": 575,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 577,
                    "end": 621,
                    "argument": {
                      "type": "CallExpression",
                      "start": 584,
                      "end": 620,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 584,
                        "end": 593,
                        "object": {
                          "type": "Identifier",
                          "start": 584,
                          "end": 588,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 589,
                          "end": 593,
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 594,
                          "end": 601,
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "MemberExpression",
                          "start": 603,
                          "end": 610,
                          "object": {
                            "type": "Identifier",
                            "start": 603,
                            "end": 607,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 608,
                            "end": 609,
                            "value": 0,
                            "raw": "0"
                          },
                          "optional": false,
                          "computed": true
                        },
                        {
                          "type": "MemberExpression",
                          "start": 612,
                          "end": 619,
                          "object": {
                            "type": "Identifier",
                            "start": 612,
                            "end": 616,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 617,
                            "end": 618,
                            "value": 1,
                            "raw": "1"
                          },
                          "optional": false,
                          "computed": true
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 630,
                "end": 691,
                "test": {
                  "type": "Literal",
                  "start": 635,
                  "end": 636,
                  "value": 3,
                  "raw": "3"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 638,
                    "end": 691,
                    "argument": {
                      "type": "CallExpression",
                      "start": 645,
                      "end": 690,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 645,
                        "end": 654,
                        "object": {
                          "type": "Identifier",
                          "start": 645,
                          "end": 649,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 654,
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 655,
                          "end": 662,
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "MemberExpression",
                          "start": 664,
                          "end": 671,
                          "object": {
                            "type": "Identifier",
                            "start": 664,
                            "end": 668,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 669,
                            "end": 670,
                            "value": 0,
                            "raw": "0"
                          },
                          "optional": false,
                          "computed": true
                        },
                        {
                          "type": "MemberExpression",
                          "start": 673,
                          "end": 680,
                          "object": {
                            "type": "Identifier",
                            "start": 673,
                            "end": 677,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 678,
                            "end": 679,
                            "value": 1,
                            "raw": "1"
                          },
                          "optional": false,
                          "computed": true
                        },
                        {
                          "type": "MemberExpression",
                          "start": 682,
                          "end": 689,
                          "object": {
                            "type": "Identifier",
                            "start": 682,
                            "end": 686,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Literal",
                            "start": 687,
                            "end": 688,
                            "value": 2,
                            "raw": "2"
                          },
                          "optional": false,
                          "computed": true
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 702,
            "end": 735,
            "argument": {
              "type": "CallExpression",
              "start": 709,
              "end": 734,
              "callee": {
                "type": "MemberExpression",
                "start": 709,
                "end": 719,
                "object": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 713,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 719,
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 720,
                  "end": 727,
                  "decorators": [],
                  "name": "thisArg",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 729,
                  "end": 733,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 739,
      "end": 760,
      "declaration": {
        "type": "Identifier",
        "start": 754,
        "end": 759,
        "decorators": [],
        "name": "apply",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
