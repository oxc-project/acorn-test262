__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 8,
                "end": 12
              },
              "start": 6,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
                      "start": 24,
                      "end": 25
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 27,
                        "end": 31
                      },
                      "start": 25,
                      "end": 31
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 24,
                    "end": 31
                  }
                ],
                "start": 22,
                "end": 33
              },
              "start": 20,
              "end": 33
            },
            "start": 18,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 33
        }
      ],
      "declare": false,
      "start": 14,
      "end": 34
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSThisType",
                  "start": 43,
                  "end": 47
                },
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "start": 39,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 49
        }
      ],
      "declare": false,
      "start": 35,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 63
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
              "type": "TSThisType",
              "start": 67,
              "end": 71
            },
            "start": 65,
            "end": 71
          },
          "start": 64,
          "end": 71
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSThisType",
          "start": 74,
          "end": 78
        },
        "start": 72,
        "end": 78
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
                      "type": "TSThisType",
                      "start": 92,
                      "end": 96
                    },
                    "start": 90,
                    "end": 96
                  },
                  "start": 89,
                  "end": 96
                },
                "init": null,
                "definite": false,
                "start": 89,
                "end": 96
              }
            ],
            "declare": false,
            "start": 85,
            "end": 97
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ThisExpression",
              "start": 109,
              "end": 113
            },
            "start": 102,
            "end": 114
          }
        ],
        "start": 79,
        "end": 116
      },
      "expression": false,
      "start": 52,
      "end": 116
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 130
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 143
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 145,
                        "end": 149
                      },
                      "start": 143,
                      "end": 149
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 142,
                    "end": 149
                  }
                ],
                "start": 140,
                "end": 151
              },
              "start": 138,
              "end": 151
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 152
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 166,
                        "end": 170
                      },
                      "start": 164,
                      "end": 170
                    },
                    "start": 162,
                    "end": 170
                  }
                ],
                "start": 160,
                "end": 172
              },
              "start": 158,
              "end": 172
            },
            "accessibility": null,
            "static": false,
            "start": 157,
            "end": 173
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
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
                        "type": "TSThisType",
                        "start": 191,
                        "end": 195
                      },
                      "start": 189,
                      "end": 195
                    },
                    "start": 183,
                    "end": 195
                  }
                ],
                "start": 181,
                "end": 197
              },
              "start": 179,
              "end": 197
            },
            "accessibility": null,
            "static": false,
            "start": 178,
            "end": 198
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 204
            },
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
                            "type": "TSStringKeyword",
                            "start": 212,
                            "end": 218
                          },
                          "start": 210,
                          "end": 218
                        },
                        "start": 209,
                        "end": 218
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 221,
                        "end": 225
                      },
                      "start": 219,
                      "end": 225
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 208,
                    "end": 225
                  }
                ],
                "start": 206,
                "end": 227
              },
              "start": 204,
              "end": 227
            },
            "accessibility": null,
            "static": false,
            "start": 203,
            "end": 228
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
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
                      "start": 238,
                      "end": 239
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
                            "type": "TSThisType",
                            "start": 243,
                            "end": 247
                          },
                          "start": 241,
                          "end": 247
                        },
                        "start": 240,
                        "end": 247
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 250,
                        "end": 254
                      },
                      "start": 248,
                      "end": 254
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 238,
                    "end": 254
                  }
                ],
                "start": 236,
                "end": 256
              },
              "start": 234,
              "end": 256
            },
            "accessibility": null,
            "static": false,
            "start": 233,
            "end": 257
          }
        ],
        "start": 131,
        "end": 259
      },
      "declare": false,
      "start": 118,
      "end": 259
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 269
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 282
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 284,
                        "end": 288
                      },
                      "start": 282,
                      "end": 288
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 281,
                    "end": 288
                  }
                ],
                "start": 279,
                "end": 290
              },
              "start": 277,
              "end": 290
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 276,
            "end": 291
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 297
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 305,
                        "end": 309
                      },
                      "start": 303,
                      "end": 309
                    },
                    "start": 301,
                    "end": 309
                  }
                ],
                "start": 299,
                "end": 311
              },
              "start": 297,
              "end": 311
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 296,
            "end": 312
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
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
                        "type": "TSThisType",
                        "start": 330,
                        "end": 334
                      },
                      "start": 328,
                      "end": 334
                    },
                    "start": 322,
                    "end": 334
                  }
                ],
                "start": 320,
                "end": 336
              },
              "start": 318,
              "end": 336
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 317,
            "end": 337
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 343
            },
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
                            "type": "TSStringKeyword",
                            "start": 351,
                            "end": 357
                          },
                          "start": 349,
                          "end": 357
                        },
                        "start": 348,
                        "end": 357
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 360,
                        "end": 364
                      },
                      "start": 358,
                      "end": 364
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 347,
                    "end": 364
                  }
                ],
                "start": 345,
                "end": 366
              },
              "start": 343,
              "end": 366
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 342,
            "end": 367
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 373
            },
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
                      "start": 377,
                      "end": 378
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
                            "type": "TSThisType",
                            "start": 382,
                            "end": 386
                          },
                          "start": 380,
                          "end": 386
                        },
                        "start": 379,
                        "end": 386
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 389,
                        "end": 393
                      },
                      "start": 387,
                      "end": 393
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 377,
                    "end": 393
                  }
                ],
                "start": 375,
                "end": 395
              },
              "start": 373,
              "end": 395
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 372,
            "end": 396
          }
        ],
        "start": 270,
        "end": 398
      },
      "abstract": false,
      "declare": false,
      "start": 261,
      "end": 398
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 406,
        "end": 408
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 423
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 425,
                "end": 429
              },
              "start": 423,
              "end": 429
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
            "start": 415,
            "end": 430
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 443
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 447,
                "end": 451
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 461
              },
              "start": 446,
              "end": 461
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 435,
            "end": 462
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 477
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 481,
                      "end": 485
                    },
                    "start": 479,
                    "end": 485
                  },
                  "start": 478,
                  "end": 485
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 488,
                  "end": 492
                },
                "start": 486,
                "end": 492
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
                      "start": 510,
                      "end": 519
                    },
                    "start": 503,
                    "end": 520
                  }
                ],
                "start": 493,
                "end": 526
              },
              "expression": false,
              "start": 477,
              "end": 526
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 467,
            "end": 526
          }
        ],
        "start": 409,
        "end": 528
      },
      "abstract": false,
      "declare": false,
      "start": 400,
      "end": 528
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 540,
        "end": 542
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
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
                        "type": "TSThisType",
                        "start": 563,
                        "end": 567
                      },
                      "start": 561,
                      "end": 567
                    },
                    "start": 560,
                    "end": 567
                  },
                  "init": null,
                  "definite": false,
                  "start": 560,
                  "end": 567
                }
              ],
              "declare": false,
              "start": 556,
              "end": 568
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 549,
            "end": 568
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "typeAnnotation": null,
                    "start": 584,
                    "end": 585
                  },
                  "init": {
                    "type": "ThisExpression",
                    "start": 588,
                    "end": 592
                  },
                  "definite": false,
                  "start": 584,
                  "end": 592
                }
              ],
              "declare": false,
              "start": 580,
              "end": 593
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 573,
            "end": 593
          }
        ],
        "start": 543,
        "end": 595
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 530,
      "end": 595
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 605
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 612,
              "end": 614
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 628
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 632,
                            "end": 636
                          },
                          "start": 630,
                          "end": 636
                        },
                        "start": 629,
                        "end": 636
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 639,
                        "end": 643
                      },
                      "start": 637,
                      "end": 643
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
                            "start": 665,
                            "end": 674
                          },
                          "start": 658,
                          "end": 675
                        }
                      ],
                      "start": 644,
                      "end": 685
                    },
                    "expression": false,
                    "start": 628,
                    "end": 685
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 627,
                  "end": 685
                }
              ],
              "start": 617,
              "end": 691
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 612,
            "end": 691
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 697
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 720
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
                            "type": "TSThisType",
                            "start": 724,
                            "end": 728
                          },
                          "start": 722,
                          "end": 728
                        },
                        "start": 721,
                        "end": 728
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 731,
                        "end": 735
                      },
                      "start": 729,
                      "end": 735
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
                            "start": 757,
                            "end": 766
                          },
                          "start": 750,
                          "end": 767
                        }
                      ],
                      "start": 736,
                      "end": 777
                    },
                    "expression": false,
                    "start": 710,
                    "end": 777
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 790,
                          "end": 792
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 809,
                                "end": 810
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
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSThisType",
                                        "start": 814,
                                        "end": 818
                                      },
                                      "start": 812,
                                      "end": 818
                                    },
                                    "start": 811,
                                    "end": 818
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSThisType",
                                    "start": 821,
                                    "end": 825
                                  },
                                  "start": 819,
                                  "end": 825
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
                                        "start": 851,
                                        "end": 860
                                      },
                                      "start": 844,
                                      "end": 861
                                    }
                                  ],
                                  "start": 826,
                                  "end": 875
                                },
                                "expression": false,
                                "start": 810,
                                "end": 875
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 809,
                              "end": 875
                            }
                          ],
                          "start": 795,
                          "end": 885
                        },
                        "definite": false,
                        "start": 790,
                        "end": 885
                      }
                    ],
                    "declare": false,
                    "start": 786,
                    "end": 885
                  }
                ],
                "start": 700,
                "end": 891
              },
              "expression": false,
              "start": 697,
              "end": 891
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 696,
            "end": 891
          }
        ],
        "start": 606,
        "end": 893
      },
      "abstract": false,
      "declare": false,
      "start": 597,
      "end": 893
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 893
}
```
