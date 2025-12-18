__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructable",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 18
      },
      "typeParameters": null,
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
              "start": 29,
              "end": 33
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 35,
                  "end": 38
                },
                "start": 35,
                "end": 40
              },
              "start": 33,
              "end": 40
            },
            "value": null,
            "start": 26,
            "end": 40
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSObjectKeyword",
            "start": 45,
            "end": 51
          },
          "start": 42,
          "end": 51
        },
        "start": 21,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Private",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 67
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
              "start": 71,
              "end": 82
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
                    "start": 87,
                    "end": 91
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 93,
                        "end": 96
                      },
                      "start": 93,
                      "end": 98
                    },
                    "start": 91,
                    "end": 98
                  },
                  "value": null,
                  "start": 84,
                  "end": 98
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 100,
                "end": 102
              },
              "expression": false,
              "start": 83,
              "end": 102
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 71,
            "end": 102
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              },
              "start": 113,
              "end": 121
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 104,
            "end": 122
          }
        ],
        "start": 68,
        "end": 124
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Private2",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 140
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
              "start": 144,
              "end": 155
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
                    "start": 160,
                    "end": 164
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 166,
                        "end": 169
                      },
                      "start": 166,
                      "end": 171
                    },
                    "start": 164,
                    "end": 171
                  },
                  "value": null,
                  "start": 157,
                  "end": 171
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 173,
                "end": 175
              },
              "expression": false,
              "start": 156,
              "end": 175
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 144,
            "end": 175
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 188,
                "end": 194
              },
              "start": 186,
              "end": 194
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 177,
            "end": 195
          }
        ],
        "start": 141,
        "end": 197
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 197
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Protected",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 214
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
              "start": 218,
              "end": 229
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
                    "start": 234,
                    "end": 238
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 240,
                        "end": 243
                      },
                      "start": 240,
                      "end": 245
                    },
                    "start": 238,
                    "end": 245
                  },
                  "value": null,
                  "start": 231,
                  "end": 245
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 247,
                "end": 249
              },
              "expression": false,
              "start": 230,
              "end": 249
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 218,
            "end": 249
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 264,
                "end": 270
              },
              "start": 262,
              "end": 270
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 251,
            "end": 271
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 293,
                "end": 299
              },
              "start": 291,
              "end": 299
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 273,
            "end": 300
          }
        ],
        "start": 215,
        "end": 302
      },
      "abstract": false,
      "declare": false,
      "start": 199,
      "end": 302
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Protected2",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 320
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
              "start": 324,
              "end": 335
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
                    "start": 340,
                    "end": 344
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 346,
                        "end": 349
                      },
                      "start": 346,
                      "end": 351
                    },
                    "start": 344,
                    "end": 351
                  },
                  "value": null,
                  "start": 337,
                  "end": 351
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 353,
                "end": 355
              },
              "expression": false,
              "start": 336,
              "end": 355
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 324,
            "end": 355
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 370,
                "end": 376
              },
              "start": 368,
              "end": 376
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 357,
            "end": 377
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 399,
                "end": 405
              },
              "start": 397,
              "end": 405
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 379,
            "end": 406
          }
        ],
        "start": 321,
        "end": 408
      },
      "abstract": false,
      "declare": false,
      "start": 304,
      "end": 408
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Public",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 422
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
              "start": 426,
              "end": 437
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
                    "start": 442,
                    "end": 446
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 448,
                        "end": 451
                      },
                      "start": 448,
                      "end": 453
                    },
                    "start": 446,
                    "end": 453
                  },
                  "value": null,
                  "start": 439,
                  "end": 453
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 455,
                "end": 457
              },
              "expression": false,
              "start": 438,
              "end": 457
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 426,
            "end": 457
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 467
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 469,
                "end": 475
              },
              "start": 467,
              "end": 475
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 459,
            "end": 476
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 493
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 495,
                "end": 501
              },
              "start": 493,
              "end": 501
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 478,
            "end": 502
          }
        ],
        "start": 423,
        "end": 504
      },
      "abstract": false,
      "declare": false,
      "start": 410,
      "end": 504
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Public2",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 519
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
              "start": 523,
              "end": 534
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
                    "start": 539,
                    "end": 543
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 545,
                        "end": 548
                      },
                      "start": 545,
                      "end": 550
                    },
                    "start": 543,
                    "end": 550
                  },
                  "value": null,
                  "start": 536,
                  "end": 550
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 552,
                "end": 554
              },
              "expression": false,
              "start": 535,
              "end": 554
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 523,
            "end": 554
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 564
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 566,
                "end": 572
              },
              "start": 564,
              "end": 572
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 556,
            "end": 573
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 590
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 592,
                "end": 598
              },
              "start": 590,
              "end": 598
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 575,
            "end": 599
          }
        ],
        "start": 520,
        "end": 601
      },
      "abstract": false,
      "declare": false,
      "start": 506,
      "end": 601
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 612,
        "end": 614
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 625
                  },
                  "typeArguments": null,
                  "start": 618,
                  "end": 625
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Private2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 636
                  },
                  "typeArguments": null,
                  "start": 628,
                  "end": 636
                }
              ],
              "start": 618,
              "end": 636
            },
            "start": 616,
            "end": 636
          },
          "start": 615,
          "end": 636
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 642
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 644
              },
              "optional": false,
              "computed": false,
              "start": 641,
              "end": 644
            },
            "directive": null,
            "start": 641,
            "end": 645
          }
        ],
        "start": 638,
        "end": 706
      },
      "expression": false,
      "start": 603,
      "end": 706
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 719
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 730
                  },
                  "typeArguments": null,
                  "start": 723,
                  "end": 730
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Protected",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 733,
                    "end": 742
                  },
                  "typeArguments": null,
                  "start": 733,
                  "end": 742
                }
              ],
              "start": 723,
              "end": 742
            },
            "start": 721,
            "end": 742
          },
          "start": 720,
          "end": 742
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 748
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 750
              },
              "optional": false,
              "computed": false,
              "start": 747,
              "end": 750
            },
            "directive": null,
            "start": 747,
            "end": 751
          }
        ],
        "start": 744,
        "end": 812
      },
      "expression": false,
      "start": 708,
      "end": 812
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 823,
        "end": 825
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 829,
                    "end": 836
                  },
                  "typeArguments": null,
                  "start": 829,
                  "end": 836
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 839,
                    "end": 845
                  },
                  "typeArguments": null,
                  "start": 839,
                  "end": 845
                }
              ],
              "start": 829,
              "end": 845
            },
            "start": 827,
            "end": 845
          },
          "start": 826,
          "end": 845
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 851
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 852,
                "end": 853
              },
              "optional": false,
              "computed": false,
              "start": 850,
              "end": 853
            },
            "directive": null,
            "start": 850,
            "end": 854
          }
        ],
        "start": 847,
        "end": 915
      },
      "expression": false,
      "start": 814,
      "end": 915
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 926,
        "end": 928
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Protected",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 932,
                    "end": 941
                  },
                  "typeArguments": null,
                  "start": 932,
                  "end": 941
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Protected2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 944,
                    "end": 954
                  },
                  "typeArguments": null,
                  "start": 944,
                  "end": 954
                }
              ],
              "start": 932,
              "end": 954
            },
            "start": 930,
            "end": 954
          },
          "start": 929,
          "end": 954
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 960
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 962
              },
              "optional": false,
              "computed": false,
              "start": 959,
              "end": 962
            },
            "directive": null,
            "start": 959,
            "end": 963
          }
        ],
        "start": 956,
        "end": 1022
      },
      "expression": false,
      "start": 917,
      "end": 1022
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1033,
        "end": 1035
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Protected",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1039,
                    "end": 1048
                  },
                  "typeArguments": null,
                  "start": 1039,
                  "end": 1048
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1057
                  },
                  "typeArguments": null,
                  "start": 1051,
                  "end": 1057
                }
              ],
              "start": 1039,
              "end": 1057
            },
            "start": 1037,
            "end": 1057
          },
          "start": 1036,
          "end": 1057
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1063
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1064,
                "end": 1065
              },
              "optional": false,
              "computed": false,
              "start": 1062,
              "end": 1065
            },
            "directive": null,
            "start": 1062,
            "end": 1066
          }
        ],
        "start": 1059,
        "end": 1112
      },
      "expression": false,
      "start": 1024,
      "end": 1112
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1123,
        "end": 1125
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1129,
                    "end": 1135
                  },
                  "typeArguments": null,
                  "start": 1129,
                  "end": 1135
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Public2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1138,
                    "end": 1145
                  },
                  "typeArguments": null,
                  "start": 1138,
                  "end": 1145
                }
              ],
              "start": 1129,
              "end": 1145
            },
            "start": 1127,
            "end": 1145
          },
          "start": 1126,
          "end": 1145
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1150,
                "end": 1151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1152,
                "end": 1153
              },
              "optional": false,
              "computed": false,
              "start": 1150,
              "end": 1153
            },
            "directive": null,
            "start": 1150,
            "end": 1154
          }
        ],
        "start": 1147,
        "end": 1200
      },
      "expression": false,
      "start": 1114,
      "end": 1200
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mix",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1222
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
              "start": 1223,
              "end": 1224
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1223,
            "end": 1224
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1226,
              "end": 1227
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1226,
            "end": 1227
          }
        ],
        "start": 1222,
        "end": 1228
      },
      "params": [
        {
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1233,
                "end": 1234
              },
              "typeArguments": null,
              "start": 1233,
              "end": 1234
            },
            "start": 1231,
            "end": 1234
          },
          "start": 1229,
          "end": 1234
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1240,
                "end": 1241
              },
              "typeArguments": null,
              "start": 1240,
              "end": 1241
            },
            "start": 1238,
            "end": 1241
          },
          "start": 1236,
          "end": 1241
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1244,
                "end": 1245
              },
              "typeArguments": null,
              "start": 1244,
              "end": 1245
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1248,
                "end": 1249
              },
              "typeArguments": null,
              "start": 1248,
              "end": 1249
            }
          ],
          "start": 1244,
          "end": 1249
        },
        "start": 1242,
        "end": 1249
      },
      "body": null,
      "expression": false,
      "start": 1202,
      "end": 1250
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
        "start": 1314,
        "end": 1316
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "typeAnnotation": null,
          "start": 1325,
          "end": 1328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1329,
            "end": 1336
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Private2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1338,
            "end": 1346
          }
        ],
        "optional": false,
        "start": 1325,
        "end": 1347
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1348,
        "end": 1350
      },
      "abstract": false,
      "declare": false,
      "start": 1308,
      "end": 1350
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
        "start": 1357,
        "end": 1359
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "typeAnnotation": null,
          "start": 1368,
          "end": 1371
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1379
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Protected",
            "optional": false,
            "typeAnnotation": null,
            "start": 1381,
            "end": 1390
          }
        ],
        "optional": false,
        "start": 1368,
        "end": 1391
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1392,
        "end": 1394
      },
      "abstract": false,
      "declare": false,
      "start": 1351,
      "end": 1394
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
        "start": 1401,
        "end": 1403
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "typeAnnotation": null,
          "start": 1412,
          "end": 1415
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Private",
            "optional": false,
            "typeAnnotation": null,
            "start": 1416,
            "end": 1423
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Public",
            "optional": false,
            "typeAnnotation": null,
            "start": 1425,
            "end": 1431
          }
        ],
        "optional": false,
        "start": 1412,
        "end": 1432
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1433,
        "end": 1435
      },
      "abstract": false,
      "declare": false,
      "start": 1395,
      "end": 1435
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
        "start": 1443,
        "end": 1445
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "typeAnnotation": null,
          "start": 1454,
          "end": 1457
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Protected",
            "optional": false,
            "typeAnnotation": null,
            "start": 1458,
            "end": 1467
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Protected2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1469,
            "end": 1479
          }
        ],
        "optional": false,
        "start": 1454,
        "end": 1480
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1485
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1490,
                        "end": 1492
                      },
                      "typeArguments": null,
                      "start": 1490,
                      "end": 1492
                    },
                    "start": 1488,
                    "end": 1492
                  },
                  "start": 1486,
                  "end": 1492
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1498,
                        "end": 1500
                      },
                      "typeArguments": null,
                      "start": 1498,
                      "end": 1500
                    },
                    "start": 1496,
                    "end": 1500
                  },
                  "start": 1494,
                  "end": 1500
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1506,
                        "end": 1508
                      },
                      "typeArguments": null,
                      "start": 1506,
                      "end": 1508
                    },
                    "start": 1504,
                    "end": 1508
                  },
                  "start": 1502,
                  "end": 1508
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1514,
                        "end": 1516
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1517,
                        "end": 1518
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1514,
                      "end": 1518
                    },
                    "directive": null,
                    "start": 1514,
                    "end": 1519
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1522,
                        "end": 1524
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1525,
                        "end": 1526
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1522,
                      "end": 1526
                    },
                    "directive": null,
                    "start": 1522,
                    "end": 1527
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1530,
                        "end": 1532
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1533,
                        "end": 1534
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1530,
                      "end": 1534
                    },
                    "directive": null,
                    "start": 1530,
                    "end": 1535
                  }
                ],
                "start": 1510,
                "end": 1538
              },
              "expression": false,
              "start": 1485,
              "end": 1538
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1484,
            "end": 1538
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1547,
              "end": 1548
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1555,
                        "end": 1557
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1558,
                        "end": 1559
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1555,
                      "end": 1559
                    },
                    "directive": null,
                    "start": 1555,
                    "end": 1560
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1563,
                        "end": 1565
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1566,
                        "end": 1567
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1563,
                      "end": 1567
                    },
                    "directive": null,
                    "start": 1563,
                    "end": 1568
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1571,
                        "end": 1573
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1574,
                        "end": 1575
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1571,
                      "end": 1575
                    },
                    "directive": null,
                    "start": 1571,
                    "end": 1575
                  }
                ],
                "start": 1551,
                "end": 1578
              },
              "expression": false,
              "start": 1548,
              "end": 1578
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1540,
            "end": 1578
          }
        ],
        "start": 1481,
        "end": 1580
      },
      "abstract": false,
      "declare": false,
      "start": 1437,
      "end": 1580
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
        "start": 1588,
        "end": 1590
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "typeAnnotation": null,
          "start": 1599,
          "end": 1602
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Protected",
            "optional": false,
            "typeAnnotation": null,
            "start": 1603,
            "end": 1612
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Public",
            "optional": false,
            "typeAnnotation": null,
            "start": 1614,
            "end": 1620
          }
        ],
        "optional": false,
        "start": 1599,
        "end": 1621
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1625,
              "end": 1626
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1631,
                        "end": 1633
                      },
                      "typeArguments": null,
                      "start": 1631,
                      "end": 1633
                    },
                    "start": 1629,
                    "end": 1633
                  },
                  "start": 1627,
                  "end": 1633
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1639,
                        "end": 1641
                      },
                      "typeArguments": null,
                      "start": 1639,
                      "end": 1641
                    },
                    "start": 1637,
                    "end": 1641
                  },
                  "start": 1635,
                  "end": 1641
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1647,
                        "end": 1649
                      },
                      "typeArguments": null,
                      "start": 1647,
                      "end": 1649
                    },
                    "start": 1645,
                    "end": 1649
                  },
                  "start": 1643,
                  "end": 1649
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1655,
                        "end": 1657
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1658,
                        "end": 1659
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1655,
                      "end": 1659
                    },
                    "directive": null,
                    "start": 1655,
                    "end": 1660
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1712,
                        "end": 1714
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1715,
                        "end": 1716
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1712,
                      "end": 1716
                    },
                    "directive": null,
                    "start": 1712,
                    "end": 1717
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1720,
                        "end": 1722
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1723,
                        "end": 1724
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1720,
                      "end": 1724
                    },
                    "directive": null,
                    "start": 1720,
                    "end": 1725
                  }
                ],
                "start": 1651,
                "end": 1728
              },
              "expression": false,
              "start": 1626,
              "end": 1728
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1625,
            "end": 1728
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1737,
              "end": 1738
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1745,
                        "end": 1747
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1748,
                        "end": 1749
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1745,
                      "end": 1749
                    },
                    "directive": null,
                    "start": 1745,
                    "end": 1750
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1802,
                        "end": 1804
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1805,
                        "end": 1806
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1802,
                      "end": 1806
                    },
                    "directive": null,
                    "start": 1802,
                    "end": 1807
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1810,
                        "end": 1812
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1813,
                        "end": 1814
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1810,
                      "end": 1814
                    },
                    "directive": null,
                    "start": 1810,
                    "end": 1814
                  }
                ],
                "start": 1741,
                "end": 1817
              },
              "expression": false,
              "start": 1738,
              "end": 1817
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1730,
            "end": 1817
          }
        ],
        "start": 1622,
        "end": 1819
      },
      "abstract": false,
      "declare": false,
      "start": 1582,
      "end": 1819
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
        "start": 1827,
        "end": 1829
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mix",
          "optional": false,
          "typeAnnotation": null,
          "start": 1838,
          "end": 1841
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Public",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1848
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Public2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1850,
            "end": 1857
          }
        ],
        "optional": false,
        "start": 1838,
        "end": 1858
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1862,
              "end": 1863
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1868,
                        "end": 1870
                      },
                      "typeArguments": null,
                      "start": 1868,
                      "end": 1870
                    },
                    "start": 1866,
                    "end": 1870
                  },
                  "start": 1864,
                  "end": 1870
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1876,
                        "end": 1878
                      },
                      "typeArguments": null,
                      "start": 1876,
                      "end": 1878
                    },
                    "start": 1874,
                    "end": 1878
                  },
                  "start": 1872,
                  "end": 1878
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1884,
                        "end": 1886
                      },
                      "typeArguments": null,
                      "start": 1884,
                      "end": 1886
                    },
                    "start": 1882,
                    "end": 1886
                  },
                  "start": 1880,
                  "end": 1886
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1892,
                        "end": 1894
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1895,
                        "end": 1896
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1892,
                      "end": 1896
                    },
                    "directive": null,
                    "start": 1892,
                    "end": 1897
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1949,
                        "end": 1951
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1952,
                        "end": 1953
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1949,
                      "end": 1953
                    },
                    "directive": null,
                    "start": 1949,
                    "end": 1954
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1957,
                        "end": 1959
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1960,
                        "end": 1961
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1957,
                      "end": 1961
                    },
                    "directive": null,
                    "start": 1957,
                    "end": 1962
                  }
                ],
                "start": 1888,
                "end": 1965
              },
              "expression": false,
              "start": 1863,
              "end": 1965
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1862,
            "end": 1965
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1974,
              "end": 1975
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1982,
                        "end": 1984
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1985,
                        "end": 1986
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1982,
                      "end": 1986
                    },
                    "directive": null,
                    "start": 1982,
                    "end": 1987
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2039,
                        "end": 2041
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2042,
                        "end": 2043
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2039,
                      "end": 2043
                    },
                    "directive": null,
                    "start": 2039,
                    "end": 2044
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2047,
                        "end": 2049
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2050,
                        "end": 2051
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2047,
                      "end": 2051
                    },
                    "directive": null,
                    "start": 2047,
                    "end": 2051
                  }
                ],
                "start": 1978,
                "end": 2054
              },
              "expression": false,
              "start": 1975,
              "end": 2054
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1967,
            "end": 2054
          }
        ],
        "start": 1859,
        "end": 2056
      },
      "abstract": false,
      "declare": false,
      "start": 1821,
      "end": 2056
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProtectedGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 2064,
        "end": 2080
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
              "start": 2081,
              "end": 2082
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2081,
            "end": 2082
          }
        ],
        "start": 2080,
        "end": 2083
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
              "name": "privateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2095,
              "end": 2108
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
                "start": 2111,
                "end": 2113
              },
              "expression": false,
              "start": 2108,
              "end": 2113
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2087,
            "end": 2113
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "protectedMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2125,
              "end": 2140
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
                "start": 2143,
                "end": 2145
              },
              "expression": false,
              "start": 2140,
              "end": 2145
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 2115,
            "end": 2145
          }
        ],
        "start": 2084,
        "end": 2147
      },
      "abstract": false,
      "declare": false,
      "start": 2058,
      "end": 2147
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProtectedGeneric2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2155,
        "end": 2172
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
              "start": 2173,
              "end": 2174
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2173,
            "end": 2174
          }
        ],
        "start": 2172,
        "end": 2175
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
              "name": "privateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2187,
              "end": 2200
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
                "start": 2203,
                "end": 2205
              },
              "expression": false,
              "start": 2200,
              "end": 2205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2179,
            "end": 2205
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "protectedMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2217,
              "end": 2232
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
                "start": 2235,
                "end": 2237
              },
              "expression": false,
              "start": 2232,
              "end": 2237
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 2207,
            "end": 2237
          }
        ],
        "start": 2176,
        "end": 2239
      },
      "abstract": false,
      "declare": false,
      "start": 2149,
      "end": 2239
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2250,
        "end": 2252
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProtectedGeneric",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2256,
                    "end": 2272
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 2273,
                        "end": 2275
                      }
                    ],
                    "start": 2272,
                    "end": 2276
                  },
                  "start": 2256,
                  "end": 2276
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProtectedGeneric",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2279,
                    "end": 2295
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 2296,
                        "end": 2298
                      }
                    ],
                    "start": 2295,
                    "end": 2299
                  },
                  "start": 2279,
                  "end": 2299
                }
              ],
              "start": 2256,
              "end": 2299
            },
            "start": 2254,
            "end": 2299
          },
          "start": 2253,
          "end": 2299
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2304,
                  "end": 2305
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2306,
                  "end": 2319
                },
                "optional": false,
                "computed": false,
                "start": 2304,
                "end": 2319
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2304,
              "end": 2321
            },
            "directive": null,
            "start": 2304,
            "end": 2322
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2380,
                  "end": 2381
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protectedMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2382,
                  "end": 2397
                },
                "optional": false,
                "computed": false,
                "start": 2380,
                "end": 2397
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2380,
              "end": 2399
            },
            "directive": null,
            "start": 2380,
            "end": 2400
          }
        ],
        "start": 2301,
        "end": 2458
      },
      "expression": false,
      "start": 2241,
      "end": 2458
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2469,
        "end": 2471
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProtectedGeneric",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2475,
                    "end": 2491
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2493,
                              "end": 2494
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2496,
                                "end": 2500
                              },
                              "start": 2494,
                              "end": 2500
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2493,
                            "end": 2501
                          }
                        ],
                        "start": 2492,
                        "end": 2502
                      }
                    ],
                    "start": 2491,
                    "end": 2503
                  },
                  "start": 2475,
                  "end": 2503
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProtectedGeneric2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2506,
                    "end": 2523
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2525,
                              "end": 2526
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2527,
                                "end": 2531
                              },
                              "start": 2526,
                              "end": 2531
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2525,
                            "end": 2532
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
                              "start": 2532,
                              "end": 2533
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2534,
                                "end": 2538
                              },
                              "start": 2533,
                              "end": 2538
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2532,
                            "end": 2539
                          }
                        ],
                        "start": 2524,
                        "end": 2540
                      }
                    ],
                    "start": 2523,
                    "end": 2541
                  },
                  "start": 2506,
                  "end": 2541
                }
              ],
              "start": 2475,
              "end": 2541
            },
            "start": 2473,
            "end": 2541
          },
          "start": 2472,
          "end": 2541
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2546,
                  "end": 2547
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2548,
                  "end": 2561
                },
                "optional": false,
                "computed": false,
                "start": 2546,
                "end": 2561
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2546,
              "end": 2563
            },
            "directive": null,
            "start": 2546,
            "end": 2564
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2622,
                  "end": 2623
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protectedMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2624,
                  "end": 2639
                },
                "optional": false,
                "computed": false,
                "start": 2622,
                "end": 2639
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2622,
              "end": 2641
            },
            "directive": null,
            "start": 2622,
            "end": 2642
          }
        ],
        "start": 2543,
        "end": 2700
      },
      "expression": false,
      "start": 2460,
      "end": 2700
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2711,
        "end": 2713
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProtectedGeneric",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2717,
                    "end": 2733
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2735,
                              "end": 2736
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2738,
                                "end": 2742
                              },
                              "start": 2736,
                              "end": 2742
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2735,
                            "end": 2743
                          }
                        ],
                        "start": 2734,
                        "end": 2744
                      }
                    ],
                    "start": 2733,
                    "end": 2745
                  },
                  "start": 2717,
                  "end": 2745
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProtectedGeneric",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2748,
                    "end": 2764
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2766,
                              "end": 2767
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2768,
                                "end": 2772
                              },
                              "start": 2767,
                              "end": 2772
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2766,
                            "end": 2773
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
                              "start": 2773,
                              "end": 2774
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2775,
                                "end": 2779
                              },
                              "start": 2774,
                              "end": 2779
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2773,
                            "end": 2780
                          }
                        ],
                        "start": 2765,
                        "end": 2781
                      }
                    ],
                    "start": 2764,
                    "end": 2782
                  },
                  "start": 2748,
                  "end": 2782
                }
              ],
              "start": 2717,
              "end": 2782
            },
            "start": 2715,
            "end": 2782
          },
          "start": 2714,
          "end": 2782
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2787,
                  "end": 2788
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2789,
                  "end": 2802
                },
                "optional": false,
                "computed": false,
                "start": 2787,
                "end": 2802
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2787,
              "end": 2804
            },
            "directive": null,
            "start": 2787,
            "end": 2805
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2863,
                  "end": 2864
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protectedMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2865,
                  "end": 2880
                },
                "optional": false,
                "computed": false,
                "start": 2863,
                "end": 2880
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2863,
              "end": 2882
            },
            "directive": null,
            "start": 2863,
            "end": 2883
          }
        ],
        "start": 2784,
        "end": 2941
      },
      "expression": false,
      "start": 2702,
      "end": 2941
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2941
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructable",
    "start": 5,
    "end": 18,
    "range": [
      5,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 21,
    "end": 24,
    "range": [
      21,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 26,
    "end": 29,
    "range": [
      26,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 29,
    "end": 33,
    "range": [
      29,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 42,
    "end": 44,
    "range": [
      42,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59,
    "range": [
      54,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 60,
    "end": 67,
    "range": [
      60,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 71,
    "end": 82,
    "range": [
      71,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 84,
    "end": 87,
    "range": [
      84,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 87,
    "end": 91,
    "range": [
      87,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 93,
    "end": 96,
    "range": [
      93,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 104,
    "end": 111,
    "range": [
      104,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 126,
    "end": 131,
    "range": [
      126,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "Private2",
    "start": 132,
    "end": 140,
    "range": [
      132,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 144,
    "end": 155,
    "range": [
      144,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 160,
    "end": 164,
    "range": [
      160,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 177,
    "end": 184,
    "range": [
      177,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 199,
    "end": 204,
    "range": [
      199,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected",
    "start": 205,
    "end": 214,
    "range": [
      205,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 218,
    "end": 229,
    "range": [
      218,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 231,
    "end": 234,
    "range": [
      231,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
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
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 240,
    "end": 243,
    "range": [
      240,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 251,
    "end": 260,
    "range": [
      251,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 273,
    "end": 282,
    "range": [
      273,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 293,
    "end": 299,
    "range": [
      293,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 304,
    "end": 309,
    "range": [
      304,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected2",
    "start": 310,
    "end": 320,
    "range": [
      310,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 324,
    "end": 335,
    "range": [
      324,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 337,
    "end": 340,
    "range": [
      337,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 340,
    "end": 344,
    "range": [
      340,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 346,
    "end": 349,
    "range": [
      346,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 357,
    "end": 366,
    "range": [
      357,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 370,
    "end": 376,
    "range": [
      370,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 379,
    "end": 388,
    "range": [
      379,
      388
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 389,
    "end": 395,
    "range": [
      389,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 399,
    "end": 405,
    "range": [
      399,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 410,
    "end": 415,
    "range": [
      410,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 416,
    "end": 422,
    "range": [
      416,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 426,
    "end": 437,
    "range": [
      426,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 442,
    "end": 446,
    "range": [
      442,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 448,
    "end": 451,
    "range": [
      448,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 469,
    "end": 475,
    "range": [
      469,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 478,
    "end": 484,
    "range": [
      478,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 485,
    "end": 491,
    "range": [
      485,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 495,
    "end": 501,
    "range": [
      495,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 506,
    "end": 511,
    "range": [
      506,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "Public2",
    "start": 512,
    "end": 519,
    "range": [
      512,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 523,
    "end": 534,
    "range": [
      523,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 536,
    "end": 539,
    "range": [
      536,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 539,
    "end": 543,
    "range": [
      539,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 545,
    "end": 548,
    "range": [
      545,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 556,
    "end": 562,
    "range": [
      556,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 566,
    "end": 572,
    "range": [
      566,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 582,
    "end": 588,
    "range": [
      582,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 592,
    "end": 598,
    "range": [
      592,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 603,
    "end": 611,
    "range": [
      603,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 612,
    "end": 614,
    "range": [
      612,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 618,
    "end": 625,
    "range": [
      618,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "Private2",
    "start": 628,
    "end": 636,
    "range": [
      628,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 708,
    "end": 716,
    "range": [
      708,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 717,
    "end": 719,
    "range": [
      717,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 723,
    "end": 730,
    "range": [
      723,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected",
    "start": 733,
    "end": 742,
    "range": [
      733,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 814,
    "end": 822,
    "range": [
      814,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 823,
    "end": 825,
    "range": [
      823,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 829,
    "end": 836,
    "range": [
      829,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 839,
    "end": 845,
    "range": [
      839,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 917,
    "end": 925,
    "range": [
      917,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 926,
    "end": 928,
    "range": [
      926,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected",
    "start": 932,
    "end": 941,
    "range": [
      932,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected2",
    "start": 944,
    "end": 954,
    "range": [
      944,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1024,
    "end": 1032,
    "range": [
      1024,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1033,
    "end": 1035,
    "range": [
      1033,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected",
    "start": 1039,
    "end": 1048,
    "range": [
      1039,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 1051,
    "end": 1057,
    "range": [
      1051,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1114,
    "end": 1122,
    "range": [
      1114,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1123,
    "end": 1125,
    "range": [
      1123,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 1129,
    "end": 1135,
    "range": [
      1129,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "Public2",
    "start": 1138,
    "end": 1145,
    "range": [
      1138,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1202,
    "end": 1209,
    "range": [
      1202,
      1209
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1210,
    "end": 1218,
    "range": [
      1210,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "Mix",
    "start": 1219,
    "end": 1222,
    "range": [
      1219,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1229,
    "end": 1231,
    "range": [
      1229,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1236,
    "end": 1238,
    "range": [
      1236,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1308,
    "end": 1313,
    "range": [
      1308,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1314,
    "end": 1316,
    "range": [
      1314,
      1316
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1317,
    "end": 1324,
    "range": [
      1317,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "Mix",
    "start": 1325,
    "end": 1328,
    "range": [
      1325,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 1329,
    "end": 1336,
    "range": [
      1329,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "Private2",
    "start": 1338,
    "end": 1346,
    "range": [
      1338,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1351,
    "end": 1356,
    "range": [
      1351,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1357,
    "end": 1359,
    "range": [
      1357,
      1359
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1360,
    "end": 1367,
    "range": [
      1360,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "Mix",
    "start": 1368,
    "end": 1371,
    "range": [
      1368,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 1372,
    "end": 1379,
    "range": [
      1372,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected",
    "start": 1381,
    "end": 1390,
    "range": [
      1381,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1395,
    "end": 1400,
    "range": [
      1395,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1401,
    "end": 1403,
    "range": [
      1401,
      1403
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1404,
    "end": 1411,
    "range": [
      1404,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "Mix",
    "start": 1412,
    "end": 1415,
    "range": [
      1412,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "Private",
    "start": 1416,
    "end": 1423,
    "range": [
      1416,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 1425,
    "end": 1431,
    "range": [
      1425,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1437,
    "end": 1442,
    "range": [
      1437,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 1443,
    "end": 1445,
    "range": [
      1443,
      1445
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1446,
    "end": 1453,
    "range": [
      1446,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "Mix",
    "start": 1454,
    "end": 1457,
    "range": [
      1454,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected",
    "start": 1458,
    "end": 1467,
    "range": [
      1458,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected2",
    "start": 1469,
    "end": 1479,
    "range": [
      1469,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1486,
    "end": 1488,
    "range": [
      1486,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 1490,
    "end": 1492,
    "range": [
      1490,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1494,
    "end": 1496,
    "range": [
      1494,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1498,
    "end": 1500,
    "range": [
      1498,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1502,
    "end": 1504,
    "range": [
      1502,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1506,
    "end": 1508,
    "range": [
      1506,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1514,
    "end": 1516,
    "range": [
      1514,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1522,
    "end": 1524,
    "range": [
      1522,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1530,
    "end": 1532,
    "range": [
      1530,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1540,
    "end": 1546,
    "range": [
      1540,
      1546
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 1555,
    "end": 1557,
    "range": [
      1555,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1563,
    "end": 1565,
    "range": [
      1563,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1571,
    "end": 1573,
    "range": [
      1571,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1582,
    "end": 1587,
    "range": [
      1582,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1588,
    "end": 1590,
    "range": [
      1588,
      1590
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1591,
    "end": 1598,
    "range": [
      1591,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "Mix",
    "start": 1599,
    "end": 1602,
    "range": [
      1599,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "Protected",
    "start": 1603,
    "end": 1612,
    "range": [
      1603,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 1614,
    "end": 1620,
    "range": [
      1614,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1627,
    "end": 1629,
    "range": [
      1627,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 1631,
    "end": 1633,
    "range": [
      1631,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1635,
    "end": 1637,
    "range": [
      1635,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1639,
    "end": 1641,
    "range": [
      1639,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1643,
    "end": 1645,
    "range": [
      1643,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1647,
    "end": 1649,
    "range": [
      1647,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1655,
    "end": 1657,
    "range": [
      1655,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1712,
    "end": 1714,
    "range": [
      1712,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1720,
    "end": 1722,
    "range": [
      1720,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1730,
    "end": 1736,
    "range": [
      1730,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 1745,
    "end": 1747,
    "range": [
      1745,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1802,
    "end": 1804,
    "range": [
      1802,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1810,
    "end": 1812,
    "range": [
      1810,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1821,
    "end": 1826,
    "range": [
      1821,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1827,
    "end": 1829,
    "range": [
      1827,
      1829
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1830,
    "end": 1837,
    "range": [
      1830,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "Mix",
    "start": 1838,
    "end": 1841,
    "range": [
      1838,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "Public",
    "start": 1842,
    "end": 1848,
    "range": [
      1842,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "Public2",
    "start": 1850,
    "end": 1857,
    "range": [
      1850,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1864,
    "end": 1866,
    "range": [
      1864,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 1868,
    "end": 1870,
    "range": [
      1868,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1872,
    "end": 1874,
    "range": [
      1872,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 1876,
    "end": 1878,
    "range": [
      1876,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1880,
    "end": 1882,
    "range": [
      1880,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 1884,
    "end": 1886,
    "range": [
      1884,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1892,
    "end": 1894,
    "range": [
      1892,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1949,
    "end": 1951,
    "range": [
      1949,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1957,
    "end": 1959,
    "range": [
      1957,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1967,
    "end": 1973,
    "range": [
      1967,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 1982,
    "end": 1984,
    "range": [
      1982,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 2039,
    "end": 2041,
    "range": [
      2039,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 2047,
    "end": 2049,
    "range": [
      2047,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2058,
    "end": 2063,
    "range": [
      2058,
      2063
    ]
  },
  {
    "type": "Identifier",
    "value": "ProtectedGeneric",
    "start": 2064,
    "end": 2080,
    "range": [
      2064,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2087,
    "end": 2094,
    "range": [
      2087,
      2094
    ]
  },
  {
    "type": "Identifier",
    "value": "privateMethod",
    "start": 2095,
    "end": 2108,
    "range": [
      2095,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2115,
    "end": 2124,
    "range": [
      2115,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedMethod",
    "start": 2125,
    "end": 2140,
    "range": [
      2125,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2149,
    "end": 2154,
    "range": [
      2149,
      2154
    ]
  },
  {
    "type": "Identifier",
    "value": "ProtectedGeneric2",
    "start": 2155,
    "end": 2172,
    "range": [
      2155,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2179,
    "end": 2186,
    "range": [
      2179,
      2186
    ]
  },
  {
    "type": "Identifier",
    "value": "privateMethod",
    "start": 2187,
    "end": 2200,
    "range": [
      2187,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2207,
    "end": 2216,
    "range": [
      2207,
      2216
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedMethod",
    "start": 2217,
    "end": 2232,
    "range": [
      2217,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2241,
    "end": 2249,
    "range": [
      2241,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 2250,
    "end": 2252,
    "range": [
      2250,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Identifier",
    "value": "ProtectedGeneric",
    "start": 2256,
    "end": 2272,
    "range": [
      2256,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "ProtectedGeneric",
    "start": 2279,
    "end": 2295,
    "range": [
      2279,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Identifier",
    "value": "privateMethod",
    "start": 2306,
    "end": 2319,
    "range": [
      2306,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2320,
    "end": 2321,
    "range": [
      2320,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322,
    "range": [
      2321,
      2322
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedMethod",
    "start": 2382,
    "end": 2397,
    "range": [
      2382,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2460,
    "end": 2468,
    "range": [
      2460,
      2468
    ]
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 2469,
    "end": 2471,
    "range": [
      2469,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "ProtectedGeneric",
    "start": 2475,
    "end": 2491,
    "range": [
      2475,
      2491
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2492,
    "end": 2493,
    "range": [
      2492,
      2493
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2496,
    "end": 2500,
    "range": [
      2496,
      2500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Identifier",
    "value": "ProtectedGeneric2",
    "start": 2506,
    "end": 2523,
    "range": [
      2506,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2527,
    "end": 2531,
    "range": [
      2527,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2532,
    "end": 2533,
    "range": [
      2532,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2534,
    "end": 2538,
    "range": [
      2534,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2541,
    "end": 2542,
    "range": [
      2541,
      2542
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Identifier",
    "value": "privateMethod",
    "start": 2548,
    "end": 2561,
    "range": [
      2548,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedMethod",
    "start": 2624,
    "end": 2639,
    "range": [
      2624,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2702,
    "end": 2710,
    "range": [
      2702,
      2710
    ]
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 2711,
    "end": 2713,
    "range": [
      2711,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Identifier",
    "value": "ProtectedGeneric",
    "start": 2717,
    "end": 2733,
    "range": [
      2717,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2738,
    "end": 2742,
    "range": [
      2738,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Identifier",
    "value": "ProtectedGeneric",
    "start": 2748,
    "end": 2764,
    "range": [
      2748,
      2764
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2765,
    "end": 2766,
    "range": [
      2765,
      2766
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2768,
    "end": 2772,
    "range": [
      2768,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2772,
    "end": 2773,
    "range": [
      2772,
      2773
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2775,
    "end": 2779,
    "range": [
      2775,
      2779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2779,
    "end": 2780,
    "range": [
      2779,
      2780
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2781,
    "end": 2782,
    "range": [
      2781,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2782,
    "end": 2783,
    "range": [
      2782,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2784,
    "end": 2785,
    "range": [
      2784,
      2785
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Identifier",
    "value": "privateMethod",
    "start": 2789,
    "end": 2802,
    "range": [
      2789,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2863,
    "end": 2864,
    "range": [
      2863,
      2864
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2864,
    "end": 2865,
    "range": [
      2864,
      2865
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedMethod",
    "start": 2865,
    "end": 2880,
    "range": [
      2865,
      2880
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  }
]
```
