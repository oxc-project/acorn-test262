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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 83
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
              "start": 90,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 95,
                "end": 101
              },
              "start": 93,
              "end": 101
            },
            "accessibility": null,
            "static": false,
            "start": 90,
            "end": 102
          }
        ],
        "start": 84,
        "end": 104
      },
      "declare": false,
      "start": 72,
      "end": 104
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 117
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
              "start": 124,
              "end": 127
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 129,
                "end": 135
              },
              "start": 127,
              "end": 135
            },
            "accessibility": null,
            "static": false,
            "start": 124,
            "end": 136
          }
        ],
        "start": 118,
        "end": 138
      },
      "declare": false,
      "start": 106,
      "end": 138
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
                  "start": 147,
                  "end": 148
                },
                "typeArguments": null,
                "start": 147,
                "end": 148
              },
              "start": 145,
              "end": 148
            },
            "start": 144,
            "end": 148
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 148
        }
      ],
      "declare": false,
      "start": 140,
      "end": 149
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
            "start": 154,
            "end": 156
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 164
            },
            "optional": false,
            "computed": false,
            "start": 159,
            "end": 164
          },
          "definite": false,
          "start": 154,
          "end": 164
        }
      ],
      "declare": false,
      "start": 150,
      "end": 164
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
            "start": 169,
            "end": 171
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 179
            },
            "optional": false,
            "computed": false,
            "start": 174,
            "end": 179
          },
          "definite": false,
          "start": 169,
          "end": 179
        }
      ],
      "declare": false,
      "start": 165,
      "end": 180
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 215
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
              "start": 216,
              "end": 217
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 217
          }
        ],
        "start": 215,
        "end": 218
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 230,
                "end": 236
              },
              "start": 228,
              "end": 236
            },
            "accessibility": null,
            "static": false,
            "start": 225,
            "end": 237
          },
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
              "start": 242,
              "end": 245
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
                  "start": 247,
                  "end": 248
                },
                "typeArguments": null,
                "start": 247,
                "end": 248
              },
              "start": 245,
              "end": 248
            },
            "accessibility": null,
            "static": false,
            "start": 242,
            "end": 249
          }
        ],
        "start": 219,
        "end": 251
      },
      "declare": false,
      "start": 204,
      "end": 251
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 264
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
              "start": 265,
              "end": 266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 265,
            "end": 266
          }
        ],
        "start": 264,
        "end": 267
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
              "start": 274,
              "end": 277
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
                  "start": 279,
                  "end": 280
                },
                "typeArguments": null,
                "start": 279,
                "end": 280
              },
              "start": 277,
              "end": 280
            },
            "accessibility": null,
            "static": false,
            "start": 274,
            "end": 281
          }
        ],
        "start": 268,
        "end": 283
      },
      "declare": false,
      "start": 253,
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
                  "start": 292,
                  "end": 293
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 294,
                      "end": 300
                    }
                  ],
                  "start": 293,
                  "end": 301
                },
                "start": 292,
                "end": 301
              },
              "start": 290,
              "end": 301
            },
            "start": 289,
            "end": 301
          },
          "init": null,
          "definite": false,
          "start": 289,
          "end": 301
        }
      ],
      "declare": false,
      "start": 285,
      "end": 302
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
            "start": 307,
            "end": 309
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 317
            },
            "optional": false,
            "computed": false,
            "start": 312,
            "end": 317
          },
          "definite": false,
          "start": 307,
          "end": 317
        }
      ],
      "declare": false,
      "start": 303,
      "end": 317
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
            "start": 322,
            "end": 324
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 328
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 332
            },
            "optional": false,
            "computed": false,
            "start": 327,
            "end": 332
          },
          "definite": false,
          "start": 322,
          "end": 332
        }
      ],
      "declare": false,
      "start": 318,
      "end": 333
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 400
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 418
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
                    "start": 429,
                    "end": 432
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 434,
                      "end": 440
                    },
                    "start": 432,
                    "end": 440
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 429,
                  "end": 441
                }
              ],
              "start": 419,
              "end": 447
            },
            "declare": false,
            "start": 407,
            "end": 447
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
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
                    "start": 475,
                    "end": 478
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 480,
                      "end": 486
                    },
                    "start": 478,
                    "end": 486
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 475,
                  "end": 487
                }
              ],
              "start": 465,
              "end": 493
            },
            "declare": false,
            "start": 453,
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
                  "start": 555,
                  "end": 557
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 560,
                    "end": 561
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 562,
                    "end": 565
                  },
                  "optional": false,
                  "computed": false,
                  "start": 560,
                  "end": 565
                },
                "definite": false,
                "start": 555,
                "end": 565
              }
            ],
            "declare": false,
            "start": 551,
            "end": 566
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 608
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
                    "start": 609,
                    "end": 610
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 609,
                  "end": 610
                }
              ],
              "start": 608,
              "end": 611
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
                    "start": 622,
                    "end": 625
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
                        "start": 627,
                        "end": 628
                      },
                      "typeArguments": null,
                      "start": 627,
                      "end": 628
                    },
                    "start": 625,
                    "end": 628
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 622,
                  "end": 629
                }
              ],
              "start": 612,
              "end": 635
            },
            "declare": false,
            "start": 597,
            "end": 635
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 652
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
                    "start": 653,
                    "end": 654
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 653,
                  "end": 654
                }
              ],
              "start": 652,
              "end": 655
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
                    "start": 666,
                    "end": 669
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
                        "start": 671,
                        "end": 672
                      },
                      "typeArguments": null,
                      "start": 671,
                      "end": 672
                    },
                    "start": 669,
                    "end": 672
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 666,
                  "end": 673
                }
              ],
              "start": 656,
              "end": 679
            },
            "declare": false,
            "start": 641,
            "end": 679
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
                        "start": 692,
                        "end": 693
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 694,
                            "end": 700
                          }
                        ],
                        "start": 693,
                        "end": 701
                      },
                      "start": 692,
                      "end": 701
                    },
                    "start": 690,
                    "end": 701
                  },
                  "start": 689,
                  "end": 701
                },
                "init": null,
                "definite": false,
                "start": 689,
                "end": 701
              }
            ],
            "declare": false,
            "start": 685,
            "end": 702
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
                  "start": 711,
                  "end": 713
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 716,
                    "end": 717
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 718,
                    "end": 721
                  },
                  "optional": false,
                  "computed": false,
                  "start": 716,
                  "end": 721
                },
                "definite": false,
                "start": 711,
                "end": 721
              }
            ],
            "declare": false,
            "start": 707,
            "end": 721
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
                  "start": 748,
                  "end": 750
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 753,
                    "end": 754
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 758
                  },
                  "optional": false,
                  "computed": false,
                  "start": 753,
                  "end": 758
                },
                "definite": false,
                "start": 748,
                "end": 758
              }
            ],
            "declare": false,
            "start": 744,
            "end": 759
          }
        ],
        "start": 401,
        "end": 786
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 389,
      "end": 786
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 72,
  "end": 786
}
```
