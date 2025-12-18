__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 75
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 100
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
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 114
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 116,
                        "end": 122
                      },
                      "start": 114,
                      "end": 122
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 111,
                    "end": 123
                  }
                ],
                "start": 101,
                "end": 129
              },
              "declare": false,
              "start": 89,
              "end": 129
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 82,
            "end": 129
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
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
                      "start": 154,
                      "end": 155
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 154,
                    "end": 155
                  }
                ],
                "start": 153,
                "end": 156
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 170
                    },
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
                          "start": 172,
                          "end": 173
                        },
                        "typeArguments": null,
                        "start": 172,
                        "end": 173
                      },
                      "start": 170,
                      "end": 173
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 167,
                    "end": 174
                  }
                ],
                "start": 157,
                "end": 180
              },
              "declare": false,
              "start": 142,
              "end": 180
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 135,
            "end": 180
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 198
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 227
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
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 245
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 247,
                              "end": 253
                            },
                            "start": 245,
                            "end": 253
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 242,
                          "end": 254
                        }
                      ],
                      "start": 228,
                      "end": 264
                    },
                    "declare": false,
                    "start": 216,
                    "end": 264
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 209,
                  "end": 264
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
                              "start": 281,
                              "end": 282
                            },
                            "typeArguments": null,
                            "start": 281,
                            "end": 282
                          },
                          "start": 279,
                          "end": 282
                        },
                        "start": 278,
                        "end": 282
                      },
                      "init": null,
                      "definite": false,
                      "start": 278,
                      "end": 282
                    }
                  ],
                  "declare": false,
                  "start": 274,
                  "end": 283
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
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 298
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 302
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 303,
                          "end": 306
                        },
                        "optional": false,
                        "computed": false,
                        "start": 301,
                        "end": 306
                      },
                      "definite": false,
                      "start": 296,
                      "end": 306
                    }
                  ],
                  "declare": false,
                  "start": 292,
                  "end": 307
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
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 331
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 334,
                          "end": 335
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 336,
                          "end": 339
                        },
                        "optional": false,
                        "computed": false,
                        "start": 334,
                        "end": 339
                      },
                      "definite": false,
                      "start": 329,
                      "end": 339
                    }
                  ],
                  "declare": false,
                  "start": 325,
                  "end": 340
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 368
                    },
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
                            "start": 369,
                            "end": 370
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 369,
                          "end": 370
                        }
                      ],
                      "start": 368,
                      "end": 371
                    },
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 386,
                            "end": 389
                          },
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
                                "start": 391,
                                "end": 392
                              },
                              "typeArguments": null,
                              "start": 391,
                              "end": 392
                            },
                            "start": 389,
                            "end": 392
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 386,
                          "end": 393
                        }
                      ],
                      "start": 372,
                      "end": 403
                    },
                    "declare": false,
                    "start": 357,
                    "end": 403
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 350,
                  "end": 403
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 420,
                              "end": 421
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 422,
                                  "end": 428
                                }
                              ],
                              "start": 421,
                              "end": 429
                            },
                            "start": 420,
                            "end": 429
                          },
                          "start": 418,
                          "end": 429
                        },
                        "start": 417,
                        "end": 429
                      },
                      "init": null,
                      "definite": false,
                      "start": 417,
                      "end": 429
                    }
                  ],
                  "declare": false,
                  "start": 413,
                  "end": 430
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
                        "name": "r3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 443,
                        "end": 445
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 448,
                          "end": 449
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 453
                        },
                        "optional": false,
                        "computed": false,
                        "start": 448,
                        "end": 453
                      },
                      "definite": false,
                      "start": 443,
                      "end": 453
                    }
                  ],
                  "declare": false,
                  "start": 439,
                  "end": 454
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
                        "name": "r4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 478
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 482
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 483,
                          "end": 486
                        },
                        "optional": false,
                        "computed": false,
                        "start": 481,
                        "end": 486
                      },
                      "definite": false,
                      "start": 476,
                      "end": 486
                    }
                  ],
                  "declare": false,
                  "start": 472,
                  "end": 487
                }
              ],
              "start": 199,
              "end": 493
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 186,
            "end": 493
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
                        "start": 506,
                        "end": 507
                      },
                      "typeArguments": null,
                      "start": 506,
                      "end": 507
                    },
                    "start": 504,
                    "end": 507
                  },
                  "start": 503,
                  "end": 507
                },
                "init": null,
                "definite": false,
                "start": 503,
                "end": 507
              }
            ],
            "declare": false,
            "start": 499,
            "end": 508
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 519
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 522,
                    "end": 523
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 527
                  },
                  "optional": false,
                  "computed": false,
                  "start": 522,
                  "end": 527
                },
                "definite": false,
                "start": 517,
                "end": 527
              }
            ],
            "declare": false,
            "start": 513,
            "end": 528
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 540
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 544
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 548
                  },
                  "optional": false,
                  "computed": false,
                  "start": 543,
                  "end": 548
                },
                "definite": false,
                "start": 538,
                "end": 548
              }
            ],
            "declare": false,
            "start": 534,
            "end": 549
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 571,
                        "end": 572
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 573,
                            "end": 579
                          }
                        ],
                        "start": 572,
                        "end": 580
                      },
                      "start": 571,
                      "end": 580
                    },
                    "start": 569,
                    "end": 580
                  },
                  "start": 568,
                  "end": 580
                },
                "init": null,
                "definite": false,
                "start": 568,
                "end": 580
              }
            ],
            "declare": false,
            "start": 564,
            "end": 581
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 592
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 595,
                    "end": 596
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 597,
                    "end": 600
                  },
                  "optional": false,
                  "computed": false,
                  "start": 595,
                  "end": 600
                },
                "definite": false,
                "start": 590,
                "end": 600
              }
            ],
            "declare": false,
            "start": 586,
            "end": 601
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 613
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 616,
                    "end": 617
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
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
                "start": 611,
                "end": 621
              }
            ],
            "declare": false,
            "start": 607,
            "end": 622
          }
        ],
        "start": 76,
        "end": 633
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 64,
      "end": 633
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 633
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 64,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 89,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 135,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 142,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 186,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 209,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 216,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 350,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 357,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 439,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 534,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 607,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  }
]
```
