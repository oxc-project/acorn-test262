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
        "name": "c",
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
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 45,
                "end": 52
              },
              "abstract": false,
              "declare": false,
              "start": 37,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 30,
            "end": 52
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 71
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
                      "start": 72,
                      "end": 73
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 72,
                    "end": 73
                  }
                ],
                "start": 71,
                "end": 74
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 75,
                "end": 82
              },
              "abstract": false,
              "declare": false,
              "start": 64,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 82
          }
        ],
        "start": 24,
        "end": 84
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 12,
      "end": 84
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 92
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
              "start": 93,
              "end": 94
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 94
          }
        ],
        "start": 92,
        "end": 95
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 96,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 85,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 130
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
            },
            "typeArguments": null,
            "start": 134,
            "end": 135
          },
          "start": 134,
          "end": 137
        },
        "start": 132,
        "end": 137
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 157
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 152,
                  "end": 159
                }
              ],
              "start": 151,
              "end": 160
            },
            "start": 144,
            "end": 161
          }
        ],
        "start": 138,
        "end": 163
      },
      "expression": false,
      "start": 118,
      "end": 163
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 177
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 194,
                  "end": 201
                }
              ],
              "start": 193,
              "end": 202
            },
            "start": 186,
            "end": 203
          }
        ],
        "start": 180,
        "end": 205
      },
      "expression": false,
      "start": 164,
      "end": 205
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 238
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 243
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 244,
                "end": 245
              },
              "start": 242,
              "end": 245
            },
            "typeArguments": null,
            "start": 242,
            "end": 245
          },
          "start": 242,
          "end": 247
        },
        "start": 240,
        "end": 247
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 269
                    },
                    "optional": false,
                    "computed": false,
                    "start": 266,
                    "end": 269
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 262,
                  "end": 271
                }
              ],
              "start": 261,
              "end": 272
            },
            "start": 254,
            "end": 273
          }
        ],
        "start": 248,
        "end": 275
      },
      "expression": false,
      "start": 225,
      "end": 275
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 289
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
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 306
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 308
              },
              "optional": false,
              "computed": false,
              "start": 305,
              "end": 308
            },
            "start": 298,
            "end": 309
          }
        ],
        "start": 292,
        "end": 311
      },
      "expression": false,
      "start": 276,
      "end": 311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 363
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 369,
                  "end": 375
                }
              ],
              "start": 368,
              "end": 376
            },
            "start": 367,
            "end": 376
          },
          "start": 367,
          "end": 378
        },
        "start": 365,
        "end": 378
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 398
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 399,
                        "end": 405
                      }
                    ],
                    "start": 398,
                    "end": 406
                  },
                  "arguments": [],
                  "start": 393,
                  "end": 408
                }
              ],
              "start": 392,
              "end": 409
            },
            "start": 385,
            "end": 410
          }
        ],
        "start": 379,
        "end": 412
      },
      "expression": false,
      "start": 350,
      "end": 412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 426
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 448
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 449,
                        "end": 455
                      }
                    ],
                    "start": 448,
                    "end": 456
                  },
                  "arguments": [],
                  "start": 443,
                  "end": 458
                }
              ],
              "start": 442,
              "end": 459
            },
            "start": 435,
            "end": 460
          }
        ],
        "start": 429,
        "end": 462
      },
      "expression": false,
      "start": 413,
      "end": 462
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 515
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 520
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 522
              },
              "start": 519,
              "end": 522
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 523,
                  "end": 529
                }
              ],
              "start": 522,
              "end": 530
            },
            "start": 519,
            "end": 530
          },
          "start": 519,
          "end": 532
        },
        "start": 517,
        "end": 532
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 552
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 554
                    },
                    "optional": false,
                    "computed": false,
                    "start": 551,
                    "end": 554
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 555,
                        "end": 561
                      }
                    ],
                    "start": 554,
                    "end": 562
                  },
                  "arguments": [],
                  "start": 547,
                  "end": 564
                }
              ],
              "start": 546,
              "end": 565
            },
            "start": 539,
            "end": 566
          }
        ],
        "start": 533,
        "end": 568
      },
      "expression": false,
      "start": 502,
      "end": 568
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 582
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 604
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 606
                    },
                    "optional": false,
                    "computed": false,
                    "start": 603,
                    "end": 606
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 607,
                        "end": 613
                      }
                    ],
                    "start": 606,
                    "end": 614
                  },
                  "arguments": [],
                  "start": 599,
                  "end": 616
                }
              ],
              "start": 598,
              "end": 617
            },
            "start": 591,
            "end": 618
          }
        ],
        "start": 585,
        "end": 620
      },
      "expression": false,
      "start": 569,
      "end": 620
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 662
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
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
            "start": 667,
            "end": 672
          },
          "start": 666,
          "end": 675
        },
        "start": 664,
        "end": 675
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 700,
                      "end": 701
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 696,
                    "end": 703
                  },
                  "id": null,
                  "generator": false,
                  "start": 690,
                  "end": 703
                }
              ],
              "start": 689,
              "end": 704
            },
            "start": 682,
            "end": 705
          }
        ],
        "start": 676,
        "end": 707
      },
      "expression": false,
      "start": 649,
      "end": 707
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 722
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 750
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 745,
                    "end": 752
                  },
                  "id": null,
                  "generator": false,
                  "start": 739,
                  "end": 752
                }
              ],
              "start": 738,
              "end": 753
            },
            "start": 731,
            "end": 754
          }
        ],
        "start": 725,
        "end": 756
      },
      "expression": false,
      "start": 708,
      "end": 756
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 756
}
```
