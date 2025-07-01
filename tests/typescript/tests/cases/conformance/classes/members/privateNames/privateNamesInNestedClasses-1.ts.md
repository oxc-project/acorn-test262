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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 13,
              "end": 17
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "A's #foo",
              "raw": "\"A's #foo\"",
              "start": 20,
              "end": 30
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 13,
            "end": 31
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 35,
              "end": 39
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "A's #bar",
              "raw": "\"A's #bar\"",
              "start": 42,
              "end": 52
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 35,
            "end": 53
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
              "start": 57,
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 83
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
                            "type": "PrivateIdentifier",
                            "name": "foo",
                            "start": 97,
                            "end": 101
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": "B's #foo",
                            "raw": "\"B's #foo\"",
                            "start": 104,
                            "end": 114
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 97,
                          "end": 115
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
                            "start": 127,
                            "end": 130
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 135,
                                    "end": 138
                                  },
                                  "start": 133,
                                  "end": 138
                                },
                                "start": 132,
                                "end": 138
                              }
                            ],
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 157,
                                      "end": 158
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "foo",
                                      "start": 159,
                                      "end": 163
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 157,
                                    "end": 163
                                  },
                                  "directive": null,
                                  "start": 157,
                                  "end": 164
                                }
                              ],
                              "start": 140,
                              "end": 230
                            },
                            "expression": false,
                            "start": 131,
                            "end": 230
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 127,
                          "end": 230
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 245
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
                                      "start": 250,
                                      "end": 251
                                    },
                                    "typeArguments": null,
                                    "start": 250,
                                    "end": 251
                                  },
                                  "start": 248,
                                  "end": 251
                                },
                                "start": 247,
                                "end": 251
                              }
                            ],
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 270,
                                      "end": 271
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "foo",
                                      "start": 272,
                                      "end": 276
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 270,
                                    "end": 276
                                  },
                                  "directive": null,
                                  "start": 270,
                                  "end": 277
                                }
                              ],
                              "start": 253,
                              "end": 322
                            },
                            "expression": false,
                            "start": 246,
                            "end": 322
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 242,
                          "end": 322
                        },
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "quux",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 334,
                            "end": 338
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
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 343,
                                      "end": 344
                                    },
                                    "typeArguments": null,
                                    "start": 343,
                                    "end": 344
                                  },
                                  "start": 341,
                                  "end": 344
                                },
                                "start": 340,
                                "end": 344
                              }
                            ],
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
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 363,
                                      "end": 364
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "foo",
                                      "start": 365,
                                      "end": 369
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 363,
                                    "end": 369
                                  },
                                  "directive": null,
                                  "start": 363,
                                  "end": 370
                                }
                              ],
                              "start": 346,
                              "end": 389
                            },
                            "expression": false,
                            "start": 339,
                            "end": 389
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 334,
                          "end": 389
                        }
                      ],
                      "start": 84,
                      "end": 398
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 76,
                    "end": 398
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 412,
                          "end": 413
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 420,
                            "end": 421
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 416,
                          "end": 423
                        },
                        "definite": false,
                        "start": 412,
                        "end": 423
                      }
                    ],
                    "declare": false,
                    "start": 406,
                    "end": 424
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 432,
                          "end": 439
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 443
                        },
                        "optional": false,
                        "computed": false,
                        "start": 432,
                        "end": 443
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 445
                        }
                      ],
                      "optional": false,
                      "start": 432,
                      "end": 446
                    },
                    "directive": null,
                    "start": 432,
                    "end": 447
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 459,
                            "end": 460
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 455,
                          "end": 462
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 463,
                          "end": 466
                        },
                        "optional": false,
                        "computed": false,
                        "start": 455,
                        "end": 466
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 468
                        }
                      ],
                      "optional": false,
                      "start": 455,
                      "end": 469
                    },
                    "directive": null,
                    "start": 455,
                    "end": 470
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 485
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 493
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 488,
                          "end": 495
                        },
                        "definite": false,
                        "start": 484,
                        "end": 495
                      }
                    ],
                    "declare": false,
                    "start": 478,
                    "end": 496
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 509
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 504,
                          "end": 511
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "quux",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 512,
                          "end": 516
                        },
                        "optional": false,
                        "computed": false,
                        "start": 504,
                        "end": 516
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 517,
                          "end": 518
                        }
                      ],
                      "optional": false,
                      "start": 504,
                      "end": 519
                    },
                    "directive": null,
                    "start": 504,
                    "end": 520
                  }
                ],
                "start": 67,
                "end": 525
              },
              "expression": false,
              "start": 64,
              "end": 525
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 525
          }
        ],
        "start": 8,
        "end": 527
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 527
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 534
            },
            "typeArguments": null,
            "arguments": [],
            "start": 529,
            "end": 536
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 543
          },
          "optional": false,
          "computed": false,
          "start": 529,
          "end": 543
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 529,
        "end": 545
      },
      "directive": null,
      "start": 529,
      "end": 546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 546
}
```
