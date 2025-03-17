__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 668,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 70,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 70,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "name": "Validator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 21,
          "end": 24,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 22,
              "end": 23,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 27,
          "end": 70,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 27,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 46,
                "name": "NativeTypeValidator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 46,
                "end": 49,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 47,
                    "end": 48,
                    "typeName": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 52,
              "end": 70,
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 67,
                "name": "ObjectValidator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 67,
                "end": 70,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 68,
                    "end": 69,
                    "typeName": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 134,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 79,
        "end": 134,
        "id": {
          "type": "Identifier",
          "start": 84,
          "end": 103,
          "name": "NativeTypeValidator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 103,
          "end": 106,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 104,
              "end": 105,
              "name": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 109,
          "end": 134,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "name": "n",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 111,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 113,
                  "end": 116
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 118,
            "end": 134,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 121,
              "end": 134,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 121,
                  "end": 122,
                  "typeName": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 125,
                  "end": 134
                }
              ]
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 135,
      "end": 206,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 142,
        "end": 206,
        "id": {
          "type": "Identifier",
          "start": 147,
          "end": 162,
          "name": "ObjectValidator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 162,
          "end": 165,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 163,
              "end": 164,
              "name": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "name": "O",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 168,
          "end": 206,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 173,
            "end": 185,
            "name": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 178,
              "end": 185,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 184,
                "end": 185,
                "typeName": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 185,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 188,
            "end": 203,
            "typeName": {
              "type": "Identifier",
              "start": 188,
              "end": 197,
              "name": "Validator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 197,
              "end": 203,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 198,
                  "end": 202,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 199,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "name": "O",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 200,
                    "end": 201,
                    "typeName": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 201,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 178,
            "end": 185,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 185,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "name": "O",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 228,
      "end": 300,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 235,
        "end": 300,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 249,
            "end": 299,
            "id": {
              "type": "Identifier",
              "start": 249,
              "end": 299,
              "name": "SimpleStringValidator",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 270,
                "end": 299,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 272,
                  "end": 299,
                  "typeName": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 291,
                    "name": "NativeTypeValidator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 291,
                    "end": 299,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 292,
                        "end": 298
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 331,
      "end": 421,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 338,
        "end": 421,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 420,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 420,
              "name": "ObjValidator",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 364,
                "end": 420,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 366,
                  "end": 420,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 366,
                    "end": 369,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 367,
                        "end": 368,
                        "name": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 368,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 370,
                      "end": 402,
                      "name": "validatorObj",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 382,
                        "end": 402,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 384,
                          "end": 402,
                          "typeName": {
                            "type": "Identifier",
                            "start": 384,
                            "end": 399,
                            "name": "ObjectValidator",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 399,
                            "end": 402,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 400,
                                "end": 401,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 400,
                                  "end": 401,
                                  "name": "V",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 404,
                    "end": 420,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 407,
                      "end": 420,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 408,
                          "end": 414,
                          "name": "o",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 409,
                            "end": 414,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 411,
                              "end": 414
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 416,
                        "end": 420,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 419,
                          "end": 420,
                          "typeName": {
                            "type": "Identifier",
                            "start": 419,
                            "end": 420,
                            "name": "V",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 423,
      "end": 516,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 430,
        "end": 516,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 436,
            "end": 516,
            "id": {
              "type": "Identifier",
              "start": 436,
              "end": 440,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 444,
              "end": 516,
              "properties": [
                {
                  "type": "Property",
                  "start": 448,
                  "end": 514,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 452,
                    "name": "Test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 454,
                    "end": 514,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 460,
                        "end": 509,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 460,
                          "end": 465,
                          "name": "Test1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "start": 467,
                          "end": 509,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 475,
                              "end": 503,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 475,
                                "end": 480,
                                "name": "Test2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 482,
                                "end": 503,
                                "name": "SimpleStringValidator",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 518,
      "end": 566,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 525,
        "end": 566,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 531,
            "end": 565,
            "id": {
              "type": "Identifier",
              "start": 531,
              "end": 544,
              "name": "validatorFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 547,
              "end": 565,
              "callee": {
                "type": "Identifier",
                "start": 547,
                "end": 559,
                "name": "ObjValidator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 560,
                  "end": 564,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 567,
      "end": 667,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 574,
        "end": 667,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 580,
            "end": 666,
            "id": {
              "type": "Identifier",
              "start": 580,
              "end": 593,
              "name": "outputExample",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 596,
              "end": 666,
              "callee": {
                "type": "Identifier",
                "start": 596,
                "end": 609,
                "name": "validatorFunc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 610,
                  "end": 665,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 614,
                      "end": 663,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 618,
                        "name": "Test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 620,
                        "end": 663,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 626,
                            "end": 658,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 626,
                              "end": 631,
                              "name": "Test1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 633,
                              "end": 658,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 641,
                                  "end": 652,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 641,
                                    "end": 646,
                                    "name": "Test2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 648,
                                    "end": 652,
                                    "value": "hi",
                                    "raw": "\"hi\""
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
