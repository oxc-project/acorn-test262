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
        "name": "Opt1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 25,
                "end": 28
              },
              "start": 23,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 29
          }
        ],
        "start": 15,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt2",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 46
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "q",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 55,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 53,
            "end": 61
          }
        ],
        "start": 47,
        "end": 63
      },
      "declare": false,
      "start": 32,
      "end": 63
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt3",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 78
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 89,
                "end": 92
              },
              "start": 87,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 93
          }
        ],
        "start": 79,
        "end": 95
      },
      "declare": false,
      "start": 64,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt4",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 110
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 121,
                "end": 124
              },
              "start": 119,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 117,
            "end": 125
          }
        ],
        "start": 111,
        "end": 127
      },
      "declare": false,
      "start": 96,
      "end": 127
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 139
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 151,
                    "end": 155
                  },
                  "start": 149,
                  "end": 155
                },
                "start": 148,
                "end": 155
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 162
                },
                "typeArguments": null,
                "start": 158,
                "end": 162
              },
              "start": 156,
              "end": 162
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 146,
            "end": 163
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 169
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 177
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 177
                  },
                  "start": 171,
                  "end": 177
                },
                "start": 170,
                "end": 177
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 184
                },
                "typeArguments": null,
                "start": 180,
                "end": 184
              },
              "start": 178,
              "end": 184
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 168,
            "end": 185
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 198
                    },
                    "typeArguments": null,
                    "start": 194,
                    "end": 198
                  },
                  "start": 192,
                  "end": 198
                },
                "start": 191,
                "end": 198
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 205
                },
                "typeArguments": null,
                "start": 201,
                "end": 205
              },
              "start": 199,
              "end": 205
            },
            "start": 190,
            "end": 206
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 219
                    },
                    "typeArguments": null,
                    "start": 215,
                    "end": 219
                  },
                  "start": 213,
                  "end": 219
                },
                "start": 212,
                "end": 219
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 226
                },
                "typeArguments": null,
                "start": 222,
                "end": 226
              },
              "start": 220,
              "end": 226
            },
            "start": 211,
            "end": 227
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 244
                    },
                    "typeArguments": null,
                    "start": 240,
                    "end": 244
                  },
                  "start": 238,
                  "end": 244
                },
                "start": 237,
                "end": 244
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 251
                },
                "typeArguments": null,
                "start": 247,
                "end": 251
              },
              "start": 245,
              "end": 251
            },
            "start": 232,
            "end": 252
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 269
                    },
                    "typeArguments": null,
                    "start": 265,
                    "end": 269
                  },
                  "start": 263,
                  "end": 269
                },
                "start": 262,
                "end": 269
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 276
                },
                "typeArguments": null,
                "start": 272,
                "end": 276
              },
              "start": 270,
              "end": 276
            },
            "start": 257,
            "end": 277
          }
        ],
        "start": 140,
        "end": 279
      },
      "declare": false,
      "start": 128,
      "end": 279
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 291
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 299
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 307
                    },
                    "typeArguments": null,
                    "start": 303,
                    "end": 307
                  },
                  "start": 301,
                  "end": 307
                },
                "start": 300,
                "end": 307
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 314
                },
                "typeArguments": null,
                "start": 310,
                "end": 314
              },
              "start": 308,
              "end": 314
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 298,
            "end": 315
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 329
                    },
                    "typeArguments": null,
                    "start": 325,
                    "end": 329
                  },
                  "start": 323,
                  "end": 329
                },
                "start": 322,
                "end": 329
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 336
                },
                "typeArguments": null,
                "start": 332,
                "end": 336
              },
              "start": 330,
              "end": 336
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 320,
            "end": 337
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 350
                    },
                    "typeArguments": null,
                    "start": 346,
                    "end": 350
                  },
                  "start": 344,
                  "end": 350
                },
                "start": 343,
                "end": 350
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 357
                },
                "typeArguments": null,
                "start": 353,
                "end": 357
              },
              "start": 351,
              "end": 357
            },
            "start": 342,
            "end": 358
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 371
                    },
                    "typeArguments": null,
                    "start": 367,
                    "end": 371
                  },
                  "start": 365,
                  "end": 371
                },
                "start": 364,
                "end": 371
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 378
                },
                "typeArguments": null,
                "start": 374,
                "end": 378
              },
              "start": 372,
              "end": 378
            },
            "start": 363,
            "end": 379
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 396
                    },
                    "typeArguments": null,
                    "start": 392,
                    "end": 396
                  },
                  "start": 390,
                  "end": 396
                },
                "start": 389,
                "end": 396
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 403
                },
                "typeArguments": null,
                "start": 399,
                "end": 403
              },
              "start": 397,
              "end": 403
            },
            "start": 384,
            "end": 404
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opt4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 421
                    },
                    "typeArguments": null,
                    "start": 417,
                    "end": 421
                  },
                  "start": 415,
                  "end": 421
                },
                "start": 414,
                "end": 421
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 428
                },
                "typeArguments": null,
                "start": 424,
                "end": 428
              },
              "start": 422,
              "end": 428
            },
            "start": 409,
            "end": 429
          }
        ],
        "start": 292,
        "end": 431
      },
      "declare": false,
      "start": 280,
      "end": 431
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
              "start": 438,
              "end": 441
            },
            "start": 437,
            "end": 441
          },
          "init": null,
          "definite": false,
          "start": 437,
          "end": 441
        }
      ],
      "declare": false,
      "start": 433,
      "end": 442
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 477
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 483
              },
              "optional": false,
              "computed": false,
              "start": 480,
              "end": 483
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 484,
                "end": 486
              }
            ],
            "optional": false,
            "start": 480,
            "end": 487
          },
          "definite": false,
          "start": 475,
          "end": 487
        }
      ],
      "declare": false,
      "start": 471,
      "end": 488
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 495
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 500,
                "end": 502
              }
            ],
            "optional": false,
            "start": 498,
            "end": 503
          },
          "definite": false,
          "start": 493,
          "end": 503
        }
      ],
      "declare": false,
      "start": 489,
      "end": 504
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 511
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 519
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 520,
                "end": 522
              }
            ],
            "start": 514,
            "end": 523
          },
          "definite": false,
          "start": 509,
          "end": 523
        }
      ],
      "declare": false,
      "start": 505,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 524
}
```
