__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "name": "find",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "selector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  "start": 36,
                  "end": 44
                },
                "start": 28,
                "end": 44
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 53
                },
                "typeArguments": null,
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 54
          }
        ],
        "start": 17,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JQueryStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 80
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "selector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 103,
                    "end": 109
                  },
                  "start": 101,
                  "end": 109
                },
                "start": 93,
                "end": 109
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 118
                },
                "typeArguments": null,
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "start": 92,
            "end": 119
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "JQuery",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 139
                    },
                    "typeArguments": null,
                    "start": 133,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
                },
                "start": 125,
                "end": 139
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 148
                },
                "typeArguments": null,
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "start": 124,
            "end": 149
          }
        ],
        "start": 81,
        "end": 151
      },
      "declare": false,
      "start": 58,
      "end": 151
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
        "start": 159,
        "end": 163
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
              "start": 166,
              "end": 169
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
                "start": 172,
                "end": 175
              },
              "expression": false,
              "start": 169,
              "end": 175
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 166,
            "end": 175
          }
        ],
        "start": 164,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 153,
      "end": 177
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "each",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 192
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "collection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 205,
              "end": 211
            },
            "start": 203,
            "end": 211
          },
          "start": 193,
          "end": 211
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "indexInArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 238,
                      "end": 241
                    },
                    "start": 236,
                    "end": 241
                  },
                  "start": 224,
                  "end": 241
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "valueOfElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 259,
                      "end": 262
                    },
                    "start": 257,
                    "end": 262
                  },
                  "start": 243,
                  "end": 262
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 267,
                  "end": 270
                },
                "start": 264,
                "end": 270
              },
              "start": 223,
              "end": 270
            },
            "start": 221,
            "end": 270
          },
          "start": 213,
          "end": 270
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 273,
          "end": 276
        },
        "start": 271,
        "end": 276
      },
      "body": null,
      "expression": false,
      "start": 179,
      "end": 277
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "each",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 291
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "collection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JQuery",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 310
              },
              "typeArguments": null,
              "start": 304,
              "end": 310
            },
            "start": 302,
            "end": 310
          },
          "start": 292,
          "end": 310
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "indexInArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 337,
                      "end": 343
                    },
                    "start": 335,
                    "end": 343
                  },
                  "start": 323,
                  "end": 343
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "valueOfElement",
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
                        "start": 361,
                        "end": 365
                      },
                      "typeArguments": null,
                      "start": 361,
                      "end": 365
                    },
                    "start": 359,
                    "end": 365
                  },
                  "start": 345,
                  "end": 365
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 370,
                  "end": 373
                },
                "start": 367,
                "end": 373
              },
              "start": 322,
              "end": 373
            },
            "start": 320,
            "end": 373
          },
          "start": 312,
          "end": 373
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 376,
          "end": 379
        },
        "start": 374,
        "end": 379
      },
      "body": null,
      "expression": false,
      "start": 278,
      "end": 380
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "each",
        "optional": false,
        "typeAnnotation": null,
        "start": 390,
        "end": 394
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "collection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 407,
              "end": 410
            },
            "start": 405,
            "end": 410
          },
          "start": 395,
          "end": 410
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "indexInArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 437,
                      "end": 440
                    },
                    "start": 435,
                    "end": 440
                  },
                  "start": 423,
                  "end": 440
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "valueOfElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 458,
                      "end": 461
                    },
                    "start": 456,
                    "end": 461
                  },
                  "start": 442,
                  "end": 461
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 466,
                  "end": 469
                },
                "start": 463,
                "end": 469
              },
              "start": 422,
              "end": 469
            },
            "start": 420,
            "end": 469
          },
          "start": 412,
          "end": 469
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 472,
          "end": 475
        },
        "start": 470,
        "end": 475
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 489,
              "end": 493
            },
            "start": 482,
            "end": 494
          }
        ],
        "start": 476,
        "end": 496
      },
      "expression": false,
      "start": 381,
      "end": 496
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_setBarAndText",
        "optional": false,
        "typeAnnotation": null,
        "start": 507,
        "end": 521
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 525,
          "end": 529
        },
        "start": 523,
        "end": 529
      },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JQuery",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 549
                      },
                      "typeArguments": null,
                      "start": 543,
                      "end": 549
                    },
                    "start": 541,
                    "end": 549
                  },
                  "start": 540,
                  "end": 549
                },
                "init": null,
                "definite": false,
                "start": 540,
                "end": 549
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JQueryStatic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 566
                      },
                      "typeArguments": null,
                      "start": 554,
                      "end": 566
                    },
                    "start": 552,
                    "end": 566
                  },
                  "start": 551,
                  "end": 566
                },
                "init": null,
                "definite": false,
                "start": 551,
                "end": 566
              }
            ],
            "declare": false,
            "start": 536,
            "end": 566
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "each",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 575
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 576,
                      "end": 577
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 582
                    },
                    "optional": false,
                    "computed": false,
                    "start": 576,
                    "end": 582
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": " ",
                      "raw": "\" \"",
                      "start": 583,
                      "end": 586
                    }
                  ],
                  "optional": false,
                  "start": 576,
                  "end": 587
                },
                {
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
                              "name": "$this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "JQuery",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 622,
                                    "end": 628
                                  },
                                  "typeArguments": null,
                                  "start": 622,
                                  "end": 628
                                },
                                "start": 620,
                                "end": 628
                              },
                              "start": 615,
                              "end": 628
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "$",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 631,
                                "end": 632
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "",
                                  "raw": "''",
                                  "start": 633,
                                  "end": 635
                                }
                              ],
                              "optional": false,
                              "start": 631,
                              "end": 636
                            },
                            "definite": false,
                            "start": 615,
                            "end": 636
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thisBar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 650,
                              "end": 657
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "$this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 660,
                                  "end": 665
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "find",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 666,
                                  "end": 670
                                },
                                "optional": false,
                                "computed": false,
                                "start": 660,
                                "end": 670
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ".fx-usagebars-calloutbar-this",
                                  "raw": "\".fx-usagebars-calloutbar-this\"",
                                  "start": 671,
                                  "end": 702
                                }
                              ],
                              "optional": false,
                              "start": 660,
                              "end": 703
                            },
                            "definite": false,
                            "start": 650,
                            "end": 703
                          }
                        ],
                        "declare": false,
                        "start": 611,
                        "end": 704
                      }
                    ],
                    "start": 601,
                    "end": 761
                  },
                  "expression": false,
                  "start": 589,
                  "end": 761
                }
              ],
              "optional": false,
              "start": 571,
              "end": 763
            },
            "directive": null,
            "start": 571,
            "end": 764
          }
        ],
        "start": 530,
        "end": 766
      },
      "expression": false,
      "start": 498,
      "end": 766
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 766
}
```
