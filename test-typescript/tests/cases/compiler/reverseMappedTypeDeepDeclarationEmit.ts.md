reverseMappedTypeDeepDeclarationEmit.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 70,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "Validator",
          "optional": false
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 46,
                "decorators": [],
                "name": "NativeTypeValidator",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 52,
              "end": 70,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 67,
                "decorators": [],
                "name": "ObjectValidator",
                "optional": false
              }
            }
          ]
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 134,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 79,
        "end": 134,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 84,
          "end": 103,
          "decorators": [],
          "name": "NativeTypeValidator",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 109,
          "end": 134,
          "params": [
            {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 111,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 113,
                  "end": 116
                }
              }
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 103,
          "end": 106,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 104,
              "end": 105,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 135,
      "end": 206,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 142,
        "end": 206,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 147,
          "end": 162,
          "decorators": [],
          "name": "ObjectValidator",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 168,
          "end": 206,
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
                "decorators": [],
                "name": "O",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "K",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 188,
            "end": 203,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 197,
              "end": 203,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 198,
                  "end": 202,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 200,
                    "end": 201,
                    "typeName": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 201,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 199,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "decorators": [],
                      "name": "O",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 188,
              "end": 197,
              "decorators": [],
              "name": "Validator",
              "optional": false
            }
          }
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "O",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 228,
      "end": 300,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 235,
        "end": 300,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 249,
            "end": 299,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 249,
              "end": 299,
              "decorators": [],
              "name": "SimpleStringValidator",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 270,
                "end": 299,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 272,
                  "end": 299,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 291,
                    "decorators": [],
                    "name": "NativeTypeValidator",
                    "optional": false
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 331,
      "end": 421,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 338,
        "end": 421,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 420,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 420,
              "decorators": [],
              "name": "ObjValidator",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 364,
                "end": 420,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 366,
                  "end": 420,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 370,
                      "end": 402,
                      "decorators": [],
                      "name": "validatorObj",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 382,
                        "end": 402,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 384,
                          "end": 402,
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
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 384,
                            "end": 399,
                            "decorators": [],
                            "name": "ObjectValidator",
                            "optional": false
                          }
                        }
                      }
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
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 408,
                          "end": 414,
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 409,
                            "end": 414,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 411,
                              "end": 414
                            }
                          }
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
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 366,
                    "end": 369,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 367,
                        "end": 368,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 368,
                          "decorators": [],
                          "name": "V",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 423,
      "end": 516,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 430,
        "end": 516,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 436,
            "end": 516,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 436,
              "end": 440,
              "decorators": [],
              "name": "test",
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 448,
                    "end": 452,
                    "decorators": [],
                    "name": "Test",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 454,
                    "end": 514,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 460,
                        "end": 509,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 460,
                          "end": 465,
                          "decorators": [],
                          "name": "Test1",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ObjectExpression",
                          "start": 467,
                          "end": 509,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 475,
                              "end": 503,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 475,
                                "end": 480,
                                "decorators": [],
                                "name": "Test2",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 482,
                                "end": 503,
                                "decorators": [],
                                "name": "SimpleStringValidator",
                                "optional": false
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 518,
      "end": 566,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 525,
        "end": 566,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 531,
            "end": 565,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 531,
              "end": 544,
              "decorators": [],
              "name": "validatorFunc",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 547,
              "end": 565,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 560,
                  "end": 564,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 547,
                "end": 559,
                "decorators": [],
                "name": "ObjValidator",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 567,
      "end": 667,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 574,
        "end": 667,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 580,
            "end": 666,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 580,
              "end": 593,
              "decorators": [],
              "name": "outputExample",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 596,
              "end": 666,
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 618,
                        "decorators": [],
                        "name": "Test",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 620,
                        "end": 663,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 626,
                            "end": 658,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 626,
                              "end": 631,
                              "decorators": [],
                              "name": "Test1",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 633,
                              "end": 658,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 641,
                                  "end": 652,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 641,
                                    "end": 646,
                                    "decorators": [],
                                    "name": "Test2",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 648,
                                    "end": 652,
                                    "raw": "\"hi\"",
                                    "value": "hi"
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 596,
                "end": 609,
                "decorators": [],
                "name": "validatorFunc",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
