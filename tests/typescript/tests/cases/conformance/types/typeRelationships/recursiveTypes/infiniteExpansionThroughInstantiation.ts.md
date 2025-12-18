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
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 112
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
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 126
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
                  "start": 128,
                  "end": 129
                },
                "typeArguments": null,
                "start": 128,
                "end": 129
              },
              "start": 126,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 130
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 145
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
                        "start": 146,
                        "end": 147
                      },
                      "typeArguments": null,
                      "start": 146,
                      "end": 147
                    }
                  ],
                  "start": 145,
                  "end": 148
                },
                "start": 141,
                "end": 148
              },
              "start": 139,
              "end": 148
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 149
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OwnerList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 170
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
                        "start": 171,
                        "end": 172
                      },
                      "typeArguments": null,
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "start": 170,
                  "end": 173
                },
                "start": 161,
                "end": 173
              },
              "start": 159,
              "end": 173
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 174
          }
        ],
        "start": 116,
        "end": 176
      },
      "declare": false,
      "start": 98,
      "end": 176
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OwnerList",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 275
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 276,
            "end": 277
          }
        ],
        "start": 275,
        "end": 278
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 291
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 296
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 298
                      },
                      "typeArguments": null,
                      "start": 297,
                      "end": 298
                    }
                  ],
                  "start": 296,
                  "end": 299
                },
                "start": 292,
                "end": 299
              }
            ],
            "start": 291,
            "end": 300
          },
          "start": 287,
          "end": 300
        }
      ],
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 313,
                "end": 319
              },
              "start": 311,
              "end": 319
            },
            "accessibility": null,
            "static": false,
            "start": 307,
            "end": 320
          }
        ],
        "start": 301,
        "end": 322
      },
      "declare": false,
      "start": 256,
      "end": 322
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
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 338
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 339,
                      "end": 345
                    }
                  ],
                  "start": 338,
                  "end": 346
                },
                "start": 334,
                "end": 346
              },
              "start": 332,
              "end": 346
            },
            "start": 328,
            "end": 346
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 346
        }
      ],
      "declare": false,
      "start": 324,
      "end": 347
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
            "name": "ownerList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OwnerList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 372
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 373,
                      "end": 379
                    }
                  ],
                  "start": 372,
                  "end": 380
                },
                "start": 363,
                "end": 380
              },
              "start": 361,
              "end": 380
            },
            "start": 352,
            "end": 380
          },
          "init": null,
          "definite": false,
          "start": 352,
          "end": 380
        }
      ],
      "declare": false,
      "start": 348,
      "end": 381
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": null,
          "start": 382,
          "end": 386
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ownerList",
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 398
        },
        "start": 382,
        "end": 398
      },
      "directive": null,
      "start": 382,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 416
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
          }
        ],
        "start": 416,
        "end": 419
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
                "start": 423,
                "end": 424
              },
              "typeArguments": null,
              "start": 423,
              "end": 424
            },
            "start": 421,
            "end": 424
          },
          "start": 420,
          "end": 424
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
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 442,
                        "end": 446
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
                              "start": 447,
                              "end": 448
                            },
                            "typeArguments": null,
                            "start": 447,
                            "end": 448
                          }
                        ],
                        "start": 446,
                        "end": 449
                      },
                      "start": 442,
                      "end": 449
                    },
                    "start": 440,
                    "end": 449
                  },
                  "start": 436,
                  "end": 449
                },
                "init": null,
                "definite": false,
                "start": 436,
                "end": 449
              }
            ],
            "declare": false,
            "start": 432,
            "end": 450
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
                  "name": "ownerList",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OwnerList",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 479
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
                              "start": 480,
                              "end": 481
                            },
                            "typeArguments": null,
                            "start": 480,
                            "end": 481
                          }
                        ],
                        "start": 479,
                        "end": 482
                      },
                      "start": 470,
                      "end": 482
                    },
                    "start": 468,
                    "end": 482
                  },
                  "start": 459,
                  "end": 482
                },
                "init": null,
                "definite": false,
                "start": 459,
                "end": 482
              }
            ],
            "declare": false,
            "start": 455,
            "end": 483
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "list",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 492
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ownerList",
                "optional": false,
                "typeAnnotation": null,
                "start": 495,
                "end": 504
              },
              "start": 488,
              "end": 504
            },
            "directive": null,
            "start": 488,
            "end": 505
          }
        ],
        "start": 426,
        "end": 509
      },
      "expression": false,
      "start": 402,
      "end": 509
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 98,
  "end": 509
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 98,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "owner",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "OwnerList",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 256,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "OwnerList",
    "start": 266,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 279,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "ownerList",
    "start": 352,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "OwnerList",
    "start": 363,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "ownerList",
    "start": 389,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 402,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 442,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "ownerList",
    "start": 459,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "OwnerList",
    "start": 470,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "ownerList",
    "start": 495,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  }
]
```
