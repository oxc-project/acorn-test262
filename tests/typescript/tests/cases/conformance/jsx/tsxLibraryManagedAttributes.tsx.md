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
