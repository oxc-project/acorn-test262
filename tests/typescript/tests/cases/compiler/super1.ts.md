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
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 38
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
                      "type": "Literal",
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 58,
                      "end": 64
                    },
                    "start": 51,
                    "end": 65
                  }
                ],
                "start": 41,
                "end": 71
              },
              "expression": false,
              "start": 38,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 28,
            "end": 71
          }
        ],
        "start": 22,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 10,
      "end": 73
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 85
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 99
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
              "start": 113,
              "end": 116
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
                      "type": "Literal",
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 136,
                      "end": 142
                    },
                    "start": 129,
                    "end": 143
                  }
                ],
                "start": 119,
                "end": 149
              },
              "expression": false,
              "start": 116,
              "end": 149
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 106,
            "end": 149
          }
        ],
        "start": 100,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 151
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubSub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 166
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 179
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
              "start": 193,
              "end": 196
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 216,
                          "end": 221
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 227
                        },
                        "optional": false,
                        "computed": false,
                        "start": 216,
                        "end": 227
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 231
                      },
                      "optional": false,
                      "computed": false,
                      "start": 216,
                      "end": 231
                    },
                    "start": 209,
                    "end": 232
                  }
                ],
                "start": 199,
                "end": 238
              },
              "expression": false,
              "start": 196,
              "end": 238
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 186,
            "end": 238
          }
        ],
        "start": 180,
        "end": 240
      },
      "abstract": false,
      "declare": false,
      "start": 153,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 263
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
              "start": 277,
              "end": 280
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
                      "type": "Literal",
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 300,
                      "end": 306
                    },
                    "start": 293,
                    "end": 307
                  }
                ],
                "start": 283,
                "end": 313
              },
              "expression": false,
              "start": 280,
              "end": 313
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 270,
            "end": 313
          }
        ],
        "start": 264,
        "end": 315
      },
      "abstract": false,
      "declare": false,
      "start": 252,
      "end": 315
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubE2",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 328
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 342
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
              "start": 356,
              "end": 359
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 379,
                            "end": 384
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 385,
                            "end": 394
                          },
                          "optional": false,
                          "computed": false,
                          "start": 379,
                          "end": 394
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 398
                        },
                        "optional": false,
                        "computed": false,
                        "start": 379,
                        "end": 398
                      },
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 401,
                        "end": 405
                      },
                      "start": 379,
                      "end": 405
                    },
                    "start": 372,
                    "end": 406
                  }
                ],
                "start": 362,
                "end": 412
              },
              "expression": false,
              "start": 359,
              "end": 412
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 349,
            "end": 412
          }
        ],
        "start": 343,
        "end": 414
      },
      "abstract": false,
      "declare": false,
      "start": 317,
      "end": 414
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
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
              "start": 451,
              "end": 454
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
                      "type": "Literal",
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 474,
                      "end": 480
                    },
                    "start": 467,
                    "end": 481
                  }
                ],
                "start": 457,
                "end": 487
              },
              "expression": false,
              "start": 454,
              "end": 487
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 444,
            "end": 487
          }
        ],
        "start": 438,
        "end": 489
      },
      "abstract": false,
      "declare": false,
      "start": 426,
      "end": 489
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubE3",
        "optional": false,
        "typeAnnotation": null,
        "start": 497,
        "end": 502
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 516
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
              "start": 530,
              "end": 533
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 553,
                          "end": 558
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 562
                        },
                        "optional": false,
                        "computed": false,
                        "start": 553,
                        "end": 562
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 553,
                      "end": 564
                    },
                    "start": 546,
                    "end": 565
                  }
                ],
                "start": 536,
                "end": 571
              },
              "expression": false,
              "start": 533,
              "end": 571
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 523,
            "end": 571
          }
        ],
        "start": 517,
        "end": 573
      },
      "abstract": false,
      "declare": false,
      "start": 491,
      "end": 573
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base4",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 600
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
              "name": "Sub4",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 617
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 636
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
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 659,
                            "end": 666
                          },
                          "start": 652,
                          "end": 667
                        }
                      ],
                      "start": 638,
                      "end": 677
                    },
                    "expression": false,
                    "start": 636,
                    "end": 677
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 628,
                  "end": 677
                }
              ],
              "start": 618,
              "end": 683
            },
            "abstract": false,
            "declare": false,
            "start": 607,
            "end": 683
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SubSub4",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 713
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sub4",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 726
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 744
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 767,
                                  "end": 772
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 773,
                                  "end": 774
                                },
                                "optional": false,
                                "computed": false,
                                "start": 767,
                                "end": 774
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 767,
                              "end": 776
                            },
                            "start": 760,
                            "end": 777
                          }
                        ],
                        "start": 746,
                        "end": 787
                      },
                      "expression": false,
                      "start": 744,
                      "end": 787
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 736,
                    "end": 787
                  }
                ],
                "start": 726,
                "end": 793
              },
              "abstract": false,
              "declare": false,
              "start": 700,
              "end": 793
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 693,
            "end": 793
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sub4E",
                "optional": false,
                "typeAnnotation": null,
                "start": 816,
                "end": 821
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 839,
                      "end": 840
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
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 864,
                                  "end": 869
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 870,
                                  "end": 871
                                },
                                "optional": false,
                                "computed": false,
                                "start": 864,
                                "end": 871
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 864,
                              "end": 873
                            },
                            "start": 857,
                            "end": 874
                          }
                        ],
                        "start": 843,
                        "end": 884
                      },
                      "expression": false,
                      "start": 840,
                      "end": 884
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 832,
                    "end": 884
                  }
                ],
                "start": 822,
                "end": 890
              },
              "abstract": false,
              "declare": false,
              "start": 810,
              "end": 890
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 803,
            "end": 890
          }
        ],
        "start": 601,
        "end": 892
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 585,
      "end": 892
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 892
}
```
