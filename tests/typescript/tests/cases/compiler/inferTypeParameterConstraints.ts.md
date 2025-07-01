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
        "name": "SubGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 35
      },
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
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                }
              ],
              "start": 49,
              "end": 52
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 52
          }
        ],
        "start": 35,
        "end": 53
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 57
        },
        "typeArguments": null,
        "start": 56,
        "end": 57
      },
      "declare": false,
      "start": 22,
      "end": 58
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsSub",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 70
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 81,
                "end": 84
              },
              "start": 81,
              "end": 86
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 86
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 98,
                "end": 101
              },
              "start": 98,
              "end": 103
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 88,
            "end": 103
          }
        ],
        "start": 70,
        "end": 104
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "typeArguments": null,
          "start": 107,
          "end": 108
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SubGuard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 129
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 131
                        },
                        "typeArguments": null,
                        "start": 130,
                        "end": 131
                      },
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "start": 132,
                        "end": 138
                      },
                      "start": 130,
                      "end": 139
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 148
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 147,
                        "end": 148
                      },
                      "start": 141,
                      "end": 148
                    }
                  ],
                  "start": 129,
                  "end": 149
                },
                "start": 121,
                "end": 149
              },
              "start": 118,
              "end": 149
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 155
                },
                "typeArguments": null,
                "start": 154,
                "end": 155
              },
              "start": 151,
              "end": 155
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 160,
                  "end": 163
                },
                "start": 160,
                "end": 165
              },
              "start": 157,
              "end": 165
            }
          ],
          "start": 117,
          "end": 166
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 170
          },
          "typeArguments": null,
          "start": 169,
          "end": 170
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 173,
          "end": 178
        },
        "start": 107,
        "end": 178
      },
      "declare": false,
      "start": 60,
      "end": 179
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E0",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 188
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsSub",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 196
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 198,
                    "end": 199
                  },
                  "start": 198,
                  "end": 199
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 201,
                    "end": 202
                  },
                  "start": 201,
                  "end": 202
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 204,
                    "end": 205
                  },
                  "start": 204,
                  "end": 205
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 207,
                    "end": 208
                  },
                  "start": 207,
                  "end": 208
                }
              ],
              "start": 197,
              "end": 209
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 212,
                    "end": 213
                  },
                  "start": 212,
                  "end": 213
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 215,
                    "end": 216
                  },
                  "start": 215,
                  "end": 216
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 218,
                    "end": 219
                  },
                  "start": 218,
                  "end": 219
                }
              ],
              "start": 211,
              "end": 220
            }
          ],
          "start": 196,
          "end": 221
        },
        "start": 191,
        "end": 221
      },
      "declare": false,
      "start": 181,
      "end": 222
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 251
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 255,
                "end": 256
              },
              "start": 255,
              "end": 256
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 258,
                "end": 259
              },
              "start": 258,
              "end": 259
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 261,
                "end": 262
              },
              "start": 261,
              "end": 262
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 264,
                "end": 265
              },
              "start": 264,
              "end": 265
            }
          ],
          "start": 254,
          "end": 266
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 286
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 285,
                  "end": 286
                },
                "start": 279,
                "end": 286
              },
              "start": 276,
              "end": 286
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 288,
                "end": 289
              },
              "start": 288,
              "end": 289
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 291,
                "end": 292
              },
              "start": 291,
              "end": 292
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 294,
                "end": 295
              },
              "start": 294,
              "end": 295
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 300,
                  "end": 303
                },
                "start": 300,
                "end": 305
              },
              "start": 297,
              "end": 305
            }
          ],
          "start": 275,
          "end": 306
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 310
          },
          "typeArguments": null,
          "start": 309,
          "end": 310
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 313,
          "end": 318
        },
        "start": 254,
        "end": 318
      },
      "declare": false,
      "start": 244,
      "end": 319
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constrain",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 371
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
              "start": 372,
              "end": 373
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              },
              "typeArguments": null,
              "start": 382,
              "end": 383
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 372,
            "end": 383
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 385,
            "end": 386
          }
        ],
        "start": 371,
        "end": 387
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 390,
        "end": 397
      },
      "declare": false,
      "start": 357,
      "end": 398
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 408
      },
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
              "start": 409,
              "end": 410
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 409,
            "end": 410
          }
        ],
        "start": 408,
        "end": 411
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 415
          },
          "typeArguments": null,
          "start": 414,
          "end": 415
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constrain",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 433
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 440,
                  "end": 441
                },
                "start": 434,
                "end": 441
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 444
                },
                "typeArguments": null,
                "start": 443,
                "end": 444
              }
            ],
            "start": 433,
            "end": 445
          },
          "start": 424,
          "end": 445
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 449
          },
          "typeArguments": null,
          "start": 448,
          "end": 449
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 452,
          "end": 457
        },
        "start": 414,
        "end": 457
      },
      "declare": false,
      "start": 400,
      "end": 458
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 467
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 473
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 474,
              "end": 480
            }
          ],
          "start": 473,
          "end": 481
        },
        "start": 470,
        "end": 481
      },
      "declare": false,
      "start": 460,
      "end": 482
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 591
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 593
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 592,
            "end": 593
          }
        ],
        "start": 591,
        "end": 594
      },
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
              "name": "fake",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 613
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 617,
                    "end": 618
                  },
                  "typeArguments": null,
                  "start": 617,
                  "end": 618
                },
                "start": 615,
                "end": 618
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 635,
                        "end": 640
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 641,
                          "end": 643
                        }
                      ],
                      "start": 631,
                      "end": 644
                    },
                    "start": 625,
                    "end": 645
                  }
                ],
                "start": 619,
                "end": 649
              },
              "expression": false,
              "start": 613,
              "end": 649
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 599,
            "end": 649
          }
        ],
        "start": 595,
        "end": 651
      },
      "abstract": false,
      "declare": false,
      "start": 576,
      "end": 651
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Klass",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 664
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 666
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 665,
            "end": 666
          }
        ],
        "start": 664,
        "end": 667
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 685
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 687
            },
            "typeArguments": null,
            "start": 686,
            "end": 687
          }
        ],
        "start": 685,
        "end": 688
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "child",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 698
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 701,
              "end": 705
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 693,
            "end": 706
          }
        ],
        "start": 689,
        "end": 708
      },
      "abstract": false,
      "declare": false,
      "start": 653,
      "end": 708
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 726
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 728
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 727,
            "end": 728
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 731
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 749
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 750,
                      "end": 751
                    },
                    "typeArguments": null,
                    "start": 750,
                    "end": 751
                  }
                ],
                "start": 749,
                "end": 752
              },
              "start": 740,
              "end": 752
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 730,
            "end": 752
          }
        ],
        "start": 726,
        "end": 753
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 767
            },
            "typeArguments": null,
            "start": 766,
            "end": 767
          },
          "start": 763,
          "end": 767
        },
        "start": 756,
        "end": 767
      },
      "declare": false,
      "start": 710,
      "end": 768
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 774,
        "end": 783
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 785
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 784,
            "end": 785
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 788
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 787,
            "end": 788
          }
        ],
        "start": 783,
        "end": 789
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 793
          },
          "typeArguments": null,
          "start": 792,
          "end": 793
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 813
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 815
                },
                "typeArguments": null,
                "start": 814,
                "end": 815
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 823,
                    "end": 824
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 823,
                  "end": 824
                },
                "start": 817,
                "end": 824
              }
            ],
            "start": 813,
            "end": 825
          },
          "start": 802,
          "end": 825
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 829
          },
          "typeArguments": null,
          "start": 828,
          "end": 829
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 832,
          "end": 837
        },
        "start": 792,
        "end": 837
      },
      "declare": false,
      "start": 769,
      "end": 838
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 846
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "inferTest",
          "optional": false,
          "typeAnnotation": null,
          "start": 849,
          "end": 858
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 859,
              "end": 865
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 867,
                "end": 878
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 879,
                    "end": 885
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Klass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 887,
                      "end": 892
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 893,
                          "end": 899
                        }
                      ],
                      "start": 892,
                      "end": 900
                    },
                    "start": 887,
                    "end": 900
                  }
                ],
                "start": 878,
                "end": 901
              },
              "start": 867,
              "end": 901
            }
          ],
          "start": 858,
          "end": 902
        },
        "start": 849,
        "end": 902
      },
      "declare": false,
      "start": 840,
      "end": 903
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 920,
                  "end": 921
                },
                "typeArguments": null,
                "start": 920,
                "end": 921
              },
              "start": 918,
              "end": 921
            },
            "start": 917,
            "end": 921
          },
          "init": null,
          "definite": false,
          "start": 917,
          "end": 921
        }
      ],
      "declare": true,
      "start": 905,
      "end": 922
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 923,
          "end": 924
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "child",
          "optional": false,
          "typeAnnotation": null,
          "start": 925,
          "end": 930
        },
        "optional": false,
        "computed": false,
        "start": 923,
        "end": 930
      },
      "directive": null,
      "start": 923,
      "end": 931
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 937
}
```
