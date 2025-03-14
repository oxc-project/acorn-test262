returnTypeParameterWithModules.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 382,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 140,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 140,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 137,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 23,
              "end": 137,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 137,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 73,
                    "end": 131,
                    "argument": {
                      "type": "CallExpression",
                      "start": 80,
                      "end": 130,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 109,
                          "end": 111,
                          "decorators": [],
                          "name": "ar",
                          "optional": false
                        },
                        {
                          "type": "ConditionalExpression",
                          "start": 113,
                          "end": 129,
                          "alternate": {
                            "type": "ArrayExpression",
                            "start": 126,
                            "end": 129,
                            "elements": [
                              {
                                "type": "Identifier",
                                "start": 127,
                                "end": 128,
                                "decorators": [],
                                "name": "f",
                                "optional": false
                              }
                            ]
                          },
                          "consequent": {
                            "type": "ArrayExpression",
                            "start": 117,
                            "end": 123,
                            "elements": [
                              {
                                "type": "Identifier",
                                "start": 118,
                                "end": 119,
                                "decorators": [],
                                "name": "f",
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 121,
                                "end": 122,
                                "decorators": [],
                                "name": "e",
                                "optional": false
                              }
                            ]
                          },
                          "test": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "decorators": [],
                            "name": "e",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 80,
                        "end": 108,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 80,
                          "end": 102,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 80,
                            "end": 95,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 80,
                              "end": 85,
                              "decorators": [],
                              "name": "Array",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 86,
                              "end": 95,
                              "decorators": [],
                              "name": "prototype",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 102,
                            "decorators": [],
                            "name": "reduce",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 108,
                          "decorators": [],
                          "name": "apply",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 38,
                "decorators": [],
                "name": "reduce",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "decorators": [],
                  "name": "ar",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 51,
                  "decorators": [],
                  "name": "e",
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 62,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 54,
                  "end": 62,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 59,
                    "end": 62,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 60,
                        "end": 61,
                        "typeName": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 61,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 59,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 38,
                "end": 41,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 39,
                    "end": 40,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 137,
            "end": 138
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "M1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "EmptyStatement",
      "start": 140,
      "end": 141
    },
    {
      "type": "TSModuleDeclaration",
      "start": 142,
      "end": 381,
      "body": {
        "type": "TSModuleBlock",
        "start": 152,
        "end": 381,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 156,
            "end": 169,
            "id": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "decorators": [],
              "name": "M1",
              "optional": false
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 172,
            "end": 244,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 179,
              "end": 244,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 244,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 208,
                    "end": 238,
                    "expression": {
                      "type": "CallExpression",
                      "start": 208,
                      "end": 237,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 217,
                          "end": 226,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 228,
                          "end": 236,
                          "decorators": [],
                          "name": "compose2",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 208,
                        "end": 216,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 216,
                          "decorators": [],
                          "name": "reduce",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 188,
                "end": 195,
                "decorators": [],
                "name": "compose",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 244,
            "end": 245
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 250,
            "end": 378,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 257,
              "end": 378,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 329,
                "end": 378,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 335,
                    "end": 374,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 342,
                      "end": 374,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 355,
                        "end": 374,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 357,
                            "end": 372,
                            "argument": {
                              "type": "CallExpression",
                              "start": 364,
                              "end": 371,
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "start": 366,
                                  "end": 370,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 368,
                                      "end": 369,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 366,
                                    "end": 367,
                                    "decorators": [],
                                    "name": "f",
                                    "optional": false
                                  },
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 364,
                                "end": 365,
                                "decorators": [],
                                "name": "g",
                                "optional": false
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 352,
                          "end": 353,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 266,
                "end": 274,
                "decorators": [],
                "name": "compose2",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 284,
                  "end": 298,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 285,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 287,
                      "end": 298,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 288,
                          "end": 292,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 289,
                            "end": 292,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 291,
                              "end": 292,
                              "typeName": {
                                "type": "Identifier",
                                "start": 291,
                                "end": 292,
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 294,
                        "end": 298,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 297,
                          "end": 298,
                          "typeName": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 298,
                            "decorators": [],
                            "name": "C",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 314,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 301,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 303,
                      "end": 314,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 304,
                          "end": 308,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 305,
                            "end": 308,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 307,
                              "end": 308,
                              "typeName": {
                                "type": "Identifier",
                                "start": 307,
                                "end": 308,
                                "decorators": [],
                                "name": "D",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 310,
                        "end": 314,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 313,
                          "end": 314,
                          "typeName": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 314,
                            "decorators": [],
                            "name": "B",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 315,
                "end": 328,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 317,
                  "end": 328,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 318,
                      "end": 322,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 319,
                        "end": 322,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 321,
                          "end": 322,
                          "typeName": {
                            "type": "Identifier",
                            "start": 321,
                            "end": 322,
                            "decorators": [],
                            "name": "D",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 324,
                    "end": 328,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 327,
                      "end": 328,
                      "typeName": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 328,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 274,
                "end": 283,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 275,
                    "end": 276,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 276,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 278,
                    "end": 279,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 281,
                    "end": 282,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 378,
            "end": 379
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 151,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "EmptyStatement",
      "start": 381,
      "end": 382
    }
  ],
  "sourceType": "script"
}
```
