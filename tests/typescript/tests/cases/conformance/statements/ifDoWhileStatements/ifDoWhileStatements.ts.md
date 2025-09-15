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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 29
          }
        ],
        "start": 12,
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
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
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "typeArguments": null,
          "start": 52,
          "end": 53
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
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
            "start": 60,
            "end": 71
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
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
            "start": 76,
            "end": 89
          }
        ],
        "start": 54,
        "end": 91
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 91
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
        "start": 99,
        "end": 101
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 111
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
              "name": "valid",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              },
              "start": 123,
              "end": 132
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
            "start": 118,
            "end": 133
          }
        ],
        "start": 112,
        "end": 135
      },
      "abstract": false,
      "declare": false,
      "start": 93,
      "end": 135
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 144
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
              "start": 145,
              "end": 146
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 146
          }
        ],
        "start": 144,
        "end": 147
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
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
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
                  "start": 161,
                  "end": 162
                },
                "typeArguments": null,
                "start": 161,
                "end": 162
              },
              "start": 159,
              "end": 162
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
            "start": 153,
            "end": 163
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 175
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
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
                        "start": 179,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 179,
                      "end": 180
                    }
                  ],
                  "start": 178,
                  "end": 181
                },
                "start": 177,
                "end": 181
              },
              "start": 175,
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
            "start": 168,
            "end": 182
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 194
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 199
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
                              "start": 200,
                              "end": 201
                            },
                            "typeArguments": null,
                            "start": 200,
                            "end": 201
                          }
                        ],
                        "start": 199,
                        "end": 202
                      },
                      "start": 198,
                      "end": 202
                    }
                  ],
                  "start": 197,
                  "end": 203
                },
                "start": 196,
                "end": 203
              },
              "start": 194,
              "end": 203
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
            "start": 187,
            "end": 203
          }
        ],
        "start": 147,
        "end": 205
      },
      "abstract": false,
      "declare": false,
      "start": 137,
      "end": 205
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 217
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
              "type": "TSStringKeyword",
              "start": 221,
              "end": 227
            },
            "start": 219,
            "end": 227
          },
          "start": 218,
          "end": 227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 230,
          "end": 236
        },
        "start": 228,
        "end": 236
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 246,
              "end": 248
            },
            "start": 239,
            "end": 249
          }
        ],
        "start": 237,
        "end": 251
      },
      "expression": false,
      "start": 207,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 263
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
              "type": "TSNumberKeyword",
              "start": 267,
              "end": 273
            },
            "start": 265,
            "end": 273
          },
          "start": 264,
          "end": 273
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 276,
          "end": 283
        },
        "start": 274,
        "end": 283
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 297,
                "end": 299
              },
              "start": 293,
              "end": 299
            },
            "start": 286,
            "end": 300
          }
        ],
        "start": 284,
        "end": 302
      },
      "expression": false,
      "start": 252,
      "end": 302
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 315
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 336
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 347,
                      "end": 351
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 353,
                        "end": 359
                      },
                      "start": 351,
                      "end": 359
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
                    "start": 347,
                    "end": 360
                  }
                ],
                "start": 337,
                "end": 366
              },
              "abstract": false,
              "declare": false,
              "start": 329,
              "end": 366
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 322,
            "end": 366
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 390
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
                      "type": "TSNumberKeyword",
                      "start": 394,
                      "end": 400
                    },
                    "start": 392,
                    "end": 400
                  },
                  "start": 391,
                  "end": 400
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 403,
                  "end": 409
                },
                "start": 401,
                "end": 409
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 419,
                          "end": 420
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 429
                        },
                        "optional": false,
                        "computed": false,
                        "start": 419,
                        "end": 429
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 419,
                      "end": 431
                    },
                    "start": 412,
                    "end": 432
                  }
                ],
                "start": 410,
                "end": 434
              },
              "expression": false,
              "start": 379,
              "end": 434
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 372,
            "end": 434
          }
        ],
        "start": 316,
        "end": 436
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 304,
      "end": 436
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 449
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 470
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 481,
                      "end": 483
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 485,
                        "end": 491
                      },
                      "start": 483,
                      "end": 491
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
                    "start": 481,
                    "end": 492
                  }
                ],
                "start": 471,
                "end": 498
              },
              "abstract": false,
              "declare": false,
              "start": 463,
              "end": 498
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 456,
            "end": 498
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 522
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
                      "type": "TSNumberKeyword",
                      "start": 526,
                      "end": 532
                    },
                    "start": 524,
                    "end": 532
                  },
                  "start": 523,
                  "end": 532
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 535,
                  "end": 541
                },
                "start": 533,
                "end": 541
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 551,
                          "end": 552
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 561
                        },
                        "optional": false,
                        "computed": false,
                        "start": 551,
                        "end": 561
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 551,
                      "end": 563
                    },
                    "start": 544,
                    "end": 564
                  }
                ],
                "start": 542,
                "end": 566
              },
              "expression": false,
              "start": 511,
              "end": 566
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 504,
            "end": 566
          }
        ],
        "start": 450,
        "end": 568
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 438,
      "end": 568
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 586,
        "end": 590
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 592,
        "end": 595
      },
      "alternate": null,
      "start": 582,
      "end": 595
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 603,
        "end": 607
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 609,
        "end": 612
      },
      "start": 596,
      "end": 612
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 616,
        "end": 619
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 625,
        "end": 629
      },
      "start": 613,
      "end": 630
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 636,
        "end": 640
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 642,
        "end": 645
      },
      "alternate": null,
      "start": 632,
      "end": 645
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 653,
        "end": 657
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 659,
        "end": 662
      },
      "start": 646,
      "end": 662
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 666,
        "end": 669
      },
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 675,
        "end": 679
      },
      "start": 663,
      "end": 680
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 686,
        "end": 695
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 697,
        "end": 700
      },
      "alternate": null,
      "start": 682,
      "end": 700
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 708,
        "end": 717
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 719,
        "end": 722
      },
      "start": 701,
      "end": 722
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 726,
        "end": 729
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 744
      },
      "start": 723,
      "end": 745
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 751,
        "end": 754
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 756,
        "end": 759
      },
      "alternate": null,
      "start": 747,
      "end": 759
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 767,
        "end": 770
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 772,
        "end": 775
      },
      "start": 760,
      "end": 775
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 779,
        "end": 782
      },
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 788,
        "end": 791
      },
      "start": 776,
      "end": 792
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 798,
        "end": 808
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 810,
        "end": 813
      },
      "alternate": null,
      "start": 794,
      "end": 813
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 821,
        "end": 831
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 833,
        "end": 836
      },
      "start": 814,
      "end": 836
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 840,
        "end": 843
      },
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 849,
        "end": 859
      },
      "start": 837,
      "end": 860
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 866,
        "end": 868
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 870,
        "end": 873
      },
      "alternate": null,
      "start": 862,
      "end": 873
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 881,
        "end": 883
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 885,
        "end": 888
      },
      "start": 874,
      "end": 888
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 892,
        "end": 895
      },
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 901,
        "end": 903
      },
      "start": 889,
      "end": 904
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 910,
        "end": 917
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 919,
        "end": 922
      },
      "alternate": null,
      "start": 906,
      "end": 922
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 930,
        "end": 937
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 939,
        "end": 942
      },
      "start": 923,
      "end": 942
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 946,
        "end": 949
      },
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 955,
        "end": 962
      },
      "start": 943,
      "end": 963
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 969,
        "end": 971
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 973,
        "end": 976
      },
      "alternate": null,
      "start": 965,
      "end": 976
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 984,
        "end": 986
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 988,
        "end": 991
      },
      "start": 977,
      "end": 991
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 995,
        "end": 998
      },
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1004,
        "end": 1006
      },
      "start": 992,
      "end": 1007
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1014,
            "end": 1015
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1017,
            "end": 1018
          }
        ],
        "start": 1013,
        "end": 1019
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1021,
        "end": 1024
      },
      "alternate": null,
      "start": 1009,
      "end": 1024
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1033,
            "end": 1034
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1036,
            "end": 1037
          }
        ],
        "start": 1032,
        "end": 1038
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1040,
        "end": 1043
      },
      "start": 1025,
      "end": 1043
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1047,
        "end": 1050
      },
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1057,
            "end": 1058
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1060,
            "end": 1061
          }
        ],
        "start": 1056,
        "end": 1062
      },
      "start": 1044,
      "end": 1063
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1069,
        "end": 1071
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1073,
        "end": 1076
      },
      "alternate": null,
      "start": 1065,
      "end": 1076
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1084,
        "end": 1086
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1088,
        "end": 1091
      },
      "start": 1077,
      "end": 1091
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1095,
        "end": 1098
      },
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1104,
        "end": 1106
      },
      "start": 1092,
      "end": 1107
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1116
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1118,
              "end": 1119
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1115,
            "end": 1119
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1121,
              "end": 1122
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1124,
              "end": 1127
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1121,
            "end": 1127
          }
        ],
        "start": 1113,
        "end": 1129
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1131,
        "end": 1134
      },
      "alternate": null,
      "start": 1109,
      "end": 1134
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1145
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1147,
              "end": 1148
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1144,
            "end": 1148
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1150,
              "end": 1151
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1153,
              "end": 1156
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1150,
            "end": 1156
          }
        ],
        "start": 1142,
        "end": 1158
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1160,
        "end": 1163
      },
      "start": 1135,
      "end": 1163
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1167,
        "end": 1170
      },
      "test": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1179
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1181,
              "end": 1182
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1178,
            "end": 1182
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1184,
              "end": 1185
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1187,
              "end": 1190
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1184,
            "end": 1190
          }
        ],
        "start": 1176,
        "end": 1192
      },
      "start": 1164,
      "end": 1193
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1205,
          "end": 1207
        },
        "id": null,
        "generator": false,
        "start": 1199,
        "end": 1207
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1209,
        "end": 1212
      },
      "alternate": null,
      "start": 1195,
      "end": 1212
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1226,
          "end": 1228
        },
        "id": null,
        "generator": false,
        "start": 1220,
        "end": 1228
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1230,
        "end": 1233
      },
      "start": 1213,
      "end": 1233
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1237,
        "end": 1240
      },
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1252,
          "end": 1254
        },
        "id": null,
        "generator": false,
        "start": 1246,
        "end": 1254
      },
      "start": 1234,
      "end": 1255
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1265,
          "end": 1266
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1261,
        "end": 1268
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1270,
        "end": 1273
      },
      "alternate": null,
      "start": 1257,
      "end": 1273
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1285,
          "end": 1286
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1281,
        "end": 1288
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1290,
        "end": 1293
      },
      "start": 1274,
      "end": 1293
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1297,
        "end": 1300
      },
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1310,
          "end": 1311
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1306,
        "end": 1313
      },
      "start": 1294,
      "end": 1314
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1324,
          "end": 1325
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
                "start": 1326,
                "end": 1327
              },
              "typeArguments": null,
              "start": 1326,
              "end": 1327
            }
          ],
          "start": 1325,
          "end": 1328
        },
        "arguments": [],
        "start": 1320,
        "end": 1330
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1332,
        "end": 1335
      },
      "alternate": null,
      "start": 1316,
      "end": 1335
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1347,
          "end": 1348
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
                "start": 1349,
                "end": 1350
              },
              "typeArguments": null,
              "start": 1349,
              "end": 1350
            }
          ],
          "start": 1348,
          "end": 1351
        },
        "arguments": [],
        "start": 1343,
        "end": 1353
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1355,
        "end": 1358
      },
      "start": 1336,
      "end": 1358
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1362,
        "end": 1365
      },
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1376
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
                "start": 1377,
                "end": 1378
              },
              "typeArguments": null,
              "start": 1377,
              "end": 1378
            }
          ],
          "start": 1376,
          "end": 1379
        },
        "arguments": [],
        "start": 1371,
        "end": 1381
      },
      "start": 1359,
      "end": 1382
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1402,
            "end": 1403
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1406,
            "end": 1410
          },
          "definite": false,
          "start": 1402,
          "end": 1410
        }
      ],
      "declare": false,
      "start": 1398,
      "end": 1411
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1416,
        "end": 1417
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1419,
        "end": 1422
      },
      "alternate": null,
      "start": 1412,
      "end": 1422
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1430,
        "end": 1431
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1433,
        "end": 1436
      },
      "start": 1423,
      "end": 1436
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1440,
        "end": 1443
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1449,
        "end": 1450
      },
      "start": 1437,
      "end": 1451
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1457,
            "end": 1458
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 1461,
            "end": 1465
          },
          "definite": false,
          "start": 1457,
          "end": 1465
        }
      ],
      "declare": false,
      "start": 1453,
      "end": 1466
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1471,
        "end": 1472
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1474,
        "end": 1477
      },
      "alternate": null,
      "start": 1467,
      "end": 1477
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1485,
        "end": 1486
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1488,
        "end": 1491
      },
      "start": 1478,
      "end": 1491
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1495,
        "end": 1498
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1504,
        "end": 1505
      },
      "start": 1492,
      "end": 1506
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1512,
            "end": 1513
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1516,
            "end": 1525
          },
          "definite": false,
          "start": 1512,
          "end": 1525
        }
      ],
      "declare": false,
      "start": 1508,
      "end": 1526
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1532
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1534,
        "end": 1537
      },
      "alternate": null,
      "start": 1527,
      "end": 1537
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1546
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1548,
        "end": 1551
      },
      "start": 1538,
      "end": 1551
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1555,
        "end": 1558
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1565
      },
      "start": 1552,
      "end": 1566
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1572,
            "end": 1573
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0.0",
            "start": 1576,
            "end": 1579
          },
          "definite": false,
          "start": 1572,
          "end": 1579
        }
      ],
      "declare": false,
      "start": 1568,
      "end": 1580
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1585,
        "end": 1586
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1588,
        "end": 1591
      },
      "alternate": null,
      "start": 1581,
      "end": 1591
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1599,
        "end": 1600
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1602,
        "end": 1605
      },
      "start": 1592,
      "end": 1605
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1609,
        "end": 1612
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1618,
        "end": 1619
      },
      "start": 1606,
      "end": 1620
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 1626,
            "end": 1627
          },
          "init": {
            "type": "Literal",
            "value": "a string",
            "raw": "'a string'",
            "start": 1630,
            "end": 1640
          },
          "definite": false,
          "start": 1626,
          "end": 1640
        }
      ],
      "declare": false,
      "start": 1622,
      "end": 1641
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1646,
        "end": 1647
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1649,
        "end": 1652
      },
      "alternate": null,
      "start": 1642,
      "end": 1652
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1660,
        "end": 1661
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1663,
        "end": 1666
      },
      "start": 1653,
      "end": 1666
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1670,
        "end": 1673
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1679,
        "end": 1680
      },
      "start": 1667,
      "end": 1681
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1687,
            "end": 1688
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1691,
            "end": 1693
          },
          "definite": false,
          "start": 1687,
          "end": 1693
        }
      ],
      "declare": false,
      "start": 1683,
      "end": 1694
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1699,
        "end": 1700
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1702,
        "end": 1705
      },
      "alternate": null,
      "start": 1695,
      "end": 1705
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1713,
        "end": 1714
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1716,
        "end": 1719
      },
      "start": 1706,
      "end": 1719
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1723,
        "end": 1726
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1733
      },
      "start": 1720,
      "end": 1734
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1740,
            "end": 1741
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/[a-z]/",
            "regex": {
              "pattern": "[a-z]",
              "flags": ""
            },
            "start": 1744,
            "end": 1751
          },
          "definite": false,
          "start": 1740,
          "end": 1751
        }
      ],
      "declare": false,
      "start": 1736,
      "end": 1751
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1756,
        "end": 1757
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1759,
        "end": 1762
      },
      "alternate": null,
      "start": 1752,
      "end": 1762
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1770,
        "end": 1771
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1773,
        "end": 1776
      },
      "start": 1763,
      "end": 1776
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1780,
        "end": 1783
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1790
      },
      "start": 1777,
      "end": 1791
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 1797,
            "end": 1798
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1801,
            "end": 1803
          },
          "definite": false,
          "start": 1797,
          "end": 1803
        }
      ],
      "declare": false,
      "start": 1793,
      "end": 1804
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1809,
        "end": 1810
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1812,
        "end": 1815
      },
      "alternate": null,
      "start": 1805,
      "end": 1815
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1823,
        "end": 1824
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1826,
        "end": 1829
      },
      "start": 1816,
      "end": 1829
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1833,
        "end": 1836
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1842,
        "end": 1843
      },
      "start": 1830,
      "end": 1844
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1850,
            "end": 1851
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1855,
                "end": 1856
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1858,
                "end": 1859
              }
            ],
            "start": 1854,
            "end": 1860
          },
          "definite": false,
          "start": 1850,
          "end": 1860
        }
      ],
      "declare": false,
      "start": 1846,
      "end": 1861
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1866,
        "end": 1867
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1869,
        "end": 1872
      },
      "alternate": null,
      "start": 1862,
      "end": 1872
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1880,
        "end": 1881
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1883,
        "end": 1886
      },
      "start": 1873,
      "end": 1886
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1890,
        "end": 1893
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1899,
        "end": 1900
      },
      "start": 1887,
      "end": 1901
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 1907,
            "end": 1908
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 1911,
            "end": 1913
          },
          "definite": false,
          "start": 1907,
          "end": 1913
        }
      ],
      "declare": false,
      "start": 1903,
      "end": 1914
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1919,
        "end": 1920
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1922,
        "end": 1925
      },
      "alternate": null,
      "start": 1915,
      "end": 1925
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1933,
        "end": 1934
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1936,
        "end": 1939
      },
      "start": 1926,
      "end": 1939
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1943,
        "end": 1946
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1952,
        "end": 1953
      },
      "start": 1940,
      "end": 1954
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1960,
            "end": 1961
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1966,
                  "end": 1967
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1969,
                  "end": 1970
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1966,
                "end": 1970
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1972,
                  "end": 1973
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 1975,
                  "end": 1978
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1972,
                "end": 1978
              }
            ],
            "start": 1964,
            "end": 1980
          },
          "definite": false,
          "start": 1960,
          "end": 1980
        }
      ],
      "declare": false,
      "start": 1956,
      "end": 1981
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 1986,
        "end": 1987
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1989,
        "end": 1992
      },
      "alternate": null,
      "start": 1982,
      "end": 1992
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 2000,
        "end": 2001
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2003,
        "end": 2006
      },
      "start": 1993,
      "end": 2006
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2010,
        "end": 2013
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 2019,
        "end": 2020
      },
      "start": 2007,
      "end": 2021
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2032,
        "end": 2034
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
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2039,
              "end": 2045
            },
            "start": 2037,
            "end": 2045
          },
          "start": 2035,
          "end": 2045
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
            "start": 2048,
            "end": 2049
          },
          "typeArguments": null,
          "start": 2048,
          "end": 2049
        },
        "start": 2046,
        "end": 2049
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
              "start": 2059,
              "end": 2063
            },
            "start": 2052,
            "end": 2064
          }
        ],
        "start": 2050,
        "end": 2066
      },
      "expression": false,
      "start": 2023,
      "end": 2066
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2071,
          "end": 2073
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2071,
        "end": 2075
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 2077,
        "end": 2080
      },
      "alternate": null,
      "start": 2067,
      "end": 2080
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2088,
          "end": 2090
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2088,
        "end": 2092
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2094,
        "end": 2097
      },
      "start": 2081,
      "end": 2097
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2101,
        "end": 2104
      },
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2110,
          "end": 2112
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2110,
        "end": 2114
      },
      "start": 2098,
      "end": 2115
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2121,
        "end": 2123
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 2125,
        "end": 2128
      },
      "alternate": null,
      "start": 2117,
      "end": 2128
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2136,
        "end": 2138
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2140,
        "end": 2143
      },
      "start": 2129,
      "end": 2143
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2147,
        "end": 2150
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2156,
        "end": 2158
      },
      "start": 2144,
      "end": 2159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2161
}
```
