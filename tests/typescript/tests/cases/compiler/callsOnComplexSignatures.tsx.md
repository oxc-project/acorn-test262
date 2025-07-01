__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "start": 51,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 62,
        "end": 69
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 70
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 121
      },
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
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringType1",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 146
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 149,
                    "end": 154
                  },
                  "start": 149,
                  "end": 154
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 157,
                    "end": 162
                  },
                  "start": 157,
                  "end": 162
                }
              ],
              "start": 149,
              "end": 162
            },
            "declare": false,
            "start": 130,
            "end": 163
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringType2",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 184
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "baz",
                    "raw": "\"baz\"",
                    "start": 187,
                    "end": 192
                  },
                  "start": 187,
                  "end": 192
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 195,
                    "end": 200
                  },
                  "start": 195,
                  "end": 200
                }
              ],
              "start": 187,
              "end": 200
            },
            "declare": false,
            "start": 168,
            "end": 201
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Temp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 222
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
                    "name": "getValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 241
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stringType1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 248,
                            "end": 259
                          },
                          "typeArguments": null,
                          "start": 248,
                          "end": 259
                        },
                        "start": 246,
                        "end": 259
                      },
                      "start": 242,
                      "end": 259
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 262,
                      "end": 268
                    },
                    "start": 260,
                    "end": 268
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 233,
                  "end": 269
                }
              ],
              "start": 223,
              "end": 275
            },
            "declare": false,
            "start": 207,
            "end": 275
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Temp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 296
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
                    "name": "getValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 315
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stringType2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 322,
                            "end": 333
                          },
                          "typeArguments": null,
                          "start": 322,
                          "end": 333
                        },
                        "start": 320,
                        "end": 333
                      },
                      "start": 316,
                      "end": 333
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 336,
                      "end": 342
                    },
                    "start": 334,
                    "end": 342
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 307,
                  "end": 343
                }
              ],
              "start": 297,
              "end": 349
            },
            "declare": false,
            "start": 281,
            "end": 349
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 368
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                          "name": "Temp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 377
                        },
                        "typeArguments": null,
                        "start": 372,
                        "end": 377
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Temp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 380,
                          "end": 385
                        },
                        "typeArguments": null,
                        "start": 380,
                        "end": 385
                      }
                    ],
                    "start": 372,
                    "end": 385
                  },
                  "start": 370,
                  "end": 385
                },
                "start": 369,
                "end": 385
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 403,
                        "end": 404
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 407,
                            "end": 408
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 417
                          },
                          "optional": false,
                          "computed": false,
                          "start": 407,
                          "end": 417
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 418,
                            "end": 423
                          }
                        ],
                        "optional": false,
                        "start": 407,
                        "end": 424
                      },
                      "definite": false,
                      "start": 403,
                      "end": 424
                    }
                  ],
                  "declare": false,
                  "start": 397,
                  "end": 425
                }
              ],
              "start": 387,
              "end": 449
            },
            "expression": false,
            "start": 355,
            "end": 449
          }
        ],
        "start": 124,
        "end": 451
      },
      "expression": false,
      "start": 107,
      "end": 451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 467
      },
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
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Messages",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 494
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
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 517
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 537,
                                          "end": 543
                                        },
                                        "start": 535,
                                        "end": 543
                                      },
                                      "start": 532,
                                      "end": 543
                                    }
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 546,
                                      "end": 549
                                    },
                                    "start": 544,
                                    "end": 549
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null,
                                  "start": 531,
                                  "end": 550
                                },
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
                                    "start": 551,
                                    "end": 552
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 554,
                                      "end": 560
                                    },
                                    "start": 552,
                                    "end": 560
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 551,
                                  "end": 560
                                }
                              ],
                              "start": 529,
                              "end": 562
                            },
                            "start": 527,
                            "end": 562
                          },
                          "start": 520,
                          "end": 562
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 567,
                          "end": 573
                        },
                        "start": 564,
                        "end": 573
                      },
                      "start": 519,
                      "end": 573
                    },
                    "start": 517,
                    "end": 573
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 505,
                  "end": 574
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 595
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 615,
                                          "end": 621
                                        },
                                        "start": 613,
                                        "end": 621
                                      },
                                      "start": 610,
                                      "end": 621
                                    }
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 624,
                                      "end": 627
                                    },
                                    "start": 622,
                                    "end": 627
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null,
                                  "start": 609,
                                  "end": 628
                                },
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
                                    "start": 629,
                                    "end": 630
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 632,
                                      "end": 638
                                    },
                                    "start": 630,
                                    "end": 638
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 629,
                                  "end": 638
                                }
                              ],
                              "start": 607,
                              "end": 640
                            },
                            "start": 605,
                            "end": 640
                          },
                          "start": 598,
                          "end": 640
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 645,
                          "end": 651
                        },
                        "start": 642,
                        "end": 651
                      },
                      "start": 597,
                      "end": 651
                    },
                    "start": 595,
                    "end": 651
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 583,
                  "end": 652
                }
              ],
              "start": 495,
              "end": 658
            },
            "declare": false,
            "start": 476,
            "end": 658
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
                  "name": "messages",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Messages",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 688
                      },
                      "typeArguments": null,
                      "start": 680,
                      "end": 688
                    },
                    "start": 678,
                    "end": 688
                  },
                  "start": 670,
                  "end": 688
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
                        "start": 701,
                        "end": 704
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 707,
                            "end": 714
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": "Foo",
                          "raw": "\"Foo\"",
                          "start": 719,
                          "end": 724
                        },
                        "id": null,
                        "generator": false,
                        "start": 706,
                        "end": 724
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 701,
                      "end": 724
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 737
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 740,
                            "end": 747
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": "Bar",
                          "raw": "\"Bar\"",
                          "start": 752,
                          "end": 757
                        },
                        "id": null,
                        "generator": false,
                        "start": 739,
                        "end": 757
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 734,
                      "end": 757
                    }
                  ],
                  "start": 691,
                  "end": 764
                },
                "definite": false,
                "start": 670,
                "end": 764
              }
            ],
            "declare": false,
            "start": 664,
            "end": 765
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
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 782
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "foo",
                                "raw": "\"foo\"",
                                "start": 792,
                                "end": 797
                              },
                              "start": 792,
                              "end": 797
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "bar",
                                "raw": "\"bar\"",
                                "start": 800,
                                "end": 805
                              },
                              "start": 800,
                              "end": 805
                            }
                          ],
                          "start": 792,
                          "end": 805
                        },
                        "start": 790,
                        "end": 805
                      },
                      "start": 786,
                      "end": 805
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "messages",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 818,
                        "end": 826
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 831
                      },
                      "optional": false,
                      "computed": true,
                      "start": 818,
                      "end": 832
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 835,
                              "end": 836
                            },
                            "value": {
                              "type": "Literal",
                              "value": "A",
                              "raw": "\"A\"",
                              "start": 838,
                              "end": 841
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 835,
                            "end": 841
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 843,
                              "end": 844
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 846,
                              "end": 847
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 843,
                            "end": 847
                          }
                        ],
                        "start": 833,
                        "end": 849
                      }
                    ],
                    "optional": false,
                    "start": 818,
                    "end": 850
                  },
                  "id": null,
                  "generator": false,
                  "start": 785,
                  "end": 850
                },
                "definite": false,
                "start": 777,
                "end": 850
              }
            ],
            "declare": false,
            "start": 771,
            "end": 851
          }
        ],
        "start": 470,
        "end": 853
      },
      "expression": false,
      "start": 453,
      "end": 853
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 864,
        "end": 869
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 877,
                    "end": 883
                  },
                  "start": 877,
                  "end": 885
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 888,
                    "end": 894
                  },
                  "start": 888,
                  "end": 896
                }
              ],
              "start": 877,
              "end": 896
            },
            "start": 875,
            "end": 896
          },
          "start": 870,
          "end": 896
        }
      ],
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 904,
                  "end": 909
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 917
                },
                "optional": false,
                "computed": false,
                "start": 904,
                "end": 917
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 918,
                      "end": 922
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 926,
                        "end": 933
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 934,
                        "end": 937
                      },
                      "optional": false,
                      "computed": false,
                      "start": 926,
                      "end": 937
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 938,
                        "end": 942
                      }
                    ],
                    "optional": false,
                    "start": 926,
                    "end": 943
                  },
                  "id": null,
                  "generator": false,
                  "start": 918,
                  "end": 943
                }
              ],
              "optional": false,
              "start": 904,
              "end": 944
            },
            "directive": null,
            "start": 904,
            "end": 945
          }
        ],
        "start": 898,
        "end": 947
      },
      "expression": false,
      "start": 855,
      "end": 947
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 958,
        "end": 963
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 980,
                        "end": 984
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 987,
                                  "end": 988
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 990,
                                    "end": 996
                                  },
                                  "start": 988,
                                  "end": 996
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 987,
                                "end": 996
                              }
                            ],
                            "start": 986,
                            "end": 997
                          },
                          "start": 986,
                          "end": 999
                        },
                        "start": 984,
                        "end": 999
                      },
                      "value": null,
                      "start": 977,
                      "end": 999
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1004,
                      "end": 1010
                    },
                    "start": 1001,
                    "end": 1010
                  },
                  "start": 976,
                  "end": 1010
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1019,
                        "end": 1023
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1026,
                                  "end": 1027
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1029,
                                    "end": 1035
                                  },
                                  "start": 1027,
                                  "end": 1035
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1026,
                                "end": 1035
                              }
                            ],
                            "start": 1025,
                            "end": 1036
                          },
                          "start": 1025,
                          "end": 1038
                        },
                        "start": 1023,
                        "end": 1038
                      },
                      "value": null,
                      "start": 1016,
                      "end": 1038
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1043,
                      "end": 1049
                    },
                    "start": 1040,
                    "end": 1049
                  },
                  "start": 1015,
                  "end": 1049
                }
              ],
              "start": 975,
              "end": 1050
            },
            "start": 973,
            "end": 1050
          },
          "start": 969,
          "end": 1050
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1068,
                                "end": 1069
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1071,
                                  "end": 1077
                                },
                                "start": 1069,
                                "end": 1077
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1068,
                              "end": 1077
                            }
                          ],
                          "start": 1067,
                          "end": 1078
                        },
                        "start": 1065,
                        "end": 1078
                      },
                      "start": 1064,
                      "end": 1078
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 1083,
                          "end": 1089
                        },
                        "start": 1081,
                        "end": 1089
                      },
                      "start": 1080,
                      "end": 1089
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1094,
                      "end": 1100
                    },
                    "start": 1091,
                    "end": 1100
                  },
                  "start": 1063,
                  "end": 1100
                },
                {
                  "type": "TSFunctionType",
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
                          "type": "TSObjectKeyword",
                          "start": 1109,
                          "end": 1115
                        },
                        "start": 1107,
                        "end": 1115
                      },
                      "start": 1106,
                      "end": 1115
                    },
                    {
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1121,
                                "end": 1122
                              },
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
                              "accessibility": null,
                              "static": false,
                              "start": 1121,
                              "end": 1130
                            }
                          ],
                          "start": 1120,
                          "end": 1131
                        },
                        "start": 1118,
                        "end": 1131
                      },
                      "start": 1117,
                      "end": 1131
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1136,
                      "end": 1142
                    },
                    "start": 1133,
                    "end": 1142
                  },
                  "start": 1105,
                  "end": 1142
                }
              ],
              "start": 1062,
              "end": 1143
            },
            "start": 1060,
            "end": 1143
          },
          "start": 1056,
          "end": 1143
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1161,
                                "end": 1162
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1164,
                                  "end": 1170
                                },
                                "start": 1162,
                                "end": 1170
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1161,
                              "end": 1170
                            }
                          ],
                          "start": 1160,
                          "end": 1171
                        },
                        "start": 1158,
                        "end": 1171
                      },
                      "start": 1157,
                      "end": 1171
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1176,
                        "end": 1180
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1183,
                                  "end": 1184
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1186,
                                    "end": 1192
                                  },
                                  "start": 1184,
                                  "end": 1192
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1183,
                                "end": 1192
                              }
                            ],
                            "start": 1182,
                            "end": 1193
                          },
                          "start": 1182,
                          "end": 1195
                        },
                        "start": 1180,
                        "end": 1195
                      },
                      "value": null,
                      "start": 1173,
                      "end": 1195
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1200,
                      "end": 1206
                    },
                    "start": 1197,
                    "end": 1206
                  },
                  "start": 1156,
                  "end": 1206
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1215,
                        "end": 1219
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1222,
                                  "end": 1223
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1225,
                                    "end": 1231
                                  },
                                  "start": 1223,
                                  "end": 1231
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1222,
                                "end": 1231
                              }
                            ],
                            "start": 1221,
                            "end": 1232
                          },
                          "start": 1221,
                          "end": 1234
                        },
                        "start": 1219,
                        "end": 1234
                      },
                      "value": null,
                      "start": 1212,
                      "end": 1234
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1239,
                      "end": 1245
                    },
                    "start": 1236,
                    "end": 1245
                  },
                  "start": 1211,
                  "end": 1245
                }
              ],
              "start": 1155,
              "end": 1246
            },
            "start": 1153,
            "end": 1246
          },
          "start": 1149,
          "end": 1246
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1265,
                                "end": 1266
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1268,
                                  "end": 1274
                                },
                                "start": 1266,
                                "end": 1274
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1265,
                              "end": 1274
                            }
                          ],
                          "start": 1264,
                          "end": 1275
                        },
                        "start": 1262,
                        "end": 1275
                      },
                      "start": 1260,
                      "end": 1275
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1282,
                                "end": 1283
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1285,
                                  "end": 1291
                                },
                                "start": 1283,
                                "end": 1291
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1282,
                              "end": 1291
                            }
                          ],
                          "start": 1281,
                          "end": 1292
                        },
                        "start": 1279,
                        "end": 1292
                      },
                      "start": 1277,
                      "end": 1292
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1297,
                      "end": 1303
                    },
                    "start": 1294,
                    "end": 1303
                  },
                  "start": 1259,
                  "end": 1303
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1314,
                                "end": 1315
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1317,
                                  "end": 1323
                                },
                                "start": 1315,
                                "end": 1323
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1314,
                              "end": 1323
                            }
                          ],
                          "start": 1313,
                          "end": 1324
                        },
                        "start": 1311,
                        "end": 1324
                      },
                      "start": 1309,
                      "end": 1324
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1329,
                      "end": 1335
                    },
                    "start": 1326,
                    "end": 1335
                  },
                  "start": 1308,
                  "end": 1335
                }
              ],
              "start": 1258,
              "end": 1336
            },
            "start": 1256,
            "end": 1336
          },
          "start": 1252,
          "end": 1336
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg5",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1355,
                                "end": 1356
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1358,
                                  "end": 1364
                                },
                                "start": 1356,
                                "end": 1364
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1355,
                              "end": 1364
                            }
                          ],
                          "start": 1354,
                          "end": 1365
                        },
                        "start": 1352,
                        "end": 1365
                      },
                      "start": 1350,
                      "end": 1365
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1370,
                        "end": 1371
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1374,
                                  "end": 1375
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1377,
                                    "end": 1383
                                  },
                                  "start": 1375,
                                  "end": 1383
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1374,
                                "end": 1383
                              }
                            ],
                            "start": 1373,
                            "end": 1384
                          },
                          "start": 1373,
                          "end": 1386
                        },
                        "start": 1371,
                        "end": 1386
                      },
                      "value": null,
                      "start": 1367,
                      "end": 1386
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1391,
                      "end": 1397
                    },
                    "start": 1388,
                    "end": 1397
                  },
                  "start": 1349,
                  "end": 1397
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1408,
                                "end": 1409
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1411,
                                  "end": 1417
                                },
                                "start": 1409,
                                "end": 1417
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1408,
                              "end": 1417
                            }
                          ],
                          "start": 1407,
                          "end": 1418
                        },
                        "start": 1405,
                        "end": 1418
                      },
                      "start": 1403,
                      "end": 1418
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1423,
                      "end": 1429
                    },
                    "start": 1420,
                    "end": 1429
                  },
                  "start": 1402,
                  "end": 1429
                }
              ],
              "start": 1348,
              "end": 1430
            },
            "start": 1346,
            "end": 1430
          },
          "start": 1342,
          "end": 1430
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg6",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1449,
                                "end": 1450
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1452,
                                  "end": 1458
                                },
                                "start": 1450,
                                "end": 1458
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1449,
                              "end": 1458
                            }
                          ],
                          "start": 1448,
                          "end": 1459
                        },
                        "start": 1446,
                        "end": 1459
                      },
                      "start": 1444,
                      "end": 1459
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1466,
                                "end": 1467
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1469,
                                  "end": 1475
                                },
                                "start": 1467,
                                "end": 1475
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1466,
                              "end": 1475
                            }
                          ],
                          "start": 1465,
                          "end": 1476
                        },
                        "start": 1463,
                        "end": 1476
                      },
                      "start": 1461,
                      "end": 1476
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1481,
                      "end": 1487
                    },
                    "start": 1478,
                    "end": 1487
                  },
                  "start": 1443,
                  "end": 1487
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1496,
                        "end": 1497
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
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
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1500,
                                  "end": 1501
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1503,
                                    "end": 1509
                                  },
                                  "start": 1501,
                                  "end": 1509
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1500,
                                "end": 1509
                              }
                            ],
                            "start": 1499,
                            "end": 1510
                          },
                          "start": 1499,
                          "end": 1512
                        },
                        "start": 1497,
                        "end": 1512
                      },
                      "value": null,
                      "start": 1493,
                      "end": 1512
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1517,
                      "end": 1523
                    },
                    "start": 1514,
                    "end": 1523
                  },
                  "start": 1492,
                  "end": 1523
                }
              ],
              "start": 1442,
              "end": 1524
            },
            "start": 1440,
            "end": 1524
          },
          "start": 1436,
          "end": 1524
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1534,
                "end": 1538
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1534,
              "end": 1540
            },
            "directive": null,
            "start": 1534,
            "end": 1541
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1546,
                "end": 1550
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1552,
                        "end": 1553
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1555,
                        "end": 1556
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1552,
                      "end": 1556
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1558,
                        "end": 1559
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1561,
                        "end": 1562
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1558,
                      "end": 1562
                    }
                  ],
                  "start": 1551,
                  "end": 1563
                }
              ],
              "optional": false,
              "start": 1546,
              "end": 1564
            },
            "directive": null,
            "start": 1546,
            "end": 1565
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1570,
                "end": 1574
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1576,
                        "end": 1577
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1579,
                        "end": 1580
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1576,
                      "end": 1580
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1582,
                        "end": 1583
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1585,
                        "end": 1586
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1582,
                      "end": 1586
                    }
                  ],
                  "start": 1575,
                  "end": 1587
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1591
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1593,
                        "end": 1594
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1590,
                      "end": 1594
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1596,
                        "end": 1597
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1599,
                        "end": 1600
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1596,
                      "end": 1600
                    }
                  ],
                  "start": 1589,
                  "end": 1601
                }
              ],
              "optional": false,
              "start": 1570,
              "end": 1602
            },
            "directive": null,
            "start": 1570,
            "end": 1603
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1609,
                "end": 1613
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1615,
                        "end": 1616
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1618,
                        "end": 1619
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1615,
                      "end": 1619
                    }
                  ],
                  "start": 1614,
                  "end": 1620
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1623,
                        "end": 1624
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1626,
                        "end": 1627
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1623,
                      "end": 1627
                    }
                  ],
                  "start": 1622,
                  "end": 1628
                }
              ],
              "optional": false,
              "start": 1609,
              "end": 1629
            },
            "directive": null,
            "start": 1609,
            "end": 1630
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1640
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1642,
                        "end": 1643
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1645,
                        "end": 1646
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1642,
                      "end": 1646
                    }
                  ],
                  "start": 1641,
                  "end": 1647
                }
              ],
              "optional": false,
              "start": 1636,
              "end": 1648
            },
            "directive": null,
            "start": 1636,
            "end": 1649
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1654,
                "end": 1658
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1660,
                        "end": 1661
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1663,
                        "end": 1664
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1660,
                      "end": 1664
                    }
                  ],
                  "start": 1659,
                  "end": 1665
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1668,
                        "end": 1669
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1671,
                        "end": 1672
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1668,
                      "end": 1672
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1674,
                        "end": 1675
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1677,
                        "end": 1678
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1674,
                      "end": 1678
                    }
                  ],
                  "start": 1667,
                  "end": 1679
                }
              ],
              "optional": false,
              "start": 1654,
              "end": 1680
            },
            "directive": null,
            "start": 1654,
            "end": 1681
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1686,
                "end": 1690
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1692,
                        "end": 1693
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1695,
                        "end": 1696
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1692,
                      "end": 1696
                    }
                  ],
                  "start": 1691,
                  "end": 1697
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1700,
                        "end": 1701
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1703,
                        "end": 1704
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1700,
                      "end": 1704
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1706,
                        "end": 1707
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1709,
                        "end": 1710
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1706,
                      "end": 1710
                    }
                  ],
                  "start": 1699,
                  "end": 1711
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1714,
                        "end": 1715
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1717,
                        "end": 1718
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1714,
                      "end": 1718
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1720,
                        "end": 1721
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1723,
                        "end": 1724
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1720,
                      "end": 1724
                    }
                  ],
                  "start": 1713,
                  "end": 1725
                }
              ],
              "optional": false,
              "start": 1686,
              "end": 1726
            },
            "directive": null,
            "start": 1686,
            "end": 1727
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1733,
                "end": 1737
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1733,
              "end": 1739
            },
            "directive": null,
            "start": 1733,
            "end": 1740
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1745,
                "end": 1749
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1751,
                        "end": 1752
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1754,
                        "end": 1755
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1751,
                      "end": 1755
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1757,
                        "end": 1758
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1760,
                        "end": 1761
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1757,
                      "end": 1761
                    }
                  ],
                  "start": 1750,
                  "end": 1762
                }
              ],
              "optional": false,
              "start": 1745,
              "end": 1763
            },
            "directive": null,
            "start": 1745,
            "end": 1764
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1769,
                "end": 1773
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1775,
                        "end": 1776
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1778,
                        "end": 1779
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1775,
                      "end": 1779
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1781,
                        "end": 1782
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1784,
                        "end": 1785
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1781,
                      "end": 1785
                    }
                  ],
                  "start": 1774,
                  "end": 1786
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1789,
                        "end": 1790
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1792,
                        "end": 1793
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1789,
                      "end": 1793
                    }
                  ],
                  "start": 1788,
                  "end": 1794
                }
              ],
              "optional": false,
              "start": 1769,
              "end": 1795
            },
            "directive": null,
            "start": 1769,
            "end": 1796
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1802,
                "end": 1806
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1802,
              "end": 1808
            },
            "directive": null,
            "start": 1802,
            "end": 1809
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1814,
                "end": 1818
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1820,
                        "end": 1821
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1823,
                        "end": 1824
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1820,
                      "end": 1824
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1826,
                        "end": 1827
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1829,
                        "end": 1830
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1826,
                      "end": 1830
                    }
                  ],
                  "start": 1819,
                  "end": 1831
                }
              ],
              "optional": false,
              "start": 1814,
              "end": 1832
            },
            "directive": null,
            "start": 1814,
            "end": 1833
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1838,
                "end": 1842
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1844,
                        "end": 1845
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1847,
                        "end": 1848
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1844,
                      "end": 1848
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1850,
                        "end": 1851
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1853,
                        "end": 1854
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1850,
                      "end": 1854
                    }
                  ],
                  "start": 1843,
                  "end": 1855
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1858,
                        "end": 1859
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1861,
                        "end": 1862
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1858,
                      "end": 1862
                    }
                  ],
                  "start": 1857,
                  "end": 1863
                }
              ],
              "optional": false,
              "start": 1838,
              "end": 1864
            },
            "directive": null,
            "start": 1838,
            "end": 1865
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1871,
                "end": 1875
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1871,
              "end": 1877
            },
            "directive": null,
            "start": 1871,
            "end": 1878
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1883,
                "end": 1887
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1889,
                        "end": 1890
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1892,
                        "end": 1893
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1889,
                      "end": 1893
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1895,
                        "end": 1896
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1898,
                        "end": 1899
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1895,
                      "end": 1899
                    }
                  ],
                  "start": 1888,
                  "end": 1900
                }
              ],
              "optional": false,
              "start": 1883,
              "end": 1901
            },
            "directive": null,
            "start": 1883,
            "end": 1902
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1907,
                "end": 1911
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1913,
                        "end": 1914
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1916,
                        "end": 1917
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1913,
                      "end": 1917
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1919,
                        "end": 1920
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1922,
                        "end": 1923
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1919,
                      "end": 1923
                    }
                  ],
                  "start": 1912,
                  "end": 1924
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1927,
                        "end": 1928
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1930,
                        "end": 1931
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1927,
                      "end": 1931
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1933,
                        "end": 1934
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1936,
                        "end": 1937
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1933,
                      "end": 1937
                    }
                  ],
                  "start": 1926,
                  "end": 1938
                }
              ],
              "optional": false,
              "start": 1907,
              "end": 1939
            },
            "directive": null,
            "start": 1907,
            "end": 1940
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1945,
                "end": 1949
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1951,
                        "end": 1952
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1954,
                        "end": 1955
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1951,
                      "end": 1955
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1957,
                        "end": 1958
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1960,
                        "end": 1961
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1957,
                      "end": 1961
                    }
                  ],
                  "start": 1950,
                  "end": 1962
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1965,
                        "end": 1966
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1968,
                        "end": 1969
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1965,
                      "end": 1969
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1971,
                        "end": 1972
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1974,
                        "end": 1975
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1971,
                      "end": 1975
                    }
                  ],
                  "start": 1964,
                  "end": 1976
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1979,
                        "end": 1980
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1982,
                        "end": 1983
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1979,
                      "end": 1983
                    }
                  ],
                  "start": 1978,
                  "end": 1984
                }
              ],
              "optional": false,
              "start": 1945,
              "end": 1985
            },
            "directive": null,
            "start": 1945,
            "end": 1986
          }
        ],
        "start": 1528,
        "end": 1988
      },
      "expression": false,
      "start": 949,
      "end": 1988
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2016,
        "end": 2021
      },
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 2074,
              "end": 2080
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "url",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2087,
                    "end": 2093
                  },
                  "start": 2085,
                  "end": 2093
                },
                "start": 2081,
                "end": 2093
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2096,
                    "end": 2101
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2102,
                    "end": 2111
                  },
                  "start": 2096,
                  "end": 2111
                },
                "typeArguments": null,
                "start": 2096,
                "end": 2111
              },
              "start": 2094,
              "end": 2111
            },
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2128,
                        "end": 2131
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "url",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2134,
                          "end": 2137
                        },
                        "consequent": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 2140,
                          "end": 2143
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": "button",
                          "raw": "'button'",
                          "start": 2146,
                          "end": 2154
                        },
                        "start": 2134,
                        "end": 2154
                      },
                      "definite": false,
                      "start": 2128,
                      "end": 2154
                    }
                  ],
                  "declare": false,
                  "start": 2122,
                  "end": 2155
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Tag",
                        "start": 2172,
                        "end": 2175
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 2171,
                      "end": 2176
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "value": "test",
                        "raw": "test",
                        "start": 2176,
                        "end": 2180
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Tag",
                        "start": 2182,
                        "end": 2185
                      },
                      "start": 2180,
                      "end": 2186
                    },
                    "start": 2171,
                    "end": 2186
                  },
                  "start": 2164,
                  "end": 2187
                }
              ],
              "start": 2112,
              "end": 2193
            },
            "expression": false,
            "start": 2065,
            "end": 2193
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "App",
              "optional": false,
              "typeAnnotation": null,
              "start": 2263,
              "end": 2266
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
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
                          "name": "component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2276,
                          "end": 2285
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2286,
                                "end": 2291
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReactType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2292,
                                "end": 2301
                              },
                              "start": 2286,
                              "end": 2301
                            },
                            "typeArguments": null,
                            "start": 2286,
                            "end": 2301
                          },
                          "start": 2285,
                          "end": 2301
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2276,
                        "end": 2301
                      }
                    ],
                    "start": 2274,
                    "end": 2303
                  },
                  "start": 2272,
                  "end": 2303
                },
                "start": 2267,
                "end": 2303
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Comp",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2327,
                                "end": 2332
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReactType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2333,
                                "end": 2342
                              },
                              "start": 2327,
                              "end": 2342
                            },
                            "typeArguments": null,
                            "start": 2327,
                            "end": 2342
                          },
                          "start": 2325,
                          "end": 2342
                        },
                        "start": 2321,
                        "end": 2342
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2345,
                          "end": 2350
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2351,
                          "end": 2360
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2345,
                        "end": 2360
                      },
                      "definite": false,
                      "start": 2321,
                      "end": 2360
                    }
                  ],
                  "declare": false,
                  "start": 2315,
                  "end": 2361
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Comp",
                        "start": 2379,
                        "end": 2383
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 2378,
                      "end": 2386
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 2378,
                    "end": 2386
                  },
                  "start": 2370,
                  "end": 2388
                }
              ],
              "start": 2305,
              "end": 2394
            },
            "expression": false,
            "start": 2254,
            "end": 2394
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "render2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2456,
              "end": 2463
            },
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
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2486,
                    "end": 2488
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2503,
                          "end": 2504
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2507,
                            "end": 2514
                          },
                          "start": 2505,
                          "end": 2514
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2503,
                        "end": 2515
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2528,
                          "end": 2529
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2532,
                            "end": 2538
                          },
                          "start": 2530,
                          "end": 2538
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2528,
                        "end": 2539
                      }
                    ],
                    "start": 2489,
                    "end": 2549
                  },
                  "declare": false,
                  "start": 2476,
                  "end": 2549
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2570
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2585,
                          "end": 2586
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2589,
                            "end": 2596
                          },
                          "start": 2587,
                          "end": 2596
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2585,
                        "end": 2597
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2610,
                          "end": 2611
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2614,
                            "end": 2617
                          },
                          "start": 2612,
                          "end": 2617
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2610,
                        "end": 2618
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2631,
                          "end": 2632
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2635,
                            "end": 2638
                          },
                          "start": 2633,
                          "end": 2638
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2631,
                        "end": 2639
                      }
                    ],
                    "start": 2571,
                    "end": 2649
                  },
                  "declare": false,
                  "start": 2558,
                  "end": 2649
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "React",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2666,
                                    "end": 2671
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2672,
                                    "end": 2685
                                  },
                                  "start": 2666,
                                  "end": 2685
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2686,
                                        "end": 2688
                                      },
                                      "typeArguments": null,
                                      "start": 2686,
                                      "end": 2688
                                    }
                                  ],
                                  "start": 2685,
                                  "end": 2689
                                },
                                "start": 2666,
                                "end": 2689
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "React",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2692,
                                    "end": 2697
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2698,
                                    "end": 2711
                                  },
                                  "start": 2692,
                                  "end": 2711
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2712,
                                        "end": 2714
                                      },
                                      "typeArguments": null,
                                      "start": 2712,
                                      "end": 2714
                                    }
                                  ],
                                  "start": 2711,
                                  "end": 2715
                                },
                                "start": 2692,
                                "end": 2715
                              }
                            ],
                            "start": 2666,
                            "end": 2715
                          },
                          "start": 2664,
                          "end": 2715
                        },
                        "start": 2663,
                        "end": 2715
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 2718,
                          "end": 2722
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2726,
                          "end": 2729
                        },
                        "start": 2718,
                        "end": 2729
                      },
                      "definite": false,
                      "start": 2663,
                      "end": 2729
                    }
                  ],
                  "declare": false,
                  "start": 2659,
                  "end": 2730
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
                        "start": 2746,
                        "end": 2747
                      },
                      "init": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "C",
                            "start": 2751,
                            "end": 2752
                          },
                          "typeArguments": null,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "p",
                                "start": 2753,
                                "end": 2754
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2756,
                                  "end": 2760
                                },
                                "start": 2755,
                                "end": 2761
                              },
                              "start": 2753,
                              "end": 2761
                            }
                          ],
                          "selfClosing": true,
                          "start": 2750,
                          "end": 2764
                        },
                        "children": [],
                        "closingElement": null,
                        "start": 2750,
                        "end": 2764
                      },
                      "definite": false,
                      "start": 2746,
                      "end": 2764
                    }
                  ],
                  "declare": false,
                  "start": 2740,
                  "end": 2765
                }
              ],
              "start": 2466,
              "end": 2771
            },
            "expression": false,
            "start": 2447,
            "end": 2771
          }
        ],
        "start": 2024,
        "end": 2773
      },
      "expression": false,
      "start": 2007,
      "end": 2773
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 2773
}
```
