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
        "name": "Multimap",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 103
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ik",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 106
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "iv",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 110
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 156,
                  "end": 160
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 165
                },
                "optional": false,
                "computed": false,
                "start": 156,
                "end": 165
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 168,
                "end": 170
              },
              "start": 156,
              "end": 170
            },
            "directive": null,
            "start": 156,
            "end": 171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 207,
                  "end": 211
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_map2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 217
                },
                "optional": false,
                "computed": false,
                "start": 207,
                "end": 217
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ik",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 225
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iv",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 230
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 222,
                    "end": 230
                  }
                ],
                "start": 220,
                "end": 232
              },
              "start": 207,
              "end": 232
            },
            "directive": null,
            "start": 207,
            "end": 233
          }
        ],
        "start": 112,
        "end": 235
      },
      "expression": false,
      "start": 86,
      "end": 235
    },
    {
      "type": "EmptyStatement",
      "start": 235,
      "end": 236
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 311
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 326
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 327,
                "end": 330
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 332,
                "end": 333
              }
            ],
            "start": 314,
            "end": 334
          },
          "definite": false,
          "start": 308,
          "end": 334
        }
      ],
      "declare": false,
      "start": 302,
      "end": 335
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "map2",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 373
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 388
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "m",
                "raw": "\"m\"",
                "start": 389,
                "end": 392
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 394,
                "end": 395
              }
            ],
            "start": 376,
            "end": 396
          },
          "definite": false,
          "start": 369,
          "end": 396
        }
      ],
      "declare": false,
      "start": 363,
      "end": 397
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 425,
            "end": 426
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 432
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 437
              },
              "optional": false,
              "computed": false,
              "start": 429,
              "end": 437
            },
            "property": {
              "type": "Literal",
              "value": "hi",
              "raw": "'hi'",
              "start": 438,
              "end": 442
            },
            "optional": false,
            "computed": true,
            "start": 429,
            "end": 443
          },
          "definite": false,
          "start": 425,
          "end": 443
        }
      ],
      "declare": false,
      "start": 421,
      "end": 443
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 471
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 483
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 483
            },
            "property": {
              "type": "Literal",
              "value": "hi",
              "raw": "'hi'",
              "start": 484,
              "end": 488
            },
            "optional": false,
            "computed": true,
            "start": 474,
            "end": 489
          },
          "definite": false,
          "start": 470,
          "end": 489
        }
      ],
      "declare": false,
      "start": 466,
      "end": 489
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 517
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 524
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_map",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 529
              },
              "optional": false,
              "computed": false,
              "start": 520,
              "end": 529
            },
            "property": {
              "type": "Literal",
              "value": "hi",
              "raw": "'hi'",
              "start": 530,
              "end": 534
            },
            "optional": false,
            "computed": true,
            "start": 520,
            "end": 535
          },
          "definite": false,
          "start": 516,
          "end": 535
        }
      ],
      "declare": false,
      "start": 512,
      "end": 535
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 563
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 569
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "_map2",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 575
              },
              "optional": false,
              "computed": false,
              "start": 566,
              "end": 575
            },
            "property": {
              "type": "Literal",
              "value": "hi",
              "raw": "'hi'",
              "start": 576,
              "end": 580
            },
            "optional": false,
            "computed": true,
            "start": 566,
            "end": 581
          },
          "definite": false,
          "start": 562,
          "end": 581
        }
      ],
      "declare": false,
      "start": 558,
      "end": 581
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cp",
        "optional": false,
        "typeAnnotation": null,
        "start": 641,
        "end": 643
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 645
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 653,
                  "end": 657
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 658,
                  "end": 659
                },
                "optional": false,
                "computed": false,
                "start": 653,
                "end": 659
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 662,
                "end": 663
              },
              "start": 653,
              "end": 663
            },
            "directive": null,
            "start": 653,
            "end": 663
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 668,
                  "end": 672
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 674
                },
                "optional": false,
                "computed": false,
                "start": 668,
                "end": 674
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 678
              },
              "start": 668,
              "end": 678
            },
            "directive": null,
            "start": 668,
            "end": 678
          }
        ],
        "start": 647,
        "end": 680
      },
      "expression": false,
      "start": 632,
      "end": 680
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cp",
            "optional": false,
            "typeAnnotation": null,
            "start": 681,
            "end": 683
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 693
          },
          "optional": false,
          "computed": false,
          "start": 681,
          "end": 693
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 704
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 716,
                          "end": 720
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 721,
                          "end": 722
                        },
                        "optional": false,
                        "computed": false,
                        "start": 716,
                        "end": 722
                      },
                      "start": 709,
                      "end": 722
                    }
                  ],
                  "start": 707,
                  "end": 724
                },
                "expression": false,
                "start": 704,
                "end": 724
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 702,
              "end": 724
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 732
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 737,
                            "end": 741
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 742,
                            "end": 743
                          },
                          "optional": false,
                          "computed": false,
                          "start": 737,
                          "end": 743
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 746,
                              "end": 750
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 752
                            },
                            "optional": false,
                            "computed": false,
                            "start": 746,
                            "end": 752
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 755,
                            "end": 756
                          },
                          "start": 746,
                          "end": 756
                        },
                        "start": 737,
                        "end": 756
                      },
                      "directive": null,
                      "start": 737,
                      "end": 757
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 765,
                          "end": 769
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 770,
                          "end": 771
                        },
                        "optional": false,
                        "computed": false,
                        "start": 765,
                        "end": 771
                      },
                      "start": 758,
                      "end": 771
                    }
                  ],
                  "start": 735,
                  "end": 773
                },
                "expression": false,
                "start": 732,
                "end": 773
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 730,
              "end": 773
            }
          ],
          "start": 696,
          "end": 775
        },
        "start": 681,
        "end": 775
      },
      "directive": null,
      "start": 681,
      "end": 775
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cp",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 782
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cp",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 791
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 792,
                "end": 793
              }
            ],
            "start": 785,
            "end": 794
          },
          "definite": false,
          "start": 780,
          "end": 794
        }
      ],
      "declare": false,
      "start": 776,
      "end": 794
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 823
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "cp",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 828
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 830
            },
            "optional": false,
            "computed": false,
            "start": 826,
            "end": 830
          },
          "definite": false,
          "start": 822,
          "end": 830
        }
      ],
      "declare": false,
      "start": 818,
      "end": 830
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 857,
            "end": 858
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "cp",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 863
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 865
            },
            "optional": false,
            "computed": false,
            "start": 861,
            "end": 865
          },
          "definite": false,
          "start": 857,
          "end": 865
        }
      ],
      "declare": false,
      "start": 853,
      "end": 865
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 892,
            "end": 893
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "cp",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 898
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 899,
                "end": 901
              },
              "optional": false,
              "computed": false,
              "start": 896,
              "end": 901
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 896,
            "end": 903
          },
          "definite": false,
          "start": 892,
          "end": 903
        }
      ],
      "declare": false,
      "start": 888,
      "end": 903
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 931
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "cp",
                "optional": false,
                "typeAnnotation": null,
                "start": 934,
                "end": 936
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 939
              },
              "optional": false,
              "computed": false,
              "start": 934,
              "end": 939
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 934,
            "end": 941
          },
          "definite": false,
          "start": 930,
          "end": 941
        }
      ],
      "declare": false,
      "start": 926,
      "end": 941
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 86,
  "end": 942
}
```
