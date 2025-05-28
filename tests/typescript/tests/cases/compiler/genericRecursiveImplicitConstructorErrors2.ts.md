__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 543,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 18,
        "decorators": [],
        "name": "TypeScript2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 543,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 52,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 30,
              "end": 52,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 48,
                "decorators": [],
                "name": "DeclKind",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 49,
                "end": 52,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "EmptyStatement",
            "start": 52,
            "end": 53
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 91,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 63,
              "end": 91,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 87,
                "decorators": [],
                "name": "PullTypesymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 88,
                "end": 91,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "EmptyStatement",
            "start": 91,
            "end": 92
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 95,
            "end": 130,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 102,
              "end": 130,
              "id": {
                "type": "Identifier",
                "start": 112,
                "end": 126,
                "decorators": [],
                "name": "SymbolLinkKind",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 127,
                "end": 130,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "EmptyStatement",
            "start": 130,
            "end": 131
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 134,
            "end": 196,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 141,
              "end": 196,
              "id": {
                "type": "Identifier",
                "start": 146,
                "end": 166,
                "decorators": [],
                "name": "PullSymbolVisibility",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 167,
                "end": 196,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 173,
                    "end": 180,
                    "id": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 180,
                      "decorators": [],
                      "name": "Private",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 186,
                    "end": 192,
                    "id": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 192,
                      "decorators": [],
                      "name": "Public",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              },
              "const": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 201,
            "end": 479,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 208,
              "end": 479,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 214,
                "end": 224,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 225,
                "end": 479,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 231,
                    "end": 286,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 242,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 243,
                      "end": 286,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 244,
                          "end": 256,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 248,
                            "end": 256,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 250,
                              "end": 256
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 258,
                          "end": 276,
                          "decorators": [],
                          "name": "declKind",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 266,
                            "end": 276,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 268,
                              "end": 276,
                              "typeName": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 276,
                                "decorators": [],
                                "name": "DeclKind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 278,
                        "end": 286,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 311,
                    "end": 391,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 333,
                      "decorators": [],
                      "name": "addOutgoingLink",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 333,
                      "end": 391,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 333,
                        "end": 340,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 334,
                            "end": 335,
                            "name": {
                              "type": "Identifier",
                              "start": 334,
                              "end": 335,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 336,
                            "end": 337,
                            "name": {
                              "type": "Identifier",
                              "start": 336,
                              "end": 337,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 338,
                            "end": 339,
                            "name": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 339,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 341,
                          "end": 359,
                          "decorators": [],
                          "name": "linkTo",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 347,
                            "end": 359,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 349,
                              "end": 359,
                              "typeName": {
                                "type": "Identifier",
                                "start": 349,
                                "end": 359,
                                "decorators": [],
                                "name": "PullSymbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 361,
                          "end": 381,
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 365,
                            "end": 381,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 367,
                              "end": 381,
                              "typeName": {
                                "type": "Identifier",
                                "start": 367,
                                "end": 381,
                                "decorators": [],
                                "name": "SymbolLinkKind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 383,
                        "end": 391,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 397,
                    "end": 475,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 411,
                      "decorators": [],
                      "name": "getType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 411,
                      "end": 475,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 411,
                        "end": 418,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 412,
                            "end": 413,
                            "name": {
                              "type": "Identifier",
                              "start": 412,
                              "end": 413,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 414,
                            "end": 415,
                            "name": {
                              "type": "Identifier",
                              "start": 414,
                              "end": 415,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 416,
                            "end": 417,
                            "name": {
                              "type": "Identifier",
                              "start": 416,
                              "end": 417,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 420,
                        "end": 443,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 422,
                          "end": 443,
                          "typeName": {
                            "type": "Identifier",
                            "start": 422,
                            "end": 436,
                            "decorators": [],
                            "name": "PullTypeSymbol",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 436,
                            "end": 443,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 437,
                                "end": 438,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 437,
                                  "end": 438,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 439,
                                "end": 440,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 439,
                                  "end": 440,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 441,
                                "end": 442,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 441,
                                  "end": 442,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 444,
                        "end": 475,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 452,
                            "end": 469,
                            "argument": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 468,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 482,
            "end": 541,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 489,
              "end": 541,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 495,
                "end": 509,
                "decorators": [],
                "name": "PullTypeSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 510,
                "end": 517,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 511,
                    "end": 512,
                    "name": {
                      "type": "Identifier",
                      "start": 511,
                      "end": 512,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 513,
                    "end": 514,
                    "name": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 514,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 515,
                    "end": 516,
                    "name": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 516,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": {
                "type": "Identifier",
                "start": 525,
                "end": 535,
                "decorators": [],
                "name": "PullSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 536,
                "end": 541,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
