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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
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
                  "start": 29,
                  "end": 35
                },
                "start": 27,
                "end": 35
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 45,
                      "end": 47
                    },
                    "start": 38,
                    "end": 47
                  }
                ],
                "start": 36,
                "end": 49
              },
              "expression": false,
              "start": 25,
              "end": 49
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 49
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
              "start": 58,
              "end": 61
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 65,
                          "end": 71
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 74,
                          "end": 80
                        }
                      ],
                      "start": 65,
                      "end": 80
                    },
                    "start": 63,
                    "end": 80
                  },
                  "start": 62,
                  "end": 80
                }
              ],
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 96,
                          "end": 97
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 100,
                            "end": 101
                          },
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 105,
                            "end": 111
                          },
                          "start": 100,
                          "end": 111
                        },
                        "definite": false,
                        "start": 96,
                        "end": 111
                      }
                    ],
                    "declare": false,
                    "start": 92,
                    "end": 112
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 126
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 129,
                            "end": 130
                          },
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 134,
                            "end": 140
                          },
                          "start": 129,
                          "end": 140
                        },
                        "definite": false,
                        "start": 125,
                        "end": 140
                      }
                    ],
                    "declare": false,
                    "start": 121,
                    "end": 141
                  }
                ],
                "start": 82,
                "end": 147
              },
              "expression": false,
              "start": 61,
              "end": 147
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 54,
            "end": 147
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
              "start": 157,
              "end": 160
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
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 164,
                      "end": 170
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 173,
                      "end": 179
                    }
                  ],
                  "start": 164,
                  "end": 179
                },
                "start": 162,
                "end": 179
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 189,
                      "end": 191
                    },
                    "start": 182,
                    "end": 191
                  }
                ],
                "start": 180,
                "end": 193
              },
              "expression": false,
              "start": 160,
              "end": 193
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 153,
            "end": 193
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
              "start": 202,
              "end": 205
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 209,
                          "end": 215
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 218,
                          "end": 224
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 227,
                          "end": 234
                        }
                      ],
                      "start": 209,
                      "end": 234
                    },
                    "start": 207,
                    "end": 234
                  },
                  "start": 206,
                  "end": 234
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 236,
                "end": 243
              },
              "expression": false,
              "start": 205,
              "end": 243
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 198,
            "end": 243
          }
        ],
        "start": 12,
        "end": 245
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 245
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 262
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 276
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 269,
            "end": 287
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 299
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 303,
                        "end": 309
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 312,
                        "end": 318
                      }
                    ],
                    "start": 303,
                    "end": 318
                  },
                  "start": 301,
                  "end": 318
                },
                "start": 300,
                "end": 318
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 292,
            "end": 320
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 333
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 337,
                    "end": 343
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 346,
                    "end": 352
                  }
                ],
                "start": 337,
                "end": 352
              },
              "start": 335,
              "end": 352
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 326,
            "end": 353
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 365
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 369,
                        "end": 375
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 378,
                        "end": 384
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 387,
                        "end": 394
                      }
                    ],
                    "start": 369,
                    "end": 394
                  },
                  "start": 367,
                  "end": 394
                },
                "start": 366,
                "end": 394
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 358,
            "end": 396
          }
        ],
        "start": 263,
        "end": 398
      },
      "declare": false,
      "start": 247,
      "end": 398
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 410
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 426
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 430,
                "end": 436
              },
              "start": 428,
              "end": 436
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 419,
            "end": 437
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 449
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 453,
                        "end": 459
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 462,
                        "end": 468
                      }
                    ],
                    "start": 453,
                    "end": 468
                  },
                  "start": 451,
                  "end": 468
                },
                "start": 450,
                "end": 468
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 442,
            "end": 470
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 483
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 487,
                    "end": 493
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 496,
                    "end": 502
                  }
                ],
                "start": 487,
                "end": 502
              },
              "start": 485,
              "end": 502
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 476,
            "end": 503
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 515
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 519,
                        "end": 525
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 528,
                        "end": 534
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 537,
                        "end": 544
                      }
                    ],
                    "start": 519,
                    "end": 544
                  },
                  "start": 517,
                  "end": 544
                },
                "start": 516,
                "end": 544
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 508,
            "end": 546
          }
        ],
        "start": 413,
        "end": 548
      },
      "declare": false,
      "start": 400,
      "end": 549
    },
    {
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 564
              },
              "init": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 576
                },
                "typeArguments": null,
                "arguments": [],
                "start": 567,
                "end": 578
              },
              "definite": false,
              "start": 563,
              "end": 578
            }
          ],
          "declare": false,
          "start": 557,
          "end": 579
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 585
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 589
              },
              "optional": false,
              "computed": false,
              "start": 584,
              "end": 589
            },
            "right": {
              "type": "Literal",
              "value": 32,
              "raw": "32",
              "start": 592,
              "end": 594
            },
            "start": 584,
            "end": 594
          },
          "directive": null,
          "start": 584,
          "end": 595
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
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 607,
                    "end": 613
                  },
                  "start": 605,
                  "end": 613
                },
                "start": 604,
                "end": 613
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 617
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 621
                },
                "optional": false,
                "computed": false,
                "start": 616,
                "end": 621
              },
              "definite": false,
              "start": 604,
              "end": 621
            }
          ],
          "declare": false,
          "start": 600,
          "end": 622
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 682
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 686
              },
              "optional": false,
              "computed": false,
              "start": 681,
              "end": 686
            },
            "right": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 689,
              "end": 691
            },
            "start": 681,
            "end": 691
          },
          "directive": null,
          "start": 681,
          "end": 692
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 704,
                    "end": 710
                  },
                  "start": 702,
                  "end": 710
                },
                "start": 701,
                "end": 710
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 713,
                  "end": 714
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 715,
                  "end": 718
                },
                "optional": false,
                "computed": false,
                "start": 713,
                "end": 718
              },
              "definite": false,
              "start": 701,
              "end": 718
            }
          ],
          "declare": false,
          "start": 697,
          "end": 719
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 725
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 729
              },
              "optional": false,
              "computed": false,
              "start": 724,
              "end": 729
            },
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 732,
              "end": 737
            },
            "start": 724,
            "end": 737
          },
          "directive": null,
          "start": 724,
          "end": 738
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
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 748
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 751,
                  "end": 752
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 756
                },
                "optional": false,
                "computed": false,
                "start": 751,
                "end": 756
              },
              "definite": false,
              "start": 747,
              "end": 756
            }
          ],
          "declare": false,
          "start": 743,
          "end": 757
        }
      ],
      "start": 551,
      "end": 759
    },
    {
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 773,
                "end": 774
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 777,
                  "end": 779
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 783,
                    "end": 788
                  },
                  "typeArguments": null,
                  "start": 783,
                  "end": 788
                },
                "start": 777,
                "end": 788
              },
              "definite": false,
              "start": 773,
              "end": 788
            }
          ],
          "declare": false,
          "start": 767,
          "end": 789
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 795
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 799
              },
              "optional": false,
              "computed": false,
              "start": 794,
              "end": 799
            },
            "right": {
              "type": "Literal",
              "value": 32,
              "raw": "32",
              "start": 802,
              "end": 804
            },
            "start": 794,
            "end": 804
          },
          "directive": null,
          "start": 794,
          "end": 805
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
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 817,
                    "end": 823
                  },
                  "start": 815,
                  "end": 823
                },
                "start": 814,
                "end": 823
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 826,
                  "end": 827
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 828,
                  "end": 831
                },
                "optional": false,
                "computed": false,
                "start": 826,
                "end": 831
              },
              "definite": false,
              "start": 814,
              "end": 831
            }
          ],
          "declare": false,
          "start": 810,
          "end": 832
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 892
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 893,
                "end": 896
              },
              "optional": false,
              "computed": false,
              "start": 891,
              "end": 896
            },
            "right": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 899,
              "end": 901
            },
            "start": 891,
            "end": 901
          },
          "directive": null,
          "start": 891,
          "end": 902
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 914,
                    "end": 920
                  },
                  "start": 912,
                  "end": 920
                },
                "start": 911,
                "end": 920
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 923,
                  "end": 924
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 925,
                  "end": 928
                },
                "optional": false,
                "computed": false,
                "start": 923,
                "end": 928
              },
              "definite": false,
              "start": 911,
              "end": 928
            }
          ],
          "declare": false,
          "start": 907,
          "end": 929
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 934,
                "end": 935
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 936,
                "end": 939
              },
              "optional": false,
              "computed": false,
              "start": 934,
              "end": 939
            },
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 942,
              "end": 947
            },
            "start": 934,
            "end": 947
          },
          "directive": null,
          "start": 934,
          "end": 948
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
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 957,
                "end": 958
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 961,
                  "end": 962
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 963,
                  "end": 966
                },
                "optional": false,
                "computed": false,
                "start": 961,
                "end": 966
              },
              "definite": false,
              "start": 957,
              "end": 966
            }
          ],
          "declare": false,
          "start": 953,
          "end": 967
        }
      ],
      "start": 761,
      "end": 969
    },
    {
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
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 984
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 987,
                  "end": 989
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 993,
                    "end": 998
                  },
                  "typeArguments": null,
                  "start": 993,
                  "end": 998
                },
                "start": 987,
                "end": 998
              },
              "definite": false,
              "start": 983,
              "end": 998
            }
          ],
          "declare": false,
          "start": 977,
          "end": 999
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1005
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1006,
                "end": 1009
              },
              "optional": false,
              "computed": false,
              "start": 1004,
              "end": 1009
            },
            "right": {
              "type": "Literal",
              "value": 32,
              "raw": "32",
              "start": 1012,
              "end": 1014
            },
            "start": 1004,
            "end": 1014
          },
          "directive": null,
          "start": 1004,
          "end": 1015
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
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1027,
                    "end": 1033
                  },
                  "start": 1025,
                  "end": 1033
                },
                "start": 1024,
                "end": 1033
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1036,
                  "end": 1037
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1041
                },
                "optional": false,
                "computed": false,
                "start": 1036,
                "end": 1041
              },
              "definite": false,
              "start": 1024,
              "end": 1041
            }
          ],
          "declare": false,
          "start": 1020,
          "end": 1042
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1101,
                "end": 1102
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1106
              },
              "optional": false,
              "computed": false,
              "start": 1101,
              "end": 1106
            },
            "right": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 1109,
              "end": 1111
            },
            "start": 1101,
            "end": 1111
          },
          "directive": null,
          "start": 1101,
          "end": 1112
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
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1124,
                    "end": 1130
                  },
                  "start": 1122,
                  "end": 1130
                },
                "start": 1121,
                "end": 1130
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1134
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1135,
                  "end": 1138
                },
                "optional": false,
                "computed": false,
                "start": 1133,
                "end": 1138
              },
              "definite": false,
              "start": 1121,
              "end": 1138
            }
          ],
          "declare": false,
          "start": 1117,
          "end": 1139
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1144,
                "end": 1145
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1146,
                "end": 1149
              },
              "optional": false,
              "computed": false,
              "start": 1144,
              "end": 1149
            },
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 1152,
              "end": 1157
            },
            "start": 1144,
            "end": 1157
          },
          "directive": null,
          "start": 1144,
          "end": 1158
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
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1167,
                "end": 1168
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1172
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1176
                },
                "optional": false,
                "computed": false,
                "start": 1171,
                "end": 1176
              },
              "definite": false,
              "start": 1167,
              "end": 1176
            }
          ],
          "declare": false,
          "start": 1163,
          "end": 1177
        }
      ],
      "start": 971,
      "end": 1179
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1179
}
```
