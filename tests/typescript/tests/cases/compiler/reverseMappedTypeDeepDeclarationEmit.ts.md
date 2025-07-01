__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validator",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 21
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
                "start": 22,
                "end": 23
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 22,
              "end": 23
            }
          ],
          "start": 21,
          "end": 24
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NativeTypeValidator",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 46
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
                      "start": 47,
                      "end": 48
                    },
                    "typeArguments": null,
                    "start": 47,
                    "end": 48
                  }
                ],
                "start": 46,
                "end": 49
              },
              "start": 27,
              "end": 49
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectValidator",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 67
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
                      "start": 68,
                      "end": 69
                    },
                    "typeArguments": null,
                    "start": 68,
                    "end": 69
                  }
                ],
                "start": 67,
                "end": 70
              },
              "start": 52,
              "end": 70
            }
          ],
          "start": 27,
          "end": 70
        },
        "declare": false,
        "start": 7,
        "end": 70
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 70
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NativeTypeValidator",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 103
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
                "start": 104,
                "end": 105
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 104,
              "end": 105
            }
          ],
          "start": 103,
          "end": 106
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 113,
                  "end": 116
                },
                "start": 111,
                "end": 116
              },
              "start": 110,
              "end": 116
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
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
                  "type": "TSUndefinedKeyword",
                  "start": 125,
                  "end": 134
                }
              ],
              "start": 121,
              "end": 134
            },
            "start": 118,
            "end": 134
          },
          "start": 109,
          "end": 134
        },
        "declare": false,
        "start": 79,
        "end": 134
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 72,
      "end": 134
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectValidator",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 162
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 163,
              "end": 164
            }
          ],
          "start": 162,
          "end": 165
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 185
              },
              "typeArguments": null,
              "start": 184,
              "end": 185
            },
            "start": 178,
            "end": 185
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Validator",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 197
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 199
                    },
                    "typeArguments": null,
                    "start": 198,
                    "end": 199
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 201
                    },
                    "typeArguments": null,
                    "start": 200,
                    "end": 201
                  },
                  "start": 198,
                  "end": 202
                }
              ],
              "start": 197,
              "end": 203
            },
            "start": 188,
            "end": 203
          },
          "optional": false,
          "readonly": null,
          "start": 168,
          "end": 206
        },
        "declare": false,
        "start": 142,
        "end": 206
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 135,
      "end": 206
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SimpleStringValidator",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NativeTypeValidator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 291
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 292,
                        "end": 298
                      }
                    ],
                    "start": 291,
                    "end": 299
                  },
                  "start": 272,
                  "end": 299
                },
                "start": 270,
                "end": 299
              },
              "start": 249,
              "end": 299
            },
            "init": null,
            "definite": false,
            "start": 249,
            "end": 299
          }
        ],
        "declare": true,
        "start": 235,
        "end": 300
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 228,
      "end": 300
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ObjValidator",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 367,
                          "end": 368
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 367,
                        "end": 368
                      }
                    ],
                    "start": 366,
                    "end": 369
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "validatorObj",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ObjectValidator",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 384,
                            "end": 399
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
                                  "start": 400,
                                  "end": 401
                                },
                                "typeArguments": null,
                                "start": 400,
                                "end": 401
                              }
                            ],
                            "start": 399,
                            "end": 402
                          },
                          "start": 384,
                          "end": 402
                        },
                        "start": 382,
                        "end": 402
                      },
                      "start": 370,
                      "end": 402
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 411,
                              "end": 414
                            },
                            "start": 409,
                            "end": 414
                          },
                          "start": 408,
                          "end": 414
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 419,
                            "end": 420
                          },
                          "typeArguments": null,
                          "start": 419,
                          "end": 420
                        },
                        "start": 416,
                        "end": 420
                      },
                      "start": 407,
                      "end": 420
                    },
                    "start": 404,
                    "end": 420
                  },
                  "start": 366,
                  "end": 420
                },
                "start": 364,
                "end": 420
              },
              "start": 352,
              "end": 420
            },
            "init": null,
            "definite": false,
            "start": 352,
            "end": 420
          }
        ],
        "declare": true,
        "start": 338,
        "end": 421
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 331,
      "end": 421
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 440
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
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 448,
                    "end": 452
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Test1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 460,
                          "end": 465
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 475,
                                "end": 480
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SimpleStringValidator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 482,
                                "end": 503
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 475,
                              "end": 503
                            }
                          ],
                          "start": 467,
                          "end": 509
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 460,
                        "end": 509
                      }
                    ],
                    "start": 454,
                    "end": 514
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 448,
                  "end": 514
                }
              ],
              "start": 444,
              "end": 516
            },
            "definite": false,
            "start": 436,
            "end": 516
          }
        ],
        "declare": false,
        "start": 430,
        "end": 516
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 423,
      "end": 516
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "validatorFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 544
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjValidator",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 559
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 564
                }
              ],
              "optional": false,
              "start": 547,
              "end": 565
            },
            "definite": false,
            "start": 531,
            "end": 565
          }
        ],
        "declare": false,
        "start": 525,
        "end": 566
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 518,
      "end": 566
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "outputExample",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 593
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "validatorFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 596,
                "end": 609
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 618
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Test1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 626,
                              "end": 631
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Test2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 641,
                                    "end": 646
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "hi",
                                    "raw": "\"hi\"",
                                    "start": 648,
                                    "end": 652
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 641,
                                  "end": 652
                                }
                              ],
                              "start": 633,
                              "end": 658
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 626,
                            "end": 658
                          }
                        ],
                        "start": 620,
                        "end": 663
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 614,
                      "end": 663
                    }
                  ],
                  "start": 610,
                  "end": 665
                }
              ],
              "optional": false,
              "start": 596,
              "end": 666
            },
            "definite": false,
            "start": 580,
            "end": 666
          }
        ],
        "declare": false,
        "start": 574,
        "end": 667
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 567,
      "end": 667
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 667
}
```
