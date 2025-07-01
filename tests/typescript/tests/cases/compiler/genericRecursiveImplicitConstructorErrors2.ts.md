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
        "start": 7,
        "end": 18
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
                "start": 40,
                "end": 48
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 49,
                "end": 52
              },
              "declare": false,
              "start": 30,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 23,
            "end": 52
          },
          {
            "type": "EmptyStatement",
            "start": 52,
            "end": 53
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
                "start": 73,
                "end": 87
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 88,
                "end": 91
              },
              "declare": false,
              "start": 63,
              "end": 91
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 56,
            "end": 91
          },
          {
            "type": "EmptyStatement",
            "start": 91,
            "end": 92
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
                "start": 112,
                "end": 126
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 127,
                "end": 130
              },
              "declare": false,
              "start": 102,
              "end": 130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 95,
            "end": 130
          },
          {
            "type": "EmptyStatement",
            "start": 130,
            "end": 131
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
                "start": 146,
                "end": 166
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
                      "start": 173,
                      "end": 180
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 173,
                    "end": 180
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 192
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 186,
                    "end": 192
                  }
                ],
                "start": 167,
                "end": 196
              },
              "const": false,
              "declare": false,
              "start": 141,
              "end": 196
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 134,
            "end": 196
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
                "start": 214,
                "end": 224
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
                      "start": 231,
                      "end": 242
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
                              "start": 250,
                              "end": 256
                            },
                            "start": 248,
                            "end": 256
                          },
                          "start": 244,
                          "end": 256
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
                                "start": 268,
                                "end": 276
                              },
                              "typeArguments": null,
                              "start": 268,
                              "end": 276
                            },
                            "start": 266,
                            "end": 276
                          },
                          "start": 258,
                          "end": 276
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 278,
                        "end": 286
                      },
                      "expression": false,
                      "start": 243,
                      "end": 286
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 231,
                    "end": 286
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
                      "start": 318,
                      "end": 333
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
                              "start": 334,
                              "end": 335
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 334,
                            "end": 335
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 336,
                              "end": 337
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 336,
                            "end": 337
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 339
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 338,
                            "end": 339
                          }
                        ],
                        "start": 333,
                        "end": 340
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
                                "start": 349,
                                "end": 359
                              },
                              "typeArguments": null,
                              "start": 349,
                              "end": 359
                            },
                            "start": 347,
                            "end": 359
                          },
                          "start": 341,
                          "end": 359
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
                                "start": 367,
                                "end": 381
                              },
                              "typeArguments": null,
                              "start": 367,
                              "end": 381
                            },
                            "start": 365,
                            "end": 381
                          },
                          "start": 361,
                          "end": 381
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 383,
                        "end": 391
                      },
                      "expression": false,
                      "start": 333,
                      "end": 391
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 311,
                    "end": 391
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
                      "start": 404,
                      "end": 411
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
                              "start": 412,
                              "end": 413
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 412,
                            "end": 413
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 414,
                              "end": 415
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 414,
                            "end": 415
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 416,
                              "end": 417
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 416,
                            "end": 417
                          }
                        ],
                        "start": 411,
                        "end": 418
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
                            "start": 422,
                            "end": 436
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
                                  "start": 437,
                                  "end": 438
                                },
                                "typeArguments": null,
                                "start": 437,
                                "end": 438
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 439,
                                  "end": 440
                                },
                                "typeArguments": null,
                                "start": 439,
                                "end": 440
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 441,
                                  "end": 442
                                },
                                "typeArguments": null,
                                "start": 441,
                                "end": 442
                              }
                            ],
                            "start": 436,
                            "end": 443
                          },
                          "start": 422,
                          "end": 443
                        },
                        "start": 420,
                        "end": 443
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
                              "start": 459,
                              "end": 468
                            },
                            "start": 452,
                            "end": 469
                          }
                        ],
                        "start": 444,
                        "end": 475
                      },
                      "expression": false,
                      "start": 411,
                      "end": 475
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 397,
                    "end": 475
                  }
                ],
                "start": 225,
                "end": 479
              },
              "abstract": false,
              "declare": false,
              "start": 208,
              "end": 479
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 201,
            "end": 479
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
                "start": 495,
                "end": 509
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
                      "start": 511,
                      "end": 512
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 511,
                    "end": 512
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 514
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 513,
                    "end": 514
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 516
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 515,
                    "end": 516
                  }
                ],
                "start": 510,
                "end": 517
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 535
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 536,
                "end": 541
              },
              "abstract": false,
              "declare": false,
              "start": 489,
              "end": 541
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 482,
            "end": 541
          }
        ],
        "start": 19,
        "end": 543
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 543
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 543
}
```
