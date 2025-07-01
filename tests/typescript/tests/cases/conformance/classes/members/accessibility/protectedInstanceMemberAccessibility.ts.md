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
        "start": 6,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
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
            "start": 14,
            "end": 34
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
              "start": 49,
              "end": 50
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
                  "start": 54,
                  "end": 60
                },
                "start": 52,
                "end": 60
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 78,
                      "end": 85
                    },
                    "start": 71,
                    "end": 86
                  }
                ],
                "start": 61,
                "end": 92
              },
              "expression": false,
              "start": 50,
              "end": 92
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 39,
            "end": 92
          }
        ],
        "start": 8,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 94
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
        "start": 102,
        "end": 103
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
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
            "start": 120,
            "end": 140
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
              "start": 145,
              "end": 146
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 165
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 168,
                            "end": 172
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 174
                          },
                          "optional": false,
                          "computed": false,
                          "start": 168,
                          "end": 174
                        },
                        "definite": false,
                        "start": 163,
                        "end": 174
                      }
                    ],
                    "declare": false,
                    "start": 159,
                    "end": 175
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
                          "name": "t2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 190
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 193,
                              "end": 197
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 198,
                              "end": 199
                            },
                            "optional": false,
                            "computed": false,
                            "start": 193,
                            "end": 199
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 193,
                          "end": 201
                        },
                        "definite": false,
                        "start": 188,
                        "end": 201
                      }
                    ],
                    "declare": false,
                    "start": 184,
                    "end": 202
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
                          "name": "t3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 217
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 220,
                            "end": 224
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 226
                          },
                          "optional": false,
                          "computed": false,
                          "start": 220,
                          "end": 226
                        },
                        "definite": false,
                        "start": 215,
                        "end": 226
                      }
                    ],
                    "declare": false,
                    "start": 211,
                    "end": 227
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
                          "name": "t4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 240,
                          "end": 242
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 245,
                            "end": 249
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 250,
                            "end": 251
                          },
                          "optional": false,
                          "computed": false,
                          "start": 245,
                          "end": 251
                        },
                        "definite": false,
                        "start": 240,
                        "end": 251
                      }
                    ],
                    "declare": false,
                    "start": 236,
                    "end": 252
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
                          "name": "s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 281
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 284,
                            "end": 289
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 290,
                            "end": 291
                          },
                          "optional": false,
                          "computed": false,
                          "start": 284,
                          "end": 291
                        },
                        "definite": false,
                        "start": 279,
                        "end": 291
                      }
                    ],
                    "declare": false,
                    "start": 275,
                    "end": 292
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
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 319
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 322,
                              "end": 327
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 328,
                              "end": 329
                            },
                            "optional": false,
                            "computed": false,
                            "start": 322,
                            "end": 329
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 322,
                          "end": 331
                        },
                        "definite": false,
                        "start": 317,
                        "end": 331
                      }
                    ],
                    "declare": false,
                    "start": 313,
                    "end": 332
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
                          "name": "s3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 345,
                          "end": 347
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 350,
                            "end": 355
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 356,
                            "end": 357
                          },
                          "optional": false,
                          "computed": false,
                          "start": 350,
                          "end": 357
                        },
                        "definite": false,
                        "start": 345,
                        "end": 357
                      }
                    ],
                    "declare": false,
                    "start": 341,
                    "end": 358
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
                          "name": "s4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 383,
                          "end": 385
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 388,
                            "end": 393
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 394,
                            "end": 395
                          },
                          "optional": false,
                          "computed": false,
                          "start": 388,
                          "end": 395
                        },
                        "definite": false,
                        "start": 383,
                        "end": 395
                      }
                    ],
                    "declare": false,
                    "start": 379,
                    "end": 396
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 425,
                                "end": 426
                              },
                              "typeArguments": null,
                              "start": 425,
                              "end": 426
                            },
                            "start": 423,
                            "end": 426
                          },
                          "start": 422,
                          "end": 426
                        },
                        "init": null,
                        "definite": false,
                        "start": 422,
                        "end": 426
                      }
                    ],
                    "declare": false,
                    "start": 418,
                    "end": 427
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
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 442
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 445,
                            "end": 446
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 447,
                            "end": 448
                          },
                          "optional": false,
                          "computed": false,
                          "start": 445,
                          "end": 448
                        },
                        "definite": false,
                        "start": 440,
                        "end": 448
                      }
                    ],
                    "declare": false,
                    "start": 436,
                    "end": 449
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 474,
                          "end": 476
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 479,
                              "end": 480
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 481,
                              "end": 482
                            },
                            "optional": false,
                            "computed": false,
                            "start": 479,
                            "end": 482
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 479,
                          "end": 484
                        },
                        "definite": false,
                        "start": 474,
                        "end": 484
                      }
                    ],
                    "declare": false,
                    "start": 470,
                    "end": 485
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
                          "name": "a3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 508,
                          "end": 510
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 513,
                            "end": 514
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 516
                          },
                          "optional": false,
                          "computed": false,
                          "start": 513,
                          "end": 516
                        },
                        "definite": false,
                        "start": 508,
                        "end": 516
                      }
                    ],
                    "declare": false,
                    "start": 504,
                    "end": 517
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
                          "name": "a4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 542,
                          "end": 544
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 547,
                            "end": 548
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 549,
                            "end": 550
                          },
                          "optional": false,
                          "computed": false,
                          "start": 547,
                          "end": 550
                        },
                        "definite": false,
                        "start": 542,
                        "end": 550
                      }
                    ],
                    "declare": false,
                    "start": 538,
                    "end": 551
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 580,
                                "end": 581
                              },
                              "typeArguments": null,
                              "start": 580,
                              "end": 581
                            },
                            "start": 578,
                            "end": 581
                          },
                          "start": 577,
                          "end": 581
                        },
                        "init": null,
                        "definite": false,
                        "start": 577,
                        "end": 581
                      }
                    ],
                    "declare": false,
                    "start": 573,
                    "end": 582
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
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 595,
                          "end": 597
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 600,
                            "end": 601
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 602,
                            "end": 603
                          },
                          "optional": false,
                          "computed": false,
                          "start": 600,
                          "end": 603
                        },
                        "definite": false,
                        "start": 595,
                        "end": 603
                      }
                    ],
                    "declare": false,
                    "start": 591,
                    "end": 604
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
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 617,
                          "end": 619
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 622,
                              "end": 623
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 624,
                              "end": 625
                            },
                            "optional": false,
                            "computed": false,
                            "start": 622,
                            "end": 625
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 622,
                          "end": 627
                        },
                        "definite": false,
                        "start": 617,
                        "end": 627
                      }
                    ],
                    "declare": false,
                    "start": 613,
                    "end": 628
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
                          "name": "b3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 641,
                          "end": 643
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 646,
                            "end": 647
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 648,
                            "end": 649
                          },
                          "optional": false,
                          "computed": false,
                          "start": 646,
                          "end": 649
                        },
                        "definite": false,
                        "start": 641,
                        "end": 649
                      }
                    ],
                    "declare": false,
                    "start": 637,
                    "end": 650
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
                          "name": "b4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 663,
                          "end": 665
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 668,
                            "end": 669
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 670,
                            "end": 671
                          },
                          "optional": false,
                          "computed": false,
                          "start": 668,
                          "end": 671
                        },
                        "definite": false,
                        "start": 663,
                        "end": 671
                      }
                    ],
                    "declare": false,
                    "start": 659,
                    "end": 672
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
                                "start": 701,
                                "end": 702
                              },
                              "typeArguments": null,
                              "start": 701,
                              "end": 702
                            },
                            "start": 699,
                            "end": 702
                          },
                          "start": 698,
                          "end": 702
                        },
                        "init": null,
                        "definite": false,
                        "start": 698,
                        "end": 702
                      }
                    ],
                    "declare": false,
                    "start": 694,
                    "end": 703
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
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 718
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 721,
                            "end": 722
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 723,
                            "end": 724
                          },
                          "optional": false,
                          "computed": false,
                          "start": 721,
                          "end": 724
                        },
                        "definite": false,
                        "start": 716,
                        "end": 724
                      }
                    ],
                    "declare": false,
                    "start": 712,
                    "end": 725
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
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 750,
                          "end": 752
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 755,
                              "end": 756
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 757,
                              "end": 758
                            },
                            "optional": false,
                            "computed": false,
                            "start": 755,
                            "end": 758
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 755,
                          "end": 760
                        },
                        "definite": false,
                        "start": 750,
                        "end": 760
                      }
                    ],
                    "declare": false,
                    "start": 746,
                    "end": 761
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
                          "name": "c3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 784,
                          "end": 786
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 789,
                            "end": 790
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 791,
                            "end": 792
                          },
                          "optional": false,
                          "computed": false,
                          "start": 789,
                          "end": 792
                        },
                        "definite": false,
                        "start": 784,
                        "end": 792
                      }
                    ],
                    "declare": false,
                    "start": 780,
                    "end": 793
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
                          "name": "c4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 818,
                          "end": 820
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 823,
                            "end": 824
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 825,
                            "end": 826
                          },
                          "optional": false,
                          "computed": false,
                          "start": 823,
                          "end": 826
                        },
                        "definite": false,
                        "start": 818,
                        "end": 826
                      }
                    ],
                    "declare": false,
                    "start": 814,
                    "end": 827
                  }
                ],
                "start": 149,
                "end": 845
              },
              "expression": false,
              "start": 146,
              "end": 845
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 845
          }
        ],
        "start": 114,
        "end": 847
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 847
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
        "start": 855,
        "end": 856
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 865,
        "end": 866
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 884
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 886,
                "end": 892
              },
              "start": 884,
              "end": 892
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
            "start": 873,
            "end": 893
          }
        ],
        "start": 867,
        "end": 895
      },
      "abstract": false,
      "declare": false,
      "start": 849,
      "end": 895
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 895
}
```
