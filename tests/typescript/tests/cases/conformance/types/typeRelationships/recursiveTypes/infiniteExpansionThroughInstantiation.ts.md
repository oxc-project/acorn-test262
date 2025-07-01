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
