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
          }
        ],
        "start": 54,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 73
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
        "start": 81,
        "end": 82
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
              "start": 83,
              "end": 84
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 84
          }
        ],
        "start": 82,
        "end": 85
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
              "start": 91,
              "end": 97
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
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 99,
                "end": 100
              },
              "start": 97,
              "end": 100
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
            "start": 91,
            "end": 101
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
              "start": 106,
              "end": 113
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
                  "start": 115,
                  "end": 116
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
                        "start": 117,
                        "end": 118
                      },
                      "typeArguments": null,
                      "start": 117,
                      "end": 118
                    }
                  ],
                  "start": 116,
                  "end": 119
                },
                "start": 115,
                "end": 119
              },
              "start": 113,
              "end": 119
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
            "start": 106,
            "end": 120
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
              "start": 125,
              "end": 132
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
                  "start": 134,
                  "end": 135
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
                        "start": 136,
                        "end": 137
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
                              "start": 138,
                              "end": 139
                            },
                            "typeArguments": null,
                            "start": 138,
                            "end": 139
                          }
                        ],
                        "start": 137,
                        "end": 140
                      },
                      "start": 136,
                      "end": 140
                    }
                  ],
                  "start": 135,
                  "end": 141
                },
                "start": 134,
                "end": 141
              },
              "start": 132,
              "end": 141
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
            "start": 125,
            "end": 141
          }
        ],
        "start": 85,
        "end": 143
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 155
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
              "start": 159,
              "end": 165
            },
            "start": 157,
            "end": 165
          },
          "start": 156,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 168,
          "end": 174
        },
        "start": 166,
        "end": 174
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
              "start": 184,
              "end": 186
            },
            "start": 177,
            "end": 187
          }
        ],
        "start": 175,
        "end": 189
      },
      "expression": false,
      "start": 145,
      "end": 189
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 201
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
              "start": 205,
              "end": 211
            },
            "start": 203,
            "end": 211
          },
          "start": 202,
          "end": 211
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 214,
          "end": 221
        },
        "start": 212,
        "end": 221
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 232
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 235,
                "end": 237
              },
              "start": 231,
              "end": 237
            },
            "start": 224,
            "end": 238
          }
        ],
        "start": 222,
        "end": 240
      },
      "expression": false,
      "start": 190,
      "end": 240
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 253
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
                "start": 273,
                "end": 274
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
                      "start": 285,
                      "end": 289
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 291,
                        "end": 297
                      },
                      "start": 289,
                      "end": 297
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
                    "start": 285,
                    "end": 298
                  }
                ],
                "start": 275,
                "end": 304
              },
              "abstract": false,
              "declare": false,
              "start": 267,
              "end": 304
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 260,
            "end": 304
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
                "start": 326,
                "end": 328
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
                      "start": 332,
                      "end": 338
                    },
                    "start": 330,
                    "end": 338
                  },
                  "start": 329,
                  "end": 338
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 341,
                  "end": 347
                },
                "start": 339,
                "end": 347
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
                          "start": 357,
                          "end": 358
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 359,
                          "end": 367
                        },
                        "optional": false,
                        "computed": false,
                        "start": 357,
                        "end": 367
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 357,
                      "end": 369
                    },
                    "start": 350,
                    "end": 370
                  }
                ],
                "start": 348,
                "end": 372
              },
              "expression": false,
              "start": 317,
              "end": 372
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 310,
            "end": 372
          }
        ],
        "start": 254,
        "end": 374
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 242,
      "end": 374
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 387
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
                "start": 407,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 421
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 423,
                        "end": 429
                      },
                      "start": 421,
                      "end": 429
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
                    "start": 419,
                    "end": 430
                  }
                ],
                "start": 409,
                "end": 436
              },
              "abstract": false,
              "declare": false,
              "start": 401,
              "end": 436
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 394,
            "end": 436
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
                "start": 458,
                "end": 460
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
                      "start": 464,
                      "end": 470
                    },
                    "start": 462,
                    "end": 470
                  },
                  "start": 461,
                  "end": 470
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 473,
                  "end": 479
                },
                "start": 471,
                "end": 479
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
                          "start": 489,
                          "end": 490
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 491,
                          "end": 499
                        },
                        "optional": false,
                        "computed": false,
                        "start": 489,
                        "end": 499
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 489,
                      "end": 501
                    },
                    "start": 482,
                    "end": 502
                  }
                ],
                "start": 480,
                "end": 504
              },
              "expression": false,
              "start": 449,
              "end": 504
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 442,
            "end": 504
          }
        ],
        "start": 388,
        "end": 506
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 376,
      "end": 506
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
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 521,
                "end": 527
              },
              "start": 519,
              "end": 527
            },
            "start": 512,
            "end": 527
          },
          "init": {
            "type": "Literal",
            "value": "this is a string",
            "raw": "'this is a string'",
            "start": 530,
            "end": 548
          },
          "definite": false,
          "start": 512,
          "end": 548
        }
      ],
      "declare": false,
      "start": 508,
      "end": 549
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
            "name": "aString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 563,
                "end": 569
              },
              "start": 561,
              "end": 569
            },
            "start": 554,
            "end": 569
          },
          "init": {
            "type": "Literal",
            "value": 9.9,
            "raw": "9.9",
            "start": 572,
            "end": 575
          },
          "definite": false,
          "start": 554,
          "end": 575
        }
      ],
      "declare": false,
      "start": 550,
      "end": 576
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
            "name": "aDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 588,
                  "end": 592
                },
                "typeArguments": null,
                "start": 588,
                "end": 592
              },
              "start": 586,
              "end": 592
            },
            "start": 581,
            "end": 592
          },
          "init": {
            "type": "Literal",
            "value": 9.9,
            "raw": "9.9",
            "start": 595,
            "end": 598
          },
          "definite": false,
          "start": 581,
          "end": 598
        }
      ],
      "declare": false,
      "start": 577,
      "end": 599
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
            "name": "aVoid",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 612,
                "end": 616
              },
              "start": 610,
              "end": 616
            },
            "start": 605,
            "end": 616
          },
          "init": {
            "type": "Literal",
            "value": 9.9,
            "raw": "9.9",
            "start": 619,
            "end": 622
          },
          "definite": false,
          "start": 605,
          "end": 622
        }
      ],
      "declare": false,
      "start": 601,
      "end": 623
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
            "name": "anInterface",
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
                  "start": 642,
                  "end": 643
                },
                "typeArguments": null,
                "start": 642,
                "end": 643
              },
              "start": 640,
              "end": 643
            },
            "start": 629,
            "end": 643
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 651
            },
            "typeArguments": null,
            "arguments": [],
            "start": 646,
            "end": 653
          },
          "definite": false,
          "start": 629,
          "end": 653
        }
      ],
      "declare": false,
      "start": 625,
      "end": 654
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
            "name": "aClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 668
                },
                "typeArguments": null,
                "start": 667,
                "end": 668
              },
              "start": 665,
              "end": 668
            },
            "start": 659,
            "end": 668
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "typeArguments": null,
            "arguments": [],
            "start": 671,
            "end": 678
          },
          "definite": false,
          "start": 659,
          "end": 678
        }
      ],
      "declare": false,
      "start": 655,
      "end": 679
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
            "name": "aGenericClass",
            "optional": false,
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
                  "start": 699,
                  "end": 700
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 701,
                      "end": 707
                    }
                  ],
                  "start": 700,
                  "end": 708
                },
                "start": 699,
                "end": 708
              },
              "start": 697,
              "end": 708
            },
            "start": 684,
            "end": 708
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 716
            },
            "typeArguments": null,
            "arguments": [],
            "start": 711,
            "end": 718
          },
          "definite": false,
          "start": 684,
          "end": 718
        }
      ],
      "declare": false,
      "start": 680,
      "end": 719
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
            "name": "anObjectLiteral",
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
                  "start": 741,
                  "end": 742
                },
                "typeArguments": null,
                "start": 741,
                "end": 742
              },
              "start": 739,
              "end": 742
            },
            "start": 724,
            "end": 742
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
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 749
                },
                "value": {
                  "type": "Literal",
                  "value": "a string",
                  "raw": "'a string'",
                  "start": 751,
                  "end": 761
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 747,
                "end": 761
              }
            ],
            "start": 745,
            "end": 763
          },
          "definite": false,
          "start": 724,
          "end": 763
        }
      ],
      "declare": false,
      "start": 720,
      "end": 764
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
            "name": "anOtherObjectLiteral",
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 793,
                      "end": 795
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 797,
                        "end": 803
                      },
                      "start": 795,
                      "end": 803
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 793,
                    "end": 803
                  }
                ],
                "start": 791,
                "end": 805
              },
              "start": 789,
              "end": 805
            },
            "start": 769,
            "end": 805
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 813
            },
            "typeArguments": null,
            "arguments": [],
            "start": 808,
            "end": 815
          },
          "definite": false,
          "start": 769,
          "end": 815
        }
      ],
      "declare": false,
      "start": 765,
      "end": 816
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
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 841
                },
                "typeArguments": null,
                "start": 833,
                "end": 841
              },
              "start": 831,
              "end": 841
            },
            "start": 822,
            "end": 841
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 844,
            "end": 846
          },
          "definite": false,
          "start": 822,
          "end": 846
        }
      ],
      "declare": false,
      "start": 818,
      "end": 847
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
            "name": "anOtherFunction",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 873,
                        "end": 879
                      },
                      "start": 871,
                      "end": 879
                    },
                    "start": 870,
                    "end": 879
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 884,
                    "end": 890
                  },
                  "start": 881,
                  "end": 890
                },
                "start": 869,
                "end": 890
              },
              "start": 867,
              "end": 890
            },
            "start": 852,
            "end": 890
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 895
          },
          "definite": false,
          "start": 852,
          "end": 895
        }
      ],
      "declare": false,
      "start": 848,
      "end": 896
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
            "name": "aLambda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 917,
                  "end": 918
                },
                "typeArguments": null,
                "start": 910,
                "end": 918
              },
              "start": 908,
              "end": 918
            },
            "start": 901,
            "end": 918
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
                "typeAnnotation": null,
                "start": 922,
                "end": 923
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "a string",
              "raw": "'a string'",
              "start": 928,
              "end": 938
            },
            "id": null,
            "generator": false,
            "start": 921,
            "end": 938
          },
          "definite": false,
          "start": 901,
          "end": 938
        }
      ],
      "declare": false,
      "start": 897,
      "end": 939
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
            "name": "aModule",
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
                  "start": 961,
                  "end": 962
                },
                "typeArguments": null,
                "start": 954,
                "end": 962
              },
              "start": 952,
              "end": 962
            },
            "start": 945,
            "end": 962
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 966
          },
          "definite": false,
          "start": 945,
          "end": 966
        }
      ],
      "declare": false,
      "start": 941,
      "end": 967
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
            "name": "aClassInModule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 988,
                    "end": 989
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 990,
                    "end": 991
                  },
                  "start": 988,
                  "end": 991
                },
                "typeArguments": null,
                "start": 988,
                "end": 991
              },
              "start": 986,
              "end": 991
            },
            "start": 972,
            "end": 991
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 998,
                "end": 999
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1000,
                "end": 1001
              },
              "optional": false,
              "computed": false,
              "start": 998,
              "end": 1001
            },
            "typeArguments": null,
            "arguments": [],
            "start": 994,
            "end": 1003
          },
          "definite": false,
          "start": 972,
          "end": 1003
        }
      ],
      "declare": false,
      "start": 968,
      "end": 1004
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
            "name": "aFunctionInModule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1035,
                    "end": 1036
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1037,
                    "end": 1039
                  },
                  "start": 1035,
                  "end": 1039
                },
                "typeArguments": null,
                "start": 1028,
                "end": 1039
              },
              "start": 1026,
              "end": 1039
            },
            "start": 1009,
            "end": 1039
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1042,
            "end": 1044
          },
          "definite": false,
          "start": 1009,
          "end": 1044
        }
      ],
      "declare": false,
      "start": 1005,
      "end": 1045
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1046
}
```
