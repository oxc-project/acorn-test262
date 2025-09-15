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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
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
                "start": 222,
                "end": 223
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
                      "start": 234,
                      "end": 238
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 240,
                        "end": 246
                      },
                      "start": 238,
                      "end": 246
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
                    "start": 234,
                    "end": 247
                  }
                ],
                "start": 224,
                "end": 253
              },
              "abstract": false,
              "declare": false,
              "start": 216,
              "end": 253
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 209,
            "end": 253
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
                "start": 275,
                "end": 277
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
                      "start": 281,
                      "end": 287
                    },
                    "start": 279,
                    "end": 287
                  },
                  "start": 278,
                  "end": 287
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 290,
                  "end": 296
                },
                "start": 288,
                "end": 296
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
                          "start": 306,
                          "end": 307
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 308,
                          "end": 316
                        },
                        "optional": false,
                        "computed": false,
                        "start": 306,
                        "end": 316
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 306,
                      "end": 318
                    },
                    "start": 299,
                    "end": 319
                  }
                ],
                "start": 297,
                "end": 321
              },
              "expression": false,
              "start": 266,
              "end": 321
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 259,
            "end": 321
          }
        ],
        "start": 203,
        "end": 323
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 323
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
              "name": "aNumber",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 342,
                  "end": 348
                },
                "start": 340,
                "end": 348
              },
              "start": 333,
              "end": 348
            },
            "init": {
              "type": "Literal",
              "value": 9.9,
              "raw": "9.9",
              "start": 351,
              "end": 354
            },
            "definite": false,
            "start": 333,
            "end": 354
          }
        ],
        "declare": false,
        "start": 329,
        "end": 354
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 357,
        "end": 359
      },
      "start": 325,
      "end": 359
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
              "name": "aString",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 378,
                  "end": 384
                },
                "start": 376,
                "end": 384
              },
              "start": 369,
              "end": 384
            },
            "init": {
              "type": "Literal",
              "value": "this is a string",
              "raw": "'this is a string'",
              "start": 387,
              "end": 405
            },
            "definite": false,
            "start": 369,
            "end": 405
          }
        ],
        "declare": false,
        "start": 365,
        "end": 405
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 408,
        "end": 410
      },
      "start": 361,
      "end": 410
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
                    "start": 426,
                    "end": 430
                  },
                  "typeArguments": null,
                  "start": 426,
                  "end": 430
                },
                "start": 424,
                "end": 430
              },
              "start": 419,
              "end": 430
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 441
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 442,
                  "end": 444
                }
              ],
              "start": 433,
              "end": 445
            },
            "definite": false,
            "start": 419,
            "end": 445
          }
        ],
        "declare": false,
        "start": 415,
        "end": 445
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 448,
        "end": 450
      },
      "start": 411,
      "end": 450
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
              "name": "anObject",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 475
                  },
                  "typeArguments": null,
                  "start": 469,
                  "end": 475
                },
                "start": 467,
                "end": 475
              },
              "start": 459,
              "end": 475
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 488
              },
              "typeArguments": null,
              "arguments": [],
              "start": 478,
              "end": 490
            },
            "definite": false,
            "start": 459,
            "end": 490
          }
        ],
        "declare": false,
        "start": 455,
        "end": 490
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 493,
        "end": 495
      },
      "start": 451,
      "end": 495
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
              "name": "anAny",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 512,
                  "end": 515
                },
                "start": 510,
                "end": 515
              },
              "start": 505,
              "end": 515
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 518,
              "end": 522
            },
            "definite": false,
            "start": 505,
            "end": 522
          }
        ],
        "declare": false,
        "start": 501,
        "end": 522
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 525,
        "end": 527
      },
      "start": 497,
      "end": 527
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
              "name": "aSecondAny",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 548,
                  "end": 551
                },
                "start": 546,
                "end": 551
              },
              "start": 536,
              "end": 551
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 563
            },
            "definite": false,
            "start": 536,
            "end": 563
          }
        ],
        "declare": false,
        "start": 532,
        "end": 563
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 566,
        "end": 568
      },
      "start": 528,
      "end": 568
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
              "name": "aVoid",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 584,
                  "end": 588
                },
                "start": 582,
                "end": 588
              },
              "start": 577,
              "end": 588
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 600
            },
            "definite": false,
            "start": 577,
            "end": 600
          }
        ],
        "declare": false,
        "start": 573,
        "end": 600
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 603,
        "end": 605
      },
      "start": 569,
      "end": 605
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
                    "start": 628,
                    "end": 629
                  },
                  "typeArguments": null,
                  "start": 628,
                  "end": 629
                },
                "start": 626,
                "end": 629
              },
              "start": 615,
              "end": 629
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 636,
                "end": 637
              },
              "typeArguments": null,
              "arguments": [],
              "start": 632,
              "end": 639
            },
            "definite": false,
            "start": 615,
            "end": 639
          }
        ],
        "declare": false,
        "start": 611,
        "end": 639
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 642,
        "end": 644
      },
      "start": 607,
      "end": 644
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
                    "start": 661,
                    "end": 662
                  },
                  "typeArguments": null,
                  "start": 661,
                  "end": 662
                },
                "start": 659,
                "end": 662
              },
              "start": 653,
              "end": 662
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 669,
                "end": 670
              },
              "typeArguments": null,
              "arguments": [],
              "start": 665,
              "end": 672
            },
            "definite": false,
            "start": 653,
            "end": 672
          }
        ],
        "declare": false,
        "start": 649,
        "end": 672
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 675,
        "end": 677
      },
      "start": 645,
      "end": 677
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
                    "start": 701,
                    "end": 702
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 703,
                        "end": 709
                      }
                    ],
                    "start": 702,
                    "end": 710
                  },
                  "start": 701,
                  "end": 710
                },
                "start": 699,
                "end": 710
              },
              "start": 686,
              "end": 710
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 718
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 719,
                    "end": 725
                  }
                ],
                "start": 718,
                "end": 726
              },
              "arguments": [],
              "start": 713,
              "end": 728
            },
            "definite": false,
            "start": 686,
            "end": 728
          }
        ],
        "declare": false,
        "start": 682,
        "end": 728
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 731,
        "end": 733
      },
      "start": 678,
      "end": 733
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
                    "start": 759,
                    "end": 760
                  },
                  "typeArguments": null,
                  "start": 759,
                  "end": 760
                },
                "start": 757,
                "end": 760
              },
              "start": 742,
              "end": 760
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
                    "start": 765,
                    "end": 767
                  },
                  "value": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 769,
                    "end": 771
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 765,
                  "end": 771
                }
              ],
              "start": 763,
              "end": 773
            },
            "definite": false,
            "start": 742,
            "end": 773
          }
        ],
        "declare": false,
        "start": 738,
        "end": 773
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 776,
        "end": 778
      },
      "start": 734,
      "end": 778
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
                        "start": 811,
                        "end": 813
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 815,
                          "end": 821
                        },
                        "start": 813,
                        "end": 821
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 811,
                      "end": 821
                    }
                  ],
                  "start": 809,
                  "end": 823
                },
                "start": 807,
                "end": 823
              },
              "start": 787,
              "end": 823
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 831
              },
              "typeArguments": null,
              "arguments": [],
              "start": 826,
              "end": 833
            },
            "definite": false,
            "start": 787,
            "end": 833
          }
        ],
        "declare": false,
        "start": 783,
        "end": 833
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 836,
        "end": 838
      },
      "start": 779,
      "end": 838
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
                    "start": 866,
                    "end": 867
                  },
                  "typeArguments": null,
                  "start": 859,
                  "end": 867
                },
                "start": 857,
                "end": 867
              },
              "start": 848,
              "end": 867
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 871
            },
            "definite": false,
            "start": 848,
            "end": 871
          }
        ],
        "declare": false,
        "start": 844,
        "end": 871
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 874,
        "end": 876
      },
      "start": 840,
      "end": 876
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
                          "start": 906,
                          "end": 912
                        },
                        "start": 904,
                        "end": 912
                      },
                      "start": 903,
                      "end": 912
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 917,
                      "end": 923
                    },
                    "start": 914,
                    "end": 923
                  },
                  "start": 902,
                  "end": 923
                },
                "start": 900,
                "end": 923
              },
              "start": 885,
              "end": 923
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 926,
              "end": 927
            },
            "definite": false,
            "start": 885,
            "end": 927
          }
        ],
        "declare": false,
        "start": 881,
        "end": 927
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 930,
        "end": 932
      },
      "start": 877,
      "end": 932
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
                    "start": 957,
                    "end": 958
                  },
                  "typeArguments": null,
                  "start": 950,
                  "end": 958
                },
                "start": 948,
                "end": 958
              },
              "start": 941,
              "end": 958
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
                  "start": 962,
                  "end": 963
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 968,
                "end": 969
              },
              "id": null,
              "generator": false,
              "start": 961,
              "end": 969
            },
            "definite": false,
            "start": 941,
            "end": 969
          }
        ],
        "declare": false,
        "start": 937,
        "end": 969
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 972,
        "end": 974
      },
      "start": 933,
      "end": 974
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
                    "start": 1000,
                    "end": 1001
                  },
                  "typeArguments": null,
                  "start": 993,
                  "end": 1001
                },
                "start": 991,
                "end": 1001
              },
              "start": 984,
              "end": 1001
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1005
            },
            "definite": false,
            "start": 984,
            "end": 1005
          }
        ],
        "declare": false,
        "start": 980,
        "end": 1005
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1008,
        "end": 1010
      },
      "start": 976,
      "end": 1010
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
                      "start": 1035,
                      "end": 1036
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1037,
                      "end": 1038
                    },
                    "start": 1035,
                    "end": 1038
                  },
                  "typeArguments": null,
                  "start": 1035,
                  "end": 1038
                },
                "start": 1033,
                "end": 1038
              },
              "start": 1019,
              "end": 1038
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1045,
                  "end": 1046
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1048
                },
                "optional": false,
                "computed": false,
                "start": 1045,
                "end": 1048
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1041,
              "end": 1050
            },
            "definite": false,
            "start": 1019,
            "end": 1050
          }
        ],
        "declare": false,
        "start": 1015,
        "end": 1050
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1053,
        "end": 1055
      },
      "start": 1011,
      "end": 1055
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
                      "start": 1090,
                      "end": 1091
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1092,
                      "end": 1094
                    },
                    "start": 1090,
                    "end": 1094
                  },
                  "typeArguments": null,
                  "start": 1083,
                  "end": 1094
                },
                "start": 1081,
                "end": 1094
              },
              "start": 1064,
              "end": 1094
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
                  "start": 1098,
                  "end": 1099
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "this is a string",
                "raw": "'this is a string'",
                "start": 1104,
                "end": 1122
              },
              "id": null,
              "generator": false,
              "start": 1097,
              "end": 1122
            },
            "definite": false,
            "start": 1064,
            "end": 1122
          }
        ],
        "declare": false,
        "start": 1060,
        "end": 1122
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1125,
        "end": 1127
      },
      "start": 1056,
      "end": 1127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1127
}
```
