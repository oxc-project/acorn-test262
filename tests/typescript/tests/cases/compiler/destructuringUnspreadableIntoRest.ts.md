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
