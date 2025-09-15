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
        "start": 78,
        "end": 79
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
              "start": 86,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 91,
                "end": 97
              },
              "start": 89,
              "end": 97
            },
            "accessibility": null,
            "static": false,
            "start": 86,
            "end": 98
          }
        ],
        "start": 80,
        "end": 100
      },
      "declare": false,
      "start": 68,
      "end": 100
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
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
              "start": 120,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 125,
                "end": 131
              },
              "start": 123,
              "end": 131
            },
            "accessibility": null,
            "static": false,
            "start": 120,
            "end": 132
          }
        ],
        "start": 114,
        "end": 134
      },
      "declare": false,
      "start": 102,
      "end": 134
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 157
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 159,
                "end": 166
              },
              "start": 157,
              "end": 166
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 167
          }
        ],
        "start": 148,
        "end": 169
      },
      "declare": false,
      "start": 136,
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
                  "start": 178,
                  "end": 179
                },
                "typeArguments": null,
                "start": 178,
                "end": 179
              },
              "start": 176,
              "end": 179
            },
            "start": 175,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 179
        }
      ],
      "declare": false,
      "start": 171,
      "end": 180
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
            "start": 185,
            "end": 187
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 191
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 195
            },
            "optional": false,
            "computed": false,
            "start": 190,
            "end": 195
          },
          "definite": false,
          "start": 185,
          "end": 195
        }
      ],
      "declare": false,
      "start": 181,
      "end": 195
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
            "start": 200,
            "end": 202
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 210
            },
            "optional": false,
            "computed": false,
            "start": 205,
            "end": 210
          },
          "definite": false,
          "start": 200,
          "end": 210
        }
      ],
      "declare": false,
      "start": 196,
      "end": 211
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
            "start": 216,
            "end": 218
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 226
            },
            "optional": false,
            "computed": false,
            "start": 221,
            "end": 226
          },
          "definite": false,
          "start": 216,
          "end": 226
        }
      ],
      "declare": false,
      "start": 212,
      "end": 227
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 262
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
              "start": 263,
              "end": 264
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 264
          }
        ],
        "start": 262,
        "end": 265
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
              "start": 272,
              "end": 275
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
                  "start": 277,
                  "end": 278
                },
                "typeArguments": null,
                "start": 277,
                "end": 278
              },
              "start": 275,
              "end": 278
            },
            "accessibility": null,
            "static": false,
            "start": 272,
            "end": 279
          }
        ],
        "start": 266,
        "end": 281
      },
      "declare": false,
      "start": 251,
      "end": 281
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 294
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
              "start": 295,
              "end": 296
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 295,
            "end": 296
          }
        ],
        "start": 294,
        "end": 297
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
              "start": 304,
              "end": 307
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
                  "start": 309,
                  "end": 310
                },
                "typeArguments": null,
                "start": 309,
                "end": 310
              },
              "start": 307,
              "end": 310
            },
            "accessibility": null,
            "static": false,
            "start": 304,
            "end": 311
          }
        ],
        "start": 298,
        "end": 313
      },
      "declare": false,
      "start": 283,
      "end": 313
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 326
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
              "start": 327,
              "end": 328
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 327,
            "end": 328
          }
        ],
        "start": 326,
        "end": 329
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
              "start": 336,
              "end": 339
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
                  "start": 341,
                  "end": 342
                },
                "typeArguments": null,
                "start": 341,
                "end": 342
              },
              "start": 339,
              "end": 342
            },
            "accessibility": null,
            "static": false,
            "start": 336,
            "end": 343
          }
        ],
        "start": 330,
        "end": 345
      },
      "declare": false,
      "start": 315,
      "end": 345
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
                  "start": 354,
                  "end": 355
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 356,
                      "end": 362
                    }
                  ],
                  "start": 355,
                  "end": 363
                },
                "start": 354,
                "end": 363
              },
              "start": 352,
              "end": 363
            },
            "start": 351,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 351,
          "end": 363
        }
      ],
      "declare": false,
      "start": 347,
      "end": 364
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
            "start": 369,
            "end": 371
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 379
            },
            "optional": false,
            "computed": false,
            "start": 374,
            "end": 379
          },
          "definite": false,
          "start": 369,
          "end": 379
        }
      ],
      "declare": false,
      "start": 365,
      "end": 379
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 386
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 390
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 394
            },
            "optional": false,
            "computed": false,
            "start": 389,
            "end": 394
          },
          "definite": false,
          "start": 384,
          "end": 394
        }
      ],
      "declare": false,
      "start": 380,
      "end": 395
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 402
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 406
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 410
            },
            "optional": false,
            "computed": false,
            "start": 405,
            "end": 410
          },
          "definite": false,
          "start": 400,
          "end": 410
        }
      ],
      "declare": false,
      "start": 396,
      "end": 411
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 478
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
              "start": 495,
              "end": 496
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
                    "start": 507,
                    "end": 510
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 512,
                      "end": 518
                    },
                    "start": 510,
                    "end": 518
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 507,
                  "end": 519
                }
              ],
              "start": 497,
              "end": 525
            },
            "declare": false,
            "start": 485,
            "end": 525
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 542
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
                    "start": 553,
                    "end": 556
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 558,
                      "end": 564
                    },
                    "start": 556,
                    "end": 564
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 553,
                  "end": 565
                }
              ],
              "start": 543,
              "end": 571
            },
            "declare": false,
            "start": 531,
            "end": 571
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 588
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 599,
                    "end": 602
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 604,
                      "end": 611
                    },
                    "start": 602,
                    "end": 611
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 599,
                  "end": 612
                }
              ],
              "start": 589,
              "end": 618
            },
            "declare": false,
            "start": 577,
            "end": 618
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
                        "start": 631,
                        "end": 632
                      },
                      "typeArguments": null,
                      "start": 631,
                      "end": 632
                    },
                    "start": 629,
                    "end": 632
                  },
                  "start": 628,
                  "end": 632
                },
                "init": null,
                "definite": false,
                "start": 628,
                "end": 632
              }
            ],
            "declare": false,
            "start": 624,
            "end": 633
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
                  "start": 642,
                  "end": 644
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 648
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 652
                  },
                  "optional": false,
                  "computed": false,
                  "start": 647,
                  "end": 652
                },
                "definite": false,
                "start": 642,
                "end": 652
              }
            ],
            "declare": false,
            "start": 638,
            "end": 653
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
                  "start": 680,
                  "end": 682
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 685,
                    "end": 686
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 687,
                    "end": 690
                  },
                  "optional": false,
                  "computed": false,
                  "start": 685,
                  "end": 690
                },
                "definite": false,
                "start": 680,
                "end": 690
              }
            ],
            "declare": false,
            "start": 676,
            "end": 691
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
                  "start": 743,
                  "end": 745
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 748,
                    "end": 749
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 750,
                    "end": 753
                  },
                  "optional": false,
                  "computed": false,
                  "start": 748,
                  "end": 753
                },
                "definite": false,
                "start": 743,
                "end": 753
              }
            ],
            "declare": false,
            "start": 739,
            "end": 754
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 797
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
                    "start": 798,
                    "end": 799
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 798,
                  "end": 799
                }
              ],
              "start": 797,
              "end": 800
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
                    "start": 811,
                    "end": 814
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
                        "start": 816,
                        "end": 817
                      },
                      "typeArguments": null,
                      "start": 816,
                      "end": 817
                    },
                    "start": 814,
                    "end": 817
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 811,
                  "end": 818
                }
              ],
              "start": 801,
              "end": 824
            },
            "declare": false,
            "start": 786,
            "end": 824
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 840,
              "end": 841
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
                    "start": 842,
                    "end": 843
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 842,
                  "end": 843
                }
              ],
              "start": 841,
              "end": 844
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
                    "start": 855,
                    "end": 858
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
                        "start": 860,
                        "end": 861
                      },
                      "typeArguments": null,
                      "start": 860,
                      "end": 861
                    },
                    "start": 858,
                    "end": 861
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 855,
                  "end": 862
                }
              ],
              "start": 845,
              "end": 868
            },
            "declare": false,
            "start": 830,
            "end": 868
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 885
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
                    "start": 886,
                    "end": 887
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 886,
                  "end": 887
                }
              ],
              "start": 885,
              "end": 888
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
                    "start": 899,
                    "end": 902
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
                        "start": 904,
                        "end": 905
                      },
                      "typeArguments": null,
                      "start": 904,
                      "end": 905
                    },
                    "start": 902,
                    "end": 905
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 899,
                  "end": 906
                }
              ],
              "start": 889,
              "end": 912
            },
            "declare": false,
            "start": 874,
            "end": 912
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
                        "start": 925,
                        "end": 926
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 927,
                            "end": 933
                          }
                        ],
                        "start": 926,
                        "end": 934
                      },
                      "start": 925,
                      "end": 934
                    },
                    "start": 923,
                    "end": 934
                  },
                  "start": 922,
                  "end": 934
                },
                "init": null,
                "definite": false,
                "start": 922,
                "end": 934
              }
            ],
            "declare": false,
            "start": 918,
            "end": 935
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
                  "start": 944,
                  "end": 946
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 949,
                    "end": 950
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 951,
                    "end": 954
                  },
                  "optional": false,
                  "computed": false,
                  "start": 949,
                  "end": 954
                },
                "definite": false,
                "start": 944,
                "end": 954
              }
            ],
            "declare": false,
            "start": 940,
            "end": 954
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 981,
                  "end": 983
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 987
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 988,
                    "end": 991
                  },
                  "optional": false,
                  "computed": false,
                  "start": 986,
                  "end": 991
                },
                "definite": false,
                "start": 981,
                "end": 991
              }
            ],
            "declare": false,
            "start": 977,
            "end": 992
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1044,
                  "end": 1046
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1049,
                    "end": 1050
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1054
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1049,
                  "end": 1054
                },
                "definite": false,
                "start": 1044,
                "end": 1054
              }
            ],
            "declare": false,
            "start": 1040,
            "end": 1055
          }
        ],
        "start": 479,
        "end": 1083
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 467,
      "end": 1083
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 1083
}
```
