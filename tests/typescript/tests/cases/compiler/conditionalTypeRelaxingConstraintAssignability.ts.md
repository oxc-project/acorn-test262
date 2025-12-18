__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElChildren",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 22
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 39
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Void",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 44
                },
                "start": 29,
                "end": 44
              },
              "typeArguments": null,
              "start": 29,
              "end": 44
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 59
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "start": 49,
                "end": 64
              },
              "typeArguments": null,
              "start": 49,
              "end": 64
            }
          ],
          "start": 27,
          "end": 64
        },
        "declare": false,
        "start": 7,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 65
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElChildren",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 93
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Void",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 114
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSUndefinedKeyword",
                  "start": 117,
                  "end": 126
                },
                "declare": false,
                "start": 105,
                "end": 127
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 98,
              "end": 127
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 146
                },
                "typeParameters": null,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 149,
                  "end": 155
                },
                "declare": false,
                "start": 137,
                "end": 156
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 130,
              "end": 156
            }
          ],
          "start": 94,
          "end": 158
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 73,
        "end": 158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Relax",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 170
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElChildren",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 191
              },
              "typeArguments": null,
              "start": 181,
              "end": 191
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 171,
            "end": 191
          }
        ],
        "start": 170,
        "end": 192
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 196
          },
          "typeArguments": null,
          "start": 195,
          "end": 196
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElChildren",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 215
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Text",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 220
            },
            "start": 205,
            "end": 220
          },
          "typeArguments": null,
          "start": 205,
          "end": 220
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElChildren",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 233
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Text",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 238
            },
            "start": 223,
            "end": 238
          },
          "typeArguments": null,
          "start": 223,
          "end": 238
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
          },
          "typeArguments": null,
          "start": 241,
          "end": 242
        },
        "start": 195,
        "end": 242
      },
      "declare": false,
      "start": 160,
      "end": 243
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 262
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 267
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 286
                },
                "typeArguments": null,
                "start": 276,
                "end": 286
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 266,
              "end": 286
            }
          ],
          "start": 262,
          "end": 291
        },
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
                "start": 296,
                "end": 307
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
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Relax",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 332,
                            "end": 337
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 338,
                                  "end": 339
                                },
                                "typeArguments": null,
                                "start": 338,
                                "end": 339
                              }
                            ],
                            "start": 337,
                            "end": 340
                          },
                          "start": 332,
                          "end": 340
                        },
                        "start": 330,
                        "end": 340
                      },
                      "start": 321,
                      "end": 340
                    },
                    "readonly": false,
                    "static": false,
                    "start": 313,
                    "end": 340
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 346,
                  "end": 351
                },
                "expression": false,
                "start": 307,
                "end": 351
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 296,
              "end": 351
            }
          ],
          "start": 292,
          "end": 353
        },
        "abstract": false,
        "declare": false,
        "start": 252,
        "end": 353
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 245,
      "end": 353
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 363
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 373
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 387
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Void",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 392
                },
                "start": 377,
                "end": 392
              },
              "typeArguments": null,
              "start": 377,
              "end": 392
            },
            "start": 364,
            "end": 392
          }
        ],
        "start": 355,
        "end": 393
      },
      "directive": null,
      "start": 355,
      "end": 394
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 399,
          "end": 403
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 404,
              "end": 406
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ElChildren",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 420
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 425
                },
                "start": 410,
                "end": 425
              },
              "typeArguments": null,
              "start": 410,
              "end": 425
            },
            "start": 404,
            "end": 425
          }
        ],
        "start": 395,
        "end": 426
      },
      "directive": null,
      "start": 395,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 432,
          "end": 436
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 437,
              "end": 439
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElChildren",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 453
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Void",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 458
                    },
                    "start": 443,
                    "end": 458
                  },
                  "typeArguments": null,
                  "start": 443,
                  "end": 458
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElChildren",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 471
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Text",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 476
                    },
                    "start": 461,
                    "end": 476
                  },
                  "typeArguments": null,
                  "start": 461,
                  "end": 476
                }
              ],
              "start": 443,
              "end": 476
            },
            "start": 437,
            "end": 476
          }
        ],
        "start": 428,
        "end": 477
      },
      "directive": null,
      "start": 428,
      "end": 478
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 497,
              "end": 499
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElChildren",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 513
              },
              "typeArguments": null,
              "start": 503,
              "end": 513
            },
            "start": 497,
            "end": 513
          }
        ],
        "start": 488,
        "end": 514
      },
      "directive": null,
      "start": 488,
      "end": 515
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 559
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 563
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 565,
                "end": 571
              },
              "start": 563,
              "end": 571
            },
            "accessibility": null,
            "static": false,
            "start": 562,
            "end": 571
          }
        ],
        "start": 560,
        "end": 573
      },
      "declare": false,
      "start": 548,
      "end": 573
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepPartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 591
      },
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
              "start": 592,
              "end": 593
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 592,
            "end": 593
          }
        ],
        "start": 591,
        "end": 594
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 602
          },
          "typeArguments": null,
          "start": 601,
          "end": 602
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 611,
          "end": 617
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 622,
            "end": 623
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "typeArguments": null,
              "start": 633,
              "end": 634
            },
            "start": 627,
            "end": 634
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DeepPartial",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 649
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 650,
                      "end": 651
                    },
                    "typeArguments": null,
                    "start": 650,
                    "end": 651
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 652,
                      "end": 653
                    },
                    "typeArguments": null,
                    "start": 652,
                    "end": 653
                  },
                  "start": 650,
                  "end": 654
                }
              ],
              "start": 649,
              "end": 655
            },
            "start": 638,
            "end": 655
          },
          "optional": true,
          "readonly": null,
          "start": 620,
          "end": 656
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 660
          },
          "typeArguments": null,
          "start": 659,
          "end": 660
        },
        "start": 601,
        "end": 660
      },
      "declare": false,
      "start": 575,
      "end": 661
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 680,
        "end": 681
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
              "start": 682,
              "end": 683
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 682,
            "end": 683
          }
        ],
        "start": 681,
        "end": 684
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "start": 688,
                "end": 689
              },
              "typeArguments": null,
              "start": 688,
              "end": 689
            },
            "start": 686,
            "end": 689
          },
          "start": 685,
          "end": 689
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "partial",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepPartial",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 711
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 713
                    },
                    "typeArguments": null,
                    "start": 712,
                    "end": 713
                  }
                ],
                "start": 711,
                "end": 714
              },
              "start": 700,
              "end": 714
            },
            "start": 698,
            "end": 714
          },
          "start": 691,
          "end": 714
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
            "start": 717,
            "end": 718
          },
          "typeArguments": null,
          "start": 717,
          "end": 718
        },
        "start": 715,
        "end": 718
      },
      "body": null,
      "expression": false,
      "start": 663,
      "end": 719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 731
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "typeArguments": null,
              "start": 736,
              "end": 737
            },
            "start": 734,
            "end": 737
          },
          "start": 732,
          "end": 737
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 750
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 751,
                      "end": 752
                    },
                    "typeArguments": null,
                    "start": 751,
                    "end": 752
                  }
                ],
                "start": 750,
                "end": 753
              },
              "start": 743,
              "end": 753
            },
            "start": 741,
            "end": 753
          },
          "start": 739,
          "end": 753
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 756,
            "end": 757
          },
          "typeArguments": null,
          "start": 756,
          "end": 757
        },
        "start": 754,
        "end": 757
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 770
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 773
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 777
                }
              ],
              "optional": false,
              "start": 769,
              "end": 778
            },
            "start": 762,
            "end": 779
          }
        ],
        "start": 758,
        "end": 781
      },
      "expression": false,
      "start": 721,
      "end": 781
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 781
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 12,
    "end": 22,
    "range": [
      12,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 29,
    "end": 39,
    "range": [
      29,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "Void",
    "start": 40,
    "end": 44,
    "range": [
      40,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 49,
    "end": 59,
    "range": [
      49,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "Text",
    "start": 60,
    "end": 64,
    "range": [
      60,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 66,
    "end": 72,
    "range": [
      66,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 73,
    "end": 82,
    "range": [
      73,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 83,
    "end": 93,
    "range": [
      83,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 98,
    "end": 104,
    "range": [
      98,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 105,
    "end": 109,
    "range": [
      105,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "Void",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 117,
    "end": 126,
    "range": [
      117,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 137,
    "end": 141,
    "range": [
      137,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "Text",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155,
    "range": [
      149,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 160,
    "end": 164,
    "range": [
      160,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "Relax",
    "start": 165,
    "end": 170,
    "range": [
      165,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 173,
    "end": 180,
    "range": [
      173,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 181,
    "end": 191,
    "range": [
      181,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 197,
    "end": 204,
    "range": [
      197,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 205,
    "end": 215,
    "range": [
      205,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "Text",
    "start": 216,
    "end": 220,
    "range": [
      216,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 223,
    "end": 233,
    "range": [
      223,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "Text",
    "start": 234,
    "end": 238,
    "range": [
      234,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 252,
    "end": 257,
    "range": [
      252,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "Elem",
    "start": 258,
    "end": 262,
    "range": [
      258,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 268,
    "end": 275,
    "range": [
      268,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 276,
    "end": 286,
    "range": [
      276,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 296,
    "end": 307,
    "range": [
      296,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 313,
    "end": 320,
    "range": [
      313,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "children_",
    "start": 321,
    "end": 330,
    "range": [
      321,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "Relax",
    "start": 332,
    "end": 337,
    "range": [
      332,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 355,
    "end": 358,
    "range": [
      355,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "Elem",
    "start": 359,
    "end": 363,
    "range": [
      359,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 364,
    "end": 373,
    "range": [
      364,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 374,
    "end": 376,
    "range": [
      374,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 377,
    "end": 387,
    "range": [
      377,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "Void",
    "start": 388,
    "end": 392,
    "range": [
      388,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 395,
    "end": 398,
    "range": [
      395,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "Elem",
    "start": 399,
    "end": 403,
    "range": [
      399,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 404,
    "end": 406,
    "range": [
      404,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 407,
    "end": 409,
    "range": [
      407,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 410,
    "end": 420,
    "range": [
      410,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "Text",
    "start": 421,
    "end": 425,
    "range": [
      421,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 428,
    "end": 431,
    "range": [
      428,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "Elem",
    "start": 432,
    "end": 436,
    "range": [
      432,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 437,
    "end": 439,
    "range": [
      437,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 440,
    "end": 442,
    "range": [
      440,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 443,
    "end": 453,
    "range": [
      443,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "Void",
    "start": 454,
    "end": 458,
    "range": [
      454,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 461,
    "end": 471,
    "range": [
      461,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "Text",
    "start": 472,
    "end": 476,
    "range": [
      472,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 488,
    "end": 491,
    "range": [
      488,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "Elem",
    "start": 492,
    "end": 496,
    "range": [
      492,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 497,
    "end": 499,
    "range": [
      497,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 500,
    "end": 502,
    "range": [
      500,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "ElChildren",
    "start": 503,
    "end": 513,
    "range": [
      503,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 548,
    "end": 557,
    "range": [
      548,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 565,
    "end": 571,
    "range": [
      565,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 575,
    "end": 579,
    "range": [
      575,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 580,
    "end": 591,
    "range": [
      580,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 603,
    "end": 610,
    "range": [
      603,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 611,
    "end": 617,
    "range": [
      611,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 624,
    "end": 626,
    "range": [
      624,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 627,
    "end": 632,
    "range": [
      627,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 638,
    "end": 649,
    "range": [
      638,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 663,
    "end": 670,
    "range": [
      663,
      670
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 671,
    "end": 679,
    "range": [
      671,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 691,
    "end": 698,
    "range": [
      691,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "DeepPartial",
    "start": 700,
    "end": 711,
    "range": [
      700,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 721,
    "end": 729,
    "range": [
      721,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 730,
    "end": 731,
    "range": [
      730,
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
    "type": "Identifier",
    "value": "p1",
    "start": 732,
    "end": 734,
    "range": [
      732,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 739,
    "end": 741,
    "range": [
      739,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 743,
    "end": 750,
    "range": [
      743,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 762,
    "end": 768,
    "range": [
      762,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 771,
    "end": 773,
    "range": [
      771,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 775,
    "end": 777,
    "range": [
      775,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  }
]
```
