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
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 23
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
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 23,
        "end": 26
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
              "start": 31,
              "end": 42
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
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 58
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
                              "start": 59,
                              "end": 60
                            },
                            "typeArguments": null,
                            "start": 59,
                            "end": 60
                          }
                        ],
                        "start": 58,
                        "end": 61
                      },
                      "start": 50,
                      "end": 61
                    },
                    "start": 48,
                    "end": 61
                  },
                  "start": 43,
                  "end": 61
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 42,
              "end": 63
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 63
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 77
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
                        "start": 85,
                        "end": 86
                      },
                      "typeArguments": null,
                      "start": 85,
                      "end": 86
                    },
                    "start": 83,
                    "end": 86
                  },
                  "start": 78,
                  "end": 86
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    },
                    "start": 96,
                    "end": 101
                  },
                  "start": 88,
                  "end": 101
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 77,
              "end": 103
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 103
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
              "start": 115,
              "end": 120
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
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 130
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
                            "start": 131,
                            "end": 132
                          },
                          "typeArguments": null,
                          "start": 131,
                          "end": 132
                        }
                      ],
                      "start": 130,
                      "end": 133
                    },
                    "start": 122,
                    "end": 133
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 144
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
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "children",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 147,
                                "end": 155
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "members": [],
                                  "start": 158,
                                  "end": 160
                                },
                                "start": 156,
                                "end": 160
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 147,
                              "end": 160
                            }
                          ],
                          "start": 145,
                          "end": 162
                        }
                      ],
                      "start": 144,
                      "end": 163
                    },
                    "start": 136,
                    "end": 163
                  }
                ],
                "start": 122,
                "end": 163
              },
              "start": 120,
              "end": 163
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 106,
            "end": 164
          }
        ],
        "start": 27,
        "end": 166
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 191
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
              "start": 192,
              "end": 193
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 196,
              "end": 198
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 192,
            "end": 198
          }
        ],
        "start": 191,
        "end": 199
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "start": 216,
                      "end": 217
                    },
                    "typeArguments": null,
                    "start": 216,
                    "end": 217
                  },
                  "start": 214,
                  "end": 217
                },
                "start": 209,
                "end": 217
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 229,
                    "end": 232
                  },
                  "start": 227,
                  "end": 232
                },
                "start": 219,
                "end": 232
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 244
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
                        "start": 245,
                        "end": 246
                      },
                      "typeArguments": null,
                      "start": 245,
                      "end": 246
                    }
                  ],
                  "start": 244,
                  "end": 247
                },
                "start": 235,
                "end": 247
              },
              "start": 233,
              "end": 247
            },
            "start": 204,
            "end": 248
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 280
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
                        "start": 281,
                        "end": 282
                      },
                      "typeArguments": null,
                      "start": 281,
                      "end": 282
                    }
                  ],
                  "start": 280,
                  "end": 283
                },
                "start": 263,
                "end": 283
              },
              "start": 261,
              "end": 283
            },
            "accessibility": null,
            "static": false,
            "start": 251,
            "end": 284
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 299
            },
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
                  "start": 302,
                  "end": 309
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
                        "start": 310,
                        "end": 311
                      },
                      "typeArguments": null,
                      "start": 310,
                      "end": 311
                    }
                  ],
                  "start": 309,
                  "end": 312
                },
                "start": 302,
                "end": 312
              },
              "start": 300,
              "end": 312
            },
            "accessibility": null,
            "static": false,
            "start": 287,
            "end": 313
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "displayName",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 327
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 330,
                "end": 336
              },
              "start": 328,
              "end": 336
            },
            "accessibility": null,
            "static": false,
            "start": 316,
            "end": 337
          }
        ],
        "start": 200,
        "end": 339
      },
      "declare": false,
      "start": 167,
      "end": 339
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 367
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
              "start": 368,
              "end": 369
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 372,
              "end": 374
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 368,
            "end": 374
          }
        ],
        "start": 367,
        "end": 375
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
                          "start": 388,
                          "end": 389
                        },
                        "typeArguments": null,
                        "start": 388,
                        "end": 389
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 394,
                              "end": 402
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [],
                                "start": 405,
                                "end": 407
                              },
                              "start": 403,
                              "end": 407
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 394,
                            "end": 407
                          }
                        ],
                        "start": 392,
                        "end": 409
                      }
                    ],
                    "start": 388,
                    "end": 409
                  },
                  "start": 386,
                  "end": 409
                },
                "start": 381,
                "end": 409
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 421,
                    "end": 424
                  },
                  "start": 419,
                  "end": 424
                },
                "start": 411,
                "end": 424
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 427,
                    "end": 429
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 432,
                    "end": 436
                  }
                ],
                "start": 427,
                "end": 436
              },
              "start": 425,
              "end": 436
            },
            "start": 380,
            "end": 437
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 449
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 452,
                  "end": 469
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
                        "start": 470,
                        "end": 471
                      },
                      "typeArguments": null,
                      "start": 470,
                      "end": 471
                    }
                  ],
                  "start": 469,
                  "end": 472
                },
                "start": 452,
                "end": 472
              },
              "start": 450,
              "end": 472
            },
            "accessibility": null,
            "static": false,
            "start": 440,
            "end": 473
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defaultProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 488
            },
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
                  "start": 491,
                  "end": 498
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
                        "start": 499,
                        "end": 500
                      },
                      "typeArguments": null,
                      "start": 499,
                      "end": 500
                    }
                  ],
                  "start": 498,
                  "end": 501
                },
                "start": 491,
                "end": 501
              },
              "start": 489,
              "end": 501
            },
            "accessibility": null,
            "static": false,
            "start": 476,
            "end": 502
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "displayName",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 516
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 519,
                "end": 525
              },
              "start": 517,
              "end": 525
            },
            "accessibility": null,
            "static": false,
            "start": 505,
            "end": 526
          }
        ],
        "start": 376,
        "end": 528
      },
      "declare": false,
      "start": 340,
      "end": 528
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
            "name": "nominalTypeHack",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 568,
                  "end": 574
                },
                "start": 561,
                "end": 574
              },
              "start": 559,
              "end": 574
            },
            "start": 544,
            "end": 574
          },
          "init": null,
          "definite": false,
          "start": 544,
          "end": 574
        }
      ],
      "declare": true,
      "start": 530,
      "end": 575
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validator",
        "optional": false,
        "typeAnnotation": null,
        "start": 586,
        "end": 595
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
              "start": 596,
              "end": 597
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 596,
            "end": 597
          }
        ],
        "start": 595,
        "end": 598
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
                    "type": "TSObjectKeyword",
                    "start": 616,
                    "end": 622
                  },
                  "start": 614,
                  "end": 622
                },
                "start": 609,
                "end": 622
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
                    "start": 638,
                    "end": 644
                  },
                  "start": 636,
                  "end": 644
                },
                "start": 628,
                "end": 644
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
                    "start": 665,
                    "end": 671
                  },
                  "start": 663,
                  "end": 671
                },
                "start": 650,
                "end": 671
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "location",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 687,
                    "end": 693
                  },
                  "start": 685,
                  "end": 693
                },
                "start": 677,
                "end": 693
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
                    "start": 713,
                    "end": 719
                  },
                  "start": 711,
                  "end": 719
                },
                "start": 699,
                "end": 719
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 730
                    },
                    "typeArguments": null,
                    "start": 725,
                    "end": 730
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 733,
                    "end": 737
                  }
                ],
                "start": 725,
                "end": 737
              },
              "start": 723,
              "end": 737
            },
            "start": 603,
            "end": 738
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nominalTypeHack",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 757
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
                  "start": 761,
                  "end": 762
                },
                "typeArguments": null,
                "start": 761,
                "end": 762
              },
              "start": 759,
              "end": 762
            },
            "accessibility": null,
            "static": false,
            "start": 741,
            "end": 763
          }
        ],
        "start": 599,
        "end": 765
      },
      "declare": false,
      "start": 576,
      "end": 765
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WeakValidationMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 788
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
              "start": 789,
              "end": 790
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 789,
            "end": 790
          }
        ],
        "start": 788,
        "end": 791
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 799,
          "end": 800
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 811
            },
            "typeArguments": null,
            "start": 810,
            "end": 811
          },
          "start": 804,
          "end": 811
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "start": 815,
            "end": 819
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 829
              },
              "typeArguments": null,
              "start": 828,
              "end": 829
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 831
              },
              "typeArguments": null,
              "start": 830,
              "end": 831
            },
            "start": 828,
            "end": 832
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 839,
              "end": 848
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 849,
                          "end": 850
                        },
                        "typeArguments": null,
                        "start": 849,
                        "end": 850
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 851,
                          "end": 852
                        },
                        "typeArguments": null,
                        "start": 851,
                        "end": 852
                      },
                      "start": 849,
                      "end": 853
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 856,
                      "end": 860
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 863,
                      "end": 872
                    }
                  ],
                  "start": 849,
                  "end": 872
                }
              ],
              "start": 848,
              "end": 873
            },
            "start": 839,
            "end": 873
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 880,
              "end": 889
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 898,
                  "end": 899
                },
                "typeArguments": null,
                "start": 898,
                "end": 899
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 901
                },
                "typeArguments": null,
                "start": 900,
                "end": 901
              },
              "start": 898,
              "end": 902
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 909,
                "end": 918
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 919,
                            "end": 920
                          },
                          "typeArguments": null,
                          "start": 919,
                          "end": 920
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 921,
                            "end": 922
                          },
                          "typeArguments": null,
                          "start": 921,
                          "end": 922
                        },
                        "start": 919,
                        "end": 923
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 926,
                        "end": 930
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 933,
                        "end": 942
                      }
                    ],
                    "start": 919,
                    "end": 942
                  }
                ],
                "start": 918,
                "end": 943
              },
              "start": 909,
              "end": 943
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 959
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 961
                      },
                      "typeArguments": null,
                      "start": 960,
                      "end": 961
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 962,
                        "end": 963
                      },
                      "typeArguments": null,
                      "start": 962,
                      "end": 963
                    },
                    "start": 960,
                    "end": 964
                  }
                ],
                "start": 959,
                "end": 965
              },
              "start": 950,
              "end": 965
            },
            "start": 880,
            "end": 965
          },
          "start": 815,
          "end": 965
        },
        "optional": true,
        "readonly": null,
        "start": 794,
        "end": 967
      },
      "declare": false,
      "start": 766,
      "end": 968
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentType",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 987
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
              "start": 988,
              "end": 989
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 992,
              "end": 994
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 988,
            "end": 994
          }
        ],
        "start": 987,
        "end": 995
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 1012
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
                    "start": 1013,
                    "end": 1014
                  },
                  "typeArguments": null,
                  "start": 1013,
                  "end": 1014
                }
              ],
              "start": 1012,
              "end": 1015
            },
            "start": 998,
            "end": 1015
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1035
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
                    "start": 1036,
                    "end": 1037
                  },
                  "typeArguments": null,
                  "start": 1036,
                  "end": 1037
                }
              ],
              "start": 1035,
              "end": 1038
            },
            "start": 1018,
            "end": 1038
          }
        ],
        "start": 998,
        "end": 1038
      },
      "declare": false,
      "start": 969,
      "end": 1039
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shared",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1052
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "InjectedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1069
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1056,
            "end": 1069
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1094
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shared",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1109
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InjectedProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1110,
                      "end": 1123
                    },
                    "typeArguments": null,
                    "start": 1110,
                    "end": 1123
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1125,
                      "end": 1146
                    },
                    "typeArguments": null,
                    "start": 1125,
                    "end": 1146
                  }
                ],
                "start": 1109,
                "end": 1147
              },
              "start": 1103,
              "end": 1147
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1073,
            "end": 1147
          }
        ],
        "start": 1052,
        "end": 1149
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1157,
          "end": 1158
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 1162,
            "end": 1169
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
                    "name": "InjectedProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1181,
                    "end": 1194
                  },
                  "typeArguments": null,
                  "start": 1181,
                  "end": 1194
                },
                "start": 1175,
                "end": 1194
              },
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1206,
                    "end": 1227
                  },
                  "typeArguments": null,
                  "start": 1206,
                  "end": 1227
                },
                "start": 1200,
                "end": 1227
              }
            ],
            "start": 1169,
            "end": 1231
          },
          "start": 1162,
          "end": 1231
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
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1235,
                "end": 1248
              },
              "typeArguments": null,
              "start": 1235,
              "end": 1248
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1250
              },
              "typeArguments": null,
              "start": 1249,
              "end": 1250
            },
            "start": 1235,
            "end": 1251
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1260,
                "end": 1281
              },
              "typeArguments": null,
              "start": 1260,
              "end": 1281
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1283
              },
              "typeArguments": null,
              "start": 1282,
              "end": 1283
            },
            "start": 1260,
            "end": 1284
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1291,
                "end": 1312
              },
              "typeArguments": null,
              "start": 1291,
              "end": 1312
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1313,
                "end": 1314
              },
              "typeArguments": null,
              "start": 1313,
              "end": 1314
            },
            "start": 1291,
            "end": 1315
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1322,
            "end": 1327
          },
          "start": 1235,
          "end": 1327
        },
        "optional": true,
        "readonly": null,
        "start": 1152,
        "end": 1329
      },
      "declare": false,
      "start": 1041,
      "end": 1330
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1374,
        "end": 1382
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1383,
              "end": 1384
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1383,
            "end": 1384
          }
        ],
        "start": 1382,
        "end": 1385
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1388,
            "end": 1389
          },
          "typeArguments": null,
          "start": 1388,
          "end": 1389
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1398,
            "end": 1411
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
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1418,
                    "end": 1419
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1418,
                  "end": 1419
                },
                "start": 1412,
                "end": 1419
              }
            ],
            "start": 1411,
            "end": 1420
          },
          "start": 1398,
          "end": 1420
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1423,
            "end": 1424
          },
          "typeArguments": null,
          "start": 1423,
          "end": 1424
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1427,
          "end": 1432
        },
        "start": 1388,
        "end": 1432
      },
      "declare": false,
      "start": 1369,
      "end": 1433
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConnectedComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1440,
        "end": 1463
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1465
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1474,
                "end": 1487
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1488,
                    "end": 1491
                  }
                ],
                "start": 1487,
                "end": 1492
              },
              "start": 1474,
              "end": 1492
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1464,
            "end": 1492
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1494,
              "end": 1495
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1494,
            "end": 1495
          }
        ],
        "start": 1463,
        "end": 1496
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1499,
              "end": 1513
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
                    "start": 1517,
                    "end": 1518
                  },
                  "typeArguments": null,
                  "start": 1517,
                  "end": 1518
                }
              ],
              "start": 1513,
              "end": 1520
            },
            "start": 1499,
            "end": 1520
          },
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
                  "name": "WrappedComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1527,
                  "end": 1543
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1545,
                      "end": 1546
                    },
                    "typeArguments": null,
                    "start": 1545,
                    "end": 1546
                  },
                  "start": 1543,
                  "end": 1546
                },
                "accessibility": null,
                "static": false,
                "start": 1527,
                "end": 1547
              }
            ],
            "start": 1523,
            "end": 1549
          }
        ],
        "start": 1499,
        "end": 1549
      },
      "declare": false,
      "start": 1435,
      "end": 1550
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Matching",
        "optional": false,
        "typeAnnotation": null,
        "start": 1557,
        "end": 1565
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "InjectedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1566,
              "end": 1579
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1566,
            "end": 1579
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1581,
              "end": 1602
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1581,
            "end": 1602
          }
        ],
        "start": 1565,
        "end": 1603
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1611,
          "end": 1612
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DecorationTargetProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1622,
              "end": 1643
            },
            "typeArguments": null,
            "start": 1622,
            "end": 1643
          },
          "start": 1616,
          "end": 1643
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1646,
              "end": 1647
            },
            "typeArguments": null,
            "start": 1646,
            "end": 1647
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InjectedProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1662,
                "end": 1675
              },
              "typeArguments": null,
              "start": 1662,
              "end": 1675
            },
            "start": 1656,
            "end": 1675
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InjectedProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1682,
                  "end": 1695
                },
                "typeArguments": null,
                "start": 1682,
                "end": 1695
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1697
                },
                "typeArguments": null,
                "start": 1696,
                "end": 1697
              },
              "start": 1682,
              "end": 1698
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1707,
                  "end": 1728
                },
                "typeArguments": null,
                "start": 1707,
                "end": 1728
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1730
                },
                "typeArguments": null,
                "start": 1729,
                "end": 1730
              },
              "start": 1707,
              "end": 1731
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1740,
                  "end": 1761
                },
                "typeArguments": null,
                "start": 1740,
                "end": 1761
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1762,
                  "end": 1763
                },
                "typeArguments": null,
                "start": 1762,
                "end": 1763
              },
              "start": 1740,
              "end": 1764
            },
            "falseType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InjectedProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1773,
                  "end": 1786
                },
                "typeArguments": null,
                "start": 1773,
                "end": 1786
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1787,
                  "end": 1788
                },
                "typeArguments": null,
                "start": 1787,
                "end": 1788
              },
              "start": 1773,
              "end": 1789
            },
            "start": 1682,
            "end": 1789
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1796,
                "end": 1817
              },
              "typeArguments": null,
              "start": 1796,
              "end": 1817
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1818,
                "end": 1819
              },
              "typeArguments": null,
              "start": 1818,
              "end": 1819
            },
            "start": 1796,
            "end": 1820
          },
          "start": 1646,
          "end": 1820
        },
        "optional": false,
        "readonly": null,
        "start": 1606,
        "end": 1822
      },
      "declare": false,
      "start": 1552,
      "end": 1823
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 1830,
        "end": 1834
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
              "start": 1835,
              "end": 1836
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1835,
            "end": 1836
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1838,
              "end": 1839
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1854,
                  "end": 1855
                },
                "typeArguments": null,
                "start": 1854,
                "end": 1855
              },
              "start": 1848,
              "end": 1855
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1838,
            "end": 1855
          }
        ],
        "start": 1834,
        "end": 1856
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 1859,
          "end": 1863
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
                "start": 1864,
                "end": 1865
              },
              "typeArguments": null,
              "start": 1864,
              "end": 1865
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 1867,
                "end": 1874
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1881,
                        "end": 1882
                      },
                      "typeArguments": null,
                      "start": 1881,
                      "end": 1882
                    },
                    "start": 1875,
                    "end": 1882
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1884,
                      "end": 1885
                    },
                    "typeArguments": null,
                    "start": 1884,
                    "end": 1885
                  }
                ],
                "start": 1874,
                "end": 1886
              },
              "start": 1867,
              "end": 1886
            }
          ],
          "start": 1863,
          "end": 1887
        },
        "start": 1859,
        "end": 1887
      },
      "declare": false,
      "start": 1825,
      "end": 1888
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferableComponentEnhancerWithProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 1895,
        "end": 1930
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TInjectedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1931,
              "end": 1945
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1931,
            "end": 1945
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TNeedsProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 1947,
              "end": 1958
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1947,
            "end": 1958
          }
        ],
        "start": 1930,
        "end": 1959
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1966,
                "end": 1967
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1976,
                  "end": 1989
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Matching",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1990,
                        "end": 1998
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TInjectedProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1999,
                              "end": 2013
                            },
                            "typeArguments": null,
                            "start": 1999,
                            "end": 2013
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "GetProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2015,
                              "end": 2023
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2024,
                                    "end": 2025
                                  },
                                  "typeArguments": null,
                                  "start": 2024,
                                  "end": 2025
                                }
                              ],
                              "start": 2023,
                              "end": 2026
                            },
                            "start": 2015,
                            "end": 2026
                          }
                        ],
                        "start": 1998,
                        "end": 2027
                      },
                      "start": 1990,
                      "end": 2027
                    }
                  ],
                  "start": 1989,
                  "end": 2028
                },
                "start": 1976,
                "end": 2028
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1966,
              "end": 2028
            }
          ],
          "start": 1962,
          "end": 2030
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2045,
                  "end": 2046
                },
                "typeArguments": null,
                "start": 2045,
                "end": 2046
              },
              "start": 2043,
              "end": 2046
            },
            "start": 2034,
            "end": 2046
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConnectedComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2075
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2079,
                    "end": 2080
                  },
                  "typeArguments": null,
                  "start": 2079,
                  "end": 2080
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Omit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2084,
                        "end": 2088
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "GetProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2089,
                              "end": 2097
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2098,
                                    "end": 2099
                                  },
                                  "typeArguments": null,
                                  "start": 2098,
                                  "end": 2099
                                }
                              ],
                              "start": 2097,
                              "end": 2100
                            },
                            "start": 2089,
                            "end": 2100
                          },
                          {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Shared",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2108,
                                "end": 2114
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TInjectedProps",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2115,
                                      "end": 2129
                                    },
                                    "typeArguments": null,
                                    "start": 2115,
                                    "end": 2129
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "GetProps",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2131,
                                      "end": 2139
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "C",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2140,
                                            "end": 2141
                                          },
                                          "typeArguments": null,
                                          "start": 2140,
                                          "end": 2141
                                        }
                                      ],
                                      "start": 2139,
                                      "end": 2142
                                    },
                                    "start": 2131,
                                    "end": 2142
                                  }
                                ],
                                "start": 2114,
                                "end": 2143
                              },
                              "start": 2108,
                              "end": 2143
                            },
                            "start": 2102,
                            "end": 2143
                          }
                        ],
                        "start": 2088,
                        "end": 2144
                      },
                      "start": 2084,
                      "end": 2144
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TNeedsProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2147,
                        "end": 2158
                      },
                      "typeArguments": null,
                      "start": 2147,
                      "end": 2158
                    }
                  ],
                  "start": 2084,
                  "end": 2158
                }
              ],
              "start": 2075,
              "end": 2160
            },
            "start": 2052,
            "end": 2160
          },
          "start": 2049,
          "end": 2160
        },
        "start": 1962,
        "end": 2160
      },
      "declare": false,
      "start": 1890,
      "end": 2161
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
            "name": "connect",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "no_state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2191,
                            "end": 2199
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 2202,
                            "end": 2204
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2191,
                          "end": 2204
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TDispatchProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2206,
                            "end": 2220
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 2223,
                            "end": 2225
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2206,
                          "end": 2225
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TOwnProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2227,
                            "end": 2236
                          },
                          "constraint": null,
                          "default": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 2239,
                            "end": 2241
                          },
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2227,
                          "end": 2241
                        }
                      ],
                      "start": 2190,
                      "end": 2242
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapStateToProps",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNullKeyword",
                                "start": 2265,
                                "end": 2269
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 2272,
                                "end": 2281
                              }
                            ],
                            "start": 2265,
                            "end": 2281
                          },
                          "start": 2263,
                          "end": 2281
                        },
                        "start": 2248,
                        "end": 2281
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapDispatchToProps",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TDispatchProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2307,
                              "end": 2321
                            },
                            "typeArguments": null,
                            "start": 2307,
                            "end": 2321
                          },
                          "start": 2305,
                          "end": 2321
                        },
                        "start": 2287,
                        "end": 2321
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InferableComponentEnhancerWithProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2327,
                          "end": 2362
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ResolveThunks",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2368,
                                "end": 2381
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TDispatchProps",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2382,
                                      "end": 2396
                                    },
                                    "typeArguments": null,
                                    "start": 2382,
                                    "end": 2396
                                  }
                                ],
                                "start": 2381,
                                "end": 2397
                              },
                              "start": 2368,
                              "end": 2397
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TOwnProps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2403,
                                "end": 2412
                              },
                              "typeArguments": null,
                              "start": 2403,
                              "end": 2412
                            }
                          ],
                          "start": 2362,
                          "end": 2416
                        },
                        "start": 2327,
                        "end": 2416
                      },
                      "start": 2325,
                      "end": 2416
                    },
                    "start": 2190,
                    "end": 2417
                  }
                ],
                "start": 2186,
                "end": 2419
              },
              "start": 2184,
              "end": 2419
            },
            "start": 2177,
            "end": 2419
          },
          "init": null,
          "definite": false,
          "start": 2177,
          "end": 2419
        }
      ],
      "declare": true,
      "start": 2163,
      "end": 2420
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferThunkActionCreatorType",
        "optional": false,
        "typeAnnotation": null,
        "start": 2427,
        "end": 2454
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActionCreator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2458,
              "end": 2472
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2485,
                    "end": 2489
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2491,
                        "end": 2494
                      },
                      "start": 2491,
                      "end": 2496
                    },
                    "start": 2489,
                    "end": 2496
                  },
                  "value": null,
                  "start": 2482,
                  "end": 2496
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2501,
                  "end": 2504
                },
                "start": 2498,
                "end": 2504
              },
              "start": 2481,
              "end": 2504
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2458,
            "end": 2504
          }
        ],
        "start": 2454,
        "end": 2506
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2509,
            "end": 2523
          },
          "typeArguments": null,
          "start": 2509,
          "end": 2523
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 2539,
                "end": 2543
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TParams",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2551,
                      "end": 2558
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2551,
                    "end": 2558
                  },
                  "start": 2545,
                  "end": 2558
                },
                "start": 2543,
                "end": 2558
              },
              "value": null,
              "start": 2536,
              "end": 2558
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2568,
                    "end": 2572
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2574,
                        "end": 2577
                      },
                      "start": 2574,
                      "end": 2579
                    },
                    "start": 2572,
                    "end": 2579
                  },
                  "value": null,
                  "start": 2565,
                  "end": 2579
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TReturn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2590,
                      "end": 2597
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2590,
                    "end": 2597
                  },
                  "start": 2584,
                  "end": 2597
                },
                "start": 2581,
                "end": 2597
              },
              "start": 2564,
              "end": 2597
            },
            "start": 2561,
            "end": 2597
          },
          "start": 2532,
          "end": 2597
        },
        "trueType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 2606,
                "end": 2610
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TParams",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2612,
                    "end": 2619
                  },
                  "typeArguments": null,
                  "start": 2612,
                  "end": 2619
                },
                "start": 2610,
                "end": 2619
              },
              "value": null,
              "start": 2603,
              "end": 2619
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TReturn",
                "optional": false,
                "typeAnnotation": null,
                "start": 2624,
                "end": 2631
              },
              "typeArguments": null,
              "start": 2624,
              "end": 2631
            },
            "start": 2621,
            "end": 2631
          },
          "start": 2602,
          "end": 2631
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2636,
            "end": 2650
          },
          "typeArguments": null,
          "start": 2636,
          "end": 2650
        },
        "start": 2509,
        "end": 2650
      },
      "declare": false,
      "start": 2422,
      "end": 2651
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandleThunkActionCreator",
        "optional": false,
        "typeAnnotation": null,
        "start": 2658,
        "end": 2682
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActionCreator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2683,
              "end": 2697
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2683,
            "end": 2697
          }
        ],
        "start": 2682,
        "end": 2698
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2701,
            "end": 2715
          },
          "typeArguments": null,
          "start": 2701,
          "end": 2715
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 2731,
                "end": 2735
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2737,
                    "end": 2740
                  },
                  "start": 2737,
                  "end": 2742
                },
                "start": 2735,
                "end": 2742
              },
              "value": null,
              "start": 2728,
              "end": 2742
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2748,
              "end": 2751
            },
            "start": 2745,
            "end": 2751
          },
          "start": 2724,
          "end": 2751
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferThunkActionCreatorType",
            "optional": false,
            "typeAnnotation": null,
            "start": 2756,
            "end": 2783
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TActionCreator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2784,
                  "end": 2798
                },
                "typeArguments": null,
                "start": 2784,
                "end": 2798
              }
            ],
            "start": 2783,
            "end": 2799
          },
          "start": 2756,
          "end": 2799
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TActionCreator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2804,
            "end": 2818
          },
          "typeArguments": null,
          "start": 2804,
          "end": 2818
        },
        "start": 2701,
        "end": 2818
      },
      "declare": false,
      "start": 2653,
      "end": 2819
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResolveThunks",
        "optional": false,
        "typeAnnotation": null,
        "start": 2826,
        "end": 2839
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDispatchProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 2840,
              "end": 2854
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2840,
            "end": 2854
          }
        ],
        "start": 2839,
        "end": 2855
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TDispatchProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 2858,
            "end": 2872
          },
          "typeArguments": null,
          "start": 2858,
          "end": 2872
        },
        "extendsType": {
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
                      "start": 2891,
                      "end": 2897
                    },
                    "start": 2889,
                    "end": 2897
                  },
                  "start": 2886,
                  "end": 2897
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2900,
                  "end": 2903
                },
                "start": 2898,
                "end": 2903
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 2885,
              "end": 2904
            }
          ],
          "start": 2881,
          "end": 2906
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2914,
            "end": 2915
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TDispatchProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 2925,
                "end": 2939
              },
              "typeArguments": null,
              "start": 2925,
              "end": 2939
            },
            "start": 2919,
            "end": 2939
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandleThunkActionCreator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2942,
              "end": 2966
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
                      "name": "TDispatchProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2967,
                      "end": 2981
                    },
                    "typeArguments": null,
                    "start": 2967,
                    "end": 2981
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2982,
                      "end": 2983
                    },
                    "typeArguments": null,
                    "start": 2982,
                    "end": 2983
                  },
                  "start": 2967,
                  "end": 2984
                }
              ],
              "start": 2966,
              "end": 2985
            },
            "start": 2942,
            "end": 2985
          },
          "optional": false,
          "readonly": null,
          "start": 2911,
          "end": 2987
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TDispatchProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 2992,
            "end": 3006
          },
          "typeArguments": null,
          "start": 2992,
          "end": 3006
        },
        "start": 2858,
        "end": 3006
      },
      "declare": false,
      "start": 2821,
      "end": 3007
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dispatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 3019,
        "end": 3027
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
              "start": 3028,
              "end": 3029
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 3038,
                "end": 3044
              },
              "typeArguments": null,
              "start": 3038,
              "end": 3044
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3047,
                "end": 3056
              },
              "typeArguments": null,
              "start": 3047,
              "end": 3056
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3028,
            "end": 3056
          }
        ],
        "start": 3027,
        "end": 3057
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 3063,
                    "end": 3064
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3073,
                      "end": 3074
                    },
                    "typeArguments": null,
                    "start": 3073,
                    "end": 3074
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3063,
                  "end": 3074
                }
              ],
              "start": 3062,
              "end": 3075
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
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
                      "start": 3084,
                      "end": 3085
                    },
                    "typeArguments": null,
                    "start": 3084,
                    "end": 3085
                  },
                  "start": 3082,
                  "end": 3085
                },
                "start": 3076,
                "end": 3085
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3088,
                  "end": 3089
                },
                "typeArguments": null,
                "start": 3088,
                "end": 3089
              },
              "start": 3086,
              "end": 3089
            },
            "start": 3062,
            "end": 3090
          }
        ],
        "start": 3058,
        "end": 3092
      },
      "declare": false,
      "start": 3009,
      "end": 3092
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 3103,
        "end": 3109
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
              "start": 3110,
              "end": 3111
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 3114,
              "end": 3117
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3110,
            "end": 3117
          }
        ],
        "start": 3109,
        "end": 3118
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 3123,
              "end": 3127
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
                  "start": 3129,
                  "end": 3130
                },
                "typeArguments": null,
                "start": 3129,
                "end": 3130
              },
              "start": 3127,
              "end": 3130
            },
            "accessibility": null,
            "static": false,
            "start": 3123,
            "end": 3131
          }
        ],
        "start": 3119,
        "end": 3133
      },
      "declare": false,
      "start": 3093,
      "end": 3133
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 3144,
        "end": 3153
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Action",
            "optional": false,
            "typeAnnotation": null,
            "start": 3162,
            "end": 3168
          },
          "typeArguments": null,
          "start": 3162,
          "end": 3168
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "extraProps",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3186,
                    "end": 3192
                  },
                  "start": 3184,
                  "end": 3192
                },
                "start": 3174,
                "end": 3192
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3195,
                "end": 3198
              },
              "start": 3193,
              "end": 3198
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3173,
            "end": 3199
          }
        ],
        "start": 3169,
        "end": 3201
      },
      "declare": false,
      "start": 3134,
      "end": 3201
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
            "name": "simpleAction",
            "optional": false,
            "typeAnnotation": null,
            "start": 3209,
            "end": 3221
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 3234,
                    "end": 3241
                  },
                  "start": 3232,
                  "end": 3241
                },
                "start": 3225,
                "end": 3241
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3251,
                    "end": 3255
                  },
                  "value": {
                    "type": "Literal",
                    "value": "SIMPLE_ACTION",
                    "raw": "\"SIMPLE_ACTION\"",
                    "start": 3257,
                    "end": 3272
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3251,
                  "end": 3272
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3276,
                    "end": 3283
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3276,
                    "end": 3283
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3276,
                  "end": 3283
                }
              ],
              "start": 3247,
              "end": 3285
            },
            "id": null,
            "generator": false,
            "start": 3224,
            "end": 3286
          },
          "definite": false,
          "start": 3209,
          "end": 3286
        }
      ],
      "declare": false,
      "start": 3203,
      "end": 3287
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
            "name": "thunkAction",
            "optional": false,
            "typeAnnotation": null,
            "start": 3294,
            "end": 3305
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3317,
                    "end": 3323
                  },
                  "start": 3315,
                  "end": 3323
                },
                "start": 3309,
                "end": 3323
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3333,
                    "end": 3339
                  },
                  "start": 3331,
                  "end": 3339
                },
                "start": 3325,
                "end": 3339
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dispatch",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dispatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3364,
                        "end": 3372
                      },
                      "typeArguments": null,
                      "start": 3364,
                      "end": 3372
                    },
                    "start": 3362,
                    "end": 3372
                  },
                  "start": 3354,
                  "end": 3372
                },
                {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 3378,
                        "end": 3381
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3378,
                        "end": 3381
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 3378,
                      "end": 3381
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OwnProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3385,
                        "end": 3393
                      },
                      "typeArguments": null,
                      "start": 3385,
                      "end": 3393
                    },
                    "start": 3383,
                    "end": 3393
                  },
                  "start": 3376,
                  "end": 3393
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3410,
                      "end": 3413
                    },
                    "start": 3403,
                    "end": 3414
                  }
                ],
                "start": 3399,
                "end": 3416
              },
              "id": null,
              "generator": false,
              "start": 3344,
              "end": 3416
            },
            "id": null,
            "generator": false,
            "start": 3308,
            "end": 3416
          },
          "definite": false,
          "start": 3294,
          "end": 3416
        }
      ],
      "declare": false,
      "start": 3288,
      "end": 3417
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OwnProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3428,
        "end": 3436
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
              "start": 3441,
              "end": 3444
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3446,
                "end": 3452
              },
              "start": 3444,
              "end": 3452
            },
            "accessibility": null,
            "static": false,
            "start": 3441,
            "end": 3453
          }
        ],
        "start": 3437,
        "end": 3455
      },
      "declare": false,
      "start": 3418,
      "end": 3455
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestComponentProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3466,
        "end": 3484
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "OwnProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 3493,
            "end": 3501
          },
          "typeArguments": null,
          "start": 3493,
          "end": 3501
        }
      ],
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
              "name": "simpleAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 3506,
              "end": 3518
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3527,
                  "end": 3539
                },
                "typeArguments": null,
                "start": 3520,
                "end": 3539
              },
              "start": 3518,
              "end": 3539
            },
            "accessibility": null,
            "static": false,
            "start": 3506,
            "end": 3540
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thunkAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 3543,
              "end": 3554
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3563,
                    "end": 3569
                  },
                  "start": 3561,
                  "end": 3569
                },
                "start": 3555,
                "end": 3569
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3579,
                    "end": 3585
                  },
                  "start": 3577,
                  "end": 3585
                },
                "start": 3571,
                "end": 3585
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3588,
                  "end": 3595
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3596,
                      "end": 3602
                    }
                  ],
                  "start": 3595,
                  "end": 3603
                },
                "start": 3588,
                "end": 3603
              },
              "start": 3586,
              "end": 3603
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3543,
            "end": 3604
          }
        ],
        "start": 3502,
        "end": 3606
      },
      "declare": false,
      "start": 3456,
      "end": 3606
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 3613,
        "end": 3626
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 3635,
        "end": 3644
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3645,
              "end": 3663
            },
            "typeArguments": null,
            "start": 3645,
            "end": 3663
          }
        ],
        "start": 3644,
        "end": 3664
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 3665,
        "end": 3667
      },
      "abstract": false,
      "declare": false,
      "start": 3607,
      "end": 3667
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
            "name": "mapDispatchToProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 3674,
            "end": 3692
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3697,
                  "end": 3709
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "simpleAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3697,
                  "end": 3709
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3697,
                "end": 3709
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunkAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3711,
                  "end": 3722
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunkAction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3711,
                  "end": 3722
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3711,
                "end": 3722
              }
            ],
            "start": 3695,
            "end": 3724
          },
          "definite": false,
          "start": 3674,
          "end": 3724
        }
      ],
      "declare": false,
      "start": 3668,
      "end": 3725
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 3732,
        "end": 3733
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "HandleThunkActionCreator",
          "optional": false,
          "typeAnnotation": null,
          "start": 3736,
          "end": 3760
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "simpleAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3768,
                "end": 3780
              },
              "typeArguments": null,
              "start": 3761,
              "end": 3780
            }
          ],
          "start": 3760,
          "end": 3781
        },
        "start": 3736,
        "end": 3781
      },
      "declare": false,
      "start": 3727,
      "end": 3782
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
            "name": "Test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3790,
            "end": 3795
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "connect",
                "optional": false,
                "typeAnnotation": null,
                "start": 3798,
                "end": 3805
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3809,
                  "end": 3813
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapDispatchToProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3817,
                  "end": 3835
                }
              ],
              "optional": false,
              "start": 3798,
              "end": 3837
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "TestComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 3838,
                "end": 3851
              }
            ],
            "optional": false,
            "start": 3798,
            "end": 3852
          },
          "definite": false,
          "start": 3790,
          "end": 3852
        }
      ],
      "declare": false,
      "start": 3784,
      "end": 3853
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3855,
      "end": 3865
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3865
}
```
