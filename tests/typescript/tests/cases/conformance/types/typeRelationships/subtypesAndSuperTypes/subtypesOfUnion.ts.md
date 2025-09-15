__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 11
            },
            "initializer": null,
            "computed": false,
            "start": 9,
            "end": 11
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 15
          }
        ],
        "start": 7,
        "end": 17
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 30
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 37,
                    "end": 43
                  },
                  "start": 35,
                  "end": 43
                },
                "start": 34,
                "end": 43
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 46,
                  "end": 52
                },
                "start": 46,
                "end": 54
              },
              "start": 44,
              "end": 54
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 33,
            "end": 55
          }
        ],
        "start": 31,
        "end": 57
      },
      "declare": false,
      "start": 18,
      "end": 57
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 65
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
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
            "start": 68,
            "end": 80
          }
        ],
        "start": 66,
        "end": 82
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 82
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 91
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
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 91,
        "end": 94
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 100
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
                  "start": 102,
                  "end": 103
                },
                "typeArguments": null,
                "start": 102,
                "end": 103
              },
              "start": 100,
              "end": 103
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
            "start": 97,
            "end": 104
          }
        ],
        "start": 95,
        "end": 106
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 106
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 117
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 120,
        "end": 123
      },
      "expression": false,
      "start": 107,
      "end": 123
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 135
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 152
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 155,
                    "end": 156
                  },
                  "definite": false,
                  "start": 149,
                  "end": 156
                }
              ],
              "declare": false,
              "start": 145,
              "end": 157
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 138,
            "end": 157
          }
        ],
        "start": 136,
        "end": 159
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 124,
      "end": 159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 167
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 175,
                "end": 181
              },
              "start": 173,
              "end": 181
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
            "start": 170,
            "end": 181
          }
        ],
        "start": 168,
        "end": 183
      },
      "abstract": false,
      "declare": false,
      "start": 160,
      "end": 183
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 195
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 212
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 215,
                    "end": 216
                  },
                  "definite": false,
                  "start": 209,
                  "end": 216
                }
              ],
              "declare": false,
              "start": 205,
              "end": 217
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 198,
            "end": 217
          }
        ],
        "start": 196,
        "end": 219
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 184,
      "end": 219
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 312
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
              "start": 313,
              "end": 314
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 313,
            "end": 314
          }
        ],
        "start": 312,
        "end": 315
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 326,
                    "end": 332
                  },
                  "start": 324,
                  "end": 332
                },
                "start": 323,
                "end": 332
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 344,
                    "end": 350
                  }
                ],
                "start": 335,
                "end": 350
              },
              "start": 333,
              "end": 350
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 322,
            "end": 351
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 359
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 361,
                "end": 364
              },
              "start": 359,
              "end": 364
            },
            "accessibility": null,
            "static": false,
            "start": 356,
            "end": 365
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 380
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 382,
                "end": 388
              },
              "start": 380,
              "end": 388
            },
            "accessibility": null,
            "static": false,
            "start": 376,
            "end": 389
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 404
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 406,
                "end": 412
              },
              "start": 404,
              "end": 412
            },
            "accessibility": null,
            "static": false,
            "start": 400,
            "end": 413
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 428
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 430,
                "end": 437
              },
              "start": 428,
              "end": 437
            },
            "accessibility": null,
            "static": false,
            "start": 424,
            "end": 438
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 457
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 460
                },
                "typeArguments": null,
                "start": 459,
                "end": 460
              },
              "start": 457,
              "end": 460
            },
            "accessibility": null,
            "static": false,
            "start": 453,
            "end": 461
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 497
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 503
                },
                "typeArguments": null,
                "start": 499,
                "end": 503
              },
              "start": 497,
              "end": 503
            },
            "accessibility": null,
            "static": false,
            "start": 493,
            "end": 504
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 522
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 524,
                  "end": 530
                },
                "typeArguments": null,
                "start": 524,
                "end": 530
              },
              "start": 522,
              "end": 530
            },
            "accessibility": null,
            "static": false,
            "start": 518,
            "end": 531
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 549
            },
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 556
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 558,
                        "end": 564
                      },
                      "start": 556,
                      "end": 564
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 553,
                    "end": 564
                  }
                ],
                "start": 551,
                "end": 566
              },
              "start": 549,
              "end": 566
            },
            "accessibility": null,
            "static": false,
            "start": 545,
            "end": 567
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 585
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 589
                },
                "typeArguments": null,
                "start": 587,
                "end": 589
              },
              "start": 585,
              "end": 589
            },
            "accessibility": null,
            "static": false,
            "start": 581,
            "end": 590
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 609
            },
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
                  "start": 611,
                  "end": 612
                },
                "typeArguments": null,
                "start": 611,
                "end": 612
              },
              "start": 609,
              "end": 612
            },
            "accessibility": null,
            "static": false,
            "start": 604,
            "end": 613
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 632
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 636
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 637,
                      "end": 643
                    }
                  ],
                  "start": 636,
                  "end": 644
                },
                "start": 634,
                "end": 644
              },
              "start": 632,
              "end": 644
            },
            "accessibility": null,
            "static": false,
            "start": 627,
            "end": 645
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 664
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 667,
                    "end": 668
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 673,
                    "end": 679
                  },
                  "start": 670,
                  "end": 679
                },
                "start": 666,
                "end": 679
              },
              "start": 664,
              "end": 679
            },
            "accessibility": null,
            "static": false,
            "start": 659,
            "end": 680
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 698
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 701,
                        "end": 702
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 701,
                      "end": 702
                    }
                  ],
                  "start": 700,
                  "end": 703
                },
                "params": [
                  {
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 707,
                          "end": 708
                        },
                        "typeArguments": null,
                        "start": 707,
                        "end": 708
                      },
                      "start": 705,
                      "end": 708
                    },
                    "start": 704,
                    "end": 708
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
                      "start": 713,
                      "end": 714
                    },
                    "typeArguments": null,
                    "start": 713,
                    "end": 714
                  },
                  "start": 710,
                  "end": 714
                },
                "start": 700,
                "end": 714
              },
              "start": 698,
              "end": 714
            },
            "accessibility": null,
            "static": false,
            "start": 693,
            "end": 715
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 734
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 743,
                  "end": 744
                },
                "typeArguments": null,
                "start": 736,
                "end": 744
              },
              "start": 734,
              "end": 744
            },
            "accessibility": null,
            "static": false,
            "start": 729,
            "end": 745
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 764
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 774
                },
                "typeArguments": null,
                "start": 766,
                "end": 774
              },
              "start": 764,
              "end": 774
            },
            "accessibility": null,
            "static": false,
            "start": 759,
            "end": 775
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
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
                  "start": 796,
                  "end": 797
                },
                "typeArguments": null,
                "start": 796,
                "end": 797
              },
              "start": 794,
              "end": 797
            },
            "accessibility": null,
            "static": false,
            "start": 789,
            "end": 798
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 817
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 825
                },
                "typeArguments": null,
                "start": 819,
                "end": 825
              },
              "start": 817,
              "end": 825
            },
            "accessibility": null,
            "static": false,
            "start": 812,
            "end": 826
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 840,
              "end": 845
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 847,
                "end": 849
              },
              "start": 845,
              "end": 849
            },
            "accessibility": null,
            "static": false,
            "start": 840,
            "end": 850
          }
        ],
        "start": 316,
        "end": 861
      },
      "declare": false,
      "start": 300,
      "end": 861
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 872,
        "end": 874
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
              "start": 875,
              "end": 876
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 875,
            "end": 876
          }
        ],
        "start": 874,
        "end": 877
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 888,
                    "end": 894
                  },
                  "start": 886,
                  "end": 894
                },
                "start": 885,
                "end": 894
              }
            ],
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
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 897,
                      "end": 898
                    },
                    "typeArguments": null,
                    "start": 897,
                    "end": 898
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 901,
                    "end": 907
                  }
                ],
                "start": 897,
                "end": 907
              },
              "start": 895,
              "end": 907
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 884,
            "end": 908
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 916
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 918,
                "end": 921
              },
              "start": 916,
              "end": 921
            },
            "accessibility": null,
            "static": false,
            "start": 913,
            "end": 922
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 937
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 939,
                "end": 945
              },
              "start": 937,
              "end": 945
            },
            "accessibility": null,
            "static": false,
            "start": 933,
            "end": 946
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 960,
              "end": 964
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 966,
                "end": 972
              },
              "start": 964,
              "end": 972
            },
            "accessibility": null,
            "static": false,
            "start": 960,
            "end": 973
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 988
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 990,
                "end": 997
              },
              "start": 988,
              "end": 997
            },
            "accessibility": null,
            "static": false,
            "start": 984,
            "end": 998
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1013,
              "end": 1017
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1019,
                  "end": 1020
                },
                "typeArguments": null,
                "start": 1019,
                "end": 1020
              },
              "start": 1017,
              "end": 1020
            },
            "accessibility": null,
            "static": false,
            "start": 1013,
            "end": 1021
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1036
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1042
                },
                "typeArguments": null,
                "start": 1038,
                "end": 1042
              },
              "start": 1036,
              "end": 1042
            },
            "accessibility": null,
            "static": false,
            "start": 1032,
            "end": 1043
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1061
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1063,
                  "end": 1069
                },
                "typeArguments": null,
                "start": 1063,
                "end": 1069
              },
              "start": 1061,
              "end": 1069
            },
            "accessibility": null,
            "static": false,
            "start": 1057,
            "end": 1070
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1088
            },
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1092,
                      "end": 1095
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1097,
                        "end": 1103
                      },
                      "start": 1095,
                      "end": 1103
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1092,
                    "end": 1103
                  }
                ],
                "start": 1090,
                "end": 1105
              },
              "start": 1088,
              "end": 1105
            },
            "accessibility": null,
            "static": false,
            "start": 1084,
            "end": 1106
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1126,
                  "end": 1128
                },
                "typeArguments": null,
                "start": 1126,
                "end": 1128
              },
              "start": 1124,
              "end": 1128
            },
            "accessibility": null,
            "static": false,
            "start": 1120,
            "end": 1129
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1143,
              "end": 1148
            },
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
                  "start": 1150,
                  "end": 1151
                },
                "typeArguments": null,
                "start": 1150,
                "end": 1151
              },
              "start": 1148,
              "end": 1151
            },
            "accessibility": null,
            "static": false,
            "start": 1143,
            "end": 1152
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1166,
              "end": 1171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1175
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1176,
                      "end": 1182
                    }
                  ],
                  "start": 1175,
                  "end": 1183
                },
                "start": 1173,
                "end": 1183
              },
              "start": 1171,
              "end": 1183
            },
            "accessibility": null,
            "static": false,
            "start": 1166,
            "end": 1184
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1206,
                    "end": 1207
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1212,
                    "end": 1218
                  },
                  "start": 1209,
                  "end": 1218
                },
                "start": 1205,
                "end": 1218
              },
              "start": 1203,
              "end": 1218
            },
            "accessibility": null,
            "static": false,
            "start": 1198,
            "end": 1219
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1232,
              "end": 1237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 1240,
                        "end": 1241
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1240,
                      "end": 1241
                    }
                  ],
                  "start": 1239,
                  "end": 1242
                },
                "params": [
                  {
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1246,
                          "end": 1247
                        },
                        "typeArguments": null,
                        "start": 1246,
                        "end": 1247
                      },
                      "start": 1244,
                      "end": 1247
                    },
                    "start": 1243,
                    "end": 1247
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
                      "start": 1252,
                      "end": 1253
                    },
                    "typeArguments": null,
                    "start": 1252,
                    "end": 1253
                  },
                  "start": 1249,
                  "end": 1253
                },
                "start": 1239,
                "end": 1253
              },
              "start": 1237,
              "end": 1253
            },
            "accessibility": null,
            "static": false,
            "start": 1232,
            "end": 1254
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1268,
              "end": 1273
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1282,
                  "end": 1283
                },
                "typeArguments": null,
                "start": 1275,
                "end": 1283
              },
              "start": 1273,
              "end": 1283
            },
            "accessibility": null,
            "static": false,
            "start": 1268,
            "end": 1284
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1298,
              "end": 1303
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1313
                },
                "typeArguments": null,
                "start": 1305,
                "end": 1313
              },
              "start": 1303,
              "end": 1313
            },
            "accessibility": null,
            "static": false,
            "start": 1298,
            "end": 1314
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1333
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
                  "start": 1335,
                  "end": 1336
                },
                "typeArguments": null,
                "start": 1335,
                "end": 1336
              },
              "start": 1333,
              "end": 1336
            },
            "accessibility": null,
            "static": false,
            "start": 1328,
            "end": 1337
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1351,
              "end": 1356
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1358,
                  "end": 1364
                },
                "typeArguments": null,
                "start": 1358,
                "end": 1364
              },
              "start": 1356,
              "end": 1364
            },
            "accessibility": null,
            "static": false,
            "start": 1351,
            "end": 1365
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 1379,
              "end": 1384
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1386,
                "end": 1388
              },
              "start": 1384,
              "end": 1388
            },
            "accessibility": null,
            "static": false,
            "start": 1379,
            "end": 1389
          }
        ],
        "start": 878,
        "end": 1400
      },
      "declare": false,
      "start": 862,
      "end": 1400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1400
}
```
