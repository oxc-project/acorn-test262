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
        "name": "C",
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
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 26
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              "typeArguments": null,
              "arguments": [],
              "start": 35,
              "end": 42
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 31,
            "end": 43
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 51
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 71,
                      "end": 75
                    },
                    "start": 64,
                    "end": 76
                  }
                ],
                "start": 54,
                "end": 82
              },
              "expression": false,
              "start": 51,
              "end": 82
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 82
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 89
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 107,
                          "end": 108
                        },
                        "optional": false,
                        "computed": false,
                        "start": 102,
                        "end": 108
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 111,
                          "end": 115
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 116,
                          "end": 120
                        },
                        "optional": false,
                        "computed": false,
                        "start": 111,
                        "end": 120
                      },
                      "start": 102,
                      "end": 120
                    },
                    "directive": null,
                    "start": 102,
                    "end": 121
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 139
                        },
                        "optional": false,
                        "computed": false,
                        "start": 130,
                        "end": 139
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 142,
                          "end": 146
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 148
                        },
                        "optional": false,
                        "computed": false,
                        "start": 142,
                        "end": 148
                      },
                      "start": 130,
                      "end": 148
                    },
                    "directive": null,
                    "start": 130,
                    "end": 149
                  }
                ],
                "start": 92,
                "end": 165
              },
              "expression": false,
              "start": 89,
              "end": 165
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 87,
            "end": 165
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 172
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 192,
                                  "end": 193
                                },
                                "typeArguments": null,
                                "start": 192,
                                "end": 193
                              },
                              "start": 192,
                              "end": 195
                            },
                            "start": 190,
                            "end": 195
                          },
                          "start": 189,
                          "end": 195
                        },
                        "init": null,
                        "definite": false,
                        "start": 189,
                        "end": 195
                      }
                    ],
                    "declare": false,
                    "start": 185,
                    "end": 196
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
                          "start": 209,
                          "end": 210
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "start": 214,
                              "end": 218
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 220,
                                "end": 224
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 225,
                                "end": 226
                              },
                              "optional": false,
                              "computed": false,
                              "start": 220,
                              "end": 226
                            }
                          ],
                          "start": 213,
                          "end": 227
                        },
                        "definite": false,
                        "start": 209,
                        "end": 227
                      }
                    ],
                    "declare": false,
                    "start": 205,
                    "end": 228
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
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSThisType",
                                "start": 279,
                                "end": 283
                              },
                              "start": 279,
                              "end": 285
                            },
                            "start": 277,
                            "end": 285
                          },
                          "start": 276,
                          "end": 285
                        },
                        "init": null,
                        "definite": false,
                        "start": 276,
                        "end": 285
                      }
                    ],
                    "declare": false,
                    "start": 272,
                    "end": 286
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
                          "start": 299,
                          "end": 300
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "start": 304,
                              "end": 308
                            },
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 310,
                                "end": 314
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "self",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 315,
                                "end": 319
                              },
                              "optional": false,
                              "computed": false,
                              "start": 310,
                              "end": 319
                            },
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 321,
                              "end": 325
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 327,
                              "end": 336
                            }
                          ],
                          "start": 303,
                          "end": 337
                        },
                        "definite": false,
                        "start": 299,
                        "end": 337
                      }
                    ],
                    "declare": false,
                    "start": 295,
                    "end": 338
                  }
                ],
                "start": 175,
                "end": 344
              },
              "expression": false,
              "start": 172,
              "end": 344
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 170,
            "end": 344
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 351
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 355,
                      "end": 362
                    },
                    "start": 353,
                    "end": 362
                  },
                  "start": 352,
                  "end": 362
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 382
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 385,
                          "end": 389
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 391
                        },
                        "optional": false,
                        "computed": false,
                        "start": 385,
                        "end": 391
                      },
                      "alternate": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 394,
                          "end": 398
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 399,
                          "end": 403
                        },
                        "optional": false,
                        "computed": false,
                        "start": 394,
                        "end": 403
                      },
                      "start": 381,
                      "end": 403
                    },
                    "start": 374,
                    "end": 404
                  }
                ],
                "start": 364,
                "end": 426
              },
              "expression": false,
              "start": 351,
              "end": 426
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 349,
            "end": 426
          }
        ],
        "start": 8,
        "end": 428
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 428
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
        "start": 436,
        "end": 437
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 447
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
              "name": "self1",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 459
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 462,
              "end": 466
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 454,
            "end": 467
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "self2",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 477
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 480,
                "end": 484
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "self",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 489
              },
              "optional": false,
              "computed": false,
              "start": 480,
              "end": 489
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 472,
            "end": 490
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "self3",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 500
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 503,
                  "end": 507
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 511
                },
                "optional": false,
                "computed": false,
                "start": 503,
                "end": 511
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 503,
              "end": 513
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 495,
            "end": 514
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 528
              },
              "typeArguments": null,
              "arguments": [],
              "start": 523,
              "end": 530
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 519,
            "end": 531
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 539
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 552,
                          "end": 556
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 561
                        },
                        "optional": false,
                        "computed": false,
                        "start": 552,
                        "end": 561
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 564,
                          "end": 568
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 569,
                          "end": 574
                        },
                        "optional": false,
                        "computed": false,
                        "start": 564,
                        "end": 574
                      },
                      "start": 552,
                      "end": 574
                    },
                    "directive": null,
                    "start": 552,
                    "end": 575
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 593
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 593
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 596,
                          "end": 600
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 601,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 596,
                        "end": 606
                      },
                      "start": 584,
                      "end": 606
                    },
                    "directive": null,
                    "start": 584,
                    "end": 607
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 616,
                          "end": 620
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 625
                        },
                        "optional": false,
                        "computed": false,
                        "start": 616,
                        "end": 625
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 628,
                          "end": 632
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 633,
                          "end": 638
                        },
                        "optional": false,
                        "computed": false,
                        "start": 628,
                        "end": 638
                      },
                      "start": 616,
                      "end": 638
                    },
                    "directive": null,
                    "start": 616,
                    "end": 639
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 648,
                          "end": 652
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 653,
                          "end": 658
                        },
                        "optional": false,
                        "computed": false,
                        "start": 648,
                        "end": 658
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 661,
                          "end": 665
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 666,
                          "end": 670
                        },
                        "optional": false,
                        "computed": false,
                        "start": 661,
                        "end": 670
                      },
                      "start": 648,
                      "end": 670
                    },
                    "directive": null,
                    "start": 648,
                    "end": 671
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 680,
                          "end": 684
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 685,
                          "end": 690
                        },
                        "optional": false,
                        "computed": false,
                        "start": 680,
                        "end": 690
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 693,
                          "end": 697
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 698,
                          "end": 702
                        },
                        "optional": false,
                        "computed": false,
                        "start": 693,
                        "end": 702
                      },
                      "start": 680,
                      "end": 702
                    },
                    "directive": null,
                    "start": 680,
                    "end": 703
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 712,
                          "end": 716
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 717,
                          "end": 722
                        },
                        "optional": false,
                        "computed": false,
                        "start": 712,
                        "end": 722
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 725,
                          "end": 729
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 730,
                          "end": 734
                        },
                        "optional": false,
                        "computed": false,
                        "start": 725,
                        "end": 734
                      },
                      "start": 712,
                      "end": 734
                    },
                    "directive": null,
                    "start": 712,
                    "end": 735
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 744,
                          "end": 748
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 749,
                          "end": 750
                        },
                        "optional": false,
                        "computed": false,
                        "start": 744,
                        "end": 750
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 753,
                          "end": 757
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 758,
                          "end": 762
                        },
                        "optional": false,
                        "computed": false,
                        "start": 753,
                        "end": 762
                      },
                      "start": 744,
                      "end": 762
                    },
                    "directive": null,
                    "start": 744,
                    "end": 763
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 772,
                          "end": 776
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 777,
                          "end": 778
                        },
                        "optional": false,
                        "computed": false,
                        "start": 772,
                        "end": 778
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 781,
                          "end": 785
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 786,
                          "end": 787
                        },
                        "optional": false,
                        "computed": false,
                        "start": 781,
                        "end": 787
                      },
                      "start": 772,
                      "end": 787
                    },
                    "directive": null,
                    "start": 772,
                    "end": 788
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 807,
                          "end": 811
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 812,
                          "end": 816
                        },
                        "optional": false,
                        "computed": false,
                        "start": 807,
                        "end": 816
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 819,
                          "end": 823
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 824,
                          "end": 825
                        },
                        "optional": false,
                        "computed": false,
                        "start": 819,
                        "end": 825
                      },
                      "start": 807,
                      "end": 825
                    },
                    "directive": null,
                    "start": 807,
                    "end": 826
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 845,
                          "end": 849
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 850,
                          "end": 851
                        },
                        "optional": false,
                        "computed": false,
                        "start": 845,
                        "end": 851
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 854,
                          "end": 858
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 859,
                          "end": 860
                        },
                        "optional": false,
                        "computed": false,
                        "start": 854,
                        "end": 860
                      },
                      "start": 845,
                      "end": 860
                    },
                    "directive": null,
                    "start": 845,
                    "end": 861
                  }
                ],
                "start": 542,
                "end": 867
              },
              "expression": false,
              "start": 539,
              "end": 867
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 536,
            "end": 867
          }
        ],
        "start": 448,
        "end": 869
      },
      "abstract": false,
      "declare": false,
      "start": 430,
      "end": 869
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 869
}
```
