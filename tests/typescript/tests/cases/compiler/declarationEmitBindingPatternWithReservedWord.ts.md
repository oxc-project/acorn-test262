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
        "name": "LocaleData",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 24
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            {
              "type": "TSNeverKeyword",
              "start": 33,
              "end": 38
            }
          ],
          "start": 24,
          "end": 39
        },
        "start": 18,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConvertLocaleConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 64
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
              "start": 65,
              "end": 66
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 85
              },
              "typeArguments": null,
              "start": 75,
              "end": 85
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 98
              },
              "typeArguments": null,
              "start": 88,
              "end": 98
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 98
          }
        ],
        "start": 64,
        "end": 99
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 108
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 112,
              "end": 118
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "typeArguments": null,
              "start": 122,
              "end": 123
            }
          ],
          "start": 108,
          "end": 125
        },
        "start": 102,
        "end": 125
      },
      "declare": false,
      "start": 40,
      "end": 126
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LocaleConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 144
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
              "start": 145,
              "end": 146
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 165
              },
              "typeArguments": null,
              "start": 155,
              "end": 165
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LocaleData",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 178
              },
              "typeArguments": null,
              "start": 168,
              "end": 178
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 178
          }
        ],
        "start": 144,
        "end": 179
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 188
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 189,
              "end": 195
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 204
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
                      "start": 205,
                      "end": 206
                    },
                    "typeArguments": null,
                    "start": 205,
                    "end": 206
                  }
                ],
                "start": 204,
                "end": 207
              },
              "start": 197,
              "end": 207
            }
          ],
          "start": 188,
          "end": 208
        },
        "start": 182,
        "end": 208
      },
      "declare": false,
      "start": 127,
      "end": 209
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetLocalesOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 245
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
                "start": 246,
                "end": 247
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LocaleData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 266
                },
                "typeArguments": null,
                "start": 256,
                "end": 266
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 246,
              "end": 266
            }
          ],
          "start": 245,
          "end": 267
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
                "name": "app",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 277
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 279,
                  "end": 286
                },
                "start": 277,
                "end": 286
              },
              "accessibility": null,
              "static": false,
              "start": 274,
              "end": 287
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 299
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 320
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
                          "start": 321,
                          "end": 322
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 322
                      }
                    ],
                    "start": 320,
                    "end": 323
                  },
                  "start": 301,
                  "end": 323
                },
                "start": 299,
                "end": 323
              },
              "accessibility": null,
              "static": false,
              "start": 292,
              "end": 324
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 335
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LocaleConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 350
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
                              "start": 351,
                              "end": 352
                            },
                            "typeArguments": null,
                            "start": 351,
                            "end": 352
                          }
                        ],
                        "start": 350,
                        "end": 353
                      },
                      "start": 338,
                      "end": 353
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 356,
                      "end": 365
                    }
                  ],
                  "start": 338,
                  "end": 365
                },
                "start": 336,
                "end": 365
              },
              "accessibility": null,
              "static": false,
              "start": 329,
              "end": 366
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 375
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 378,
                  "end": 384
                },
                "start": 376,
                "end": 384
              },
              "accessibility": null,
              "static": false,
              "start": 371,
              "end": 385
            }
          ],
          "start": 268,
          "end": 387
        },
        "declare": false,
        "start": 218,
        "end": 387
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 211,
      "end": 387
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
              "name": "getLocales",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 412
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 416,
                      "end": 417
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LocaleData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 426,
                        "end": 436
                      },
                      "typeArguments": null,
                      "start": 426,
                      "end": 436
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 416,
                    "end": 436
                  }
                ],
                "start": 415,
                "end": 437
              },
              "params": [
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
                        "name": "app",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 447
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "app",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 447
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 444,
                      "end": 447
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 457
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 457
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 453,
                      "end": 457
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "default",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 470
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultLocalesConfig",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 472,
                        "end": 492
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 463,
                      "end": 492
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 498,
                        "end": 504
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "userLocalesConfig",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 506,
                          "end": 523
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 526,
                          "end": 528
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 528
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 498,
                      "end": 528
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
                        "name": "GetLocalesOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 550
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
                              "start": 551,
                              "end": 552
                            },
                            "typeArguments": null,
                            "start": 551,
                            "end": 552
                          }
                        ],
                        "start": 550,
                        "end": 553
                      },
                      "start": 533,
                      "end": 553
                    },
                    "start": 531,
                    "end": 553
                  },
                  "start": 438,
                  "end": 553
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConvertLocaleConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 556,
                    "end": 575
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
                          "start": 576,
                          "end": 577
                        },
                        "typeArguments": null,
                        "start": 576,
                        "end": 577
                      }
                    ],
                    "start": 575,
                    "end": 578
                  },
                  "start": 556,
                  "end": 578
                },
                "start": 554,
                "end": 578
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defaultLocalesConfig",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 595,
                      "end": 615
                    },
                    "start": 588,
                    "end": 616
                  }
                ],
                "start": 582,
                "end": 618
              },
              "id": null,
              "generator": false,
              "start": 415,
              "end": 618
            },
            "definite": false,
            "start": 402,
            "end": 618
          }
        ],
        "declare": false,
        "start": 396,
        "end": 619
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 389,
      "end": 619
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 619
}
```
