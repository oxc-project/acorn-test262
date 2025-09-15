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
