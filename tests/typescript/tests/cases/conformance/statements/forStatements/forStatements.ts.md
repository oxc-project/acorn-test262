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
          }
        ],
        "start": 54,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 73
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
        "start": 81,
        "end": 82
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
              "start": 83,
              "end": 84
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 84
          }
        ],
        "start": 82,
        "end": 85
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
              "start": 91,
              "end": 97
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
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 99,
                "end": 100
              },
              "start": 97,
              "end": 100
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
            "start": 91,
            "end": 101
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
              "start": 106,
              "end": 113
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
                  "start": 115,
                  "end": 116
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
                        "start": 117,
                        "end": 118
                      },
                      "typeArguments": null,
                      "start": 117,
                      "end": 118
                    }
                  ],
                  "start": 116,
                  "end": 119
                },
                "start": 115,
                "end": 119
              },
              "start": 113,
              "end": 119
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
            "start": 106,
            "end": 120
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
              "start": 125,
              "end": 132
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
                  "start": 134,
                  "end": 135
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
                        "start": 136,
                        "end": 137
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
                              "start": 138,
                              "end": 139
                            },
                            "typeArguments": null,
                            "start": 138,
                            "end": 139
                          }
                        ],
                        "start": 137,
                        "end": 140
                      },
                      "start": 136,
                      "end": 140
                    }
                  ],
                  "start": 135,
                  "end": 141
                },
                "start": 134,
                "end": 141
              },
              "start": 132,
              "end": 141
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
            "start": 125,
            "end": 141
          }
        ],
        "start": 85,
        "end": 143
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 155
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
              "start": 159,
              "end": 165
            },
            "start": 157,
            "end": 165
          },
          "start": 156,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 168,
          "end": 174
        },
        "start": 166,
        "end": 174
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
              "start": 184,
              "end": 186
            },
            "start": 177,
            "end": 187
          }
        ],
        "start": 175,
        "end": 189
      },
      "expression": false,
      "start": 145,
      "end": 189
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 199
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
                "start": 219,
                "end": 220
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
                      "start": 231,
                      "end": 235
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
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
                    "start": 231,
                    "end": 244
                  }
                ],
                "start": 221,
                "end": 250
              },
              "abstract": false,
              "declare": false,
              "start": 213,
              "end": 250
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 206,
            "end": 250
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
                "start": 272,
                "end": 274
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
                      "start": 278,
                      "end": 284
                    },
                    "start": 276,
                    "end": 284
                  },
                  "start": 275,
                  "end": 284
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 287,
                  "end": 293
                },
                "start": 285,
                "end": 293
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
                          "start": 303,
                          "end": 304
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 305,
                          "end": 313
                        },
                        "optional": false,
                        "computed": false,
                        "start": 303,
                        "end": 313
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 303,
                      "end": 315
                    },
                    "start": 296,
                    "end": 316
                  }
                ],
                "start": 294,
                "end": 318
              },
              "expression": false,
              "start": 263,
              "end": 318
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 256,
            "end": 318
          }
        ],
        "start": 200,
        "end": 320
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 320
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aNumber",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 339,
                  "end": 345
                },
                "start": 337,
                "end": 345
              },
              "start": 330,
              "end": 345
            },
            "init": {
              "type": "Literal",
              "value": 9.9,
              "raw": "9.9",
              "start": 348,
              "end": 351
            },
            "definite": false,
            "start": 330,
            "end": 351
          }
        ],
        "declare": false,
        "start": 326,
        "end": 351
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 354,
        "end": 356
      },
      "start": 322,
      "end": 356
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aString",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 375,
                  "end": 381
                },
                "start": 373,
                "end": 381
              },
              "start": 366,
              "end": 381
            },
            "init": {
              "type": "Literal",
              "value": "this is a string",
              "raw": "'this is a string'",
              "start": 384,
              "end": 402
            },
            "definite": false,
            "start": 366,
            "end": 402
          }
        ],
        "declare": false,
        "start": 362,
        "end": 402
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 405,
        "end": 407
      },
      "start": 358,
      "end": 407
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aDate",
              "optional": false,
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
                    "start": 423,
                    "end": 427
                  },
                  "typeArguments": null,
                  "start": 423,
                  "end": 427
                },
                "start": 421,
                "end": 427
              },
              "start": 416,
              "end": 427
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 438
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 439,
                  "end": 441
                }
              ],
              "start": 430,
              "end": 442
            },
            "definite": false,
            "start": 416,
            "end": 442
          }
        ],
        "declare": false,
        "start": 412,
        "end": 442
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 445,
        "end": 447
      },
      "start": 408,
      "end": 447
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anObject",
              "optional": false,
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
                    "start": 466,
                    "end": 472
                  },
                  "typeArguments": null,
                  "start": 466,
                  "end": 472
                },
                "start": 464,
                "end": 472
              },
              "start": 456,
              "end": 472
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 485
              },
              "typeArguments": null,
              "arguments": [],
              "start": 475,
              "end": 487
            },
            "definite": false,
            "start": 456,
            "end": 487
          }
        ],
        "declare": false,
        "start": 452,
        "end": 487
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 490,
        "end": 492
      },
      "start": 448,
      "end": 492
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anAny",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 509,
                  "end": 512
                },
                "start": 507,
                "end": 512
              },
              "start": 502,
              "end": 512
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 515,
              "end": 519
            },
            "definite": false,
            "start": 502,
            "end": 519
          }
        ],
        "declare": false,
        "start": 498,
        "end": 519
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 522,
        "end": 524
      },
      "start": 494,
      "end": 524
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aSecondAny",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 545,
                  "end": 548
                },
                "start": 543,
                "end": 548
              },
              "start": 533,
              "end": 548
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 560
            },
            "definite": false,
            "start": 533,
            "end": 560
          }
        ],
        "declare": false,
        "start": 529,
        "end": 560
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 563,
        "end": 565
      },
      "start": 525,
      "end": 565
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aVoid",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 581,
                  "end": 585
                },
                "start": 579,
                "end": 585
              },
              "start": 574,
              "end": 585
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 597
            },
            "definite": false,
            "start": 574,
            "end": 597
          }
        ],
        "declare": false,
        "start": 570,
        "end": 597
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 600,
        "end": 602
      },
      "start": 566,
      "end": 602
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anInterface",
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
                    "start": 625,
                    "end": 626
                  },
                  "typeArguments": null,
                  "start": 625,
                  "end": 626
                },
                "start": 623,
                "end": 626
              },
              "start": 612,
              "end": 626
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "typeArguments": null,
              "arguments": [],
              "start": 629,
              "end": 636
            },
            "definite": false,
            "start": 612,
            "end": 636
          }
        ],
        "declare": false,
        "start": 608,
        "end": 636
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 639,
        "end": 641
      },
      "start": 604,
      "end": 641
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aClass",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 659
                  },
                  "typeArguments": null,
                  "start": 658,
                  "end": 659
                },
                "start": 656,
                "end": 659
              },
              "start": 650,
              "end": 659
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 667
              },
              "typeArguments": null,
              "arguments": [],
              "start": 662,
              "end": 669
            },
            "definite": false,
            "start": 650,
            "end": 669
          }
        ],
        "declare": false,
        "start": 646,
        "end": 669
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 672,
        "end": 674
      },
      "start": 642,
      "end": 674
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aGenericClass",
              "optional": false,
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
                    "start": 698,
                    "end": 699
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 700,
                        "end": 706
                      }
                    ],
                    "start": 699,
                    "end": 707
                  },
                  "start": 698,
                  "end": 707
                },
                "start": 696,
                "end": 707
              },
              "start": 683,
              "end": 707
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 715
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 716,
                    "end": 722
                  }
                ],
                "start": 715,
                "end": 723
              },
              "arguments": [],
              "start": 710,
              "end": 725
            },
            "definite": false,
            "start": 683,
            "end": 725
          }
        ],
        "declare": false,
        "start": 679,
        "end": 725
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 728,
        "end": 730
      },
      "start": 675,
      "end": 730
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anObjectLiteral",
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
              "start": 739,
              "end": 757
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 764
                  },
                  "value": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 766,
                    "end": 768
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 762,
                  "end": 768
                }
              ],
              "start": 760,
              "end": 770
            },
            "definite": false,
            "start": 739,
            "end": 770
          }
        ],
        "declare": false,
        "start": 735,
        "end": 770
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 773,
        "end": 775
      },
      "start": 731,
      "end": 775
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anOtherObjectLiteral",
              "optional": false,
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
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 808,
                        "end": 810
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 812,
                          "end": 818
                        },
                        "start": 810,
                        "end": 818
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 808,
                      "end": 818
                    }
                  ],
                  "start": 806,
                  "end": 820
                },
                "start": 804,
                "end": 820
              },
              "start": 784,
              "end": 820
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 828
              },
              "typeArguments": null,
              "arguments": [],
              "start": 823,
              "end": 830
            },
            "definite": false,
            "start": 784,
            "end": 830
          }
        ],
        "declare": false,
        "start": 780,
        "end": 830
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 833,
        "end": 835
      },
      "start": 776,
      "end": 835
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunction",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 864
                  },
                  "typeArguments": null,
                  "start": 856,
                  "end": 864
                },
                "start": 854,
                "end": 864
              },
              "start": 845,
              "end": 864
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 868
            },
            "definite": false,
            "start": 845,
            "end": 868
          }
        ],
        "declare": false,
        "start": 841,
        "end": 868
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 871,
        "end": 873
      },
      "start": 837,
      "end": 873
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "anOtherFunction",
              "optional": false,
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
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 903,
                          "end": 909
                        },
                        "start": 901,
                        "end": 909
                      },
                      "start": 900,
                      "end": 909
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 914,
                      "end": 920
                    },
                    "start": 911,
                    "end": 920
                  },
                  "start": 899,
                  "end": 920
                },
                "start": 897,
                "end": 920
              },
              "start": 882,
              "end": 920
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 923,
              "end": 924
            },
            "definite": false,
            "start": 882,
            "end": 924
          }
        ],
        "declare": false,
        "start": 878,
        "end": 924
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 927,
        "end": 929
      },
      "start": 874,
      "end": 929
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aLambda",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 954,
                    "end": 955
                  },
                  "typeArguments": null,
                  "start": 947,
                  "end": 955
                },
                "start": 945,
                "end": 955
              },
              "start": 938,
              "end": 955
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 959,
                  "end": 960
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 965,
                "end": 966
              },
              "id": null,
              "generator": false,
              "start": 958,
              "end": 966
            },
            "definite": false,
            "start": 938,
            "end": 966
          }
        ],
        "declare": false,
        "start": 934,
        "end": 966
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 969,
        "end": 971
      },
      "start": 930,
      "end": 971
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aModule",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 997,
                    "end": 998
                  },
                  "typeArguments": null,
                  "start": 990,
                  "end": 998
                },
                "start": 988,
                "end": 998
              },
              "start": 981,
              "end": 998
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1002
            },
            "definite": false,
            "start": 981,
            "end": 1002
          }
        ],
        "declare": false,
        "start": 977,
        "end": 1002
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1005,
        "end": 1007
      },
      "start": 973,
      "end": 1007
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aClassInModule",
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
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1033
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1034,
                      "end": 1035
                    },
                    "start": 1032,
                    "end": 1035
                  },
                  "typeArguments": null,
                  "start": 1032,
                  "end": 1035
                },
                "start": 1030,
                "end": 1035
              },
              "start": 1016,
              "end": 1035
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1043
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1044,
                  "end": 1045
                },
                "optional": false,
                "computed": false,
                "start": 1042,
                "end": 1045
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1038,
              "end": 1047
            },
            "definite": false,
            "start": 1016,
            "end": 1047
          }
        ],
        "declare": false,
        "start": 1012,
        "end": 1047
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1050,
        "end": 1052
      },
      "start": 1008,
      "end": 1052
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFunctionInModule",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1087,
                      "end": 1088
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1089,
                      "end": 1091
                    },
                    "start": 1087,
                    "end": 1091
                  },
                  "typeArguments": null,
                  "start": 1080,
                  "end": 1091
                },
                "start": 1078,
                "end": 1091
              },
              "start": 1061,
              "end": 1091
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1095,
                  "end": 1096
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "this is a string",
                "raw": "'this is a string'",
                "start": 1101,
                "end": 1119
              },
              "id": null,
              "generator": false,
              "start": 1094,
              "end": 1119
            },
            "definite": false,
            "start": 1061,
            "end": 1119
          }
        ],
        "declare": false,
        "start": 1057,
        "end": 1119
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1122,
        "end": 1124
      },
      "start": 1053,
      "end": 1124
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1124
}
```
