__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringContains",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 41
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 58
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 60,
            "end": 76
          }
        ],
        "start": 41,
        "end": 77
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 90
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 95
                },
                "typeArguments": null,
                "start": 94,
                "end": 95
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 103,
                  "end": 109
                },
                "start": 103,
                "end": 109
              },
              "optional": false,
              "readonly": null,
              "start": 86,
              "end": 111
            },
            {
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
                          "start": 126,
                          "end": 132
                        },
                        "start": 124,
                        "end": 132
                      },
                      "start": 121,
                      "end": 132
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "false",
                        "raw": "'false'",
                        "start": 135,
                        "end": 142
                      },
                      "start": 135,
                      "end": 142
                    },
                    "start": 133,
                    "end": 142
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 120,
                  "end": 142
                }
              ],
              "start": 118,
              "end": 144
            }
          ],
          "start": 86,
          "end": 144
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "typeArguments": null,
          "start": 149,
          "end": 150
        },
        "start": 80,
        "end": 151
      },
      "declare": false,
      "start": 22,
      "end": 151
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectHasKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 170
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 172
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 171,
            "end": 172
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 175
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 184,
              "end": 190
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 174,
            "end": 190
          }
        ],
        "start": 170,
        "end": 191
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringContains",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 208
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 216
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 224
                      },
                      "typeArguments": null,
                      "start": 223,
                      "end": 224
                    },
                    "start": 217,
                    "end": 224
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 226,
                    "end": 232
                  }
                ],
                "start": 216,
                "end": 233
              },
              "start": 209,
              "end": 233
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              },
              "typeArguments": null,
              "start": 235,
              "end": 236
            }
          ],
          "start": 208,
          "end": 237
        },
        "start": 194,
        "end": 237
      },
      "declare": false,
      "start": 153,
      "end": 237
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "First",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 249
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
              "start": 250,
              "end": 251
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 250,
            "end": 251
          }
        ],
        "start": 249,
        "end": 252
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 267
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 269
              },
              "typeArguments": null,
              "start": 268,
              "end": 269
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "0",
                "raw": "'0'",
                "start": 271,
                "end": 274
              },
              "start": 271,
              "end": 274
            }
          ],
          "start": 267,
          "end": 275
        },
        "start": 255,
        "end": 275
      },
      "declare": false,
      "start": 239,
      "end": 276
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 306,
        "end": 308
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 323
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 329,
                      "end": 335
                    },
                    "start": 327,
                    "end": 335
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 326,
                  "end": 335
                }
              ],
              "start": 324,
              "end": 337
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 339,
                "end": 342
              },
              "start": 339,
              "end": 342
            }
          ],
          "start": 323,
          "end": 343
        },
        "start": 311,
        "end": 343
      },
      "declare": false,
      "start": 301,
      "end": 344
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 363
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 378
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 382
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 384,
                      "end": 390
                    },
                    "start": 382,
                    "end": 390
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 381,
                  "end": 390
                }
              ],
              "start": 379,
              "end": 392
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 394,
                "end": 397
              },
              "start": 394,
              "end": 397
            }
          ],
          "start": 378,
          "end": 398
        },
        "start": 366,
        "end": 398
      },
      "declare": false,
      "start": 356,
      "end": 399
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 511
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 513
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 522,
              "end": 528
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 512,
            "end": 528
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 531
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 540,
              "end": 546
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 530,
            "end": 546
          }
        ],
        "start": 511,
        "end": 547
      },
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
                "start": 551,
                "end": 552
              },
              "typeArguments": null,
              "start": 551,
              "end": 552
            },
            "start": 549,
            "end": 552
          },
          "start": 548,
          "end": 552
        },
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
                "start": 557,
                "end": 558
              },
              "typeArguments": null,
              "start": 557,
              "end": 558
            },
            "start": 555,
            "end": 558
          },
          "start": 554,
          "end": 558
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 564,
            "end": 565
          },
          "constraint": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 570
                },
                "typeArguments": null,
                "start": 569,
                "end": 570
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 574
                },
                "typeArguments": null,
                "start": 573,
                "end": 574
              }
            ],
            "start": 569,
            "end": 574
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 577,
            "end": 580
          },
          "optional": false,
          "readonly": null,
          "start": 561,
          "end": 582
        },
        "start": 559,
        "end": 582
      },
      "body": null,
      "expression": false,
      "start": 492,
      "end": 583
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 596
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 598
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 607,
              "end": 613
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 597,
            "end": 613
          }
        ],
        "start": 596,
        "end": 614
      },
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
                "start": 618,
                "end": 619
              },
              "typeArguments": null,
              "start": 618,
              "end": 619
            },
            "start": 616,
            "end": 619
          },
          "start": 615,
          "end": 619
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 636
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 638
                },
                {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 640,
                  "end": 643
                }
              ],
              "optional": false,
              "start": 634,
              "end": 644
            },
            "start": 627,
            "end": 645
          }
        ],
        "start": 621,
        "end": 647
      },
      "expression": false,
      "start": 585,
      "end": 647
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 660
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "value": "a",
                    "raw": "'a'",
                    "start": 664,
                    "end": 667
                  },
                  "start": 664,
                  "end": 667
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 670,
                    "end": 673
                  },
                  "start": 670,
                  "end": 673
                }
              ],
              "start": 664,
              "end": 673
            },
            "start": 662,
            "end": 673
          },
          "start": 661,
          "end": 673
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 690
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 692
                }
              ],
              "optional": false,
              "start": 688,
              "end": 693
            },
            "start": 681,
            "end": 694
          }
        ],
        "start": 675,
        "end": 696
      },
      "expression": false,
      "start": 649,
      "end": 696
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 696
}
```
