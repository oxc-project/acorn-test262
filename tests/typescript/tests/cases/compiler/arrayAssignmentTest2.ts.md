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
              "start": 142,
              "end": 146
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
                      "start": 149,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 149,
                    "end": 151
                  },
                  "start": 149,
                  "end": 153
                },
                "start": 148,
                "end": 153
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
                      "start": 163,
                      "end": 167
                    },
                    "start": 156,
                    "end": 168
                  }
                ],
                "start": 154,
                "end": 169
              },
              "expression": false,
              "start": 146,
              "end": 169
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 142,
            "end": 169
          }
        ],
        "start": 139,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 119,
      "end": 171
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
        "start": 179,
        "end": 181
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
              "start": 185,
              "end": 190
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
                      "start": 202,
                      "end": 203
                    },
                    "start": 195,
                    "end": 204
                  }
                ],
                "start": 193,
                "end": 205
              },
              "expression": false,
              "start": 190,
              "end": 205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 185,
            "end": 205
          }
        ],
        "start": 182,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 173,
      "end": 207
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
                "start": 501,
                "end": 504
              },
              "start": 499,
              "end": 504
            },
            "start": 496,
            "end": 504
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 507,
            "end": 511
          },
          "definite": false,
          "start": 496,
          "end": 511
        }
      ],
      "declare": false,
      "start": 492,
      "end": 512
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
                  "start": 522,
                  "end": 524
                },
                "typeArguments": null,
                "start": 522,
                "end": 524
              },
              "start": 520,
              "end": 524
            },
            "start": 517,
            "end": 524
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 533
            },
            "typeArguments": null,
            "arguments": [],
            "start": 527,
            "end": 535
          },
          "definite": false,
          "start": 517,
          "end": 535
        }
      ],
      "declare": false,
      "start": 513,
      "end": 536
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
                  "start": 546,
                  "end": 548
                },
                "typeArguments": null,
                "start": 546,
                "end": 548
              },
              "start": 544,
              "end": 548
            },
            "start": 541,
            "end": 548
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 553
          },
          "definite": false,
          "start": 541,
          "end": 553
        }
      ],
      "declare": false,
      "start": 537,
      "end": 554
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
                  "start": 564,
                  "end": 566
                },
                "typeArguments": null,
                "start": 564,
                "end": 566
              },
              "start": 562,
              "end": 566
            },
            "start": 559,
            "end": 566
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 575
            },
            "typeArguments": null,
            "arguments": [],
            "start": 569,
            "end": 577
          },
          "definite": false,
          "start": 559,
          "end": 577
        }
      ],
      "declare": false,
      "start": 555,
      "end": 578
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
                  "start": 588,
                  "end": 590
                },
                "typeArguments": null,
                "start": 588,
                "end": 590
              },
              "start": 586,
              "end": 590
            },
            "start": 583,
            "end": 590
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 599
            },
            "typeArguments": null,
            "arguments": [],
            "start": 593,
            "end": 601
          },
          "definite": false,
          "start": 583,
          "end": 601
        }
      ],
      "declare": false,
      "start": 579,
      "end": 602
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
            "start": 607,
            "end": 609
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
                  "start": 613,
                  "end": 616
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 619,
                  "end": 620
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 613,
                "end": 620
              }
            ],
            "start": 612,
            "end": 621
          },
          "definite": false,
          "start": 607,
          "end": 621
        }
      ],
      "declare": false,
      "start": 603,
      "end": 622
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
            "start": 627,
            "end": 629
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
                      "start": 657,
                      "end": 659
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 653,
                    "end": 661
                  },
                  "start": 646,
                  "end": 662
                }
              ],
              "start": 644,
              "end": 663
            },
            "expression": false,
            "start": 632,
            "end": 663
          },
          "definite": false,
          "start": 627,
          "end": 663
        }
      ],
      "declare": false,
      "start": 623,
      "end": 663
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
                  "start": 678,
                  "end": 681
                },
                "start": 678,
                "end": 683
              },
              "start": 676,
              "end": 683
            },
            "start": 669,
            "end": 683
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 686,
            "end": 688
          },
          "definite": false,
          "start": 669,
          "end": 688
        }
      ],
      "declare": false,
      "start": 665,
      "end": 689
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
                    "start": 702,
                    "end": 704
                  },
                  "typeArguments": null,
                  "start": 702,
                  "end": 704
                },
                "start": 702,
                "end": 706
              },
              "start": 700,
              "end": 706
            },
            "start": 694,
            "end": 706
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 709,
            "end": 711
          },
          "definite": false,
          "start": 694,
          "end": 711
        }
      ],
      "declare": false,
      "start": 690,
      "end": 712
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
                    "start": 725,
                    "end": 727
                  },
                  "typeArguments": null,
                  "start": 725,
                  "end": 727
                },
                "start": 725,
                "end": 729
              },
              "start": 723,
              "end": 729
            },
            "start": 717,
            "end": 729
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 732,
            "end": 734
          },
          "definite": false,
          "start": 717,
          "end": 734
        }
      ],
      "declare": false,
      "start": 713,
      "end": 735
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
                    "start": 748,
                    "end": 750
                  },
                  "typeArguments": null,
                  "start": 748,
                  "end": 750
                },
                "start": 748,
                "end": 752
              },
              "start": 746,
              "end": 752
            },
            "start": 740,
            "end": 752
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 755,
            "end": 757
          },
          "definite": false,
          "start": 740,
          "end": 757
        }
      ],
      "declare": false,
      "start": 736,
      "end": 758
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
                    "start": 773,
                    "end": 775
                  },
                  "typeArguments": null,
                  "start": 773,
                  "end": 775
                },
                "start": 773,
                "end": 777
              },
              "start": 771,
              "end": 777
            },
            "start": 763,
            "end": 777
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 780,
            "end": 782
          },
          "definite": false,
          "start": 763,
          "end": 782
        }
      ],
      "declare": false,
      "start": 759,
      "end": 783
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
                    "start": 798,
                    "end": 800
                  },
                  "typeArguments": null,
                  "start": 798,
                  "end": 800
                },
                "start": 798,
                "end": 802
              },
              "start": 796,
              "end": 802
            },
            "start": 788,
            "end": 802
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 805,
            "end": 807
          },
          "definite": false,
          "start": 788,
          "end": 807
        }
      ],
      "declare": false,
      "start": 784,
      "end": 808
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
                    "start": 823,
                    "end": 825
                  },
                  "typeArguments": null,
                  "start": 823,
                  "end": 825
                },
                "start": 823,
                "end": 827
              },
              "start": 821,
              "end": 827
            },
            "start": 813,
            "end": 827
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 830,
            "end": 832
          },
          "definite": false,
          "start": 813,
          "end": 832
        }
      ],
      "declare": false,
      "start": 809,
      "end": 833
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
                    "start": 846,
                    "end": 848
                  },
                  "typeArguments": null,
                  "start": 846,
                  "end": 848
                },
                "start": 846,
                "end": 850
              },
              "start": 844,
              "end": 850
            },
            "start": 838,
            "end": 850
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 853,
            "end": 855
          },
          "definite": false,
          "start": 838,
          "end": 855
        }
      ],
      "declare": false,
      "start": 834,
      "end": 856
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
          "start": 899,
          "end": 905
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c2_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 908,
          "end": 916
        },
        "start": 899,
        "end": 916
      },
      "directive": null,
      "start": 899,
      "end": 917
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
          "start": 945,
          "end": 951
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_c1_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 954,
          "end": 962
        },
        "start": 945,
        "end": 962
      },
      "directive": null,
      "start": 945,
      "end": 963
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
          "start": 991,
          "end": 997
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "arr_i1_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1000,
          "end": 1008
        },
        "start": 991,
        "end": 1008
      },
      "directive": null,
      "start": 991,
      "end": 1009
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
          "start": 1038,
          "end": 1045
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1048,
          "end": 1050
        },
        "start": 1038,
        "end": 1050
      },
      "directive": null,
      "start": 1038,
      "end": 1051
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
          "start": 1079,
          "end": 1086
        },
        "right": {
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
                  "value": null,
                  "raw": "null",
                  "start": 1110,
                  "end": 1114
                },
                "start": 1103,
                "end": 1115
              }
            ],
            "start": 1101,
            "end": 1116
          },
          "expression": false,
          "start": 1089,
          "end": 1116
        },
        "start": 1079,
        "end": 1116
      },
      "directive": null,
      "start": 1079,
      "end": 1116
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
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1154,
          "end": 1156
        },
        "start": 1144,
        "end": 1156
      },
      "directive": null,
      "start": 1144,
      "end": 1157
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
          "start": 1185,
          "end": 1192
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1197
        },
        "start": 1185,
        "end": 1197
      },
      "directive": null,
      "start": 1185,
      "end": 1198
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
          "start": 1220,
          "end": 1227
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1230,
          "end": 1232
        },
        "start": 1220,
        "end": 1232
      },
      "directive": null,
      "start": 1220,
      "end": 1233
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
          "start": 1261,
          "end": 1268
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1271,
          "end": 1273
        },
        "start": 1261,
        "end": 1273
      },
      "directive": null,
      "start": 1261,
      "end": 1274
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
          "start": 1302,
          "end": 1309
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1314
        },
        "start": 1302,
        "end": 1314
      },
      "directive": null,
      "start": 1302,
      "end": 1315
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
          "start": 1343,
          "end": 1350
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1353,
          "end": 1355
        },
        "start": 1343,
        "end": 1355
      },
      "directive": null,
      "start": 1343,
      "end": 1356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1383
}
```
