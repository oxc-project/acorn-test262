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
        "start": 1190,
        "end": 1192
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
              "start": 1205,
              "end": 1209
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
                    "start": 1210,
                    "end": 1211
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1210,
                  "end": 1211
                }
              ],
              "start": 1209,
              "end": 1212
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
                    "start": 1223,
                    "end": 1226
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
                        "start": 1228,
                        "end": 1229
                      },
                      "typeArguments": null,
                      "start": 1228,
                      "end": 1229
                    },
                    "start": 1226,
                    "end": 1229
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
                  "start": 1223,
                  "end": 1230
                }
              ],
              "start": 1213,
              "end": 1236
            },
            "abstract": false,
            "declare": false,
            "start": 1199,
            "end": 1236
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
              "start": 1248,
              "end": 1250
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
                    "start": 1251,
                    "end": 1252
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1261,
                      "end": 1264
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
                            "start": 1265,
                            "end": 1266
                          },
                          "typeArguments": null,
                          "start": 1265,
                          "end": 1266
                        }
                      ],
                      "start": 1264,
                      "end": 1267
                    },
                    "start": 1261,
                    "end": 1267
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1251,
                  "end": 1267
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1269,
                    "end": 1270
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1279,
                      "end": 1282
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
                            "start": 1283,
                            "end": 1284
                          },
                          "typeArguments": null,
                          "start": 1283,
                          "end": 1284
                        }
                      ],
                      "start": 1282,
                      "end": 1285
                    },
                    "start": 1279,
                    "end": 1285
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1269,
                  "end": 1285
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1288
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1297,
                      "end": 1300
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
                            "start": 1301,
                            "end": 1302
                          },
                          "typeArguments": null,
                          "start": 1301,
                          "end": 1302
                        }
                      ],
                      "start": 1300,
                      "end": 1303
                    },
                    "start": 1297,
                    "end": 1303
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1287,
                  "end": 1303
                }
              ],
              "start": 1250,
              "end": 1304
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1313,
              "end": 1317
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
                    "start": 1318,
                    "end": 1319
                  },
                  "typeArguments": null,
                  "start": 1318,
                  "end": 1319
                }
              ],
              "start": 1317,
              "end": 1320
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
                          "start": 1335,
                          "end": 1341
                        },
                        "start": 1333,
                        "end": 1341
                      },
                      "start": 1332,
                      "end": 1341
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
                        "start": 1344,
                        "end": 1345
                      },
                      "typeArguments": null,
                      "start": 1344,
                      "end": 1345
                    },
                    "start": 1342,
                    "end": 1345
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1331,
                  "end": 1346
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
                    "start": 1355,
                    "end": 1358
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
                        "start": 1360,
                        "end": 1361
                      },
                      "typeArguments": null,
                      "start": 1360,
                      "end": 1361
                    },
                    "start": 1358,
                    "end": 1361
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
                  "start": 1355,
                  "end": 1361
                }
              ],
              "start": 1321,
              "end": 1367
            },
            "abstract": false,
            "declare": false,
            "start": 1242,
            "end": 1367
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
              "start": 1379,
              "end": 1381
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
                    "start": 1382,
                    "end": 1383
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1392,
                      "end": 1395
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
                            "start": 1396,
                            "end": 1397
                          },
                          "typeArguments": null,
                          "start": 1396,
                          "end": 1397
                        }
                      ],
                      "start": 1395,
                      "end": 1398
                    },
                    "start": 1392,
                    "end": 1398
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1382,
                  "end": 1398
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1400,
                    "end": 1401
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1410,
                      "end": 1413
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
                            "start": 1414,
                            "end": 1415
                          },
                          "typeArguments": null,
                          "start": 1414,
                          "end": 1415
                        }
                      ],
                      "start": 1413,
                      "end": 1416
                    },
                    "start": 1410,
                    "end": 1416
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1400,
                  "end": 1416
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1418,
                    "end": 1419
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1428,
                      "end": 1431
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
                            "start": 1432,
                            "end": 1433
                          },
                          "typeArguments": null,
                          "start": 1432,
                          "end": 1433
                        }
                      ],
                      "start": 1431,
                      "end": 1434
                    },
                    "start": 1428,
                    "end": 1434
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1418,
                  "end": 1434
                }
              ],
              "start": 1381,
              "end": 1435
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1448
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
                    "start": 1449,
                    "end": 1450
                  },
                  "typeArguments": null,
                  "start": 1449,
                  "end": 1450
                }
              ],
              "start": 1448,
              "end": 1451
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
                          "start": 1466,
                          "end": 1472
                        },
                        "start": 1464,
                        "end": 1472
                      },
                      "start": 1463,
                      "end": 1472
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
                        "start": 1475,
                        "end": 1476
                      },
                      "typeArguments": null,
                      "start": 1475,
                      "end": 1476
                    },
                    "start": 1473,
                    "end": 1476
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1462,
                  "end": 1477
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
                    "start": 1486,
                    "end": 1489
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
                        "start": 1491,
                        "end": 1492
                      },
                      "typeArguments": null,
                      "start": 1491,
                      "end": 1492
                    },
                    "start": 1489,
                    "end": 1492
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
                  "start": 1486,
                  "end": 1492
                }
              ],
              "start": 1452,
              "end": 1498
            },
            "abstract": false,
            "declare": false,
            "start": 1373,
            "end": 1498
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
              "start": 1510,
              "end": 1512
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
                    "start": 1513,
                    "end": 1514
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1523,
                      "end": 1526
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
                            "start": 1527,
                            "end": 1528
                          },
                          "typeArguments": null,
                          "start": 1527,
                          "end": 1528
                        }
                      ],
                      "start": 1526,
                      "end": 1529
                    },
                    "start": 1523,
                    "end": 1529
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1513,
                  "end": 1529
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1531,
                    "end": 1532
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1541,
                      "end": 1544
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
                            "start": 1545,
                            "end": 1546
                          },
                          "typeArguments": null,
                          "start": 1545,
                          "end": 1546
                        }
                      ],
                      "start": 1544,
                      "end": 1547
                    },
                    "start": 1541,
                    "end": 1547
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1531,
                  "end": 1547
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1549,
                    "end": 1550
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1559,
                      "end": 1562
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
                            "start": 1563,
                            "end": 1564
                          },
                          "typeArguments": null,
                          "start": 1563,
                          "end": 1564
                        }
                      ],
                      "start": 1562,
                      "end": 1565
                    },
                    "start": 1559,
                    "end": 1565
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1549,
                  "end": 1565
                }
              ],
              "start": 1512,
              "end": 1566
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1575,
              "end": 1579
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
                    "start": 1580,
                    "end": 1581
                  },
                  "typeArguments": null,
                  "start": 1580,
                  "end": 1581
                }
              ],
              "start": 1579,
              "end": 1582
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
                          "start": 1597,
                          "end": 1603
                        },
                        "start": 1595,
                        "end": 1603
                      },
                      "start": 1594,
                      "end": 1603
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
                        "start": 1606,
                        "end": 1607
                      },
                      "typeArguments": null,
                      "start": 1606,
                      "end": 1607
                    },
                    "start": 1604,
                    "end": 1607
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1593,
                  "end": 1608
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
                    "start": 1617,
                    "end": 1620
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
                        "start": 1622,
                        "end": 1623
                      },
                      "typeArguments": null,
                      "start": 1622,
                      "end": 1623
                    },
                    "start": 1620,
                    "end": 1623
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
                  "start": 1617,
                  "end": 1623
                }
              ],
              "start": 1583,
              "end": 1629
            },
            "abstract": false,
            "declare": false,
            "start": 1504,
            "end": 1629
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
              "start": 1641,
              "end": 1643
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
                    "start": 1644,
                    "end": 1645
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1654,
                      "end": 1657
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
                            "start": 1658,
                            "end": 1659
                          },
                          "typeArguments": null,
                          "start": 1658,
                          "end": 1659
                        }
                      ],
                      "start": 1657,
                      "end": 1660
                    },
                    "start": 1654,
                    "end": 1660
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1644,
                  "end": 1660
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1662,
                    "end": 1663
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1672,
                      "end": 1675
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
                            "start": 1676,
                            "end": 1677
                          },
                          "typeArguments": null,
                          "start": 1676,
                          "end": 1677
                        }
                      ],
                      "start": 1675,
                      "end": 1678
                    },
                    "start": 1672,
                    "end": 1678
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1662,
                  "end": 1678
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1680,
                    "end": 1681
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1690,
                      "end": 1693
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
                            "start": 1694,
                            "end": 1695
                          },
                          "typeArguments": null,
                          "start": 1694,
                          "end": 1695
                        }
                      ],
                      "start": 1693,
                      "end": 1696
                    },
                    "start": 1690,
                    "end": 1696
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1680,
                  "end": 1696
                }
              ],
              "start": 1643,
              "end": 1697
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1706,
              "end": 1710
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
                    "start": 1711,
                    "end": 1712
                  },
                  "typeArguments": null,
                  "start": 1711,
                  "end": 1712
                }
              ],
              "start": 1710,
              "end": 1713
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
                          "start": 1728,
                          "end": 1734
                        },
                        "start": 1726,
                        "end": 1734
                      },
                      "start": 1725,
                      "end": 1734
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
                        "start": 1737,
                        "end": 1738
                      },
                      "typeArguments": null,
                      "start": 1737,
                      "end": 1738
                    },
                    "start": 1735,
                    "end": 1738
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1724,
                  "end": 1739
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
                    "start": 1748,
                    "end": 1751
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
                        "start": 1753,
                        "end": 1754
                      },
                      "typeArguments": null,
                      "start": 1753,
                      "end": 1754
                    },
                    "start": 1751,
                    "end": 1754
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
                  "start": 1748,
                  "end": 1754
                }
              ],
              "start": 1714,
              "end": 1760
            },
            "abstract": false,
            "declare": false,
            "start": 1635,
            "end": 1760
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
              "start": 1772,
              "end": 1774
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
                    "start": 1775,
                    "end": 1776
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1785,
                      "end": 1788
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
                            "start": 1789,
                            "end": 1790
                          },
                          "typeArguments": null,
                          "start": 1789,
                          "end": 1790
                        }
                      ],
                      "start": 1788,
                      "end": 1791
                    },
                    "start": 1785,
                    "end": 1791
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1775,
                  "end": 1791
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1793,
                    "end": 1794
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1803,
                      "end": 1806
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
                            "start": 1807,
                            "end": 1808
                          },
                          "typeArguments": null,
                          "start": 1807,
                          "end": 1808
                        }
                      ],
                      "start": 1806,
                      "end": 1809
                    },
                    "start": 1803,
                    "end": 1809
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1793,
                  "end": 1809
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1811,
                    "end": 1812
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1821,
                      "end": 1824
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
                            "start": 1825,
                            "end": 1826
                          },
                          "typeArguments": null,
                          "start": 1825,
                          "end": 1826
                        }
                      ],
                      "start": 1824,
                      "end": 1827
                    },
                    "start": 1821,
                    "end": 1827
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1811,
                  "end": 1827
                }
              ],
              "start": 1774,
              "end": 1828
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1837,
              "end": 1841
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
                    "start": 1842,
                    "end": 1843
                  },
                  "typeArguments": null,
                  "start": 1842,
                  "end": 1843
                }
              ],
              "start": 1841,
              "end": 1844
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
                          "start": 1859,
                          "end": 1865
                        },
                        "start": 1857,
                        "end": 1865
                      },
                      "start": 1856,
                      "end": 1865
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
                        "start": 1868,
                        "end": 1869
                      },
                      "typeArguments": null,
                      "start": 1868,
                      "end": 1869
                    },
                    "start": 1866,
                    "end": 1869
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1855,
                  "end": 1870
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
                    "start": 1879,
                    "end": 1882
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
                        "start": 1884,
                        "end": 1885
                      },
                      "typeArguments": null,
                      "start": 1884,
                      "end": 1885
                    },
                    "start": 1882,
                    "end": 1885
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
                  "start": 1879,
                  "end": 1885
                }
              ],
              "start": 1845,
              "end": 1891
            },
            "abstract": false,
            "declare": false,
            "start": 1766,
            "end": 1891
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
              "start": 1903,
              "end": 1905
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
                    "start": 1906,
                    "end": 1907
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1916,
                      "end": 1919
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
                            "start": 1920,
                            "end": 1921
                          },
                          "typeArguments": null,
                          "start": 1920,
                          "end": 1921
                        }
                      ],
                      "start": 1919,
                      "end": 1922
                    },
                    "start": 1916,
                    "end": 1922
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1906,
                  "end": 1922
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1924,
                    "end": 1925
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1934,
                      "end": 1937
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
                            "start": 1938,
                            "end": 1939
                          },
                          "typeArguments": null,
                          "start": 1938,
                          "end": 1939
                        }
                      ],
                      "start": 1937,
                      "end": 1940
                    },
                    "start": 1934,
                    "end": 1940
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1924,
                  "end": 1940
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1942,
                    "end": 1943
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1952,
                      "end": 1955
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
                            "start": 1956,
                            "end": 1957
                          },
                          "typeArguments": null,
                          "start": 1956,
                          "end": 1957
                        }
                      ],
                      "start": 1955,
                      "end": 1958
                    },
                    "start": 1952,
                    "end": 1958
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1942,
                  "end": 1958
                }
              ],
              "start": 1905,
              "end": 1959
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1968,
              "end": 1972
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
                    "start": 1973,
                    "end": 1974
                  },
                  "typeArguments": null,
                  "start": 1973,
                  "end": 1974
                }
              ],
              "start": 1972,
              "end": 1975
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
                          "start": 1990,
                          "end": 1996
                        },
                        "start": 1988,
                        "end": 1996
                      },
                      "start": 1987,
                      "end": 1996
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
                        "start": 1999,
                        "end": 2000
                      },
                      "typeArguments": null,
                      "start": 1999,
                      "end": 2000
                    },
                    "start": 1997,
                    "end": 2000
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1986,
                  "end": 2001
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
                    "start": 2010,
                    "end": 2013
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
                        "start": 2015,
                        "end": 2016
                      },
                      "typeArguments": null,
                      "start": 2015,
                      "end": 2016
                    },
                    "start": 2013,
                    "end": 2016
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
                  "start": 2010,
                  "end": 2016
                }
              ],
              "start": 1976,
              "end": 2022
            },
            "abstract": false,
            "declare": false,
            "start": 1897,
            "end": 2022
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
              "start": 2034,
              "end": 2036
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
                    "start": 2037,
                    "end": 2038
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2047,
                      "end": 2050
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
                            "start": 2051,
                            "end": 2052
                          },
                          "typeArguments": null,
                          "start": 2051,
                          "end": 2052
                        }
                      ],
                      "start": 2050,
                      "end": 2053
                    },
                    "start": 2047,
                    "end": 2053
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2037,
                  "end": 2053
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2055,
                    "end": 2056
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2065,
                      "end": 2068
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
                            "start": 2069,
                            "end": 2070
                          },
                          "typeArguments": null,
                          "start": 2069,
                          "end": 2070
                        }
                      ],
                      "start": 2068,
                      "end": 2071
                    },
                    "start": 2065,
                    "end": 2071
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2055,
                  "end": 2071
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2073,
                    "end": 2074
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2083,
                      "end": 2086
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
                            "start": 2087,
                            "end": 2088
                          },
                          "typeArguments": null,
                          "start": 2087,
                          "end": 2088
                        }
                      ],
                      "start": 2086,
                      "end": 2089
                    },
                    "start": 2083,
                    "end": 2089
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2073,
                  "end": 2089
                }
              ],
              "start": 2036,
              "end": 2090
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2099,
              "end": 2103
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
                    "start": 2104,
                    "end": 2105
                  },
                  "typeArguments": null,
                  "start": 2104,
                  "end": 2105
                }
              ],
              "start": 2103,
              "end": 2106
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
                          "start": 2121,
                          "end": 2127
                        },
                        "start": 2119,
                        "end": 2127
                      },
                      "start": 2118,
                      "end": 2127
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
                        "start": 2130,
                        "end": 2131
                      },
                      "typeArguments": null,
                      "start": 2130,
                      "end": 2131
                    },
                    "start": 2128,
                    "end": 2131
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2117,
                  "end": 2132
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
                    "start": 2141,
                    "end": 2144
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
                        "start": 2146,
                        "end": 2147
                      },
                      "typeArguments": null,
                      "start": 2146,
                      "end": 2147
                    },
                    "start": 2144,
                    "end": 2147
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
                  "start": 2141,
                  "end": 2147
                }
              ],
              "start": 2107,
              "end": 2153
            },
            "abstract": false,
            "declare": false,
            "start": 2028,
            "end": 2153
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
              "start": 2165,
              "end": 2167
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
                    "start": 2168,
                    "end": 2169
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2178,
                      "end": 2181
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
                            "start": 2182,
                            "end": 2183
                          },
                          "typeArguments": null,
                          "start": 2182,
                          "end": 2183
                        }
                      ],
                      "start": 2181,
                      "end": 2184
                    },
                    "start": 2178,
                    "end": 2184
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2168,
                  "end": 2184
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2186,
                    "end": 2187
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2196,
                      "end": 2199
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
                            "start": 2200,
                            "end": 2201
                          },
                          "typeArguments": null,
                          "start": 2200,
                          "end": 2201
                        }
                      ],
                      "start": 2199,
                      "end": 2202
                    },
                    "start": 2196,
                    "end": 2202
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2186,
                  "end": 2202
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2204,
                    "end": 2205
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2214,
                      "end": 2217
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
                            "start": 2218,
                            "end": 2219
                          },
                          "typeArguments": null,
                          "start": 2218,
                          "end": 2219
                        }
                      ],
                      "start": 2217,
                      "end": 2220
                    },
                    "start": 2214,
                    "end": 2220
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2204,
                  "end": 2220
                }
              ],
              "start": 2167,
              "end": 2221
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2230,
              "end": 2234
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
                    "start": 2235,
                    "end": 2236
                  },
                  "typeArguments": null,
                  "start": 2235,
                  "end": 2236
                }
              ],
              "start": 2234,
              "end": 2237
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
                          "start": 2252,
                          "end": 2258
                        },
                        "start": 2250,
                        "end": 2258
                      },
                      "start": 2249,
                      "end": 2258
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
                        "start": 2261,
                        "end": 2262
                      },
                      "typeArguments": null,
                      "start": 2261,
                      "end": 2262
                    },
                    "start": 2259,
                    "end": 2262
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2248,
                  "end": 2263
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
                    "start": 2272,
                    "end": 2275
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
                        "start": 2277,
                        "end": 2278
                      },
                      "typeArguments": null,
                      "start": 2277,
                      "end": 2278
                    },
                    "start": 2275,
                    "end": 2278
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
                  "start": 2272,
                  "end": 2278
                }
              ],
              "start": 2238,
              "end": 2284
            },
            "abstract": false,
            "declare": false,
            "start": 2159,
            "end": 2284
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
              "start": 2296,
              "end": 2298
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
                    "start": 2299,
                    "end": 2300
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2309,
                      "end": 2312
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
                            "start": 2313,
                            "end": 2314
                          },
                          "typeArguments": null,
                          "start": 2313,
                          "end": 2314
                        }
                      ],
                      "start": 2312,
                      "end": 2315
                    },
                    "start": 2309,
                    "end": 2315
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2299,
                  "end": 2315
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2317,
                    "end": 2318
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2327,
                      "end": 2330
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
                            "start": 2331,
                            "end": 2332
                          },
                          "typeArguments": null,
                          "start": 2331,
                          "end": 2332
                        }
                      ],
                      "start": 2330,
                      "end": 2333
                    },
                    "start": 2327,
                    "end": 2333
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2317,
                  "end": 2333
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2335,
                    "end": 2336
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2345,
                      "end": 2348
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
                            "start": 2349,
                            "end": 2350
                          },
                          "typeArguments": null,
                          "start": 2349,
                          "end": 2350
                        }
                      ],
                      "start": 2348,
                      "end": 2351
                    },
                    "start": 2345,
                    "end": 2351
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2335,
                  "end": 2351
                }
              ],
              "start": 2298,
              "end": 2352
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 2361,
              "end": 2365
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
                    "start": 2366,
                    "end": 2367
                  },
                  "typeArguments": null,
                  "start": 2366,
                  "end": 2367
                }
              ],
              "start": 2365,
              "end": 2368
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
                          "start": 2383,
                          "end": 2389
                        },
                        "start": 2381,
                        "end": 2389
                      },
                      "start": 2380,
                      "end": 2389
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
                        "start": 2392,
                        "end": 2393
                      },
                      "typeArguments": null,
                      "start": 2392,
                      "end": 2393
                    },
                    "start": 2390,
                    "end": 2393
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2379,
                  "end": 2394
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
                    "start": 2403,
                    "end": 2406
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
                        "start": 2408,
                        "end": 2409
                      },
                      "typeArguments": null,
                      "start": 2408,
                      "end": 2409
                    },
                    "start": 2406,
                    "end": 2409
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
                  "start": 2403,
                  "end": 2409
                }
              ],
              "start": 2369,
              "end": 2415
            },
            "abstract": false,
            "declare": false,
            "start": 2290,
            "end": 2415
          }
        ],
        "start": 1193,
        "end": 2417
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1180,
      "end": 2417
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2430,
        "end": 2432
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
              "start": 2445,
              "end": 2450
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
                    "start": 2451,
                    "end": 2452
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2451,
                  "end": 2452
                }
              ],
              "start": 2450,
              "end": 2453
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
                    "start": 2464,
                    "end": 2467
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
                        "start": 2469,
                        "end": 2472
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
                              "start": 2473,
                              "end": 2474
                            },
                            "typeArguments": null,
                            "start": 2473,
                            "end": 2474
                          }
                        ],
                        "start": 2472,
                        "end": 2475
                      },
                      "start": 2469,
                      "end": 2475
                    },
                    "start": 2467,
                    "end": 2475
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
                  "start": 2464,
                  "end": 2476
                }
              ],
              "start": 2454,
              "end": 2482
            },
            "abstract": false,
            "declare": false,
            "start": 2439,
            "end": 2482
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
              "start": 2494,
              "end": 2496
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
                    "start": 2497,
                    "end": 2498
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2507,
                      "end": 2510
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
                            "start": 2511,
                            "end": 2512
                          },
                          "typeArguments": null,
                          "start": 2511,
                          "end": 2512
                        }
                      ],
                      "start": 2510,
                      "end": 2513
                    },
                    "start": 2507,
                    "end": 2513
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2497,
                  "end": 2513
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2515,
                    "end": 2516
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2525,
                      "end": 2528
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
                            "start": 2529,
                            "end": 2530
                          },
                          "typeArguments": null,
                          "start": 2529,
                          "end": 2530
                        }
                      ],
                      "start": 2528,
                      "end": 2531
                    },
                    "start": 2525,
                    "end": 2531
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2515,
                  "end": 2531
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2533,
                    "end": 2534
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2543,
                      "end": 2546
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
                            "start": 2547,
                            "end": 2548
                          },
                          "typeArguments": null,
                          "start": 2547,
                          "end": 2548
                        }
                      ],
                      "start": 2546,
                      "end": 2549
                    },
                    "start": 2543,
                    "end": 2549
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2533,
                  "end": 2549
                }
              ],
              "start": 2496,
              "end": 2550
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2559,
              "end": 2564
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
                    "start": 2565,
                    "end": 2566
                  },
                  "typeArguments": null,
                  "start": 2565,
                  "end": 2566
                }
              ],
              "start": 2564,
              "end": 2567
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
                          "start": 2582,
                          "end": 2588
                        },
                        "start": 2580,
                        "end": 2588
                      },
                      "start": 2579,
                      "end": 2588
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
                        "start": 2591,
                        "end": 2592
                      },
                      "typeArguments": null,
                      "start": 2591,
                      "end": 2592
                    },
                    "start": 2589,
                    "end": 2592
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2578,
                  "end": 2593
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
                    "start": 2602,
                    "end": 2605
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
                        "start": 2607,
                        "end": 2608
                      },
                      "typeArguments": null,
                      "start": 2607,
                      "end": 2608
                    },
                    "start": 2605,
                    "end": 2608
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
                  "start": 2602,
                  "end": 2608
                }
              ],
              "start": 2568,
              "end": 2614
            },
            "abstract": false,
            "declare": false,
            "start": 2488,
            "end": 2614
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
              "start": 2626,
              "end": 2628
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
                    "start": 2629,
                    "end": 2630
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2639,
                      "end": 2642
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
                            "start": 2643,
                            "end": 2644
                          },
                          "typeArguments": null,
                          "start": 2643,
                          "end": 2644
                        }
                      ],
                      "start": 2642,
                      "end": 2645
                    },
                    "start": 2639,
                    "end": 2645
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2629,
                  "end": 2645
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2647,
                    "end": 2648
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2657,
                      "end": 2660
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
                            "start": 2661,
                            "end": 2662
                          },
                          "typeArguments": null,
                          "start": 2661,
                          "end": 2662
                        }
                      ],
                      "start": 2660,
                      "end": 2663
                    },
                    "start": 2657,
                    "end": 2663
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2647,
                  "end": 2663
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2665,
                    "end": 2666
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2675,
                      "end": 2678
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
                            "start": 2679,
                            "end": 2680
                          },
                          "typeArguments": null,
                          "start": 2679,
                          "end": 2680
                        }
                      ],
                      "start": 2678,
                      "end": 2681
                    },
                    "start": 2675,
                    "end": 2681
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2665,
                  "end": 2681
                }
              ],
              "start": 2628,
              "end": 2682
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2691,
              "end": 2696
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
                    "start": 2697,
                    "end": 2698
                  },
                  "typeArguments": null,
                  "start": 2697,
                  "end": 2698
                }
              ],
              "start": 2696,
              "end": 2699
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
                          "start": 2714,
                          "end": 2720
                        },
                        "start": 2712,
                        "end": 2720
                      },
                      "start": 2711,
                      "end": 2720
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
                        "start": 2723,
                        "end": 2724
                      },
                      "typeArguments": null,
                      "start": 2723,
                      "end": 2724
                    },
                    "start": 2721,
                    "end": 2724
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2710,
                  "end": 2725
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
                    "start": 2734,
                    "end": 2737
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
                        "start": 2739,
                        "end": 2740
                      },
                      "typeArguments": null,
                      "start": 2739,
                      "end": 2740
                    },
                    "start": 2737,
                    "end": 2740
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
                  "start": 2734,
                  "end": 2740
                }
              ],
              "start": 2700,
              "end": 2746
            },
            "abstract": false,
            "declare": false,
            "start": 2620,
            "end": 2746
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
              "start": 2758,
              "end": 2760
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
                    "start": 2761,
                    "end": 2762
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2771,
                      "end": 2774
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
                            "start": 2775,
                            "end": 2776
                          },
                          "typeArguments": null,
                          "start": 2775,
                          "end": 2776
                        }
                      ],
                      "start": 2774,
                      "end": 2777
                    },
                    "start": 2771,
                    "end": 2777
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2761,
                  "end": 2777
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2779,
                    "end": 2780
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2789,
                      "end": 2792
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
                            "start": 2793,
                            "end": 2794
                          },
                          "typeArguments": null,
                          "start": 2793,
                          "end": 2794
                        }
                      ],
                      "start": 2792,
                      "end": 2795
                    },
                    "start": 2789,
                    "end": 2795
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2779,
                  "end": 2795
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2797,
                    "end": 2798
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2807,
                      "end": 2810
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
                            "start": 2811,
                            "end": 2812
                          },
                          "typeArguments": null,
                          "start": 2811,
                          "end": 2812
                        }
                      ],
                      "start": 2810,
                      "end": 2813
                    },
                    "start": 2807,
                    "end": 2813
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2797,
                  "end": 2813
                }
              ],
              "start": 2760,
              "end": 2814
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2823,
              "end": 2828
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
                    "start": 2829,
                    "end": 2830
                  },
                  "typeArguments": null,
                  "start": 2829,
                  "end": 2830
                }
              ],
              "start": 2828,
              "end": 2831
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
                          "start": 2846,
                          "end": 2852
                        },
                        "start": 2844,
                        "end": 2852
                      },
                      "start": 2843,
                      "end": 2852
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
                        "start": 2855,
                        "end": 2856
                      },
                      "typeArguments": null,
                      "start": 2855,
                      "end": 2856
                    },
                    "start": 2853,
                    "end": 2856
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2842,
                  "end": 2857
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
                    "start": 2866,
                    "end": 2869
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
                        "start": 2871,
                        "end": 2872
                      },
                      "typeArguments": null,
                      "start": 2871,
                      "end": 2872
                    },
                    "start": 2869,
                    "end": 2872
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
                  "start": 2866,
                  "end": 2872
                }
              ],
              "start": 2832,
              "end": 2878
            },
            "abstract": false,
            "declare": false,
            "start": 2752,
            "end": 2878
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
              "start": 2890,
              "end": 2892
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
                    "start": 2893,
                    "end": 2894
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2903,
                      "end": 2906
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
                            "start": 2907,
                            "end": 2908
                          },
                          "typeArguments": null,
                          "start": 2907,
                          "end": 2908
                        }
                      ],
                      "start": 2906,
                      "end": 2909
                    },
                    "start": 2903,
                    "end": 2909
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2893,
                  "end": 2909
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2911,
                    "end": 2912
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2921,
                      "end": 2924
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
                            "start": 2925,
                            "end": 2926
                          },
                          "typeArguments": null,
                          "start": 2925,
                          "end": 2926
                        }
                      ],
                      "start": 2924,
                      "end": 2927
                    },
                    "start": 2921,
                    "end": 2927
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2911,
                  "end": 2927
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2929,
                    "end": 2930
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2939,
                      "end": 2942
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
                            "start": 2943,
                            "end": 2944
                          },
                          "typeArguments": null,
                          "start": 2943,
                          "end": 2944
                        }
                      ],
                      "start": 2942,
                      "end": 2945
                    },
                    "start": 2939,
                    "end": 2945
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2929,
                  "end": 2945
                }
              ],
              "start": 2892,
              "end": 2946
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2955,
              "end": 2960
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
                    "start": 2961,
                    "end": 2962
                  },
                  "typeArguments": null,
                  "start": 2961,
                  "end": 2962
                }
              ],
              "start": 2960,
              "end": 2963
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
                          "start": 2978,
                          "end": 2984
                        },
                        "start": 2976,
                        "end": 2984
                      },
                      "start": 2975,
                      "end": 2984
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
                        "start": 2987,
                        "end": 2988
                      },
                      "typeArguments": null,
                      "start": 2987,
                      "end": 2988
                    },
                    "start": 2985,
                    "end": 2988
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2974,
                  "end": 2989
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
                    "start": 2998,
                    "end": 3001
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
                        "start": 3003,
                        "end": 3004
                      },
                      "typeArguments": null,
                      "start": 3003,
                      "end": 3004
                    },
                    "start": 3001,
                    "end": 3004
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
                  "start": 2998,
                  "end": 3004
                }
              ],
              "start": 2964,
              "end": 3010
            },
            "abstract": false,
            "declare": false,
            "start": 2884,
            "end": 3010
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
              "start": 3022,
              "end": 3024
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
                    "start": 3025,
                    "end": 3026
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3035,
                      "end": 3038
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
                            "start": 3039,
                            "end": 3040
                          },
                          "typeArguments": null,
                          "start": 3039,
                          "end": 3040
                        }
                      ],
                      "start": 3038,
                      "end": 3041
                    },
                    "start": 3035,
                    "end": 3041
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3025,
                  "end": 3041
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3043,
                    "end": 3044
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3053,
                      "end": 3056
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
                            "start": 3057,
                            "end": 3058
                          },
                          "typeArguments": null,
                          "start": 3057,
                          "end": 3058
                        }
                      ],
                      "start": 3056,
                      "end": 3059
                    },
                    "start": 3053,
                    "end": 3059
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3043,
                  "end": 3059
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3061,
                    "end": 3062
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3071,
                      "end": 3074
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
                            "start": 3075,
                            "end": 3076
                          },
                          "typeArguments": null,
                          "start": 3075,
                          "end": 3076
                        }
                      ],
                      "start": 3074,
                      "end": 3077
                    },
                    "start": 3071,
                    "end": 3077
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3061,
                  "end": 3077
                }
              ],
              "start": 3024,
              "end": 3078
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3087,
              "end": 3092
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
                    "start": 3093,
                    "end": 3094
                  },
                  "typeArguments": null,
                  "start": 3093,
                  "end": 3094
                }
              ],
              "start": 3092,
              "end": 3095
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
                          "start": 3110,
                          "end": 3116
                        },
                        "start": 3108,
                        "end": 3116
                      },
                      "start": 3107,
                      "end": 3116
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
                        "start": 3119,
                        "end": 3120
                      },
                      "typeArguments": null,
                      "start": 3119,
                      "end": 3120
                    },
                    "start": 3117,
                    "end": 3120
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3106,
                  "end": 3121
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
                    "start": 3130,
                    "end": 3133
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
                        "start": 3135,
                        "end": 3136
                      },
                      "typeArguments": null,
                      "start": 3135,
                      "end": 3136
                    },
                    "start": 3133,
                    "end": 3136
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
                  "start": 3130,
                  "end": 3136
                }
              ],
              "start": 3096,
              "end": 3142
            },
            "abstract": false,
            "declare": false,
            "start": 3016,
            "end": 3142
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
              "start": 3154,
              "end": 3156
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
                    "start": 3157,
                    "end": 3158
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3167,
                      "end": 3170
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
                            "start": 3171,
                            "end": 3172
                          },
                          "typeArguments": null,
                          "start": 3171,
                          "end": 3172
                        }
                      ],
                      "start": 3170,
                      "end": 3173
                    },
                    "start": 3167,
                    "end": 3173
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3157,
                  "end": 3173
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3175,
                    "end": 3176
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3185,
                      "end": 3188
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
                            "start": 3189,
                            "end": 3190
                          },
                          "typeArguments": null,
                          "start": 3189,
                          "end": 3190
                        }
                      ],
                      "start": 3188,
                      "end": 3191
                    },
                    "start": 3185,
                    "end": 3191
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3175,
                  "end": 3191
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3193,
                    "end": 3194
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3203,
                      "end": 3206
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
                            "start": 3207,
                            "end": 3208
                          },
                          "typeArguments": null,
                          "start": 3207,
                          "end": 3208
                        }
                      ],
                      "start": 3206,
                      "end": 3209
                    },
                    "start": 3203,
                    "end": 3209
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3193,
                  "end": 3209
                }
              ],
              "start": 3156,
              "end": 3210
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3219,
              "end": 3224
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
                    "start": 3225,
                    "end": 3226
                  },
                  "typeArguments": null,
                  "start": 3225,
                  "end": 3226
                }
              ],
              "start": 3224,
              "end": 3227
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
                          "start": 3242,
                          "end": 3248
                        },
                        "start": 3240,
                        "end": 3248
                      },
                      "start": 3239,
                      "end": 3248
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
                        "start": 3251,
                        "end": 3252
                      },
                      "typeArguments": null,
                      "start": 3251,
                      "end": 3252
                    },
                    "start": 3249,
                    "end": 3252
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3238,
                  "end": 3253
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
                    "start": 3262,
                    "end": 3265
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
                        "start": 3267,
                        "end": 3268
                      },
                      "typeArguments": null,
                      "start": 3267,
                      "end": 3268
                    },
                    "start": 3265,
                    "end": 3268
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
                  "start": 3262,
                  "end": 3268
                }
              ],
              "start": 3228,
              "end": 3274
            },
            "abstract": false,
            "declare": false,
            "start": 3148,
            "end": 3274
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
              "start": 3286,
              "end": 3288
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
                    "start": 3289,
                    "end": 3290
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3299,
                      "end": 3302
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
                            "start": 3303,
                            "end": 3304
                          },
                          "typeArguments": null,
                          "start": 3303,
                          "end": 3304
                        }
                      ],
                      "start": 3302,
                      "end": 3305
                    },
                    "start": 3299,
                    "end": 3305
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3289,
                  "end": 3305
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3307,
                    "end": 3308
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3317,
                      "end": 3320
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
                            "start": 3321,
                            "end": 3322
                          },
                          "typeArguments": null,
                          "start": 3321,
                          "end": 3322
                        }
                      ],
                      "start": 3320,
                      "end": 3323
                    },
                    "start": 3317,
                    "end": 3323
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3307,
                  "end": 3323
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3325,
                    "end": 3326
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3335,
                      "end": 3338
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
                            "start": 3339,
                            "end": 3340
                          },
                          "typeArguments": null,
                          "start": 3339,
                          "end": 3340
                        }
                      ],
                      "start": 3338,
                      "end": 3341
                    },
                    "start": 3335,
                    "end": 3341
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3325,
                  "end": 3341
                }
              ],
              "start": 3288,
              "end": 3342
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3351,
              "end": 3356
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
                    "start": 3357,
                    "end": 3358
                  },
                  "typeArguments": null,
                  "start": 3357,
                  "end": 3358
                }
              ],
              "start": 3356,
              "end": 3359
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
                          "start": 3374,
                          "end": 3380
                        },
                        "start": 3372,
                        "end": 3380
                      },
                      "start": 3371,
                      "end": 3380
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
                        "start": 3383,
                        "end": 3384
                      },
                      "typeArguments": null,
                      "start": 3383,
                      "end": 3384
                    },
                    "start": 3381,
                    "end": 3384
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3370,
                  "end": 3385
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
                    "start": 3394,
                    "end": 3397
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
                        "start": 3399,
                        "end": 3400
                      },
                      "typeArguments": null,
                      "start": 3399,
                      "end": 3400
                    },
                    "start": 3397,
                    "end": 3400
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
                  "start": 3394,
                  "end": 3400
                }
              ],
              "start": 3360,
              "end": 3406
            },
            "abstract": false,
            "declare": false,
            "start": 3280,
            "end": 3406
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
              "start": 3418,
              "end": 3420
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
                    "start": 3421,
                    "end": 3422
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3431,
                      "end": 3434
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
                            "start": 3435,
                            "end": 3436
                          },
                          "typeArguments": null,
                          "start": 3435,
                          "end": 3436
                        }
                      ],
                      "start": 3434,
                      "end": 3437
                    },
                    "start": 3431,
                    "end": 3437
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3421,
                  "end": 3437
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3439,
                    "end": 3440
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3449,
                      "end": 3452
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
                            "start": 3453,
                            "end": 3454
                          },
                          "typeArguments": null,
                          "start": 3453,
                          "end": 3454
                        }
                      ],
                      "start": 3452,
                      "end": 3455
                    },
                    "start": 3449,
                    "end": 3455
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3439,
                  "end": 3455
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3457,
                    "end": 3458
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3467,
                      "end": 3470
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
                            "start": 3471,
                            "end": 3472
                          },
                          "typeArguments": null,
                          "start": 3471,
                          "end": 3472
                        }
                      ],
                      "start": 3470,
                      "end": 3473
                    },
                    "start": 3467,
                    "end": 3473
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3457,
                  "end": 3473
                }
              ],
              "start": 3420,
              "end": 3474
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3483,
              "end": 3488
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
                    "start": 3489,
                    "end": 3490
                  },
                  "typeArguments": null,
                  "start": 3489,
                  "end": 3490
                }
              ],
              "start": 3488,
              "end": 3491
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
                          "start": 3506,
                          "end": 3512
                        },
                        "start": 3504,
                        "end": 3512
                      },
                      "start": 3503,
                      "end": 3512
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
                        "start": 3515,
                        "end": 3516
                      },
                      "typeArguments": null,
                      "start": 3515,
                      "end": 3516
                    },
                    "start": 3513,
                    "end": 3516
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3502,
                  "end": 3517
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
                    "start": 3526,
                    "end": 3529
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
                        "start": 3531,
                        "end": 3532
                      },
                      "typeArguments": null,
                      "start": 3531,
                      "end": 3532
                    },
                    "start": 3529,
                    "end": 3532
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
                  "start": 3526,
                  "end": 3532
                }
              ],
              "start": 3492,
              "end": 3538
            },
            "abstract": false,
            "declare": false,
            "start": 3412,
            "end": 3538
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
              "start": 3550,
              "end": 3552
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
                    "start": 3553,
                    "end": 3554
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3563,
                      "end": 3566
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
                            "start": 3567,
                            "end": 3568
                          },
                          "typeArguments": null,
                          "start": 3567,
                          "end": 3568
                        }
                      ],
                      "start": 3566,
                      "end": 3569
                    },
                    "start": 3563,
                    "end": 3569
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3553,
                  "end": 3569
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3571,
                    "end": 3572
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3581,
                      "end": 3584
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
                            "start": 3585,
                            "end": 3586
                          },
                          "typeArguments": null,
                          "start": 3585,
                          "end": 3586
                        }
                      ],
                      "start": 3584,
                      "end": 3587
                    },
                    "start": 3581,
                    "end": 3587
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3571,
                  "end": 3587
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3589,
                    "end": 3590
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3599,
                      "end": 3602
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
                            "start": 3603,
                            "end": 3604
                          },
                          "typeArguments": null,
                          "start": 3603,
                          "end": 3604
                        }
                      ],
                      "start": 3602,
                      "end": 3605
                    },
                    "start": 3599,
                    "end": 3605
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3589,
                  "end": 3605
                }
              ],
              "start": 3552,
              "end": 3606
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3615,
              "end": 3620
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
                    "start": 3621,
                    "end": 3622
                  },
                  "typeArguments": null,
                  "start": 3621,
                  "end": 3622
                }
              ],
              "start": 3620,
              "end": 3623
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
                          "start": 3638,
                          "end": 3644
                        },
                        "start": 3636,
                        "end": 3644
                      },
                      "start": 3635,
                      "end": 3644
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
                        "start": 3647,
                        "end": 3648
                      },
                      "typeArguments": null,
                      "start": 3647,
                      "end": 3648
                    },
                    "start": 3645,
                    "end": 3648
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 3634,
                  "end": 3649
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
                    "start": 3658,
                    "end": 3661
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
                        "start": 3663,
                        "end": 3664
                      },
                      "typeArguments": null,
                      "start": 3663,
                      "end": 3664
                    },
                    "start": 3661,
                    "end": 3664
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
                  "start": 3658,
                  "end": 3664
                }
              ],
              "start": 3624,
              "end": 3670
            },
            "abstract": false,
            "declare": false,
            "start": 3544,
            "end": 3670
          }
        ],
        "start": 2433,
        "end": 3672
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2420,
      "end": 3672
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 3672
}
```
