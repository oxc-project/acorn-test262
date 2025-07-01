__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 68,
          "end": 75
        },
        "start": 60,
        "end": 76
      },
      "importKind": "value",
      "start": 45,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TranslationEntry",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 100
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 113
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 115,
                    "end": 117
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 121,
                        "end": 128
                      }
                    ],
                    "start": 120,
                    "end": 129
                  }
                ],
                "start": 115,
                "end": 129
              },
              "start": 113,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 130
          }
        ],
        "start": 103,
        "end": 132
      },
      "declare": false,
      "start": 79,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Translations",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 150
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 159,
              "end": 160
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 168
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 171,
                            "end": 177
                          }
                        ],
                        "start": 170,
                        "end": 178
                      },
                      "start": 168,
                      "end": 178
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 164,
                    "end": 178
                  }
                ],
                "start": 162,
                "end": 180
              },
              "start": 160,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 159,
            "end": 181
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 187
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 195
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 197,
                        "end": 199
                      },
                      "start": 195,
                      "end": 199
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 191,
                    "end": 199
                  }
                ],
                "start": 189,
                "end": 201
              },
              "start": 187,
              "end": 201
            },
            "accessibility": null,
            "static": false,
            "start": 186,
            "end": 201
          }
        ],
        "start": 153,
        "end": 203
      },
      "declare": false,
      "start": 133,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
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
              "name": "Entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 221
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TranslationEntry",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 246
              },
              "typeArguments": null,
              "start": 230,
              "end": 246
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 246
          }
        ],
        "start": 215,
        "end": 247
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "getTranslationEntry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 275
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allTranslations",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Translations",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 295,
                              "end": 307
                            },
                            "typeArguments": null,
                            "start": 295,
                            "end": 307
                          },
                          "start": 293,
                          "end": 307
                        },
                        "start": 278,
                        "end": 307
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 317
                        },
                        "typeArguments": null,
                        "start": 312,
                        "end": 317
                      },
                      "start": 309,
                      "end": 317
                    },
                    "start": 277,
                    "end": 317
                  },
                  "start": 275,
                  "end": 317
                },
                "accessibility": null,
                "static": false,
                "start": 256,
                "end": 318
              }
            ],
            "start": 250,
            "end": 320
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 329
                },
                "typeArguments": null,
                "start": 324,
                "end": 329
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "args",
                  "raw": "\"args\"",
                  "start": 330,
                  "end": 336
                },
                "start": 330,
                "end": 336
              },
              "start": 324,
              "end": 337
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 347,
                  "end": 354
                }
              ],
              "start": 346,
              "end": 355
            },
            "trueType": {
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
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 368
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 370,
                            "end": 375
                          },
                          "typeArguments": null,
                          "start": 370,
                          "end": 375
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "args",
                            "raw": "\"args\"",
                            "start": 376,
                            "end": 382
                          },
                          "start": 376,
                          "end": 382
                        },
                        "start": 370,
                        "end": 383
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 384,
                          "end": 385
                        },
                        "start": 384,
                        "end": 385
                      },
                      "start": 370,
                      "end": 386
                    },
                    "start": 368,
                    "end": 386
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 364,
                  "end": 386
                }
              ],
              "start": 358,
              "end": 388
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 391,
              "end": 393
            },
            "start": 324,
            "end": 393
          }
        ],
        "start": 250,
        "end": 394
      },
      "declare": false,
      "start": 204,
      "end": 395
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 415
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
              "name": "Entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 421
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TranslationEntry",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 446
              },
              "typeArguments": null,
              "start": 430,
              "end": 446
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 416,
            "end": 446
          }
        ],
        "start": 415,
        "end": 447
      },
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
                "name": "TProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 466
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Entry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 472
                    },
                    "typeArguments": null,
                    "start": 467,
                    "end": 472
                  }
                ],
                "start": 466,
                "end": 473
              },
              "start": 460,
              "end": 473
            },
            "start": 458,
            "end": 473
          },
          "start": 453,
          "end": 473
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 480
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 488
            },
            "start": 477,
            "end": 488
          },
          "typeArguments": null,
          "start": 477,
          "end": 488
        },
        "start": 475,
        "end": 488
      },
      "body": null,
      "expression": false,
      "start": 397,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "T",
            "start": 492,
            "end": 493
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "getTranslationEntry",
                "start": 494,
                "end": 513
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "allTranslations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 531
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "allTranslations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 551
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 553
                    },
                    "optional": false,
                    "computed": false,
                    "start": 536,
                    "end": 553
                  },
                  "id": null,
                  "generator": false,
                  "start": 515,
                  "end": 553
                },
                "start": 514,
                "end": 554
              },
              "start": 494,
              "end": 554
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "args",
                "start": 555,
                "end": 559
              },
              "value": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 560,
                "end": 563
              },
              "start": 555,
              "end": 563
            }
          ],
          "selfClosing": true,
          "start": 491,
          "end": 566
        },
        "children": [],
        "closingElement": null,
        "start": 491,
        "end": 566
      },
      "directive": null,
      "start": 491,
      "end": 566
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 566
}
```
