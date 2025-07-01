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
        "start": 7,
        "end": 8
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
              "start": 21,
              "end": 29
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 30,
              "end": 37
            },
            "abstract": false,
            "declare": false,
            "start": 15,
            "end": 37
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
                "start": 56,
                "end": 63
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 64,
                "end": 71
              },
              "abstract": false,
              "declare": false,
              "start": 50,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 71
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 135
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
                  "start": 139,
                  "end": 147
                },
                "typeArguments": null,
                "start": 139,
                "end": 147
              },
              "start": 137,
              "end": 147
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 158,
                  "end": 165
                }
              ],
              "start": 148,
              "end": 171
            },
            "expression": false,
            "start": 122,
            "end": 171
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
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
                      "start": 213,
                      "end": 221
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 209,
                    "end": 223
                  },
                  "start": 202,
                  "end": 224
                }
              ],
              "start": 192,
              "end": 230
            },
            "expression": false,
            "start": 176,
            "end": 230
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
                "start": 252,
                "end": 256
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
                    "start": 260,
                    "end": 268
                  },
                  "typeArguments": null,
                  "start": 260,
                  "end": 268
                },
                "start": 258,
                "end": 268
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 279,
                    "end": 286
                  }
                ],
                "start": 269,
                "end": 292
              },
              "expression": false,
              "start": 243,
              "end": 292
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 236,
            "end": 292
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
                "start": 313,
                "end": 317
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
                        "start": 341,
                        "end": 349
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 337,
                      "end": 351
                    },
                    "start": 330,
                    "end": 352
                  }
                ],
                "start": 320,
                "end": 358
              },
              "expression": false,
              "start": 304,
              "end": 358
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 297,
            "end": 358
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 378
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
                  "start": 382,
                  "end": 389
                },
                "typeArguments": null,
                "start": 382,
                "end": 389
              },
              "start": 380,
              "end": 389
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 400,
                  "end": 407
                }
              ],
              "start": 390,
              "end": 413
            },
            "expression": false,
            "start": 364,
            "end": 413
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 432
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
                      "start": 456,
                      "end": 463
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 452,
                    "end": 465
                  },
                  "start": 445,
                  "end": 466
                }
              ],
              "start": 435,
              "end": 472
            },
            "expression": false,
            "start": 418,
            "end": 472
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
                "start": 494,
                "end": 499
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
                    "start": 503,
                    "end": 510
                  },
                  "typeArguments": null,
                  "start": 503,
                  "end": 510
                },
                "start": 501,
                "end": 510
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 521,
                    "end": 528
                  }
                ],
                "start": 511,
                "end": 534
              },
              "expression": false,
              "start": 485,
              "end": 534
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 478,
            "end": 534
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
                "start": 555,
                "end": 560
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
                        "start": 584,
                        "end": 591
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 580,
                      "end": 593
                    },
                    "start": 573,
                    "end": 594
                  }
                ],
                "start": 563,
                "end": 600
              },
              "expression": false,
              "start": 546,
              "end": 600
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 539,
            "end": 600
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 615
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
                      "start": 639,
                      "end": 646
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 647,
                      "end": 658
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 633,
                    "end": 658
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 626,
                  "end": 658
                }
              ],
              "start": 616,
              "end": 664
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 606,
            "end": 664
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo111",
              "optional": false,
              "typeAnnotation": null,
              "start": 679,
              "end": 685
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
                    "start": 689,
                    "end": 691
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 692,
                    "end": 699
                  },
                  "start": 689,
                  "end": 699
                },
                "typeArguments": null,
                "start": 689,
                "end": 699
              },
              "start": 687,
              "end": 699
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 710,
                  "end": 717
                }
              ],
              "start": 700,
              "end": 723
            },
            "expression": false,
            "start": 670,
            "end": 723
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo112",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 743
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
                        "start": 767,
                        "end": 769
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "public2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 770,
                        "end": 777
                      },
                      "optional": false,
                      "computed": false,
                      "start": 767,
                      "end": 777
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 763,
                    "end": 779
                  },
                  "start": 756,
                  "end": 780
                }
              ],
              "start": 746,
              "end": 786
            },
            "expression": false,
            "start": 728,
            "end": 786
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
                "start": 808,
                "end": 814
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
                      "start": 818,
                      "end": 820
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 821,
                      "end": 828
                    },
                    "start": 818,
                    "end": 828
                  },
                  "typeArguments": null,
                  "start": 818,
                  "end": 828
                },
                "start": 816,
                "end": 828
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 839,
                    "end": 846
                  }
                ],
                "start": 829,
                "end": 852
              },
              "expression": false,
              "start": 799,
              "end": 852
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 792,
            "end": 852
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
                "start": 873,
                "end": 879
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
                          "start": 903,
                          "end": 905
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "public2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 906,
                          "end": 913
                        },
                        "optional": false,
                        "computed": false,
                        "start": 903,
                        "end": 913
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 899,
                      "end": 915
                    },
                    "start": 892,
                    "end": 916
                  }
                ],
                "start": 882,
                "end": 922
              },
              "expression": false,
              "start": 864,
              "end": 922
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 857,
            "end": 922
          }
        ],
        "start": 9,
        "end": 924
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 924
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 924
}
```
