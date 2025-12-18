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
        "name": "Defaultize",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 22
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDefaults",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 33
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 33
          }
        ],
        "start": 15,
        "end": 34
      },
      "typeAnnotation": {
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
              "start": 45,
              "end": 46
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 57
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
                        "name": "TProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 70
                      },
                      "typeArguments": null,
                      "start": 64,
                      "end": 70
                    },
                    "start": 58,
                    "end": 70
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDefaults",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 78,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 78,
                      "end": 87
                    },
                    "start": 72,
                    "end": 87
                  }
                ],
                "start": 57,
                "end": 88
              },
              "start": 50,
              "end": 88
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 98
                },
                "typeArguments": null,
                "start": 92,
                "end": 98
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 99,
                "end": 100
              },
              "start": 92,
              "end": 101
            },
            "optional": true,
            "readonly": null,
            "start": 43,
            "end": 102
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 123
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
                        "name": "TProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 136
                    },
                    "start": 124,
                    "end": 136
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TDefaults",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 153
                      },
                      "typeArguments": null,
                      "start": 144,
                      "end": 153
                    },
                    "start": 138,
                    "end": 153
                  }
                ],
                "start": 123,
                "end": 154
              },
              "start": 116,
              "end": 154
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 163
                },
                "typeArguments": null,
                "start": 157,
                "end": 163
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 165
                },
                "typeArguments": null,
                "start": 164,
                "end": 165
              },
              "start": 157,
              "end": 166
            },
            "optional": false,
            "readonly": null,
            "start": 109,
            "end": 167
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 181
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TDefaults",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 191
                  },
                  "typeArguments": null,
                  "start": 182,
                  "end": 191
                }
              ],
              "start": 181,
              "end": 192
            },
            "start": 174,
            "end": 192
          }
        ],
        "start": 41,
        "end": 192
      },
      "declare": false,
      "start": 0,
      "end": 193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferredPropTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 217
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 219
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 218,
            "end": 219
          }
        ],
        "start": 217,
        "end": 220
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 226
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "typeArguments": null,
            "start": 236,
            "end": 237
          },
          "start": 230,
          "end": 237
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "typeArguments": null,
              "start": 240,
              "end": 241
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 243
              },
              "typeArguments": null,
              "start": 242,
              "end": 243
            },
            "start": 240,
            "end": 244
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropTypeChecker",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 268
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 276
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 275,
                    "end": 276
                  },
                  "start": 269,
                  "end": 276
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 285
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 284,
                    "end": 285
                  },
                  "start": 278,
                  "end": 285
                }
              ],
              "start": 268,
              "end": 286
            },
            "start": 253,
            "end": 286
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropTypeChecker",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 304
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
                      "start": 305,
                      "end": 306
                    },
                    "typeArguments": null,
                    "start": 305,
                    "end": 306
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 309
                    },
                    "typeArguments": null,
                    "start": 308,
                    "end": 309
                  }
                ],
                "start": 304,
                "end": 310
              },
              "start": 289,
              "end": 310
            },
            "indexType": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "checkedType",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 329
              },
              "typeArguments": null,
              "start": 311,
              "end": 329
            },
            "start": 289,
            "end": 330
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 333,
            "end": 335
          },
          "start": 240,
          "end": 335
        },
        "optional": false,
        "readonly": null,
        "start": 223,
        "end": 336
      },
      "declare": false,
      "start": 195,
      "end": 337
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "checkedType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 373,
                  "end": 379
                },
                "start": 366,
                "end": 379
              },
              "start": 364,
              "end": 379
            },
            "start": 353,
            "end": 379
          },
          "init": null,
          "definite": false,
          "start": 353,
          "end": 379
        }
      ],
      "declare": true,
      "start": 339,
      "end": 380
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropTypeChecker",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 406
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 408
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 407,
            "end": 408
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TRequired",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 419
            },
            "constraint": null,
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 422,
                "end": 427
              },
              "start": 422,
              "end": 427
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 427
          }
        ],
        "start": 406,
        "end": 428
      },
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
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 443,
                    "end": 446
                  },
                  "start": 441,
                  "end": 446
                },
                "start": 436,
                "end": 446
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 458,
                    "end": 464
                  },
                  "start": 456,
                  "end": 464
                },
                "start": 448,
                "end": 464
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "componentName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 481,
                    "end": 487
                  },
                  "start": 479,
                  "end": 487
                },
                "start": 466,
                "end": 487
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "location",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 499,
                    "end": 502
                  },
                  "start": 497,
                  "end": 502
                },
                "start": 489,
                "end": 502
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propFullName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 518,
                    "end": 524
                  },
                  "start": 516,
                  "end": 524
                },
                "start": 504,
                "end": 524
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 527,
                "end": 534
              },
              "start": 525,
              "end": 534
            },
            "start": 435,
            "end": 535
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRequired",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 550
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropTypeChecker",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 567
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 568,
                        "end": 569
                      },
                      "typeArguments": null,
                      "start": 568,
                      "end": 569
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 571,
                        "end": 575
                      },
                      "start": 571,
                      "end": 575
                    }
                  ],
                  "start": 567,
                  "end": 576
                },
                "start": 552,
                "end": 576
              },
              "start": 550,
              "end": 576
            },
            "accessibility": null,
            "static": false,
            "start": 540,
            "end": 577
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "checkedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 594
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TRequired",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 597,
                    "end": 606
                  },
                  "typeArguments": null,
                  "start": 597,
                  "end": 606
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 615,
                    "end": 619
                  },
                  "start": 615,
                  "end": 619
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 623
                  },
                  "typeArguments": null,
                  "start": 622,
                  "end": 623
                },
                "falseType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 626,
                        "end": 627
                      },
                      "typeArguments": null,
                      "start": 626,
                      "end": 627
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 630,
                      "end": 634
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 637,
                      "end": 646
                    }
                  ],
                  "start": 626,
                  "end": 646
                },
                "start": 597,
                "end": 646
              },
              "start": 595,
              "end": 646
            },
            "accessibility": null,
            "static": false,
            "start": 582,
            "end": 647
          }
        ],
        "start": 429,
        "end": 649
      },
      "declare": false,
      "start": 381,
      "end": 649
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 669,
        "end": 678
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 706,
                          "end": 721
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 722,
                              "end": 728
                            }
                          ],
                          "start": 721,
                          "end": 729
                        },
                        "start": 706,
                        "end": 729
                      },
                      "start": 704,
                      "end": 729
                    },
                    "start": 698,
                    "end": 729
                  },
                  "init": null,
                  "definite": false,
                  "start": 698,
                  "end": 729
                }
              ],
              "declare": false,
              "start": 692,
              "end": 730
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 685,
            "end": 730
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 756,
                          "end": 771
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 772,
                              "end": 778
                            }
                          ],
                          "start": 771,
                          "end": 779
                        },
                        "start": 756,
                        "end": 779
                      },
                      "start": 754,
                      "end": 779
                    },
                    "start": 748,
                    "end": 779
                  },
                  "init": null,
                  "definite": false,
                  "start": 748,
                  "end": 779
                }
              ],
              "declare": false,
              "start": 742,
              "end": 780
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 735,
            "end": 780
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PropTypeChecker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 804,
                          "end": 819
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReactNode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 820,
                                "end": 829
                              },
                              "typeArguments": null,
                              "start": 820,
                              "end": 829
                            }
                          ],
                          "start": 819,
                          "end": 830
                        },
                        "start": 804,
                        "end": 830
                      },
                      "start": 802,
                      "end": 830
                    },
                    "start": 798,
                    "end": 830
                  },
                  "init": null,
                  "definite": false,
                  "start": 798,
                  "end": 830
                }
              ],
              "declare": false,
              "start": 792,
              "end": 831
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 785,
            "end": 831
          }
        ],
        "start": 679,
        "end": 833
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 651,
      "end": 833
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 840,
        "end": 849
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 852,
            "end": 858
          },
          {
            "type": "TSNumberKeyword",
            "start": 861,
            "end": 867
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 884
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 885,
                  "end": 887
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 889,
                  "end": 891
                }
              ],
              "start": 884,
              "end": 892
            },
            "start": 870,
            "end": 892
          }
        ],
        "start": 852,
        "end": 892
      },
      "declare": false,
      "start": 835,
      "end": 893
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 923
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 925
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 926,
              "end": 928
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 924,
            "end": 928
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 931
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 932,
              "end": 934
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 930,
            "end": 934
          }
        ],
        "start": 923,
        "end": 935
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 942,
              "end": 953
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 961,
                        "end": 962
                      },
                      "typeArguments": null,
                      "start": 961,
                      "end": 962
                    },
                    "start": 959,
                    "end": 962
                  },
                  "start": 954,
                  "end": 962
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 953,
              "end": 964
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 942,
            "end": 964
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 974
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 977
                    },
                    "typeArguments": null,
                    "start": 976,
                    "end": 977
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 980,
                      "end": 988
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
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 990,
                                "end": 998
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ReactNode",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1000,
                                      "end": 1009
                                    },
                                    "typeArguments": null,
                                    "start": 1000,
                                    "end": 1009
                                  },
                                  "start": 1000,
                                  "end": 1011
                                },
                                "start": 998,
                                "end": 1011
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 990,
                              "end": 1011
                            }
                          ],
                          "start": 989,
                          "end": 1012
                        }
                      ],
                      "start": 988,
                      "end": 1013
                    },
                    "start": 980,
                    "end": 1013
                  }
                ],
                "start": 976,
                "end": 1013
              },
              "start": 974,
              "end": 1013
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 969,
            "end": 1014
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setState",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1027
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1038
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1039,
                              "end": 1040
                            },
                            "typeArguments": null,
                            "start": 1039,
                            "end": 1040
                          }
                        ],
                        "start": 1038,
                        "end": 1041
                      },
                      "start": 1031,
                      "end": 1041
                    },
                    "start": 1029,
                    "end": 1041
                  },
                  "start": 1028,
                  "end": 1041
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1045
                  },
                  "typeArguments": null,
                  "start": 1044,
                  "end": 1045
                },
                "start": 1042,
                "end": 1045
              },
              "body": null,
              "expression": false,
              "start": 1027,
              "end": 1046
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1019,
            "end": 1046
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 1051,
              "end": 1057
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                    "name": "ReactNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1070
                  },
                  "typeArguments": null,
                  "start": 1061,
                  "end": 1070
                },
                "start": 1059,
                "end": 1070
              },
              "body": null,
              "expression": false,
              "start": 1057,
              "end": 1071
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1051,
            "end": 1071
          }
        ],
        "start": 936,
        "end": 1073
      },
      "abstract": false,
      "declare": true,
      "start": 895,
      "end": 1073
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 1093,
        "end": 1096
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1113,
              "end": 1120
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReactComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1129,
                  "end": 1143
                },
                "typeArguments": null,
                "start": 1129,
                "end": 1143
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1144,
              "end": 1146
            },
            "declare": false,
            "start": 1103,
            "end": 1146
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1178
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1179,
              "end": 1181
            },
            "declare": false,
            "start": 1151,
            "end": 1181
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LibraryManagedAttributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 1191,
              "end": 1215
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1216,
                    "end": 1226
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1216,
                  "end": 1226
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1228,
                    "end": 1234
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1228,
                  "end": 1234
                }
              ],
              "start": 1215,
              "end": 1235
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1246,
                  "end": 1256
                },
                "typeArguments": null,
                "start": 1246,
                "end": 1256
              },
              "extendsType": {
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
                      "name": "defaultProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1267,
                      "end": 1279
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1287,
                            "end": 1288
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1287,
                          "end": 1288
                        },
                        "start": 1281,
                        "end": 1288
                      },
                      "start": 1279,
                      "end": 1288
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1267,
                    "end": 1289
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1290,
                      "end": 1299
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1307,
                            "end": 1308
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1307,
                          "end": 1308
                        },
                        "start": 1301,
                        "end": 1308
                      },
                      "start": 1299,
                      "end": 1308
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1290,
                    "end": 1309
                  }
                ],
                "start": 1265,
                "end": 1311
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Defaultize",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1326,
                  "end": 1336
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1337,
                            "end": 1343
                          },
                          "typeArguments": null,
                          "start": 1337,
                          "end": 1343
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "InferredPropTypes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1346,
                            "end": 1363
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "P",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1364,
                                  "end": 1365
                                },
                                "typeArguments": null,
                                "start": 1364,
                                "end": 1365
                              }
                            ],
                            "start": 1363,
                            "end": 1366
                          },
                          "start": 1346,
                          "end": 1366
                        }
                      ],
                      "start": 1337,
                      "end": 1366
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1368,
                        "end": 1369
                      },
                      "typeArguments": null,
                      "start": 1368,
                      "end": 1369
                    }
                  ],
                  "start": 1336,
                  "end": 1370
                },
                "start": 1326,
                "end": 1370
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1385,
                    "end": 1395
                  },
                  "typeArguments": null,
                  "start": 1385,
                  "end": 1395
                },
                "extendsType": {
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
                        "name": "defaultProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1406,
                        "end": 1418
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1426,
                              "end": 1427
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1426,
                            "end": 1427
                          },
                          "start": 1420,
                          "end": 1427
                        },
                        "start": 1418,
                        "end": 1427
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1406,
                      "end": 1427
                    }
                  ],
                  "start": 1404,
                  "end": 1429
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Defaultize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1448,
                    "end": 1458
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1459,
                          "end": 1465
                        },
                        "typeArguments": null,
                        "start": 1459,
                        "end": 1465
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1467,
                          "end": 1468
                        },
                        "typeArguments": null,
                        "start": 1467,
                        "end": 1468
                      }
                    ],
                    "start": 1458,
                    "end": 1469
                  },
                  "start": 1448,
                  "end": 1469
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TComponent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1488,
                      "end": 1498
                    },
                    "typeArguments": null,
                    "start": 1488,
                    "end": 1498
                  },
                  "extendsType": {
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
                          "name": "propTypes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1509,
                          "end": 1518
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1526,
                                "end": 1527
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1526,
                              "end": 1527
                            },
                            "start": 1520,
                            "end": 1527
                          },
                          "start": 1518,
                          "end": 1527
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1509,
                        "end": 1527
                      }
                    ],
                    "start": 1507,
                    "end": 1529
                  },
                  "trueType": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1552,
                          "end": 1558
                        },
                        "typeArguments": null,
                        "start": 1552,
                        "end": 1558
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InferredPropTypes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1561,
                          "end": 1578
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1579,
                                "end": 1580
                              },
                              "typeArguments": null,
                              "start": 1579,
                              "end": 1580
                            }
                          ],
                          "start": 1578,
                          "end": 1581
                        },
                        "start": 1561,
                        "end": 1581
                      }
                    ],
                    "start": 1552,
                    "end": 1581
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1604,
                      "end": 1610
                    },
                    "typeArguments": null,
                    "start": 1604,
                    "end": 1610
                  },
                  "start": 1488,
                  "end": 1610
                },
                "start": 1385,
                "end": 1610
              },
              "start": 1246,
              "end": 1610
            },
            "declare": false,
            "start": 1186,
            "end": 1611
          }
        ],
        "start": 1097,
        "end": 1613
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1075,
      "end": 1613
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 1621,
        "end": 1630
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 1639,
        "end": 1653
      },
      "superTypeArguments": null,
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
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 1667,
              "end": 1676
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1689,
                    "end": 1692
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1694,
                      "end": 1703
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1704,
                      "end": 1710
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1694,
                    "end": 1710
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1689,
                  "end": 1710
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1720,
                    "end": 1723
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1725,
                      "end": 1734
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1735,
                      "end": 1739
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1725,
                    "end": 1739
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1720,
                  "end": 1739
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1749,
                    "end": 1752
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1754,
                        "end": 1763
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1764,
                        "end": 1770
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1754,
                      "end": 1770
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRequired",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1771,
                      "end": 1781
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1754,
                    "end": 1781
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1749,
                  "end": 1781
                }
              ],
              "start": 1679,
              "end": 1788
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1660,
            "end": 1789
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1801,
              "end": 1813
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1826,
                    "end": 1829
                  },
                  "value": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1831,
                    "end": 1833
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1826,
                  "end": 1833
                }
              ],
              "start": 1816,
              "end": 1840
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1794,
            "end": 1840
          }
        ],
        "start": 1654,
        "end": 1842
      },
      "abstract": false,
      "declare": false,
      "start": 1615,
      "end": 1842
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1850,
            "end": 1851
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "start": 1855,
                "end": 1864
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 1865,
                    "end": 1868
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 1870,
                      "end": 1872
                    },
                    "start": 1869,
                    "end": 1873
                  },
                  "start": 1865,
                  "end": 1873
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 1874,
                    "end": 1877
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "\"yes\"",
                    "start": 1878,
                    "end": 1883
                  },
                  "start": 1874,
                  "end": 1883
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 1884,
                    "end": 1887
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yeah",
                    "raw": "\"yeah\"",
                    "start": 1888,
                    "end": 1894
                  },
                  "start": 1884,
                  "end": 1894
                }
              ],
              "selfClosing": true,
              "start": 1854,
              "end": 1897
            },
            "children": [],
            "closingElement": null,
            "start": 1854,
            "end": 1897
          },
          "definite": false,
          "start": 1850,
          "end": 1897
        }
      ],
      "declare": false,
      "start": 1844,
      "end": 1898
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1905,
            "end": 1906
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "start": 1910,
                "end": 1919
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 1920,
                    "end": 1923
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 1925,
                      "end": 1927
                    },
                    "start": 1924,
                    "end": 1928
                  },
                  "start": 1920,
                  "end": 1928
                }
              ],
              "selfClosing": true,
              "start": 1909,
              "end": 1931
            },
            "children": [],
            "closingElement": null,
            "start": 1909,
            "end": 1931
          },
          "definite": false,
          "start": 1905,
          "end": 1931
        }
      ],
      "declare": false,
      "start": 1899,
      "end": 1932
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1975,
            "end": 1976
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "start": 1980,
                "end": 1989
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 1990,
                    "end": 1993
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "\"yes\"",
                    "start": 1994,
                    "end": 1999
                  },
                  "start": 1990,
                  "end": 1999
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 2000,
                    "end": 2003
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yeah",
                    "raw": "\"yeah\"",
                    "start": 2004,
                    "end": 2010
                  },
                  "start": 2000,
                  "end": 2010
                }
              ],
              "selfClosing": true,
              "start": 1979,
              "end": 2013
            },
            "children": [],
            "closingElement": null,
            "start": 1979,
            "end": 2013
          },
          "definite": false,
          "start": 1975,
          "end": 2013
        }
      ],
      "declare": false,
      "start": 1969,
      "end": 2014
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 2021,
            "end": 2022
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "start": 2026,
                "end": 2035
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 2036,
                    "end": 2039
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "\"yes\"",
                    "start": 2040,
                    "end": 2045
                  },
                  "start": 2036,
                  "end": 2045
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 2046,
                    "end": 2049
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yo",
                    "raw": "\"yo\"",
                    "start": 2050,
                    "end": 2054
                  },
                  "start": 2046,
                  "end": 2054
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bat",
                    "start": 2055,
                    "end": 2058
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ohno",
                    "raw": "\"ohno\"",
                    "start": 2059,
                    "end": 2065
                  },
                  "start": 2055,
                  "end": 2065
                }
              ],
              "selfClosing": true,
              "start": 2025,
              "end": 2068
            },
            "children": [],
            "closingElement": null,
            "start": 2025,
            "end": 2068
          },
          "definite": false,
          "start": 2021,
          "end": 2068
        }
      ],
      "declare": false,
      "start": 2015,
      "end": 2069
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 2107,
            "end": 2108
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "start": 2112,
                "end": 2121
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2122,
                    "end": 2125
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 2127,
                      "end": 2129
                    },
                    "start": 2126,
                    "end": 2130
                  },
                  "start": 2122,
                  "end": 2130
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 2131,
                    "end": 2134
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2136,
                      "end": 2140
                    },
                    "start": 2135,
                    "end": 2141
                  },
                  "start": 2131,
                  "end": 2141
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 2142,
                    "end": 2145
                  },
                  "value": {
                    "type": "Literal",
                    "value": "cool",
                    "raw": "\"cool\"",
                    "start": 2146,
                    "end": 2152
                  },
                  "start": 2142,
                  "end": 2152
                }
              ],
              "selfClosing": true,
              "start": 2111,
              "end": 2155
            },
            "children": [],
            "closingElement": null,
            "start": 2111,
            "end": 2155
          },
          "definite": false,
          "start": 2107,
          "end": 2155
        }
      ],
      "declare": false,
      "start": 2101,
      "end": 2156
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 2229,
            "end": 2230
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "start": 2234,
                "end": 2243
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2244,
                    "end": 2247
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 2249,
                      "end": 2251
                    },
                    "start": 2248,
                    "end": 2252
                  },
                  "start": 2244,
                  "end": 2252
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 2253,
                    "end": 2256
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yeah",
                    "raw": "\"yeah\"",
                    "start": 2257,
                    "end": 2263
                  },
                  "start": 2253,
                  "end": 2263
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 2264,
                    "end": 2267
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2269,
                      "end": 2273
                    },
                    "start": 2268,
                    "end": 2274
                  },
                  "start": 2264,
                  "end": 2274
                }
              ],
              "selfClosing": true,
              "start": 2233,
              "end": 2277
            },
            "children": [],
            "closingElement": null,
            "start": 2233,
            "end": 2277
          },
          "definite": false,
          "start": 2229,
          "end": 2277
        }
      ],
      "declare": false,
      "start": 2223,
      "end": 2278
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustPropTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 2361,
        "end": 2374
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 2383,
        "end": 2397
      },
      "superTypeArguments": null,
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
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 2411,
              "end": 2420
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2433,
                    "end": 2436
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2438,
                      "end": 2447
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2448,
                      "end": 2454
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2438,
                    "end": 2454
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2433,
                  "end": 2454
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2464,
                    "end": 2467
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2469,
                        "end": 2478
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2479,
                        "end": 2483
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2469,
                      "end": 2483
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRequired",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2484,
                      "end": 2494
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2469,
                    "end": 2494
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2464,
                  "end": 2494
                }
              ],
              "start": 2423,
              "end": 2501
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2404,
            "end": 2502
          }
        ],
        "start": 2398,
        "end": 2504
      },
      "abstract": false,
      "declare": false,
      "start": 2355,
      "end": 2504
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 2512,
            "end": 2513
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypes",
                "start": 2517,
                "end": 2530
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2531,
                    "end": 2534
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 2536,
                      "end": 2538
                    },
                    "start": 2535,
                    "end": 2539
                  },
                  "start": 2531,
                  "end": 2539
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 2540,
                    "end": 2543
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 2544,
                    "end": 2548
                  },
                  "start": 2540,
                  "end": 2548
                }
              ],
              "selfClosing": true,
              "start": 2516,
              "end": 2551
            },
            "children": [],
            "closingElement": null,
            "start": 2516,
            "end": 2551
          },
          "definite": false,
          "start": 2512,
          "end": 2551
        }
      ],
      "declare": false,
      "start": 2506,
      "end": 2552
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 2559,
            "end": 2560
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypes",
                "start": 2564,
                "end": 2577
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2578,
                    "end": 2581
                  },
                  "value": {
                    "type": "Literal",
                    "value": "no",
                    "raw": "\"no\"",
                    "start": 2582,
                    "end": 2586
                  },
                  "start": 2578,
                  "end": 2586
                }
              ],
              "selfClosing": true,
              "start": 2563,
              "end": 2589
            },
            "children": [],
            "closingElement": null,
            "start": 2563,
            "end": 2589
          },
          "definite": false,
          "start": 2559,
          "end": 2589
        }
      ],
      "declare": false,
      "start": 2553,
      "end": 2590
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 2618,
            "end": 2619
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypes",
                "start": 2623,
                "end": 2636
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2637,
                    "end": 2640
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2642,
                      "end": 2646
                    },
                    "start": 2641,
                    "end": 2647
                  },
                  "start": 2637,
                  "end": 2647
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 2648,
                    "end": 2651
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 2652,
                    "end": 2656
                  },
                  "start": 2648,
                  "end": 2656
                }
              ],
              "selfClosing": true,
              "start": 2622,
              "end": 2659
            },
            "children": [],
            "closingElement": null,
            "start": 2622,
            "end": 2659
          },
          "definite": false,
          "start": 2618,
          "end": 2659
        }
      ],
      "declare": false,
      "start": 2612,
      "end": 2660
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 2667,
            "end": 2668
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypes",
                "start": 2672,
                "end": 2685
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2686,
                    "end": 2689
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 2691,
                      "end": 2693
                    },
                    "start": 2690,
                    "end": 2694
                  },
                  "start": 2686,
                  "end": 2694
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 2695,
                    "end": 2698
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 2700,
                      "end": 2704
                    },
                    "start": 2699,
                    "end": 2705
                  },
                  "start": 2695,
                  "end": 2705
                }
              ],
              "selfClosing": true,
              "start": 2671,
              "end": 2708
            },
            "children": [],
            "closingElement": null,
            "start": 2671,
            "end": 2708
          },
          "definite": false,
          "start": 2667,
          "end": 2708
        }
      ],
      "declare": false,
      "start": 2661,
      "end": 2709
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustDefaultProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 2743,
        "end": 2759
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 2768,
        "end": 2782
      },
      "superTypeArguments": null,
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
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 2796,
              "end": 2808
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2821,
                    "end": 2824
                  },
                  "value": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 2826,
                    "end": 2828
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2821,
                  "end": 2828
                }
              ],
              "start": 2811,
              "end": 2835
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2789,
            "end": 2836
          }
        ],
        "start": 2783,
        "end": 2838
      },
      "abstract": false,
      "declare": false,
      "start": 2737,
      "end": 2838
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 2846,
            "end": 2847
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultProps",
                "start": 2851,
                "end": 2867
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2868,
                    "end": 2871
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 2873,
                      "end": 2875
                    },
                    "start": 2872,
                    "end": 2876
                  },
                  "start": 2868,
                  "end": 2876
                }
              ],
              "selfClosing": true,
              "start": 2850,
              "end": 2879
            },
            "children": [],
            "closingElement": null,
            "start": 2850,
            "end": 2879
          },
          "definite": false,
          "start": 2846,
          "end": 2879
        }
      ],
      "declare": false,
      "start": 2840,
      "end": 2880
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 2887,
            "end": 2888
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultProps",
                "start": 2892,
                "end": 2908
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2909,
                    "end": 2912
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 2914,
                      "end": 2916
                    },
                    "start": 2913,
                    "end": 2917
                  },
                  "start": 2909,
                  "end": 2917
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 2918,
                    "end": 2921
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 2922,
                    "end": 2926
                  },
                  "start": 2918,
                  "end": 2926
                }
              ],
              "selfClosing": true,
              "start": 2891,
              "end": 2929
            },
            "children": [],
            "closingElement": null,
            "start": 2891,
            "end": 2929
          },
          "definite": false,
          "start": 2887,
          "end": 2929
        }
      ],
      "declare": false,
      "start": 2881,
      "end": 2930
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 2965,
            "end": 2966
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultProps",
                "start": 2970,
                "end": 2986
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 2987,
                    "end": 2990
                  },
                  "value": {
                    "type": "Literal",
                    "value": "no",
                    "raw": "\"no\"",
                    "start": 2991,
                    "end": 2995
                  },
                  "start": 2987,
                  "end": 2995
                }
              ],
              "selfClosing": true,
              "start": 2969,
              "end": 2998
            },
            "children": [],
            "closingElement": null,
            "start": 2969,
            "end": 2998
          },
          "definite": false,
          "start": 2965,
          "end": 2998
        }
      ],
      "declare": false,
      "start": 2959,
      "end": 2999
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3032,
        "end": 3040
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
              "start": 3047,
              "end": 3050
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3052,
                "end": 3058
              },
              "start": 3050,
              "end": 3058
            },
            "accessibility": null,
            "static": false,
            "start": 3047,
            "end": 3059
          }
        ],
        "start": 3041,
        "end": 3061
      },
      "declare": false,
      "start": 3022,
      "end": 3061
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BothWithSpecifiedGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 3069,
        "end": 3093
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 3102,
        "end": 3116
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3117,
              "end": 3125
            },
            "typeArguments": null,
            "start": 3117,
            "end": 3125
          }
        ],
        "start": 3116,
        "end": 3126
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
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 3140,
              "end": 3149
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3162,
                    "end": 3165
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3167,
                      "end": 3176
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3177,
                      "end": 3183
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3167,
                    "end": 3183
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3162,
                  "end": 3183
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3193,
                    "end": 3196
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3198,
                      "end": 3207
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3208,
                      "end": 3212
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3198,
                    "end": 3212
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3193,
                  "end": 3212
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3222,
                    "end": 3225
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3227,
                        "end": 3236
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3237,
                        "end": 3243
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3227,
                      "end": 3243
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRequired",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3244,
                      "end": 3254
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3227,
                    "end": 3254
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3222,
                  "end": 3254
                }
              ],
              "start": 3152,
              "end": 3261
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3133,
            "end": 3262
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3274,
              "end": 3286
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3299,
                    "end": 3302
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yo",
                    "raw": "\"yo\"",
                    "start": 3304,
                    "end": 3308
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3299,
                  "end": 3308
                }
              ],
              "start": 3289,
              "end": 3315
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3267,
            "end": 3316
          }
        ],
        "start": 3127,
        "end": 3318
      },
      "abstract": false,
      "declare": false,
      "start": 3063,
      "end": 3318
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 3325,
            "end": 3326
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "start": 3330,
                "end": 3354
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 3355,
                    "end": 3358
                  },
                  "value": {
                    "type": "Literal",
                    "value": "fine",
                    "raw": "\"fine\"",
                    "start": 3359,
                    "end": 3365
                  },
                  "start": 3355,
                  "end": 3365
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 3366,
                    "end": 3369
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "\"yes\"",
                    "start": 3370,
                    "end": 3375
                  },
                  "start": 3366,
                  "end": 3375
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 3376,
                    "end": 3379
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 3381,
                      "end": 3383
                    },
                    "start": 3380,
                    "end": 3384
                  },
                  "start": 3376,
                  "end": 3384
                }
              ],
              "selfClosing": true,
              "start": 3329,
              "end": 3387
            },
            "children": [],
            "closingElement": null,
            "start": 3329,
            "end": 3387
          },
          "definite": false,
          "start": 3325,
          "end": 3387
        }
      ],
      "declare": false,
      "start": 3319,
      "end": 3388
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 3395,
            "end": 3396
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "start": 3400,
                "end": 3424
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 3425,
                    "end": 3428
                  },
                  "value": {
                    "type": "Literal",
                    "value": "no",
                    "raw": "\"no\"",
                    "start": 3429,
                    "end": 3433
                  },
                  "start": 3425,
                  "end": 3433
                }
              ],
              "selfClosing": true,
              "start": 3399,
              "end": 3436
            },
            "children": [],
            "closingElement": null,
            "start": 3399,
            "end": 3436
          },
          "definite": false,
          "start": 3395,
          "end": 3436
        }
      ],
      "declare": false,
      "start": 3389,
      "end": 3437
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 3480,
            "end": 3481
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "start": 3485,
                "end": 3509
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 3510,
                    "end": 3513
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "\"yes\"",
                    "start": 3514,
                    "end": 3519
                  },
                  "start": 3510,
                  "end": 3519
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 3520,
                    "end": 3523
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 3525,
                      "end": 3527
                    },
                    "start": 3524,
                    "end": 3528
                  },
                  "start": 3520,
                  "end": 3528
                }
              ],
              "selfClosing": true,
              "start": 3484,
              "end": 3531
            },
            "children": [],
            "closingElement": null,
            "start": 3484,
            "end": 3531
          },
          "definite": false,
          "start": 3480,
          "end": 3531
        }
      ],
      "declare": false,
      "start": 3474,
      "end": 3532
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 3539,
            "end": 3540
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "start": 3544,
                "end": 3568
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 3569,
                    "end": 3572
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "\"yes\"",
                    "start": 3573,
                    "end": 3578
                  },
                  "start": 3569,
                  "end": 3578
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 3579,
                    "end": 3582
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 3584,
                      "end": 3586
                    },
                    "start": 3583,
                    "end": 3587
                  },
                  "start": 3579,
                  "end": 3587
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bat",
                    "start": 3588,
                    "end": 3591
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ohno",
                    "raw": "\"ohno\"",
                    "start": 3592,
                    "end": 3598
                  },
                  "start": 3588,
                  "end": 3598
                }
              ],
              "selfClosing": true,
              "start": 3543,
              "end": 3601
            },
            "children": [],
            "closingElement": null,
            "start": 3543,
            "end": 3601
          },
          "definite": false,
          "start": 3539,
          "end": 3601
        }
      ],
      "declare": false,
      "start": 3533,
      "end": 3602
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 3640,
            "end": 3641
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "start": 3645,
                "end": 3669
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 3670,
                    "end": 3673
                  },
                  "value": {
                    "type": "Literal",
                    "value": "no",
                    "raw": "\"no\"",
                    "start": 3674,
                    "end": 3678
                  },
                  "start": 3670,
                  "end": 3678
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 3679,
                    "end": 3682
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3684,
                      "end": 3688
                    },
                    "start": 3683,
                    "end": 3689
                  },
                  "start": 3679,
                  "end": 3689
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 3690,
                    "end": 3693
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 3695,
                      "end": 3696
                    },
                    "start": 3694,
                    "end": 3697
                  },
                  "start": 3690,
                  "end": 3697
                }
              ],
              "selfClosing": true,
              "start": 3644,
              "end": 3700
            },
            "children": [],
            "closingElement": null,
            "start": 3644,
            "end": 3700
          },
          "definite": false,
          "start": 3640,
          "end": 3700
        }
      ],
      "declare": false,
      "start": 3634,
      "end": 3701
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 3774,
            "end": 3775
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "BothWithSpecifiedGeneric",
                "start": 3779,
                "end": 3803
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 3804,
                    "end": 3807
                  },
                  "value": {
                    "type": "Literal",
                    "value": "eh",
                    "raw": "\"eh\"",
                    "start": 3808,
                    "end": 3812
                  },
                  "start": 3804,
                  "end": 3812
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 3813,
                    "end": 3816
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yeah",
                    "raw": "\"yeah\"",
                    "start": 3817,
                    "end": 3823
                  },
                  "start": 3813,
                  "end": 3823
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "baz",
                    "start": 3824,
                    "end": 3827
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 3829,
                      "end": 3833
                    },
                    "start": 3828,
                    "end": 3834
                  },
                  "start": 3824,
                  "end": 3834
                }
              ],
              "selfClosing": true,
              "start": 3778,
              "end": 3837
            },
            "children": [],
            "closingElement": null,
            "start": 3778,
            "end": 3837
          },
          "definite": false,
          "start": 3774,
          "end": 3837
        }
      ],
      "declare": false,
      "start": 3768,
      "end": 3838
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustPropTypesWithSpecifiedGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 3921,
        "end": 3954
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 3963,
        "end": 3977
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3978,
              "end": 3986
            },
            "typeArguments": null,
            "start": 3978,
            "end": 3986
          }
        ],
        "start": 3977,
        "end": 3987
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
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 4001,
              "end": 4010
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4023,
                    "end": 4026
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4028,
                      "end": 4037
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4038,
                      "end": 4044
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4028,
                    "end": 4044
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4023,
                  "end": 4044
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4054,
                    "end": 4057
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PropTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4059,
                        "end": 4068
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4069,
                        "end": 4073
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4059,
                      "end": 4073
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isRequired",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4074,
                      "end": 4084
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4059,
                    "end": 4084
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4054,
                  "end": 4084
                }
              ],
              "start": 4013,
              "end": 4091
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3994,
            "end": 4092
          }
        ],
        "start": 3988,
        "end": 4094
      },
      "abstract": false,
      "declare": false,
      "start": 3915,
      "end": 4094
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 4101,
            "end": 4102
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypesWithSpecifiedGeneric",
                "start": 4106,
                "end": 4139
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 4140,
                    "end": 4143
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nice",
                    "raw": "\"nice\"",
                    "start": 4144,
                    "end": 4150
                  },
                  "start": 4140,
                  "end": 4150
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 4151,
                    "end": 4154
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 4155,
                    "end": 4159
                  },
                  "start": 4151,
                  "end": 4159
                }
              ],
              "selfClosing": true,
              "start": 4105,
              "end": 4162
            },
            "children": [],
            "closingElement": null,
            "start": 4105,
            "end": 4162
          },
          "definite": false,
          "start": 4101,
          "end": 4162
        }
      ],
      "declare": false,
      "start": 4095,
      "end": 4163
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 4170,
            "end": 4171
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypesWithSpecifiedGeneric",
                "start": 4175,
                "end": 4208
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 4209,
                    "end": 4212
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 4214,
                      "end": 4216
                    },
                    "start": 4213,
                    "end": 4217
                  },
                  "start": 4209,
                  "end": 4217
                }
              ],
              "selfClosing": true,
              "start": 4174,
              "end": 4220
            },
            "children": [],
            "closingElement": null,
            "start": 4174,
            "end": 4220
          },
          "definite": false,
          "start": 4170,
          "end": 4220
        }
      ],
      "declare": false,
      "start": 4164,
      "end": 4221
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4249,
            "end": 4250
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypesWithSpecifiedGeneric",
                "start": 4254,
                "end": 4287
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 4288,
                    "end": 4291
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4293,
                      "end": 4297
                    },
                    "start": 4292,
                    "end": 4298
                  },
                  "start": 4288,
                  "end": 4298
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 4299,
                    "end": 4302
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 4303,
                    "end": 4307
                  },
                  "start": 4299,
                  "end": 4307
                }
              ],
              "selfClosing": true,
              "start": 4253,
              "end": 4310
            },
            "children": [],
            "closingElement": null,
            "start": 4253,
            "end": 4310
          },
          "definite": false,
          "start": 4249,
          "end": 4310
        }
      ],
      "declare": false,
      "start": 4243,
      "end": 4311
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 4381,
            "end": 4382
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustPropTypesWithSpecifiedGeneric",
                "start": 4386,
                "end": 4419
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 4420,
                    "end": 4423
                  },
                  "value": {
                    "type": "Literal",
                    "value": "cool",
                    "raw": "\"cool\"",
                    "start": 4424,
                    "end": 4430
                  },
                  "start": 4420,
                  "end": 4430
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 4431,
                    "end": 4434
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4436,
                      "end": 4440
                    },
                    "start": 4435,
                    "end": 4441
                  },
                  "start": 4431,
                  "end": 4441
                }
              ],
              "selfClosing": true,
              "start": 4385,
              "end": 4444
            },
            "children": [],
            "closingElement": null,
            "start": 4385,
            "end": 4444
          },
          "definite": false,
          "start": 4381,
          "end": 4444
        }
      ],
      "declare": false,
      "start": 4375,
      "end": 4445
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JustDefaultPropsWithSpecifiedGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 4479,
        "end": 4515
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 4524,
        "end": 4538
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 4539,
              "end": 4547
            },
            "typeArguments": null,
            "start": 4539,
            "end": 4547
          }
        ],
        "start": 4538,
        "end": 4548
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
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 4562,
              "end": 4574
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4587,
                    "end": 4590
                  },
                  "value": {
                    "type": "Literal",
                    "value": "no",
                    "raw": "\"no\"",
                    "start": 4592,
                    "end": 4596
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4587,
                  "end": 4596
                }
              ],
              "start": 4577,
              "end": 4603
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4555,
            "end": 4604
          }
        ],
        "start": 4549,
        "end": 4606
      },
      "abstract": false,
      "declare": false,
      "start": 4473,
      "end": 4606
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4614,
            "end": 4615
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultPropsWithSpecifiedGeneric",
                "start": 4619,
                "end": 4655
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 4656,
                    "end": 4659
                  },
                  "value": {
                    "type": "Literal",
                    "value": "eh",
                    "raw": "\"eh\"",
                    "start": 4660,
                    "end": 4664
                  },
                  "start": 4656,
                  "end": 4664
                }
              ],
              "selfClosing": true,
              "start": 4618,
              "end": 4667
            },
            "children": [],
            "closingElement": null,
            "start": 4618,
            "end": 4667
          },
          "definite": false,
          "start": 4614,
          "end": 4667
        }
      ],
      "declare": false,
      "start": 4608,
      "end": 4668
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 4675,
            "end": 4676
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultPropsWithSpecifiedGeneric",
                "start": 4680,
                "end": 4716
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 4717,
                    "end": 4720
                  },
                  "value": {
                    "type": "Literal",
                    "value": "no",
                    "raw": "\"no\"",
                    "start": 4721,
                    "end": 4725
                  },
                  "start": 4717,
                  "end": 4725
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 4726,
                    "end": 4729
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 4730,
                    "end": 4734
                  },
                  "start": 4726,
                  "end": 4734
                }
              ],
              "selfClosing": true,
              "start": 4679,
              "end": 4737
            },
            "children": [],
            "closingElement": null,
            "start": 4679,
            "end": 4737
          },
          "definite": false,
          "start": 4675,
          "end": 4737
        }
      ],
      "declare": false,
      "start": 4669,
      "end": 4738
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 4773,
            "end": 4774
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultPropsWithSpecifiedGeneric",
                "start": 4778,
                "end": 4814
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 4815,
                    "end": 4818
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 4820,
                      "end": 4822
                    },
                    "start": 4819,
                    "end": 4823
                  },
                  "start": 4815,
                  "end": 4823
                }
              ],
              "selfClosing": true,
              "start": 4777,
              "end": 4826
            },
            "children": [],
            "closingElement": null,
            "start": 4777,
            "end": 4826
          },
          "definite": false,
          "start": 4773,
          "end": 4826
        }
      ],
      "declare": false,
      "start": 4767,
      "end": 4827
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": null,
            "start": 4855,
            "end": 4857
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "JustDefaultPropsWithSpecifiedGeneric",
                "start": 4861,
                "end": 4897
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 4860,
              "end": 4900
            },
            "children": [],
            "closingElement": null,
            "start": 4860,
            "end": 4900
          },
          "definite": false,
          "start": 4855,
          "end": 4900
        }
      ],
      "declare": false,
      "start": 4849,
      "end": 4901
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4901
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaultize",
    "start": 5,
    "end": 15,
    "range": [
      5,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 16,
    "end": 22,
    "range": [
      16,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "TDefaults",
    "start": 24,
    "end": 33,
    "range": [
      24,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 47,
    "end": 49,
    "range": [
      47,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 50,
    "end": 57,
    "range": [
      50,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 58,
    "end": 63,
    "range": [
      58,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 72,
    "end": 77,
    "range": [
      72,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "TDefaults",
    "start": 78,
    "end": 87,
    "range": [
      78,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 113,
    "end": 115,
    "range": [
      113,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 116,
    "end": 123,
    "range": [
      116,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 124,
    "end": 129,
    "range": [
      124,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 138,
    "end": 143,
    "range": [
      138,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "TDefaults",
    "start": 144,
    "end": 153,
    "range": [
      144,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 157,
    "end": 163,
    "range": [
      157,
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
    "type": "Identifier",
    "value": "K",
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
    "value": "}",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 174,
    "end": 181,
    "range": [
      174,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "TDefaults",
    "start": 182,
    "end": 191,
    "range": [
      182,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 195,
    "end": 199,
    "range": [
      195,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "InferredPropTypes",
    "start": 200,
    "end": 217,
    "range": [
      200,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 227,
    "end": 229,
    "range": [
      227,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 230,
    "end": 235,
    "range": [
      230,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 245,
    "end": 252,
    "range": [
      245,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypeChecker",
    "start": 253,
    "end": 268,
    "range": [
      253,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 269,
    "end": 274,
    "range": [
      269,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 278,
    "end": 283,
    "range": [
      278,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypeChecker",
    "start": 289,
    "end": 304,
    "range": [
      289,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 311,
    "end": 317,
    "range": [
      311,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "checkedType",
    "start": 318,
    "end": 329,
    "range": [
      318,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 339,
    "end": 346,
    "range": [
      339,
      346
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 347,
    "end": 352,
    "range": [
      347,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "checkedType",
    "start": 353,
    "end": 364,
    "range": [
      353,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 366,
    "end": 372,
    "range": [
      366,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 373,
    "end": 379,
    "range": [
      373,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 381,
    "end": 390,
    "range": [
      381,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypeChecker",
    "start": 391,
    "end": 406,
    "range": [
      391,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "TRequired",
    "start": 410,
    "end": 419,
    "range": [
      410,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 422,
    "end": 427,
    "range": [
      422,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 436,
    "end": 441,
    "range": [
      436,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 443,
    "end": 446,
    "range": [
      443,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 448,
    "end": 456,
    "range": [
      448,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 458,
    "end": 464,
    "range": [
      458,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "componentName",
    "start": 466,
    "end": 479,
    "range": [
      466,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 481,
    "end": 487,
    "range": [
      481,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "location",
    "start": 489,
    "end": 497,
    "range": [
      489,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "propFullName",
    "start": 504,
    "end": 516,
    "range": [
      504,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 518,
    "end": 524,
    "range": [
      518,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 527,
    "end": 534,
    "range": [
      527,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 540,
    "end": 550,
    "range": [
      540,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypeChecker",
    "start": 552,
    "end": 567,
    "range": [
      552,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 571,
    "end": 575,
    "range": [
      571,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "checkedType",
    "start": 583,
    "end": 594,
    "range": [
      583,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "TRequired",
    "start": 597,
    "end": 606,
    "range": [
      597,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 607,
    "end": 614,
    "range": [
      607,
      614
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 615,
    "end": 619,
    "range": [
      615,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 630,
    "end": 634,
    "range": [
      630,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 637,
    "end": 646,
    "range": [
      637,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
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
    "type": "Identifier",
    "value": "declare",
    "start": 651,
    "end": 658,
    "range": [
      651,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 659,
    "end": 668,
    "range": [
      659,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 669,
    "end": 678,
    "range": [
      669,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 685,
    "end": 691,
    "range": [
      685,
      691
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 692,
    "end": 697,
    "range": [
      692,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 698,
    "end": 704,
    "range": [
      698,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypeChecker",
    "start": 706,
    "end": 721,
    "range": [
      706,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 722,
    "end": 728,
    "range": [
      722,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 735,
    "end": 741,
    "range": [
      735,
      741
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 742,
    "end": 747,
    "range": [
      742,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 748,
    "end": 754,
    "range": [
      748,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypeChecker",
    "start": 756,
    "end": 771,
    "range": [
      756,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 772,
    "end": 778,
    "range": [
      772,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 785,
    "end": 791,
    "range": [
      785,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 792,
    "end": 797,
    "range": [
      792,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 798,
    "end": 802,
    "range": [
      798,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypeChecker",
    "start": 804,
    "end": 819,
    "range": [
      804,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 820,
    "end": 829,
    "range": [
      820,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 835,
    "end": 839,
    "range": [
      835,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 840,
    "end": 849,
    "range": [
      840,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 852,
    "end": 858,
    "range": [
      852,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 861,
    "end": 867,
    "range": [
      861,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 870,
    "end": 884,
    "range": [
      870,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 895,
    "end": 902,
    "range": [
      895,
      902
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 903,
    "end": 908,
    "range": [
      903,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 909,
    "end": 923,
    "range": [
      909,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 942,
    "end": 953,
    "range": [
      942,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 954,
    "end": 959,
    "range": [
      954,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 969,
    "end": 974,
    "range": [
      969,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 980,
    "end": 988,
    "range": [
      980,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 990,
    "end": 998,
    "range": [
      990,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 1000,
    "end": 1009,
    "range": [
      1000,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "setState",
    "start": 1019,
    "end": 1027,
    "range": [
      1019,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1031,
    "end": 1038,
    "range": [
      1031,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 1051,
    "end": 1057,
    "range": [
      1051,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 1061,
    "end": 1070,
    "range": [
      1061,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1075,
    "end": 1082,
    "range": [
      1075,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1083,
    "end": 1092,
    "range": [
      1083,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1093,
    "end": 1096,
    "range": [
      1093,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1103,
    "end": 1112,
    "range": [
      1103,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1113,
    "end": 1120,
    "range": [
      1113,
      1120
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1121,
    "end": 1128,
    "range": [
      1121,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 1129,
    "end": 1143,
    "range": [
      1129,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1151,
    "end": 1160,
    "range": [
      1151,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 1161,
    "end": 1178,
    "range": [
      1161,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1186,
    "end": 1190,
    "range": [
      1186,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "LibraryManagedAttributes",
    "start": 1191,
    "end": 1215,
    "range": [
      1191,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "TComponent",
    "start": 1216,
    "end": 1226,
    "range": [
      1216,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 1228,
    "end": 1234,
    "range": [
      1228,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "TComponent",
    "start": 1246,
    "end": 1256,
    "range": [
      1246,
      1256
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1257,
    "end": 1264,
    "range": [
      1257,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 1267,
    "end": 1279,
    "range": [
      1267,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1281,
    "end": 1286,
    "range": [
      1281,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 1290,
    "end": 1299,
    "range": [
      1290,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1301,
    "end": 1306,
    "range": [
      1301,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaultize",
    "start": 1326,
    "end": 1336,
    "range": [
      1326,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 1337,
    "end": 1343,
    "range": [
      1337,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "InferredPropTypes",
    "start": 1346,
    "end": 1363,
    "range": [
      1346,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "TComponent",
    "start": 1385,
    "end": 1395,
    "range": [
      1385,
      1395
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1396,
    "end": 1403,
    "range": [
      1396,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 1406,
    "end": 1418,
    "range": [
      1406,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1420,
    "end": 1425,
    "range": [
      1420,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "Defaultize",
    "start": 1448,
    "end": 1458,
    "range": [
      1448,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 1459,
    "end": 1465,
    "range": [
      1459,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "TComponent",
    "start": 1488,
    "end": 1498,
    "range": [
      1488,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1499,
    "end": 1506,
    "range": [
      1499,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 1509,
    "end": 1518,
    "range": [
      1509,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1520,
    "end": 1525,
    "range": [
      1520,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 1552,
    "end": 1558,
    "range": [
      1552,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "InferredPropTypes",
    "start": 1561,
    "end": 1578,
    "range": [
      1561,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 1604,
    "end": 1610,
    "range": [
      1604,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1615,
    "end": 1620,
    "range": [
      1615,
      1620
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 1621,
    "end": 1630,
    "range": [
      1621,
      1630
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1631,
    "end": 1638,
    "range": [
      1631,
      1638
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 1639,
    "end": 1653,
    "range": [
      1639,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1660,
    "end": 1666,
    "range": [
      1660,
      1666
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 1667,
    "end": 1676,
    "range": [
      1667,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1689,
    "end": 1692,
    "range": [
      1689,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 1694,
    "end": 1703,
    "range": [
      1694,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1704,
    "end": 1710,
    "range": [
      1704,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1720,
    "end": 1723,
    "range": [
      1720,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 1725,
    "end": 1734,
    "range": [
      1725,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 1735,
    "end": 1739,
    "range": [
      1735,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1749,
    "end": 1752,
    "range": [
      1749,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 1754,
    "end": 1763,
    "range": [
      1754,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1764,
    "end": 1770,
    "range": [
      1764,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 1771,
    "end": 1781,
    "range": [
      1771,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1794,
    "end": 1800,
    "range": [
      1794,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 1801,
    "end": 1813,
    "range": [
      1801,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1826,
    "end": 1829,
    "range": [
      1826,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1831,
    "end": 1833,
    "range": [
      1831,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1844,
    "end": 1849,
    "range": [
      1844,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 1855,
    "end": 1864,
    "range": [
      1855,
      1864
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 1865,
    "end": 1868,
    "range": [
      1865,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1870,
    "end": 1872,
    "range": [
      1870,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 1874,
    "end": 1877,
    "range": [
      1874,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yes\"",
    "start": 1878,
    "end": 1883,
    "range": [
      1878,
      1883
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 1884,
    "end": 1887,
    "range": [
      1884,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yeah\"",
    "start": 1888,
    "end": 1894,
    "range": [
      1888,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1899,
    "end": 1904,
    "range": [
      1899,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 1910,
    "end": 1919,
    "range": [
      1910,
      1919
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 1920,
    "end": 1923,
    "range": [
      1920,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1925,
    "end": 1927,
    "range": [
      1925,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1969,
    "end": 1974,
    "range": [
      1969,
      1974
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 1980,
    "end": 1989,
    "range": [
      1980,
      1989
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 1990,
    "end": 1993,
    "range": [
      1990,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yes\"",
    "start": 1994,
    "end": 1999,
    "range": [
      1994,
      1999
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 2000,
    "end": 2003,
    "range": [
      2000,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yeah\"",
    "start": 2004,
    "end": 2010,
    "range": [
      2004,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2015,
    "end": 2020,
    "range": [
      2015,
      2020
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 2026,
    "end": 2035,
    "range": [
      2026,
      2035
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 2036,
    "end": 2039,
    "range": [
      2036,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yes\"",
    "start": 2040,
    "end": 2045,
    "range": [
      2040,
      2045
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 2046,
    "end": 2049,
    "range": [
      2046,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yo\"",
    "start": 2050,
    "end": 2054,
    "range": [
      2050,
      2054
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bat",
    "start": 2055,
    "end": 2058,
    "range": [
      2055,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ohno\"",
    "start": 2059,
    "end": 2065,
    "range": [
      2059,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2101,
    "end": 2106,
    "range": [
      2101,
      2106
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 2112,
    "end": 2121,
    "range": [
      2112,
      2121
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2122,
    "end": 2125,
    "range": [
      2122,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2127,
    "end": 2129,
    "range": [
      2127,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 2131,
    "end": 2134,
    "range": [
      2131,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2136,
    "end": 2140,
    "range": [
      2136,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 2142,
    "end": 2145,
    "range": [
      2142,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "JSXText",
    "value": "\"cool\"",
    "start": 2146,
    "end": 2152,
    "range": [
      2146,
      2152
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2223,
    "end": 2228,
    "range": [
      2223,
      2228
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 2234,
    "end": 2243,
    "range": [
      2234,
      2243
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2244,
    "end": 2247,
    "range": [
      2244,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2249,
    "end": 2251,
    "range": [
      2249,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 2253,
    "end": 2256,
    "range": [
      2253,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yeah\"",
    "start": 2257,
    "end": 2263,
    "range": [
      2257,
      2263
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 2264,
    "end": 2267,
    "range": [
      2264,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2269,
    "end": 2273,
    "range": [
      2269,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2355,
    "end": 2360,
    "range": [
      2355,
      2360
    ]
  },
  {
    "type": "Identifier",
    "value": "JustPropTypes",
    "start": 2361,
    "end": 2374,
    "range": [
      2361,
      2374
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2375,
    "end": 2382,
    "range": [
      2375,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 2383,
    "end": 2397,
    "range": [
      2383,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2404,
    "end": 2410,
    "range": [
      2404,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 2411,
    "end": 2420,
    "range": [
      2411,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2433,
    "end": 2436,
    "range": [
      2433,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 2438,
    "end": 2447,
    "range": [
      2438,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2448,
    "end": 2454,
    "range": [
      2448,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2464,
    "end": 2467,
    "range": [
      2464,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 2469,
    "end": 2478,
    "range": [
      2469,
      2478
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2478,
    "end": 2479,
    "range": [
      2478,
      2479
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2479,
    "end": 2483,
    "range": [
      2479,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 2484,
    "end": 2494,
    "range": [
      2484,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2506,
    "end": 2511,
    "range": [
      2506,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustPropTypes",
    "start": 2517,
    "end": 2530,
    "range": [
      2517,
      2530
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2531,
    "end": 2534,
    "range": [
      2531,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2536,
    "end": 2538,
    "range": [
      2536,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 2540,
    "end": 2543,
    "range": [
      2540,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 2544,
    "end": 2548,
    "range": [
      2544,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2553,
    "end": 2558,
    "range": [
      2553,
      2558
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 2559,
    "end": 2560,
    "range": [
      2559,
      2560
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustPropTypes",
    "start": 2564,
    "end": 2577,
    "range": [
      2564,
      2577
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2578,
    "end": 2581,
    "range": [
      2578,
      2581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "JSXText",
    "value": "\"no\"",
    "start": 2582,
    "end": 2586,
    "range": [
      2582,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2612,
    "end": 2617,
    "range": [
      2612,
      2617
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustPropTypes",
    "start": 2623,
    "end": 2636,
    "range": [
      2623,
      2636
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2637,
    "end": 2640,
    "range": [
      2637,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2642,
    "end": 2646,
    "range": [
      2642,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 2648,
    "end": 2651,
    "range": [
      2648,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 2652,
    "end": 2656,
    "range": [
      2652,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2661,
    "end": 2666,
    "range": [
      2661,
      2666
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustPropTypes",
    "start": 2672,
    "end": 2685,
    "range": [
      2672,
      2685
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2686,
    "end": 2689,
    "range": [
      2686,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2691,
    "end": 2693,
    "range": [
      2691,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 2695,
    "end": 2698,
    "range": [
      2695,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2700,
    "end": 2704,
    "range": [
      2700,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2708,
    "end": 2709,
    "range": [
      2708,
      2709
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2737,
    "end": 2742,
    "range": [
      2737,
      2742
    ]
  },
  {
    "type": "Identifier",
    "value": "JustDefaultProps",
    "start": 2743,
    "end": 2759,
    "range": [
      2743,
      2759
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2760,
    "end": 2767,
    "range": [
      2760,
      2767
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 2768,
    "end": 2782,
    "range": [
      2768,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2789,
    "end": 2795,
    "range": [
      2789,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 2796,
    "end": 2808,
    "range": [
      2796,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2821,
    "end": 2824,
    "range": [
      2821,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2826,
    "end": 2828,
    "range": [
      2826,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2840,
    "end": 2845,
    "range": [
      2840,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustDefaultProps",
    "start": 2851,
    "end": 2867,
    "range": [
      2851,
      2867
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2868,
    "end": 2871,
    "range": [
      2868,
      2871
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2871,
    "end": 2872,
    "range": [
      2871,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2872,
    "end": 2873,
    "range": [
      2872,
      2873
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2873,
    "end": 2875,
    "range": [
      2873,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2875,
    "end": 2876,
    "range": [
      2875,
      2876
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2881,
    "end": 2886,
    "range": [
      2881,
      2886
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustDefaultProps",
    "start": 2892,
    "end": 2908,
    "range": [
      2892,
      2908
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2909,
    "end": 2912,
    "range": [
      2909,
      2912
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2912,
    "end": 2913,
    "range": [
      2912,
      2913
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2913,
    "end": 2914,
    "range": [
      2913,
      2914
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2914,
    "end": 2916,
    "range": [
      2914,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 2918,
    "end": 2921,
    "range": [
      2918,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 2922,
    "end": 2926,
    "range": [
      2922,
      2926
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2927,
    "end": 2928,
    "range": [
      2927,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2959,
    "end": 2964,
    "range": [
      2959,
      2964
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustDefaultProps",
    "start": 2970,
    "end": 2986,
    "range": [
      2970,
      2986
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 2987,
    "end": 2990,
    "range": [
      2987,
      2990
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2990,
    "end": 2991,
    "range": [
      2990,
      2991
    ]
  },
  {
    "type": "JSXText",
    "value": "\"no\"",
    "start": 2991,
    "end": 2995,
    "range": [
      2991,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2997,
    "end": 2998,
    "range": [
      2997,
      2998
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3022,
    "end": 3031,
    "range": [
      3022,
      3031
    ]
  },
  {
    "type": "Identifier",
    "value": "FooProps",
    "start": 3032,
    "end": 3040,
    "range": [
      3032,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3047,
    "end": 3050,
    "range": [
      3047,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3052,
    "end": 3058,
    "range": [
      3052,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3060,
    "end": 3061,
    "range": [
      3060,
      3061
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3063,
    "end": 3068,
    "range": [
      3063,
      3068
    ]
  },
  {
    "type": "Identifier",
    "value": "BothWithSpecifiedGeneric",
    "start": 3069,
    "end": 3093,
    "range": [
      3069,
      3093
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3094,
    "end": 3101,
    "range": [
      3094,
      3101
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 3102,
    "end": 3116,
    "range": [
      3102,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Identifier",
    "value": "FooProps",
    "start": 3117,
    "end": 3125,
    "range": [
      3117,
      3125
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3127,
    "end": 3128,
    "range": [
      3127,
      3128
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3133,
    "end": 3139,
    "range": [
      3133,
      3139
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 3140,
    "end": 3149,
    "range": [
      3140,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3152,
    "end": 3153,
    "range": [
      3152,
      3153
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3162,
    "end": 3165,
    "range": [
      3162,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 3167,
    "end": 3176,
    "range": [
      3167,
      3176
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3176,
    "end": 3177,
    "range": [
      3176,
      3177
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3177,
    "end": 3183,
    "range": [
      3177,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3193,
    "end": 3196,
    "range": [
      3193,
      3196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 3198,
    "end": 3207,
    "range": [
      3198,
      3207
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3207,
    "end": 3208,
    "range": [
      3207,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3208,
    "end": 3212,
    "range": [
      3208,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3212,
    "end": 3213,
    "range": [
      3212,
      3213
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 3222,
    "end": 3225,
    "range": [
      3222,
      3225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 3227,
    "end": 3236,
    "range": [
      3227,
      3236
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3237,
    "end": 3243,
    "range": [
      3237,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 3244,
    "end": 3254,
    "range": [
      3244,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3267,
    "end": 3273,
    "range": [
      3267,
      3273
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 3274,
    "end": 3286,
    "range": [
      3274,
      3286
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3287,
    "end": 3288,
    "range": [
      3287,
      3288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3289,
    "end": 3290,
    "range": [
      3289,
      3290
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3299,
    "end": 3302,
    "range": [
      3299,
      3302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "String",
    "value": "\"yo\"",
    "start": 3304,
    "end": 3308,
    "range": [
      3304,
      3308
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3308,
    "end": 3309,
    "range": [
      3308,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3319,
    "end": 3324,
    "range": [
      3319,
      3324
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3329,
    "end": 3330,
    "range": [
      3329,
      3330
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "BothWithSpecifiedGeneric",
    "start": 3330,
    "end": 3354,
    "range": [
      3330,
      3354
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 3355,
    "end": 3358,
    "range": [
      3355,
      3358
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3358,
    "end": 3359,
    "range": [
      3358,
      3359
    ]
  },
  {
    "type": "JSXText",
    "value": "\"fine\"",
    "start": 3359,
    "end": 3365,
    "range": [
      3359,
      3365
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 3366,
    "end": 3369,
    "range": [
      3366,
      3369
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3369,
    "end": 3370,
    "range": [
      3369,
      3370
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yes\"",
    "start": 3370,
    "end": 3375,
    "range": [
      3370,
      3375
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 3376,
    "end": 3379,
    "range": [
      3376,
      3379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3381,
    "end": 3383,
    "range": [
      3381,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3389,
    "end": 3394,
    "range": [
      3389,
      3394
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "BothWithSpecifiedGeneric",
    "start": 3400,
    "end": 3424,
    "range": [
      3400,
      3424
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 3425,
    "end": 3428,
    "range": [
      3425,
      3428
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "JSXText",
    "value": "\"no\"",
    "start": 3429,
    "end": 3433,
    "range": [
      3429,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3436,
    "end": 3437,
    "range": [
      3436,
      3437
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3474,
    "end": 3479,
    "range": [
      3474,
      3479
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3480,
    "end": 3481,
    "range": [
      3480,
      3481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3482,
    "end": 3483,
    "range": [
      3482,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "BothWithSpecifiedGeneric",
    "start": 3485,
    "end": 3509,
    "range": [
      3485,
      3509
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 3510,
    "end": 3513,
    "range": [
      3510,
      3513
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3513,
    "end": 3514,
    "range": [
      3513,
      3514
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yes\"",
    "start": 3514,
    "end": 3519,
    "range": [
      3514,
      3519
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 3520,
    "end": 3523,
    "range": [
      3520,
      3523
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3523,
    "end": 3524,
    "range": [
      3523,
      3524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3524,
    "end": 3525,
    "range": [
      3524,
      3525
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3525,
    "end": 3527,
    "range": [
      3525,
      3527
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 3529,
    "end": 3530,
    "range": [
      3529,
      3530
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3530,
    "end": 3531,
    "range": [
      3530,
      3531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3533,
    "end": 3538,
    "range": [
      3533,
      3538
    ]
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 3539,
    "end": 3540,
    "range": [
      3539,
      3540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3541,
    "end": 3542,
    "range": [
      3541,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3543,
    "end": 3544,
    "range": [
      3543,
      3544
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "BothWithSpecifiedGeneric",
    "start": 3544,
    "end": 3568,
    "range": [
      3544,
      3568
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 3569,
    "end": 3572,
    "range": [
      3569,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yes\"",
    "start": 3573,
    "end": 3578,
    "range": [
      3573,
      3578
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 3579,
    "end": 3582,
    "range": [
      3579,
      3582
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3583,
    "end": 3584,
    "range": [
      3583,
      3584
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3584,
    "end": 3586,
    "range": [
      3584,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3586,
    "end": 3587,
    "range": [
      3586,
      3587
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bat",
    "start": 3588,
    "end": 3591,
    "range": [
      3588,
      3591
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3591,
    "end": 3592,
    "range": [
      3591,
      3592
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ohno\"",
    "start": 3592,
    "end": 3598,
    "range": [
      3592,
      3598
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 3599,
    "end": 3600,
    "range": [
      3599,
      3600
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3600,
    "end": 3601,
    "range": [
      3600,
      3601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3601,
    "end": 3602,
    "range": [
      3601,
      3602
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3634,
    "end": 3639,
    "range": [
      3634,
      3639
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3642,
    "end": 3643,
    "range": [
      3642,
      3643
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3644,
    "end": 3645,
    "range": [
      3644,
      3645
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "BothWithSpecifiedGeneric",
    "start": 3645,
    "end": 3669,
    "range": [
      3645,
      3669
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 3670,
    "end": 3673,
    "range": [
      3670,
      3673
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3673,
    "end": 3674,
    "range": [
      3673,
      3674
    ]
  },
  {
    "type": "JSXText",
    "value": "\"no\"",
    "start": 3674,
    "end": 3678,
    "range": [
      3674,
      3678
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 3679,
    "end": 3682,
    "range": [
      3679,
      3682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3684,
    "end": 3688,
    "range": [
      3684,
      3688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3688,
    "end": 3689,
    "range": [
      3688,
      3689
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 3690,
    "end": 3693,
    "range": [
      3690,
      3693
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3693,
    "end": 3694,
    "range": [
      3693,
      3694
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3694,
    "end": 3695,
    "range": [
      3694,
      3695
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3695,
    "end": 3696,
    "range": [
      3695,
      3696
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3696,
    "end": 3697,
    "range": [
      3696,
      3697
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 3698,
    "end": 3699,
    "range": [
      3698,
      3699
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3699,
    "end": 3700,
    "range": [
      3699,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3768,
    "end": 3773,
    "range": [
      3768,
      3773
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3774,
    "end": 3775,
    "range": [
      3774,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3776,
    "end": 3777,
    "range": [
      3776,
      3777
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3778,
    "end": 3779,
    "range": [
      3778,
      3779
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "BothWithSpecifiedGeneric",
    "start": 3779,
    "end": 3803,
    "range": [
      3779,
      3803
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 3804,
    "end": 3807,
    "range": [
      3804,
      3807
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "JSXText",
    "value": "\"eh\"",
    "start": 3808,
    "end": 3812,
    "range": [
      3808,
      3812
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 3813,
    "end": 3816,
    "range": [
      3813,
      3816
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3816,
    "end": 3817,
    "range": [
      3816,
      3817
    ]
  },
  {
    "type": "JSXText",
    "value": "\"yeah\"",
    "start": 3817,
    "end": 3823,
    "range": [
      3817,
      3823
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "baz",
    "start": 3824,
    "end": 3827,
    "range": [
      3824,
      3827
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3827,
    "end": 3828,
    "range": [
      3827,
      3828
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3828,
    "end": 3829,
    "range": [
      3828,
      3829
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3829,
    "end": 3833,
    "range": [
      3829,
      3833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3833,
    "end": 3834,
    "range": [
      3833,
      3834
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 3835,
    "end": 3836,
    "range": [
      3835,
      3836
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3836,
    "end": 3837,
    "range": [
      3836,
      3837
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3837,
    "end": 3838,
    "range": [
      3837,
      3838
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3915,
    "end": 3920,
    "range": [
      3915,
      3920
    ]
  },
  {
    "type": "Identifier",
    "value": "JustPropTypesWithSpecifiedGeneric",
    "start": 3921,
    "end": 3954,
    "range": [
      3921,
      3954
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3955,
    "end": 3962,
    "range": [
      3955,
      3962
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 3963,
    "end": 3977,
    "range": [
      3963,
      3977
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3977,
    "end": 3978,
    "range": [
      3977,
      3978
    ]
  },
  {
    "type": "Identifier",
    "value": "FooProps",
    "start": 3978,
    "end": 3986,
    "range": [
      3978,
      3986
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3986,
    "end": 3987,
    "range": [
      3986,
      3987
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3988,
    "end": 3989,
    "range": [
      3988,
      3989
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3994,
    "end": 4000,
    "range": [
      3994,
      4000
    ]
  },
  {
    "type": "Identifier",
    "value": "propTypes",
    "start": 4001,
    "end": 4010,
    "range": [
      4001,
      4010
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4011,
    "end": 4012,
    "range": [
      4011,
      4012
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4013,
    "end": 4014,
    "range": [
      4013,
      4014
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4023,
    "end": 4026,
    "range": [
      4023,
      4026
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4026,
    "end": 4027,
    "range": [
      4026,
      4027
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 4028,
    "end": 4037,
    "range": [
      4028,
      4037
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4037,
    "end": 4038,
    "range": [
      4037,
      4038
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4038,
    "end": 4044,
    "range": [
      4038,
      4044
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4054,
    "end": 4057,
    "range": [
      4054,
      4057
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4057,
    "end": 4058,
    "range": [
      4057,
      4058
    ]
  },
  {
    "type": "Identifier",
    "value": "PropTypes",
    "start": 4059,
    "end": 4068,
    "range": [
      4059,
      4068
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4068,
    "end": 4069,
    "range": [
      4068,
      4069
    ]
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 4069,
    "end": 4073,
    "range": [
      4069,
      4073
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4073,
    "end": 4074,
    "range": [
      4073,
      4074
    ]
  },
  {
    "type": "Identifier",
    "value": "isRequired",
    "start": 4074,
    "end": 4084,
    "range": [
      4074,
      4084
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4084,
    "end": 4085,
    "range": [
      4084,
      4085
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4090,
    "end": 4091,
    "range": [
      4090,
      4091
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4091,
    "end": 4092,
    "range": [
      4091,
      4092
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4093,
    "end": 4094,
    "range": [
      4093,
      4094
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4095,
    "end": 4100,
    "range": [
      4095,
      4100
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4101,
    "end": 4102,
    "range": [
      4101,
      4102
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4103,
    "end": 4104,
    "range": [
      4103,
      4104
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4105,
    "end": 4106,
    "range": [
      4105,
      4106
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustPropTypesWithSpecifiedGeneric",
    "start": 4106,
    "end": 4139,
    "range": [
      4106,
      4139
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 4140,
    "end": 4143,
    "range": [
      4140,
      4143
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4143,
    "end": 4144,
    "range": [
      4143,
      4144
    ]
  },
  {
    "type": "JSXText",
    "value": "\"nice\"",
    "start": 4144,
    "end": 4150,
    "range": [
      4144,
      4150
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 4151,
    "end": 4154,
    "range": [
      4151,
      4154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4154,
    "end": 4155,
    "range": [
      4154,
      4155
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 4155,
    "end": 4159,
    "range": [
      4155,
      4159
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4160,
    "end": 4161,
    "range": [
      4160,
      4161
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4161,
    "end": 4162,
    "range": [
      4161,
      4162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4162,
    "end": 4163,
    "range": [
      4162,
      4163
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4164,
    "end": 4169,
    "range": [
      4164,
      4169
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4170,
    "end": 4171,
    "range": [
      4170,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4172,
    "end": 4173,
    "range": [
      4172,
      4173
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4174,
    "end": 4175,
    "range": [
      4174,
      4175
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustPropTypesWithSpecifiedGeneric",
    "start": 4175,
    "end": 4208,
    "range": [
      4175,
      4208
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 4209,
    "end": 4212,
    "range": [
      4209,
      4212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4212,
    "end": 4213,
    "range": [
      4212,
      4213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4213,
    "end": 4214,
    "range": [
      4213,
      4214
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 4214,
    "end": 4216,
    "range": [
      4214,
      4216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4216,
    "end": 4217,
    "range": [
      4216,
      4217
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4218,
    "end": 4219,
    "range": [
      4218,
      4219
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4219,
    "end": 4220,
    "range": [
      4219,
      4220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4220,
    "end": 4221,
    "range": [
      4220,
      4221
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4243,
    "end": 4248,
    "range": [
      4243,
      4248
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4249,
    "end": 4250,
    "range": [
      4249,
      4250
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4251,
    "end": 4252,
    "range": [
      4251,
      4252
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4253,
    "end": 4254,
    "range": [
      4253,
      4254
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustPropTypesWithSpecifiedGeneric",
    "start": 4254,
    "end": 4287,
    "range": [
      4254,
      4287
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 4288,
    "end": 4291,
    "range": [
      4288,
      4291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4291,
    "end": 4292,
    "range": [
      4291,
      4292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4292,
    "end": 4293,
    "range": [
      4292,
      4293
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4293,
    "end": 4297,
    "range": [
      4293,
      4297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4297,
    "end": 4298,
    "range": [
      4297,
      4298
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 4299,
    "end": 4302,
    "range": [
      4299,
      4302
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4302,
    "end": 4303,
    "range": [
      4302,
      4303
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 4303,
    "end": 4307,
    "range": [
      4303,
      4307
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4308,
    "end": 4309,
    "range": [
      4308,
      4309
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4309,
    "end": 4310,
    "range": [
      4309,
      4310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4310,
    "end": 4311,
    "range": [
      4310,
      4311
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4375,
    "end": 4380,
    "range": [
      4375,
      4380
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4381,
    "end": 4382,
    "range": [
      4381,
      4382
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4383,
    "end": 4384,
    "range": [
      4383,
      4384
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4385,
    "end": 4386,
    "range": [
      4385,
      4386
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustPropTypesWithSpecifiedGeneric",
    "start": 4386,
    "end": 4419,
    "range": [
      4386,
      4419
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 4420,
    "end": 4423,
    "range": [
      4420,
      4423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4423,
    "end": 4424,
    "range": [
      4423,
      4424
    ]
  },
  {
    "type": "JSXText",
    "value": "\"cool\"",
    "start": 4424,
    "end": 4430,
    "range": [
      4424,
      4430
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 4431,
    "end": 4434,
    "range": [
      4431,
      4434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4434,
    "end": 4435,
    "range": [
      4434,
      4435
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4435,
    "end": 4436,
    "range": [
      4435,
      4436
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4436,
    "end": 4440,
    "range": [
      4436,
      4440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4440,
    "end": 4441,
    "range": [
      4440,
      4441
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4442,
    "end": 4443,
    "range": [
      4442,
      4443
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4443,
    "end": 4444,
    "range": [
      4443,
      4444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4444,
    "end": 4445,
    "range": [
      4444,
      4445
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4473,
    "end": 4478,
    "range": [
      4473,
      4478
    ]
  },
  {
    "type": "Identifier",
    "value": "JustDefaultPropsWithSpecifiedGeneric",
    "start": 4479,
    "end": 4515,
    "range": [
      4479,
      4515
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4516,
    "end": 4523,
    "range": [
      4516,
      4523
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactComponent",
    "start": 4524,
    "end": 4538,
    "range": [
      4524,
      4538
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4538,
    "end": 4539,
    "range": [
      4538,
      4539
    ]
  },
  {
    "type": "Identifier",
    "value": "FooProps",
    "start": 4539,
    "end": 4547,
    "range": [
      4539,
      4547
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4547,
    "end": 4548,
    "range": [
      4547,
      4548
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4549,
    "end": 4550,
    "range": [
      4549,
      4550
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4555,
    "end": 4561,
    "range": [
      4555,
      4561
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 4562,
    "end": 4574,
    "range": [
      4562,
      4574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4575,
    "end": 4576,
    "range": [
      4575,
      4576
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4577,
    "end": 4578,
    "range": [
      4577,
      4578
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4587,
    "end": 4590,
    "range": [
      4587,
      4590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4590,
    "end": 4591,
    "range": [
      4590,
      4591
    ]
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 4592,
    "end": 4596,
    "range": [
      4592,
      4596
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4596,
    "end": 4597,
    "range": [
      4596,
      4597
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4602,
    "end": 4603,
    "range": [
      4602,
      4603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4603,
    "end": 4604,
    "range": [
      4603,
      4604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4605,
    "end": 4606,
    "range": [
      4605,
      4606
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4608,
    "end": 4613,
    "range": [
      4608,
      4613
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4614,
    "end": 4615,
    "range": [
      4614,
      4615
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4616,
    "end": 4617,
    "range": [
      4616,
      4617
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4618,
    "end": 4619,
    "range": [
      4618,
      4619
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustDefaultPropsWithSpecifiedGeneric",
    "start": 4619,
    "end": 4655,
    "range": [
      4619,
      4655
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 4656,
    "end": 4659,
    "range": [
      4656,
      4659
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "JSXText",
    "value": "\"eh\"",
    "start": 4660,
    "end": 4664,
    "range": [
      4660,
      4664
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4665,
    "end": 4666,
    "range": [
      4665,
      4666
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4666,
    "end": 4667,
    "range": [
      4666,
      4667
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4667,
    "end": 4668,
    "range": [
      4667,
      4668
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4669,
    "end": 4674,
    "range": [
      4669,
      4674
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4675,
    "end": 4676,
    "range": [
      4675,
      4676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4677,
    "end": 4678,
    "range": [
      4677,
      4678
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4679,
    "end": 4680,
    "range": [
      4679,
      4680
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustDefaultPropsWithSpecifiedGeneric",
    "start": 4680,
    "end": 4716,
    "range": [
      4680,
      4716
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 4717,
    "end": 4720,
    "range": [
      4717,
      4720
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4720,
    "end": 4721,
    "range": [
      4720,
      4721
    ]
  },
  {
    "type": "JSXText",
    "value": "\"no\"",
    "start": 4721,
    "end": 4725,
    "range": [
      4721,
      4725
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 4726,
    "end": 4729,
    "range": [
      4726,
      4729
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4729,
    "end": 4730,
    "range": [
      4729,
      4730
    ]
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 4730,
    "end": 4734,
    "range": [
      4730,
      4734
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4735,
    "end": 4736,
    "range": [
      4735,
      4736
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4736,
    "end": 4737,
    "range": [
      4736,
      4737
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4737,
    "end": 4738,
    "range": [
      4737,
      4738
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4767,
    "end": 4772,
    "range": [
      4767,
      4772
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4773,
    "end": 4774,
    "range": [
      4773,
      4774
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4775,
    "end": 4776,
    "range": [
      4775,
      4776
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4777,
    "end": 4778,
    "range": [
      4777,
      4778
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustDefaultPropsWithSpecifiedGeneric",
    "start": 4778,
    "end": 4814,
    "range": [
      4778,
      4814
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 4815,
    "end": 4818,
    "range": [
      4815,
      4818
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4818,
    "end": 4819,
    "range": [
      4818,
      4819
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4819,
    "end": 4820,
    "range": [
      4819,
      4820
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 4820,
    "end": 4822,
    "range": [
      4820,
      4822
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4822,
    "end": 4823,
    "range": [
      4822,
      4823
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4824,
    "end": 4825,
    "range": [
      4824,
      4825
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4825,
    "end": 4826,
    "range": [
      4825,
      4826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4826,
    "end": 4827,
    "range": [
      4826,
      4827
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4849,
    "end": 4854,
    "range": [
      4849,
      4854
    ]
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 4855,
    "end": 4857,
    "range": [
      4855,
      4857
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4858,
    "end": 4859,
    "range": [
      4858,
      4859
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4860,
    "end": 4861,
    "range": [
      4860,
      4861
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "JustDefaultPropsWithSpecifiedGeneric",
    "start": 4861,
    "end": 4897,
    "range": [
      4861,
      4897
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4898,
    "end": 4899,
    "range": [
      4898,
      4899
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4899,
    "end": 4900,
    "range": [
      4899,
      4900
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4900,
    "end": 4901,
    "range": [
      4900,
      4901
    ]
  }
]
```
