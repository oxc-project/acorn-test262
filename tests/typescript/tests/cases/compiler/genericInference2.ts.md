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
        "name": "ko",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 62
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
                      "start": 63,
                      "end": 64
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 63,
                    "end": 64
                  }
                ],
                "start": 62,
                "end": 65
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
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
                          "start": 84,
                          "end": 85
                        },
                        "typeArguments": null,
                        "start": 84,
                        "end": 85
                      },
                      "start": 82,
                      "end": 85
                    },
                    "start": 80,
                    "end": 86
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 107,
                              "end": 108
                            },
                            "typeArguments": null,
                            "start": 107,
                            "end": 108
                          },
                          "start": 105,
                          "end": 108
                        },
                        "start": 100,
                        "end": 108
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 111,
                        "end": 114
                      },
                      "start": 109,
                      "end": 114
                    },
                    "start": 99,
                    "end": 115
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      },
                      "start": 129,
                      "end": 137
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 128,
                    "end": 138
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 154,
                        "end": 161
                      },
                      "start": 152,
                      "end": 161
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 151,
                    "end": 162
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 176
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
                          "start": 178,
                          "end": 179
                        },
                        "typeArguments": null,
                        "start": 178,
                        "end": 179
                      },
                      "start": 176,
                      "end": 179
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 175,
                    "end": 180
                  }
                ],
                "start": 66,
                "end": 190
              },
              "declare": false,
              "start": 42,
              "end": 190
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 35,
            "end": 190
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 225
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
                      "start": 226,
                      "end": 227
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 226,
                    "end": 227
                  }
                ],
                "start": 225,
                "end": 228
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
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
                        "start": 236,
                        "end": 237
                      },
                      "typeArguments": null,
                      "start": 236,
                      "end": 237
                    },
                    "start": 234,
                    "end": 237
                  },
                  "start": 229,
                  "end": 237
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 240,
                    "end": 250
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
                          "start": 251,
                          "end": 252
                        },
                        "typeArguments": null,
                        "start": 251,
                        "end": 252
                      }
                    ],
                    "start": 250,
                    "end": 253
                  },
                  "start": 240,
                  "end": 253
                },
                "start": 238,
                "end": 253
              },
              "body": null,
              "expression": false,
              "start": 206,
              "end": 254
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 199,
            "end": 254
          }
        ],
        "start": 25,
        "end": 261
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 4,
      "end": 261
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 272
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 289
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ko",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 293
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 304
                    },
                    "optional": false,
                    "computed": false,
                    "start": 291,
                    "end": 304
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Bob",
                      "raw": "\"Bob\"",
                      "start": 305,
                      "end": 310
                    }
                  ],
                  "optional": false,
                  "start": 291,
                  "end": 311
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 285,
                "end": 311
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "age",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 324
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ko",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 328
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 339
                    },
                    "optional": false,
                    "computed": false,
                    "start": 326,
                    "end": 339
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 37,
                      "raw": "37",
                      "start": 340,
                      "end": 342
                    }
                  ],
                  "optional": false,
                  "start": 326,
                  "end": 343
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 321,
                "end": 343
              }
            ],
            "start": 275,
            "end": 350
          },
          "definite": false,
          "start": 271,
          "end": 350
        }
      ],
      "declare": false,
      "start": 267,
      "end": 351
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
            "name": "x_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 364
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 373
                },
                "optional": false,
                "computed": false,
                "start": 367,
                "end": 373
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 367,
              "end": 375
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 382
            },
            "optional": false,
            "computed": false,
            "start": 367,
            "end": 382
          },
          "definite": false,
          "start": 361,
          "end": 382
        }
      ],
      "declare": false,
      "start": 357,
      "end": 383
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
            "name": "age_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 420
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 424
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 428
              },
              "optional": false,
              "computed": false,
              "start": 423,
              "end": 428
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 423,
            "end": 430
          },
          "definite": false,
          "start": 415,
          "end": 430
        }
      ],
      "declare": false,
      "start": 411,
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
            "name": "name_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 469
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 473
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 478
              },
              "optional": false,
              "computed": false,
              "start": 472,
              "end": 478
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Robert",
                "raw": "\"Robert\"",
                "start": 479,
                "end": 487
              }
            ],
            "optional": false,
            "start": 472,
            "end": 488
          },
          "definite": false,
          "start": 463,
          "end": 488
        }
      ],
      "declare": false,
      "start": 459,
      "end": 489
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
            "name": "zz_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 522
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 526
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 531
              },
              "optional": false,
              "computed": false,
              "start": 525,
              "end": 531
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 533
            },
            "optional": false,
            "computed": false,
            "start": 525,
            "end": 533
          },
          "definite": false,
          "start": 518,
          "end": 533
        }
      ],
      "declare": false,
      "start": 514,
      "end": 534
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
            "name": "yy_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 570
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 574
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 579
              },
              "optional": false,
              "computed": false,
              "start": 573,
              "end": 579
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 581
            },
            "optional": false,
            "computed": false,
            "start": 573,
            "end": 581
          },
          "definite": false,
          "start": 566,
          "end": 581
        }
      ],
      "declare": false,
      "start": 562,
      "end": 582
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
            "name": "rr_v",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 619
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 623
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 628
              },
              "optional": false,
              "computed": false,
              "start": 622,
              "end": 628
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 630
            },
            "optional": false,
            "computed": false,
            "start": 622,
            "end": 630
          },
          "definite": false,
          "start": 615,
          "end": 630
        }
      ],
      "declare": false,
      "start": 611,
      "end": 631
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 4,
  "end": 654
}
```
