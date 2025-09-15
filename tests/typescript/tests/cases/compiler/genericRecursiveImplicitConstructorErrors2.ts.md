__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeclKind",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 51
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 52,
                "end": 55
              },
              "declare": false,
              "start": 33,
              "end": 55
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 26,
            "end": 55
          },
          {
            "type": "EmptyStatement",
            "start": 55,
            "end": 56
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullTypesymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 90
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 91,
                "end": 94
              },
              "declare": false,
              "start": 66,
              "end": 94
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 59,
            "end": 94
          },
          {
            "type": "EmptyStatement",
            "start": 94,
            "end": 95
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SymbolLinkKind",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 129
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 130,
                "end": 133
              },
              "declare": false,
              "start": 105,
              "end": 133
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 98,
            "end": 133
          },
          {
            "type": "EmptyStatement",
            "start": 133,
            "end": 134
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbolVisibility",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 169
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 183
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 176,
                    "end": 183
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 189,
                      "end": 195
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 189,
                    "end": 195
                  }
                ],
                "start": 170,
                "end": 199
              },
              "const": false,
              "declare": false,
              "start": 144,
              "end": 199
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 137,
            "end": 199
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 227
              },
              "typeParameters": null,
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
                      "start": 234,
                      "end": 245
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 253,
                              "end": 259
                            },
                            "start": 251,
                            "end": 259
                          },
                          "start": 247,
                          "end": 259
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "declKind",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "DeclKind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 271,
                                "end": 279
                              },
                              "typeArguments": null,
                              "start": 271,
                              "end": 279
                            },
                            "start": 269,
                            "end": 279
                          },
                          "start": 261,
                          "end": 279
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 281,
                        "end": 289
                      },
                      "expression": false,
                      "start": 246,
                      "end": 289
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 234,
                    "end": 289
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOutgoingLink",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 336
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 337,
                              "end": 338
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 337,
                            "end": 338
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 339,
                              "end": 340
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 339,
                            "end": 340
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 341,
                              "end": 342
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 341,
                            "end": 342
                          }
                        ],
                        "start": 336,
                        "end": 343
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "linkTo",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PullSymbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 352,
                                "end": 362
                              },
                              "typeArguments": null,
                              "start": 352,
                              "end": 362
                            },
                            "start": 350,
                            "end": 362
                          },
                          "start": 344,
                          "end": 362
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SymbolLinkKind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 370,
                                "end": 384
                              },
                              "typeArguments": null,
                              "start": 370,
                              "end": 384
                            },
                            "start": 368,
                            "end": 384
                          },
                          "start": 364,
                          "end": 384
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 386,
                        "end": 394
                      },
                      "expression": false,
                      "start": 336,
                      "end": 394
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 314,
                    "end": 394
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 407,
                      "end": 414
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 415,
                              "end": 416
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 415,
                            "end": 416
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 417,
                              "end": 418
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 417,
                            "end": 418
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 419,
                              "end": 420
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 419,
                            "end": 420
                          }
                        ],
                        "start": 414,
                        "end": 421
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PullTypeSymbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 425,
                            "end": 439
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 440,
                                  "end": 441
                                },
                                "typeArguments": null,
                                "start": 440,
                                "end": 441
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 442,
                                  "end": 443
                                },
                                "typeArguments": null,
                                "start": 442,
                                "end": 443
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 444,
                                  "end": 445
                                },
                                "typeArguments": null,
                                "start": 444,
                                "end": 445
                              }
                            ],
                            "start": 439,
                            "end": 446
                          },
                          "start": 425,
                          "end": 446
                        },
                        "start": 423,
                        "end": 446
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 462,
                              "end": 471
                            },
                            "start": 455,
                            "end": 472
                          }
                        ],
                        "start": 447,
                        "end": 478
                      },
                      "expression": false,
                      "start": 414,
                      "end": 478
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 400,
                    "end": 478
                  }
                ],
                "start": 228,
                "end": 482
              },
              "abstract": false,
              "declare": false,
              "start": 211,
              "end": 482
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 204,
            "end": 482
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 512
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
                      "start": 514,
                      "end": 515
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 514,
                    "end": 515
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 517
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 516,
                    "end": 517
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 519
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 518,
                    "end": 519
                  }
                ],
                "start": 513,
                "end": 520
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 538
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 539,
                "end": 544
              },
              "abstract": false,
              "declare": false,
              "start": 492,
              "end": 544
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 485,
            "end": 544
          }
        ],
        "start": 22,
        "end": 546
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 546
}
```
