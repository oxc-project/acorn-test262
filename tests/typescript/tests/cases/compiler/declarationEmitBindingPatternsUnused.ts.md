__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Named",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
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
              "start": 15,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 27
          }
        ],
        "start": 13,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "duplicateIndetifiers",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 193
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 196,
                "end": 200
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 207
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 196,
              "end": 207
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 213
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias2",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 221
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 209,
              "end": 221
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 230
              },
              "typeArguments": null,
              "start": 225,
              "end": 230
            },
            "start": 223,
            "end": 230
          },
          "start": 194,
          "end": 230
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 232,
        "end": 235
      },
      "expression": false,
      "start": 164,
      "end": 235
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "duplicateIndetifiers2",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 266
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 273,
              "end": 279
            },
            "start": 271,
            "end": 279
          },
          "start": 267,
          "end": 279
        },
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 283,
                "end": 287
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 294
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 283,
              "end": 294
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 303
              },
              "typeArguments": null,
              "start": 298,
              "end": 303
            },
            "start": 296,
            "end": 303
          },
          "start": 281,
          "end": 303
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 305,
        "end": 308
      },
      "expression": false,
      "start": 236,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "duplicateIndetifiers3",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 339
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 342,
                "end": 346
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 353
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 342,
              "end": 353
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 362
              },
              "typeArguments": null,
              "start": 357,
              "end": 362
            },
            "start": 355,
            "end": 362
          },
          "start": 340,
          "end": 362
        },
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 366,
                "end": 370
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias2",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 378
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 366,
              "end": 378
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 387
              },
              "typeArguments": null,
              "start": 382,
              "end": 387
            },
            "start": 380,
            "end": 387
          },
          "start": 364,
          "end": 387
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 389,
        "end": 392
      },
      "expression": false,
      "start": 309,
      "end": 392
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 403
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 406,
            "end": 408
          },
          "definite": false,
          "start": 398,
          "end": 408
        }
      ],
      "declare": false,
      "start": 394,
      "end": 409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "shadowedVariable",
        "optional": false,
        "typeAnnotation": null,
        "start": 482,
        "end": 498
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 506
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 513
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 501,
              "end": 513
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 524
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 526,
                      "end": 532
                    },
                    "start": 524,
                    "end": 532
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 519,
                  "end": 532
                }
              ],
              "start": 517,
              "end": 534
            },
            "start": 515,
            "end": 534
          },
          "start": 499,
          "end": 534
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 549
          },
          "typeArguments": null,
          "start": 537,
          "end": 549
        },
        "start": 535,
        "end": 549
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 564
            },
            "start": 552,
            "end": 564
          }
        ],
        "start": 550,
        "end": 566
      },
      "expression": false,
      "start": 473,
      "end": 566
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferenced",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 590
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 593,
                "end": 597
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 604
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 593,
              "end": 604
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 613
              },
              "typeArguments": null,
              "start": 608,
              "end": 613
            },
            "start": 606,
            "end": 613
          },
          "start": 591,
          "end": 613
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 615,
        "end": 619
      },
      "expression": false,
      "start": 568,
      "end": 619
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferencedNestedAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 653
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 661,
                      "end": 665
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 667,
                      "end": 672
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 661,
                    "end": 672
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 674
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 656,
              "end": 674
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 681
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 683,
                        "end": 688
                      },
                      "typeArguments": null,
                      "start": 683,
                      "end": 688
                    },
                    "start": 681,
                    "end": 688
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 680,
                  "end": 688
                }
              ],
              "start": 678,
              "end": 690
            },
            "start": 676,
            "end": 690
          },
          "start": 654,
          "end": 690
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 692,
        "end": 695
      },
      "expression": false,
      "start": 620,
      "end": 695
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferencedArrayAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 705,
        "end": 728
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 731
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 734
            },
            {
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 738,
                    "end": 742
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 749
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 738,
                  "end": 749
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 751
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 759
                },
                "typeArguments": null,
                "start": 754,
                "end": 759
              },
              "start": 754,
              "end": 761
            },
            "start": 752,
            "end": 761
          },
          "start": 729,
          "end": 761
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 763,
        "end": 766
      },
      "expression": false,
      "start": 696,
      "end": 766
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInCode",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 793
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 796,
                "end": 800
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 807
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 796,
              "end": 807
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 816
              },
              "typeArguments": null,
              "start": 811,
              "end": 816
            },
            "start": 809,
            "end": 816
          },
          "start": 794,
          "end": 816
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 836
            },
            "start": 824,
            "end": 837
          }
        ],
        "start": 818,
        "end": 839
      },
      "expression": false,
      "start": 768,
      "end": 839
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInSignarture",
        "optional": false,
        "typeAnnotation": null,
        "start": 850,
        "end": 872
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 875,
                "end": 879
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 881,
                "end": 886
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 875,
              "end": 886
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 895
              },
              "typeArguments": null,
              "start": 890,
              "end": 895
            },
            "start": 888,
            "end": 895
          },
          "start": 873,
          "end": 895
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 910
          },
          "typeArguments": null,
          "start": 898,
          "end": 910
        },
        "start": 896,
        "end": 910
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 929
            },
            "start": 917,
            "end": 930
          }
        ],
        "start": 911,
        "end": 932
      },
      "expression": false,
      "start": 841,
      "end": 932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInSignartureKeyword",
        "optional": false,
        "typeAnnotation": null,
        "start": 943,
        "end": 972
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "function",
                "optional": false,
                "typeAnnotation": null,
                "start": 975,
                "end": 983
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 990
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 975,
              "end": 990
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 996,
                    "end": 1004
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1006,
                      "end": 1012
                    },
                    "start": 1004,
                    "end": 1012
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 996,
                  "end": 1012
                }
              ],
              "start": 994,
              "end": 1014
            },
            "start": 992,
            "end": 1014
          },
          "start": 973,
          "end": 1014
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1029
          },
          "typeArguments": null,
          "start": 1017,
          "end": 1029
        },
        "start": 1015,
        "end": 1029
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1043,
                "end": 1047
              },
              "start": 1043,
              "end": 1048
            },
            "start": 1036,
            "end": 1049
          }
        ],
        "start": 1030,
        "end": 1051
      },
      "expression": false,
      "start": 934,
      "end": 1051
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInInferredType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1086
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 1089,
                "end": 1093
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 1095,
                "end": 1100
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1089,
              "end": 1100
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 1104,
                "end": 1109
              },
              "typeArguments": null,
              "start": 1104,
              "end": 1109
            },
            "start": 1102,
            "end": 1109
          },
          "start": 1087,
          "end": 1109
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1122,
              "end": 1128
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
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
                    "start": 1133,
                    "end": 1137
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1146,
                        "end": 1151
                      },
                      "typeArguments": null,
                      "start": 1139,
                      "end": 1151
                    },
                    "start": 1137,
                    "end": 1151
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1133,
                  "end": 1151
                }
              ],
              "start": 1131,
              "end": 1153
            },
            "declare": false,
            "start": 1117,
            "end": 1153
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1165,
                  "end": 1169
                },
                "start": 1165,
                "end": 1170
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1174,
                  "end": 1180
                },
                "typeArguments": null,
                "start": 1174,
                "end": 1180
              },
              "start": 1165,
              "end": 1180
            },
            "start": 1158,
            "end": 1180
          }
        ],
        "start": 1111,
        "end": 1182
      },
      "expression": false,
      "start": 1053,
      "end": 1182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInNestedFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1219
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 1222,
                "end": 1226
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "typeAnnotation": null,
                "start": 1228,
                "end": 1233
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1222,
              "end": 1233
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1242
              },
              "typeArguments": null,
              "start": 1237,
              "end": 1242
            },
            "start": 1235,
            "end": 1242
          },
          "start": 1220,
          "end": 1242
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1276,
                        "end": 1281
                      },
                      "typeArguments": null,
                      "start": 1269,
                      "end": 1281
                    },
                    "start": 1267,
                    "end": 1281
                  },
                  "start": 1266,
                  "end": 1281
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1283,
                "end": 1291
              },
              "expression": false,
              "start": 1257,
              "end": 1291
            },
            "start": 1250,
            "end": 1291
          }
        ],
        "start": 1244,
        "end": 1293
      },
      "expression": false,
      "start": 1184,
      "end": 1293
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedNestedAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 1304,
        "end": 1325
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1328,
                "end": 1329
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 1333,
                      "end": 1337
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1339,
                      "end": 1344
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1333,
                    "end": 1344
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1346
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1328,
              "end": 1346
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1352,
                    "end": 1353
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1355,
                        "end": 1360
                      },
                      "typeArguments": null,
                      "start": 1355,
                      "end": 1360
                    },
                    "start": 1353,
                    "end": 1360
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1352,
                  "end": 1360
                }
              ],
              "start": 1350,
              "end": 1362
            },
            "start": 1348,
            "end": 1362
          },
          "start": 1326,
          "end": 1362
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1377
          },
          "typeArguments": null,
          "start": 1365,
          "end": 1377
        },
        "start": 1363,
        "end": 1377
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 1388,
              "end": 1393
            },
            "start": 1381,
            "end": 1394
          }
        ],
        "start": 1378,
        "end": 1396
      },
      "expression": false,
      "start": 1295,
      "end": 1396
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedArrayAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 1407,
        "end": 1427
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1429,
              "end": 1430
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1432,
              "end": 1433
            },
            {
              "type": "ObjectPattern",
              "decorators": [],
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
                    "start": 1437,
                    "end": 1441
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1443,
                    "end": 1448
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1437,
                  "end": 1448
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1435,
              "end": 1450
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1453,
                  "end": 1458
                },
                "typeArguments": null,
                "start": 1453,
                "end": 1458
              },
              "start": 1453,
              "end": 1460
            },
            "start": 1451,
            "end": 1460
          },
          "start": 1428,
          "end": 1460
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "typeAnnotation": null,
            "start": 1470,
            "end": 1475
          },
          "typeArguments": null,
          "start": 1463,
          "end": 1475
        },
        "start": 1461,
        "end": 1475
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 1486,
              "end": 1491
            },
            "start": 1479,
            "end": 1492
          }
        ],
        "start": 1476,
        "end": 1494
      },
      "expression": false,
      "start": 1398,
      "end": 1494
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotReferencedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1503,
        "end": 1521
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1525,
              "end": 1536
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1539,
                        "end": 1543
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1545,
                        "end": 1550
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1539,
                      "end": 1550
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1554,
                        "end": 1559
                      },
                      "typeArguments": null,
                      "start": 1554,
                      "end": 1559
                    },
                    "start": 1552,
                    "end": 1559
                  },
                  "start": 1537,
                  "end": 1559
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1561,
                "end": 1565
              },
              "expression": false,
              "start": 1536,
              "end": 1565
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1525,
            "end": 1565
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1571,
              "end": 1572
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1575,
                        "end": 1579
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1581,
                        "end": 1586
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1575,
                      "end": 1586
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1595
                      },
                      "typeArguments": null,
                      "start": 1590,
                      "end": 1595
                    },
                    "start": 1588,
                    "end": 1595
                  },
                  "start": 1573,
                  "end": 1595
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1607,
                          "end": 1614
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1615,
                          "end": 1618
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1607,
                        "end": 1618
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1619,
                          "end": 1624
                        }
                      ],
                      "optional": false,
                      "start": 1607,
                      "end": 1625
                    },
                    "directive": null,
                    "start": 1607,
                    "end": 1626
                  }
                ],
                "start": 1597,
                "end": 1632
              },
              "expression": false,
              "start": 1572,
              "end": 1632
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1567,
            "end": 1632
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1634,
              "end": 1635
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1638,
                        "end": 1642
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1644,
                        "end": 1649
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1638,
                      "end": 1649
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1653,
                        "end": 1658
                      },
                      "typeArguments": null,
                      "start": 1653,
                      "end": 1658
                    },
                    "start": 1651,
                    "end": 1658
                  },
                  "start": 1636,
                  "end": 1658
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1670,
                          "end": 1677
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1678,
                          "end": 1681
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1670,
                        "end": 1681
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1682,
                          "end": 1687
                        }
                      ],
                      "optional": false,
                      "start": 1670,
                      "end": 1688
                    },
                    "directive": null,
                    "start": 1670,
                    "end": 1689
                  }
                ],
                "start": 1660,
                "end": 1695
              },
              "expression": false,
              "start": 1635,
              "end": 1695
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1634,
            "end": 1695
          }
        ],
        "start": 1522,
        "end": 1697
      },
      "abstract": false,
      "declare": false,
      "start": 1497,
      "end": 1697
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInCodeClas",
        "optional": false,
        "typeAnnotation": null,
        "start": 1705,
        "end": 1725
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1740
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1743,
                        "end": 1747
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1749,
                        "end": 1754
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1743,
                      "end": 1754
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1758,
                        "end": 1763
                      },
                      "typeArguments": null,
                      "start": 1758,
                      "end": 1763
                    },
                    "start": 1756,
                    "end": 1763
                  },
                  "start": 1741,
                  "end": 1763
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1769,
                          "end": 1776
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1777,
                          "end": 1780
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1769,
                        "end": 1780
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1781,
                          "end": 1786
                        }
                      ],
                      "optional": false,
                      "start": 1769,
                      "end": 1787
                    },
                    "directive": null,
                    "start": 1769,
                    "end": 1788
                  }
                ],
                "start": 1765,
                "end": 1791
              },
              "expression": false,
              "start": 1740,
              "end": 1791
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1729,
            "end": 1791
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1797,
              "end": 1798
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1801,
                        "end": 1805
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1807,
                        "end": 1812
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1801,
                      "end": 1812
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1816,
                        "end": 1821
                      },
                      "typeArguments": null,
                      "start": 1816,
                      "end": 1821
                    },
                    "start": 1814,
                    "end": 1821
                  },
                  "start": 1799,
                  "end": 1821
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1833,
                          "end": 1840
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1841,
                          "end": 1844
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1833,
                        "end": 1844
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1845,
                          "end": 1850
                        }
                      ],
                      "optional": false,
                      "start": 1833,
                      "end": 1851
                    },
                    "directive": null,
                    "start": 1833,
                    "end": 1852
                  }
                ],
                "start": 1823,
                "end": 1858
              },
              "expression": false,
              "start": 1798,
              "end": 1858
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1793,
            "end": 1858
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1860,
              "end": 1861
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1864,
                        "end": 1868
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1870,
                        "end": 1875
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1864,
                      "end": 1875
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1879,
                        "end": 1884
                      },
                      "typeArguments": null,
                      "start": 1879,
                      "end": 1884
                    },
                    "start": 1877,
                    "end": 1884
                  },
                  "start": 1862,
                  "end": 1884
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1896,
                          "end": 1903
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1904,
                          "end": 1907
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1896,
                        "end": 1907
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1908,
                          "end": 1913
                        }
                      ],
                      "optional": false,
                      "start": 1896,
                      "end": 1914
                    },
                    "directive": null,
                    "start": 1896,
                    "end": 1915
                  }
                ],
                "start": 1886,
                "end": 1921
              },
              "expression": false,
              "start": 1861,
              "end": 1921
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1860,
            "end": 1921
          }
        ],
        "start": 1726,
        "end": 1923
      },
      "abstract": false,
      "declare": false,
      "start": 1699,
      "end": 1923
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInSignartureClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1931,
        "end": 1958
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1962,
              "end": 1973
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1976,
                        "end": 1980
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1982,
                        "end": 1987
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1976,
                      "end": 1987
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1991,
                        "end": 1996
                      },
                      "typeArguments": null,
                      "start": 1991,
                      "end": 1996
                    },
                    "start": 1989,
                    "end": 1996
                  },
                  "start": 1974,
                  "end": 1996
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2008,
                        "end": 2013
                      },
                      "typeArguments": null,
                      "start": 2001,
                      "end": 2013
                    },
                    "start": 1999,
                    "end": 2013
                  },
                  "start": 1998,
                  "end": 2013
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2019,
                          "end": 2026
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2027,
                          "end": 2030
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2019,
                        "end": 2030
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2031,
                          "end": 2036
                        }
                      ],
                      "optional": false,
                      "start": 2019,
                      "end": 2037
                    },
                    "directive": null,
                    "start": 2019,
                    "end": 2038
                  }
                ],
                "start": 2015,
                "end": 2041
              },
              "expression": false,
              "start": 1973,
              "end": 2041
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1962,
            "end": 2041
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2047,
              "end": 2048
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 2051,
                        "end": 2055
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2057,
                        "end": 2062
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2051,
                      "end": 2062
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Named",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2066,
                            "end": 2071
                          },
                          "typeArguments": null,
                          "start": 2066,
                          "end": 2071
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "o",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2076,
                                "end": 2077
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "alias",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2086,
                                    "end": 2091
                                  },
                                  "typeArguments": null,
                                  "start": 2079,
                                  "end": 2091
                                },
                                "start": 2077,
                                "end": 2091
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 2076,
                              "end": 2091
                            }
                          ],
                          "start": 2074,
                          "end": 2093
                        }
                      ],
                      "start": 2066,
                      "end": 2093
                    },
                    "start": 2064,
                    "end": 2093
                  },
                  "start": 2049,
                  "end": 2093
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2095,
                "end": 2111
              },
              "expression": false,
              "start": 2048,
              "end": 2111
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2043,
            "end": 2111
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2113,
              "end": 2124
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 2127,
                        "end": 2131
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2133,
                        "end": 2138
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2127,
                      "end": 2138
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2142,
                        "end": 2147
                      },
                      "typeArguments": null,
                      "start": 2142,
                      "end": 2147
                    },
                    "start": 2140,
                    "end": 2147
                  },
                  "start": 2125,
                  "end": 2147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2157,
                    "end": 2162
                  },
                  "typeArguments": null,
                  "start": 2150,
                  "end": 2162
                },
                "start": 2148,
                "end": 2162
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2180,
                        "end": 2184
                      },
                      "start": 2180,
                      "end": 2185
                    },
                    "start": 2173,
                    "end": 2185
                  }
                ],
                "start": 2163,
                "end": 2191
              },
              "expression": false,
              "start": 2124,
              "end": 2191
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2113,
            "end": 2191
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mRerturnTypeNested",
              "optional": false,
              "typeAnnotation": null,
              "start": 2193,
              "end": 2211
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 2214,
                        "end": 2218
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2220,
                        "end": 2225
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2214,
                      "end": 2225
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2229,
                        "end": 2234
                      },
                      "typeArguments": null,
                      "start": 2229,
                      "end": 2234
                    },
                    "start": 2227,
                    "end": 2234
                  },
                  "start": 2212,
                  "end": 2234
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NonNullable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2237,
                    "end": 2248
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2256,
                          "end": 2261
                        },
                        "typeArguments": null,
                        "start": 2249,
                        "end": 2261
                      }
                    ],
                    "start": 2248,
                    "end": 2262
                  },
                  "start": 2237,
                  "end": 2262
                },
                "start": 2235,
                "end": 2262
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2280,
                        "end": 2284
                      },
                      "start": 2280,
                      "end": 2285
                    },
                    "start": 2273,
                    "end": 2285
                  }
                ],
                "start": 2263,
                "end": 2291
              },
              "expression": false,
              "start": 2211,
              "end": 2291
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2193,
            "end": 2291
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 2296,
              "end": 2306
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 2309,
                        "end": 2313
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2315,
                        "end": 2320
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2309,
                      "end": 2320
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2324,
                        "end": 2329
                      },
                      "typeArguments": null,
                      "start": 2324,
                      "end": 2329
                    },
                    "start": 2322,
                    "end": 2329
                  },
                  "start": 2307,
                  "end": 2329
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2341,
                        "end": 2346
                      },
                      "typeArguments": null,
                      "start": 2334,
                      "end": 2346
                    },
                    "start": 2332,
                    "end": 2346
                  },
                  "start": 2331,
                  "end": 2346
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2365,
                        "end": 2369
                      },
                      "start": 2365,
                      "end": 2370
                    },
                    "start": 2358,
                    "end": 2370
                  }
                ],
                "start": 2348,
                "end": 2376
              },
              "expression": false,
              "start": 2306,
              "end": 2376
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2296,
            "end": 2376
          }
        ],
        "start": 1959,
        "end": 2378
      },
      "abstract": false,
      "declare": false,
      "start": 1925,
      "end": 2378
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notReferencedFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2408,
                          "end": 2412
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2414,
                          "end": 2419
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2408,
                        "end": 2419
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2423,
                          "end": 2428
                        },
                        "typeArguments": null,
                        "start": 2423,
                        "end": 2428
                      },
                      "start": 2421,
                      "end": 2428
                    },
                    "start": 2406,
                    "end": 2428
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2433,
                    "end": 2437
                  },
                  "start": 2430,
                  "end": 2437
                },
                "start": 2405,
                "end": 2437
              },
              "start": 2403,
              "end": 2437
            },
            "start": 2384,
            "end": 2437
          },
          "init": null,
          "definite": false,
          "start": 2384,
          "end": 2437
        }
      ],
      "declare": false,
      "start": 2380,
      "end": 2438
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "referencedInSignartureReturnTypeFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2486,
                          "end": 2490
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2492,
                          "end": 2497
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2486,
                        "end": 2497
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2501,
                          "end": 2506
                        },
                        "typeArguments": null,
                        "start": 2501,
                        "end": 2506
                      },
                      "start": 2499,
                      "end": 2506
                    },
                    "start": 2484,
                    "end": 2506
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2518,
                      "end": 2523
                    },
                    "typeArguments": null,
                    "start": 2511,
                    "end": 2523
                  },
                  "start": 2508,
                  "end": 2523
                },
                "start": 2483,
                "end": 2523
              },
              "start": 2481,
              "end": 2523
            },
            "start": 2443,
            "end": 2523
          },
          "init": null,
          "definite": false,
          "start": 2443,
          "end": 2523
        }
      ],
      "declare": false,
      "start": 2439,
      "end": 2524
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "referencedInSignartureParamTypeFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2571,
                          "end": 2575
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2577,
                          "end": 2582
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2571,
                        "end": 2582
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2586,
                          "end": 2591
                        },
                        "typeArguments": null,
                        "start": 2586,
                        "end": 2591
                      },
                      "start": 2584,
                      "end": 2591
                    },
                    "start": 2569,
                    "end": 2591
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2603,
                          "end": 2608
                        },
                        "typeArguments": null,
                        "start": 2596,
                        "end": 2608
                      },
                      "start": 2594,
                      "end": 2608
                    },
                    "start": 2593,
                    "end": 2608
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2613,
                    "end": 2617
                  },
                  "start": 2610,
                  "end": 2617
                },
                "start": 2568,
                "end": 2617
              },
              "start": 2566,
              "end": 2617
            },
            "start": 2529,
            "end": 2617
          },
          "init": null,
          "definite": false,
          "start": 2529,
          "end": 2617
        }
      ],
      "declare": false,
      "start": 2525,
      "end": 2618
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notReferencedCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2654,
                          "end": 2658
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2660,
                          "end": 2665
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2654,
                        "end": 2665
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2669,
                          "end": 2674
                        },
                        "typeArguments": null,
                        "start": 2669,
                        "end": 2674
                      },
                      "start": 2667,
                      "end": 2674
                    },
                    "start": 2652,
                    "end": 2674
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2679,
                    "end": 2683
                  },
                  "start": 2676,
                  "end": 2683
                },
                "start": 2647,
                "end": 2683
              },
              "start": 2645,
              "end": 2683
            },
            "start": 2624,
            "end": 2683
          },
          "init": null,
          "definite": false,
          "start": 2624,
          "end": 2683
        }
      ],
      "declare": false,
      "start": 2620,
      "end": 2684
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "referencedInSignartureReturnTypeCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2738,
                          "end": 2742
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2744,
                          "end": 2749
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2738,
                        "end": 2749
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2753,
                          "end": 2758
                        },
                        "typeArguments": null,
                        "start": 2753,
                        "end": 2758
                      },
                      "start": 2751,
                      "end": 2758
                    },
                    "start": 2736,
                    "end": 2758
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2770,
                      "end": 2775
                    },
                    "typeArguments": null,
                    "start": 2763,
                    "end": 2775
                  },
                  "start": 2760,
                  "end": 2775
                },
                "start": 2731,
                "end": 2775
              },
              "start": 2729,
              "end": 2775
            },
            "start": 2689,
            "end": 2775
          },
          "init": null,
          "definite": false,
          "start": 2689,
          "end": 2775
        }
      ],
      "declare": false,
      "start": 2685,
      "end": 2776
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "referencedInSignartureParamTypeCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2830,
                          "end": 2834
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2836,
                          "end": 2841
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2830,
                        "end": 2841
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2845,
                          "end": 2850
                        },
                        "typeArguments": null,
                        "start": 2845,
                        "end": 2850
                      },
                      "start": 2843,
                      "end": 2850
                    },
                    "start": 2828,
                    "end": 2850
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2862,
                          "end": 2867
                        },
                        "typeArguments": null,
                        "start": 2855,
                        "end": 2867
                      },
                      "start": 2853,
                      "end": 2867
                    },
                    "start": 2852,
                    "end": 2867
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2872,
                    "end": 2876
                  },
                  "start": 2869,
                  "end": 2876
                },
                "start": 2822,
                "end": 2876
              },
              "start": 2820,
              "end": 2876
            },
            "start": 2781,
            "end": 2876
          },
          "init": null,
          "definite": false,
          "start": 2781,
          "end": 2876
        }
      ],
      "declare": false,
      "start": 2777,
      "end": 2877
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotReferencedInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2890,
        "end": 2912
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 2919,
                      "end": 2923
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2925,
                      "end": 2930
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2919,
                    "end": 2930
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2934,
                      "end": 2939
                    },
                    "typeArguments": null,
                    "start": 2934,
                    "end": 2939
                  },
                  "start": 2932,
                  "end": 2939
                },
                "start": 2917,
                "end": 2939
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2942,
                "end": 2946
              },
              "start": 2940,
              "end": 2946
            },
            "start": 2916,
            "end": 2946
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 2955,
                      "end": 2959
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2961,
                      "end": 2966
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2955,
                    "end": 2966
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2970,
                      "end": 2975
                    },
                    "typeArguments": null,
                    "start": 2970,
                    "end": 2975
                  },
                  "start": 2968,
                  "end": 2975
                },
                "start": 2953,
                "end": 2975
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2978,
                "end": 2982
              },
              "start": 2976,
              "end": 2982
            },
            "start": 2948,
            "end": 2982
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2988,
              "end": 2989
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 2992,
                      "end": 2996
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2998,
                      "end": 3003
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2992,
                    "end": 3003
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3007,
                      "end": 3012
                    },
                    "typeArguments": null,
                    "start": 3007,
                    "end": 3012
                  },
                  "start": 3005,
                  "end": 3012
                },
                "start": 2990,
                "end": 3012
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2984,
            "end": 3014
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3017
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3020,
                      "end": 3024
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3026,
                      "end": 3031
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3020,
                    "end": 3031
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3035,
                      "end": 3040
                    },
                    "typeArguments": null,
                    "start": 3035,
                    "end": 3040
                  },
                  "start": 3033,
                  "end": 3040
                },
                "start": 3018,
                "end": 3040
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3016,
            "end": 3042
          }
        ],
        "start": 2913,
        "end": 3044
      },
      "declare": false,
      "start": 2880,
      "end": 3044
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInSignartureInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 3056,
        "end": 3087
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3094,
                      "end": 3098
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3100,
                      "end": 3105
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3094,
                    "end": 3105
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3109,
                      "end": 3114
                    },
                    "typeArguments": null,
                    "start": 3109,
                    "end": 3114
                  },
                  "start": 3107,
                  "end": 3114
                },
                "start": 3092,
                "end": 3114
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3126,
                      "end": 3131
                    },
                    "typeArguments": null,
                    "start": 3119,
                    "end": 3131
                  },
                  "start": 3117,
                  "end": 3131
                },
                "start": 3116,
                "end": 3131
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3134,
                "end": 3138
              },
              "start": 3132,
              "end": 3138
            },
            "start": 3091,
            "end": 3138
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3143,
                      "end": 3147
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3149,
                      "end": 3154
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3143,
                    "end": 3154
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3158,
                      "end": 3163
                    },
                    "typeArguments": null,
                    "start": 3158,
                    "end": 3163
                  },
                  "start": 3156,
                  "end": 3163
                },
                "start": 3141,
                "end": 3163
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3173,
                  "end": 3178
                },
                "typeArguments": null,
                "start": 3166,
                "end": 3178
              },
              "start": 3164,
              "end": 3178
            },
            "start": 3140,
            "end": 3178
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3189,
                      "end": 3193
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3195,
                      "end": 3200
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3189,
                    "end": 3200
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3204,
                      "end": 3209
                    },
                    "typeArguments": null,
                    "start": 3204,
                    "end": 3209
                  },
                  "start": 3202,
                  "end": 3209
                },
                "start": 3187,
                "end": 3209
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3221,
                      "end": 3226
                    },
                    "typeArguments": null,
                    "start": 3214,
                    "end": 3226
                  },
                  "start": 3212,
                  "end": 3226
                },
                "start": 3211,
                "end": 3226
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3229,
                "end": 3233
              },
              "start": 3227,
              "end": 3233
            },
            "start": 3182,
            "end": 3233
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3242,
                      "end": 3246
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3248,
                      "end": 3253
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3242,
                    "end": 3253
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3257,
                      "end": 3262
                    },
                    "typeArguments": null,
                    "start": 3257,
                    "end": 3262
                  },
                  "start": 3255,
                  "end": 3262
                },
                "start": 3240,
                "end": 3262
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3272,
                  "end": 3277
                },
                "typeArguments": null,
                "start": 3265,
                "end": 3277
              },
              "start": 3263,
              "end": 3277
            },
            "start": 3235,
            "end": 3277
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3283,
              "end": 3284
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3287,
                      "end": 3291
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3293,
                      "end": 3298
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3287,
                    "end": 3298
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3302,
                          "end": 3307
                        },
                        "typeArguments": null,
                        "start": 3302,
                        "end": 3307
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "o",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3312,
                              "end": 3313
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "alias",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3322,
                                  "end": 3327
                                },
                                "typeArguments": null,
                                "start": 3315,
                                "end": 3327
                              },
                              "start": 3313,
                              "end": 3327
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3312,
                            "end": 3327
                          }
                        ],
                        "start": 3310,
                        "end": 3329
                      }
                    ],
                    "start": 3302,
                    "end": 3329
                  },
                  "start": 3300,
                  "end": 3329
                },
                "start": 3285,
                "end": 3329
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3279,
            "end": 3330
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3332,
              "end": 3343
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3346,
                      "end": 3350
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3352,
                      "end": 3357
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3346,
                    "end": 3357
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3361,
                      "end": 3366
                    },
                    "typeArguments": null,
                    "start": 3361,
                    "end": 3366
                  },
                  "start": 3359,
                  "end": 3366
                },
                "start": 3344,
                "end": 3366
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3376,
                  "end": 3381
                },
                "typeArguments": null,
                "start": 3369,
                "end": 3381
              },
              "start": 3367,
              "end": 3381
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3332,
            "end": 3382
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mRerturnTypeNested",
              "optional": false,
              "typeAnnotation": null,
              "start": 3384,
              "end": 3402
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3405,
                      "end": 3409
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3411,
                      "end": 3416
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3405,
                    "end": 3416
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3420,
                      "end": 3425
                    },
                    "typeArguments": null,
                    "start": 3420,
                    "end": 3425
                  },
                  "start": 3418,
                  "end": 3425
                },
                "start": 3403,
                "end": 3425
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3428,
                  "end": 3439
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3447,
                        "end": 3452
                      },
                      "typeArguments": null,
                      "start": 3440,
                      "end": 3452
                    }
                  ],
                  "start": 3439,
                  "end": 3453
                },
                "start": 3428,
                "end": 3453
              },
              "start": 3426,
              "end": 3453
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3384,
            "end": 3454
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 3459,
              "end": 3469
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 3472,
                      "end": 3476
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3478,
                      "end": 3483
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3472,
                    "end": 3483
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3487,
                      "end": 3492
                    },
                    "typeArguments": null,
                    "start": 3487,
                    "end": 3492
                  },
                  "start": 3485,
                  "end": 3492
                },
                "start": 3470,
                "end": 3492
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3504,
                      "end": 3509
                    },
                    "typeArguments": null,
                    "start": 3497,
                    "end": 3509
                  },
                  "start": 3495,
                  "end": 3509
                },
                "start": 3494,
                "end": 3509
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3459,
            "end": 3511
          }
        ],
        "start": 3088,
        "end": 3513
      },
      "declare": false,
      "start": 3046,
      "end": 3513
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3513
}
```
