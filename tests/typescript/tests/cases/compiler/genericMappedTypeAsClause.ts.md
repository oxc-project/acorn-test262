__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 29
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 44
          }
        ],
        "start": 13,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 65
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Suffix",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 72
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 81,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 66,
            "end": 87
          }
        ],
        "start": 65,
        "end": 88
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 99
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Model",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
            "typeArguments": null,
            "start": 109,
            "end": 114
          },
          "start": 103,
          "end": 114
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 118,
              "end": 121
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 122,
              "end": 125
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 131,
              "end": 133
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "typeArguments": null,
              "start": 121,
              "end": 122
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Suffix",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 131
              },
              "typeArguments": null,
              "start": 125,
              "end": 131
            }
          ],
          "start": 118,
          "end": 133
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Model",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 141
            },
            "typeArguments": null,
            "start": 136,
            "end": 141
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 143
            },
            "typeArguments": null,
            "start": 142,
            "end": 143
          },
          "start": 136,
          "end": 144
        },
        "optional": false,
        "readonly": null,
        "start": 91,
        "end": 147
      },
      "declare": false,
      "start": 49,
      "end": 148
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MappedModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 173
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Foo",
                        "raw": "'Foo'",
                        "start": 174,
                        "end": 179
                      },
                      "start": 174,
                      "end": 179
                    }
                  ],
                  "start": 173,
                  "end": 180
                },
                "start": 162,
                "end": 180
              },
              "start": 160,
              "end": 180
            },
            "start": 156,
            "end": 180
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
                  "name": "aFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 189
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 191,
                  "end": 197
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 185,
                "end": 197
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 203
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 205,
                  "end": 207
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 199,
                "end": 207
              }
            ],
            "start": 183,
            "end": 209
          },
          "definite": false,
          "start": 156,
          "end": 209
        }
      ],
      "declare": false,
      "start": 150,
      "end": 210
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MappedModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 234
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Foo",
                        "raw": "'Foo'",
                        "start": 235,
                        "end": 240
                      },
                      "start": 235,
                      "end": 240
                    }
                  ],
                  "start": 234,
                  "end": 241
                },
                "start": 223,
                "end": 241
              },
              "start": 221,
              "end": 241
            },
            "start": 217,
            "end": 241
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
                  "name": "bFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 250
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 252,
                  "end": 257
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 246,
                "end": 257
              }
            ],
            "start": 244,
            "end": 259
          },
          "definite": false,
          "start": 217,
          "end": 259
        }
      ],
      "declare": false,
      "start": 211,
      "end": 260
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 283
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
              "start": 284,
              "end": 285
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 294,
              "end": 300
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 284,
            "end": 300
          }
        ],
        "start": 283,
        "end": 301
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 320,
                        "end": 331
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
                              "start": 332,
                              "end": 333
                            },
                            "typeArguments": null,
                            "start": 332,
                            "end": 333
                          }
                        ],
                        "start": 331,
                        "end": 334
                      },
                      "start": 320,
                      "end": 334
                    },
                    "start": 318,
                    "end": 334
                  },
                  "start": 316,
                  "end": 334
                },
                "init": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 337,
                  "end": 339
                },
                "definite": false,
                "start": 316,
                "end": 339
              }
            ],
            "declare": false,
            "start": 310,
            "end": 340
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 376
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
                              "start": 377,
                              "end": 378
                            },
                            "typeArguments": null,
                            "start": 377,
                            "end": 378
                          }
                        ],
                        "start": 376,
                        "end": 379
                      },
                      "start": 365,
                      "end": 379
                    },
                    "start": 363,
                    "end": 379
                  },
                  "start": 361,
                  "end": 379
                },
                "init": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 382,
                  "end": 388
                },
                "definite": false,
                "start": 361,
                "end": 388
              }
            ],
            "declare": false,
            "start": 355,
            "end": 389
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 425
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
                              "start": 426,
                              "end": 427
                            },
                            "typeArguments": null,
                            "start": 426,
                            "end": 427
                          }
                        ],
                        "start": 425,
                        "end": 428
                      },
                      "start": 414,
                      "end": 428
                    },
                    "start": 412,
                    "end": 428
                  },
                  "start": 410,
                  "end": 428
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 432,
                      "end": 433
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 435,
                      "end": 436
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 438,
                      "end": 439
                    }
                  ],
                  "start": 431,
                  "end": 440
                },
                "definite": false,
                "start": 410,
                "end": 440
              }
            ],
            "declare": false,
            "start": 404,
            "end": 441
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 466,
                        "end": 477
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
                              "start": 478,
                              "end": 479
                            },
                            "typeArguments": null,
                            "start": 478,
                            "end": 479
                          }
                        ],
                        "start": 477,
                        "end": 480
                      },
                      "start": 466,
                      "end": 480
                    },
                    "start": 464,
                    "end": 480
                  },
                  "start": 462,
                  "end": 480
                },
                "init": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 483,
                  "end": 488
                },
                "definite": false,
                "start": 462,
                "end": 488
              }
            ],
            "declare": false,
            "start": 456,
            "end": 489
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 525
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
                              "start": 526,
                              "end": 527
                            },
                            "typeArguments": null,
                            "start": 526,
                            "end": 527
                          }
                        ],
                        "start": 525,
                        "end": 528
                      },
                      "start": 514,
                      "end": 528
                    },
                    "start": 512,
                    "end": 528
                  },
                  "start": 510,
                  "end": 528
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 534
                      },
                      "value": {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "'bar'",
                        "start": 536,
                        "end": 541
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 533,
                      "end": 541
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 544
                      },
                      "value": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 546,
                        "end": 548
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 543,
                      "end": 548
                    }
                  ],
                  "start": 531,
                  "end": 550
                },
                "definite": false,
                "start": 510,
                "end": 550
              }
            ],
            "declare": false,
            "start": 504,
            "end": 551
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MappedModel",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 587
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
                              "start": 588,
                              "end": 589
                            },
                            "typeArguments": null,
                            "start": 588,
                            "end": 589
                          }
                        ],
                        "start": 587,
                        "end": 590
                      },
                      "start": 576,
                      "end": 590
                    },
                    "start": 574,
                    "end": 590
                  },
                  "start": 572,
                  "end": 590
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 602
                },
                "definite": false,
                "start": 572,
                "end": 602
              }
            ],
            "declare": false,
            "start": 566,
            "end": 603
          }
        ],
        "start": 304,
        "end": 615
      },
      "expression": false,
      "start": 272,
      "end": 615
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RemapRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 655
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 656,
              "end": 657
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 672,
                "end": 675
              },
              "start": 666,
              "end": 675
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 656,
            "end": 675
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 678
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 677,
            "end": 678
          }
        ],
        "start": 655,
        "end": 679
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 686
        },
        "constraint": {
          "type": "TSNeverKeyword",
          "start": 690,
          "end": 695
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 700
          },
          "typeArguments": null,
          "start": 699,
          "end": 700
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 704
          },
          "typeArguments": null,
          "start": 703,
          "end": 704
        },
        "optional": false,
        "readonly": null,
        "start": 682,
        "end": 706
      },
      "declare": false,
      "start": 639,
      "end": 706
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordInterface2",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 733
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 735
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 750,
                "end": 753
              },
              "start": 744,
              "end": 753
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 734,
            "end": 753
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 756
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 755,
            "end": 756
          }
        ],
        "start": 733,
        "end": 757
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemapRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 766,
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
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 779
                },
                "typeArguments": null,
                "start": 778,
                "end": 779
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 782
                },
                "typeArguments": null,
                "start": 781,
                "end": 782
              }
            ],
            "start": 777,
            "end": 783
          },
          "start": 766,
          "end": 783
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 784,
        "end": 786
      },
      "declare": false,
      "start": 707,
      "end": 786
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 802
}
```
