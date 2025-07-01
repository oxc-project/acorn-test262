__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "apply",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 387
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 392
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thisArg",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 401
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 410
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 403,
          "end": 410
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 428
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 435
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 442
                  },
                  "optional": false,
                  "computed": false,
                  "start": 431,
                  "end": 442
                },
                "definite": false,
                "start": 422,
                "end": 442
              }
            ],
            "declare": false,
            "start": 418,
            "end": 443
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 462
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 479,
                  "end": 480
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 489,
                          "end": 493
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 494,
                          "end": 498
                        },
                        "optional": false,
                        "computed": false,
                        "start": 489,
                        "end": 498
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 499,
                          "end": 506
                        }
                      ],
                      "optional": false,
                      "start": 489,
                      "end": 507
                    },
                    "start": 482,
                    "end": 508
                  }
                ],
                "start": 474,
                "end": 508
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 522,
                  "end": 523
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 532,
                          "end": 536
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 541
                        },
                        "optional": false,
                        "computed": false,
                        "start": 532,
                        "end": 541
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 542,
                          "end": 549
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 551,
                            "end": 555
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 556,
                            "end": 557
                          },
                          "optional": false,
                          "computed": true,
                          "start": 551,
                          "end": 558
                        }
                      ],
                      "optional": false,
                      "start": 532,
                      "end": 559
                    },
                    "start": 525,
                    "end": 560
                  }
                ],
                "start": 517,
                "end": 560
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 574,
                  "end": 575
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 593
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 593
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 594,
                          "end": 601
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 603,
                            "end": 607
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 608,
                            "end": 609
                          },
                          "optional": false,
                          "computed": true,
                          "start": 603,
                          "end": 610
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 612,
                            "end": 616
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 617,
                            "end": 618
                          },
                          "optional": false,
                          "computed": true,
                          "start": 612,
                          "end": 619
                        }
                      ],
                      "optional": false,
                      "start": 584,
                      "end": 620
                    },
                    "start": 577,
                    "end": 621
                  }
                ],
                "start": 569,
                "end": 621
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 635,
                  "end": 636
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 645,
                          "end": 649
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 650,
                          "end": 654
                        },
                        "optional": false,
                        "computed": false,
                        "start": 645,
                        "end": 654
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 662
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 664,
                            "end": 668
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 669,
                            "end": 670
                          },
                          "optional": false,
                          "computed": true,
                          "start": 664,
                          "end": 671
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 673,
                            "end": 677
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 678,
                            "end": 679
                          },
                          "optional": false,
                          "computed": true,
                          "start": 673,
                          "end": 680
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 682,
                            "end": 686
                          },
                          "property": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 687,
                            "end": 688
                          },
                          "optional": false,
                          "computed": true,
                          "start": 682,
                          "end": 689
                        }
                      ],
                      "optional": false,
                      "start": 645,
                      "end": 690
                    },
                    "start": 638,
                    "end": 691
                  }
                ],
                "start": 630,
                "end": 691
              }
            ],
            "start": 448,
            "end": 697
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 713
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 719
                },
                "optional": false,
                "computed": false,
                "start": 709,
                "end": 719
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 727
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 733
                }
              ],
              "optional": false,
              "start": 709,
              "end": 734
            },
            "start": 702,
            "end": 735
          }
        ],
        "start": 412,
        "end": 737
      },
      "expression": false,
      "start": 373,
      "end": 737
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "apply",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 759
      },
      "exportKind": "value",
      "start": 739,
      "end": 760
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 373,
  "end": 760
}
```
