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
        "start": 10,
        "end": 11
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
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 20
          }
        ],
        "start": 12,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "eek",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              },
              "start": 47,
              "end": 54
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 37,
            "end": 55
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zeek",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 72,
                "end": 78
              },
              "start": 71,
              "end": 78
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 60,
            "end": 79
          }
        ],
        "start": 31,
        "end": 81
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 81
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 93
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 96,
                            "end": 102
                          },
                          "start": 95,
                          "end": 102
                        },
                        "start": 94,
                        "end": 102
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 104,
                        "end": 110
                      },
                      "start": 103,
                      "end": 110
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 92,
                    "end": 111
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 112
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 115,
                            "end": 121
                          },
                          "start": 114,
                          "end": 121
                        },
                        "start": 113,
                        "end": 121
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 123,
                        "end": 129
                      },
                      "start": 122,
                      "end": 129
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 111,
                    "end": 130
                  }
                ],
                "start": 90,
                "end": 132
              },
              "start": 89,
              "end": 132
            },
            "start": 87,
            "end": 132
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 133,
            "end": 134
          },
          "definite": false,
          "start": 87,
          "end": 134
        }
      ],
      "declare": false,
      "start": 83,
      "end": 135
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 149,
                            "end": 155
                          },
                          "start": 148,
                          "end": 155
                        },
                        "start": 147,
                        "end": 155
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 157,
                        "end": 163
                      },
                      "start": 156,
                      "end": 163
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 145,
                    "end": 164
                  }
                ],
                "start": 143,
                "end": 166
              },
              "start": 142,
              "end": 166
            },
            "start": 140,
            "end": 166
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 168,
            "end": 169
          },
          "definite": false,
          "start": 140,
          "end": 169
        }
      ],
      "declare": false,
      "start": 136,
      "end": 170
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
            "name": "x3",
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 183,
                            "end": 189
                          },
                          "start": 182,
                          "end": 189
                        },
                        "start": 181,
                        "end": 189
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 191,
                        "end": 197
                      },
                      "start": 190,
                      "end": 197
                    },
                    "start": 180,
                    "end": 198
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 201,
                            "end": 207
                          },
                          "start": 200,
                          "end": 207
                        },
                        "start": 199,
                        "end": 207
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
                      },
                      "start": 208,
                      "end": 215
                    },
                    "start": 198,
                    "end": 216
                  }
                ],
                "start": 178,
                "end": 218
              },
              "start": 177,
              "end": 218
            },
            "start": 175,
            "end": 218
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 219,
            "end": 220
          },
          "definite": false,
          "start": 175,
          "end": 220
        }
      ],
      "declare": false,
      "start": 171,
      "end": 221
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
            "name": "x4",
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
                      "start": 231,
                      "end": 232
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 231,
                    "end": 233
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 234
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 233,
                    "end": 235
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 235,
                      "end": 236
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 236,
                      "end": 243
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 235,
                    "end": 244
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 245
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 248,
                            "end": 254
                          },
                          "start": 247,
                          "end": 254
                        },
                        "start": 246,
                        "end": 254
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 256,
                        "end": 262
                      },
                      "start": 255,
                      "end": 262
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 244,
                    "end": 263
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 264
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 267,
                            "end": 273
                          },
                          "start": 266,
                          "end": 273
                        },
                        "start": 265,
                        "end": 273
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 275,
                        "end": 281
                      },
                      "start": 274,
                      "end": 281
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 263,
                    "end": 282
                  }
                ],
                "start": 229,
                "end": 284
              },
              "start": 228,
              "end": 284
            },
            "start": 226,
            "end": 284
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 285,
            "end": 286
          },
          "definite": false,
          "start": 226,
          "end": 286
        }
      ],
      "declare": false,
      "start": 222,
      "end": 287
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
            "name": "x5",
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 300,
                            "end": 306
                          },
                          "start": 299,
                          "end": 306
                        },
                        "start": 298,
                        "end": 306
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      },
                      "start": 307,
                      "end": 314
                    },
                    "start": 297,
                    "end": 315
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 318,
                            "end": 324
                          },
                          "start": 317,
                          "end": 324
                        },
                        "start": 316,
                        "end": 324
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 326,
                        "end": 332
                      },
                      "start": 325,
                      "end": 332
                    },
                    "start": 315,
                    "end": 333
                  },
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
                      "start": 333,
                      "end": 334
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 333,
                    "end": 335
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 336
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 335,
                    "end": 337
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 337,
                      "end": 338
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 339,
                        "end": 345
                      },
                      "start": 338,
                      "end": 345
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 337,
                    "end": 346
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 347
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 350,
                            "end": 356
                          },
                          "start": 349,
                          "end": 356
                        },
                        "start": 348,
                        "end": 356
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 358,
                        "end": 364
                      },
                      "start": 357,
                      "end": 364
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 346,
                    "end": 365
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 366
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 369,
                            "end": 375
                          },
                          "start": 368,
                          "end": 375
                        },
                        "start": 367,
                        "end": 375
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 377,
                        "end": 383
                      },
                      "start": 376,
                      "end": 383
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 365,
                    "end": 384
                  }
                ],
                "start": 295,
                "end": 386
              },
              "start": 294,
              "end": 386
            },
            "start": 292,
            "end": 386
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 387,
            "end": 388
          },
          "definite": false,
          "start": 292,
          "end": 388
        }
      ],
      "declare": false,
      "start": 288,
      "end": 389
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
            "name": "x6",
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 399,
                      "end": 400
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 401,
                        "end": 407
                      },
                      "start": 400,
                      "end": 407
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 399,
                    "end": 408
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 409
                    },
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
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 414,
                                    "end": 420
                                  },
                                  "start": 413,
                                  "end": 420
                                },
                                "start": 412,
                                "end": 420
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 422,
                                "end": 428
                              },
                              "start": 421,
                              "end": 428
                            },
                            "start": 411,
                            "end": 429
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 432,
                                    "end": 438
                                  },
                                  "start": 431,
                                  "end": 438
                                },
                                "start": 430,
                                "end": 438
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 440,
                                "end": 446
                              },
                              "start": 439,
                              "end": 446
                            },
                            "start": 429,
                            "end": 447
                          }
                        ],
                        "start": 410,
                        "end": 448
                      },
                      "start": 409,
                      "end": 448
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 408,
                    "end": 449
                  }
                ],
                "start": 397,
                "end": 451
              },
              "start": 396,
              "end": 451
            },
            "start": 394,
            "end": 451
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 452,
            "end": 453
          },
          "definite": false,
          "start": 394,
          "end": 453
        }
      ],
      "declare": false,
      "start": 390,
      "end": 454
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
            "name": "x7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 465,
                        "end": 471
                      },
                      "start": 464,
                      "end": 471
                    },
                    "start": 463,
                    "end": 471
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 474,
                    "end": 481
                  },
                  "start": 472,
                  "end": 481
                },
                "start": 462,
                "end": 481
              },
              "start": 461,
              "end": 481
            },
            "start": 459,
            "end": 481
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 482,
            "end": 483
          },
          "definite": false,
          "start": 459,
          "end": 483
        }
      ],
      "declare": false,
      "start": 455,
      "end": 484
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
            "name": "x8",
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 495
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
                          "start": 496,
                          "end": 497
                        },
                        "typeArguments": null,
                        "start": 496,
                        "end": 497
                      },
                      "start": 495,
                      "end": 497
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 494,
                    "end": 498
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 501,
                            "end": 507
                          },
                          "start": 500,
                          "end": 507
                        },
                        "start": 499,
                        "end": 507
                      }
                    ],
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
                              "start": 511,
                              "end": 512
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 511,
                            "end": 513
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 514,
                              "end": 515
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 514,
                            "end": 516
                          }
                        ],
                        "start": 509,
                        "end": 518
                      },
                      "start": 508,
                      "end": 518
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 498,
                    "end": 519
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 522,
                            "end": 528
                          },
                          "start": 521,
                          "end": 528
                        },
                        "start": 520,
                        "end": 528
                      }
                    ],
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
                              "start": 531,
                              "end": 532
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 531,
                            "end": 533
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 534,
                              "end": 535
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 534,
                            "end": 536
                          }
                        ],
                        "start": 530,
                        "end": 537
                      },
                      "start": 529,
                      "end": 537
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 519,
                    "end": 538
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 541,
                        "end": 548
                      },
                      "start": 540,
                      "end": 548
                    },
                    "start": 538,
                    "end": 549
                  }
                ],
                "start": 492,
                "end": 551
              },
              "start": 491,
              "end": 551
            },
            "start": 489,
            "end": 551
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 552,
            "end": 553
          },
          "definite": false,
          "start": 489,
          "end": 553
        }
      ],
      "declare": false,
      "start": 485,
      "end": 554
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
            "name": "x9",
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
                  "start": 562,
                  "end": 563
                },
                "typeArguments": null,
                "start": 562,
                "end": 563
              },
              "start": 561,
              "end": 563
            },
            "start": 559,
            "end": 563
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 564,
            "end": 565
          },
          "definite": false,
          "start": 559,
          "end": 565
        }
      ],
      "declare": false,
      "start": 555,
      "end": 566
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
            "name": "x10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 575,
                          "end": 576
                        },
                        "typeArguments": null,
                        "start": 575,
                        "end": 576
                      },
                      "start": 575,
                      "end": 578
                    },
                    "start": 575,
                    "end": 580
                  },
                  "start": 575,
                  "end": 582
                },
                "start": 575,
                "end": 584
              },
              "start": 574,
              "end": 584
            },
            "start": 571,
            "end": 584
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 585,
            "end": 586
          },
          "definite": false,
          "start": 571,
          "end": 586
        }
      ],
      "declare": false,
      "start": 567,
      "end": 587
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
            "name": "x11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 598
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
                              "start": 599,
                              "end": 600
                            },
                            "typeArguments": null,
                            "start": 599,
                            "end": 600
                          },
                          "start": 598,
                          "end": 600
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 597,
                        "end": 601
                      },
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
                          "start": 601,
                          "end": 602
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 603,
                            "end": 610
                          },
                          "start": 602,
                          "end": 610
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 601,
                        "end": 611
                      }
                    ],
                    "start": 596,
                    "end": 612
                  },
                  "start": 596,
                  "end": 614
                },
                "start": 596,
                "end": 616
              },
              "start": 595,
              "end": 616
            },
            "start": 592,
            "end": 616
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 617,
            "end": 618
          },
          "definite": false,
          "start": 592,
          "end": 618
        }
      ],
      "declare": false,
      "start": 588,
      "end": 619
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
            "name": "x12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 630
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
                              "start": 631,
                              "end": 632
                            },
                            "typeArguments": null,
                            "start": 631,
                            "end": 632
                          },
                          "start": 630,
                          "end": 632
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 629,
                        "end": 633
                      },
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
                          "start": 633,
                          "end": 634
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 635,
                            "end": 642
                          },
                          "start": 634,
                          "end": 642
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 633,
                        "end": 643
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 643,
                          "end": 644
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 648,
                                    "end": 654
                                  },
                                  "start": 647,
                                  "end": 654
                                },
                                "start": 646,
                                "end": 654
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 657,
                                "end": 664
                              },
                              "start": 655,
                              "end": 664
                            },
                            "start": 645,
                            "end": 664
                          },
                          "start": 644,
                          "end": 664
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 643,
                        "end": 665
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "w",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 666
                        },
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
                                  "name": "z",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 669,
                                  "end": 670
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
                                      "start": 671,
                                      "end": 672
                                    },
                                    "typeArguments": null,
                                    "start": 671,
                                    "end": 672
                                  },
                                  "start": 670,
                                  "end": 672
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 669,
                                "end": 673
                              },
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "s",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 676,
                                        "end": 682
                                      },
                                      "start": 675,
                                      "end": 682
                                    },
                                    "start": 674,
                                    "end": 682
                                  }
                                ],
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
                                          "start": 686,
                                          "end": 687
                                        },
                                        "typeAnnotation": null,
                                        "accessibility": null,
                                        "static": false,
                                        "start": 686,
                                        "end": 688
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 689,
                                          "end": 690
                                        },
                                        "typeAnnotation": null,
                                        "accessibility": null,
                                        "static": false,
                                        "start": 689,
                                        "end": 691
                                      }
                                    ],
                                    "start": 684,
                                    "end": 693
                                  },
                                  "start": 683,
                                  "end": 693
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 673,
                                "end": 694
                              },
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "n",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 697,
                                        "end": 703
                                      },
                                      "start": 696,
                                      "end": 703
                                    },
                                    "start": 695,
                                    "end": 703
                                  }
                                ],
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
                                          "start": 706,
                                          "end": 707
                                        },
                                        "typeAnnotation": null,
                                        "accessibility": null,
                                        "static": false,
                                        "start": 706,
                                        "end": 708
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 709,
                                          "end": 710
                                        },
                                        "typeAnnotation": null,
                                        "accessibility": null,
                                        "static": false,
                                        "start": 709,
                                        "end": 711
                                      }
                                    ],
                                    "start": 705,
                                    "end": 712
                                  },
                                  "start": 704,
                                  "end": 712
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 694,
                                "end": 713
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 716,
                                    "end": 723
                                  },
                                  "start": 715,
                                  "end": 723
                                },
                                "start": 713,
                                "end": 724
                              }
                            ],
                            "start": 667,
                            "end": 726
                          },
                          "start": 666,
                          "end": 726
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 665,
                        "end": 727
                      }
                    ],
                    "start": 628,
                    "end": 728
                  },
                  "start": 628,
                  "end": 730
                },
                "start": 628,
                "end": 732
              },
              "start": 627,
              "end": 732
            },
            "start": 624,
            "end": 732
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 733,
            "end": 734
          },
          "definite": false,
          "start": 624,
          "end": 734
        }
      ],
      "declare": false,
      "start": 620,
      "end": 735
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
            "name": "x13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 753,
                        "end": 759
                      },
                      "start": 751,
                      "end": 759
                    },
                    "start": 746,
                    "end": 760
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 767,
                            "end": 773
                          },
                          "start": 766,
                          "end": 773
                        },
                        "start": 765,
                        "end": 773
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 775,
                        "end": 781
                      },
                      "start": 774,
                      "end": 781
                    },
                    "start": 761,
                    "end": 782
                  },
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
                      "start": 783,
                      "end": 784
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 786,
                        "end": 792
                      },
                      "start": 784,
                      "end": 792
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 783,
                    "end": 793
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 794,
                      "end": 795
                    },
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 798,
                              "end": 799
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 801,
                                "end": 807
                              },
                              "start": 799,
                              "end": 807
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 798,
                            "end": 808
                          }
                        ],
                        "start": 797,
                        "end": 809
                      },
                      "start": 795,
                      "end": 809
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 794,
                    "end": 810
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 815,
                        "end": 817
                      },
                      "start": 813,
                      "end": 817
                    },
                    "start": 811,
                    "end": 818
                  }
                ],
                "start": 744,
                "end": 820
              },
              "start": 743,
              "end": 820
            },
            "start": 740,
            "end": 820
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 823,
            "end": 824
          },
          "definite": false,
          "start": 740,
          "end": 824
        }
      ],
      "declare": false,
      "start": 736,
      "end": 825
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
            "name": "x14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 836,
                      "end": 837
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSNumberKeyword",
                            "start": 840,
                            "end": 846
                          },
                          "start": 839,
                          "end": 846
                        },
                        "start": 838,
                        "end": 846
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 848,
                        "end": 855
                      },
                      "start": 847,
                      "end": 855
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 836,
                    "end": 856
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 857,
                      "end": 858
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 857,
                    "end": 859
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 860,
                      "end": 861
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 860,
                    "end": 862
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 866,
                        "end": 872
                      },
                      "start": 865,
                      "end": 872
                    },
                    "start": 863,
                    "end": 873
                  }
                ],
                "start": 834,
                "end": 875
              },
              "start": 833,
              "end": 875
            },
            "start": 830,
            "end": 875
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 876,
            "end": 877
          },
          "definite": false,
          "start": 830,
          "end": 877
        }
      ],
      "declare": false,
      "start": 826,
      "end": 878
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
            "name": "x15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 887,
                "end": 893
              },
              "start": 886,
              "end": 893
            },
            "start": 883,
            "end": 893
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 894,
            "end": 895
          },
          "definite": false,
          "start": 883,
          "end": 895
        }
      ],
      "declare": false,
      "start": 879,
      "end": 896
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 899
}
```
