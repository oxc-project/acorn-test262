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
        "name": "Mapped1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 12
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 23,
              "end": 29
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 29
          }
        ],
        "start": 12,
        "end": 30
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 37
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "typeArguments": null,
          "start": 41,
          "end": 42
        },
        "nameType": null,
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
                "start": 47,
                "end": 48
              },
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
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 48,
                "end": 51
              },
              "accessibility": null,
              "static": false,
              "start": 47,
              "end": 51
            }
          ],
          "start": 45,
          "end": 53
        },
        "optional": false,
        "readonly": null,
        "start": 33,
        "end": 55
      },
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 69
      },
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 80,
              "end": 86
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 86
          }
        ],
        "start": 69,
        "end": 87
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped1",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 100
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 102
                    },
                    "typeArguments": null,
                    "start": 101,
                    "end": 102
                  }
                ],
                "start": 100,
                "end": 103
              },
              "start": 93,
              "end": 103
            },
            "start": 91,
            "end": 103
          },
          "start": 88,
          "end": 103
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 111
              },
              "typeArguments": null,
              "start": 110,
              "end": 111
            },
            "start": 108,
            "end": 111
          },
          "start": 105,
          "end": 111
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 130,
                            "end": 131
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 133,
                                "end": 134
                              },
                              "typeArguments": null,
                              "start": 133,
                              "end": 134
                            },
                            "start": 131,
                            "end": 134
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 130,
                          "end": 134
                        }
                      ],
                      "start": 128,
                      "end": 136
                    },
                    "start": 126,
                    "end": 136
                  },
                  "start": 125,
                  "end": 136
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 142
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 146
                  },
                  "optional": false,
                  "computed": true,
                  "start": 139,
                  "end": 147
                },
                "definite": false,
                "start": 125,
                "end": 147
              }
            ],
            "declare": false,
            "start": 119,
            "end": 148
          }
        ],
        "start": 113,
        "end": 150
      },
      "expression": false,
      "start": 58,
      "end": 150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped2",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 164
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 181
          }
        ],
        "start": 164,
        "end": 182
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 189
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "typeArguments": null,
          "start": 193,
          "end": 194
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "get",
                "cooked": "get"
              },
              "tail": false,
              "start": 198,
              "end": 204
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 205,
              "end": 207
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 205
              },
              "typeArguments": null,
              "start": 204,
              "end": 205
            }
          ],
          "start": 198,
          "end": 207
        },
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
                "start": 212,
                "end": 213
              },
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
                    "start": 215,
                    "end": 216
                  },
                  "typeArguments": null,
                  "start": 215,
                  "end": 216
                },
                "start": 213,
                "end": 216
              },
              "accessibility": null,
              "static": false,
              "start": 212,
              "end": 216
            }
          ],
          "start": 210,
          "end": 218
        },
        "optional": false,
        "readonly": null,
        "start": 185,
        "end": 220
      },
      "declare": false,
      "start": 152,
      "end": 221
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 234
      },
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 245,
              "end": 251
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 235,
            "end": 251
          }
        ],
        "start": 234,
        "end": 252
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped2",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 265
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "typeArguments": null,
                    "start": 266,
                    "end": 267
                  }
                ],
                "start": 265,
                "end": 268
              },
              "start": 258,
              "end": 268
            },
            "start": 256,
            "end": 268
          },
          "start": 253,
          "end": 268
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "get",
                    "cooked": "get"
                  },
                  "tail": false,
                  "start": 275,
                  "end": 281
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 282,
                  "end": 284
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
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
              "start": 275,
              "end": 284
            },
            "start": 273,
            "end": 284
          },
          "start": 270,
          "end": 284
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 304
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 306,
                                "end": 307
                              },
                              "typeArguments": null,
                              "start": 306,
                              "end": 307
                            },
                            "start": 304,
                            "end": 307
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 303,
                          "end": 307
                        }
                      ],
                      "start": 301,
                      "end": 309
                    },
                    "start": 299,
                    "end": 309
                  },
                  "start": 298,
                  "end": 309
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 315
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 319
                  },
                  "optional": false,
                  "computed": true,
                  "start": 312,
                  "end": 320
                },
                "definite": false,
                "start": 298,
                "end": 320
              }
            ],
            "declare": false,
            "start": 292,
            "end": 321
          }
        ],
        "start": 286,
        "end": 333
      },
      "expression": false,
      "start": 223,
      "end": 333
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped3",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 347
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 349
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 358,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 348,
            "end": 364
          }
        ],
        "start": 347,
        "end": 365
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 372
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "typeArguments": null,
          "start": 376,
          "end": 377
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Uppercase",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 390
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
                  "start": 391,
                  "end": 392
                },
                "typeArguments": null,
                "start": 391,
                "end": 392
              }
            ],
            "start": 390,
            "end": 393
          },
          "start": 381,
          "end": 393
        },
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
                "start": 398,
                "end": 399
              },
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
                    "start": 401,
                    "end": 402
                  },
                  "typeArguments": null,
                  "start": 401,
                  "end": 402
                },
                "start": 399,
                "end": 402
              },
              "accessibility": null,
              "static": false,
              "start": 398,
              "end": 402
            }
          ],
          "start": 396,
          "end": 404
        },
        "optional": false,
        "readonly": null,
        "start": 368,
        "end": 406
      },
      "declare": false,
      "start": 335,
      "end": 407
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 420
      },
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 422
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 431,
              "end": 437
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 421,
            "end": 437
          }
        ],
        "start": 420,
        "end": 438
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped3",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 451
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 452,
                      "end": 453
                    },
                    "typeArguments": null,
                    "start": 452,
                    "end": 453
                  }
                ],
                "start": 451,
                "end": 454
              },
              "start": 444,
              "end": 454
            },
            "start": 442,
            "end": 454
          },
          "start": 439,
          "end": 454
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 470
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 472
                    },
                    "typeArguments": null,
                    "start": 471,
                    "end": 472
                  }
                ],
                "start": 470,
                "end": 473
              },
              "start": 461,
              "end": 473
            },
            "start": 459,
            "end": 473
          },
          "start": 456,
          "end": 473
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 493
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 495,
                                "end": 496
                              },
                              "typeArguments": null,
                              "start": 495,
                              "end": 496
                            },
                            "start": 493,
                            "end": 496
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 492,
                          "end": 496
                        }
                      ],
                      "start": 490,
                      "end": 498
                    },
                    "start": 488,
                    "end": 498
                  },
                  "start": 487,
                  "end": 498
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 501,
                    "end": 504
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 508
                  },
                  "optional": false,
                  "computed": true,
                  "start": 501,
                  "end": 509
                },
                "definite": false,
                "start": 487,
                "end": 509
              }
            ],
            "declare": false,
            "start": 481,
            "end": 510
          }
        ],
        "start": 475,
        "end": 522
      },
      "expression": false,
      "start": 409,
      "end": 522
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped4",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 536
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "constraint": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "_",
                    "cooked": "_"
                  },
                  "tail": false,
                  "start": 547,
                  "end": 551
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 557,
                  "end": 559
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 551,
                  "end": 557
                }
              ],
              "start": 547,
              "end": 559
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 537,
            "end": 559
          }
        ],
        "start": 536,
        "end": 560
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 568,
          "end": 569
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 574
          },
          "typeArguments": null,
          "start": 573,
          "end": 574
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 578
          },
          "typeArguments": null,
          "start": 577,
          "end": 578
        },
        "optional": false,
        "readonly": null,
        "start": 563,
        "end": 581
      },
      "declare": false,
      "start": 524,
      "end": 582
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 595
      },
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 597
            },
            "constraint": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "_",
                    "cooked": "_"
                  },
                  "tail": false,
                  "start": 606,
                  "end": 610
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 616,
                  "end": 618
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 610,
                  "end": 616
                }
              ],
              "start": 606,
              "end": 618
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 596,
            "end": 618
          }
        ],
        "start": 595,
        "end": 619
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped4",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 632
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 634
                    },
                    "typeArguments": null,
                    "start": 633,
                    "end": 634
                  }
                ],
                "start": 632,
                "end": 635
              },
              "start": 625,
              "end": 635
            },
            "start": 623,
            "end": 635
          },
          "start": 620,
          "end": 635
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 655
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 657
                      },
                      "typeArguments": null,
                      "start": 656,
                      "end": 657
                    }
                  ],
                  "start": 655,
                  "end": 658
                },
                "start": 648,
                "end": 658
              },
              "start": 642,
              "end": 658
            },
            "start": 640,
            "end": 658
          },
          "start": 637,
          "end": 658
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false,
                          "start": 671,
                          "end": 675
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 681,
                          "end": 683
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 675,
                          "end": 681
                        }
                      ],
                      "start": 671,
                      "end": 683
                    },
                    "start": 669,
                    "end": 683
                  },
                  "start": 668,
                  "end": 683
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 686,
                    "end": 689
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 693
                  },
                  "optional": false,
                  "computed": true,
                  "start": 686,
                  "end": 694
                },
                "definite": false,
                "start": 668,
                "end": 694
              }
            ],
            "declare": false,
            "start": 664,
            "end": 695
          }
        ],
        "start": 660,
        "end": 697
      },
      "expression": false,
      "start": 584,
      "end": 697
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped5",
        "optional": false,
        "typeAnnotation": null,
        "start": 704,
        "end": 711
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 713
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 722,
              "end": 728
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 712,
            "end": 728
          }
        ],
        "start": 711,
        "end": 729
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 737,
          "end": 738
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 742,
            "end": 743
          },
          "typeArguments": null,
          "start": 742,
          "end": 743
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "typeArguments": null,
            "start": 747,
            "end": 748
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "_",
                  "cooked": "_"
                },
                "tail": false,
                "start": 757,
                "end": 761
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 767,
                "end": 769
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 761,
                "end": 767
              }
            ],
            "start": 757,
            "end": 769
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 773
            },
            "typeArguments": null,
            "start": 772,
            "end": 773
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 776,
            "end": 781
          },
          "start": 747,
          "end": 781
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 785
          },
          "typeArguments": null,
          "start": 784,
          "end": 785
        },
        "optional": false,
        "readonly": null,
        "start": 732,
        "end": 788
      },
      "declare": false,
      "start": 699,
      "end": 789
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 800,
        "end": 802
      },
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 804
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 813,
              "end": 819
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 803,
            "end": 819
          }
        ],
        "start": 802,
        "end": 820
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped5",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 835
                    },
                    "typeArguments": null,
                    "start": 834,
                    "end": 835
                  }
                ],
                "start": 833,
                "end": 836
              },
              "start": 826,
              "end": 836
            },
            "start": 824,
            "end": 836
          },
          "start": 821,
          "end": 836
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 856
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 857,
                        "end": 858
                      },
                      "typeArguments": null,
                      "start": 857,
                      "end": 858
                    }
                  ],
                  "start": 856,
                  "end": 859
                },
                "start": 849,
                "end": 859
              },
              "start": 843,
              "end": 859
            },
            "start": 841,
            "end": 859
          },
          "start": 838,
          "end": 859
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false,
                          "start": 872,
                          "end": 876
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 882,
                          "end": 884
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 876,
                          "end": 882
                        }
                      ],
                      "start": 872,
                      "end": 884
                    },
                    "start": 870,
                    "end": 884
                  },
                  "start": 869,
                  "end": 884
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 887,
                    "end": 890
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 894
                  },
                  "optional": false,
                  "computed": true,
                  "start": 887,
                  "end": 895
                },
                "definite": false,
                "start": 869,
                "end": 895
              }
            ],
            "declare": false,
            "start": 865,
            "end": 896
          }
        ],
        "start": 861,
        "end": 898
      },
      "expression": false,
      "start": 791,
      "end": 898
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped6",
        "optional": false,
        "typeAnnotation": null,
        "start": 951,
        "end": 958
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 960
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 969,
              "end": 975
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 959,
            "end": 975
          }
        ],
        "start": 958,
        "end": 976
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 984,
          "end": 985
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 989,
            "end": 990
          },
          "typeArguments": null,
          "start": 989,
          "end": 990
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false,
              "start": 994,
              "end": 998
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 999,
              "end": 1001
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 998,
                "end": 999
              },
              "typeArguments": null,
              "start": 998,
              "end": 999
            }
          ],
          "start": 994,
          "end": 1001
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1005
          },
          "typeArguments": null,
          "start": 1004,
          "end": 1005
        },
        "optional": false,
        "readonly": null,
        "start": 979,
        "end": 1008
      },
      "declare": false,
      "start": 946,
      "end": 1009
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1022
      },
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1024
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1033,
              "end": 1039
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1023,
            "end": 1039
          }
        ],
        "start": 1022,
        "end": 1040
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1053
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1054,
                      "end": 1055
                    },
                    "typeArguments": null,
                    "start": 1054,
                    "end": 1055
                  }
                ],
                "start": 1053,
                "end": 1056
              },
              "start": 1046,
              "end": 1056
            },
            "start": 1044,
            "end": 1056
          },
          "start": 1041,
          "end": 1056
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapped6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1076
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1077,
                        "end": 1078
                      },
                      "typeArguments": null,
                      "start": 1077,
                      "end": 1078
                    }
                  ],
                  "start": 1076,
                  "end": 1079
                },
                "start": 1069,
                "end": 1079
              },
              "start": 1063,
              "end": 1079
            },
            "start": 1061,
            "end": 1079
          },
          "start": 1058,
          "end": 1079
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "_",
                            "cooked": "_"
                          },
                          "tail": false,
                          "start": 1092,
                          "end": 1096
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 1102,
                          "end": 1104
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1096,
                          "end": 1102
                        }
                      ],
                      "start": 1092,
                      "end": 1104
                    },
                    "start": 1090,
                    "end": 1104
                  },
                  "start": 1089,
                  "end": 1104
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1107,
                    "end": 1110
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1114
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1107,
                  "end": 1115
                },
                "definite": false,
                "start": 1089,
                "end": 1115
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1116
          }
        ],
        "start": 1081,
        "end": 1127
      },
      "expression": false,
      "start": 1011,
      "end": 1127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1156,
        "end": 1159
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
              "start": 1160,
              "end": 1161
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1170,
              "end": 1176
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1160,
            "end": 1176
          }
        ],
        "start": 1159,
        "end": 1177
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "RemappedT",
          "optional": false,
          "typeAnnotation": null,
          "start": 1187,
          "end": 1196
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1200,
            "end": 1201
          },
          "typeArguments": null,
          "start": 1200,
          "end": 1201
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "get",
                "cooked": "get"
              },
              "tail": false,
              "start": 1205,
              "end": 1211
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 1220,
              "end": 1222
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RemappedT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1220
              },
              "typeArguments": null,
              "start": 1211,
              "end": 1220
            }
          ],
          "start": 1205,
          "end": 1222
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemappedT",
            "optional": false,
            "typeAnnotation": null,
            "start": 1225,
            "end": 1234
          },
          "typeArguments": null,
          "start": 1225,
          "end": 1234
        },
        "optional": false,
        "readonly": null,
        "start": 1180,
        "end": 1237
      },
      "declare": false,
      "start": 1151,
      "end": 1238
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
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 1246,
            "end": 1249
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
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
                    "start": 1253,
                    "end": 1254
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 1263,
                    "end": 1269
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1253,
                  "end": 1269
                }
              ],
              "start": 1252,
              "end": 1270
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
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
                      "start": 1274,
                      "end": 1275
                    },
                    "typeArguments": null,
                    "start": 1274,
                    "end": 1275
                  },
                  "start": 1272,
                  "end": 1275
                },
                "start": 1271,
                "end": 1275
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1285
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
                            "start": 1286,
                            "end": 1287
                          },
                          "typeArguments": null,
                          "start": 1286,
                          "end": 1287
                        }
                      ],
                      "start": 1285,
                      "end": 1288
                    },
                    "start": 1282,
                    "end": 1288
                  },
                  "start": 1280,
                  "end": 1288
                },
                "start": 1277,
                "end": 1288
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
                  "start": 1291,
                  "end": 1292
                },
                "typeArguments": null,
                "start": 1291,
                "end": 1292
              },
              "start": 1289,
              "end": 1292
            },
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1296,
                "end": 1299
              },
              "property": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "get",
                      "cooked": "get"
                    },
                    "tail": false,
                    "start": 1300,
                    "end": 1306
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1307,
                    "end": 1309
                  }
                ],
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1306,
                    "end": 1307
                  }
                ],
                "start": 1300,
                "end": 1309
              },
              "optional": false,
              "computed": true,
              "start": 1296,
              "end": 1310
            },
            "id": null,
            "generator": false,
            "start": 1252,
            "end": 1310
          },
          "definite": false,
          "start": 1246,
          "end": 1310
        }
      ],
      "declare": false,
      "start": 1240,
      "end": 1311
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bounds",
        "optional": false,
        "typeAnnotation": null,
        "start": 1404,
        "end": 1410
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
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1420
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1422,
                "end": 1428
              },
              "start": 1420,
              "end": 1428
            },
            "accessibility": null,
            "static": false,
            "start": 1417,
            "end": 1429
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "max",
              "optional": false,
              "typeAnnotation": null,
              "start": 1434,
              "end": 1437
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1439,
                "end": 1445
              },
              "start": 1437,
              "end": 1445
            },
            "accessibility": null,
            "static": false,
            "start": 1434,
            "end": 1446
          }
        ],
        "start": 1411,
        "end": 1448
      },
      "declare": false,
      "start": 1394,
      "end": 1448
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericBoundsOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1455,
        "end": 1470
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
              "start": 1471,
              "end": 1472
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1471,
            "end": 1472
          }
        ],
        "start": 1470,
        "end": 1473
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1483,
          "end": 1484
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
              "start": 1494,
              "end": 1495
            },
            "typeArguments": null,
            "start": 1494,
            "end": 1495
          },
          "start": 1488,
          "end": 1495
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1500
              },
              "typeArguments": null,
              "start": 1499,
              "end": 1500
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1501,
                "end": 1502
              },
              "typeArguments": null,
              "start": 1501,
              "end": 1502
            },
            "start": 1499,
            "end": 1503
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 1512,
                "end": 1518
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 1521,
                "end": 1530
              }
            ],
            "start": 1512,
            "end": 1530
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1533,
              "end": 1534
            },
            "typeArguments": null,
            "start": 1533,
            "end": 1534
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1537,
            "end": 1542
          },
          "start": 1499,
          "end": 1542
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bounds",
            "optional": false,
            "typeAnnotation": null,
            "start": 1545,
            "end": 1551
          },
          "typeArguments": null,
          "start": 1545,
          "end": 1551
        },
        "optional": false,
        "readonly": null,
        "start": 1476,
        "end": 1554
      },
      "declare": false,
      "start": 1450,
      "end": 1554
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1565,
        "end": 1573
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1574,
              "end": 1575
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1584,
              "end": 1590
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1574,
            "end": 1590
          }
        ],
        "start": 1573,
        "end": 1591
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 1597,
                "end": 1598
              },
              "typeArguments": null,
              "start": 1597,
              "end": 1598
            },
            "start": 1595,
            "end": 1598
          },
          "start": 1592,
          "end": 1598
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bounds",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericBoundsOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 1608,
                "end": 1623
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
                      "start": 1624,
                      "end": 1625
                    },
                    "typeArguments": null,
                    "start": 1624,
                    "end": 1625
                  }
                ],
                "start": 1623,
                "end": 1626
              },
              "start": 1608,
              "end": 1626
            },
            "start": 1606,
            "end": 1626
          },
          "start": 1600,
          "end": 1626
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1646,
                        "end": 1649
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1651,
                        "end": 1654
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1645,
                    "end": 1655
                  },
                  "init": null,
                  "definite": false,
                  "start": 1645,
                  "end": 1655
                }
              ],
              "declare": false,
              "start": 1639,
              "end": 1655
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1659,
                  "end": 1665
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entries",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1666,
                  "end": 1673
                },
                "optional": false,
                "computed": false,
                "start": 1659,
                "end": 1673
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1674,
                  "end": 1677
                }
              ],
              "optional": false,
              "start": 1659,
              "end": 1678
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "boundsForKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1696,
                        "end": 1708
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bounds",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1711,
                          "end": 1717
                        },
                        "property": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1718,
                            "end": 1721
                          },
                          "typeAnnotation": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "NumericBoundsOf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1731,
                                "end": 1746
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
                                      "start": 1747,
                                      "end": 1748
                                    },
                                    "typeArguments": null,
                                    "start": 1747,
                                    "end": 1748
                                  }
                                ],
                                "start": 1746,
                                "end": 1749
                              },
                              "start": 1731,
                              "end": 1749
                            },
                            "start": 1725,
                            "end": 1749
                          },
                          "start": 1718,
                          "end": 1749
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1711,
                        "end": 1750
                      },
                      "definite": false,
                      "start": 1696,
                      "end": 1750
                    }
                  ],
                  "declare": false,
                  "start": 1690,
                  "end": 1751
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boundsForKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1764,
                    "end": 1776
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "min",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1800,
                                    "end": 1803
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "min",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1800,
                                    "end": 1803
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1800,
                                  "end": 1803
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "max",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1805,
                                    "end": 1808
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "max",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1805,
                                    "end": 1808
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1805,
                                  "end": 1808
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1798,
                              "end": 1810
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "boundsForKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1813,
                              "end": 1825
                            },
                            "definite": false,
                            "start": 1798,
                            "end": 1825
                          }
                        ],
                        "declare": false,
                        "start": 1792,
                        "end": 1826
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "min",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1843,
                              "end": 1846
                            },
                            "operator": ">",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1849,
                              "end": 1852
                            },
                            "start": 1843,
                            "end": 1852
                          },
                          "operator": "||",
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "max",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1856,
                              "end": 1859
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1862,
                              "end": 1865
                            },
                            "start": 1856,
                            "end": 1865
                          },
                          "start": 1843,
                          "end": 1865
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1874,
                            "end": 1879
                          },
                          "start": 1867,
                          "end": 1880
                        },
                        "alternate": null,
                        "start": 1839,
                        "end": 1880
                      }
                    ],
                    "start": 1778,
                    "end": 1890
                  },
                  "alternate": null,
                  "start": 1760,
                  "end": 1890
                }
              ],
              "start": 1680,
              "end": 1896
            },
            "start": 1634,
            "end": 1896
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1908,
              "end": 1912
            },
            "start": 1901,
            "end": 1913
          }
        ],
        "start": 1628,
        "end": 1915
      },
      "expression": false,
      "start": 1556,
      "end": 1915
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectWithUnderscoredKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 1944,
        "end": 1969
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1970,
              "end": 1971
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1980,
              "end": 1986
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1970,
            "end": 1986
          }
        ],
        "start": 1969,
        "end": 1987
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1997,
          "end": 1998
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 2002,
            "end": 2003
          },
          "typeArguments": null,
          "start": 2002,
          "end": 2003
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "_",
                "cooked": "_"
              },
              "tail": false,
              "start": 2007,
              "end": 2011
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 2012,
              "end": 2014
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 2011,
                "end": 2012
              },
              "typeArguments": null,
              "start": 2011,
              "end": 2012
            }
          ],
          "start": 2007,
          "end": 2014
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2017,
            "end": 2021
          },
          "start": 2017,
          "end": 2021
        },
        "optional": false,
        "readonly": null,
        "start": 1990,
        "end": 2024
      },
      "declare": false,
      "start": 1939,
      "end": 2025
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 2036,
        "end": 2047
      },
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2048,
              "end": 2049
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2058,
              "end": 2064
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2048,
            "end": 2064
          }
        ],
        "start": 2047,
        "end": 2065
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objectWithUnderscoredKeys",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectWithUnderscoredKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 2093,
                "end": 2118
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2119,
                      "end": 2120
                    },
                    "typeArguments": null,
                    "start": 2119,
                    "end": 2120
                  }
                ],
                "start": 2118,
                "end": 2121
              },
              "start": 2093,
              "end": 2121
            },
            "start": 2091,
            "end": 2121
          },
          "start": 2066,
          "end": 2121
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2128,
                "end": 2129
              },
              "typeArguments": null,
              "start": 2128,
              "end": 2129
            },
            "start": 2126,
            "end": 2129
          },
          "start": 2123,
          "end": 2129
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shouldBeTrue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 2155,
                        "end": 2159
                      },
                      "start": 2155,
                      "end": 2159
                    },
                    "start": 2153,
                    "end": 2159
                  },
                  "start": 2141,
                  "end": 2159
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "objectWithUnderscoredKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2162,
                    "end": 2187
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "_",
                          "cooked": "_"
                        },
                        "tail": false,
                        "start": 2188,
                        "end": 2192
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2195,
                        "end": 2197
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2192,
                        "end": 2195
                      }
                    ],
                    "start": 2188,
                    "end": 2197
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2162,
                  "end": 2198
                },
                "definite": false,
                "start": 2141,
                "end": 2198
              }
            ],
            "declare": false,
            "start": 2135,
            "end": 2199
          }
        ],
        "start": 2131,
        "end": 2253
      },
      "expression": false,
      "start": 2027,
      "end": 2253
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2253
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
    "value": "Mapped1",
    "start": 5,
    "end": 12,
    "range": [
      5,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 38,
    "end": 40,
    "range": [
      38,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 58,
    "end": 66,
    "range": [
      58,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79,
    "range": [
      72,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 88,
    "end": 91,
    "range": [
      88,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped1",
    "start": 93,
    "end": 100,
    "range": [
      93,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 119,
    "end": 124,
    "range": [
      119,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 139,
    "end": 142,
    "range": [
      139,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 152,
    "end": 156,
    "range": [
      152,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped2",
    "start": 157,
    "end": 164,
    "range": [
      157,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 167,
    "end": 174,
    "range": [
      167,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181,
    "range": [
      175,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 190,
    "end": 192,
    "range": [
      190,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 198,
    "end": 204,
    "range": [
      198,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 205,
    "end": 207,
    "range": [
      205,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 223,
    "end": 231,
    "range": [
      223,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 237,
    "end": 244,
    "range": [
      237,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 253,
    "end": 256,
    "range": [
      253,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped2",
    "start": 258,
    "end": 265,
    "range": [
      258,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 270,
    "end": 273,
    "range": [
      270,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 275,
    "end": 281,
    "range": [
      275,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 282,
    "end": 284,
    "range": [
      282,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 292,
    "end": 297,
    "range": [
      292,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 312,
    "end": 315,
    "range": [
      312,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 316,
    "end": 319,
    "range": [
      316,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 335,
    "end": 339,
    "range": [
      335,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped3",
    "start": 340,
    "end": 347,
    "range": [
      340,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 350,
    "end": 357,
    "range": [
      350,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 358,
    "end": 364,
    "range": [
      358,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 373,
    "end": 375,
    "range": [
      373,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 378,
    "end": 380,
    "range": [
      378,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 381,
    "end": 390,
    "range": [
      381,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 409,
    "end": 417,
    "range": [
      409,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 423,
    "end": 430,
    "range": [
      423,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437,
    "range": [
      431,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped3",
    "start": 444,
    "end": 451,
    "range": [
      444,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 456,
    "end": 459,
    "range": [
      456,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 461,
    "end": 470,
    "range": [
      461,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 481,
    "end": 486,
    "range": [
      481,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 501,
    "end": 504,
    "range": [
      501,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 505,
    "end": 508,
    "range": [
      505,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 524,
    "end": 528,
    "range": [
      524,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped4",
    "start": 529,
    "end": 536,
    "range": [
      529,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 539,
    "end": 546,
    "range": [
      539,
      546
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 547,
    "end": 551,
    "range": [
      547,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 551,
    "end": 557,
    "range": [
      551,
      557
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 557,
    "end": 559,
    "range": [
      557,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 570,
    "end": 572,
    "range": [
      570,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592,
    "range": [
      584,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 593,
    "end": 595,
    "range": [
      593,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 598,
    "end": 605,
    "range": [
      598,
      605
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 606,
    "end": 610,
    "range": [
      606,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616,
    "range": [
      610,
      616
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 616,
    "end": 618,
    "range": [
      616,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 620,
    "end": 623,
    "range": [
      620,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped4",
    "start": 625,
    "end": 632,
    "range": [
      625,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 642,
    "end": 647,
    "range": [
      642,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped4",
    "start": 648,
    "end": 655,
    "range": [
      648,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 664,
    "end": 667,
    "range": [
      664,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 671,
    "end": 675,
    "range": [
      671,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 675,
    "end": 681,
    "range": [
      675,
      681
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 681,
    "end": 683,
    "range": [
      681,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 686,
    "end": 689,
    "range": [
      686,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 690,
    "end": 693,
    "range": [
      690,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 699,
    "end": 703,
    "range": [
      699,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped5",
    "start": 704,
    "end": 711,
    "range": [
      704,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 714,
    "end": 721,
    "range": [
      714,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "value": "=",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 739,
    "end": 741,
    "range": [
      739,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 744,
    "end": 746,
    "range": [
      744,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 749,
    "end": 756,
    "range": [
      749,
      756
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 757,
    "end": 761,
    "range": [
      757,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 761,
    "end": 767,
    "range": [
      761,
      767
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 767,
    "end": 769,
    "range": [
      767,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 776,
    "end": 781,
    "range": [
      776,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 791,
    "end": 799,
    "range": [
      791,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 800,
    "end": 802,
    "range": [
      800,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 805,
    "end": 812,
    "range": [
      805,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 813,
    "end": 819,
    "range": [
      813,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 821,
    "end": 824,
    "range": [
      821,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped5",
    "start": 826,
    "end": 833,
    "range": [
      826,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 838,
    "end": 841,
    "range": [
      838,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 843,
    "end": 848,
    "range": [
      843,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped5",
    "start": 849,
    "end": 856,
    "range": [
      849,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 865,
    "end": 868,
    "range": [
      865,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 872,
    "end": 876,
    "range": [
      872,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 876,
    "end": 882,
    "range": [
      876,
      882
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 882,
    "end": 884,
    "range": [
      882,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 887,
    "end": 890,
    "range": [
      887,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 891,
    "end": 894,
    "range": [
      891,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 946,
    "end": 950,
    "range": [
      946,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped6",
    "start": 951,
    "end": 958,
    "range": [
      951,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 961,
    "end": 968,
    "range": [
      961,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 969,
    "end": 975,
    "range": [
      969,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 986,
    "end": 988,
    "range": [
      986,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 991,
    "end": 993,
    "range": [
      991,
      993
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 994,
    "end": 998,
    "range": [
      994,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 999,
    "end": 1001,
    "range": [
      999,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1011,
    "end": 1019,
    "range": [
      1011,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1020,
    "end": 1022,
    "range": [
      1020,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1025,
    "end": 1032,
    "range": [
      1025,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1033,
    "end": 1039,
    "range": [
      1033,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1041,
    "end": 1044,
    "range": [
      1041,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped6",
    "start": 1046,
    "end": 1053,
    "range": [
      1046,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1058,
    "end": 1061,
    "range": [
      1058,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1063,
    "end": 1068,
    "range": [
      1063,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "Mapped6",
    "start": 1069,
    "end": 1076,
    "range": [
      1069,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1085,
    "end": 1088,
    "range": [
      1085,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 1092,
    "end": 1096,
    "range": [
      1092,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1096,
    "end": 1102,
    "range": [
      1096,
      1102
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1102,
    "end": 1104,
    "range": [
      1102,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1107,
    "end": 1110,
    "range": [
      1107,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1111,
    "end": 1114,
    "range": [
      1111,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1151,
    "end": 1155,
    "range": [
      1151,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1156,
    "end": 1159,
    "range": [
      1156,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1162,
    "end": 1169,
    "range": [
      1162,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1170,
    "end": 1176,
    "range": [
      1170,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "RemappedT",
    "start": 1187,
    "end": 1196,
    "range": [
      1187,
      1196
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1197,
    "end": 1199,
    "range": [
      1197,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1202,
    "end": 1204,
    "range": [
      1202,
      1204
    ]
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 1205,
    "end": 1211,
    "range": [
      1205,
      1211
    ]
  },
  {
    "type": "Identifier",
    "value": "RemappedT",
    "start": 1211,
    "end": 1220,
    "range": [
      1211,
      1220
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1220,
    "end": 1222,
    "range": [
      1220,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "RemappedT",
    "start": 1225,
    "end": 1234,
    "range": [
      1225,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1240,
    "end": 1245,
    "range": [
      1240,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1246,
    "end": 1249,
    "range": [
      1246,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1255,
    "end": 1262,
    "range": [
      1255,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1263,
    "end": 1269,
    "range": [
      1263,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1277,
    "end": 1280,
    "range": [
      1277,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1282,
    "end": 1285,
    "range": [
      1282,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1293,
    "end": 1295,
    "range": [
      1293,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1296,
    "end": 1299,
    "range": [
      1296,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Template",
    "value": "`get${",
    "start": 1300,
    "end": 1306,
    "range": [
      1300,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1307,
    "end": 1309,
    "range": [
      1307,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1394,
    "end": 1403,
    "range": [
      1394,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "Bounds",
    "start": 1404,
    "end": 1410,
    "range": [
      1404,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 1417,
    "end": 1420,
    "range": [
      1417,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1422,
    "end": 1428,
    "range": [
      1422,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 1434,
    "end": 1437,
    "range": [
      1434,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1439,
    "end": 1445,
    "range": [
      1439,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1450,
    "end": 1454,
    "range": [
      1450,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericBoundsOf",
    "start": 1455,
    "end": 1470,
    "range": [
      1455,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1485,
    "end": 1487,
    "range": [
      1485,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1488,
    "end": 1493,
    "range": [
      1488,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1496,
    "end": 1498,
    "range": [
      1496,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1504,
    "end": 1511,
    "range": [
      1504,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1512,
    "end": 1518,
    "range": [
      1512,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1521,
    "end": 1530,
    "range": [
      1521,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1537,
    "end": 1542,
    "range": [
      1537,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "Bounds",
    "start": 1545,
    "end": 1551,
    "range": [
      1545,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1556,
    "end": 1564,
    "range": [
      1556,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 1565,
    "end": 1573,
    "range": [
      1565,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1576,
    "end": 1583,
    "range": [
      1576,
      1583
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1584,
    "end": 1590,
    "range": [
      1584,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1592,
    "end": 1595,
    "range": [
      1592,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Identifier",
    "value": "bounds",
    "start": 1600,
    "end": 1606,
    "range": [
      1600,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericBoundsOf",
    "start": 1608,
    "end": 1623,
    "range": [
      1608,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1634,
    "end": 1637,
    "range": [
      1634,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1639,
    "end": 1644,
    "range": [
      1639,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1646,
    "end": 1649,
    "range": [
      1646,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1651,
    "end": 1654,
    "range": [
      1651,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1656,
    "end": 1658,
    "range": [
      1656,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1659,
    "end": 1665,
    "range": [
      1659,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 1666,
    "end": 1673,
    "range": [
      1666,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1674,
    "end": 1677,
    "range": [
      1674,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1690,
    "end": 1695,
    "range": [
      1690,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "boundsForKey",
    "start": 1696,
    "end": 1708,
    "range": [
      1696,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "bounds",
    "start": 1711,
    "end": 1717,
    "range": [
      1711,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1718,
    "end": 1721,
    "range": [
      1718,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1722,
    "end": 1724,
    "range": [
      1722,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1725,
    "end": 1730,
    "range": [
      1725,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericBoundsOf",
    "start": 1731,
    "end": 1746,
    "range": [
      1731,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1760,
    "end": 1762,
    "range": [
      1760,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "boundsForKey",
    "start": 1764,
    "end": 1776,
    "range": [
      1764,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1792,
    "end": 1797,
    "range": [
      1792,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 1800,
    "end": 1803,
    "range": [
      1800,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 1805,
    "end": 1808,
    "range": [
      1805,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Identifier",
    "value": "boundsForKey",
    "start": 1813,
    "end": 1825,
    "range": [
      1813,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1839,
    "end": 1841,
    "range": [
      1839,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 1843,
    "end": 1846,
    "range": [
      1843,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1849,
    "end": 1852,
    "range": [
      1849,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1853,
    "end": 1855,
    "range": [
      1853,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 1856,
    "end": 1859,
    "range": [
      1856,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1862,
    "end": 1865,
    "range": [
      1862,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1867,
    "end": 1873,
    "range": [
      1867,
      1873
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1874,
    "end": 1879,
    "range": [
      1874,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1901,
    "end": 1907,
    "range": [
      1901,
      1907
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1908,
    "end": 1912,
    "range": [
      1908,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1939,
    "end": 1943,
    "range": [
      1939,
      1943
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjectWithUnderscoredKeys",
    "start": 1944,
    "end": 1969,
    "range": [
      1944,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1972,
    "end": 1979,
    "range": [
      1972,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1980,
    "end": 1986,
    "range": [
      1980,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1999,
    "end": 2001,
    "range": [
      1999,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2004,
    "end": 2006,
    "range": [
      2004,
      2006
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 2007,
    "end": 2011,
    "range": [
      2007,
      2011
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2012,
    "end": 2014,
    "range": [
      2012,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2017,
    "end": 2021,
    "range": [
      2017,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2027,
    "end": 2035,
    "range": [
      2027,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "genericTest",
    "start": 2036,
    "end": 2047,
    "range": [
      2036,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2050,
    "end": 2057,
    "range": [
      2050,
      2057
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2058,
    "end": 2064,
    "range": [
      2058,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "objectWithUnderscoredKeys",
    "start": 2066,
    "end": 2091,
    "range": [
      2066,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjectWithUnderscoredKeys",
    "start": 2093,
    "end": 2118,
    "range": [
      2093,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2123,
    "end": 2126,
    "range": [
      2123,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2135,
    "end": 2140,
    "range": [
      2135,
      2140
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldBeTrue",
    "start": 2141,
    "end": 2153,
    "range": [
      2141,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2155,
    "end": 2159,
    "range": [
      2155,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Identifier",
    "value": "objectWithUnderscoredKeys",
    "start": 2162,
    "end": 2187,
    "range": [
      2162,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Template",
    "value": "`_${",
    "start": 2188,
    "end": 2192,
    "range": [
      2188,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2192,
    "end": 2195,
    "range": [
      2192,
      2195
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2195,
    "end": 2197,
    "range": [
      2195,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  }
]
```
