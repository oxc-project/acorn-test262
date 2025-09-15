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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 29
          }
        ],
        "start": 12,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
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
        "start": 39,
        "end": 40
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "typeArguments": null,
          "start": 52,
          "end": 53
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
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
            "start": 60,
            "end": 71
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valid",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 83,
                "end": 90
              },
              "start": 81,
              "end": 90
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
            "start": 76,
            "end": 91
          }
        ],
        "start": 54,
        "end": 93
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 93
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
        "start": 101,
        "end": 103
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 126,
                "end": 132
              },
              "start": 124,
              "end": 132
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
            "start": 120,
            "end": 133
          }
        ],
        "start": 114,
        "end": 135
      },
      "abstract": false,
      "declare": false,
      "start": 95,
      "end": 135
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
        "start": 143,
        "end": 144
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
              "start": 145,
              "end": 146
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 146
          }
        ],
        "start": 144,
        "end": 147
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
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
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
                  "start": 161,
                  "end": 162
                },
                "typeArguments": null,
                "start": 161,
                "end": 162
              },
              "start": 159,
              "end": 162
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
            "start": 153,
            "end": 163
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 175
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
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
                        "start": 179,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 179,
                      "end": 180
                    }
                  ],
                  "start": 178,
                  "end": 181
                },
                "start": 177,
                "end": 181
              },
              "start": 175,
              "end": 181
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
            "start": 168,
            "end": 182
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 194
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 199
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
                              "start": 200,
                              "end": 201
                            },
                            "typeArguments": null,
                            "start": 200,
                            "end": 201
                          }
                        ],
                        "start": 199,
                        "end": 202
                      },
                      "start": 198,
                      "end": 202
                    }
                  ],
                  "start": 197,
                  "end": 203
                },
                "start": 196,
                "end": 203
              },
              "start": 194,
              "end": 203
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
            "start": 187,
            "end": 203
          }
        ],
        "start": 147,
        "end": 205
      },
      "abstract": false,
      "declare": false,
      "start": 137,
      "end": 205
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 217
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
              "type": "TSStringKeyword",
              "start": 221,
              "end": 227
            },
            "start": 219,
            "end": 227
          },
          "start": 218,
          "end": 227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 230,
          "end": 236
        },
        "start": 228,
        "end": 236
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 246,
              "end": 248
            },
            "start": 239,
            "end": 249
          }
        ],
        "start": 237,
        "end": 251
      },
      "expression": false,
      "start": 207,
      "end": 251
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 264
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 285
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 300
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 302,
                        "end": 308
                      },
                      "start": 300,
                      "end": 308
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
                    "end": 309
                  }
                ],
                "start": 286,
                "end": 315
              },
              "abstract": false,
              "declare": false,
              "start": 278,
              "end": 315
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 271,
            "end": 315
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 339
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
                      "type": "TSNumberKeyword",
                      "start": 343,
                      "end": 349
                    },
                    "start": 341,
                    "end": 349
                  },
                  "start": 340,
                  "end": 349
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 352,
                  "end": 358
                },
                "start": 350,
                "end": 358
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 368,
                          "end": 369
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 378
                        },
                        "optional": false,
                        "computed": false,
                        "start": 368,
                        "end": 378
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 368,
                      "end": 380
                    },
                    "start": 361,
                    "end": 381
                  }
                ],
                "start": 359,
                "end": 383
              },
              "expression": false,
              "start": 328,
              "end": 383
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 321,
            "end": 383
          }
        ],
        "start": 265,
        "end": 385
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 253,
      "end": 385
    },
    {
      "type": "ForStatement",
      "init": {
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
                  "type": "TSAnyKeyword",
                  "start": 426,
                  "end": 429
                },
                "start": 424,
                "end": 429
              },
              "start": 423,
              "end": 429
            },
            "init": null,
            "definite": false,
            "start": 423,
            "end": 429
          }
        ],
        "declare": false,
        "start": 419,
        "end": 429
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 432,
        "end": 434
      },
      "start": 414,
      "end": 434
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 444,
              "end": 445
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 448,
              "end": 449
            },
            "definite": false,
            "start": 444,
            "end": 449
          }
        ],
        "declare": false,
        "start": 440,
        "end": 449
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 452,
        "end": 454
      },
      "start": 435,
      "end": 454
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "init": {
              "type": "Literal",
              "value": "a string",
              "raw": "'a string'",
              "start": 468,
              "end": 478
            },
            "definite": false,
            "start": 464,
            "end": 478
          }
        ],
        "declare": false,
        "start": 460,
        "end": 478
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 481,
        "end": 483
      },
      "start": 455,
      "end": 483
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 493,
              "end": 494
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
              },
              "typeArguments": null,
              "arguments": [],
              "start": 497,
              "end": 504
            },
            "definite": false,
            "start": 493,
            "end": 504
          }
        ],
        "declare": false,
        "start": 489,
        "end": 504
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 507,
        "end": 509
      },
      "start": 484,
      "end": 509
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 528
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 529,
                    "end": 535
                  }
                ],
                "start": 528,
                "end": 536
              },
              "arguments": [],
              "start": 523,
              "end": 538
            },
            "definite": false,
            "start": 519,
            "end": 538
          }
        ],
        "declare": false,
        "start": 515,
        "end": 538
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 541,
        "end": 543
      },
      "start": 510,
      "end": 543
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 558
            },
            "definite": false,
            "start": 553,
            "end": 558
          }
        ],
        "declare": false,
        "start": 549,
        "end": 558
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 561,
        "end": 563
      },
      "start": 544,
      "end": 563
    },
    {
      "type": "ForStatement",
      "init": {
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 578
                  },
                  "typeArguments": null,
                  "start": 577,
                  "end": 578
                },
                "start": 575,
                "end": 578
              },
              "start": 574,
              "end": 578
            },
            "init": null,
            "definite": false,
            "start": 574,
            "end": 578
          }
        ],
        "declare": false,
        "start": 570,
        "end": 578
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 581,
        "end": 583
      },
      "start": 565,
      "end": 583
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 593,
              "end": 594
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 602
              },
              "typeArguments": null,
              "arguments": [],
              "start": 597,
              "end": 604
            },
            "definite": false,
            "start": 593,
            "end": 604
          }
        ],
        "declare": false,
        "start": 589,
        "end": 604
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 607,
        "end": 609
      },
      "start": 584,
      "end": 609
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 619,
              "end": 620
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 629
              },
              "typeArguments": null,
              "arguments": [],
              "start": 623,
              "end": 631
            },
            "definite": false,
            "start": 619,
            "end": 631
          }
        ],
        "declare": false,
        "start": 615,
        "end": 631
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 634,
        "end": 636
      },
      "start": 610,
      "end": 636
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 646,
              "end": 647
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 651
            },
            "definite": false,
            "start": 646,
            "end": 651
          }
        ],
        "declare": false,
        "start": 642,
        "end": 651
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 654,
        "end": 656
      },
      "start": 638,
      "end": 656
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 666,
              "end": 667
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
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
                      "type": "TSNumberKeyword",
                      "start": 674,
                      "end": 680
                    },
                    "start": 672,
                    "end": 680
                  },
                  "start": 671,
                  "end": 680
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 685,
                "end": 687
              },
              "id": null,
              "generator": false,
              "start": 670,
              "end": 687
            },
            "definite": false,
            "start": 666,
            "end": 687
          }
        ],
        "declare": false,
        "start": 662,
        "end": 687
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 690,
        "end": 692
      },
      "start": 657,
      "end": 692
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 707,
                    "end": 713
                  },
                  "start": 707,
                  "end": 715
                },
                "start": 705,
                "end": 715
              },
              "start": 702,
              "end": 715
            },
            "init": null,
            "definite": false,
            "start": 702,
            "end": 715
          }
        ],
        "declare": false,
        "start": 698,
        "end": 715
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 718,
        "end": 720
      },
      "start": 694,
      "end": 720
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 733
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 737,
                  "end": 738
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 740,
                  "end": 741
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 743,
                  "end": 744
                },
                {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 746,
                  "end": 747
                }
              ],
              "start": 736,
              "end": 748
            },
            "definite": false,
            "start": 730,
            "end": 748
          }
        ],
        "declare": false,
        "start": 726,
        "end": 748
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 751,
        "end": 753
      },
      "start": 721,
      "end": 753
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 766
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 774,
                    "end": 775
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 770,
                  "end": 777
                },
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 783,
                    "end": 785
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 779,
                  "end": 787
                },
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 794
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 795,
                        "end": 801
                      }
                    ],
                    "start": 794,
                    "end": 802
                  },
                  "arguments": [],
                  "start": 789,
                  "end": 804
                }
              ],
              "start": 769,
              "end": 805
            },
            "definite": false,
            "start": 763,
            "end": 805
          }
        ],
        "declare": false,
        "start": 759,
        "end": 805
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 808,
        "end": 810
      },
      "start": 754,
      "end": 810
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr2",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 824
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 832,
                    "end": 833
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 834,
                        "end": 840
                      }
                    ],
                    "start": 833,
                    "end": 841
                  },
                  "arguments": [],
                  "start": 828,
                  "end": 843
                }
              ],
              "start": 827,
              "end": 844
            },
            "definite": false,
            "start": 820,
            "end": 844
          }
        ],
        "declare": false,
        "start": 816,
        "end": 844
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 847,
        "end": 849
      },
      "start": 812,
      "end": 849
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr2",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 863
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 875
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 877
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 878,
                          "end": 884
                        }
                      ],
                      "start": 877,
                      "end": 885
                    },
                    "start": 876,
                    "end": 885
                  }
                ],
                "start": 875,
                "end": 886
              },
              "arguments": [],
              "start": 866,
              "end": 888
            },
            "definite": false,
            "start": 859,
            "end": 888
          }
        ],
        "declare": false,
        "start": 855,
        "end": 888
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 891,
        "end": 893
      },
      "start": 850,
      "end": 893
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 914
                  },
                  "typeArguments": null,
                  "start": 906,
                  "end": 914
                },
                "start": 904,
                "end": 914
              },
              "start": 903,
              "end": 914
            },
            "init": null,
            "definite": false,
            "start": 903,
            "end": 914
          }
        ],
        "declare": false,
        "start": 899,
        "end": 914
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 917,
        "end": 919
      },
      "start": 895,
      "end": 919
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 930
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 933,
                "end": 934
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 936
              },
              "optional": false,
              "computed": false,
              "start": 933,
              "end": 936
            },
            "definite": false,
            "start": 929,
            "end": 936
          }
        ],
        "declare": false,
        "start": 925,
        "end": 936
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 939,
        "end": 941
      },
      "start": 920,
      "end": 941
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 941
}
```
