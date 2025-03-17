__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 140,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 137,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 23,
              "end": 137,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 38,
                "name": "reduce",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "name": "ar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 51,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                }
              ],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 80,
                        "end": 108,
                        "object": {
                          "type": "MemberExpression",
                          "start": 80,
                          "end": 102,
                          "object": {
                            "type": "MemberExpression",
                            "start": 80,
                            "end": 95,
                            "object": {
                              "type": "Identifier",
                              "start": 80,
                              "end": 85,
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 86,
                              "end": 95,
                              "name": "prototype",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 102,
                            "name": "reduce",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 108,
                          "name": "apply",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 109,
                          "end": 111,
                          "name": "ar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "ConditionalExpression",
                          "start": 113,
                          "end": 129,
                          "test": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "name": "e",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 121,
                                "end": 122,
                                "name": "e",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ]
                          },
                          "alternate": {
                            "type": "ArrayExpression",
                            "start": 126,
                            "end": 129,
                            "elements": [
                              {
                                "type": "Identifier",
                                "start": 127,
                                "end": 128,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ]
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 38,
                "end": 41,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 39,
                    "end": 40,
                    "name": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "name": "A",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 62,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 54,
                  "end": 62,
                  "typeName": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 59,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "EmptyStatement",
            "start": 137,
            "end": 138
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 151,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "name": "M1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 172,
            "end": 244,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 179,
              "end": 244,
              "id": {
                "type": "Identifier",
                "start": 188,
                "end": 195,
                "name": "compose",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 208,
                        "end": 216,
                        "object": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 209,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 216,
                          "name": "reduce",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 217,
                          "end": 226,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 228,
                          "end": 236,
                          "name": "compose2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 257,
              "end": 378,
              "id": {
                "type": "Identifier",
                "start": 266,
                "end": 274,
                "name": "compose2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 284,
                  "end": 298,
                  "name": "g",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 285,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 287,
                      "end": 298,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 288,
                          "end": 292,
                          "name": "x",
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
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 314,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 301,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 303,
                      "end": 314,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 304,
                          "end": 308,
                          "name": "x",
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
                                "name": "D",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 352,
                          "end": 353,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "callee": {
                                "type": "Identifier",
                                "start": 364,
                                "end": 365,
                                "name": "g",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "start": 366,
                                  "end": 370,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 366,
                                    "end": 367,
                                    "name": "f",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 368,
                                      "end": 369,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 274,
                "end": 283,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 275,
                    "end": 276,
                    "name": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 276,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 278,
                    "end": 279,
                    "name": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 281,
                    "end": 282,
                    "name": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "name": "D",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 315,
                "end": 328,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 317,
                  "end": 328,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 318,
                      "end": 322,
                      "name": "x",
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
                            "name": "D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "EmptyStatement",
            "start": 378,
            "end": 379
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "EmptyStatement",
      "start": 381,
      "end": 382
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
