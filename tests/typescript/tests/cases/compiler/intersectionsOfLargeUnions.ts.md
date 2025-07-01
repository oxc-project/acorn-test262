__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertIsElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 53
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 64
                    },
                    "typeArguments": null,
                    "start": 60,
                    "end": 64
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 67,
                    "end": 71
                  }
                ],
                "start": 60,
                "end": 71
              },
              "start": 58,
              "end": 71
            },
            "start": 54,
            "end": 71
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 78
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 89
                },
                "typeArguments": null,
                "start": 82,
                "end": 89
              },
              "start": 82,
              "end": 89
            },
            "start": 74,
            "end": 89
          },
          "start": 72,
          "end": 89
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nodeType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 108
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 111,
                        "end": 115
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 120,
                        "end": 124
                      },
                      "start": 111,
                      "end": 124
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 127,
                      "end": 131
                    },
                    "alternate": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 138
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodeType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 147
                      },
                      "optional": false,
                      "computed": false,
                      "start": 134,
                      "end": 147
                    },
                    "start": 111,
                    "end": 147
                  },
                  "definite": false,
                  "start": 100,
                  "end": 147
                }
              ],
              "declare": false,
              "start": 96,
              "end": 148
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nodeType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 168
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 173,
                  "end": 174
                },
                "start": 160,
                "end": 174
              },
              "start": 153,
              "end": 175
            }
          ],
          "start": 90,
          "end": 177
        },
        "expression": false,
        "start": 29,
        "end": 177
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 177
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertNodeTagName",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 214
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
                "start": 220,
                "end": 221
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 253
                  },
                  "typeArguments": null,
                  "start": 236,
                  "end": 253
                },
                "start": 230,
                "end": 253
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 220,
              "end": 253
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 260
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 286
                  },
                  "typeArguments": null,
                  "start": 269,
                  "end": 286
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 288
                  },
                  "typeArguments": null,
                  "start": 287,
                  "end": 288
                },
                "start": 269,
                "end": 289
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 259,
              "end": 289
            }
          ],
          "start": 214,
          "end": 290
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 301
                    },
                    "typeArguments": null,
                    "start": 297,
                    "end": 301
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 304,
                    "end": 308
                  }
                ],
                "start": 297,
                "end": 308
              },
              "start": 295,
              "end": 308
            },
            "start": 291,
            "end": 308
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tagName",
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
                  "start": 319,
                  "end": 320
                },
                "typeArguments": null,
                "start": 319,
                "end": 320
              },
              "start": 317,
              "end": 320
            },
            "start": 310,
            "end": 320
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 327
            },
            "asserts": false,
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
                  "start": 331,
                  "end": 332
                },
                "typeArguments": null,
                "start": 331,
                "end": 332
              },
              "start": 331,
              "end": 332
            },
            "start": 323,
            "end": 332
          },
          "start": 321,
          "end": 332
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assertIsElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 358
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 363
                  }
                ],
                "optional": false,
                "start": 343,
                "end": 364
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
                          "name": "nodeTagName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 393
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "node",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 396,
                                "end": 400
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "tagName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 401,
                                "end": 408
                              },
                              "optional": false,
                              "computed": false,
                              "start": 396,
                              "end": 408
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 409,
                              "end": 420
                            },
                            "optional": false,
                            "computed": false,
                            "start": 396,
                            "end": 420
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 396,
                          "end": 422
                        },
                        "definite": false,
                        "start": 382,
                        "end": 422
                      }
                    ],
                    "declare": false,
                    "start": 376,
                    "end": 423
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodeTagName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 451
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tagName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 463
                      },
                      "start": 440,
                      "end": 463
                    },
                    "start": 433,
                    "end": 464
                  }
                ],
                "start": 366,
                "end": 470
              },
              "alternate": null,
              "start": 339,
              "end": 470
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 482,
                "end": 487
              },
              "start": 475,
              "end": 488
            }
          ],
          "start": 333,
          "end": 490
        },
        "expression": false,
        "start": 188,
        "end": 490
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 490
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertNodeProperty",
          "optional": false,
          "typeAnnotation": null,
          "start": 510,
          "end": 528
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
                "start": 534,
                "end": 535
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 567
                  },
                  "typeArguments": null,
                  "start": 550,
                  "end": 567
                },
                "start": 544,
                "end": 567
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 534,
              "end": 567
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 574
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementTagNameMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 589,
                      "end": 606
                    },
                    "typeArguments": null,
                    "start": 589,
                    "end": 606
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 607,
                      "end": 608
                    },
                    "typeArguments": null,
                    "start": 607,
                    "end": 608
                  },
                  "start": 589,
                  "end": 609
                },
                "start": 583,
                "end": 609
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 573,
              "end": 609
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 616
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLElementTagNameMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 625,
                      "end": 646
                    },
                    "typeArguments": null,
                    "start": 625,
                    "end": 646
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 647,
                      "end": 648
                    },
                    "typeArguments": null,
                    "start": 647,
                    "end": 648
                  },
                  "start": 625,
                  "end": 649
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 651
                  },
                  "typeArguments": null,
                  "start": 650,
                  "end": 651
                },
                "start": 625,
                "end": 652
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 615,
              "end": 652
            }
          ],
          "start": 528,
          "end": 653
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 660,
                      "end": 664
                    },
                    "typeArguments": null,
                    "start": 660,
                    "end": 664
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 667,
                    "end": 671
                  }
                ],
                "start": 660,
                "end": 671
              },
              "start": 658,
              "end": 671
            },
            "start": 654,
            "end": 671
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tagName",
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
                  "start": 682,
                  "end": 683
                },
                "typeArguments": null,
                "start": 682,
                "end": 683
              },
              "start": 680,
              "end": 683
            },
            "start": 673,
            "end": 683
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 692
                },
                "typeArguments": null,
                "start": 691,
                "end": 692
              },
              "start": 689,
              "end": 692
            },
            "start": 685,
            "end": 692
          },
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
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 702
                },
                "typeArguments": null,
                "start": 701,
                "end": 702
              },
              "start": 699,
              "end": 702
            },
            "start": 694,
            "end": 702
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assertNodeTagName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 731
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 732,
                    "end": 736
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tagName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 745
                  }
                ],
                "optional": false,
                "start": 714,
                "end": 746
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 762
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 767
                      },
                      "optional": false,
                      "computed": true,
                      "start": 758,
                      "end": 768
                    },
                    "directive": null,
                    "start": 758,
                    "end": 769
                  }
                ],
                "start": 748,
                "end": 775
              },
              "alternate": null,
              "start": 710,
              "end": 775
            }
          ],
          "start": 704,
          "end": 777
        },
        "expression": false,
        "start": 501,
        "end": 777
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 494,
      "end": 777
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 777
}
```
