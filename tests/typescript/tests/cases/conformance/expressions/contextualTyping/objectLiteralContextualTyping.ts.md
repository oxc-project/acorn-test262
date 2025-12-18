__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 385
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 396
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 398,
                "end": 404
              },
              "start": 396,
              "end": 404
            },
            "accessibility": null,
            "static": false,
            "start": 392,
            "end": 405
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 424,
                "end": 430
              },
              "start": 422,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 410,
            "end": 431
          }
        ],
        "start": 386,
        "end": 433
      },
      "declare": false,
      "start": 371,
      "end": 433
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 455
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 466
              },
              "typeArguments": null,
              "start": 462,
              "end": 466
            },
            "start": 460,
            "end": 466
          },
          "start": 456,
          "end": 466
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 469,
          "end": 475
        },
        "start": 467,
        "end": 475
      },
      "body": null,
      "expression": false,
      "start": 435,
      "end": 476
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 497
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 504,
              "end": 507
            },
            "start": 502,
            "end": 507
          },
          "start": 498,
          "end": 507
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 510,
          "end": 516
        },
        "start": 508,
        "end": 516
      },
      "body": null,
      "expression": false,
      "start": 477,
      "end": 517
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 524
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 530
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 533,
                      "end": 537
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Sprocket",
                      "raw": "\"Sprocket\"",
                      "start": 539,
                      "end": 549
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 533,
                    "end": 549
                  }
                ],
                "start": 531,
                "end": 551
              }
            ],
            "optional": false,
            "start": 527,
            "end": 552
          },
          "definite": false,
          "start": 523,
          "end": 552
        }
      ],
      "declare": false,
      "start": 519,
      "end": 553
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
              },
              "start": 559,
              "end": 567
            },
            "start": 558,
            "end": 567
          },
          "init": null,
          "definite": false,
          "start": 558,
          "end": 567
        }
      ],
      "declare": false,
      "start": 554,
      "end": 568
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 575
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 581
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 588
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Sprocket",
                      "raw": "\"Sprocket\"",
                      "start": 590,
                      "end": 600
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 584,
                    "end": 600
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "description",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 602,
                      "end": 613
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Bumpy wheel",
                      "raw": "\"Bumpy wheel\"",
                      "start": 615,
                      "end": 628
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 602,
                    "end": 628
                  }
                ],
                "start": 582,
                "end": 630
              }
            ],
            "optional": false,
            "start": 578,
            "end": 631
          },
          "definite": false,
          "start": 574,
          "end": 631
        }
      ],
      "declare": false,
      "start": 570,
      "end": 632
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 640,
                "end": 646
              },
              "start": 638,
              "end": 646
            },
            "start": 637,
            "end": 646
          },
          "init": null,
          "definite": false,
          "start": 637,
          "end": 646
        }
      ],
      "declare": false,
      "start": 633,
      "end": 647
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 654
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 660
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 663,
                      "end": 667
                    },
                    "value": {
                      "type": "Literal",
                      "value": "Sprocket",
                      "raw": "\"Sprocket\"",
                      "start": 669,
                      "end": 679
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 663,
                    "end": 679
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "description",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 692
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 694,
                      "end": 699
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 681,
                    "end": 699
                  }
                ],
                "start": 661,
                "end": 701
              }
            ],
            "optional": false,
            "start": 657,
            "end": 702
          },
          "definite": false,
          "start": 653,
          "end": 702
        }
      ],
      "declare": false,
      "start": 649,
      "end": 703
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 711,
                "end": 717
              },
              "start": 709,
              "end": 717
            },
            "start": 708,
            "end": 717
          },
          "init": null,
          "definite": false,
          "start": 708,
          "end": 717
        }
      ],
      "declare": false,
      "start": 704,
      "end": 718
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
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 725
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 731
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 734,
                      "end": 735
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 737,
                      "end": 739
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 734,
                    "end": 739
                  }
                ],
                "start": 732,
                "end": 741
              }
            ],
            "optional": false,
            "start": 728,
            "end": 742
          },
          "definite": false,
          "start": 724,
          "end": 742
        }
      ],
      "declare": false,
      "start": 720,
      "end": 743
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
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 751,
                "end": 757
              },
              "start": 749,
              "end": 757
            },
            "start": 748,
            "end": 757
          },
          "init": null,
          "definite": false,
          "start": 748,
          "end": 757
        }
      ],
      "declare": false,
      "start": 744,
      "end": 758
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 780
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 782
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 781,
            "end": 782
          }
        ],
        "start": 780,
        "end": 783
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 794
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 797,
                        "end": 798
                      },
                      "typeArguments": null,
                      "start": 797,
                      "end": 798
                    },
                    "start": 795,
                    "end": 798
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 793,
                  "end": 798
                }
              ],
              "start": 791,
              "end": 800
            },
            "start": 789,
            "end": 800
          },
          "start": 784,
          "end": 800
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 803,
            "end": 804
          },
          "typeArguments": null,
          "start": 803,
          "end": 804
        },
        "start": 801,
        "end": 804
      },
      "body": null,
      "expression": false,
      "start": 760,
      "end": 805
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 811,
            "end": 812
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 818
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 819,
                "end": 821
              }
            ],
            "optional": false,
            "start": 815,
            "end": 822
          },
          "definite": false,
          "start": 811,
          "end": 822
        }
      ],
      "declare": false,
      "start": 807,
      "end": 823
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 831,
                "end": 833
              },
              "start": 829,
              "end": 833
            },
            "start": 828,
            "end": 833
          },
          "init": null,
          "definite": false,
          "start": 828,
          "end": 833
        }
      ],
      "declare": false,
      "start": 824,
      "end": 834
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 371,
  "end": 834
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 371,
    "end": 380,
    "range": [
      371,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 381,
    "end": 385,
    "range": [
      381,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 392,
    "end": 396,
    "range": [
      392,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 398,
    "end": 404,
    "range": [
      398,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 410,
    "end": 421,
    "range": [
      410,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 435,
    "end": 442,
    "range": [
      435,
      442
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451,
    "range": [
      443,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 452,
    "end": 455,
    "range": [
      452,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 456,
    "end": 460,
    "range": [
      456,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 462,
    "end": 466,
    "range": [
      462,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 469,
    "end": 475,
    "range": [
      469,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 477,
    "end": 484,
    "range": [
      477,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493,
    "range": [
      485,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 498,
    "end": 502,
    "range": [
      498,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 504,
    "end": 507,
    "range": [
      504,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 510,
    "end": 516,
    "range": [
      510,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 527,
    "end": 530,
    "range": [
      527,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 533,
    "end": 537,
    "range": [
      533,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "String",
    "value": "\"Sprocket\"",
    "start": 539,
    "end": 549,
    "range": [
      539,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557,
    "range": [
      554,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567,
    "range": [
      561,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 570,
    "end": 573,
    "range": [
      570,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "String",
    "value": "\"Sprocket\"",
    "start": 590,
    "end": 600,
    "range": [
      590,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 602,
    "end": 613,
    "range": [
      602,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "String",
    "value": "\"Bumpy wheel\"",
    "start": 615,
    "end": 628,
    "range": [
      615,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 633,
    "end": 636,
    "range": [
      633,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 640,
    "end": 646,
    "range": [
      640,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 649,
    "end": 652,
    "range": [
      649,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 657,
    "end": 660,
    "range": [
      657,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 663,
    "end": 667,
    "range": [
      663,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "String",
    "value": "\"Sprocket\"",
    "start": 669,
    "end": 679,
    "range": [
      669,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 681,
    "end": 692,
    "range": [
      681,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 694,
    "end": 699,
    "range": [
      694,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 704,
    "end": 707,
    "range": [
      704,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 711,
    "end": 717,
    "range": [
      711,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 720,
    "end": 723,
    "range": [
      720,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 728,
    "end": 731,
    "range": [
      728,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 737,
    "end": 739,
    "range": [
      737,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 744,
    "end": 747,
    "range": [
      744,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 751,
    "end": 757,
    "range": [
      751,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 760,
    "end": 767,
    "range": [
      760,
      767
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 768,
    "end": 776,
    "range": [
      768,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 777,
    "end": 780,
    "range": [
      777,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 784,
    "end": 789,
    "range": [
      784,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 807,
    "end": 810,
    "range": [
      807,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 824,
    "end": 827,
    "range": [
      824,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  }
]
```
