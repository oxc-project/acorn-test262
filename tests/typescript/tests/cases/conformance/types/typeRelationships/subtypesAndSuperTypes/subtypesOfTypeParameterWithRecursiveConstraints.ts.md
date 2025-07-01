__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 91
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
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 91,
        "end": 94
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 100
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
                  "start": 102,
                  "end": 103
                },
                "typeArguments": null,
                "start": 102,
                "end": 103
              },
              "start": 100,
              "end": 103
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
            "start": 97,
            "end": 104
          }
        ],
        "start": 95,
        "end": 106
      },
      "abstract": false,
      "declare": false,
      "start": 82,
      "end": 106
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 117
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
              "start": 118,
              "end": 119
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 131
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
                      "start": 132,
                      "end": 133
                    },
                    "typeArguments": null,
                    "start": 132,
                    "end": 133
                  }
                ],
                "start": 131,
                "end": 134
              },
              "start": 128,
              "end": 134
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 118,
            "end": 134
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 137
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
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
                      "start": 150,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 150,
                    "end": 151
                  }
                ],
                "start": 149,
                "end": 152
              },
              "start": 146,
              "end": 152
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 136,
            "end": 152
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 167
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 169
                    },
                    "typeArguments": null,
                    "start": 168,
                    "end": 169
                  }
                ],
                "start": 167,
                "end": 170
              },
              "start": 164,
              "end": 170
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 170
          }
        ],
        "start": 117,
        "end": 171
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
                "start": 175,
                "end": 176
              },
              "typeArguments": null,
              "start": 175,
              "end": 176
            },
            "start": 173,
            "end": 176
          },
          "start": 172,
          "end": 176
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
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
                "start": 181,
                "end": 182
              },
              "typeArguments": null,
              "start": 181,
              "end": 182
            },
            "start": 179,
            "end": 182
          },
          "start": 178,
          "end": 182
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 212
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 215,
                    "end": 219
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 223
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 227
                  },
                  "start": 215,
                  "end": 227
                },
                "definite": false,
                "start": 210,
                "end": 227
              }
            ],
            "declare": false,
            "start": 206,
            "end": 228
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 239
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 242,
                    "end": 246
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 249,
                    "end": 250
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "start": 242,
                  "end": 254
                },
                "definite": false,
                "start": 237,
                "end": 254
              }
            ],
            "declare": false,
            "start": 233,
            "end": 255
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 277
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 280,
                    "end": 284
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 288
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "start": 280,
                  "end": 292
                },
                "definite": false,
                "start": 275,
                "end": 292
              }
            ],
            "declare": false,
            "start": 271,
            "end": 293
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 304
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 307,
                    "end": 311
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 319
                  },
                  "start": 307,
                  "end": 319
                },
                "definite": false,
                "start": 302,
                "end": 319
              }
            ],
            "declare": false,
            "start": 298,
            "end": 320
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 342
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 345,
                    "end": 349
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 352,
                    "end": 353
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 357
                  },
                  "start": 345,
                  "end": 357
                },
                "definite": false,
                "start": 340,
                "end": 357
              }
            ],
            "declare": false,
            "start": 336,
            "end": 358
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 369
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 372,
                    "end": 376
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 380
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 384
                  },
                  "start": 372,
                  "end": 384
                },
                "definite": false,
                "start": 367,
                "end": 384
              }
            ],
            "declare": false,
            "start": 363,
            "end": 385
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 407
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 410,
                    "end": 414
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 428
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
                            "start": 429,
                            "end": 430
                          },
                          "typeArguments": null,
                          "start": 429,
                          "end": 430
                        }
                      ],
                      "start": 428,
                      "end": 431
                    },
                    "arguments": [],
                    "start": 421,
                    "end": 433
                  },
                  "start": 410,
                  "end": 433
                },
                "definite": false,
                "start": 405,
                "end": 433
              }
            ],
            "declare": false,
            "start": 401,
            "end": 434
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 445
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 448,
                    "end": 452
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 459,
                      "end": 462
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
                            "start": 463,
                            "end": 464
                          },
                          "typeArguments": null,
                          "start": 463,
                          "end": 464
                        }
                      ],
                      "start": 462,
                      "end": 465
                    },
                    "arguments": [],
                    "start": 455,
                    "end": 467
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 471
                  },
                  "start": 448,
                  "end": 471
                },
                "definite": false,
                "start": 443,
                "end": 471
              }
            ],
            "declare": false,
            "start": 439,
            "end": 472
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 494
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 497,
                    "end": 501
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 505
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 512,
                      "end": 515
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
                            "start": 516,
                            "end": 517
                          },
                          "typeArguments": null,
                          "start": 516,
                          "end": 517
                        }
                      ],
                      "start": 515,
                      "end": 518
                    },
                    "arguments": [],
                    "start": 508,
                    "end": 520
                  },
                  "start": 497,
                  "end": 520
                },
                "definite": false,
                "start": 492,
                "end": 520
              }
            ],
            "declare": false,
            "start": 488,
            "end": 521
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 532
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 535,
                    "end": 539
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 546,
                      "end": 549
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
                            "start": 550,
                            "end": 551
                          },
                          "typeArguments": null,
                          "start": 550,
                          "end": 551
                        }
                      ],
                      "start": 549,
                      "end": 552
                    },
                    "arguments": [],
                    "start": 542,
                    "end": 554
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 557,
                    "end": 558
                  },
                  "start": 535,
                  "end": 558
                },
                "definite": false,
                "start": 530,
                "end": 558
              }
            ],
            "declare": false,
            "start": 526,
            "end": 559
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 581
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 584,
                    "end": 588
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 592
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 599,
                      "end": 602
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
                            "start": 603,
                            "end": 604
                          },
                          "typeArguments": null,
                          "start": 603,
                          "end": 604
                        }
                      ],
                      "start": 602,
                      "end": 605
                    },
                    "arguments": [],
                    "start": 595,
                    "end": 607
                  },
                  "start": 584,
                  "end": 607
                },
                "definite": false,
                "start": 579,
                "end": 607
              }
            ],
            "declare": false,
            "start": 575,
            "end": 608
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 619
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 622,
                    "end": 626
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 636
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
                            "start": 637,
                            "end": 638
                          },
                          "typeArguments": null,
                          "start": 637,
                          "end": 638
                        }
                      ],
                      "start": 636,
                      "end": 639
                    },
                    "arguments": [],
                    "start": 629,
                    "end": 641
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 645
                  },
                  "start": 622,
                  "end": 645
                },
                "definite": false,
                "start": 617,
                "end": 645
              }
            ],
            "declare": false,
            "start": 613,
            "end": 646
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 669
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 672,
                    "end": 676
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 679,
                    "end": 680
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 687,
                      "end": 690
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
                            "start": 691,
                            "end": 692
                          },
                          "typeArguments": null,
                          "start": 691,
                          "end": 692
                        }
                      ],
                      "start": 690,
                      "end": 693
                    },
                    "arguments": [],
                    "start": 683,
                    "end": 695
                  },
                  "start": 672,
                  "end": 695
                },
                "definite": false,
                "start": 667,
                "end": 695
              }
            ],
            "declare": false,
            "start": 663,
            "end": 696
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 707
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 710,
                    "end": 714
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 724
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
                            "start": 725,
                            "end": 726
                          },
                          "typeArguments": null,
                          "start": 725,
                          "end": 726
                        }
                      ],
                      "start": 724,
                      "end": 727
                    },
                    "arguments": [],
                    "start": 717,
                    "end": 729
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 732,
                    "end": 733
                  },
                  "start": 710,
                  "end": 733
                },
                "definite": false,
                "start": 705,
                "end": 733
              }
            ],
            "declare": false,
            "start": 701,
            "end": 734
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 756
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 759,
                    "end": 763
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 766,
                    "end": 767
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 774,
                      "end": 777
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
                            "start": 778,
                            "end": 779
                          },
                          "typeArguments": null,
                          "start": 778,
                          "end": 779
                        }
                      ],
                      "start": 777,
                      "end": 780
                    },
                    "arguments": [],
                    "start": 770,
                    "end": 782
                  },
                  "start": 759,
                  "end": 782
                },
                "definite": false,
                "start": 754,
                "end": 782
              }
            ],
            "declare": false,
            "start": 750,
            "end": 783
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 792,
                  "end": 794
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 797,
                    "end": 801
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 808,
                      "end": 811
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
                            "start": 812,
                            "end": 813
                          },
                          "typeArguments": null,
                          "start": 812,
                          "end": 813
                        }
                      ],
                      "start": 811,
                      "end": 814
                    },
                    "arguments": [],
                    "start": 804,
                    "end": 816
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 820
                  },
                  "start": 797,
                  "end": 820
                },
                "definite": false,
                "start": 792,
                "end": 820
              }
            ],
            "declare": false,
            "start": 788,
            "end": 821
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 843
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 846,
                    "end": 850
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 853,
                    "end": 854
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 861,
                      "end": 864
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
                            "start": 865,
                            "end": 866
                          },
                          "typeArguments": null,
                          "start": 865,
                          "end": 866
                        }
                      ],
                      "start": 864,
                      "end": 867
                    },
                    "arguments": [],
                    "start": 857,
                    "end": 869
                  },
                  "start": 846,
                  "end": 869
                },
                "definite": false,
                "start": 841,
                "end": 869
              }
            ],
            "declare": false,
            "start": 837,
            "end": 870
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 881
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 884,
                    "end": 888
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 895,
                      "end": 898
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
                            "start": 899,
                            "end": 900
                          },
                          "typeArguments": null,
                          "start": 899,
                          "end": 900
                        }
                      ],
                      "start": 898,
                      "end": 901
                    },
                    "arguments": [],
                    "start": 891,
                    "end": 903
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 907
                  },
                  "start": 884,
                  "end": 907
                },
                "definite": false,
                "start": 879,
                "end": 907
              }
            ],
            "declare": false,
            "start": 875,
            "end": 908
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
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 932
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 935,
                    "end": 939
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 942,
                    "end": 943
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 950,
                      "end": 953
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 954,
                            "end": 955
                          },
                          "typeArguments": null,
                          "start": 954,
                          "end": 955
                        }
                      ],
                      "start": 953,
                      "end": 956
                    },
                    "arguments": [],
                    "start": 946,
                    "end": 958
                  },
                  "start": 935,
                  "end": 958
                },
                "definite": false,
                "start": 929,
                "end": 958
              }
            ],
            "declare": false,
            "start": 925,
            "end": 959
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
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 971
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 974,
                    "end": 978
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 985,
                      "end": 988
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 989,
                            "end": 990
                          },
                          "typeArguments": null,
                          "start": 989,
                          "end": 990
                        }
                      ],
                      "start": 988,
                      "end": 991
                    },
                    "arguments": [],
                    "start": 981,
                    "end": 993
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 996,
                    "end": 997
                  },
                  "start": 974,
                  "end": 997
                },
                "definite": false,
                "start": 968,
                "end": 997
              }
            ],
            "declare": false,
            "start": 964,
            "end": 998
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
                  "name": "r11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1018,
                  "end": 1021
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1024,
                    "end": 1028
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1031,
                    "end": 1032
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1039,
                      "end": 1042
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1043,
                            "end": 1044
                          },
                          "typeArguments": null,
                          "start": 1043,
                          "end": 1044
                        }
                      ],
                      "start": 1042,
                      "end": 1045
                    },
                    "arguments": [],
                    "start": 1035,
                    "end": 1047
                  },
                  "start": 1024,
                  "end": 1047
                },
                "definite": false,
                "start": 1018,
                "end": 1047
              }
            ],
            "declare": false,
            "start": 1014,
            "end": 1048
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
                  "name": "r11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1057,
                  "end": 1060
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1063,
                    "end": 1067
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1074,
                      "end": 1077
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1078,
                            "end": 1079
                          },
                          "typeArguments": null,
                          "start": 1078,
                          "end": 1079
                        }
                      ],
                      "start": 1077,
                      "end": 1080
                    },
                    "arguments": [],
                    "start": 1070,
                    "end": 1082
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1085,
                    "end": 1086
                  },
                  "start": 1063,
                  "end": 1086
                },
                "definite": false,
                "start": 1057,
                "end": 1086
              }
            ],
            "declare": false,
            "start": 1053,
            "end": 1087
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
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1107,
                  "end": 1110
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1113,
                    "end": 1117
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1120,
                    "end": 1121
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1128,
                      "end": 1131
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1132,
                            "end": 1133
                          },
                          "typeArguments": null,
                          "start": 1132,
                          "end": 1133
                        }
                      ],
                      "start": 1131,
                      "end": 1134
                    },
                    "arguments": [],
                    "start": 1124,
                    "end": 1136
                  },
                  "start": 1113,
                  "end": 1136
                },
                "definite": false,
                "start": 1107,
                "end": 1136
              }
            ],
            "declare": false,
            "start": 1103,
            "end": 1137
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
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1149
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1152,
                    "end": 1156
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1163,
                      "end": 1166
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1167,
                            "end": 1168
                          },
                          "typeArguments": null,
                          "start": 1167,
                          "end": 1168
                        }
                      ],
                      "start": 1166,
                      "end": 1169
                    },
                    "arguments": [],
                    "start": 1159,
                    "end": 1171
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1174,
                    "end": 1175
                  },
                  "start": 1152,
                  "end": 1175
                },
                "definite": false,
                "start": 1146,
                "end": 1175
              }
            ],
            "declare": false,
            "start": 1142,
            "end": 1176
          }
        ],
        "start": 190,
        "end": 1178
      },
      "expression": false,
      "start": 107,
      "end": 1178
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1187,
        "end": 1189
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1202,
              "end": 1206
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
                    "start": 1207,
                    "end": 1208
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1207,
                  "end": 1208
                }
              ],
              "start": 1206,
              "end": 1209
            },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1220,
                    "end": 1223
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
                        "start": 1225,
                        "end": 1226
                      },
                      "typeArguments": null,
                      "start": 1225,
                      "end": 1226
                    },
                    "start": 1223,
                    "end": 1226
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
                  "start": 1220,
                  "end": 1227
                }
              ],
              "start": 1210,
              "end": 1233
            },
            "abstract": false,
            "declare": false,
            "start": 1196,
            "end": 1233
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1245,
              "end": 1247
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
                    "start": 1248,
                    "end": 1249
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1258,
                      "end": 1261
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
                            "start": 1262,
                            "end": 1263
                          },
                          "typeArguments": null,
                          "start": 1262,
                          "end": 1263
                        }
                      ],
                      "start": 1261,
                      "end": 1264
                    },
                    "start": 1258,
                    "end": 1264
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1248,
                  "end": 1264
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1266,
                    "end": 1267
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1276,
                      "end": 1279
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
                            "start": 1280,
                            "end": 1281
                          },
                          "typeArguments": null,
                          "start": 1280,
                          "end": 1281
                        }
                      ],
                      "start": 1279,
                      "end": 1282
                    },
                    "start": 1276,
                    "end": 1282
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1266,
                  "end": 1282
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1284,
                    "end": 1285
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1294,
                      "end": 1297
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1298,
                            "end": 1299
                          },
                          "typeArguments": null,
                          "start": 1298,
                          "end": 1299
                        }
                      ],
                      "start": 1297,
                      "end": 1300
                    },
                    "start": 1294,
                    "end": 1300
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1284,
                  "end": 1300
                }
              ],
              "start": 1247,
              "end": 1301
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1310,
              "end": 1314
            },
            "superTypeArguments": {
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
                    "start": 1315,
                    "end": 1316
                  },
                  "typeArguments": null,
                  "start": 1315,
                  "end": 1316
                }
              ],
              "start": 1314,
              "end": 1317
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 1332,
                          "end": 1338
                        },
                        "start": 1330,
                        "end": 1338
                      },
                      "start": 1329,
                      "end": 1338
                    }
                  ],
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
                        "start": 1341,
                        "end": 1342
                      },
                      "typeArguments": null,
                      "start": 1341,
                      "end": 1342
                    },
                    "start": 1339,
                    "end": 1342
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1328,
                  "end": 1343
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1352,
                    "end": 1355
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
                        "start": 1357,
                        "end": 1358
                      },
                      "typeArguments": null,
                      "start": 1357,
                      "end": 1358
                    },
                    "start": 1355,
                    "end": 1358
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
                  "start": 1352,
                  "end": 1358
                }
              ],
              "start": 1318,
              "end": 1364
            },
            "abstract": false,
            "declare": false,
            "start": 1239,
            "end": 1364
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
              "start": 1376,
              "end": 1378
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
                    "start": 1379,
                    "end": 1380
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1389,
                      "end": 1392
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
                            "start": 1393,
                            "end": 1394
                          },
                          "typeArguments": null,
                          "start": 1393,
                          "end": 1394
                        }
                      ],
                      "start": 1392,
                      "end": 1395
                    },
                    "start": 1389,
                    "end": 1395
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1379,
                  "end": 1395
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1397,
                    "end": 1398
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1407,
                      "end": 1410
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
                            "start": 1411,
                            "end": 1412
                          },
                          "typeArguments": null,
                          "start": 1411,
                          "end": 1412
                        }
                      ],
                      "start": 1410,
                      "end": 1413
                    },
                    "start": 1407,
                    "end": 1413
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1397,
                  "end": 1413
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1415,
                    "end": 1416
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1425,
                      "end": 1428
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1429,
                            "end": 1430
                          },
                          "typeArguments": null,
                          "start": 1429,
                          "end": 1430
                        }
                      ],
                      "start": 1428,
                      "end": 1431
                    },
                    "start": 1425,
                    "end": 1431
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1415,
                  "end": 1431
                }
              ],
              "start": 1378,
              "end": 1432
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1445
            },
            "superTypeArguments": {
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
                    "start": 1446,
                    "end": 1447
                  },
                  "typeArguments": null,
                  "start": 1446,
                  "end": 1447
                }
              ],
              "start": 1445,
              "end": 1448
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 1463,
                          "end": 1469
                        },
                        "start": 1461,
                        "end": 1469
                      },
                      "start": 1460,
                      "end": 1469
                    }
                  ],
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
                        "start": 1472,
                        "end": 1473
                      },
                      "typeArguments": null,
                      "start": 1472,
                      "end": 1473
                    },
                    "start": 1470,
                    "end": 1473
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1459,
                  "end": 1474
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1483,
                    "end": 1486
                  },
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
                        "start": 1488,
                        "end": 1489
                      },
                      "typeArguments": null,
                      "start": 1488,
                      "end": 1489
                    },
                    "start": 1486,
                    "end": 1489
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
                  "start": 1483,
                  "end": 1489
                }
              ],
              "start": 1449,
              "end": 1495
            },
            "abstract": false,
            "declare": false,
            "start": 1370,
            "end": 1495
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1507,
              "end": 1509
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
                    "start": 1510,
                    "end": 1511
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1520,
                      "end": 1523
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
                            "start": 1524,
                            "end": 1525
                          },
                          "typeArguments": null,
                          "start": 1524,
                          "end": 1525
                        }
                      ],
                      "start": 1523,
                      "end": 1526
                    },
                    "start": 1520,
                    "end": 1526
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1510,
                  "end": 1526
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1528,
                    "end": 1529
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1538,
                      "end": 1541
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
                            "start": 1542,
                            "end": 1543
                          },
                          "typeArguments": null,
                          "start": 1542,
                          "end": 1543
                        }
                      ],
                      "start": 1541,
                      "end": 1544
                    },
                    "start": 1538,
                    "end": 1544
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1528,
                  "end": 1544
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1546,
                    "end": 1547
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1556,
                      "end": 1559
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1560,
                            "end": 1561
                          },
                          "typeArguments": null,
                          "start": 1560,
                          "end": 1561
                        }
                      ],
                      "start": 1559,
                      "end": 1562
                    },
                    "start": 1556,
                    "end": 1562
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1546,
                  "end": 1562
                }
              ],
              "start": 1509,
              "end": 1563
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1572,
              "end": 1576
            },
            "superTypeArguments": {
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
                    "start": 1577,
                    "end": 1578
                  },
                  "typeArguments": null,
                  "start": 1577,
                  "end": 1578
                }
              ],
              "start": 1576,
              "end": 1579
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 1594,
                          "end": 1600
                        },
                        "start": 1592,
                        "end": 1600
                      },
                      "start": 1591,
                      "end": 1600
                    }
                  ],
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
                        "start": 1603,
                        "end": 1604
                      },
                      "typeArguments": null,
                      "start": 1603,
                      "end": 1604
                    },
                    "start": 1601,
                    "end": 1604
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1590,
                  "end": 1605
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1614,
                    "end": 1617
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1619,
                        "end": 1620
                      },
                      "typeArguments": null,
                      "start": 1619,
                      "end": 1620
                    },
                    "start": 1617,
                    "end": 1620
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
                  "start": 1614,
                  "end": 1620
                }
              ],
              "start": 1580,
              "end": 1626
            },
            "abstract": false,
            "declare": false,
            "start": 1501,
            "end": 1626
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1638,
              "end": 1640
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
                    "start": 1641,
                    "end": 1642
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1651,
                      "end": 1654
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
                            "start": 1655,
                            "end": 1656
                          },
                          "typeArguments": null,
                          "start": 1655,
                          "end": 1656
                        }
                      ],
                      "start": 1654,
                      "end": 1657
                    },
                    "start": 1651,
                    "end": 1657
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1641,
                  "end": 1657
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1659,
                    "end": 1660
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1669,
                      "end": 1672
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
                            "start": 1673,
                            "end": 1674
                          },
                          "typeArguments": null,
                          "start": 1673,
                          "end": 1674
                        }
                      ],
                      "start": 1672,
                      "end": 1675
                    },
                    "start": 1669,
                    "end": 1675
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1659,
                  "end": 1675
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1677,
                    "end": 1678
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1687,
                      "end": 1690
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1691,
                            "end": 1692
                          },
                          "typeArguments": null,
                          "start": 1691,
                          "end": 1692
                        }
                      ],
                      "start": 1690,
                      "end": 1693
                    },
                    "start": 1687,
                    "end": 1693
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1677,
                  "end": 1693
                }
              ],
              "start": 1640,
              "end": 1694
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1703,
              "end": 1707
            },
            "superTypeArguments": {
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
                    "start": 1708,
                    "end": 1709
                  },
                  "typeArguments": null,
                  "start": 1708,
                  "end": 1709
                }
              ],
              "start": 1707,
              "end": 1710
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 1725,
                          "end": 1731
                        },
                        "start": 1723,
                        "end": 1731
                      },
                      "start": 1722,
                      "end": 1731
                    }
                  ],
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
                        "start": 1734,
                        "end": 1735
                      },
                      "typeArguments": null,
                      "start": 1734,
                      "end": 1735
                    },
                    "start": 1732,
                    "end": 1735
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1721,
                  "end": 1736
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1745,
                    "end": 1748
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
                        "start": 1750,
                        "end": 1751
                      },
                      "typeArguments": null,
                      "start": 1750,
                      "end": 1751
                    },
                    "start": 1748,
                    "end": 1751
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
                  "start": 1745,
                  "end": 1751
                }
              ],
              "start": 1711,
              "end": 1757
            },
            "abstract": false,
            "declare": false,
            "start": 1632,
            "end": 1757
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1769,
              "end": 1771
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
                    "start": 1772,
                    "end": 1773
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1782,
                      "end": 1785
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
                            "start": 1786,
                            "end": 1787
                          },
                          "typeArguments": null,
                          "start": 1786,
                          "end": 1787
                        }
                      ],
                      "start": 1785,
                      "end": 1788
                    },
                    "start": 1782,
                    "end": 1788
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1772,
                  "end": 1788
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1790,
                    "end": 1791
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1803
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
                            "start": 1804,
                            "end": 1805
                          },
                          "typeArguments": null,
                          "start": 1804,
                          "end": 1805
                        }
                      ],
                      "start": 1803,
                      "end": 1806
                    },
                    "start": 1800,
                    "end": 1806
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1790,
                  "end": 1806
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1808,
                    "end": 1809
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1821
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1822,
                            "end": 1823
                          },
                          "typeArguments": null,
                          "start": 1822,
                          "end": 1823
                        }
                      ],
                      "start": 1821,
                      "end": 1824
                    },
                    "start": 1818,
                    "end": 1824
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1808,
                  "end": 1824
                }
              ],
              "start": 1771,
              "end": 1825
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1834,
              "end": 1838
            },
            "superTypeArguments": {
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
                    "start": 1839,
                    "end": 1840
                  },
                  "typeArguments": null,
                  "start": 1839,
                  "end": 1840
                }
              ],
              "start": 1838,
              "end": 1841
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 1856,
                          "end": 1862
                        },
                        "start": 1854,
                        "end": 1862
                      },
                      "start": 1853,
                      "end": 1862
                    }
                  ],
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
                        "start": 1865,
                        "end": 1866
                      },
                      "typeArguments": null,
                      "start": 1865,
                      "end": 1866
                    },
                    "start": 1863,
                    "end": 1866
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1852,
                  "end": 1867
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1876,
                    "end": 1879
                  },
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
                        "start": 1881,
                        "end": 1882
                      },
                      "typeArguments": null,
                      "start": 1881,
                      "end": 1882
                    },
                    "start": 1879,
                    "end": 1882
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
                  "start": 1876,
                  "end": 1882
                }
              ],
              "start": 1842,
              "end": 1888
            },
            "abstract": false,
            "declare": false,
            "start": 1763,
            "end": 1888
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1900,
              "end": 1902
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
                    "start": 1903,
                    "end": 1904
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1913,
                      "end": 1916
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
                            "start": 1917,
                            "end": 1918
                          },
                          "typeArguments": null,
                          "start": 1917,
                          "end": 1918
                        }
                      ],
                      "start": 1916,
                      "end": 1919
                    },
                    "start": 1913,
                    "end": 1919
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1903,
                  "end": 1919
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1921,
                    "end": 1922
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1931,
                      "end": 1934
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
                            "start": 1935,
                            "end": 1936
                          },
                          "typeArguments": null,
                          "start": 1935,
                          "end": 1936
                        }
                      ],
                      "start": 1934,
                      "end": 1937
                    },
                    "start": 1931,
                    "end": 1937
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1921,
                  "end": 1937
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1939,
                    "end": 1940
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1949,
                      "end": 1952
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1953,
                            "end": 1954
                          },
                          "typeArguments": null,
                          "start": 1953,
                          "end": 1954
                        }
                      ],
                      "start": 1952,
                      "end": 1955
                    },
                    "start": 1949,
                    "end": 1955
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1939,
                  "end": 1955
                }
              ],
              "start": 1902,
              "end": 1956
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1965,
              "end": 1969
            },
            "superTypeArguments": {
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
                    "start": 1970,
                    "end": 1971
                  },
                  "typeArguments": null,
                  "start": 1970,
                  "end": 1971
                }
              ],
              "start": 1969,
              "end": 1972
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 1987,
                          "end": 1993
                        },
                        "start": 1985,
                        "end": 1993
                      },
                      "start": 1984,
                      "end": 1993
                    }
                  ],
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
                        "start": 1996,
                        "end": 1997
                      },
                      "typeArguments": null,
                      "start": 1996,
                      "end": 1997
                    },
                    "start": 1994,
                    "end": 1997
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1983,
                  "end": 1998
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2007,
                    "end": 2010
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2012,
                        "end": 2013
                      },
                      "typeArguments": null,
                      "start": 2012,
                      "end": 2013
                    },
                    "start": 2010,
                    "end": 2013
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
                  "start": 2007,
                  "end": 2013
                }
              ],
              "start": 1973,
              "end": 2019
            },
            "abstract": false,
            "declare": false,
            "start": 1894,
            "end": 2019
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2033
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
                    "start": 2034,
                    "end": 2035
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2044,
                      "end": 2047
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
                            "start": 2048,
                            "end": 2049
                          },
                          "typeArguments": null,
                          "start": 2048,
                          "end": 2049
                        }
                      ],
                      "start": 2047,
                      "end": 2050
                    },
                    "start": 2044,
                    "end": 2050
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2034,
                  "end": 2050
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2052,
                    "end": 2053
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2062,
                      "end": 2065
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
                            "start": 2066,
                            "end": 2067
                          },
                          "typeArguments": null,
                          "start": 2066,
                          "end": 2067
                        }
                      ],
                      "start": 2065,
                      "end": 2068
                    },
                    "start": 2062,
                    "end": 2068
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2052,
                  "end": 2068
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2070,
                    "end": 2071
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2080,
                      "end": 2083
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2084,
                            "end": 2085
                          },
                          "typeArguments": null,
                          "start": 2084,
                          "end": 2085
                        }
                      ],
                      "start": 2083,
                      "end": 2086
                    },
                    "start": 2080,
                    "end": 2086
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2070,
                  "end": 2086
                }
              ],
              "start": 2033,
              "end": 2087
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2096,
              "end": 2100
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2101,
                    "end": 2102
                  },
                  "typeArguments": null,
                  "start": 2101,
                  "end": 2102
                }
              ],
              "start": 2100,
              "end": 2103
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 2118,
                          "end": 2124
                        },
                        "start": 2116,
                        "end": 2124
                      },
                      "start": 2115,
                      "end": 2124
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2127,
                        "end": 2128
                      },
                      "typeArguments": null,
                      "start": 2127,
                      "end": 2128
                    },
                    "start": 2125,
                    "end": 2128
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2114,
                  "end": 2129
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2138,
                    "end": 2141
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
                        "start": 2143,
                        "end": 2144
                      },
                      "typeArguments": null,
                      "start": 2143,
                      "end": 2144
                    },
                    "start": 2141,
                    "end": 2144
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
                  "start": 2138,
                  "end": 2144
                }
              ],
              "start": 2104,
              "end": 2150
            },
            "abstract": false,
            "declare": false,
            "start": 2025,
            "end": 2150
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2162,
              "end": 2164
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
                    "start": 2165,
                    "end": 2166
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2175,
                      "end": 2178
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
                            "start": 2179,
                            "end": 2180
                          },
                          "typeArguments": null,
                          "start": 2179,
                          "end": 2180
                        }
                      ],
                      "start": 2178,
                      "end": 2181
                    },
                    "start": 2175,
                    "end": 2181
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2165,
                  "end": 2181
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2183,
                    "end": 2184
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2193,
                      "end": 2196
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
                            "start": 2197,
                            "end": 2198
                          },
                          "typeArguments": null,
                          "start": 2197,
                          "end": 2198
                        }
                      ],
                      "start": 2196,
                      "end": 2199
                    },
                    "start": 2193,
                    "end": 2199
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2183,
                  "end": 2199
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2201,
                    "end": 2202
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2211,
                      "end": 2214
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2215,
                            "end": 2216
                          },
                          "typeArguments": null,
                          "start": 2215,
                          "end": 2216
                        }
                      ],
                      "start": 2214,
                      "end": 2217
                    },
                    "start": 2211,
                    "end": 2217
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2201,
                  "end": 2217
                }
              ],
              "start": 2164,
              "end": 2218
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2227,
              "end": 2231
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2232,
                    "end": 2233
                  },
                  "typeArguments": null,
                  "start": 2232,
                  "end": 2233
                }
              ],
              "start": 2231,
              "end": 2234
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 2249,
                          "end": 2255
                        },
                        "start": 2247,
                        "end": 2255
                      },
                      "start": 2246,
                      "end": 2255
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2258,
                        "end": 2259
                      },
                      "typeArguments": null,
                      "start": 2258,
                      "end": 2259
                    },
                    "start": 2256,
                    "end": 2259
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2245,
                  "end": 2260
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2269,
                    "end": 2272
                  },
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
                        "start": 2274,
                        "end": 2275
                      },
                      "typeArguments": null,
                      "start": 2274,
                      "end": 2275
                    },
                    "start": 2272,
                    "end": 2275
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
                  "start": 2269,
                  "end": 2275
                }
              ],
              "start": 2235,
              "end": 2281
            },
            "abstract": false,
            "declare": false,
            "start": 2156,
            "end": 2281
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2293,
              "end": 2295
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
                    "start": 2296,
                    "end": 2297
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2306,
                      "end": 2309
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
                            "start": 2310,
                            "end": 2311
                          },
                          "typeArguments": null,
                          "start": 2310,
                          "end": 2311
                        }
                      ],
                      "start": 2309,
                      "end": 2312
                    },
                    "start": 2306,
                    "end": 2312
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2296,
                  "end": 2312
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2314,
                    "end": 2315
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2324,
                      "end": 2327
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
                            "start": 2328,
                            "end": 2329
                          },
                          "typeArguments": null,
                          "start": 2328,
                          "end": 2329
                        }
                      ],
                      "start": 2327,
                      "end": 2330
                    },
                    "start": 2324,
                    "end": 2330
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2314,
                  "end": 2330
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2332,
                    "end": 2333
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2342,
                      "end": 2345
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2346,
                            "end": 2347
                          },
                          "typeArguments": null,
                          "start": 2346,
                          "end": 2347
                        }
                      ],
                      "start": 2345,
                      "end": 2348
                    },
                    "start": 2342,
                    "end": 2348
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2332,
                  "end": 2348
                }
              ],
              "start": 2295,
              "end": 2349
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2358,
              "end": 2362
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2363,
                    "end": 2364
                  },
                  "typeArguments": null,
                  "start": 2363,
                  "end": 2364
                }
              ],
              "start": 2362,
              "end": 2365
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 2380,
                          "end": 2386
                        },
                        "start": 2378,
                        "end": 2386
                      },
                      "start": 2377,
                      "end": 2386
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2389,
                        "end": 2390
                      },
                      "typeArguments": null,
                      "start": 2389,
                      "end": 2390
                    },
                    "start": 2387,
                    "end": 2390
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2376,
                  "end": 2391
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2400,
                    "end": 2403
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2405,
                        "end": 2406
                      },
                      "typeArguments": null,
                      "start": 2405,
                      "end": 2406
                    },
                    "start": 2403,
                    "end": 2406
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
                  "start": 2400,
                  "end": 2406
                }
              ],
              "start": 2366,
              "end": 2412
            },
            "abstract": false,
            "declare": false,
            "start": 2287,
            "end": 2412
          }
        ],
        "start": 1190,
        "end": 2414
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1180,
      "end": 2414
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2424,
        "end": 2426
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2439,
              "end": 2444
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
                    "start": 2445,
                    "end": 2446
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2445,
                  "end": 2446
                }
              ],
              "start": 2444,
              "end": 2447
            },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2458,
                    "end": 2461
                  },
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
                        "start": 2463,
                        "end": 2466
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
                              "start": 2467,
                              "end": 2468
                            },
                            "typeArguments": null,
                            "start": 2467,
                            "end": 2468
                          }
                        ],
                        "start": 2466,
                        "end": 2469
                      },
                      "start": 2463,
                      "end": 2469
                    },
                    "start": 2461,
                    "end": 2469
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
                  "start": 2458,
                  "end": 2470
                }
              ],
              "start": 2448,
              "end": 2476
            },
            "abstract": false,
            "declare": false,
            "start": 2433,
            "end": 2476
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2488,
              "end": 2490
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
                    "start": 2491,
                    "end": 2492
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2501,
                      "end": 2504
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
                            "start": 2505,
                            "end": 2506
                          },
                          "typeArguments": null,
                          "start": 2505,
                          "end": 2506
                        }
                      ],
                      "start": 2504,
                      "end": 2507
                    },
                    "start": 2501,
                    "end": 2507
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2491,
                  "end": 2507
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2509,
                    "end": 2510
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2519,
                      "end": 2522
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
                            "start": 2523,
                            "end": 2524
                          },
                          "typeArguments": null,
                          "start": 2523,
                          "end": 2524
                        }
                      ],
                      "start": 2522,
                      "end": 2525
                    },
                    "start": 2519,
                    "end": 2525
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2509,
                  "end": 2525
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2527,
                    "end": 2528
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2537,
                      "end": 2540
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2541,
                            "end": 2542
                          },
                          "typeArguments": null,
                          "start": 2541,
                          "end": 2542
                        }
                      ],
                      "start": 2540,
                      "end": 2543
                    },
                    "start": 2537,
                    "end": 2543
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2527,
                  "end": 2543
                }
              ],
              "start": 2490,
              "end": 2544
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2553,
              "end": 2558
            },
            "superTypeArguments": {
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
                    "start": 2559,
                    "end": 2560
                  },
                  "typeArguments": null,
                  "start": 2559,
                  "end": 2560
                }
              ],
              "start": 2558,
              "end": 2561
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 2576,
                          "end": 2582
                        },
                        "start": 2574,
                        "end": 2582
                      },
                      "start": 2573,
                      "end": 2582
                    }
                  ],
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
                        "start": 2585,
                        "end": 2586
                      },
                      "typeArguments": null,
                      "start": 2585,
                      "end": 2586
                    },
                    "start": 2583,
                    "end": 2586
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2572,
                  "end": 2587
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2596,
                    "end": 2599
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
                        "start": 2601,
                        "end": 2602
                      },
                      "typeArguments": null,
                      "start": 2601,
                      "end": 2602
                    },
                    "start": 2599,
                    "end": 2602
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
                  "start": 2596,
                  "end": 2602
                }
              ],
              "start": 2562,
              "end": 2608
            },
            "abstract": false,
            "declare": false,
            "start": 2482,
            "end": 2608
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
              "start": 2620,
              "end": 2622
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
                    "start": 2623,
                    "end": 2624
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2633,
                      "end": 2636
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
                            "start": 2637,
                            "end": 2638
                          },
                          "typeArguments": null,
                          "start": 2637,
                          "end": 2638
                        }
                      ],
                      "start": 2636,
                      "end": 2639
                    },
                    "start": 2633,
                    "end": 2639
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2623,
                  "end": 2639
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2641,
                    "end": 2642
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2651,
                      "end": 2654
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
                            "start": 2655,
                            "end": 2656
                          },
                          "typeArguments": null,
                          "start": 2655,
                          "end": 2656
                        }
                      ],
                      "start": 2654,
                      "end": 2657
                    },
                    "start": 2651,
                    "end": 2657
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2641,
                  "end": 2657
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2659,
                    "end": 2660
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2669,
                      "end": 2672
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2673,
                            "end": 2674
                          },
                          "typeArguments": null,
                          "start": 2673,
                          "end": 2674
                        }
                      ],
                      "start": 2672,
                      "end": 2675
                    },
                    "start": 2669,
                    "end": 2675
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2659,
                  "end": 2675
                }
              ],
              "start": 2622,
              "end": 2676
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2685,
              "end": 2690
            },
            "superTypeArguments": {
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
                    "start": 2691,
                    "end": 2692
                  },
                  "typeArguments": null,
                  "start": 2691,
                  "end": 2692
                }
              ],
              "start": 2690,
              "end": 2693
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 2708,
                          "end": 2714
                        },
                        "start": 2706,
                        "end": 2714
                      },
                      "start": 2705,
                      "end": 2714
                    }
                  ],
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
                        "start": 2717,
                        "end": 2718
                      },
                      "typeArguments": null,
                      "start": 2717,
                      "end": 2718
                    },
                    "start": 2715,
                    "end": 2718
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2704,
                  "end": 2719
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2728,
                    "end": 2731
                  },
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
                        "start": 2733,
                        "end": 2734
                      },
                      "typeArguments": null,
                      "start": 2733,
                      "end": 2734
                    },
                    "start": 2731,
                    "end": 2734
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
                  "start": 2728,
                  "end": 2734
                }
              ],
              "start": 2694,
              "end": 2740
            },
            "abstract": false,
            "declare": false,
            "start": 2614,
            "end": 2740
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2752,
              "end": 2754
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
                    "start": 2755,
                    "end": 2756
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2765,
                      "end": 2768
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
                            "start": 2769,
                            "end": 2770
                          },
                          "typeArguments": null,
                          "start": 2769,
                          "end": 2770
                        }
                      ],
                      "start": 2768,
                      "end": 2771
                    },
                    "start": 2765,
                    "end": 2771
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2755,
                  "end": 2771
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2773,
                    "end": 2774
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2783,
                      "end": 2786
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
                            "start": 2787,
                            "end": 2788
                          },
                          "typeArguments": null,
                          "start": 2787,
                          "end": 2788
                        }
                      ],
                      "start": 2786,
                      "end": 2789
                    },
                    "start": 2783,
                    "end": 2789
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2773,
                  "end": 2789
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2791,
                    "end": 2792
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2801,
                      "end": 2804
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2805,
                            "end": 2806
                          },
                          "typeArguments": null,
                          "start": 2805,
                          "end": 2806
                        }
                      ],
                      "start": 2804,
                      "end": 2807
                    },
                    "start": 2801,
                    "end": 2807
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2791,
                  "end": 2807
                }
              ],
              "start": 2754,
              "end": 2808
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2817,
              "end": 2822
            },
            "superTypeArguments": {
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
                    "start": 2823,
                    "end": 2824
                  },
                  "typeArguments": null,
                  "start": 2823,
                  "end": 2824
                }
              ],
              "start": 2822,
              "end": 2825
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 2840,
                          "end": 2846
                        },
                        "start": 2838,
                        "end": 2846
                      },
                      "start": 2837,
                      "end": 2846
                    }
                  ],
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
                        "start": 2849,
                        "end": 2850
                      },
                      "typeArguments": null,
                      "start": 2849,
                      "end": 2850
                    },
                    "start": 2847,
                    "end": 2850
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2836,
                  "end": 2851
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2860,
                    "end": 2863
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2865,
                        "end": 2866
                      },
                      "typeArguments": null,
                      "start": 2865,
                      "end": 2866
                    },
                    "start": 2863,
                    "end": 2866
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
                  "start": 2860,
                  "end": 2866
                }
              ],
              "start": 2826,
              "end": 2872
            },
            "abstract": false,
            "declare": false,
            "start": 2746,
            "end": 2872
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2884,
              "end": 2886
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
                    "start": 2887,
                    "end": 2888
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2897,
                      "end": 2900
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
                            "start": 2901,
                            "end": 2902
                          },
                          "typeArguments": null,
                          "start": 2901,
                          "end": 2902
                        }
                      ],
                      "start": 2900,
                      "end": 2903
                    },
                    "start": 2897,
                    "end": 2903
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2887,
                  "end": 2903
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2905,
                    "end": 2906
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2915,
                      "end": 2918
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
                            "start": 2919,
                            "end": 2920
                          },
                          "typeArguments": null,
                          "start": 2919,
                          "end": 2920
                        }
                      ],
                      "start": 2918,
                      "end": 2921
                    },
                    "start": 2915,
                    "end": 2921
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2905,
                  "end": 2921
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2923,
                    "end": 2924
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2933,
                      "end": 2936
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2937,
                            "end": 2938
                          },
                          "typeArguments": null,
                          "start": 2937,
                          "end": 2938
                        }
                      ],
                      "start": 2936,
                      "end": 2939
                    },
                    "start": 2933,
                    "end": 2939
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2923,
                  "end": 2939
                }
              ],
              "start": 2886,
              "end": 2940
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2949,
              "end": 2954
            },
            "superTypeArguments": {
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
                    "start": 2955,
                    "end": 2956
                  },
                  "typeArguments": null,
                  "start": 2955,
                  "end": 2956
                }
              ],
              "start": 2954,
              "end": 2957
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 2972,
                          "end": 2978
                        },
                        "start": 2970,
                        "end": 2978
                      },
                      "start": 2969,
                      "end": 2978
                    }
                  ],
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
                        "start": 2981,
                        "end": 2982
                      },
                      "typeArguments": null,
                      "start": 2981,
                      "end": 2982
                    },
                    "start": 2979,
                    "end": 2982
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2968,
                  "end": 2983
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2992,
                    "end": 2995
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
                        "start": 2997,
                        "end": 2998
                      },
                      "typeArguments": null,
                      "start": 2997,
                      "end": 2998
                    },
                    "start": 2995,
                    "end": 2998
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
                  "start": 2992,
                  "end": 2998
                }
              ],
              "start": 2958,
              "end": 3004
            },
            "abstract": false,
            "declare": false,
            "start": 2878,
            "end": 3004
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3018
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
                    "start": 3019,
                    "end": 3020
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3029,
                      "end": 3032
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
                            "start": 3033,
                            "end": 3034
                          },
                          "typeArguments": null,
                          "start": 3033,
                          "end": 3034
                        }
                      ],
                      "start": 3032,
                      "end": 3035
                    },
                    "start": 3029,
                    "end": 3035
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3019,
                  "end": 3035
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3037,
                    "end": 3038
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3047,
                      "end": 3050
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
                            "start": 3051,
                            "end": 3052
                          },
                          "typeArguments": null,
                          "start": 3051,
                          "end": 3052
                        }
                      ],
                      "start": 3050,
                      "end": 3053
                    },
                    "start": 3047,
                    "end": 3053
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3037,
                  "end": 3053
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3055,
                    "end": 3056
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3065,
                      "end": 3068
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3069,
                            "end": 3070
                          },
                          "typeArguments": null,
                          "start": 3069,
                          "end": 3070
                        }
                      ],
                      "start": 3068,
                      "end": 3071
                    },
                    "start": 3065,
                    "end": 3071
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3055,
                  "end": 3071
                }
              ],
              "start": 3018,
              "end": 3072
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3081,
              "end": 3086
            },
            "superTypeArguments": {
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
                    "start": 3087,
                    "end": 3088
                  },
                  "typeArguments": null,
                  "start": 3087,
                  "end": 3088
                }
              ],
              "start": 3086,
              "end": 3089
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 3104,
                          "end": 3110
                        },
                        "start": 3102,
                        "end": 3110
                      },
                      "start": 3101,
                      "end": 3110
                    }
                  ],
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
                        "start": 3113,
                        "end": 3114
                      },
                      "typeArguments": null,
                      "start": 3113,
                      "end": 3114
                    },
                    "start": 3111,
                    "end": 3114
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3100,
                  "end": 3115
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3124,
                    "end": 3127
                  },
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
                        "start": 3129,
                        "end": 3130
                      },
                      "typeArguments": null,
                      "start": 3129,
                      "end": 3130
                    },
                    "start": 3127,
                    "end": 3130
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
                  "start": 3124,
                  "end": 3130
                }
              ],
              "start": 3090,
              "end": 3136
            },
            "abstract": false,
            "declare": false,
            "start": 3010,
            "end": 3136
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D6",
              "optional": false,
              "typeAnnotation": null,
              "start": 3148,
              "end": 3150
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
                    "start": 3151,
                    "end": 3152
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3161,
                      "end": 3164
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
                            "start": 3165,
                            "end": 3166
                          },
                          "typeArguments": null,
                          "start": 3165,
                          "end": 3166
                        }
                      ],
                      "start": 3164,
                      "end": 3167
                    },
                    "start": 3161,
                    "end": 3167
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3151,
                  "end": 3167
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3169,
                    "end": 3170
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3179,
                      "end": 3182
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
                            "start": 3183,
                            "end": 3184
                          },
                          "typeArguments": null,
                          "start": 3183,
                          "end": 3184
                        }
                      ],
                      "start": 3182,
                      "end": 3185
                    },
                    "start": 3179,
                    "end": 3185
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3169,
                  "end": 3185
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3187,
                    "end": 3188
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3197,
                      "end": 3200
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3201,
                            "end": 3202
                          },
                          "typeArguments": null,
                          "start": 3201,
                          "end": 3202
                        }
                      ],
                      "start": 3200,
                      "end": 3203
                    },
                    "start": 3197,
                    "end": 3203
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3187,
                  "end": 3203
                }
              ],
              "start": 3150,
              "end": 3204
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3213,
              "end": 3218
            },
            "superTypeArguments": {
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
                    "start": 3219,
                    "end": 3220
                  },
                  "typeArguments": null,
                  "start": 3219,
                  "end": 3220
                }
              ],
              "start": 3218,
              "end": 3221
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 3236,
                          "end": 3242
                        },
                        "start": 3234,
                        "end": 3242
                      },
                      "start": 3233,
                      "end": 3242
                    }
                  ],
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
                        "start": 3245,
                        "end": 3246
                      },
                      "typeArguments": null,
                      "start": 3245,
                      "end": 3246
                    },
                    "start": 3243,
                    "end": 3246
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3232,
                  "end": 3247
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3256,
                    "end": 3259
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3261,
                        "end": 3262
                      },
                      "typeArguments": null,
                      "start": 3261,
                      "end": 3262
                    },
                    "start": 3259,
                    "end": 3262
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
                  "start": 3256,
                  "end": 3262
                }
              ],
              "start": 3222,
              "end": 3268
            },
            "abstract": false,
            "declare": false,
            "start": 3142,
            "end": 3268
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D7",
              "optional": false,
              "typeAnnotation": null,
              "start": 3280,
              "end": 3282
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
                    "start": 3283,
                    "end": 3284
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3293,
                      "end": 3296
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
                            "start": 3297,
                            "end": 3298
                          },
                          "typeArguments": null,
                          "start": 3297,
                          "end": 3298
                        }
                      ],
                      "start": 3296,
                      "end": 3299
                    },
                    "start": 3293,
                    "end": 3299
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3283,
                  "end": 3299
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3301,
                    "end": 3302
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3311,
                      "end": 3314
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
                            "start": 3315,
                            "end": 3316
                          },
                          "typeArguments": null,
                          "start": 3315,
                          "end": 3316
                        }
                      ],
                      "start": 3314,
                      "end": 3317
                    },
                    "start": 3311,
                    "end": 3317
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3301,
                  "end": 3317
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3319,
                    "end": 3320
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3329,
                      "end": 3332
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3333,
                            "end": 3334
                          },
                          "typeArguments": null,
                          "start": 3333,
                          "end": 3334
                        }
                      ],
                      "start": 3332,
                      "end": 3335
                    },
                    "start": 3329,
                    "end": 3335
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3319,
                  "end": 3335
                }
              ],
              "start": 3282,
              "end": 3336
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3345,
              "end": 3350
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3351,
                    "end": 3352
                  },
                  "typeArguments": null,
                  "start": 3351,
                  "end": 3352
                }
              ],
              "start": 3350,
              "end": 3353
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 3368,
                          "end": 3374
                        },
                        "start": 3366,
                        "end": 3374
                      },
                      "start": 3365,
                      "end": 3374
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3377,
                        "end": 3378
                      },
                      "typeArguments": null,
                      "start": 3377,
                      "end": 3378
                    },
                    "start": 3375,
                    "end": 3378
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3364,
                  "end": 3379
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3388,
                    "end": 3391
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
                        "start": 3393,
                        "end": 3394
                      },
                      "typeArguments": null,
                      "start": 3393,
                      "end": 3394
                    },
                    "start": 3391,
                    "end": 3394
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
                  "start": 3388,
                  "end": 3394
                }
              ],
              "start": 3354,
              "end": 3400
            },
            "abstract": false,
            "declare": false,
            "start": 3274,
            "end": 3400
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D8",
              "optional": false,
              "typeAnnotation": null,
              "start": 3412,
              "end": 3414
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
                    "start": 3415,
                    "end": 3416
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3425,
                      "end": 3428
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
                            "start": 3429,
                            "end": 3430
                          },
                          "typeArguments": null,
                          "start": 3429,
                          "end": 3430
                        }
                      ],
                      "start": 3428,
                      "end": 3431
                    },
                    "start": 3425,
                    "end": 3431
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3415,
                  "end": 3431
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3433,
                    "end": 3434
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3443,
                      "end": 3446
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
                            "start": 3447,
                            "end": 3448
                          },
                          "typeArguments": null,
                          "start": 3447,
                          "end": 3448
                        }
                      ],
                      "start": 3446,
                      "end": 3449
                    },
                    "start": 3443,
                    "end": 3449
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3433,
                  "end": 3449
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3451,
                    "end": 3452
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3461,
                      "end": 3464
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3465,
                            "end": 3466
                          },
                          "typeArguments": null,
                          "start": 3465,
                          "end": 3466
                        }
                      ],
                      "start": 3464,
                      "end": 3467
                    },
                    "start": 3461,
                    "end": 3467
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3451,
                  "end": 3467
                }
              ],
              "start": 3414,
              "end": 3468
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3477,
              "end": 3482
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3483,
                    "end": 3484
                  },
                  "typeArguments": null,
                  "start": 3483,
                  "end": 3484
                }
              ],
              "start": 3482,
              "end": 3485
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 3500,
                          "end": 3506
                        },
                        "start": 3498,
                        "end": 3506
                      },
                      "start": 3497,
                      "end": 3506
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3509,
                        "end": 3510
                      },
                      "typeArguments": null,
                      "start": 3509,
                      "end": 3510
                    },
                    "start": 3507,
                    "end": 3510
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3496,
                  "end": 3511
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3520,
                    "end": 3523
                  },
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
                        "start": 3525,
                        "end": 3526
                      },
                      "typeArguments": null,
                      "start": 3525,
                      "end": 3526
                    },
                    "start": 3523,
                    "end": 3526
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
                  "start": 3520,
                  "end": 3526
                }
              ],
              "start": 3486,
              "end": 3532
            },
            "abstract": false,
            "declare": false,
            "start": 3406,
            "end": 3532
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3544,
              "end": 3546
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
                    "start": 3547,
                    "end": 3548
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3557,
                      "end": 3560
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
                            "start": 3561,
                            "end": 3562
                          },
                          "typeArguments": null,
                          "start": 3561,
                          "end": 3562
                        }
                      ],
                      "start": 3560,
                      "end": 3563
                    },
                    "start": 3557,
                    "end": 3563
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3547,
                  "end": 3563
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3565,
                    "end": 3566
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3575,
                      "end": 3578
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
                            "start": 3579,
                            "end": 3580
                          },
                          "typeArguments": null,
                          "start": 3579,
                          "end": 3580
                        }
                      ],
                      "start": 3578,
                      "end": 3581
                    },
                    "start": 3575,
                    "end": 3581
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3565,
                  "end": 3581
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3583,
                    "end": 3584
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3593,
                      "end": 3596
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3597,
                            "end": 3598
                          },
                          "typeArguments": null,
                          "start": 3597,
                          "end": 3598
                        }
                      ],
                      "start": 3596,
                      "end": 3599
                    },
                    "start": 3593,
                    "end": 3599
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3583,
                  "end": 3599
                }
              ],
              "start": 3546,
              "end": 3600
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3609,
              "end": 3614
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3615,
                    "end": 3616
                  },
                  "typeArguments": null,
                  "start": 3615,
                  "end": 3616
                }
              ],
              "start": 3614,
              "end": 3617
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
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
                          "start": 3632,
                          "end": 3638
                        },
                        "start": 3630,
                        "end": 3638
                      },
                      "start": 3629,
                      "end": 3638
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3641,
                        "end": 3642
                      },
                      "typeArguments": null,
                      "start": 3641,
                      "end": 3642
                    },
                    "start": 3639,
                    "end": 3642
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3628,
                  "end": 3643
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3652,
                    "end": 3655
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3657,
                        "end": 3658
                      },
                      "typeArguments": null,
                      "start": 3657,
                      "end": 3658
                    },
                    "start": 3655,
                    "end": 3658
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
                  "start": 3652,
                  "end": 3658
                }
              ],
              "start": 3618,
              "end": 3664
            },
            "abstract": false,
            "declare": false,
            "start": 3538,
            "end": 3664
          }
        ],
        "start": 2427,
        "end": 3666
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2417,
      "end": 3666
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 3666
}
```
