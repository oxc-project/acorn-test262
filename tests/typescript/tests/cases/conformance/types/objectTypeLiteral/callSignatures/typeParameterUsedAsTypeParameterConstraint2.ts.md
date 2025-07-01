__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 115
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
              "start": 116,
              "end": 117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 117
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 130
              },
              "typeArguments": null,
              "start": 129,
              "end": 130
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 130
          }
        ],
        "start": 115,
        "end": 131
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
                "start": 135,
                "end": 136
              },
              "typeArguments": null,
              "start": 135,
              "end": 136
            },
            "start": 133,
            "end": 136
          },
          "start": 132,
          "end": 136
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "typeArguments": null,
              "start": 141,
              "end": 142
            },
            "start": 139,
            "end": 142
          },
          "start": 138,
          "end": 142
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 162
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
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 174
                    },
                    "typeArguments": null,
                    "start": 173,
                    "end": 174
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 163,
                  "end": 174
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 177
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    },
                    "typeArguments": null,
                    "start": 186,
                    "end": 187
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 176,
                  "end": 187
                }
              ],
              "start": 162,
              "end": 188
            },
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 213
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
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 215
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "W",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 224,
                            "end": 225
                          },
                          "typeArguments": null,
                          "start": 224,
                          "end": 225
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 214,
                        "end": 225
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 227,
                          "end": 228
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 237,
                            "end": 238
                          },
                          "typeArguments": null,
                          "start": 237,
                          "end": 238
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 227,
                        "end": 238
                      }
                    ],
                    "start": 213,
                    "end": 239
                  },
                  "params": [
                    {
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
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 243,
                            "end": 244
                          },
                          "typeArguments": null,
                          "start": 243,
                          "end": 244
                        },
                        "start": 241,
                        "end": 244
                      },
                      "start": 240,
                      "end": 244
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 249,
                            "end": 250
                          },
                          "typeArguments": null,
                          "start": 249,
                          "end": 250
                        },
                        "start": 247,
                        "end": 250
                      },
                      "start": 246,
                      "end": 250
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
                        "start": 253,
                        "end": 254
                      },
                      "typeArguments": null,
                      "start": 253,
                      "end": 254
                    },
                    "start": 251,
                    "end": 254
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 269,
                            "end": 270
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 273,
                            "end": 274
                          },
                          "start": 269,
                          "end": 274
                        },
                        "directive": null,
                        "start": 269,
                        "end": 275
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 295,
                          "end": 296
                        },
                        "start": 288,
                        "end": 297
                      }
                    ],
                    "start": 255,
                    "end": 307
                  },
                  "expression": false,
                  "start": 201,
                  "end": 307
                }
              ],
              "start": 191,
              "end": 313
            },
            "expression": false,
            "start": 150,
            "end": 313
          }
        ],
        "start": 144,
        "end": 315
      },
      "expression": false,
      "start": 103,
      "end": 315
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 330
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 332
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "typeArguments": null,
              "start": 341,
              "end": 342
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 331,
            "end": 342
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 345
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 344,
            "end": 345
          }
        ],
        "start": 330,
        "end": 346
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
                "start": 350,
                "end": 351
              },
              "typeArguments": null,
              "start": 350,
              "end": 351
            },
            "start": 348,
            "end": 351
          },
          "start": 347,
          "end": 351
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "typeArguments": null,
              "start": 356,
              "end": 357
            },
            "start": 354,
            "end": 357
          },
          "start": 353,
          "end": 357
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 377
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
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 379
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 389
                    },
                    "typeArguments": null,
                    "start": 388,
                    "end": 389
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 378,
                  "end": 389
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 392
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 402
                    },
                    "typeArguments": null,
                    "start": 401,
                    "end": 402
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 391,
                  "end": 402
                }
              ],
              "start": 377,
              "end": 403
            },
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 428
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
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 429,
                          "end": 430
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "W",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 439,
                            "end": 440
                          },
                          "typeArguments": null,
                          "start": 439,
                          "end": 440
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 429,
                        "end": 440
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 442,
                          "end": 443
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 452,
                            "end": 453
                          },
                          "typeArguments": null,
                          "start": 452,
                          "end": 453
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 442,
                        "end": 453
                      }
                    ],
                    "start": 428,
                    "end": 454
                  },
                  "params": [
                    {
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
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 459
                          },
                          "typeArguments": null,
                          "start": 458,
                          "end": 459
                        },
                        "start": 456,
                        "end": 459
                      },
                      "start": 455,
                      "end": 459
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 464,
                            "end": 465
                          },
                          "typeArguments": null,
                          "start": 464,
                          "end": 465
                        },
                        "start": 462,
                        "end": 465
                      },
                      "start": 461,
                      "end": 465
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
                        "start": 468,
                        "end": 469
                      },
                      "typeArguments": null,
                      "start": 468,
                      "end": 469
                    },
                    "start": 466,
                    "end": 469
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 484,
                            "end": 485
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 489
                          },
                          "start": 484,
                          "end": 489
                        },
                        "directive": null,
                        "start": 484,
                        "end": 490
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 510,
                          "end": 511
                        },
                        "start": 503,
                        "end": 512
                      }
                    ],
                    "start": 470,
                    "end": 522
                  },
                  "expression": false,
                  "start": 416,
                  "end": 522
                }
              ],
              "start": 406,
              "end": 528
            },
            "expression": false,
            "start": 365,
            "end": 528
          }
        ],
        "start": 359,
        "end": 530
      },
      "expression": false,
      "start": 317,
      "end": 530
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 537
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "start": 550,
                    "end": 551
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 550,
                  "end": 551
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 554
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 563,
                      "end": 564
                    },
                    "typeArguments": null,
                    "start": 563,
                    "end": 564
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 553,
                  "end": 564
                }
              ],
              "start": 549,
              "end": 565
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
                      "start": 569,
                      "end": 570
                    },
                    "typeArguments": null,
                    "start": 569,
                    "end": 570
                  },
                  "start": 567,
                  "end": 570
                },
                "start": 566,
                "end": 570
              },
              {
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 575,
                      "end": 576
                    },
                    "typeArguments": null,
                    "start": 575,
                    "end": 576
                  },
                  "start": 573,
                  "end": 576
                },
                "start": 572,
                "end": 576
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 596
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
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 597,
                          "end": 598
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 607,
                            "end": 608
                          },
                          "typeArguments": null,
                          "start": 607,
                          "end": 608
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 597,
                        "end": 608
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 610,
                          "end": 611
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 620,
                            "end": 621
                          },
                          "typeArguments": null,
                          "start": 620,
                          "end": 621
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 610,
                        "end": 621
                      }
                    ],
                    "start": 596,
                    "end": 622
                  },
                  "params": [],
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
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 639,
                              "end": 640
                            },
                            "init": {
                              "type": "FunctionExpression",
                              "id": null,
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
                                      "name": "X",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 653,
                                      "end": 654
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 663,
                                        "end": 664
                                      },
                                      "typeArguments": null,
                                      "start": 663,
                                      "end": 664
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 653,
                                    "end": 664
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 666,
                                      "end": 667
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 676,
                                        "end": 677
                                      },
                                      "typeArguments": null,
                                      "start": 676,
                                      "end": 677
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 666,
                                    "end": 677
                                  }
                                ],
                                "start": 652,
                                "end": 678
                              },
                              "params": [
                                {
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
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 682,
                                        "end": 683
                                      },
                                      "typeArguments": null,
                                      "start": 682,
                                      "end": 683
                                    },
                                    "start": 680,
                                    "end": 683
                                  },
                                  "start": 679,
                                  "end": 683
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 688,
                                        "end": 689
                                      },
                                      "typeArguments": null,
                                      "start": 688,
                                      "end": 689
                                    },
                                    "start": 686,
                                    "end": 689
                                  },
                                  "start": 685,
                                  "end": 689
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
                                    "start": 692,
                                    "end": 693
                                  },
                                  "typeArguments": null,
                                  "start": 692,
                                  "end": 693
                                },
                                "start": 690,
                                "end": 693
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 708,
                                        "end": 709
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 712,
                                        "end": 713
                                      },
                                      "start": 708,
                                      "end": 713
                                    },
                                    "directive": null,
                                    "start": 708,
                                    "end": 714
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 734,
                                      "end": 735
                                    },
                                    "start": 727,
                                    "end": 736
                                  }
                                ],
                                "start": 694,
                                "end": 746
                              },
                              "expression": false,
                              "start": 643,
                              "end": 746
                            },
                            "definite": false,
                            "start": 639,
                            "end": 746
                          }
                        ],
                        "declare": false,
                        "start": 635,
                        "end": 746
                      }
                    ],
                    "start": 625,
                    "end": 752
                  },
                  "expression": false,
                  "start": 584,
                  "end": 752
                }
              ],
              "start": 578,
              "end": 754
            },
            "expression": false,
            "start": 540,
            "end": 754
          },
          "definite": false,
          "start": 536,
          "end": 754
        }
      ],
      "declare": false,
      "start": 532,
      "end": 754
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 760,
            "end": 762
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 775,
                    "end": 776
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 785,
                      "end": 786
                    },
                    "typeArguments": null,
                    "start": 785,
                    "end": 786
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 775,
                  "end": 786
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 788,
                    "end": 789
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 788,
                  "end": 789
                }
              ],
              "start": 774,
              "end": 790
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
                      "start": 794,
                      "end": 795
                    },
                    "typeArguments": null,
                    "start": 794,
                    "end": 795
                  },
                  "start": 792,
                  "end": 795
                },
                "start": 791,
                "end": 795
              },
              {
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 800,
                      "end": 801
                    },
                    "typeArguments": null,
                    "start": 800,
                    "end": 801
                  },
                  "start": 798,
                  "end": 801
                },
                "start": 797,
                "end": 801
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 818,
                    "end": 821
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
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 822,
                          "end": 823
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 832,
                            "end": 833
                          },
                          "typeArguments": null,
                          "start": 832,
                          "end": 833
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 822,
                        "end": 833
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 835,
                          "end": 836
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 845,
                            "end": 846
                          },
                          "typeArguments": null,
                          "start": 845,
                          "end": 846
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 835,
                        "end": 846
                      }
                    ],
                    "start": 821,
                    "end": 847
                  },
                  "params": [],
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
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 864,
                              "end": 865
                            },
                            "init": {
                              "type": "FunctionExpression",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "baz",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 877,
                                "end": 880
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
                                      "name": "X",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 881,
                                      "end": 882
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 891,
                                        "end": 892
                                      },
                                      "typeArguments": null,
                                      "start": 891,
                                      "end": 892
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 881,
                                    "end": 892
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 894,
                                      "end": 895
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 904,
                                        "end": 905
                                      },
                                      "typeArguments": null,
                                      "start": 904,
                                      "end": 905
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 894,
                                    "end": 905
                                  }
                                ],
                                "start": 880,
                                "end": 906
                              },
                              "params": [
                                {
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
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 910,
                                        "end": 911
                                      },
                                      "typeArguments": null,
                                      "start": 910,
                                      "end": 911
                                    },
                                    "start": 908,
                                    "end": 911
                                  },
                                  "start": 907,
                                  "end": 911
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 916,
                                        "end": 917
                                      },
                                      "typeArguments": null,
                                      "start": 916,
                                      "end": 917
                                    },
                                    "start": 914,
                                    "end": 917
                                  },
                                  "start": 913,
                                  "end": 917
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
                                    "start": 920,
                                    "end": 921
                                  },
                                  "typeArguments": null,
                                  "start": 920,
                                  "end": 921
                                },
                                "start": 918,
                                "end": 921
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 936,
                                        "end": 937
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 940,
                                        "end": 941
                                      },
                                      "start": 936,
                                      "end": 941
                                    },
                                    "directive": null,
                                    "start": 936,
                                    "end": 942
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 962,
                                      "end": 963
                                    },
                                    "start": 955,
                                    "end": 964
                                  }
                                ],
                                "start": 922,
                                "end": 974
                              },
                              "expression": false,
                              "start": 868,
                              "end": 974
                            },
                            "definite": false,
                            "start": 864,
                            "end": 974
                          }
                        ],
                        "declare": false,
                        "start": 860,
                        "end": 974
                      }
                    ],
                    "start": 850,
                    "end": 980
                  },
                  "expression": false,
                  "start": 809,
                  "end": 980
                }
              ],
              "start": 803,
              "end": 982
            },
            "expression": false,
            "start": 765,
            "end": 982
          },
          "definite": false,
          "start": 760,
          "end": 982
        }
      ],
      "declare": false,
      "start": 756,
      "end": 982
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 990
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
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
                    "start": 994,
                    "end": 995
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 994,
                  "end": 995
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 997,
                    "end": 998
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1007,
                      "end": 1008
                    },
                    "typeArguments": null,
                    "start": 1007,
                    "end": 1008
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 997,
                  "end": 1008
                }
              ],
              "start": 993,
              "end": 1009
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
                      "start": 1013,
                      "end": 1014
                    },
                    "typeArguments": null,
                    "start": 1013,
                    "end": 1014
                  },
                  "start": 1011,
                  "end": 1014
                },
                "start": 1010,
                "end": 1014
              },
              {
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1019,
                      "end": 1020
                    },
                    "typeArguments": null,
                    "start": 1019,
                    "end": 1020
                  },
                  "start": 1017,
                  "end": 1020
                },
                "start": 1016,
                "end": 1020
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1043
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
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1044,
                          "end": 1045
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1054,
                            "end": 1055
                          },
                          "typeArguments": null,
                          "start": 1054,
                          "end": 1055
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1044,
                        "end": 1055
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1057,
                          "end": 1058
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1067,
                            "end": 1068
                          },
                          "typeArguments": null,
                          "start": 1067,
                          "end": 1068
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1057,
                        "end": 1068
                      }
                    ],
                    "start": 1043,
                    "end": 1069
                  },
                  "params": [],
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
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1086,
                              "end": 1087
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1091,
                                      "end": 1092
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1101,
                                        "end": 1102
                                      },
                                      "typeArguments": null,
                                      "start": 1101,
                                      "end": 1102
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1091,
                                    "end": 1102
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1104,
                                      "end": 1105
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1114,
                                        "end": 1115
                                      },
                                      "typeArguments": null,
                                      "start": 1114,
                                      "end": 1115
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1104,
                                    "end": 1115
                                  }
                                ],
                                "start": 1090,
                                "end": 1116
                              },
                              "params": [
                                {
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
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1120,
                                        "end": 1121
                                      },
                                      "typeArguments": null,
                                      "start": 1120,
                                      "end": 1121
                                    },
                                    "start": 1118,
                                    "end": 1121
                                  },
                                  "start": 1117,
                                  "end": 1121
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1126,
                                        "end": 1127
                                      },
                                      "typeArguments": null,
                                      "start": 1126,
                                      "end": 1127
                                    },
                                    "start": 1124,
                                    "end": 1127
                                  },
                                  "start": 1123,
                                  "end": 1127
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
                                    "start": 1130,
                                    "end": 1131
                                  },
                                  "typeArguments": null,
                                  "start": 1130,
                                  "end": 1131
                                },
                                "start": 1128,
                                "end": 1131
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1149,
                                        "end": 1150
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1153,
                                        "end": 1154
                                      },
                                      "start": 1149,
                                      "end": 1154
                                    },
                                    "directive": null,
                                    "start": 1149,
                                    "end": 1155
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1175,
                                      "end": 1176
                                    },
                                    "start": 1168,
                                    "end": 1177
                                  }
                                ],
                                "start": 1135,
                                "end": 1187
                              },
                              "id": null,
                              "generator": false,
                              "start": 1090,
                              "end": 1187
                            },
                            "definite": false,
                            "start": 1086,
                            "end": 1187
                          }
                        ],
                        "declare": false,
                        "start": 1082,
                        "end": 1187
                      }
                    ],
                    "start": 1072,
                    "end": 1193
                  },
                  "expression": false,
                  "start": 1031,
                  "end": 1193
                }
              ],
              "start": 1025,
              "end": 1195
            },
            "id": null,
            "generator": false,
            "start": 993,
            "end": 1195
          },
          "definite": false,
          "start": 988,
          "end": 1195
        }
      ],
      "declare": false,
      "start": 984,
      "end": 1195
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1203
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 1207,
                    "end": 1208
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1217,
                      "end": 1218
                    },
                    "typeArguments": null,
                    "start": 1217,
                    "end": 1218
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1207,
                  "end": 1218
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1221
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1220,
                  "end": 1221
                }
              ],
              "start": 1206,
              "end": 1222
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
                      "start": 1226,
                      "end": 1227
                    },
                    "typeArguments": null,
                    "start": 1226,
                    "end": 1227
                  },
                  "start": 1224,
                  "end": 1227
                },
                "start": 1223,
                "end": 1227
              },
              {
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1232,
                      "end": 1233
                    },
                    "typeArguments": null,
                    "start": 1232,
                    "end": 1233
                  },
                  "start": 1230,
                  "end": 1233
                },
                "start": 1229,
                "end": 1233
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1256
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
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1257,
                          "end": 1258
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1267,
                            "end": 1268
                          },
                          "typeArguments": null,
                          "start": 1267,
                          "end": 1268
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1257,
                        "end": 1268
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1270,
                          "end": 1271
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1280,
                            "end": 1281
                          },
                          "typeArguments": null,
                          "start": 1280,
                          "end": 1281
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1270,
                        "end": 1281
                      }
                    ],
                    "start": 1256,
                    "end": 1282
                  },
                  "params": [],
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
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1299,
                              "end": 1300
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1304,
                                      "end": 1305
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1314,
                                        "end": 1315
                                      },
                                      "typeArguments": null,
                                      "start": 1314,
                                      "end": 1315
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1304,
                                    "end": 1315
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "name": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1317,
                                      "end": 1318
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1327,
                                        "end": 1328
                                      },
                                      "typeArguments": null,
                                      "start": 1327,
                                      "end": 1328
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1317,
                                    "end": 1328
                                  }
                                ],
                                "start": 1303,
                                "end": 1329
                              },
                              "params": [
                                {
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
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1333,
                                        "end": 1334
                                      },
                                      "typeArguments": null,
                                      "start": 1333,
                                      "end": 1334
                                    },
                                    "start": 1331,
                                    "end": 1334
                                  },
                                  "start": 1330,
                                  "end": 1334
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1339,
                                        "end": 1340
                                      },
                                      "typeArguments": null,
                                      "start": 1339,
                                      "end": 1340
                                    },
                                    "start": 1337,
                                    "end": 1340
                                  },
                                  "start": 1336,
                                  "end": 1340
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
                                    "start": 1343,
                                    "end": 1344
                                  },
                                  "typeArguments": null,
                                  "start": 1343,
                                  "end": 1344
                                },
                                "start": 1341,
                                "end": 1344
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1362,
                                        "end": 1363
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1366,
                                        "end": 1367
                                      },
                                      "start": 1362,
                                      "end": 1367
                                    },
                                    "directive": null,
                                    "start": 1362,
                                    "end": 1368
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1388,
                                      "end": 1389
                                    },
                                    "start": 1381,
                                    "end": 1390
                                  }
                                ],
                                "start": 1348,
                                "end": 1400
                              },
                              "id": null,
                              "generator": false,
                              "start": 1303,
                              "end": 1400
                            },
                            "definite": false,
                            "start": 1299,
                            "end": 1400
                          }
                        ],
                        "declare": false,
                        "start": 1295,
                        "end": 1400
                      }
                    ],
                    "start": 1285,
                    "end": 1406
                  },
                  "expression": false,
                  "start": 1244,
                  "end": 1406
                }
              ],
              "start": 1238,
              "end": 1408
            },
            "id": null,
            "generator": false,
            "start": 1206,
            "end": 1408
          },
          "definite": false,
          "start": 1201,
          "end": 1408
        }
      ],
      "declare": false,
      "start": 1197,
      "end": 1408
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 103,
  "end": 1408
}
```
