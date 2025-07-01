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
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 12,
              "end": 15
            },
            "start": 12,
            "end": 15
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 18,
              "end": 21
            },
            "start": 18,
            "end": 21
          }
        ],
        "start": 12,
        "end": 21
      },
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 39
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 50
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 56
                },
                "typeArguments": null,
                "start": 52,
                "end": 56
              },
              "start": 50,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 57
          }
        ],
        "start": 40,
        "end": 59
      },
      "declare": false,
      "start": 23,
      "end": 59
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 87
          },
          "typeArguments": null,
          "start": 81,
          "end": 87
        }
      ],
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 98
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 100,
                  "end": 103
                },
                "start": 100,
                "end": 103
              },
              "start": 98,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 119
          }
        ],
        "start": 88,
        "end": 121
      },
      "declare": false,
      "start": 61,
      "end": 121
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 134
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 149
          },
          "typeArguments": null,
          "start": 143,
          "end": 149
        }
      ],
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 160
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 162,
                  "end": 165
                },
                "start": 162,
                "end": 165
              },
              "start": 160,
              "end": 165
            },
            "accessibility": null,
            "static": false,
            "start": 156,
            "end": 166
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 174,
                "end": 180
              },
              "start": 172,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 171,
            "end": 181
          }
        ],
        "start": 150,
        "end": 183
      },
      "declare": false,
      "start": 123,
      "end": 183
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 478
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 493
              },
              "typeArguments": null,
              "start": 487,
              "end": 493
            },
            "start": 485,
            "end": 493
          },
          "start": 479,
          "end": 493
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 501,
                    "end": 504
                  },
                  "start": 501,
                  "end": 504
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 507,
                    "end": 510
                  },
                  "start": 507,
                  "end": 510
                }
              ],
              "start": 501,
              "end": 510
            },
            "start": 499,
            "end": 510
          },
          "start": 495,
          "end": 510
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 519
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 524
              },
              "typeArguments": null,
              "start": 523,
              "end": 524
            },
            "start": 523,
            "end": 524
          },
          "start": 513,
          "end": 524
        },
        "start": 511,
        "end": 524
      },
      "body": null,
      "expression": false,
      "start": 462,
      "end": 525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 542
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 557
              },
              "typeArguments": null,
              "start": 551,
              "end": 557
            },
            "start": 549,
            "end": 557
          },
          "start": 543,
          "end": 557
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 565,
                    "end": 568
                  },
                  "start": 565,
                  "end": 568
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 571,
                    "end": 574
                  },
                  "start": 571,
                  "end": 574
                }
              ],
              "start": 565,
              "end": 574
            },
            "start": 563,
            "end": 574
          },
          "start": 559,
          "end": 574
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 583
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 588
              },
              "typeArguments": null,
              "start": 587,
              "end": 588
            },
            "start": 587,
            "end": 588
          },
          "start": 577,
          "end": 588
        },
        "start": 575,
        "end": 588
      },
      "body": null,
      "expression": false,
      "start": 526,
      "end": 589
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 599,
        "end": 606
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 621
              },
              "typeArguments": null,
              "start": 615,
              "end": 621
            },
            "start": 613,
            "end": 621
          },
          "start": 607,
          "end": 621
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 633
              },
              "typeArguments": null,
              "start": 629,
              "end": 633
            },
            "start": 627,
            "end": 633
          },
          "start": 623,
          "end": 633
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 642
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 652
              },
              "typeArguments": null,
              "start": 646,
              "end": 652
            },
            "start": 646,
            "end": 652
          },
          "start": 636,
          "end": 652
        },
        "start": 634,
        "end": 652
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 666,
                  "end": 672
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 677
                },
                "optional": false,
                "computed": false,
                "start": 666,
                "end": 677
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 686
              },
              "start": 666,
              "end": 686
            },
            "start": 659,
            "end": 687
          }
        ],
        "start": 653,
        "end": 689
      },
      "expression": false,
      "start": 590,
      "end": 689
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 699
                },
                "typeArguments": null,
                "start": 698,
                "end": 699
              },
              "start": 696,
              "end": 699
            },
            "start": 695,
            "end": 699
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 712
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 714,
                  "end": 717
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 708,
                "end": 717
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 724
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 726,
                  "end": 729
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 723,
                "end": 729
              }
            ],
            "start": 702,
            "end": 732
          },
          "definite": false,
          "start": 695,
          "end": 732
        }
      ],
      "declare": false,
      "start": 691,
      "end": 732
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 738,
          "end": 745
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 747
          },
          {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 749,
            "end": 752
          }
        ],
        "optional": false,
        "start": 738,
        "end": 753
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 766
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 770
                },
                "definite": false,
                "start": 765,
                "end": 770
              }
            ],
            "declare": false,
            "start": 761,
            "end": 771
          }
        ],
        "start": 755,
        "end": 773
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 789,
                  "end": 790
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 794
                },
                "definite": false,
                "start": 789,
                "end": 794
              }
            ],
            "declare": false,
            "start": 785,
            "end": 795
          }
        ],
        "start": 779,
        "end": 797
      },
      "start": 734,
      "end": 797
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "hasKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 804,
            "end": 811
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 813
            },
            {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 815,
              "end": 818
            }
          ],
          "optional": false,
          "start": 804,
          "end": 819
        },
        "prefix": true,
        "start": 803,
        "end": 819
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 831,
                  "end": 832
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 836
                },
                "definite": false,
                "start": 831,
                "end": 836
              }
            ],
            "declare": false,
            "start": 827,
            "end": 837
          }
        ],
        "start": 821,
        "end": 839
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 855,
                  "end": 856
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 860
                },
                "definite": false,
                "start": 855,
                "end": 860
              }
            ],
            "declare": false,
            "start": 851,
            "end": 861
          }
        ],
        "start": 845,
        "end": 863
      },
      "start": 799,
      "end": 863
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 863
}
```
