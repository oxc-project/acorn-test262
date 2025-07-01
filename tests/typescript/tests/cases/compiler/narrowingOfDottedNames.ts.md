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
        "start": 27,
        "end": 28
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 39
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 44,
                      "end": 45
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 47,
                        "end": 53
                      },
                      "start": 45,
                      "end": 53
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 44,
                    "end": 54
                  }
                ],
                "start": 42,
                "end": 56
              },
              "start": 40,
              "end": 56
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 35,
            "end": 57
          }
        ],
        "start": 29,
        "end": 59
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 59
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
        "start": 67,
        "end": 68
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 79
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 87,
                        "end": 93
                      },
                      "start": 85,
                      "end": 93
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 84,
                    "end": 94
                  }
                ],
                "start": 82,
                "end": 96
              },
              "start": 80,
              "end": 96
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 75,
            "end": 96
          }
        ],
        "start": 69,
        "end": 98
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 112
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
              "type": "TSAnyKeyword",
              "start": 116,
              "end": 119
            },
            "start": 114,
            "end": 119
          },
          "start": 113,
          "end": 119
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "asserts": false,
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
                "start": 127,
                "end": 128
              },
              "typeArguments": null,
              "start": 127,
              "end": 128
            },
            "start": 127,
            "end": 128
          },
          "start": 122,
          "end": 128
        },
        "start": 120,
        "end": 128
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
                "start": 142,
                "end": 143
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "start": 142,
              "end": 156
            },
            "start": 135,
            "end": 157
          }
        ],
        "start": 129,
        "end": 159
      },
      "expression": false,
      "start": 100,
      "end": 159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isB",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 173
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
              "type": "TSAnyKeyword",
              "start": 177,
              "end": 180
            },
            "start": 175,
            "end": 180
          },
          "start": 174,
          "end": 180
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 184
          },
          "asserts": false,
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
                "start": 188,
                "end": 189
              },
              "typeArguments": null,
              "start": 188,
              "end": 189
            },
            "start": 188,
            "end": 189
          },
          "start": 183,
          "end": 189
        },
        "start": 181,
        "end": 189
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
                "start": 203,
                "end": 204
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "start": 203,
              "end": 217
            },
            "start": 196,
            "end": 218
          }
        ],
        "start": 190,
        "end": 220
      },
      "expression": false,
      "start": 161,
      "end": 220
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 233
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "typeArguments": null,
                  "start": 237,
                  "end": 238
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 242
                  },
                  "typeArguments": null,
                  "start": 241,
                  "end": 242
                }
              ],
              "start": 237,
              "end": 242
            },
            "start": 235,
            "end": 242
          },
          "start": 234,
          "end": 242
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 257,
              "end": 261
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 278
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 290,
                      "end": 291
                    },
                    "start": 277,
                    "end": 291
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 307,
                              "end": 308
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 309,
                              "end": 313
                            },
                            "optional": false,
                            "computed": false,
                            "start": 307,
                            "end": 313
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 314,
                            "end": 315
                          },
                          "optional": false,
                          "computed": false,
                          "start": 307,
                          "end": 315
                        },
                        "directive": null,
                        "start": 307,
                        "end": 316
                      }
                    ],
                    "start": 293,
                    "end": 326
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 345
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 358
                      },
                      "start": 344,
                      "end": 358
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 374,
                                "end": 375
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 376,
                                "end": 380
                              },
                              "optional": false,
                              "computed": false,
                              "start": 374,
                              "end": 380
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 381,
                              "end": 382
                            },
                            "optional": false,
                            "computed": false,
                            "start": 374,
                            "end": 382
                          },
                          "directive": null,
                          "start": 374,
                          "end": 383
                        }
                      ],
                      "start": 360,
                      "end": 393
                    },
                    "alternate": null,
                    "start": 340,
                    "end": 393
                  },
                  "start": 273,
                  "end": 393
                }
              ],
              "start": 263,
              "end": 399
            },
            "start": 250,
            "end": 399
          }
        ],
        "start": 244,
        "end": 401
      },
      "expression": false,
      "start": 222,
      "end": 401
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 414
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 418,
                    "end": 419
                  },
                  "typeArguments": null,
                  "start": 418,
                  "end": 419
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 423
                  },
                  "typeArguments": null,
                  "start": 422,
                  "end": 423
                }
              ],
              "start": 418,
              "end": 423
            },
            "start": 416,
            "end": 423
          },
          "start": 415,
          "end": 423
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 438,
              "end": 442
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 461
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 462,
                        "end": 463
                      }
                    ],
                    "optional": false,
                    "start": 458,
                    "end": 464
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 480,
                              "end": 481
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 482,
                              "end": 486
                            },
                            "optional": false,
                            "computed": false,
                            "start": 480,
                            "end": 486
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 487,
                            "end": 488
                          },
                          "optional": false,
                          "computed": false,
                          "start": 480,
                          "end": 488
                        },
                        "directive": null,
                        "start": 480,
                        "end": 489
                      }
                    ],
                    "start": 466,
                    "end": 499
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 517,
                        "end": 520
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 521,
                          "end": 522
                        }
                      ],
                      "optional": false,
                      "start": 517,
                      "end": 523
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 539,
                                "end": 540
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 541,
                                "end": 545
                              },
                              "optional": false,
                              "computed": false,
                              "start": 539,
                              "end": 545
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 546,
                              "end": 547
                            },
                            "optional": false,
                            "computed": false,
                            "start": 539,
                            "end": 547
                          },
                          "directive": null,
                          "start": 539,
                          "end": 548
                        }
                      ],
                      "start": 525,
                      "end": 558
                    },
                    "alternate": null,
                    "start": 513,
                    "end": 558
                  },
                  "start": 454,
                  "end": 558
                }
              ],
              "start": 444,
              "end": 564
            },
            "start": 431,
            "end": 564
          }
        ],
        "start": 425,
        "end": 566
      },
      "expression": false,
      "start": 403,
      "end": 566
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 596,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 607,
            "end": 617
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 643
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 660,
                        "end": 664
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Boolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 683
                      },
                      "start": 660,
                      "end": 683
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 685,
                      "end": 696
                    },
                    "alternate": null,
                    "start": 656,
                    "end": 696
                  }
                ],
                "start": 646,
                "end": 702
              },
              "expression": false,
              "start": 643,
              "end": 702
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 632,
            "end": 702
          }
        ],
        "start": 601,
        "end": 704
      },
      "abstract": false,
      "declare": false,
      "start": 590,
      "end": 704
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 712,
        "end": 716
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
              "start": 723,
              "end": 724
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 726,
                "end": 732
              },
              "start": 724,
              "end": 732
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
            "start": 723,
            "end": 733
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 759
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
                "start": 762,
                "end": 769
              },
              "expression": false,
              "start": 759,
              "end": 769
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 748,
            "end": 769
          }
        ],
        "start": 717,
        "end": 771
      },
      "abstract": false,
      "declare": false,
      "start": 706,
      "end": 771
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AInfo",
        "optional": false,
        "typeAnnotation": null,
        "start": 802,
        "end": 807
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
              "name": "a_count",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 821
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 823,
                "end": 829
              },
              "start": 821,
              "end": 829
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 832,
              "end": 833
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 814,
            "end": 834
          }
        ],
        "start": 808,
        "end": 836
      },
      "abstract": false,
      "declare": false,
      "start": 796,
      "end": 836
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BInfo",
        "optional": false,
        "typeAnnotation": null,
        "start": 844,
        "end": 849
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
              "name": "b_count",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 863
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 865,
                "end": 871
              },
              "start": 863,
              "end": 871
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 874,
              "end": 875
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 856,
            "end": 876
          }
        ],
        "start": 850,
        "end": 878
      },
      "abstract": false,
      "declare": false,
      "start": 838,
      "end": 878
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 886,
        "end": 890
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
              "start": 897,
              "end": 899
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 901,
                "end": 907
              },
              "start": 899,
              "end": 907
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 910,
              "end": 911
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 897,
            "end": 912
          }
        ],
        "start": 891,
        "end": 914
      },
      "abstract": false,
      "declare": false,
      "start": 880,
      "end": 914
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
        "start": 922,
        "end": 924
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 933,
        "end": 937
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
              "name": "info",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 948
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 956
                },
                "typeArguments": null,
                "start": 951,
                "end": 956
              },
              "start": 949,
              "end": 956
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 944,
            "end": 957
          }
        ],
        "start": 938,
        "end": 959
      },
      "abstract": false,
      "declare": false,
      "start": 916,
      "end": 959
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 967,
        "end": 969
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 978,
        "end": 982
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
              "name": "info",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 993
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1001
                },
                "typeArguments": null,
                "start": 996,
                "end": 1001
              },
              "start": 994,
              "end": 1001
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 989,
            "end": 1002
          }
        ],
        "start": 983,
        "end": 1004
      },
      "abstract": false,
      "declare": false,
      "start": 961,
      "end": 1004
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1022
                },
                "typeArguments": null,
                "start": 1018,
                "end": 1022
              },
              "start": 1016,
              "end": 1022
            },
            "start": 1010,
            "end": 1022
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1025,
              "end": 1029
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1033,
              "end": 1036
            },
            "start": 1025,
            "end": 1036
          },
          "definite": false,
          "start": 1010,
          "end": 1036
        }
      ],
      "declare": false,
      "start": 1006,
      "end": 1037
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1052
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null,
                "start": 1064,
                "end": 1070
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1082,
                "end": 1084
              },
              "start": 1064,
              "end": 1084
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1096,
                          "end": 1102
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "info",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1103,
                          "end": 1107
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1096,
                        "end": 1107
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a_count",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1108,
                        "end": 1115
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1096,
                      "end": 1115
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1118,
                      "end": 1119
                    },
                    "start": 1096,
                    "end": 1119
                  },
                  "directive": null,
                  "start": 1096,
                  "end": 1120
                }
              ],
              "start": 1086,
              "end": 1126
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1140,
                  "end": 1146
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1160
                },
                "start": 1140,
                "end": 1160
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "BInfo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1181,
                                "end": 1186
                              },
                              "typeArguments": null,
                              "start": 1181,
                              "end": 1186
                            },
                            "start": 1179,
                            "end": 1186
                          },
                          "start": 1178,
                          "end": 1186
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1189,
                            "end": 1195
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "info",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1196,
                            "end": 1200
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1189,
                          "end": 1200
                        },
                        "definite": false,
                        "start": 1178,
                        "end": 1200
                      }
                    ],
                    "declare": false,
                    "start": 1172,
                    "end": 1201
                  }
                ],
                "start": 1162,
                "end": 1207
              },
              "alternate": null,
              "start": 1136,
              "end": 1207
            },
            "start": 1060,
            "end": 1207
          }
        ],
        "start": 1054,
        "end": 1209
      },
      "start": 1039,
      "end": 1209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1209
}
```
