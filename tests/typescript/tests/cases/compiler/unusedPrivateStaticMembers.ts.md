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
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
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
                "start": 38,
                "end": 40
              },
              "expression": false,
              "start": 35,
              "end": 40
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 18,
            "end": 40
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 63
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Test1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 81
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 82,
                          "end": 84
                        },
                        "optional": false,
                        "computed": false,
                        "start": 76,
                        "end": 84
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 76,
                      "end": 86
                    },
                    "directive": null,
                    "start": 76,
                    "end": 87
                  }
                ],
                "start": 66,
                "end": 93
              },
              "expression": false,
              "start": 63,
              "end": 93
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 45,
            "end": 93
          }
        ],
        "start": 12,
        "end": 95
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 108
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 132
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 135,
              "end": 136
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 115,
            "end": 136
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 159
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
                        "name": "Test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 177
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 180
                      },
                      "optional": false,
                      "computed": false,
                      "start": 172,
                      "end": 180
                    },
                    "directive": null,
                    "start": 172,
                    "end": 181
                  }
                ],
                "start": 162,
                "end": 187
              },
              "expression": false,
              "start": 159,
              "end": 187
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 141,
            "end": 187
          }
        ],
        "start": 109,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 97,
      "end": 189
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 202
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 226
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 229,
              "end": 230
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 209,
            "end": 231
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 253
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
                "start": 256,
                "end": 258
              },
              "expression": false,
              "start": 253,
              "end": 258
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 236,
            "end": 258
          }
        ],
        "start": 203,
        "end": 260
      },
      "abstract": false,
      "declare": false,
      "start": 191,
      "end": 260
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 273
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 297
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 301,
                      "end": 307
                    },
                    "start": 299,
                    "end": 307
                  },
                  "start": 298,
                  "end": 307
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 310,
                  "end": 316
                },
                "start": 308,
                "end": 316
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 336
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 341,
                          "end": 342
                        },
                        "start": 335,
                        "end": 342
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 346,
                        "end": 347
                      },
                      "alternate": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 351,
                          "end": 352
                        },
                        "operator": "*",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Test4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 355,
                              "end": 360
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 361,
                              "end": 363
                            },
                            "optional": false,
                            "computed": false,
                            "start": 355,
                            "end": 363
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 364,
                                "end": 365
                              },
                              "operator": "-",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 368,
                                "end": 369
                              },
                              "start": 364,
                              "end": 369
                            }
                          ],
                          "optional": false,
                          "start": 355,
                          "end": 370
                        },
                        "start": 351,
                        "end": 370
                      },
                      "start": 334,
                      "end": 371
                    },
                    "start": 327,
                    "end": 372
                  }
                ],
                "start": 317,
                "end": 378
              },
              "expression": false,
              "start": 297,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 280,
            "end": 378
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 401
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 405,
                      "end": 411
                    },
                    "start": 403,
                    "end": 411
                  },
                  "start": 402,
                  "end": 411
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 414,
                  "end": 420
                },
                "start": 412,
                "end": 420
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 440
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 445,
                          "end": 446
                        },
                        "start": 439,
                        "end": 446
                      },
                      "consequent": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 450,
                        "end": 451
                      },
                      "alternate": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 455,
                          "end": 456
                        },
                        "operator": "*",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Test4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 464
                            },
                            "property": {
                              "type": "Literal",
                              "value": "m2",
                              "raw": "\"m2\"",
                              "start": 465,
                              "end": 469
                            },
                            "optional": false,
                            "computed": true,
                            "start": 459,
                            "end": 470
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 472
                              },
                              "operator": "-",
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 475,
                                "end": 476
                              },
                              "start": 471,
                              "end": 476
                            }
                          ],
                          "optional": false,
                          "start": 459,
                          "end": 477
                        },
                        "start": 455,
                        "end": 477
                      },
                      "start": 438,
                      "end": 478
                    },
                    "start": 431,
                    "end": 479
                  }
                ],
                "start": 421,
                "end": 485
              },
              "expression": false,
              "start": 401,
              "end": 485
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 384,
            "end": 485
          }
        ],
        "start": 274,
        "end": 487
      },
      "abstract": false,
      "declare": false,
      "start": 262,
      "end": 487
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 500
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 524
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
                "start": 527,
                "end": 529
              },
              "expression": false,
              "start": 524,
              "end": 529
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 507,
            "end": 529
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 552
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Test5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 565,
                          "end": 570
                        },
                        "property": {
                          "type": "Literal",
                          "value": "m1",
                          "raw": "\"m1\"",
                          "start": 571,
                          "end": 575
                        },
                        "optional": false,
                        "computed": true,
                        "start": 565,
                        "end": 576
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 565,
                      "end": 578
                    },
                    "directive": null,
                    "start": 565,
                    "end": 579
                  }
                ],
                "start": 555,
                "end": 585
              },
              "expression": false,
              "start": 552,
              "end": 585
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 534,
            "end": 585
          }
        ],
        "start": 501,
        "end": 587
      },
      "abstract": false,
      "declare": false,
      "start": 489,
      "end": 587
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 600
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 624
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 627,
              "end": 628
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 607,
            "end": 629
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 652
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
                        "name": "Test6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 670
                      },
                      "property": {
                        "type": "Literal",
                        "value": "p1",
                        "raw": "\"p1\"",
                        "start": 671,
                        "end": 675
                      },
                      "optional": false,
                      "computed": true,
                      "start": 665,
                      "end": 676
                    },
                    "directive": null,
                    "start": 665,
                    "end": 677
                  }
                ],
                "start": 655,
                "end": 683
              },
              "expression": false,
              "start": 652,
              "end": 683
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 634,
            "end": 683
          }
        ],
        "start": 601,
        "end": 685
      },
      "abstract": false,
      "declare": false,
      "start": 589,
      "end": 685
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 685
}
```
