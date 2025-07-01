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
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 115
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
                "start": 139,
                "end": 140
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
                      "start": 151,
                      "end": 154
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 156,
                        "end": 162
                      },
                      "start": 154,
                      "end": 162
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 151,
                    "end": 163
                  }
                ],
                "start": 141,
                "end": 169
              },
              "declare": false,
              "start": 129,
              "end": 169
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 122,
            "end": 169
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
                        "start": 182,
                        "end": 183
                      },
                      "typeArguments": null,
                      "start": 182,
                      "end": 183
                    },
                    "start": 180,
                    "end": 183
                  },
                  "start": 179,
                  "end": 183
                },
                "init": null,
                "definite": false,
                "start": 179,
                "end": 183
              }
            ],
            "declare": false,
            "start": 175,
            "end": 184
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
                  "start": 193,
                  "end": 195
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 203
                  },
                  "optional": false,
                  "computed": false,
                  "start": 198,
                  "end": 203
                },
                "definite": false,
                "start": 193,
                "end": 203
              }
            ],
            "declare": false,
            "start": 189,
            "end": 203
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
                  "start": 212,
                  "end": 214
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 218
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 222
                  },
                  "optional": false,
                  "computed": false,
                  "start": 217,
                  "end": 222
                },
                "definite": false,
                "start": 212,
                "end": 222
              }
            ],
            "declare": false,
            "start": 208,
            "end": 223
          }
        ],
        "start": 116,
        "end": 225
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 106,
      "end": 225
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 236
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
                "start": 260,
                "end": 261
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
                      "start": 272,
                      "end": 275
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 277,
                        "end": 283
                      },
                      "start": 275,
                      "end": 283
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 272,
                    "end": 284
                  }
                ],
                "start": 262,
                "end": 290
              },
              "declare": false,
              "start": 250,
              "end": 290
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 243,
            "end": 290
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
                        "start": 303,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 303,
                      "end": 304
                    },
                    "start": 301,
                    "end": 304
                  },
                  "start": 300,
                  "end": 304
                },
                "init": null,
                "definite": false,
                "start": 300,
                "end": 304
              }
            ],
            "declare": false,
            "start": 296,
            "end": 305
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
                  "start": 314,
                  "end": 316
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 320
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 324
                  },
                  "optional": false,
                  "computed": false,
                  "start": 319,
                  "end": 324
                },
                "definite": false,
                "start": 314,
                "end": 324
              }
            ],
            "declare": false,
            "start": 310,
            "end": 324
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
                  "start": 333,
                  "end": 335
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 339
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 343
                  },
                  "optional": false,
                  "computed": false,
                  "start": 338,
                  "end": 343
                },
                "definite": false,
                "start": 333,
                "end": 343
              }
            ],
            "declare": false,
            "start": 329,
            "end": 344
          }
        ],
        "start": 237,
        "end": 346
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 227,
      "end": 346
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 414
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 437
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
                        "start": 465,
                        "end": 466
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
                              "start": 481,
                              "end": 484
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 486,
                                "end": 492
                              },
                              "start": 484,
                              "end": 492
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 481,
                            "end": 493
                          }
                        ],
                        "start": 467,
                        "end": 503
                      },
                      "declare": false,
                      "start": 455,
                      "end": 503
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 448,
                    "end": 503
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
                                "start": 520,
                                "end": 521
                              },
                              "typeArguments": null,
                              "start": 520,
                              "end": 521
                            },
                            "start": 518,
                            "end": 521
                          },
                          "start": 517,
                          "end": 521
                        },
                        "init": null,
                        "definite": false,
                        "start": 517,
                        "end": 521
                      }
                    ],
                    "declare": false,
                    "start": 513,
                    "end": 522
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
                          "start": 535,
                          "end": 537
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 540,
                            "end": 541
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 542,
                            "end": 545
                          },
                          "optional": false,
                          "computed": false,
                          "start": 540,
                          "end": 545
                        },
                        "definite": false,
                        "start": 535,
                        "end": 545
                      }
                    ],
                    "declare": false,
                    "start": 531,
                    "end": 545
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
                          "start": 558,
                          "end": 560
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 563,
                            "end": 564
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 565,
                            "end": 568
                          },
                          "optional": false,
                          "computed": false,
                          "start": 563,
                          "end": 568
                        },
                        "definite": false,
                        "start": 558,
                        "end": 568
                      }
                    ],
                    "declare": false,
                    "start": 554,
                    "end": 569
                  }
                ],
                "start": 438,
                "end": 575
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 428,
              "end": 575
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 421,
            "end": 575
          }
        ],
        "start": 415,
        "end": 577
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 405,
      "end": 577
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 586,
        "end": 588
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 611
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
                        "start": 639,
                        "end": 640
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
                              "start": 655,
                              "end": 658
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 660,
                                "end": 666
                              },
                              "start": 658,
                              "end": 666
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 655,
                            "end": 667
                          }
                        ],
                        "start": 641,
                        "end": 677
                      },
                      "declare": false,
                      "start": 629,
                      "end": 677
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 622,
                    "end": 677
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
                                "start": 694,
                                "end": 695
                              },
                              "typeArguments": null,
                              "start": 694,
                              "end": 695
                            },
                            "start": 692,
                            "end": 695
                          },
                          "start": 691,
                          "end": 695
                        },
                        "init": null,
                        "definite": false,
                        "start": 691,
                        "end": 695
                      }
                    ],
                    "declare": false,
                    "start": 687,
                    "end": 696
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
                          "start": 709,
                          "end": 711
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 714,
                            "end": 715
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 716,
                            "end": 719
                          },
                          "optional": false,
                          "computed": false,
                          "start": 714,
                          "end": 719
                        },
                        "definite": false,
                        "start": 709,
                        "end": 719
                      }
                    ],
                    "declare": false,
                    "start": 705,
                    "end": 719
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
                          "start": 732,
                          "end": 734
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 737,
                            "end": 738
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 739,
                            "end": 742
                          },
                          "optional": false,
                          "computed": false,
                          "start": 737,
                          "end": 742
                        },
                        "definite": false,
                        "start": 732,
                        "end": 742
                      }
                    ],
                    "declare": false,
                    "start": 728,
                    "end": 743
                  }
                ],
                "start": 612,
                "end": 749
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 602,
              "end": 749
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 595,
            "end": 749
          }
        ],
        "start": 589,
        "end": 751
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 579,
      "end": 751
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 751
}
```
