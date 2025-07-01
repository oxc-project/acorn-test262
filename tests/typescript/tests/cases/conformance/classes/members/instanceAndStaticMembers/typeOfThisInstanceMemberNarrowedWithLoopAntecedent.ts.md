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
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 20
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 33
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "numberVariant",
                      "raw": "\"numberVariant\"",
                      "start": 35,
                      "end": 50
                    },
                    "start": 35,
                    "end": 50
                  },
                  "start": 33,
                  "end": 50
                },
                "accessibility": null,
                "static": false,
                "start": 29,
                "end": 51
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 60
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
                  },
                  "start": 60,
                  "end": 68
                },
                "accessibility": null,
                "static": false,
                "start": 56,
                "end": 69
              }
            ],
            "start": 23,
            "end": 71
          },
          {
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 84
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "stringVariant",
                      "raw": "\"stringVariant\"",
                      "start": 86,
                      "end": 101
                    },
                    "start": 86,
                    "end": 101
                  },
                  "start": 84,
                  "end": 101
                },
                "accessibility": null,
                "static": false,
                "start": 80,
                "end": 102
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 111
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 113,
                    "end": 119
                  },
                  "start": 111,
                  "end": 119
                },
                "accessibility": null,
                "static": false,
                "start": 107,
                "end": 120
              }
            ],
            "start": 74,
            "end": 122
          }
        ],
        "start": 23,
        "end": 122
      },
      "declare": false,
      "start": 10,
      "end": 123
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 140
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
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 160
                },
                "typeArguments": null,
                "start": 155,
                "end": 160
              },
              "start": 153,
              "end": 160
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 147,
            "end": 161
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 172
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 192,
                      "end": 193
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 195,
                      "end": 198
                    },
                    "start": 185,
                    "end": 198
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 217
                        },
                        "optional": false,
                        "computed": false,
                        "start": 207,
                        "end": 217
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 222
                      },
                      "optional": false,
                      "computed": false,
                      "start": 207,
                      "end": 222
                    },
                    "directive": null,
                    "start": 207,
                    "end": 223
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 236,
                            "end": 240
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 241,
                            "end": 246
                          },
                          "optional": false,
                          "computed": false,
                          "start": 236,
                          "end": 246
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 251
                        },
                        "optional": false,
                        "computed": false,
                        "start": 236,
                        "end": 251
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "stringVariant",
                        "raw": "\"stringVariant\"",
                        "start": 256,
                        "end": 271
                      },
                      "start": 236,
                      "end": 271
                    },
                    "consequent": {
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 296,
                                    "end": 302
                                  },
                                  "start": 294,
                                  "end": 302
                                },
                                "start": 293,
                                "end": 302
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 305,
                                    "end": 309
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "state",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 310,
                                    "end": 315
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 305,
                                  "end": 315
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 316,
                                  "end": 320
                                },
                                "optional": false,
                                "computed": false,
                                "start": 305,
                                "end": 320
                              },
                              "definite": false,
                              "start": 293,
                              "end": 320
                            }
                          ],
                          "declare": false,
                          "start": 287,
                          "end": 321
                        }
                      ],
                      "start": 273,
                      "end": 331
                    },
                    "alternate": null,
                    "start": 232,
                    "end": 331
                  }
                ],
                "start": 175,
                "end": 337
              },
              "expression": false,
              "start": 172,
              "end": 337
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 166,
            "end": 337
          }
        ],
        "start": 141,
        "end": 339
      },
      "abstract": false,
      "declare": false,
      "start": 125,
      "end": 339
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 357
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
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 369
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 377
                },
                "typeArguments": null,
                "start": 372,
                "end": 377
              },
              "start": 370,
              "end": 377
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 364,
            "end": 378
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 389
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 408,
                          "end": 409
                        },
                        "init": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 412,
                          "end": 417
                        },
                        "definite": false,
                        "start": 408,
                        "end": 417
                      }
                    ],
                    "declare": false,
                    "start": 402,
                    "end": 418
                  },
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 434,
                      "end": 435
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 437,
                      "end": 440
                    },
                    "start": 427,
                    "end": 440
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 453,
                            "end": 457
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 463
                          },
                          "optional": false,
                          "computed": false,
                          "start": 453,
                          "end": 463
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 464,
                          "end": 468
                        },
                        "optional": false,
                        "computed": false,
                        "start": 453,
                        "end": 468
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "numberVariant",
                        "raw": "\"numberVariant\"",
                        "start": 473,
                        "end": 488
                      },
                      "start": 453,
                      "end": 488
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 504,
                                "end": 508
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 509,
                                "end": 514
                              },
                              "optional": false,
                              "computed": false,
                              "start": 504,
                              "end": 514
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 515,
                              "end": 519
                            },
                            "optional": false,
                            "computed": false,
                            "start": 504,
                            "end": 519
                          },
                          "directive": null,
                          "start": 504,
                          "end": 520
                        }
                      ],
                      "start": 490,
                      "end": 530
                    },
                    "alternate": null,
                    "start": 449,
                    "end": 530
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 546,
                              "end": 552
                            },
                            "start": 544,
                            "end": 552
                          },
                          "start": 543,
                          "end": 552
                        },
                        "init": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 555,
                                "end": 559
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 560,
                                "end": 565
                              },
                              "optional": false,
                              "computed": false,
                              "start": 555,
                              "end": 565
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 567,
                              "end": 571
                            },
                            "optional": true,
                            "computed": false,
                            "start": 555,
                            "end": 571
                          },
                          "start": 555,
                          "end": 571
                        },
                        "definite": false,
                        "start": 543,
                        "end": 571
                      }
                    ],
                    "declare": false,
                    "start": 539,
                    "end": 572
                  }
                ],
                "start": 392,
                "end": 605
              },
              "expression": false,
              "start": 389,
              "end": 605
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 383,
            "end": 605
          }
        ],
        "start": 358,
        "end": 607
      },
      "abstract": false,
      "declare": false,
      "start": 341,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 607
}
```
