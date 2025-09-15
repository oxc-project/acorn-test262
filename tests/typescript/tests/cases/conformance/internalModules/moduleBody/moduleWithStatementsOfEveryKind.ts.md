__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 29
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 31,
                      "end": 37
                    },
                    "start": 29,
                    "end": 37
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
                  "start": 28,
                  "end": 37
                }
              ],
              "start": 26,
              "end": 39
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 39
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 52
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
                    "start": 53,
                    "end": 54
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 53,
                  "end": 54
                }
              ],
              "start": 52,
              "end": 55
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 59
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
                        "start": 61,
                        "end": 62
                      },
                      "typeArguments": null,
                      "start": 61,
                      "end": 62
                    },
                    "start": 59,
                    "end": 62
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
                  "start": 58,
                  "end": 62
                }
              ],
              "start": 56,
              "end": 64
            },
            "abstract": false,
            "declare": false,
            "start": 44,
            "end": 64
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
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
                    "start": 83,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 87,
                      "end": 93
                    },
                    "start": 85,
                    "end": 93
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 83,
                  "end": 93
                }
              ],
              "start": 81,
              "end": 95
            },
            "declare": false,
            "start": 69,
            "end": 95
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 119
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 120,
                  "end": 126
                }
              ],
              "start": 119,
              "end": 127
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "typeArguments": null,
                "start": 139,
                "end": 140
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
                    "start": 143,
                    "end": 145
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 147,
                      "end": 153
                    },
                    "start": 145,
                    "end": 153
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
                  "start": 143,
                  "end": 153
                }
              ],
              "start": 141,
              "end": 155
            },
            "abstract": false,
            "declare": false,
            "start": 101,
            "end": 155
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "BB",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 168
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
                    "start": 169,
                    "end": 170
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 169,
                  "end": 170
                }
              ],
              "start": 168,
              "end": 171
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 194
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 196,
                      "end": 202
                    },
                    "start": 194,
                    "end": 202
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
                  "start": 192,
                  "end": 203
                }
              ],
              "start": 182,
              "end": 209
            },
            "abstract": false,
            "declare": false,
            "start": 160,
            "end": 209
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Module",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 231
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 249
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 252,
                          "end": 253
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 255,
                            "end": 261
                          },
                          "start": 253,
                          "end": 261
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
                        "start": 252,
                        "end": 261
                      }
                    ],
                    "start": 250,
                    "end": 263
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 242,
                  "end": 263
                }
              ],
              "start": 232,
              "end": 269
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 215,
            "end": 269
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 284
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Blue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 291
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 287,
                  "end": 291
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Red",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 296
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 293,
                  "end": 296
                }
              ],
              "start": 285,
              "end": 298
            },
            "const": false,
            "declare": false,
            "start": 274,
            "end": 298
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "init": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 311,
                  "end": 313
                },
                "definite": false,
                "start": 307,
                "end": 313
              }
            ],
            "declare": false,
            "start": 303,
            "end": 314
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "start": 333,
                    "end": 339
                  },
                  "start": 331,
                  "end": 339
                },
                "start": 330,
                "end": 339
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 366,
                    "end": 367
                  },
                  "start": 359,
                  "end": 368
                }
              ],
              "start": 349,
              "end": 374
            },
            "expression": false,
            "start": 319,
            "end": 374
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
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 391
                        },
                        "typeArguments": null,
                        "start": 390,
                        "end": 391
                      },
                      "start": 390,
                      "end": 393
                    },
                    "start": 388,
                    "end": 393
                  },
                  "start": 383,
                  "end": 393
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 396,
                  "end": 400
                },
                "definite": false,
                "start": 383,
                "end": 400
              }
            ],
            "declare": false,
            "start": 379,
            "end": 401
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
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 412
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 419,
                          "end": 425
                        },
                        "start": 417,
                        "end": 425
                      },
                      "start": 416,
                      "end": 425
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "hello ",
                            "raw": "'hello '",
                            "start": 447,
                            "end": 455
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 459
                          },
                          "start": 447,
                          "end": 459
                        },
                        "start": 440,
                        "end": 460
                      }
                    ],
                    "start": 430,
                    "end": 466
                  },
                  "id": null,
                  "generator": false,
                  "start": 415,
                  "end": 466
                },
                "definite": false,
                "start": 410,
                "end": 466
              }
            ],
            "declare": false,
            "start": 406,
            "end": 466
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
                  "name": "ol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 477
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 483
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 485,
                        "end": 492
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 482,
                      "end": 492
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 494,
                        "end": 496
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 498,
                        "end": 499
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 494,
                      "end": 499
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isvalid",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 501,
                        "end": 508
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 510,
                        "end": 514
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 501,
                      "end": 514
                    }
                  ],
                  "start": 480,
                  "end": 516
                },
                "definite": false,
                "start": 475,
                "end": 516
              }
            ],
            "declare": false,
            "start": 471,
            "end": 517
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DC",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 539
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
                    "start": 557,
                    "end": 558
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 560,
                      "end": 566
                    },
                    "start": 558,
                    "end": 566
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
                  "start": 550,
                  "end": 567
                }
              ],
              "start": 540,
              "end": 573
            },
            "abstract": false,
            "declare": true,
            "start": 523,
            "end": 573
          }
        ],
        "start": 12,
        "end": 575
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 575
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 587,
        "end": 588
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
                "start": 608,
                "end": 609
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 612,
                      "end": 613
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 615,
                        "end": 621
                      },
                      "start": 613,
                      "end": 621
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
                    "start": 612,
                    "end": 621
                  }
                ],
                "start": 610,
                "end": 623
              },
              "abstract": false,
              "declare": false,
              "start": 602,
              "end": 623
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 595,
            "end": 623
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 643
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
                      "start": 644,
                      "end": 645
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 644,
                    "end": 645
                  }
                ],
                "start": 643,
                "end": 646
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 650
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
                          "start": 652,
                          "end": 653
                        },
                        "typeArguments": null,
                        "start": 652,
                        "end": 653
                      },
                      "start": 650,
                      "end": 653
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
                    "start": 649,
                    "end": 653
                  }
                ],
                "start": 647,
                "end": 655
              },
              "abstract": false,
              "declare": false,
              "start": 635,
              "end": 655
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 628,
            "end": 655
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 678
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
                      "start": 681,
                      "end": 683
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 685,
                        "end": 691
                      },
                      "start": 683,
                      "end": 691
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 681,
                    "end": 691
                  }
                ],
                "start": 679,
                "end": 693
              },
              "declare": false,
              "start": 667,
              "end": 693
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 660,
            "end": 693
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 713
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 724
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 725,
                    "end": 731
                  }
                ],
                "start": 724,
                "end": 732
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 745
                  },
                  "typeArguments": null,
                  "start": 744,
                  "end": 745
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
                      "start": 748,
                      "end": 750
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 752,
                        "end": 758
                      },
                      "start": 750,
                      "end": 758
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
                    "start": 748,
                    "end": 758
                  }
                ],
                "start": 746,
                "end": 760
              },
              "abstract": false,
              "declare": false,
              "start": 706,
              "end": 760
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 699,
            "end": 760
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "BB",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 780
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
                      "start": 781,
                      "end": 782
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 781,
                    "end": 782
                  }
                ],
                "start": 780,
                "end": 783
              },
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 793
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 806
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 808,
                        "end": 814
                      },
                      "start": 806,
                      "end": 814
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
                    "start": 804,
                    "end": 815
                  }
                ],
                "start": 794,
                "end": 821
              },
              "abstract": false,
              "declare": false,
              "start": 772,
              "end": 821
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 765,
            "end": 821
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Module",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 850
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 867,
                      "end": 868
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 871,
                            "end": 872
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 874,
                              "end": 880
                            },
                            "start": 872,
                            "end": 880
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
                          "start": 871,
                          "end": 880
                        }
                      ],
                      "start": 869,
                      "end": 882
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 861,
                    "end": 882
                  }
                ],
                "start": 851,
                "end": 888
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 834,
              "end": 888
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 827,
            "end": 888
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 910
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 917
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 913,
                    "end": 917
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 922
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 919,
                    "end": 922
                  }
                ],
                "start": 911,
                "end": 924
              },
              "const": false,
              "declare": false,
              "start": 900,
              "end": 924
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 893,
            "end": 924
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 940,
                    "end": 941
                  },
                  "init": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 944,
                    "end": 946
                  },
                  "definite": false,
                  "start": 940,
                  "end": 946
                }
              ],
              "declare": false,
              "start": 936,
              "end": 947
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 929,
            "end": 947
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 969
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 973,
                      "end": 979
                    },
                    "start": 971,
                    "end": 979
                  },
                  "start": 970,
                  "end": 979
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 982,
                  "end": 988
                },
                "start": 980,
                "end": 988
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1006,
                      "end": 1007
                    },
                    "start": 999,
                    "end": 1008
                  }
                ],
                "start": 989,
                "end": 1014
              },
              "expression": false,
              "start": 959,
              "end": 1014
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 952,
            "end": 1014
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
                    "name": "array",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1037,
                            "end": 1038
                          },
                          "typeArguments": null,
                          "start": 1037,
                          "end": 1038
                        },
                        "start": 1037,
                        "end": 1040
                      },
                      "start": 1035,
                      "end": 1040
                    },
                    "start": 1030,
                    "end": 1040
                  },
                  "init": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1043,
                    "end": 1047
                  },
                  "definite": false,
                  "start": 1030,
                  "end": 1047
                }
              ],
              "declare": false,
              "start": 1026,
              "end": 1048
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1019,
            "end": 1048
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
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1064,
                    "end": 1066
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1073,
                            "end": 1079
                          },
                          "start": 1071,
                          "end": 1079
                        },
                        "start": 1070,
                        "end": 1079
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Literal",
                              "value": "hello ",
                              "raw": "'hello '",
                              "start": 1101,
                              "end": 1109
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1112,
                              "end": 1113
                            },
                            "start": 1101,
                            "end": 1113
                          },
                          "start": 1094,
                          "end": 1114
                        }
                      ],
                      "start": 1084,
                      "end": 1120
                    },
                    "id": null,
                    "generator": false,
                    "start": 1069,
                    "end": 1120
                  },
                  "definite": false,
                  "start": 1064,
                  "end": 1120
                }
              ],
              "declare": false,
              "start": 1060,
              "end": 1120
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1053,
            "end": 1120
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
                    "name": "ol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1138
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1143,
                          "end": 1144
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "'hello'",
                          "start": 1146,
                          "end": 1153
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1143,
                        "end": 1153
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1155,
                          "end": 1157
                        },
                        "value": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1159,
                          "end": 1160
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1155,
                        "end": 1160
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isvalid",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1162,
                          "end": 1169
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1171,
                          "end": 1175
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1162,
                        "end": 1175
                      }
                    ],
                    "start": 1141,
                    "end": 1177
                  },
                  "definite": false,
                  "start": 1136,
                  "end": 1177
                }
              ],
              "declare": false,
              "start": 1132,
              "end": 1178
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1125,
            "end": 1178
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1205,
                "end": 1207
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
                      "start": 1225,
                      "end": 1226
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1228,
                        "end": 1234
                      },
                      "start": 1226,
                      "end": 1234
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
                    "start": 1218,
                    "end": 1235
                  }
                ],
                "start": 1208,
                "end": 1241
              },
              "abstract": false,
              "declare": true,
              "start": 1191,
              "end": 1241
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1184,
            "end": 1241
          }
        ],
        "start": 589,
        "end": 1243
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 577,
      "end": 1243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1243
}
```
