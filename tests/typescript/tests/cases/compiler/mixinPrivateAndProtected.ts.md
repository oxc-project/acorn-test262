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
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 38
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
              "start": 39,
              "end": 40
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 38,
        "end": 41
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 55
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 57,
                  "end": 60
                },
                "start": 57,
                "end": 62
              },
              "start": 55,
              "end": 62
            },
            "value": null,
            "start": 48,
            "end": 62
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
              "start": 67,
              "end": 68
            },
            "typeArguments": null,
            "start": 67,
            "end": 68
          },
          "start": 64,
          "end": 68
        },
        "start": 44,
        "end": 68
      },
      "declare": false,
      "start": 22,
      "end": 69
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
        "start": 77,
        "end": 78
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
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 105,
              "end": 106
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 85,
            "end": 107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 136,
              "end": 137
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 112,
            "end": 138
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 156,
                "end": 162
              },
              "start": 154,
              "end": 162
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 165,
              "end": 166
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 143,
            "end": 167
          }
        ],
        "start": 79,
        "end": 169
      },
      "abstract": false,
      "declare": false,
      "start": 71,
      "end": 169
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixB",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 184
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 185,
              "end": 186
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 206
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 207,
                    "end": 209
                  }
                ],
                "start": 206,
                "end": 210
              },
              "start": 195,
              "end": 210
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 210
          }
        ],
        "start": 184,
        "end": 211
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
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
                "start": 217,
                "end": 218
              },
              "typeArguments": null,
              "start": 217,
              "end": 218
            },
            "start": 215,
            "end": 218
          },
          "start": 212,
          "end": 218
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 250
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
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 274
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 276,
                        "end": 282
                      },
                      "start": 274,
                      "end": 282
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 285,
                      "end": 287
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected",
                    "start": 261,
                    "end": 288
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pvt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 308
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 310,
                        "end": 316
                      },
                      "start": 308,
                      "end": 316
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 319,
                      "end": 320
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 297,
                    "end": 321
                  }
                ],
                "start": 251,
                "end": 327
              },
              "abstract": false,
              "declare": false,
              "start": 233,
              "end": 327
            },
            "start": 226,
            "end": 328
          }
        ],
        "start": 220,
        "end": 330
      },
      "expression": false,
      "start": 171,
      "end": 330
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixB2",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 346
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 347,
              "end": 348
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 368
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 370
                    },
                    "typeArguments": null,
                    "start": 369,
                    "end": 370
                  }
                ],
                "start": 368,
                "end": 371
              },
              "start": 357,
              "end": 371
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 371
          }
        ],
        "start": 346,
        "end": 372
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
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
                "start": 378,
                "end": 379
              },
              "typeArguments": null,
              "start": 378,
              "end": 379
            },
            "start": 376,
            "end": 379
          },
          "start": 373,
          "end": 379
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 411
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
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 435
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 437,
                        "end": 443
                      },
                      "start": 435,
                      "end": 443
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 446,
                      "end": 448
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected",
                    "start": 422,
                    "end": 449
                  }
                ],
                "start": 412,
                "end": 455
              },
              "abstract": false,
              "declare": false,
              "start": 394,
              "end": 455
            },
            "start": 387,
            "end": 456
          }
        ],
        "start": 381,
        "end": 458
      },
      "expression": false,
      "start": 332,
      "end": 458
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 472
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixB",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 479
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              }
            ],
            "optional": false,
            "start": 475,
            "end": 482
          },
          "definite": false,
          "start": 470,
          "end": 482
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB2",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 491
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixB2",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 499
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              }
            ],
            "optional": false,
            "start": 494,
            "end": 502
          },
          "definite": false,
          "start": 488,
          "end": 502
        }
      ],
      "declare": false,
      "start": 460,
      "end": 503
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixC",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 518
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 519,
              "end": 520
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 540
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 541,
                    "end": 543
                  }
                ],
                "start": 540,
                "end": 544
              },
              "start": 529,
              "end": 544
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 544
          }
        ],
        "start": 518,
        "end": 545
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
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
                "start": 551,
                "end": 552
              },
              "typeArguments": null,
              "start": 551,
              "end": 552
            },
            "start": 549,
            "end": 552
          },
          "start": 546,
          "end": 552
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 584
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
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 608
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 610,
                        "end": 616
                      },
                      "start": 608,
                      "end": 616
                    },
                    "value": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 619,
                      "end": 622
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected",
                    "start": 595,
                    "end": 623
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pvt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 640,
                      "end": 643
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 645,
                        "end": 651
                      },
                      "start": 643,
                      "end": 651
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 654,
                      "end": 655
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 632,
                    "end": 656
                  }
                ],
                "start": 585,
                "end": 662
              },
              "abstract": false,
              "declare": false,
              "start": 567,
              "end": 662
            },
            "start": 560,
            "end": 663
          }
        ],
        "start": 554,
        "end": 665
      },
      "expression": false,
      "start": 505,
      "end": 665
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB2C",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixC",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 688
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AB2",
                "optional": false,
                "typeAnnotation": null,
                "start": 689,
                "end": 692
              }
            ],
            "optional": false,
            "start": 684,
            "end": 693
          },
          "definite": false,
          "start": 677,
          "end": 693
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ABC",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 702
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixC",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 709
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 712
              }
            ],
            "optional": false,
            "start": 705,
            "end": 713
          },
          "definite": false,
          "start": 699,
          "end": 713
        }
      ],
      "declare": false,
      "start": 667,
      "end": 714
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 727
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 735
            },
            "typeArguments": null,
            "arguments": [],
            "start": 730,
            "end": 737
          },
          "definite": false,
          "start": 726,
          "end": 737
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": null,
            "start": 743,
            "end": 745
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 754
            },
            "typeArguments": null,
            "arguments": [],
            "start": 748,
            "end": 756
          },
          "definite": false,
          "start": 743,
          "end": 756
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 765
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 775
            },
            "typeArguments": null,
            "arguments": [],
            "start": 768,
            "end": 777
          },
          "definite": false,
          "start": 762,
          "end": 777
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 787
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB2C",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 798
            },
            "typeArguments": null,
            "arguments": [],
            "start": 790,
            "end": 800
          },
          "definite": false,
          "start": 783,
          "end": 800
        }
      ],
      "declare": false,
      "start": 716,
      "end": 801
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 804
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 807
            },
            "optional": false,
            "computed": false,
            "start": 803,
            "end": 807
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 815
          },
          "optional": false,
          "computed": false,
          "start": 803,
          "end": 815
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 803,
        "end": 817
      },
      "directive": null,
      "start": 803,
      "end": 818
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 820
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 824
            },
            "optional": false,
            "computed": false,
            "start": 819,
            "end": 824
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 832
          },
          "optional": false,
          "computed": false,
          "start": 819,
          "end": 832
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 819,
        "end": 834
      },
      "directive": null,
      "start": 819,
      "end": 835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 849
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 853
            },
            "optional": false,
            "computed": false,
            "start": 848,
            "end": 853
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 861
          },
          "optional": false,
          "computed": false,
          "start": 848,
          "end": 861
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 848,
        "end": 863
      },
      "directive": null,
      "start": 848,
      "end": 864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 880
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 881,
              "end": 883
            },
            "optional": false,
            "computed": false,
            "start": 878,
            "end": 883
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 891
          },
          "optional": false,
          "computed": false,
          "start": 878,
          "end": 891
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 878,
        "end": 893
      },
      "directive": null,
      "start": 878,
      "end": 894
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 897
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 901
            },
            "optional": false,
            "computed": false,
            "start": 895,
            "end": 901
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 909
          },
          "optional": false,
          "computed": false,
          "start": 895,
          "end": 909
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 895,
        "end": 911
      },
      "directive": null,
      "start": 895,
      "end": 912
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 926
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 930
            },
            "optional": false,
            "computed": false,
            "start": 924,
            "end": 930
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 931,
            "end": 938
          },
          "optional": false,
          "computed": false,
          "start": 924,
          "end": 938
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 924,
        "end": 940
      },
      "directive": null,
      "start": 924,
      "end": 941
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 957
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 960
            },
            "optional": false,
            "computed": false,
            "start": 954,
            "end": 960
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 968
          },
          "optional": false,
          "computed": false,
          "start": 954,
          "end": 968
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 954,
        "end": 970
      },
      "directive": null,
      "start": 954,
      "end": 971
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 975
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 979
            },
            "optional": false,
            "computed": false,
            "start": 972,
            "end": 979
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 980,
            "end": 987
          },
          "optional": false,
          "computed": false,
          "start": 972,
          "end": 987
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 972,
        "end": 989
      },
      "directive": null,
      "start": 972,
      "end": 990
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1004
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 1005,
              "end": 1008
            },
            "optional": false,
            "computed": false,
            "start": 1001,
            "end": 1008
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1016
          },
          "optional": false,
          "computed": false,
          "start": 1001,
          "end": 1016
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1001,
        "end": 1018
      },
      "directive": null,
      "start": 1001,
      "end": 1019
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1031,
              "end": 1035
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null,
              "start": 1036,
              "end": 1038
            },
            "optional": false,
            "computed": false,
            "start": 1031,
            "end": 1038
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1039,
            "end": 1046
          },
          "optional": false,
          "computed": false,
          "start": 1031,
          "end": 1046
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1031,
        "end": 1048
      },
      "directive": null,
      "start": 1031,
      "end": 1049
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1054
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null,
              "start": 1055,
              "end": 1058
            },
            "optional": false,
            "computed": false,
            "start": 1050,
            "end": 1058
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1059,
            "end": 1066
          },
          "optional": false,
          "computed": false,
          "start": 1050,
          "end": 1066
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1050,
        "end": 1068
      },
      "directive": null,
      "start": 1050,
      "end": 1069
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1079,
              "end": 1083
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1087
            },
            "optional": false,
            "computed": false,
            "start": 1079,
            "end": 1087
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1088,
            "end": 1095
          },
          "optional": false,
          "computed": false,
          "start": 1079,
          "end": 1095
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1079,
        "end": 1097
      },
      "directive": null,
      "start": 1079,
      "end": 1098
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 1137,
        "end": 1143
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
              "start": 1147,
              "end": 1158
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1172,
                        "end": 1178
                      },
                      "start": 1170,
                      "end": 1178
                    },
                    "start": 1166,
                    "end": 1178
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1159,
                  "end": 1178
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1180,
                "end": 1182
              },
              "expression": false,
              "start": 1158,
              "end": 1182
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1147,
            "end": 1182
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myProtectedFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 1195,
              "end": 1214
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
                "body": [],
                "start": 1217,
                "end": 1239
              },
              "expression": false,
              "start": 1214,
              "end": 1239
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 1185,
            "end": 1239
          }
        ],
        "start": 1144,
        "end": 1241
      },
      "abstract": false,
      "declare": false,
      "start": 1131,
      "end": 1241
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonMixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 1252,
        "end": 1263
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 1264,
              "end": 1265
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1285
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1286,
                      "end": 1292
                    },
                    "typeArguments": null,
                    "start": 1286,
                    "end": 1292
                  }
                ],
                "start": 1285,
                "end": 1293
              },
              "start": 1274,
              "end": 1293
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1264,
            "end": 1293
          }
        ],
        "start": 1263,
        "end": 1294
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
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
                "start": 1301,
                "end": 1302
              },
              "typeArguments": null,
              "start": 1301,
              "end": 1302
            },
            "start": 1299,
            "end": 1302
          },
          "start": 1295,
          "end": 1302
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 1328,
                "end": 1332
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1337,
                      "end": 1348
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
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1352,
                            "end": 1356
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 1358,
                                "end": 1361
                              },
                              "start": 1358,
                              "end": 1363
                            },
                            "start": 1356,
                            "end": 1363
                          },
                          "value": null,
                          "start": 1349,
                          "end": 1363
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
                                "type": "Super",
                                "start": 1370,
                                "end": 1375
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1379,
                                    "end": 1383
                                  },
                                  "start": 1376,
                                  "end": 1383
                                }
                              ],
                              "optional": false,
                              "start": 1370,
                              "end": 1384
                            },
                            "directive": null,
                            "start": 1370,
                            "end": 1385
                          }
                        ],
                        "start": 1365,
                        "end": 1389
                      },
                      "expression": false,
                      "start": 1348,
                      "end": 1389
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1337,
                    "end": 1389
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myProtectedFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1412
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 1420,
                                  "end": 1425
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "myProtectedFunction",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1426,
                                  "end": 1445
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1420,
                                "end": 1445
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1420,
                              "end": 1447
                            },
                            "directive": null,
                            "start": 1420,
                            "end": 1448
                          }
                        ],
                        "start": 1415,
                        "end": 1473
                      },
                      "expression": false,
                      "start": 1412,
                      "end": 1473
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1393,
                    "end": 1473
                  }
                ],
                "start": 1333,
                "end": 1476
              },
              "abstract": false,
              "declare": false,
              "start": 1314,
              "end": 1476
            },
            "start": 1307,
            "end": 1477
          }
        ],
        "start": 1304,
        "end": 1479
      },
      "expression": false,
      "start": 1243,
      "end": 1479
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Customer",
        "optional": false,
        "typeAnnotation": null,
        "start": 1487,
        "end": 1495
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "PersonMixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 1504,
          "end": 1515
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": null,
            "start": 1516,
            "end": 1522
          }
        ],
        "optional": false,
        "start": 1504,
        "end": 1523
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
              "name": "accountBalance",
              "optional": false,
              "typeAnnotation": null,
              "start": 1527,
              "end": 1541
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1543,
                "end": 1549
              },
              "start": 1541,
              "end": 1549
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
            "start": 1527,
            "end": 1550
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1555,
              "end": 1556
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
                "body": [],
                "start": 1559,
                "end": 1566
              },
              "expression": false,
              "start": 1556,
              "end": 1566
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1555,
            "end": 1566
          }
        ],
        "start": 1524,
        "end": 1568
      },
      "abstract": false,
      "declare": false,
      "start": 1481,
      "end": 1568
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 1568
}
```
