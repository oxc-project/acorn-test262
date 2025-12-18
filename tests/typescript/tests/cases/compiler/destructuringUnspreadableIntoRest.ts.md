__ESTREE_TEST__:AST:
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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 25
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
                    "name": "publicProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "start": 42,
                    "end": 60
                  },
                  "readonly": false,
                  "static": false,
                  "start": 35,
                  "end": 60
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      },
                      "start": 89,
                      "end": 97
                    },
                    "start": 78,
                    "end": 97
                  },
                  "readonly": false,
                  "static": false,
                  "start": 70,
                  "end": 97
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "protected",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "protectedProp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 132,
                        "end": 138
                      },
                      "start": 130,
                      "end": 138
                    },
                    "start": 117,
                    "end": 138
                  },
                  "readonly": false,
                  "static": false,
                  "start": 107,
                  "end": 138
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 146,
                "end": 148
              },
              "expression": false,
              "start": 25,
              "end": 148
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 148
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getter",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 164
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
                      "value": 1,
                      "raw": "1",
                      "start": 192,
                      "end": 193
                    },
                    "start": 185,
                    "end": 194
                  }
                ],
                "start": 175,
                "end": 200
              },
              "expression": false,
              "start": 164,
              "end": 200
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 154,
            "end": 200
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setter",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 216
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
                  "name": "_v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 221,
                      "end": 227
                    },
                    "start": 219,
                    "end": 227
                  },
                  "start": 217,
                  "end": 227
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 229,
                "end": 231
              },
              "expression": false,
              "start": 216,
              "end": 231
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 206,
            "end": 231
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 243
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 283,
                                "end": 288
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 280,
                              "end": 288
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 262,
                          "end": 290
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 293,
                          "end": 297
                        },
                        "definite": false,
                        "start": 262,
                        "end": 297
                      }
                    ],
                    "declare": false,
                    "start": 256,
                    "end": 298
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 334,
                                "end": 339
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 331,
                              "end": 339
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 313,
                          "end": 341
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "ThisExpression",
                            "start": 344,
                            "end": 348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 352,
                              "end": 353
                            },
                            "typeArguments": null,
                            "start": 352,
                            "end": 353
                          },
                          "start": 344,
                          "end": 353
                        },
                        "definite": false,
                        "start": 313,
                        "end": 353
                      }
                    ],
                    "declare": false,
                    "start": 307,
                    "end": 354
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 371,
                                "end": 381
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 383,
                                "end": 385
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 371,
                              "end": 385
                            },
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 390,
                                "end": 395
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 387,
                              "end": 395
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 397
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 400,
                          "end": 404
                        },
                        "definite": false,
                        "start": 369,
                        "end": 404
                      }
                    ],
                    "declare": false,
                    "start": 363,
                    "end": 405
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 422,
                                "end": 432
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 434,
                                "end": 436
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 422,
                              "end": 436
                            },
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 441,
                                "end": 446
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 438,
                              "end": 446
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 448
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "ThisExpression",
                            "start": 451,
                            "end": 455
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 459,
                              "end": 460
                            },
                            "typeArguments": null,
                            "start": 459,
                            "end": 460
                          },
                          "start": 451,
                          "end": 460
                        },
                        "definite": false,
                        "start": 420,
                        "end": 460
                      }
                    ],
                    "declare": false,
                    "start": 414,
                    "end": 461
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 471,
                        "end": 476
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 477,
                        "end": 487
                      },
                      "optional": false,
                      "computed": false,
                      "start": 471,
                      "end": 487
                    },
                    "directive": null,
                    "start": 471,
                    "end": 488
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 502
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 513
                      },
                      "optional": false,
                      "computed": false,
                      "start": 497,
                      "end": 513
                    },
                    "directive": null,
                    "start": 497,
                    "end": 514
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 523,
                        "end": 528
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 529,
                        "end": 539
                      },
                      "optional": false,
                      "computed": false,
                      "start": 523,
                      "end": 539
                    },
                    "directive": null,
                    "start": 523,
                    "end": 540
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 549,
                        "end": 554
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 565
                      },
                      "optional": false,
                      "computed": false,
                      "start": 549,
                      "end": 565
                    },
                    "directive": null,
                    "start": 549,
                    "end": 566
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 581
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 593
                      },
                      "optional": false,
                      "computed": false,
                      "start": 576,
                      "end": 593
                    },
                    "directive": null,
                    "start": 576,
                    "end": 594
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 603,
                        "end": 608
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 609,
                        "end": 620
                      },
                      "optional": false,
                      "computed": false,
                      "start": 603,
                      "end": 620
                    },
                    "directive": null,
                    "start": 603,
                    "end": 621
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 630,
                        "end": 635
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 636,
                        "end": 647
                      },
                      "optional": false,
                      "computed": false,
                      "start": 630,
                      "end": 647
                    },
                    "directive": null,
                    "start": 630,
                    "end": 648
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 657,
                        "end": 662
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 663,
                        "end": 674
                      },
                      "optional": false,
                      "computed": false,
                      "start": 657,
                      "end": 674
                    },
                    "directive": null,
                    "start": 657,
                    "end": 675
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 685,
                        "end": 690
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 704
                      },
                      "optional": false,
                      "computed": false,
                      "start": 685,
                      "end": 704
                    },
                    "directive": null,
                    "start": 685,
                    "end": 705
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 719
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 733
                      },
                      "optional": false,
                      "computed": false,
                      "start": 714,
                      "end": 733
                    },
                    "directive": null,
                    "start": 714,
                    "end": 734
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 743,
                        "end": 748
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 762
                      },
                      "optional": false,
                      "computed": false,
                      "start": 743,
                      "end": 762
                    },
                    "directive": null,
                    "start": 743,
                    "end": 763
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 772,
                        "end": 777
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protectedProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 791
                      },
                      "optional": false,
                      "computed": false,
                      "start": 772,
                      "end": 791
                    },
                    "directive": null,
                    "start": 772,
                    "end": 792
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 807
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 808,
                        "end": 814
                      },
                      "optional": false,
                      "computed": false,
                      "start": 802,
                      "end": 814
                    },
                    "directive": null,
                    "start": 802,
                    "end": 815
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 824,
                        "end": 829
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 830,
                        "end": 836
                      },
                      "optional": false,
                      "computed": false,
                      "start": 824,
                      "end": 836
                    },
                    "directive": null,
                    "start": 824,
                    "end": 837
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 851
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 852,
                        "end": 858
                      },
                      "optional": false,
                      "computed": false,
                      "start": 846,
                      "end": 858
                    },
                    "directive": null,
                    "start": 846,
                    "end": 859
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 873
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 874,
                        "end": 880
                      },
                      "optional": false,
                      "computed": false,
                      "start": 868,
                      "end": 880
                    },
                    "directive": null,
                    "start": 868,
                    "end": 881
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 891,
                        "end": 896
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 897,
                        "end": 903
                      },
                      "optional": false,
                      "computed": false,
                      "start": 891,
                      "end": 903
                    },
                    "directive": null,
                    "start": 891,
                    "end": 904
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 913,
                        "end": 918
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 919,
                        "end": 925
                      },
                      "optional": false,
                      "computed": false,
                      "start": 913,
                      "end": 925
                    },
                    "directive": null,
                    "start": 913,
                    "end": 926
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 940
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 941,
                        "end": 947
                      },
                      "optional": false,
                      "computed": false,
                      "start": 935,
                      "end": 947
                    },
                    "directive": null,
                    "start": 935,
                    "end": 948
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 957,
                        "end": 962
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 963,
                        "end": 969
                      },
                      "optional": false,
                      "computed": false,
                      "start": 957,
                      "end": 969
                    },
                    "directive": null,
                    "start": 957,
                    "end": 970
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 980,
                        "end": 985
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 986,
                        "end": 992
                      },
                      "optional": false,
                      "computed": false,
                      "start": 980,
                      "end": 992
                    },
                    "directive": null,
                    "start": 980,
                    "end": 993
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1002,
                        "end": 1007
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1008,
                        "end": 1014
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1002,
                      "end": 1014
                    },
                    "directive": null,
                    "start": 1002,
                    "end": 1015
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1024,
                        "end": 1029
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1036
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1024,
                      "end": 1036
                    },
                    "directive": null,
                    "start": 1024,
                    "end": 1037
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1046,
                        "end": 1051
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1052,
                        "end": 1058
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1046,
                      "end": 1058
                    },
                    "directive": null,
                    "start": 1046,
                    "end": 1059
                  }
                ],
                "start": 246,
                "end": 1065
              },
              "expression": false,
              "start": 243,
              "end": 1065
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 237,
            "end": 1065
          }
        ],
        "start": 8,
        "end": 1067
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 1067
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "destructure",
        "optional": false,
        "typeAnnotation": null,
        "start": 1078,
        "end": 1089
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
              "start": 1090,
              "end": 1091
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1101
              },
              "typeArguments": null,
              "start": 1100,
              "end": 1101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1090,
            "end": 1101
          }
        ],
        "start": 1089,
        "end": 1102
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
                "start": 1106,
                "end": 1107
              },
              "typeArguments": null,
              "start": 1106,
              "end": 1107
            },
            "start": 1104,
            "end": 1107
          },
          "start": 1103,
          "end": 1107
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1142,
                        "end": 1147
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1139,
                      "end": 1147
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1121,
                  "end": 1149
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1152,
                  "end": 1153
                },
                "definite": false,
                "start": 1121,
                "end": 1153
              }
            ],
            "declare": false,
            "start": 1115,
            "end": 1154
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1186,
                        "end": 1191
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1183,
                      "end": 1191
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1165,
                  "end": 1193
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1197
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1201,
                      "end": 1202
                    },
                    "typeArguments": null,
                    "start": 1201,
                    "end": 1202
                  },
                  "start": 1196,
                  "end": 1202
                },
                "definite": false,
                "start": 1165,
                "end": 1202
              }
            ],
            "declare": false,
            "start": 1159,
            "end": 1203
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1216,
                        "end": 1226
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1228,
                        "end": 1230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1216,
                      "end": 1230
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1235,
                        "end": 1240
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1232,
                      "end": 1240
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1214,
                  "end": 1242
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1246
                },
                "definite": false,
                "start": 1214,
                "end": 1246
              }
            ],
            "declare": false,
            "start": 1208,
            "end": 1247
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1260,
                        "end": 1270
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1272,
                        "end": 1274
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1260,
                      "end": 1274
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1279,
                        "end": 1284
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1276,
                      "end": 1284
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1258,
                  "end": 1286
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1290
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1294,
                      "end": 1295
                    },
                    "typeArguments": null,
                    "start": 1294,
                    "end": 1295
                  },
                  "start": 1289,
                  "end": 1295
                },
                "definite": false,
                "start": 1258,
                "end": 1295
              }
            ],
            "declare": false,
            "start": 1252,
            "end": 1296
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1302,
                "end": 1307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1308,
                "end": 1318
              },
              "optional": false,
              "computed": false,
              "start": 1302,
              "end": 1318
            },
            "directive": null,
            "start": 1302,
            "end": 1319
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1324,
                "end": 1329
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1330,
                "end": 1340
              },
              "optional": false,
              "computed": false,
              "start": 1324,
              "end": 1340
            },
            "directive": null,
            "start": 1324,
            "end": 1341
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1351
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1352,
                "end": 1362
              },
              "optional": false,
              "computed": false,
              "start": 1346,
              "end": 1362
            },
            "directive": null,
            "start": 1346,
            "end": 1363
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1368,
                "end": 1373
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1374,
                "end": 1384
              },
              "optional": false,
              "computed": false,
              "start": 1368,
              "end": 1384
            },
            "directive": null,
            "start": 1368,
            "end": 1385
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1396
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1397,
                "end": 1408
              },
              "optional": false,
              "computed": false,
              "start": 1391,
              "end": 1408
            },
            "directive": null,
            "start": 1391,
            "end": 1409
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1414,
                "end": 1419
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1420,
                "end": 1431
              },
              "optional": false,
              "computed": false,
              "start": 1414,
              "end": 1431
            },
            "directive": null,
            "start": 1414,
            "end": 1432
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1437,
                "end": 1442
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1443,
                "end": 1454
              },
              "optional": false,
              "computed": false,
              "start": 1437,
              "end": 1454
            },
            "directive": null,
            "start": 1437,
            "end": 1455
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1460,
                "end": 1465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1466,
                "end": 1477
              },
              "optional": false,
              "computed": false,
              "start": 1460,
              "end": 1477
            },
            "directive": null,
            "start": 1460,
            "end": 1478
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1484,
                "end": 1489
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1490,
                "end": 1503
              },
              "optional": false,
              "computed": false,
              "start": 1484,
              "end": 1503
            },
            "directive": null,
            "start": 1484,
            "end": 1504
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1509,
                "end": 1514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1515,
                "end": 1528
              },
              "optional": false,
              "computed": false,
              "start": 1509,
              "end": 1528
            },
            "directive": null,
            "start": 1509,
            "end": 1529
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1539
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1540,
                "end": 1553
              },
              "optional": false,
              "computed": false,
              "start": 1534,
              "end": 1553
            },
            "directive": null,
            "start": 1534,
            "end": 1554
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1559,
                "end": 1564
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "protectedProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1565,
                "end": 1578
              },
              "optional": false,
              "computed": false,
              "start": 1559,
              "end": 1578
            },
            "directive": null,
            "start": 1559,
            "end": 1579
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1585,
                "end": 1590
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1591,
                "end": 1597
              },
              "optional": false,
              "computed": false,
              "start": 1585,
              "end": 1597
            },
            "directive": null,
            "start": 1585,
            "end": 1598
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1603,
                "end": 1608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1609,
                "end": 1615
              },
              "optional": false,
              "computed": false,
              "start": 1603,
              "end": 1615
            },
            "directive": null,
            "start": 1603,
            "end": 1616
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1626
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1627,
                "end": 1633
              },
              "optional": false,
              "computed": false,
              "start": 1621,
              "end": 1633
            },
            "directive": null,
            "start": 1621,
            "end": 1634
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1644
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1645,
                "end": 1651
              },
              "optional": false,
              "computed": false,
              "start": 1639,
              "end": 1651
            },
            "directive": null,
            "start": 1639,
            "end": 1652
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1658,
                "end": 1663
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1664,
                "end": 1670
              },
              "optional": false,
              "computed": false,
              "start": 1658,
              "end": 1670
            },
            "directive": null,
            "start": 1658,
            "end": 1671
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1676,
                "end": 1681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1682,
                "end": 1688
              },
              "optional": false,
              "computed": false,
              "start": 1676,
              "end": 1688
            },
            "directive": null,
            "start": 1676,
            "end": 1689
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1699
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1700,
                "end": 1706
              },
              "optional": false,
              "computed": false,
              "start": 1694,
              "end": 1706
            },
            "directive": null,
            "start": 1694,
            "end": 1707
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1712,
                "end": 1717
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "setter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1718,
                "end": 1724
              },
              "optional": false,
              "computed": false,
              "start": 1712,
              "end": 1724
            },
            "directive": null,
            "start": 1712,
            "end": 1725
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1731,
                "end": 1736
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1743
              },
              "optional": false,
              "computed": false,
              "start": 1731,
              "end": 1743
            },
            "directive": null,
            "start": 1731,
            "end": 1744
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1749,
                "end": 1754
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1755,
                "end": 1761
              },
              "optional": false,
              "computed": false,
              "start": 1749,
              "end": 1761
            },
            "directive": null,
            "start": 1749,
            "end": 1762
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1767,
                "end": 1772
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1773,
                "end": 1779
              },
              "optional": false,
              "computed": false,
              "start": 1767,
              "end": 1779
            },
            "directive": null,
            "start": 1767,
            "end": 1780
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1785,
                "end": 1790
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1791,
                "end": 1797
              },
              "optional": false,
              "computed": false,
              "start": 1785,
              "end": 1797
            },
            "directive": null,
            "start": 1785,
            "end": 1798
          }
        ],
        "start": 1109,
        "end": 1800
      },
      "expression": false,
      "start": 1069,
      "end": 1800
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1800
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 14,
    "end": 25,
    "range": [
      14,
      25
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
    "type": "Keyword",
    "value": "public",
    "start": 35,
    "end": 41,
    "range": [
      35,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 42,
    "end": 52,
    "range": [
      42,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 70,
    "end": 77,
    "range": [
      70,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 78,
    "end": 89,
    "range": [
      78,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 107,
    "end": 116,
    "range": [
      107,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 117,
    "end": 130,
    "range": [
      117,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 154,
    "end": 157,
    "range": [
      154,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 158,
    "end": 164,
    "range": [
      158,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 185,
    "end": 191,
    "range": [
      185,
      191
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 210,
    "end": 216,
    "range": [
      210,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "_v",
    "start": 217,
    "end": 219,
    "range": [
      217,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 221,
    "end": 227,
    "range": [
      221,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 237,
    "end": 243,
    "range": [
      237,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261,
    "range": [
      256,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 280,
    "end": 283,
    "range": [
      280,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 283,
    "end": 288,
    "range": [
      283,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 293,
    "end": 297,
    "range": [
      293,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 307,
    "end": 312,
    "range": [
      307,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 331,
    "end": 334,
    "range": [
      331,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 334,
    "end": 339,
    "range": [
      334,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 344,
    "end": 348,
    "range": [
      344,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 349,
    "end": 351,
    "range": [
      349,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 363,
    "end": 368,
    "range": [
      363,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 371,
    "end": 381,
    "range": [
      371,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "_1",
    "start": 383,
    "end": 385,
    "range": [
      383,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 387,
    "end": 390,
    "range": [
      387,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 390,
    "end": 395,
    "range": [
      390,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 400,
    "end": 404,
    "range": [
      400,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 414,
    "end": 419,
    "range": [
      414,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 422,
    "end": 432,
    "range": [
      422,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "_2",
    "start": 434,
    "end": 436,
    "range": [
      434,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 438,
    "end": 441,
    "range": [
      438,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 441,
    "end": 446,
    "range": [
      441,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 451,
    "end": 455,
    "range": [
      451,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 456,
    "end": 458,
    "range": [
      456,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 471,
    "end": 476,
    "range": [
      471,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 477,
    "end": 487,
    "range": [
      477,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 497,
    "end": 502,
    "range": [
      497,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 503,
    "end": 513,
    "range": [
      503,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 523,
    "end": 528,
    "range": [
      523,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 529,
    "end": 539,
    "range": [
      529,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 549,
    "end": 554,
    "range": [
      549,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 555,
    "end": 565,
    "range": [
      555,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 576,
    "end": 581,
    "range": [
      576,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 582,
    "end": 593,
    "range": [
      582,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 603,
    "end": 608,
    "range": [
      603,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 609,
    "end": 620,
    "range": [
      609,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 630,
    "end": 635,
    "range": [
      630,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 636,
    "end": 647,
    "range": [
      636,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 657,
    "end": 662,
    "range": [
      657,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 663,
    "end": 674,
    "range": [
      663,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 685,
    "end": 690,
    "range": [
      685,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 691,
    "end": 704,
    "range": [
      691,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 714,
    "end": 719,
    "range": [
      714,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 720,
    "end": 733,
    "range": [
      720,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 743,
    "end": 748,
    "range": [
      743,
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
    "value": "protectedProp",
    "start": 749,
    "end": 762,
    "range": [
      749,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 772,
    "end": 777,
    "range": [
      772,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 778,
    "end": 791,
    "range": [
      778,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 802,
    "end": 807,
    "range": [
      802,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 808,
    "end": 814,
    "range": [
      808,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 824,
    "end": 829,
    "range": [
      824,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 830,
    "end": 836,
    "range": [
      830,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 846,
    "end": 851,
    "range": [
      846,
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
    "value": "getter",
    "start": 852,
    "end": 858,
    "range": [
      852,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 868,
    "end": 873,
    "range": [
      868,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 874,
    "end": 880,
    "range": [
      874,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 891,
    "end": 896,
    "range": [
      891,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 897,
    "end": 903,
    "range": [
      897,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 913,
    "end": 918,
    "range": [
      913,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 919,
    "end": 925,
    "range": [
      919,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 935,
    "end": 940,
    "range": [
      935,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 941,
    "end": 947,
    "range": [
      941,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 957,
    "end": 962,
    "range": [
      957,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 963,
    "end": 969,
    "range": [
      963,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 980,
    "end": 985,
    "range": [
      980,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 986,
    "end": 992,
    "range": [
      986,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1002,
    "end": 1007,
    "range": [
      1002,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1008,
    "end": 1014,
    "range": [
      1008,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1024,
    "end": 1029,
    "range": [
      1024,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1030,
    "end": 1036,
    "range": [
      1030,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1046,
    "end": 1051,
    "range": [
      1046,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1052,
    "end": 1058,
    "range": [
      1052,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1069,
    "end": 1077,
    "range": [
      1069,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "destructure",
    "start": 1078,
    "end": 1089,
    "range": [
      1078,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1092,
    "end": 1099,
    "range": [
      1092,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1115,
    "end": 1120,
    "range": [
      1115,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1139,
    "end": 1142,
    "range": [
      1139,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1142,
    "end": 1147,
    "range": [
      1142,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "const",
    "start": 1159,
    "end": 1164,
    "range": [
      1159,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1183,
    "end": 1186,
    "range": [
      1183,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1186,
    "end": 1191,
    "range": [
      1186,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1198,
    "end": 1200,
    "range": [
      1198,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1208,
    "end": 1213,
    "range": [
      1208,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1216,
    "end": 1226,
    "range": [
      1216,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "_1",
    "start": 1228,
    "end": 1230,
    "range": [
      1228,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1232,
    "end": 1235,
    "range": [
      1232,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1235,
    "end": 1240,
    "range": [
      1235,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1252,
    "end": 1257,
    "range": [
      1252,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1260,
    "end": 1270,
    "range": [
      1260,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "_2",
    "start": 1272,
    "end": 1274,
    "range": [
      1272,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1276,
    "end": 1279,
    "range": [
      1276,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1279,
    "end": 1284,
    "range": [
      1279,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1291,
    "end": 1293,
    "range": [
      1291,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1302,
    "end": 1307,
    "range": [
      1302,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1308,
    "end": 1318,
    "range": [
      1308,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1324,
    "end": 1329,
    "range": [
      1324,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1330,
    "end": 1340,
    "range": [
      1330,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1346,
    "end": 1351,
    "range": [
      1346,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1352,
    "end": 1362,
    "range": [
      1352,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1368,
    "end": 1373,
    "range": [
      1368,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "publicProp",
    "start": 1374,
    "end": 1384,
    "range": [
      1374,
      1384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1391,
    "end": 1396,
    "range": [
      1391,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 1397,
    "end": 1408,
    "range": [
      1397,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1414,
    "end": 1419,
    "range": [
      1414,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 1420,
    "end": 1431,
    "range": [
      1420,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1437,
    "end": 1442,
    "range": [
      1437,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 1443,
    "end": 1454,
    "range": [
      1443,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1460,
    "end": 1465,
    "range": [
      1460,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "privateProp",
    "start": 1466,
    "end": 1477,
    "range": [
      1466,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1484,
    "end": 1489,
    "range": [
      1484,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 1490,
    "end": 1503,
    "range": [
      1490,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1509,
    "end": 1514,
    "range": [
      1509,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 1515,
    "end": 1528,
    "range": [
      1515,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1534,
    "end": 1539,
    "range": [
      1534,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 1540,
    "end": 1553,
    "range": [
      1540,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1559,
    "end": 1564,
    "range": [
      1559,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Identifier",
    "value": "protectedProp",
    "start": 1565,
    "end": 1578,
    "range": [
      1565,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1585,
    "end": 1590,
    "range": [
      1585,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 1591,
    "end": 1597,
    "range": [
      1591,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1603,
    "end": 1608,
    "range": [
      1603,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 1609,
    "end": 1615,
    "range": [
      1609,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1621,
    "end": 1626,
    "range": [
      1621,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 1627,
    "end": 1633,
    "range": [
      1627,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1639,
    "end": 1644,
    "range": [
      1639,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 1645,
    "end": 1651,
    "range": [
      1645,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "rest1",
    "start": 1658,
    "end": 1663,
    "range": [
      1658,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 1664,
    "end": 1670,
    "range": [
      1664,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1676,
    "end": 1681,
    "range": [
      1676,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 1682,
    "end": 1688,
    "range": [
      1682,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1694,
    "end": 1699,
    "range": [
      1694,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 1700,
    "end": 1706,
    "range": [
      1700,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1712,
    "end": 1717,
    "range": [
      1712,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "setter",
    "start": 1718,
    "end": 1724,
    "range": [
      1718,
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
    "type": "Identifier",
    "value": "rest1",
    "start": 1731,
    "end": 1736,
    "range": [
      1731,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1737,
    "end": 1743,
    "range": [
      1737,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 1749,
    "end": 1754,
    "range": [
      1749,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1755,
    "end": 1761,
    "range": [
      1755,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "rest3",
    "start": 1767,
    "end": 1772,
    "range": [
      1767,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1773,
    "end": 1779,
    "range": [
      1773,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "rest4",
    "start": 1785,
    "end": 1790,
    "range": [
      1785,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1791,
    "end": 1797,
    "range": [
      1791,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  }
]
```
