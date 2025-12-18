__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "SubGuard",
    "start": 27,
    "end": 35,
    "range": [
      27,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 41,
    "end": 48,
    "range": [
      41,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64,
    "range": [
      60,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "IsSub",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 73,
    "end": 80,
    "range": [
      73,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 81,
    "end": 84,
    "range": [
      81,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 90,
    "end": 97,
    "range": [
      90,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116,
    "range": [
      109,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 118,
    "end": 121,
    "range": [
      118,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "SubGuard",
    "start": 121,
    "end": 129,
    "range": [
      121,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 141,
    "end": 146,
    "range": [
      141,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 151,
    "end": 154,
    "range": [
      151,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 157,
    "end": 160,
    "range": [
      157,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 160,
    "end": 163,
    "range": [
      160,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 173,
    "end": 178,
    "range": [
      173,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 181,
    "end": 185,
    "range": [
      181,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "E0",
    "start": 186,
    "end": 188,
    "range": [
      186,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "IsSub",
    "start": 191,
    "end": 196,
    "range": [
      191,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 244,
    "end": 248,
    "range": [
      244,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 249,
    "end": 251,
    "range": [
      249,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 267,
    "end": 274,
    "range": [
      267,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 276,
    "end": 279,
    "range": [
      276,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 279,
    "end": 284,
    "range": [
      279,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 297,
    "end": 300,
    "range": [
      297,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 300,
    "end": 303,
    "range": [
      300,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 313,
    "end": 318,
    "range": [
      313,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 357,
    "end": 361,
    "range": [
      357,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "Constrain",
    "start": 362,
    "end": 371,
    "range": [
      362,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 374,
    "end": 381,
    "range": [
      374,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 390,
    "end": 397,
    "range": [
      390,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 400,
    "end": 404,
    "range": [
      400,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 405,
    "end": 408,
    "range": [
      405,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 416,
    "end": 423,
    "range": [
      416,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "Constrain",
    "start": 424,
    "end": 433,
    "range": [
      424,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 434,
    "end": 439,
    "range": [
      434,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 452,
    "end": 457,
    "range": [
      452,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 460,
    "end": 464,
    "range": [
      460,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 465,
    "end": 467,
    "range": [
      465,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 470,
    "end": 473,
    "range": [
      470,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 474,
    "end": 480,
    "range": [
      474,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 576,
    "end": 581,
    "range": [
      576,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 582,
    "end": 591,
    "range": [
      582,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 599,
    "end": 608,
    "range": [
      599,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "fake",
    "start": 609,
    "end": 613,
    "range": [
      609,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 625,
    "end": 630,
    "range": [
      625,
      630
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 631,
    "end": 634,
    "range": [
      631,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 635,
    "end": 640,
    "range": [
      635,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 653,
    "end": 658,
    "range": [
      653,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "Klass",
    "start": 659,
    "end": 664,
    "range": [
      659,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 668,
    "end": 675,
    "range": [
      668,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 676,
    "end": 685,
    "range": [
      676,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 693,
    "end": 698,
    "range": [
      693,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 701,
    "end": 705,
    "range": [
      701,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 710,
    "end": 714,
    "range": [
      710,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 715,
    "end": 726,
    "range": [
      715,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 732,
    "end": 739,
    "range": [
      732,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 740,
    "end": 749,
    "range": [
      740,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 756,
    "end": 759,
    "range": [
      756,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 763,
    "end": 765,
    "range": [
      763,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 769,
    "end": 773,
    "range": [
      769,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "inferTest",
    "start": 774,
    "end": 783,
    "range": [
      774,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 794,
    "end": 801,
    "range": [
      794,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 802,
    "end": 813,
    "range": [
      802,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 817,
    "end": 822,
    "range": [
      817,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 832,
    "end": 837,
    "range": [
      832,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 840,
    "end": 844,
    "range": [
      840,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "inferTest",
    "start": 849,
    "end": 858,
    "range": [
      849,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 859,
    "end": 865,
    "range": [
      859,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 867,
    "end": 878,
    "range": [
      867,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 879,
    "end": 885,
    "range": [
      879,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "Klass",
    "start": 887,
    "end": 892,
    "range": [
      887,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 893,
    "end": 899,
    "range": [
      893,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 905,
    "end": 912,
    "range": [
      905,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 913,
    "end": 916,
    "range": [
      913,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 925,
    "end": 930,
    "range": [
      925,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  }
]
```
