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
        "name": "SimpleTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 160
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
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
                    "start": 177,
                    "end": 180
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 182,
                      "end": 188
                    },
                    "start": 180,
                    "end": 188
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
                  "start": 177,
                  "end": 189
                }
              ],
              "start": 175,
              "end": 191
            },
            "abstract": false,
            "declare": false,
            "start": 167,
            "end": 191
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
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
                    "start": 206,
                    "end": 209
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 211,
                      "end": 217
                    },
                    "start": 209,
                    "end": 217
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
                  "start": 206,
                  "end": 218
                }
              ],
              "start": 204,
              "end": 220
            },
            "abstract": false,
            "declare": false,
            "start": 196,
            "end": 220
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 232,
                        "end": 233
                      },
                      "typeArguments": null,
                      "start": 232,
                      "end": 233
                    },
                    "start": 230,
                    "end": 233
                  },
                  "start": 229,
                  "end": 233
                },
                "init": null,
                "definite": false,
                "start": 229,
                "end": 233
              }
            ],
            "declare": false,
            "start": 225,
            "end": 234
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
                  "start": 243,
                  "end": 247
                },
                "init": null,
                "definite": false,
                "start": 243,
                "end": 247
              }
            ],
            "declare": false,
            "start": 239,
            "end": 248
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 266
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 272
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 274,
                      "end": 280
                    },
                    "start": 272,
                    "end": 280
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 269,
                  "end": 281
                }
              ],
              "start": 267,
              "end": 283
            },
            "declare": false,
            "start": 254,
            "end": 283
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 300
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 306
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 308,
                      "end": 314
                    },
                    "start": 306,
                    "end": 314
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 303,
                  "end": 315
                }
              ],
              "start": 301,
              "end": 317
            },
            "declare": false,
            "start": 288,
            "end": 317
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 332
                      },
                      "typeArguments": null,
                      "start": 330,
                      "end": 332
                    },
                    "start": 328,
                    "end": 332
                  },
                  "start": 326,
                  "end": 332
                },
                "init": null,
                "definite": false,
                "start": 326,
                "end": 332
              }
            ],
            "declare": false,
            "start": 322,
            "end": 333
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 346,
                        "end": 348
                      },
                      "typeArguments": null,
                      "start": 346,
                      "end": 348
                    },
                    "start": 344,
                    "end": 348
                  },
                  "start": 342,
                  "end": 348
                },
                "init": null,
                "definite": false,
                "start": 342,
                "end": 348
              }
            ],
            "declare": false,
            "start": 338,
            "end": 349
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
                            "start": 364,
                            "end": 367
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 369,
                              "end": 375
                            },
                            "start": 367,
                            "end": 375
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 364,
                          "end": 376
                        }
                      ],
                      "start": 362,
                      "end": 378
                    },
                    "start": 360,
                    "end": 378
                  },
                  "start": 359,
                  "end": 378
                },
                "init": null,
                "definite": false,
                "start": 359,
                "end": 378
              }
            ],
            "declare": false,
            "start": 355,
            "end": 378
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
                            "start": 392,
                            "end": 395
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 397,
                              "end": 403
                            },
                            "start": 395,
                            "end": 403
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 392,
                          "end": 404
                        }
                      ],
                      "start": 390,
                      "end": 406
                    },
                    "start": 388,
                    "end": 406
                  },
                  "start": 387,
                  "end": 406
                },
                "init": null,
                "definite": false,
                "start": 387,
                "end": 406
              }
            ],
            "declare": false,
            "start": 383,
            "end": 406
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
                  "start": 416,
                  "end": 418
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 426
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 428,
                        "end": 430
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 423,
                      "end": 430
                    }
                  ],
                  "start": 421,
                  "end": 432
                },
                "definite": false,
                "start": 416,
                "end": 432
              }
            ],
            "declare": false,
            "start": 412,
            "end": 433
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
                  "start": 442,
                  "end": 444
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 452
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 454,
                        "end": 456
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 449,
                      "end": 456
                    }
                  ],
                  "start": 447,
                  "end": 458
                },
                "definite": false,
                "start": 442,
                "end": 458
              }
            ],
            "declare": false,
            "start": 438,
            "end": 459
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 466
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 470
              },
              "start": 465,
              "end": 470
            },
            "directive": null,
            "start": 465,
            "end": 471
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "start": 476,
              "end": 481
            },
            "directive": null,
            "start": 476,
            "end": 482
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 493
              },
              "start": 487,
              "end": 493
            },
            "directive": null,
            "start": 487,
            "end": 494
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 500
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 505
              },
              "start": 499,
              "end": 505
            },
            "directive": null,
            "start": 499,
            "end": 506
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 514
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 519
              },
              "start": 512,
              "end": 519
            },
            "directive": null,
            "start": 512,
            "end": 520
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 527
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 532
              },
              "start": 525,
              "end": 532
            },
            "directive": null,
            "start": 525,
            "end": 533
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 540
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "start": 538,
              "end": 544
            },
            "directive": null,
            "start": 538,
            "end": 545
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 552
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "start": 550,
              "end": 556
            },
            "directive": null,
            "start": 550,
            "end": 557
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 564
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 569
              },
              "start": 562,
              "end": 569
            },
            "directive": null,
            "start": 562,
            "end": 570
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 577
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 581
              },
              "start": 576,
              "end": 581
            },
            "directive": null,
            "start": 576,
            "end": 582
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 588
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 592
              },
              "start": 587,
              "end": 592
            },
            "directive": null,
            "start": 587,
            "end": 593
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 599
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 603
              },
              "start": 598,
              "end": 603
            },
            "directive": null,
            "start": 598,
            "end": 604
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 610
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 615
              },
              "start": 609,
              "end": 615
            },
            "directive": null,
            "start": 609,
            "end": 616
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 622
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 627
              },
              "start": 621,
              "end": 627
            },
            "directive": null,
            "start": 621,
            "end": 628
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 636
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 641
              },
              "start": 634,
              "end": 641
            },
            "directive": null,
            "start": 634,
            "end": 642
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 649
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 654
              },
              "start": 647,
              "end": 654
            },
            "directive": null,
            "start": 647,
            "end": 655
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 662
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 665,
                "end": 666
              },
              "start": 660,
              "end": 666
            },
            "directive": null,
            "start": 660,
            "end": 667
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 672,
                "end": 674
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 679
              },
              "start": 672,
              "end": 679
            },
            "directive": null,
            "start": 672,
            "end": 680
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 687
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 690,
                "end": 691
              },
              "start": 685,
              "end": 691
            },
            "directive": null,
            "start": 685,
            "end": 692
          }
        ],
        "start": 161,
        "end": 694
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 139,
      "end": 694
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 717
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 731
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
                    "start": 734,
                    "end": 737
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 739,
                        "end": 740
                      },
                      "typeArguments": null,
                      "start": 739,
                      "end": 740
                    },
                    "start": 737,
                    "end": 740
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
                  "start": 734,
                  "end": 741
                }
              ],
              "start": 732,
              "end": 743
            },
            "abstract": false,
            "declare": false,
            "start": 724,
            "end": 743
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 755
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
                    "start": 758,
                    "end": 761
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
                        "start": 763,
                        "end": 764
                      },
                      "typeArguments": null,
                      "start": 763,
                      "end": 764
                    },
                    "start": 761,
                    "end": 764
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
                  "start": 758,
                  "end": 765
                }
              ],
              "start": 756,
              "end": 767
            },
            "abstract": false,
            "declare": false,
            "start": 748,
            "end": 767
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 779,
                        "end": 780
                      },
                      "typeArguments": null,
                      "start": 779,
                      "end": 780
                    },
                    "start": 777,
                    "end": 780
                  },
                  "start": 776,
                  "end": 780
                },
                "init": null,
                "definite": false,
                "start": 776,
                "end": 780
              }
            ],
            "declare": false,
            "start": 772,
            "end": 781
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
                        "start": 793,
                        "end": 794
                      },
                      "typeArguments": null,
                      "start": 793,
                      "end": 794
                    },
                    "start": 791,
                    "end": 794
                  },
                  "start": 790,
                  "end": 794
                },
                "init": null,
                "definite": false,
                "start": 790,
                "end": 794
              }
            ],
            "declare": false,
            "start": 786,
            "end": 795
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 813
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 819
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 823
                      },
                      "typeArguments": null,
                      "start": 821,
                      "end": 823
                    },
                    "start": 819,
                    "end": 823
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 816,
                  "end": 824
                }
              ],
              "start": 814,
              "end": 826
            },
            "declare": false,
            "start": 801,
            "end": 826
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 841,
              "end": 843
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 846,
                    "end": 849
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 851,
                        "end": 853
                      },
                      "typeArguments": null,
                      "start": 851,
                      "end": 853
                    },
                    "start": 849,
                    "end": 853
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 846,
                  "end": 854
                }
              ],
              "start": 844,
              "end": 856
            },
            "declare": false,
            "start": 831,
            "end": 856
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 869,
                        "end": 871
                      },
                      "typeArguments": null,
                      "start": 869,
                      "end": 871
                    },
                    "start": 867,
                    "end": 871
                  },
                  "start": 865,
                  "end": 871
                },
                "init": null,
                "definite": false,
                "start": 865,
                "end": 871
              }
            ],
            "declare": false,
            "start": 861,
            "end": 872
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 885,
                        "end": 887
                      },
                      "typeArguments": null,
                      "start": 885,
                      "end": 887
                    },
                    "start": 883,
                    "end": 887
                  },
                  "start": 881,
                  "end": 887
                },
                "init": null,
                "definite": false,
                "start": 881,
                "end": 887
              }
            ],
            "declare": false,
            "start": 877,
            "end": 888
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
                            "start": 903,
                            "end": 906
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 915,
                                "end": 916
                              },
                              "typeArguments": null,
                              "start": 908,
                              "end": 916
                            },
                            "start": 906,
                            "end": 916
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 903,
                          "end": 917
                        }
                      ],
                      "start": 901,
                      "end": 919
                    },
                    "start": 899,
                    "end": 919
                  },
                  "start": 898,
                  "end": 919
                },
                "init": null,
                "definite": false,
                "start": 898,
                "end": 919
              }
            ],
            "declare": false,
            "start": 894,
            "end": 919
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
                            "start": 933,
                            "end": 936
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 945,
                                "end": 946
                              },
                              "typeArguments": null,
                              "start": 938,
                              "end": 946
                            },
                            "start": 936,
                            "end": 946
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 933,
                          "end": 947
                        }
                      ],
                      "start": 931,
                      "end": 949
                    },
                    "start": 929,
                    "end": 949
                  },
                  "start": 928,
                  "end": 949
                },
                "init": null,
                "definite": false,
                "start": 928,
                "end": 949
              }
            ],
            "declare": false,
            "start": 924,
            "end": 949
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
                  "start": 959,
                  "end": 961
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 966,
                        "end": 969
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 973
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 966,
                      "end": 973
                    }
                  ],
                  "start": 964,
                  "end": 975
                },
                "definite": false,
                "start": 959,
                "end": 975
              }
            ],
            "declare": false,
            "start": 955,
            "end": 976
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
                  "start": 985,
                  "end": 987
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 992,
                        "end": 995
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 999
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 992,
                      "end": 999
                    }
                  ],
                  "start": 990,
                  "end": 1001
                },
                "definite": false,
                "start": 985,
                "end": 1001
              }
            ],
            "declare": false,
            "start": 981,
            "end": 1002
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1008,
                "end": 1009
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1013
              },
              "start": 1008,
              "end": 1013
            },
            "directive": null,
            "start": 1008,
            "end": 1014
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1019,
                "end": 1020
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1024
              },
              "start": 1019,
              "end": 1024
            },
            "directive": null,
            "start": 1019,
            "end": 1025
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1030,
                "end": 1031
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1036
              },
              "start": 1030,
              "end": 1036
            },
            "directive": null,
            "start": 1030,
            "end": 1037
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1042,
                "end": 1043
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1048
              },
              "start": 1042,
              "end": 1048
            },
            "directive": null,
            "start": 1042,
            "end": 1049
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1057
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1062
              },
              "start": 1055,
              "end": 1062
            },
            "directive": null,
            "start": 1055,
            "end": 1063
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1068,
                "end": 1070
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1075
              },
              "start": 1068,
              "end": 1075
            },
            "directive": null,
            "start": 1068,
            "end": 1076
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1083
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1087
              },
              "start": 1081,
              "end": 1087
            },
            "directive": null,
            "start": 1081,
            "end": 1088
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1095
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1099
              },
              "start": 1093,
              "end": 1099
            },
            "directive": null,
            "start": 1093,
            "end": 1100
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1107
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1112
              },
              "start": 1105,
              "end": 1112
            },
            "directive": null,
            "start": 1105,
            "end": 1113
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1119,
                "end": 1120
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1124
              },
              "start": 1119,
              "end": 1124
            },
            "directive": null,
            "start": 1119,
            "end": 1125
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1130,
                "end": 1131
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1135
              },
              "start": 1130,
              "end": 1135
            },
            "directive": null,
            "start": 1130,
            "end": 1136
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1142
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1145,
                "end": 1146
              },
              "start": 1141,
              "end": 1146
            },
            "directive": null,
            "start": 1141,
            "end": 1147
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1152,
                "end": 1153
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1156,
                "end": 1158
              },
              "start": 1152,
              "end": 1158
            },
            "directive": null,
            "start": 1152,
            "end": 1159
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1165
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1170
              },
              "start": 1164,
              "end": 1170
            },
            "directive": null,
            "start": 1164,
            "end": 1171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1177,
                "end": 1179
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1182,
                "end": 1184
              },
              "start": 1177,
              "end": 1184
            },
            "directive": null,
            "start": 1177,
            "end": 1185
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1190,
                "end": 1192
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1195,
                "end": 1197
              },
              "start": 1190,
              "end": 1197
            },
            "directive": null,
            "start": 1190,
            "end": 1198
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1203,
                "end": 1205
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1209
              },
              "start": 1203,
              "end": 1209
            },
            "directive": null,
            "start": 1203,
            "end": 1210
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1217
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1220,
                "end": 1222
              },
              "start": 1215,
              "end": 1222
            },
            "directive": null,
            "start": 1215,
            "end": 1223
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1228,
                "end": 1230
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1233,
                "end": 1234
              },
              "start": 1228,
              "end": 1234
            },
            "directive": null,
            "start": 1228,
            "end": 1235
          }
        ],
        "start": 718,
        "end": 1238
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 696,
      "end": 1238
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 139,
  "end": 1238
}
```
