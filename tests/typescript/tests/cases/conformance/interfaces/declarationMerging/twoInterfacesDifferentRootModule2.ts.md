__ESTREE_TEST__:PASS:
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
