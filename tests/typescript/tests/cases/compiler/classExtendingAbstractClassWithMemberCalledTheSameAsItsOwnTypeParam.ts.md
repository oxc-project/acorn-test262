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
        "name": "IObserver",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "handleChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 35
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "name": "TChange",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 46
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 39,
                  "end": 46
                }
              ],
              "start": 35,
              "end": 47
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observable",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IObservable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 71
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
                            "start": 72,
                            "end": 73
                          },
                          "typeArguments": null,
                          "start": 72,
                          "end": 73
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TChange",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 75,
                            "end": 82
                          },
                          "typeArguments": null,
                          "start": 75,
                          "end": 82
                        }
                      ],
                      "start": 71,
                      "end": 83
                    },
                    "start": 60,
                    "end": 83
                  },
                  "start": 58,
                  "end": 83
                },
                "start": 48,
                "end": 83
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "change",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TChange",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 100
                    },
                    "typeArguments": null,
                    "start": 93,
                    "end": 100
                  },
                  "start": 91,
                  "end": 100
                },
                "start": 85,
                "end": 100
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 103,
                "end": 107
              },
              "start": 101,
              "end": 107
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 108
          }
        ],
        "start": 20,
        "end": 110
      },
      "declare": false,
      "start": 0,
      "end": 110
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IObservable",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 133
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
              "start": 134,
              "end": 135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 134,
            "end": 135
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 144
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 147,
              "end": 154
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 154
          }
        ],
        "start": 133,
        "end": 155
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 162
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
                  "start": 166,
                  "end": 167
                },
                "typeArguments": null,
                "start": 166,
                "end": 167
              },
              "start": 164,
              "end": 167
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 159,
            "end": 168
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "TChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 186
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TChange",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 195
                },
                "typeArguments": null,
                "start": 188,
                "end": 195
              },
              "start": 186,
              "end": 195
            },
            "accessibility": null,
            "static": false,
            "start": 170,
            "end": 196
          }
        ],
        "start": 156,
        "end": 198
      },
      "declare": false,
      "start": 112,
      "end": 198
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IReader",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 224
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "readObservable",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 242
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 243,
                      "end": 244
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 243,
                    "end": 244
                  }
                ],
                "start": 242,
                "end": 245
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "observable",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IObservable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 269
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
                              "start": 270,
                              "end": 271
                            },
                            "typeArguments": null,
                            "start": 270,
                            "end": 271
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 273,
                            "end": 276
                          }
                        ],
                        "start": 269,
                        "end": 277
                      },
                      "start": 258,
                      "end": 277
                    },
                    "start": 256,
                    "end": 277
                  },
                  "start": 246,
                  "end": 277
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
                    "start": 280,
                    "end": 281
                  },
                  "typeArguments": null,
                  "start": 280,
                  "end": 281
                },
                "start": 278,
                "end": 281
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 228,
              "end": 282
            }
          ],
          "start": 225,
          "end": 284
        },
        "declare": false,
        "start": 207,
        "end": 284
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 200,
      "end": 284
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConvenientObservable",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 328
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
                "start": 329,
                "end": 330
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 329,
              "end": 330
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 339
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 332,
              "end": 339
            }
          ],
          "start": 328,
          "end": 340
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "IObservable",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 363
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
                    "start": 364,
                    "end": 365
                  },
                  "typeArguments": null,
                  "start": 364,
                  "end": 365
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TChange",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 374
                  },
                  "typeArguments": null,
                  "start": 367,
                  "end": 374
                }
              ],
              "start": 363,
              "end": 375
            },
            "start": 352,
            "end": 375
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 390
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
                      "name": "TChange",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 401
                    },
                    "typeArguments": null,
                    "start": 394,
                    "end": 401
                  },
                  "start": 392,
                  "end": 401
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 411,
                          "end": 415
                        },
                        "start": 411,
                        "end": 416
                      },
                      "start": 404,
                      "end": 417
                    }
                  ],
                  "start": 402,
                  "end": 419
                },
                "expression": false,
                "start": 390,
                "end": 419
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 379,
              "end": 419
            },
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 440
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 445
                    },
                    "typeArguments": null,
                    "start": 444,
                    "end": 445
                  },
                  "start": 442,
                  "end": 445
                },
                "body": null,
                "expression": false,
                "start": 440,
                "end": 446
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 421,
              "end": 446
            }
          ],
          "start": 376,
          "end": 448
        },
        "abstract": true,
        "declare": false,
        "start": 293,
        "end": 448
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 286,
      "end": 448
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BaseObservable",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 486
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
                "start": 487,
                "end": 488
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 487,
              "end": 488
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 497
              },
              "constraint": null,
              "default": {
                "type": "TSVoidKeyword",
                "start": 500,
                "end": 504
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 490,
              "end": 504
            }
          ],
          "start": 486,
          "end": 505
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConvenientObservable",
          "optional": false,
          "typeAnnotation": null,
          "start": 514,
          "end": 534
        },
        "superTypeArguments": {
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
                "start": 535,
                "end": 536
              },
              "typeArguments": null,
              "start": 535,
              "end": 536
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TChange",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 545
              },
              "typeArguments": null,
              "start": 538,
              "end": 545
            }
          ],
          "start": 534,
          "end": 546
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
                "name": "observers",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 578
              },
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 588
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IObserver",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 598
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 598
                    }
                  ],
                  "start": 588,
                  "end": 599
                },
                "arguments": [],
                "start": 581,
                "end": 601
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "protected",
              "start": 550,
              "end": 602
            }
          ],
          "start": 547,
          "end": 604
        },
        "abstract": true,
        "declare": false,
        "start": 457,
        "end": 604
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 450,
      "end": 604
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 604
}
```
