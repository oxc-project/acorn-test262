__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 82
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
                  "type": "TSStringKeyword",
                  "start": 86,
                  "end": 92
                },
                "start": 84,
                "end": 92
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 102,
                      "end": 104
                    },
                    "start": 95,
                    "end": 105
                  }
                ],
                "start": 93,
                "end": 107
              },
              "expression": false,
              "start": 82,
              "end": 107
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 79,
            "end": 107
          }
        ],
        "start": 73,
        "end": 109
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 109
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 128
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 138
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
                  "type": "TSStringKeyword",
                  "start": 142,
                  "end": 148
                },
                "start": 140,
                "end": 148
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 158,
                      "end": 160
                    },
                    "start": 151,
                    "end": 161
                  }
                ],
                "start": 149,
                "end": 163
              },
              "expression": false,
              "start": 138,
              "end": 163
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 135,
            "end": 163
          }
        ],
        "start": 129,
        "end": 165
      },
      "abstract": false,
      "declare": false,
      "start": 111,
      "end": 165
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 176
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "type": "TSNumberKeyword",
                    "start": 187,
                    "end": 193
                  },
                  "start": 185,
                  "end": 193
                },
                "start": 184,
                "end": 193
              }
            ],
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
                  "start": 196,
                  "end": 197
                },
                "typeArguments": null,
                "start": 196,
                "end": 197
              },
              "start": 194,
              "end": 197
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 183,
            "end": 198
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1.0",
              "start": 203,
              "end": 206
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
                  "start": 208,
                  "end": 209
                },
                "typeArguments": null,
                "start": 208,
                "end": 209
              },
              "start": 206,
              "end": 209
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
            "start": 203,
            "end": 210
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2.0",
              "start": 221,
              "end": 224
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 227
                },
                "typeArguments": null,
                "start": 226,
                "end": 227
              },
              "start": 224,
              "end": 227
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
            "start": 221,
            "end": 228
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "2.5",
              "raw": "\"2.5\"",
              "start": 239,
              "end": 244
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 247
                },
                "typeArguments": null,
                "start": 246,
                "end": 247
              },
              "start": 244,
              "end": 247
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
            "start": 239,
            "end": 247
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 3,
              "raw": "3.0",
              "start": 258,
              "end": 261
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 263,
                "end": 269
              },
              "start": 261,
              "end": 269
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
            "start": 258,
            "end": 270
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "4.0",
              "raw": "\"4.0\"",
              "start": 284,
              "end": 289
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 291,
                "end": 297
              },
              "start": 289,
              "end": 297
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
            "start": 284,
            "end": 298
          }
        ],
        "start": 177,
        "end": 309
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 309
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 325
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
                    "type": "TSNumberKeyword",
                    "start": 336,
                    "end": 342
                  },
                  "start": 334,
                  "end": 342
                },
                "start": 333,
                "end": 342
              }
            ],
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
                  "start": 345,
                  "end": 346
                },
                "typeArguments": null,
                "start": 345,
                "end": 346
              },
              "start": 343,
              "end": 346
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 332,
            "end": 347
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1.0",
              "start": 352,
              "end": 355
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
                  "start": 357,
                  "end": 358
                },
                "typeArguments": null,
                "start": 357,
                "end": 358
              },
              "start": 355,
              "end": 358
            },
            "accessibility": null,
            "static": false,
            "start": 352,
            "end": 359
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2.0",
              "start": 370,
              "end": 373
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 376
                },
                "typeArguments": null,
                "start": 375,
                "end": 376
              },
              "start": 373,
              "end": 376
            },
            "accessibility": null,
            "static": false,
            "start": 370,
            "end": 377
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "2.5",
              "raw": "\"2.5\"",
              "start": 388,
              "end": 393
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 396
                },
                "typeArguments": null,
                "start": 395,
                "end": 396
              },
              "start": 393,
              "end": 396
            },
            "accessibility": null,
            "static": false,
            "start": 388,
            "end": 396
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 3,
              "raw": "3.0",
              "start": 407,
              "end": 410
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 412,
                "end": 418
              },
              "start": 410,
              "end": 418
            },
            "accessibility": null,
            "static": false,
            "start": 407,
            "end": 419
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "4.0",
              "raw": "\"4.0\"",
              "start": 433,
              "end": 438
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 440,
                "end": 446
              },
              "start": 438,
              "end": 446
            },
            "accessibility": null,
            "static": false,
            "start": 433,
            "end": 447
          }
        ],
        "start": 326,
        "end": 458
      },
      "declare": false,
      "start": 311,
      "end": 458
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                            "type": "TSNumberKeyword",
                            "start": 477,
                            "end": 483
                          },
                          "start": 475,
                          "end": 483
                        },
                        "start": 474,
                        "end": 483
                      }
                    ],
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
                          "start": 486,
                          "end": 487
                        },
                        "typeArguments": null,
                        "start": 486,
                        "end": 487
                      },
                      "start": 484,
                      "end": 487
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 473,
                    "end": 488
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1.0",
                      "start": 493,
                      "end": 496
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
                          "start": 498,
                          "end": 499
                        },
                        "typeArguments": null,
                        "start": 498,
                        "end": 499
                      },
                      "start": 496,
                      "end": 499
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 493,
                    "end": 500
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2.0",
                      "start": 511,
                      "end": 514
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 516,
                          "end": 517
                        },
                        "typeArguments": null,
                        "start": 516,
                        "end": 517
                      },
                      "start": 514,
                      "end": 517
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 511,
                    "end": 518
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2.5",
                      "raw": "\"2.5\"",
                      "start": 529,
                      "end": 534
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 536,
                          "end": 537
                        },
                        "typeArguments": null,
                        "start": 536,
                        "end": 537
                      },
                      "start": 534,
                      "end": 537
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 529,
                    "end": 537
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3.0",
                      "start": 548,
                      "end": 551
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 553,
                        "end": 559
                      },
                      "start": 551,
                      "end": 559
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 548,
                    "end": 560
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "4.0",
                      "raw": "\"4.0\"",
                      "start": 574,
                      "end": 579
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 581,
                        "end": 587
                      },
                      "start": 579,
                      "end": 587
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 574,
                    "end": 588
                  }
                ],
                "start": 467,
                "end": 599
              },
              "start": 465,
              "end": 599
            },
            "start": 464,
            "end": 599
          },
          "init": null,
          "definite": false,
          "start": 464,
          "end": 599
        }
      ],
      "declare": false,
      "start": 460,
      "end": 600
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
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
                            "type": "TSNumberKeyword",
                            "start": 624,
                            "end": 630
                          },
                          "start": 622,
                          "end": 630
                        },
                        "start": 621,
                        "end": 630
                      }
                    ],
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
                          "start": 633,
                          "end": 634
                        },
                        "typeArguments": null,
                        "start": 633,
                        "end": 634
                      },
                      "start": 631,
                      "end": 634
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 620,
                    "end": 634
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
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1.0",
                  "start": 645,
                  "end": 648
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 655
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 650,
                  "end": 657
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 645,
                "end": 657
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2.0",
                  "start": 664,
                  "end": 667
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 673,
                    "end": 674
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 669,
                  "end": 676
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 664,
                "end": 676
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "2.5",
                  "raw": "\"2.5\"",
                  "start": 683,
                  "end": 688
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 695
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 690,
                  "end": 697
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 683,
                "end": 697
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3.0",
                  "start": 703,
                  "end": 706
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 708,
                  "end": 709
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 703,
                "end": 709
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "4.0",
                  "raw": "\"4.0\"",
                  "start": 715,
                  "end": 720
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 722,
                  "end": 724
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 715,
                "end": 724
              }
            ],
            "start": 639,
            "end": 726
          },
          "definite": false,
          "start": 615,
          "end": 726
        }
      ],
      "declare": false,
      "start": 611,
      "end": 726
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 65,
  "end": 726
}
```
