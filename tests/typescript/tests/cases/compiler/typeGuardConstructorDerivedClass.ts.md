__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 51
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 58,
            "end": 76
          }
        ],
        "start": 52,
        "end": 78
      },
      "abstract": false,
      "declare": false,
      "start": 43,
      "end": 78
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 88
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 99
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 106,
            "end": 124
          }
        ],
        "start": 100,
        "end": 126
      },
      "abstract": false,
      "declare": false,
      "start": 80,
      "end": 126
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 140
                    },
                    "typeArguments": null,
                    "start": 138,
                    "end": 140
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 143,
                    "end": 149
                  }
                ],
                "start": 138,
                "end": 149
              },
              "start": 136,
              "end": 149
            },
            "start": 132,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 149
        }
      ],
      "declare": false,
      "start": 128,
      "end": 150
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 171
          },
          "optional": false,
          "computed": false,
          "start": 155,
          "end": 171
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 178
        },
        "start": 155,
        "end": 178
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 190
            },
            "directive": null,
            "start": 186,
            "end": 191
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 209
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 219
              },
              "optional": false,
              "computed": false,
              "start": 205,
              "end": 219
            },
            "directive": null,
            "start": 205,
            "end": 220
          }
        ],
        "start": 180,
        "end": 231
      },
      "alternate": null,
      "start": 151,
      "end": 231
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 240
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 252
          },
          "optional": false,
          "computed": false,
          "start": 236,
          "end": 252
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 259
        },
        "start": 236,
        "end": 259
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 271
            },
            "directive": null,
            "start": 267,
            "end": 272
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 287
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "property1",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 297
              },
              "optional": false,
              "computed": false,
              "start": 283,
              "end": 297
            },
            "directive": null,
            "start": 283,
            "end": 298
          }
        ],
        "start": 261,
        "end": 310
      },
      "alternate": null,
      "start": 232,
      "end": 310
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 363
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 364,
        "end": 366
      },
      "abstract": false,
      "declare": false,
      "start": 355,
      "end": 366
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 376
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 387
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 388,
        "end": 390
      },
      "abstract": false,
      "declare": false,
      "start": 368,
      "end": 390
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
            "name": "var2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 404
                    },
                    "typeArguments": null,
                    "start": 402,
                    "end": 404
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 407,
                    "end": 413
                  }
                ],
                "start": 402,
                "end": 413
              },
              "start": 400,
              "end": 413
            },
            "start": 396,
            "end": 413
          },
          "init": null,
          "definite": false,
          "start": 396,
          "end": 413
        }
      ],
      "declare": false,
      "start": 392,
      "end": 414
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 423
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 435
          },
          "optional": false,
          "computed": false,
          "start": 419,
          "end": 435
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 442
        },
        "start": 419,
        "end": 442
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 454
            },
            "directive": null,
            "start": 450,
            "end": 455
          }
        ],
        "start": 444,
        "end": 466
      },
      "alternate": null,
      "start": 415,
      "end": 466
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 475
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 487
          },
          "optional": false,
          "computed": false,
          "start": 471,
          "end": 487
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C4",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 494
        },
        "start": 471,
        "end": 494
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 506
            },
            "directive": null,
            "start": 502,
            "end": 507
          }
        ],
        "start": 496,
        "end": 515
      },
      "alternate": null,
      "start": 467,
      "end": 515
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 558
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 574
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 576,
                "end": 582
              },
              "start": 574,
              "end": 582
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 565,
            "end": 583
          }
        ],
        "start": 559,
        "end": 585
      },
      "abstract": false,
      "declare": false,
      "start": 550,
      "end": 585
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 595
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 611
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 613,
                "end": 619
              },
              "start": 611,
              "end": 619
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 602,
            "end": 620
          }
        ],
        "start": 596,
        "end": 622
      },
      "abstract": false,
      "declare": false,
      "start": 587,
      "end": 622
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
            "name": "let3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 634,
                      "end": 636
                    },
                    "typeArguments": null,
                    "start": 634,
                    "end": 636
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 639,
                    "end": 645
                  }
                ],
                "start": 634,
                "end": 645
              },
              "start": 632,
              "end": 645
            },
            "start": 628,
            "end": 645
          },
          "init": null,
          "definite": false,
          "start": 628,
          "end": 645
        }
      ],
      "declare": false,
      "start": 624,
      "end": 646
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "let3",
            "optional": false,
            "typeAnnotation": null,
            "start": 651,
            "end": 655
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 667
          },
          "optional": false,
          "computed": false,
          "start": 651,
          "end": 667
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C5",
          "optional": false,
          "typeAnnotation": null,
          "start": 672,
          "end": 674
        },
        "start": 651,
        "end": 674
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "let3",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 686
            },
            "directive": null,
            "start": 682,
            "end": 687
          }
        ],
        "start": 676,
        "end": 698
      },
      "alternate": null,
      "start": 647,
      "end": 698
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "let3",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 707
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 719
          },
          "optional": false,
          "computed": false,
          "start": 703,
          "end": 719
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C6",
          "optional": false,
          "typeAnnotation": null,
          "start": 724,
          "end": 726
        },
        "start": 703,
        "end": 726
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "let3",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 738
            },
            "directive": null,
            "start": 734,
            "end": 739
          }
        ],
        "start": 728,
        "end": 747
      },
      "alternate": null,
      "start": 699,
      "end": 747
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 792
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 808
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 810,
                "end": 816
              },
              "start": 808,
              "end": 816
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 799,
            "end": 816
          }
        ],
        "start": 793,
        "end": 818
      },
      "abstract": false,
      "declare": false,
      "start": 784,
      "end": 818
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C8",
        "optional": false,
        "typeAnnotation": null,
        "start": 826,
        "end": 828
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 844
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 846,
                "end": 852
              },
              "start": 844,
              "end": 852
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 835,
            "end": 853
          }
        ],
        "start": 829,
        "end": 855
      },
      "abstract": false,
      "declare": false,
      "start": 820,
      "end": 855
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
            "name": "let4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 867,
                      "end": 869
                    },
                    "typeArguments": null,
                    "start": 867,
                    "end": 869
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 872,
                    "end": 878
                  }
                ],
                "start": 867,
                "end": 878
              },
              "start": 865,
              "end": 878
            },
            "start": 861,
            "end": 878
          },
          "init": null,
          "definite": false,
          "start": 861,
          "end": 878
        }
      ],
      "declare": false,
      "start": 857,
      "end": 879
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "let4",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 888
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 889,
            "end": 900
          },
          "optional": false,
          "computed": false,
          "start": 884,
          "end": 900
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C7",
          "optional": false,
          "typeAnnotation": null,
          "start": 905,
          "end": 907
        },
        "start": 884,
        "end": 907
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "let4",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 919
            },
            "directive": null,
            "start": 915,
            "end": 920
          }
        ],
        "start": 909,
        "end": 931
      },
      "alternate": null,
      "start": 880,
      "end": 931
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "let4",
            "optional": false,
            "typeAnnotation": null,
            "start": 936,
            "end": 940
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 952
          },
          "optional": false,
          "computed": false,
          "start": 936,
          "end": 952
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C8",
          "optional": false,
          "typeAnnotation": null,
          "start": 957,
          "end": 959
        },
        "start": 936,
        "end": 959
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "let4",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 971
            },
            "directive": null,
            "start": 967,
            "end": 972
          }
        ],
        "start": 961,
        "end": 980
      },
      "alternate": null,
      "start": 932,
      "end": 980
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 980
}
```
