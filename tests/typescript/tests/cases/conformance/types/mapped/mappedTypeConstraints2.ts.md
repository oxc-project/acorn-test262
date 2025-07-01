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
