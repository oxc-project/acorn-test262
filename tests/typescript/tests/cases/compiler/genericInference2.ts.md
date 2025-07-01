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
        "start": 19,
        "end": 21
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
                "start": 49,
                "end": 59
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
                      "start": 60,
                      "end": 61
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 60,
                    "end": 61
                  }
                ],
                "start": 59,
                "end": 62
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
                          "start": 81,
                          "end": 82
                        },
                        "typeArguments": null,
                        "start": 81,
                        "end": 82
                      },
                      "start": 79,
                      "end": 82
                    },
                    "start": 77,
                    "end": 83
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
                              "start": 104,
                              "end": 105
                            },
                            "typeArguments": null,
                            "start": 104,
                            "end": 105
                          },
                          "start": 102,
                          "end": 105
                        },
                        "start": 97,
                        "end": 105
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 108,
                        "end": 111
                      },
                      "start": 106,
                      "end": 111
                    },
                    "start": 96,
                    "end": 112
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
                      "start": 125,
                      "end": 126
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 128,
                        "end": 134
                      },
                      "start": 126,
                      "end": 134
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 125,
                    "end": 135
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
                      "start": 148,
                      "end": 149
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 151,
                        "end": 158
                      },
                      "start": 149,
                      "end": 158
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 148,
                    "end": 159
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
                      "start": 172,
                      "end": 173
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
                    "accessibility": null,
                    "static": false,
                    "start": 172,
                    "end": 177
                  }
                ],
                "start": 63,
                "end": 187
              },
              "declare": false,
              "start": 39,
              "end": 187
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 32,
            "end": 187
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
                "start": 212,
                "end": 222
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
                      "start": 223,
                      "end": 224
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 223,
                    "end": 224
                  }
                ],
                "start": 222,
                "end": 225
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
                        "start": 233,
                        "end": 234
                      },
                      "typeArguments": null,
                      "start": 233,
                      "end": 234
                    },
                    "start": 231,
                    "end": 234
                  },
                  "start": 226,
                  "end": 234
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
                    "start": 237,
                    "end": 247
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
                          "start": 248,
                          "end": 249
                        },
                        "typeArguments": null,
                        "start": 248,
                        "end": 249
                      }
                    ],
                    "start": 247,
                    "end": 250
                  },
                  "start": 237,
                  "end": 250
                },
                "start": 235,
                "end": 250
              },
              "body": null,
              "expression": false,
              "start": 203,
              "end": 251
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 196,
            "end": 251
          }
        ],
        "start": 22,
        "end": 258
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 4,
      "end": 258
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
            "start": 268,
            "end": 269
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
                  "start": 282,
                  "end": 286
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
                      "start": 288,
                      "end": 290
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 301
                    },
                    "optional": false,
                    "computed": false,
                    "start": 288,
                    "end": 301
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Bob",
                      "raw": "\"Bob\"",
                      "start": 302,
                      "end": 307
                    }
                  ],
                  "optional": false,
                  "start": 288,
                  "end": 308
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 282,
                "end": 308
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
                  "start": 318,
                  "end": 321
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
                      "start": 323,
                      "end": 325
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 336
                    },
                    "optional": false,
                    "computed": false,
                    "start": 323,
                    "end": 336
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 37,
                      "raw": "37",
                      "start": 337,
                      "end": 339
                    }
                  ],
                  "optional": false,
                  "start": 323,
                  "end": 340
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 318,
                "end": 340
              }
            ],
            "start": 272,
            "end": 347
          },
          "definite": false,
          "start": 268,
          "end": 347
        }
      ],
      "declare": false,
      "start": 264,
      "end": 348
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
            "start": 358,
            "end": 361
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
                  "start": 364,
                  "end": 365
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 370
                },
                "optional": false,
                "computed": false,
                "start": 364,
                "end": 370
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 364,
              "end": 372
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 379
            },
            "optional": false,
            "computed": false,
            "start": 364,
            "end": 379
          },
          "definite": false,
          "start": 358,
          "end": 379
        }
      ],
      "declare": false,
      "start": 354,
      "end": 380
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
            "start": 412,
            "end": 417
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
                "start": 420,
                "end": 421
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "age",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 425
              },
              "optional": false,
              "computed": false,
              "start": 420,
              "end": 425
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 420,
            "end": 427
          },
          "definite": false,
          "start": 412,
          "end": 427
        }
      ],
      "declare": false,
      "start": 408,
      "end": 428
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
            "start": 460,
            "end": 466
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
                "start": 469,
                "end": 470
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 475
              },
              "optional": false,
              "computed": false,
              "start": 469,
              "end": 475
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Robert",
                "raw": "\"Robert\"",
                "start": 476,
                "end": 484
              }
            ],
            "optional": false,
            "start": 469,
            "end": 485
          },
          "definite": false,
          "start": 460,
          "end": 485
        }
      ],
      "declare": false,
      "start": 456,
      "end": 486
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
            "start": 515,
            "end": 519
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
                "start": 522,
                "end": 523
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 524,
                "end": 528
              },
              "optional": false,
              "computed": false,
              "start": 522,
              "end": 528
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 530
            },
            "optional": false,
            "computed": false,
            "start": 522,
            "end": 530
          },
          "definite": false,
          "start": 515,
          "end": 530
        }
      ],
      "declare": false,
      "start": 511,
      "end": 531
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
            "start": 563,
            "end": 567
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
                "start": 570,
                "end": 571
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 576
              },
              "optional": false,
              "computed": false,
              "start": 570,
              "end": 576
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 578
            },
            "optional": false,
            "computed": false,
            "start": 570,
            "end": 578
          },
          "definite": false,
          "start": 563,
          "end": 578
        }
      ],
      "declare": false,
      "start": 559,
      "end": 579
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
            "start": 612,
            "end": 616
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
                "start": 619,
                "end": 620
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 625
              },
              "optional": false,
              "computed": false,
              "start": 619,
              "end": 625
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 627
            },
            "optional": false,
            "computed": false,
            "start": 619,
            "end": 627
          },
          "definite": false,
          "start": 612,
          "end": 627
        }
      ],
      "declare": false,
      "start": 608,
      "end": 628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 4,
  "end": 651
}
```
