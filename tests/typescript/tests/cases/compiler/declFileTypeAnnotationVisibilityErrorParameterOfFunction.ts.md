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
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 146,
                    "end": 154
                  },
                  "start": 144,
                  "end": 154
                },
                "start": 139,
                "end": 154
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 156,
              "end": 163
            },
            "expression": false,
            "start": 125,
            "end": 163
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 181
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 187
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "private1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 202
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 190,
                  "end": 204
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 204
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 206,
              "end": 213
            },
            "expression": false,
            "start": 168,
            "end": 213
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
                "start": 235,
                "end": 239
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "private1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 256
                      },
                      "typeArguments": null,
                      "start": 248,
                      "end": 256
                    },
                    "start": 246,
                    "end": 256
                  },
                  "start": 240,
                  "end": 256
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 258,
                "end": 265
              },
              "expression": false,
              "start": 226,
              "end": 265
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 219,
            "end": 265
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
                "start": 286,
                "end": 290
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 296
                  },
                  "right": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 311
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 299,
                    "end": 313
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 313
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 315,
                "end": 322
              },
              "expression": false,
              "start": 277,
              "end": 322
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 270,
            "end": 322
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 342
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 357
                    },
                    "typeArguments": null,
                    "start": 350,
                    "end": 357
                  },
                  "start": 348,
                  "end": 357
                },
                "start": 343,
                "end": 357
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 359,
              "end": 366
            },
            "expression": false,
            "start": 328,
            "end": 366
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 385
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 391
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 405
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 394,
                  "end": 407
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 407
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 409,
              "end": 416
            },
            "expression": false,
            "start": 371,
            "end": 416
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
                "start": 438,
                "end": 443
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "public1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 451,
                        "end": 458
                      },
                      "typeArguments": null,
                      "start": 451,
                      "end": 458
                    },
                    "start": 449,
                    "end": 458
                  },
                  "start": 444,
                  "end": 458
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 460,
                "end": 467
              },
              "expression": false,
              "start": 429,
              "end": 467
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 422,
            "end": 467
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
                "start": 488,
                "end": 493
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 499
                  },
                  "right": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 513
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 502,
                    "end": 515
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 515
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 517,
                "end": 524
              },
              "expression": false,
              "start": 479,
              "end": 524
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 472,
            "end": 524
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 542
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
                      "start": 566,
                      "end": 573
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 574,
                      "end": 585
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 560,
                    "end": 585
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 553,
                  "end": 585
                }
              ],
              "start": 543,
              "end": 591
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 530,
            "end": 591
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo111",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 612
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
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
                        "start": 620,
                        "end": 622
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "public2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 623,
                        "end": 630
                      },
                      "start": 620,
                      "end": 630
                    },
                    "typeArguments": null,
                    "start": 620,
                    "end": 630
                  },
                  "start": 618,
                  "end": 630
                },
                "start": 613,
                "end": 630
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 632,
              "end": 639
            },
            "expression": false,
            "start": 597,
            "end": 639
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo112",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 659
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 665
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 674
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 682
                    },
                    "optional": false,
                    "computed": false,
                    "start": 672,
                    "end": 682
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 668,
                  "end": 684
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 684
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 686,
              "end": 693
            },
            "expression": false,
            "start": 644,
            "end": 693
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
                "start": 715,
                "end": 721
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
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
                          "start": 729,
                          "end": 731
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "public2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 732,
                          "end": 739
                        },
                        "start": 729,
                        "end": 739
                      },
                      "typeArguments": null,
                      "start": 729,
                      "end": 739
                    },
                    "start": 727,
                    "end": 739
                  },
                  "start": 722,
                  "end": 739
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 741,
                "end": 748
              },
              "expression": false,
              "start": 706,
              "end": 748
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 699,
            "end": 748
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
                "start": 769,
                "end": 775
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 776,
                    "end": 781
                  },
                  "right": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 788,
                        "end": 790
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "public2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 791,
                        "end": 798
                      },
                      "optional": false,
                      "computed": false,
                      "start": 788,
                      "end": 798
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 784,
                    "end": 800
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 776,
                  "end": 800
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 802,
                "end": 809
              },
              "expression": false,
              "start": 760,
              "end": 809
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 753,
            "end": 809
          }
        ],
        "start": 12,
        "end": 811
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 811
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 811
}
```
