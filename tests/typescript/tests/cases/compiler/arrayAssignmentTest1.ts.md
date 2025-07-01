__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "IM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSVoidKeyword",
                  "start": 22,
                  "end": 26
                },
                "start": 22,
                "end": 28
              },
              "start": 21,
              "end": 28
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 16,
            "end": 29
          }
        ],
        "start": 13,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 55
          },
          "typeArguments": null,
          "start": 53,
          "end": 55
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "IM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "start": 66,
                    "end": 70
                  },
                  "start": 66,
                  "end": 72
                },
                "start": 65,
                "end": 72
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 81,
                      "end": 85
                    },
                    "start": 74,
                    "end": 86
                  }
                ],
                "start": 73,
                "end": 87
              },
              "expression": false,
              "start": 63,
              "end": 87
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 60,
            "end": 87
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 98
                    },
                    "typeArguments": null,
                    "start": 96,
                    "end": 98
                  },
                  "start": 96,
                  "end": 100
                },
                "start": 95,
                "end": 100
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 109,
                      "end": 113
                    },
                    "start": 102,
                    "end": 114
                  }
                ],
                "start": 101,
                "end": 115
              },
              "expression": false,
              "start": 93,
              "end": 115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 89,
            "end": 115
          }
        ],
        "start": 56,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 118
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
        "start": 125,
        "end": 127
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 138
      },
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
              "name": "C2M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 149
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 152,
                    "end": 154
                  },
                  "start": 152,
                  "end": 156
                },
                "start": 151,
                "end": 156
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 166,
                      "end": 170
                    },
                    "start": 159,
                    "end": 171
                  }
                ],
                "start": 157,
                "end": 172
              },
              "expression": false,
              "start": 149,
              "end": 172
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 172
          }
        ],
        "start": 139,
        "end": 174
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 174
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
        "start": 182,
        "end": 184
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
              "name": "CM3M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 196
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
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 208,
                      "end": 209
                    },
                    "start": 201,
                    "end": 210
                  }
                ],
                "start": 199,
                "end": 211
              },
              "expression": false,
              "start": 196,
              "end": 211
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 191,
            "end": 211
          }
        ],
        "start": 185,
        "end": 213
      },
      "abstract": false,
      "declare": false,
      "start": 176,
      "end": 213
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 507,
                "end": 510
              },
              "start": 505,
              "end": 510
            },
            "start": 502,
            "end": 510
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 513,
            "end": 517
          },
          "definite": false,
          "start": 502,
          "end": 517
        }
      ],
      "declare": false,
      "start": 498,
      "end": 518
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 530
                },
                "typeArguments": null,
                "start": 528,
                "end": 530
              },
              "start": 526,
              "end": 530
            },
            "start": 523,
            "end": 530
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 539
            },
            "typeArguments": null,
            "arguments": [],
            "start": 533,
            "end": 541
          },
          "definite": false,
          "start": 523,
          "end": 541
        }
      ],
      "declare": false,
      "start": 519,
      "end": 542
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 554
                },
                "typeArguments": null,
                "start": 552,
                "end": 554
              },
              "start": 550,
              "end": 554
            },
            "start": 547,
            "end": 554
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 559
          },
          "definite": false,
          "start": 547,
          "end": 559
        }
      ],
      "declare": false,
      "start": 543,
      "end": 560
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 572
                },
                "typeArguments": null,
                "start": 570,
                "end": 572
              },
              "start": 568,
              "end": 572
            },
            "start": 565,
            "end": 572
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 581
            },
            "typeArguments": null,
            "arguments": [],
            "start": 575,
            "end": 583
          },
          "definite": false,
          "start": 565,
          "end": 583
        }
      ],
      "declare": false,
      "start": 561,
      "end": 584
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 596
                },
                "typeArguments": null,
                "start": 594,
                "end": 596
              },
              "start": 592,
              "end": 596
            },
            "start": 589,
            "end": 596
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 605
            },
            "typeArguments": null,
            "arguments": [],
            "start": 599,
            "end": 607
          },
          "definite": false,
          "start": 589,
          "end": 607
        }
      ],
      "declare": false,
      "start": 585,
      "end": 608
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 615
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
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 622
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 625,
                  "end": 626
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 619,
                "end": 626
              }
            ],
            "start": 618,
            "end": 627
          },
          "definite": false,
          "start": 613,
          "end": 627
        }
      ],
      "declare": false,
      "start": 609,
      "end": 628
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 635
          },
          "init": {
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
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 663,
                      "end": 665
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 659,
                    "end": 667
                  },
                  "start": 652,
                  "end": 668
                }
              ],
              "start": 650,
              "end": 669
            },
            "expression": false,
            "start": 638,
            "end": 669
          },
          "definite": false,
          "start": 633,
          "end": 669
        }
      ],
      "declare": false,
      "start": 629,
      "end": 669
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
            "name": "arr_any",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 684,
                  "end": 687
                },
                "start": 684,
                "end": 689
              },
              "start": 682,
              "end": 689
            },
            "start": 675,
            "end": 689
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 692,
            "end": 694
          },
          "definite": false,
          "start": 675,
          "end": 694
        }
      ],
      "declare": false,
      "start": 671,
      "end": 695
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
            "name": "arr_i1",
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
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 710
                  },
                  "typeArguments": null,
                  "start": 708,
                  "end": 710
                },
                "start": 708,
                "end": 712
              },
              "start": 706,
              "end": 712
            },
            "start": 700,
            "end": 712
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 715,
            "end": 717
          },
          "definite": false,
          "start": 700,
          "end": 717
        }
      ],
      "declare": false,
      "start": 696,
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
            "name": "arr_c1",
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 731,
                    "end": 733
                  },
                  "typeArguments": null,
                  "start": 731,
                  "end": 733
                },
                "start": 731,
                "end": 735
              },
              "start": 729,
              "end": 735
            },
            "start": 723,
            "end": 735
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 738,
            "end": 740
          },
          "definite": false,
          "start": 723,
          "end": 740
        }
      ],
      "declare": false,
      "start": 719,
      "end": 741
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
            "name": "arr_c2",
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
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 756
                  },
                  "typeArguments": null,
                  "start": 754,
                  "end": 756
                },
                "start": 754,
                "end": 758
              },
              "start": 752,
              "end": 758
            },
            "start": 746,
            "end": 758
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 761,
            "end": 763
          },
          "definite": false,
          "start": 746,
          "end": 763
        }
      ],
      "declare": false,
      "start": 742,
      "end": 764
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
            "name": "arr_i1_2",
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
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 779,
                    "end": 781
                  },
                  "typeArguments": null,
                  "start": 779,
                  "end": 781
                },
                "start": 779,
                "end": 783
              },
              "start": 777,
              "end": 783
            },
            "start": 769,
            "end": 783
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 786,
            "end": 788
          },
          "definite": false,
          "start": 769,
          "end": 788
        }
      ],
      "declare": false,
      "start": 765,
      "end": 789
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
            "name": "arr_c1_2",
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 806
                  },
                  "typeArguments": null,
                  "start": 804,
                  "end": 806
                },
                "start": 804,
                "end": 808
              },
              "start": 802,
              "end": 808
            },
            "start": 794,
            "end": 808
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 811,
            "end": 813
          },
          "definite": false,
          "start": 794,
          "end": 813
        }
      ],
      "declare": false,
      "start": 790,
      "end": 814
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
            "name": "arr_c2_2",
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
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 829,
                    "end": 831
                  },
                  "typeArguments": null,
                  "start": 829,
                  "end": 831
                },
                "start": 829,
                "end": 833
              },
              "start": 827,
              "end": 833
            },
            "start": 819,
            "end": 833
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 836,
            "end": 838
          },
          "definite": false,
          "start": 819,
          "end": 838
        }
      ],
      "declare": false,
      "start": 815,
      "end": 839
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
            "name": "arr_c3",
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
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 852,
                    "end": 854
                  },
                  "typeArguments": null,
                  "start": 852,
                  "end": 854
                },
                "start": 852,
                "end": 856
              },
              "start": 850,
              "end": 856
            },
            "start": 844,
            "end": 856
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 859,
            "end": 861
          },
          "definite": false,
          "start": 844,
          "end": 861
        }
      ],
      "declare": false,
      "start": 840,
      "end": 862
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
            "name": "i1_error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 880
                },
                "typeArguments": null,
                "start": 878,
                "end": 880
              },
              "start": 876,
              "end": 880
            },
            "start": 868,
            "end": 880
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 883,
            "end": 885
          },
          "definite": false,
          "start": 868,
          "end": 885
        }
      ],
      "declare": false,
      "start": 864,
      "end": 886
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
            "name": "c1_error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 928,
                  "end": 930
                },
                "typeArguments": null,
                "start": 928,
                "end": 930
              },
              "start": 926,
              "end": 930
            },
            "start": 918,
            "end": 930
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 933,
            "end": 935
          },
          "definite": false,
          "start": 918,
          "end": 935
        }
      ],
      "declare": false,
      "start": 914,
      "end": 936
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
            "name": "c2_error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 978,
                  "end": 980
                },
                "typeArguments": null,
                "start": 978,
                "end": 980
              },
              "start": 976,
              "end": 980
            },
            "start": 968,
            "end": 980
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 983,
            "end": 985
          },
          "definite": false,
          "start": 968,
          "end": 985
        }
      ],
      "declare": false,
      "start": 964,
      "end": 986
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
            "name": "c3_error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1028,
                  "end": 1030
                },
                "typeArguments": null,
                "start": 1028,
                "end": 1030
              },
              "start": 1026,
              "end": 1030
            },
            "start": 1018,
            "end": 1030
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1033,
            "end": 1035
          },
          "definite": false,
          "start": 1018,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 1014,
      "end": 1036
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 1066,
          "end": 1073
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1082
        },
        "start": 1066,
        "end": 1082
      },
      "directive": null,
      "start": 1066,
      "end": 1083
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 1105,
          "end": 1112
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1121
        },
        "start": 1105,
        "end": 1121
      },
      "directive": null,
      "start": 1105,
      "end": 1122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1151
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1154,
          "end": 1160
        },
        "start": 1144,
        "end": 1160
      },
      "directive": null,
      "start": 1144,
      "end": 1161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 1183,
          "end": 1190
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1193,
          "end": 1199
        },
        "start": 1183,
        "end": 1199
      },
      "directive": null,
      "start": 1183,
      "end": 1200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1223,
          "end": 1229
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1232,
          "end": 1238
        },
        "start": 1223,
        "end": 1238
      },
      "directive": null,
      "start": 1223,
      "end": 1239
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1284,
          "end": 1290
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1293,
          "end": 1299
        },
        "start": 1284,
        "end": 1299
      },
      "directive": null,
      "start": 1284,
      "end": 1300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1345,
          "end": 1351
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1354,
          "end": 1360
        },
        "start": 1345,
        "end": 1360
      },
      "directive": null,
      "start": 1345,
      "end": 1361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1406,
          "end": 1412
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1415,
          "end": 1421
        },
        "start": 1406,
        "end": 1421
      },
      "directive": null,
      "start": 1406,
      "end": 1422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1451,
          "end": 1457
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1460,
          "end": 1466
        },
        "start": 1451,
        "end": 1466
      },
      "directive": null,
      "start": 1451,
      "end": 1467
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1512,
          "end": 1518
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1521,
          "end": 1527
        },
        "start": 1512,
        "end": 1527
      },
      "directive": null,
      "start": 1512,
      "end": 1528
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1573,
          "end": 1579
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1582,
          "end": 1588
        },
        "start": 1573,
        "end": 1588
      },
      "directive": null,
      "start": 1573,
      "end": 1589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1617,
          "end": 1623
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1626,
          "end": 1632
        },
        "start": 1617,
        "end": 1632
      },
      "directive": null,
      "start": 1617,
      "end": 1633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1662,
          "end": 1668
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1671,
          "end": 1677
        },
        "start": 1662,
        "end": 1677
      },
      "directive": null,
      "start": 1662,
      "end": 1678
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1723,
          "end": 1729
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1732,
          "end": 1738
        },
        "start": 1723,
        "end": 1738
      },
      "directive": null,
      "start": 1723,
      "end": 1739
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1790,
          "end": 1796
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1799,
          "end": 1805
        },
        "start": 1790,
        "end": 1805
      },
      "directive": null,
      "start": 1790,
      "end": 1806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1857,
          "end": 1863
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1866,
          "end": 1872
        },
        "start": 1857,
        "end": 1872
      },
      "directive": null,
      "start": 1857,
      "end": 1873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2083,
          "end": 2089
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2092,
          "end": 2100
        },
        "start": 2083,
        "end": 2100
      },
      "directive": null,
      "start": 2083,
      "end": 2101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2129,
          "end": 2135
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2138,
          "end": 2146
        },
        "start": 2129,
        "end": 2146
      },
      "directive": null,
      "start": 2129,
      "end": 2147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2175,
          "end": 2181
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2184,
          "end": 2192
        },
        "start": 2175,
        "end": 2192
      },
      "directive": null,
      "start": 2175,
      "end": 2193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2222,
          "end": 2229
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2232,
          "end": 2234
        },
        "start": 2222,
        "end": 2234
      },
      "directive": null,
      "start": 2222,
      "end": 2235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2263,
          "end": 2270
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2273,
          "end": 2275
        },
        "start": 2263,
        "end": 2275
      },
      "directive": null,
      "start": 2263,
      "end": 2276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2304,
          "end": 2311
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2314,
          "end": 2316
        },
        "start": 2304,
        "end": 2316
      },
      "directive": null,
      "start": 2304,
      "end": 2317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2339,
          "end": 2346
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2349,
          "end": 2351
        },
        "start": 2339,
        "end": 2351
      },
      "directive": null,
      "start": 2339,
      "end": 2352
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2380,
          "end": 2387
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2390,
          "end": 2392
        },
        "start": 2380,
        "end": 2392
      },
      "directive": null,
      "start": 2380,
      "end": 2393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2421,
          "end": 2428
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 2431,
          "end": 2433
        },
        "start": 2421,
        "end": 2433
      },
      "directive": null,
      "start": 2421,
      "end": 2434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null,
          "start": 2462,
          "end": 2469
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2472,
          "end": 2474
        },
        "start": 2462,
        "end": 2474
      },
      "directive": null,
      "start": 2462,
      "end": 2475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2502
}
```
