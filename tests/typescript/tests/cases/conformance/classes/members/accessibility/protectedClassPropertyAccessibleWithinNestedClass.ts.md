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
        "start": 20,
        "end": 21
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
              "start": 38,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
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
            "start": 28,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 80,
                        "end": 84
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 86
                      },
                      "optional": false,
                      "computed": false,
                      "start": 80,
                      "end": 86
                    },
                    "start": 73,
                    "end": 87
                  }
                ],
                "start": 71,
                "end": 89
              },
              "expression": false,
              "start": 68,
              "end": 89
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 53,
            "end": 89
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 111
                }
              ],
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
                          "start": 115,
                          "end": 119
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 120,
                          "end": 121
                        },
                        "optional": false,
                        "computed": false,
                        "start": 115,
                        "end": 121
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 130
                        },
                        "optional": false,
                        "computed": false,
                        "start": 124,
                        "end": 130
                      },
                      "start": 115,
                      "end": 130
                    },
                    "directive": null,
                    "start": 115,
                    "end": 131
                  }
                ],
                "start": 113,
                "end": 133
              },
              "expression": false,
              "start": 109,
              "end": 133
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 94,
            "end": 133
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
              "start": 148,
              "end": 151
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 163,
                        "end": 167
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 163,
                      "end": 171
                    },
                    "start": 156,
                    "end": 172
                  }
                ],
                "start": 154,
                "end": 174
              },
              "expression": false,
              "start": 151,
              "end": 174
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 138,
            "end": 174
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              },
              "start": 198,
              "end": 206
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 180,
            "end": 207
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 246,
                        "end": 250
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 252
                      },
                      "optional": false,
                      "computed": false,
                      "start": 246,
                      "end": 252
                    },
                    "start": 239,
                    "end": 253
                  }
                ],
                "start": 237,
                "end": 255
              },
              "expression": false,
              "start": 234,
              "end": 255
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 212,
            "end": 255
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 282
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 284
                }
              ],
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
                          "start": 288,
                          "end": 292
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 294
                        },
                        "optional": false,
                        "computed": false,
                        "start": 288,
                        "end": 294
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 297,
                          "end": 301
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 303
                        },
                        "optional": false,
                        "computed": false,
                        "start": 297,
                        "end": 303
                      },
                      "start": 288,
                      "end": 303
                    },
                    "directive": null,
                    "start": 288,
                    "end": 304
                  }
                ],
                "start": 286,
                "end": 306
              },
              "expression": false,
              "start": 282,
              "end": 306
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 260,
            "end": 306
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
              "start": 328,
              "end": 331
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 343,
                        "end": 347
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 351
                      },
                      "optional": false,
                      "computed": false,
                      "start": 343,
                      "end": 351
                    },
                    "start": 336,
                    "end": 352
                  }
                ],
                "start": 334,
                "end": 354
              },
              "expression": false,
              "start": 331,
              "end": 354
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 311,
            "end": 354
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
              "start": 376,
              "end": 379
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
                          "type": "ThisExpression",
                          "start": 384,
                          "end": 388
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 389,
                          "end": 392
                        },
                        "optional": false,
                        "computed": false,
                        "start": 384,
                        "end": 392
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 384,
                      "end": 394
                    },
                    "directive": null,
                    "start": 384,
                    "end": 395
                  }
                ],
                "start": 382,
                "end": 397
              },
              "expression": false,
              "start": 379,
              "end": 397
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 359,
            "end": 397
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
              "start": 413,
              "end": 416
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 435,
                      "end": 437
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
                            "start": 462,
                            "end": 465
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
                                  "kind": "let",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
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
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 493,
                                              "end": 494
                                            },
                                            "typeArguments": null,
                                            "start": 493,
                                            "end": 494
                                          },
                                          "start": 491,
                                          "end": 494
                                        },
                                        "start": 490,
                                        "end": 494
                                      },
                                      "init": null,
                                      "definite": false,
                                      "start": 490,
                                      "end": 494
                                    }
                                  ],
                                  "declare": false,
                                  "start": 486,
                                  "end": 495
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
                                        "name": "x1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 516,
                                        "end": 518
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 521,
                                          "end": 522
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 523,
                                          "end": 526
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 521,
                                        "end": 526
                                      },
                                      "definite": false,
                                      "start": 516,
                                      "end": 526
                                    }
                                  ],
                                  "declare": false,
                                  "start": 512,
                                  "end": 527
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
                                        "name": "x2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 548,
                                        "end": 550
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 553,
                                          "end": 554
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 555,
                                          "end": 558
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 553,
                                        "end": 558
                                      },
                                      "definite": false,
                                      "start": 548,
                                      "end": 558
                                    }
                                  ],
                                  "declare": false,
                                  "start": 544,
                                  "end": 559
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
                                        "name": "x3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 580,
                                        "end": 582
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 585,
                                          "end": 586
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 587,
                                          "end": 588
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 585,
                                        "end": 588
                                      },
                                      "definite": false,
                                      "start": 580,
                                      "end": 588
                                    }
                                  ],
                                  "declare": false,
                                  "start": 576,
                                  "end": 589
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
                                        "name": "x4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 610,
                                        "end": 612
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 615,
                                          "end": 616
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 617,
                                          "end": 618
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 615,
                                        "end": 618
                                      },
                                      "definite": false,
                                      "start": 610,
                                      "end": 618
                                    }
                                  ],
                                  "declare": false,
                                  "start": 606,
                                  "end": 619
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
                                        "name": "sx1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 641,
                                        "end": 644
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 647,
                                          "end": 648
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 649,
                                          "end": 650
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 647,
                                        "end": 650
                                      },
                                      "definite": false,
                                      "start": 641,
                                      "end": 650
                                    }
                                  ],
                                  "declare": false,
                                  "start": 637,
                                  "end": 651
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
                                        "name": "sx2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 672,
                                        "end": 675
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 678,
                                          "end": 679
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 680,
                                          "end": 681
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 678,
                                        "end": 681
                                      },
                                      "definite": false,
                                      "start": 672,
                                      "end": 681
                                    }
                                  ],
                                  "declare": false,
                                  "start": 668,
                                  "end": 682
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
                                        "name": "sx3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 703,
                                        "end": 706
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 709,
                                          "end": 710
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 711,
                                          "end": 714
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 709,
                                        "end": 714
                                      },
                                      "definite": false,
                                      "start": 703,
                                      "end": 714
                                    }
                                  ],
                                  "declare": false,
                                  "start": 699,
                                  "end": 715
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
                                        "name": "sx4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 736,
                                        "end": 739
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 742,
                                          "end": 743
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 744,
                                          "end": 747
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 742,
                                        "end": 747
                                      },
                                      "definite": false,
                                      "start": 736,
                                      "end": 747
                                    }
                                  ],
                                  "declare": false,
                                  "start": 732,
                                  "end": 748
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
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 770,
                                        "end": 771
                                      },
                                      "init": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 778,
                                          "end": 779
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 774,
                                        "end": 781
                                      },
                                      "definite": false,
                                      "start": 770,
                                      "end": 781
                                    }
                                  ],
                                  "declare": false,
                                  "start": 766,
                                  "end": 782
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
                                        "name": "y1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 803,
                                        "end": 805
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 808,
                                          "end": 809
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 810,
                                          "end": 813
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 808,
                                        "end": 813
                                      },
                                      "definite": false,
                                      "start": 803,
                                      "end": 813
                                    }
                                  ],
                                  "declare": false,
                                  "start": 799,
                                  "end": 814
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
                                        "name": "y2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 835,
                                        "end": 837
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 840,
                                          "end": 841
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 842,
                                          "end": 845
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 840,
                                        "end": 845
                                      },
                                      "definite": false,
                                      "start": 835,
                                      "end": 845
                                    }
                                  ],
                                  "declare": false,
                                  "start": 831,
                                  "end": 846
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
                                        "name": "y3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 867,
                                        "end": 869
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 872,
                                          "end": 873
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 874,
                                          "end": 875
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 872,
                                        "end": 875
                                      },
                                      "definite": false,
                                      "start": 867,
                                      "end": 875
                                    }
                                  ],
                                  "declare": false,
                                  "start": 863,
                                  "end": 876
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
                                        "name": "y4",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 897,
                                        "end": 899
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 902,
                                          "end": 903
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 904,
                                          "end": 905
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 902,
                                        "end": 905
                                      },
                                      "definite": false,
                                      "start": 897,
                                      "end": 905
                                    }
                                  ],
                                  "declare": false,
                                  "start": 893,
                                  "end": 906
                                }
                              ],
                              "start": 468,
                              "end": 920
                            },
                            "expression": false,
                            "start": 465,
                            "end": 920
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "protected",
                          "start": 452,
                          "end": 920
                        }
                      ],
                      "start": 438,
                      "end": 930
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 429,
                    "end": 930
                  }
                ],
                "start": 419,
                "end": 936
              },
              "expression": false,
              "start": 416,
              "end": 936
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 403,
            "end": 936
          }
        ],
        "start": 22,
        "end": 938
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 938
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 938
}
```
