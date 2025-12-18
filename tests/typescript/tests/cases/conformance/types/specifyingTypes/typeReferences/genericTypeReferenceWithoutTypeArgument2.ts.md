__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
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
              "start": 104,
              "end": 105
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 104,
            "end": 105
          }
        ],
        "start": 103,
        "end": 106
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 116
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
                  "start": 118,
                  "end": 119
                },
                "typeArguments": null,
                "start": 118,
                "end": 119
              },
              "start": 116,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 120
          }
        ],
        "start": 107,
        "end": 122
      },
      "declare": false,
      "start": 92,
      "end": 122
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "typeArguments": null,
                "start": 131,
                "end": 132
              },
              "start": 129,
              "end": 132
            },
            "start": 128,
            "end": 132
          },
          "init": null,
          "definite": false,
          "start": 128,
          "end": 132
        }
      ],
      "declare": false,
      "start": 124,
      "end": 133
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 145
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 148
                        },
                        "typeArguments": null,
                        "start": 147,
                        "end": 148
                      },
                      "start": 145,
                      "end": 148
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 144,
                    "end": 148
                  }
                ],
                "start": 142,
                "end": 150
              },
              "start": 140,
              "end": 150
            },
            "start": 139,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 139,
          "end": 150
        }
      ],
      "declare": false,
      "start": 135,
      "end": 151
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 165,
                              "end": 166
                            },
                            "typeArguments": null,
                            "start": 165,
                            "end": 166
                          },
                          "start": 163,
                          "end": 166
                        },
                        "start": 162,
                        "end": 166
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 170
                        },
                        "typeArguments": null,
                        "start": 169,
                        "end": 170
                      },
                      "start": 167,
                      "end": 170
                    },
                    "start": 161,
                    "end": 170
                  }
                ],
                "start": 159,
                "end": 172
              },
              "start": 157,
              "end": 172
            },
            "start": 156,
            "end": 172
          },
          "init": null,
          "definite": false,
          "start": 156,
          "end": 172
        }
      ],
      "declare": false,
      "start": 152,
      "end": 173
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 187,
                              "end": 188
                            },
                            "typeArguments": null,
                            "start": 187,
                            "end": 188
                          },
                          "start": 185,
                          "end": 188
                        },
                        "start": 184,
                        "end": 188
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 192
                        },
                        "typeArguments": null,
                        "start": 191,
                        "end": 192
                      },
                      "start": 189,
                      "end": 192
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 183,
                    "end": 192
                  }
                ],
                "start": 181,
                "end": 194
              },
              "start": 179,
              "end": 194
            },
            "start": 178,
            "end": 194
          },
          "init": null,
          "definite": false,
          "start": 178,
          "end": 194
        }
      ],
      "declare": false,
      "start": 174,
      "end": 195
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 210
                    },
                    "typeArguments": null,
                    "start": 209,
                    "end": 210
                  },
                  "start": 207,
                  "end": 210
                },
                "start": 206,
                "end": 210
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 224,
                              "end": 225
                            },
                            "typeArguments": null,
                            "start": 224,
                            "end": 225
                          },
                          "start": 222,
                          "end": 225
                        },
                        "start": 221,
                        "end": 225
                      },
                      "init": null,
                      "definite": false,
                      "start": 221,
                      "end": 225
                    }
                  ],
                  "declare": false,
                  "start": 217,
                  "end": 226
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 235
                  },
                  "start": 227,
                  "end": 236
                }
              ],
              "start": 215,
              "end": 238
            },
            "id": null,
            "generator": false,
            "start": 205,
            "end": 238
          },
          "definite": false,
          "start": 201,
          "end": 238
        }
      ],
      "declare": false,
      "start": 197,
      "end": 238
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 250
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "typeArguments": null,
              "start": 254,
              "end": 255
            },
            "start": 252,
            "end": 255
          },
          "start": 251,
          "end": 255
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 259
          },
          "typeArguments": null,
          "start": 258,
          "end": 259
        },
        "start": 256,
        "end": 259
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 270
                      },
                      "typeArguments": null,
                      "start": 269,
                      "end": 270
                    },
                    "start": 267,
                    "end": 270
                  },
                  "start": 266,
                  "end": 270
                },
                "init": null,
                "definite": false,
                "start": 266,
                "end": 270
              }
            ],
            "declare": false,
            "start": 262,
            "end": 271
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "start": 272,
            "end": 281
          }
        ],
        "start": 260,
        "end": 283
      },
      "expression": false,
      "start": 240,
      "end": 283
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 290
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 303
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 308
                    },
                    "typeArguments": null,
                    "start": 307,
                    "end": 308
                  },
                  "start": 305,
                  "end": 308
                },
                "start": 304,
                "end": 308
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "typeArguments": null,
                "start": 311,
                "end": 312
              },
              "start": 309,
              "end": 312
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 322,
                              "end": 323
                            },
                            "typeArguments": null,
                            "start": 322,
                            "end": 323
                          },
                          "start": 320,
                          "end": 323
                        },
                        "start": 319,
                        "end": 323
                      },
                      "init": null,
                      "definite": false,
                      "start": 319,
                      "end": 323
                    }
                  ],
                  "declare": false,
                  "start": 315,
                  "end": 324
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 333
                  },
                  "start": 325,
                  "end": 334
                }
              ],
              "start": 313,
              "end": 336
            },
            "expression": false,
            "start": 293,
            "end": 336
          },
          "definite": false,
          "start": 289,
          "end": 336
        }
      ],
      "declare": false,
      "start": 285,
      "end": 336
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 345
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 355
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 356,
        "end": 359
      },
      "abstract": false,
      "declare": false,
      "start": 338,
      "end": 359
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 372
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 382
          },
          "typeArguments": null,
          "start": 381,
          "end": 382
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 383,
        "end": 385
      },
      "declare": false,
      "start": 361,
      "end": 385
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 398
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
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
                      "start": 424,
                      "end": 425
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 424,
                    "end": 425
                  }
                ],
                "start": 423,
                "end": 426
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 429,
                      "end": 432
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
                          "start": 434,
                          "end": 435
                        },
                        "typeArguments": null,
                        "start": 434,
                        "end": 435
                      },
                      "start": 432,
                      "end": 435
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 429,
                    "end": 435
                  }
                ],
                "start": 427,
                "end": 437
              },
              "declare": false,
              "start": 412,
              "end": 437
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 405,
            "end": 437
          }
        ],
        "start": 399,
        "end": 439
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 387,
      "end": 439
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 447,
        "end": 449
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 459
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 461
        },
        "optional": false,
        "computed": false,
        "start": 458,
        "end": 461
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 462,
        "end": 465
      },
      "abstract": false,
      "declare": false,
      "start": 441,
      "end": 465
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 476,
        "end": 478
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
              "start": 479,
              "end": 480
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 492
                },
                "start": 489,
                "end": 492
              },
              "typeArguments": null,
              "start": 489,
              "end": 492
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 479,
            "end": 492
          }
        ],
        "start": 478,
        "end": 493
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 494,
        "end": 497
      },
      "declare": false,
      "start": 466,
      "end": 497
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 510
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "optional": false,
            "computed": false,
            "start": 519,
            "end": 522
          },
          "typeArguments": null,
          "start": 519,
          "end": 522
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 523,
        "end": 526
      },
      "declare": false,
      "start": 498,
      "end": 526
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 538
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
              "start": 539,
              "end": 540
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 550
              },
              "typeArguments": null,
              "start": 549,
              "end": 550
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 539,
            "end": 550
          }
        ],
        "start": 538,
        "end": 551
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 555,
                "end": 556
              },
              "typeArguments": null,
              "start": 555,
              "end": 556
            },
            "start": 553,
            "end": 556
          },
          "start": 552,
          "end": 556
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 558,
        "end": 561
      },
      "expression": false,
      "start": 528,
      "end": 561
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 571,
        "end": 572
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
              "start": 573,
              "end": 574
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 584
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 586
                },
                "start": 583,
                "end": 586
              },
              "typeArguments": null,
              "start": 583,
              "end": 586
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 573,
            "end": 586
          }
        ],
        "start": 572,
        "end": 587
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 591,
                "end": 592
              },
              "typeArguments": null,
              "start": 591,
              "end": 592
            },
            "start": 589,
            "end": 592
          },
          "start": 588,
          "end": 592
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 594,
        "end": 597
      },
      "expression": false,
      "start": 562,
      "end": 597
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 604
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 609
              },
              "typeArguments": null,
              "start": 608,
              "end": 609
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 610,
              "end": 614
            },
            "start": 607,
            "end": 614
          },
          "definite": false,
          "start": 603,
          "end": 614
        }
      ],
      "declare": false,
      "start": 599,
      "end": 615
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 620,
            "end": 621
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 625,
                  "end": 626
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 627,
                  "end": 628
                },
                "start": 625,
                "end": 628
              },
              "typeArguments": null,
              "start": 625,
              "end": 628
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 629,
              "end": 633
            },
            "start": 624,
            "end": 633
          },
          "definite": false,
          "start": 620,
          "end": 633
        }
      ],
      "declare": false,
      "start": 616,
      "end": 634
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 634
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 92,
    "end": 101,
    "range": [
      92,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 124,
    "end": 127,
    "range": [
      124,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 135,
    "end": 138,
    "range": [
      135,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 152,
    "end": 155,
    "range": [
      152,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 174,
    "end": 177,
    "range": [
      174,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214,
    "range": [
      212,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 227,
    "end": 233,
    "range": [
      227,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 240,
    "end": 248,
    "range": [
      240,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256,
    "range": [
      255,
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
    "value": "I",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 272,
    "end": 278,
    "range": [
      272,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 285,
    "end": 288,
    "range": [
      285,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 293,
    "end": 301,
    "range": [
      293,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318,
    "range": [
      315,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 325,
    "end": 331,
    "range": [
      325,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 338,
    "end": 343,
    "range": [
      338,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 346,
    "end": 353,
    "range": [
      346,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 361,
    "end": 370,
    "range": [
      361,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 373,
    "end": 380,
    "range": [
      373,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 387,
    "end": 396,
    "range": [
      387,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 412,
    "end": 421,
    "range": [
      412,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 429,
    "end": 432,
    "range": [
      429,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 441,
    "end": 446,
    "range": [
      441,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 447,
    "end": 449,
    "range": [
      447,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 450,
    "end": 457,
    "range": [
      450,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 466,
    "end": 475,
    "range": [
      466,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 476,
    "end": 478,
    "range": [
      476,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 481,
    "end": 488,
    "range": [
      481,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 498,
    "end": 507,
    "range": [
      498,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 508,
    "end": 510,
    "range": [
      508,
      510
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 511,
    "end": 518,
    "range": [
      511,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 528,
    "end": 536,
    "range": [
      528,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 541,
    "end": 548,
    "range": [
      541,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 562,
    "end": 570,
    "range": [
      562,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 575,
    "end": 582,
    "range": [
      575,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 599,
    "end": 602,
    "range": [
      599,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 610,
    "end": 614,
    "range": [
      610,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 616,
    "end": 619,
    "range": [
      616,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 629,
    "end": 633,
    "range": [
      629,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  }
]
```
