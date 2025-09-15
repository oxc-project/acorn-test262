__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 32
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 33,
              "end": 40
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 40
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "public1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 66
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 67,
                "end": 74
              },
              "abstract": false,
              "declare": false,
              "start": 53,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 74
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 138
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "private1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 150
                },
                "typeArguments": null,
                "start": 142,
                "end": 150
              },
              "start": 140,
              "end": 150
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 161,
                  "end": 168
                }
              ],
              "start": 151,
              "end": 174
            },
            "expression": false,
            "start": 125,
            "end": 174
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 192
            },
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
                      "name": "private1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 224
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 212,
                    "end": 226
                  },
                  "start": 205,
                  "end": 227
                }
              ],
              "start": 195,
              "end": 233
            },
            "expression": false,
            "start": 179,
            "end": 233
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 259
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "private1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 271
                  },
                  "typeArguments": null,
                  "start": 263,
                  "end": 271
                },
                "start": 261,
                "end": 271
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 282,
                    "end": 289
                  }
                ],
                "start": 272,
                "end": 295
              },
              "expression": false,
              "start": 246,
              "end": 295
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 239,
            "end": 295
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 320
              },
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
                        "name": "private1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 352
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 340,
                      "end": 354
                    },
                    "start": 333,
                    "end": 355
                  }
                ],
                "start": 323,
                "end": 361
              },
              "expression": false,
              "start": 307,
              "end": 361
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 300,
            "end": 361
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 381
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "public1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 392
                },
                "typeArguments": null,
                "start": 385,
                "end": 392
              },
              "start": 383,
              "end": 392
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 403,
                  "end": 410
                }
              ],
              "start": 393,
              "end": 416
            },
            "expression": false,
            "start": 367,
            "end": 416
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 435
            },
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
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 466
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 455,
                    "end": 468
                  },
                  "start": 448,
                  "end": 469
                }
              ],
              "start": 438,
              "end": 475
            },
            "expression": false,
            "start": 421,
            "end": 475
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo13",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 502
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 513
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 513
                },
                "start": 504,
                "end": 513
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 524,
                    "end": 531
                  }
                ],
                "start": 514,
                "end": 537
              },
              "expression": false,
              "start": 488,
              "end": 537
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 481,
            "end": 537
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo14",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 563
              },
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
                        "name": "public1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 594
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 583,
                      "end": 596
                    },
                    "start": 576,
                    "end": 597
                  }
                ],
                "start": 566,
                "end": 603
              },
              "expression": false,
              "start": 549,
              "end": 603
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 542,
            "end": 603
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 621
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 645,
                      "end": 652
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 653,
                      "end": 664
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 639,
                    "end": 664
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 632,
                  "end": 664
                }
              ],
              "start": 622,
              "end": 670
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 609,
            "end": 670
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo111",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 691
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 697
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 698,
                    "end": 705
                  },
                  "start": 695,
                  "end": 705
                },
                "typeArguments": null,
                "start": 695,
                "end": 705
              },
              "start": 693,
              "end": 705
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 716,
                  "end": 723
                }
              ],
              "start": 706,
              "end": 729
            },
            "expression": false,
            "start": 676,
            "end": 729
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo112",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 749
            },
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 773,
                        "end": 775
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "public2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 776,
                        "end": 783
                      },
                      "optional": false,
                      "computed": false,
                      "start": 773,
                      "end": 783
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 769,
                    "end": 785
                  },
                  "start": 762,
                  "end": 786
                }
              ],
              "start": 752,
              "end": 792
            },
            "expression": false,
            "start": 734,
            "end": 792
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo113",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 820
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 824,
                      "end": 826
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 827,
                      "end": 834
                    },
                    "start": 824,
                    "end": 834
                  },
                  "typeArguments": null,
                  "start": 824,
                  "end": 834
                },
                "start": 822,
                "end": 834
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 845,
                    "end": 852
                  }
                ],
                "start": 835,
                "end": 858
              },
              "expression": false,
              "start": 805,
              "end": 858
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 798,
            "end": 858
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo114",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 885
              },
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 909,
                          "end": 911
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "public2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 919
                        },
                        "optional": false,
                        "computed": false,
                        "start": 909,
                        "end": 919
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 905,
                      "end": 921
                    },
                    "start": 898,
                    "end": 922
                  }
                ],
                "start": 888,
                "end": 928
              },
              "expression": false,
              "start": 870,
              "end": 928
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 863,
            "end": 928
          }
        ],
        "start": 12,
        "end": 930
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 930
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 930
}
```
