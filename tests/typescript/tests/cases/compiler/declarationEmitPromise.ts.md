__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 914,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 66,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "decorators": [],
          "name": "bluebird",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 66,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 31,
              "end": 64,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 63,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 63,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 48,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 48,
                    "end": 63,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 49,
                        "end": 62,
                        "typeName": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 57,
                          "decorators": [],
                          "name": "bluebird",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 57,
                          "end": 62,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 58,
                              "end": 61
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              },
              "value": null,
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 492,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 75,
        "end": 492,
        "id": {
          "type": "Identifier",
          "start": 90,
          "end": 104,
          "decorators": [],
          "name": "runSampleWorks",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 104,
          "end": 119,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 105,
              "end": 106,
              "name": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 108,
              "end": 109,
              "name": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 111,
              "end": 112,
              "name": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 114,
              "end": 115,
              "name": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 117,
              "end": 118,
              "name": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
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
            "start": 125,
            "end": 139,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 136,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 136,
                  "end": 139,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 138,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 141,
            "end": 156,
            "decorators": [],
            "name": "b",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 153,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 153,
                  "end": 156,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 154,
                      "end": 155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 158,
            "end": 173,
            "decorators": [],
            "name": "c",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 173,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 170,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 170,
                  "end": 173,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 171,
                      "end": 172,
                      "typeName": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 175,
            "end": 190,
            "decorators": [],
            "name": "d",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 187,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 187,
                  "end": 190,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 188,
                      "end": 189,
                      "typeName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 192,
            "end": 207,
            "decorators": [],
            "name": "e",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 207,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 207,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 204,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 204,
                  "end": 207,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 206,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 209,
          "end": 492,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 215,
              "end": 292,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 219,
                  "end": 291,
                  "id": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 225,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 228,
                    "end": 291,
                    "argument": {
                      "type": "CallExpression",
                      "start": 234,
                      "end": 291,
                      "callee": {
                        "type": "TSAsExpression",
                        "start": 235,
                        "end": 254,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 235,
                          "end": 247,
                          "object": {
                            "type": "Identifier",
                            "start": 235,
                            "end": 243,
                            "decorators": [],
                            "name": "bluebird",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 247,
                            "decorators": [],
                            "name": "all",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 251,
                          "end": 254
                        }
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 256,
                          "end": 290,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 256,
                            "end": 278,
                            "object": {
                              "type": "ArrayExpression",
                              "start": 256,
                              "end": 271,
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 257,
                                  "end": 258,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 260,
                                  "end": 261,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 263,
                                  "end": 264,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 267,
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 269,
                                  "end": 270,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 272,
                              "end": 278,
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 279,
                              "end": 289,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 279,
                                  "end": 281,
                                  "decorators": [],
                                  "name": "el",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "UnaryExpression",
                                "start": 285,
                                "end": 289,
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 286,
                                  "end": 289,
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 287,
                                    "end": 289,
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "prefix": true
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        }
                      ],
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 297,
              "end": 392,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 301,
                  "end": 391,
                  "id": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 305,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 308,
                    "end": 391,
                    "expression": true,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 308,
                      "end": 311,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 309,
                          "end": 310,
                          "name": {
                            "type": "Identifier",
                            "start": 309,
                            "end": 310,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 312,
                        "end": 354,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 313,
                          "end": 354,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 315,
                            "end": 354,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 316,
                                "end": 320,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 317,
                                  "end": 320,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 319,
                                    "end": 320,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 319,
                                      "end": 320,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 322,
                                "end": 327,
                                "decorators": [],
                                "name": "b",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 324,
                                  "end": 327,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 326,
                                    "end": 327,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 326,
                                      "end": 327,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 329,
                                "end": 334,
                                "decorators": [],
                                "name": "c",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 331,
                                  "end": 334,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 333,
                                    "end": 334,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 333,
                                      "end": 334,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 336,
                                "end": 341,
                                "decorators": [],
                                "name": "d",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 338,
                                  "end": 341,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 340,
                                    "end": 341,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 340,
                                      "end": 341,
                                      "decorators": [],
                                      "name": "D",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 343,
                                "end": 348,
                                "decorators": [],
                                "name": "e",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 345,
                                  "end": 348,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 347,
                                    "end": 348,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 347,
                                      "end": 348,
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 350,
                              "end": 354,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 353,
                                "end": 354,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 353,
                                  "end": 354,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 355,
                      "end": 358,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 357,
                        "end": 358,
                        "typeName": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 358,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "body": {
                      "type": "CallExpression",
                      "start": 370,
                      "end": 391,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 370,
                        "end": 377,
                        "object": {
                          "type": "Identifier",
                          "start": 370,
                          "end": 371,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 372,
                          "end": 377,
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 378,
                          "end": 382
                        },
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 390,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 397,
              "end": 439,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 401,
                  "end": 438,
                  "id": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 424,
                    "decorators": [],
                    "name": "rfunc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 406,
                      "end": 424,
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "start": 408,
                        "end": 424,
                        "types": [
                          {
                            "type": "TSTypeQuery",
                            "start": 408,
                            "end": 419,
                            "exprName": {
                              "type": "Identifier",
                              "start": 415,
                              "end": 419,
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 422,
                            "end": 424,
                            "members": []
                          }
                        ]
                      }
                    }
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 427,
                    "end": 438,
                    "expression": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 431,
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 435,
                      "end": 438
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 478,
              "end": 490,
              "argument": {
                "type": "Identifier",
                "start": 485,
                "end": 490,
                "decorators": [],
                "name": "rfunc",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 494,
      "end": 914,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 501,
        "end": 914,
        "id": {
          "type": "Identifier",
          "start": 516,
          "end": 531,
          "decorators": [],
          "name": "runSampleBreaks",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 531,
          "end": 546,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 532,
              "end": 533,
              "name": {
                "type": "Identifier",
                "start": 532,
                "end": 533,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 535,
              "end": 536,
              "name": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 538,
              "end": 539,
              "name": {
                "type": "Identifier",
                "start": 538,
                "end": 539,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 541,
              "end": 542,
              "name": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 544,
              "end": 545,
              "name": {
                "type": "Identifier",
                "start": 544,
                "end": 545,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
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
            "start": 552,
            "end": 566,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 553,
              "end": 566,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 555,
                "end": 566,
                "typeName": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 563,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 563,
                  "end": 566,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 564,
                      "end": 565,
                      "typeName": {
                        "type": "Identifier",
                        "start": 564,
                        "end": 565,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 568,
            "end": 583,
            "decorators": [],
            "name": "b",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 583,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 583,
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 580,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 580,
                  "end": 583,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 581,
                      "end": 582,
                      "typeName": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 582,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 585,
            "end": 600,
            "decorators": [],
            "name": "c",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 600,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 589,
                "end": 600,
                "typeName": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 597,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 597,
                  "end": 600,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 598,
                      "end": 599,
                      "typeName": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 599,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 602,
            "end": 617,
            "decorators": [],
            "name": "d",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 604,
              "end": 617,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 606,
                "end": 617,
                "typeName": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 614,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 614,
                  "end": 617,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 615,
                      "end": 616,
                      "typeName": {
                        "type": "Identifier",
                        "start": 615,
                        "end": 616,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 619,
            "end": 634,
            "decorators": [],
            "name": "e",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 621,
              "end": 634,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 623,
                "end": 634,
                "typeName": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 631,
                  "decorators": [],
                  "name": "bluebird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 631,
                  "end": 634,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 632,
                      "end": 633,
                      "typeName": {
                        "type": "Identifier",
                        "start": 632,
                        "end": 633,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 636,
          "end": 914,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 642,
              "end": 719,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 646,
                  "end": 718,
                  "id": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 652,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 655,
                    "end": 718,
                    "argument": {
                      "type": "CallExpression",
                      "start": 661,
                      "end": 718,
                      "callee": {
                        "type": "TSAsExpression",
                        "start": 662,
                        "end": 681,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 662,
                          "end": 674,
                          "object": {
                            "type": "Identifier",
                            "start": 662,
                            "end": 670,
                            "decorators": [],
                            "name": "bluebird",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 671,
                            "end": 674,
                            "decorators": [],
                            "name": "all",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 678,
                          "end": 681
                        }
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 683,
                          "end": 717,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 683,
                            "end": 705,
                            "object": {
                              "type": "ArrayExpression",
                              "start": 683,
                              "end": 698,
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 684,
                                  "end": 685,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 687,
                                  "end": 688,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 690,
                                  "end": 691,
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 693,
                                  "end": 694,
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 696,
                                  "end": 697,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 699,
                              "end": 705,
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 706,
                              "end": 716,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 706,
                                  "end": 708,
                                  "decorators": [],
                                  "name": "el",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "UnaryExpression",
                                "start": 712,
                                "end": 716,
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 713,
                                  "end": 716,
                                  "operator": "!",
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 714,
                                    "end": 716,
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
                                },
                                "prefix": true
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        }
                      ],
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 724,
              "end": 819,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 728,
                  "end": 818,
                  "id": {
                    "type": "Identifier",
                    "start": 728,
                    "end": 732,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 735,
                    "end": 818,
                    "expression": true,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 735,
                      "end": 738,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 736,
                          "end": 737,
                          "name": {
                            "type": "Identifier",
                            "start": 736,
                            "end": 737,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 739,
                        "end": 781,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 740,
                          "end": 781,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 742,
                            "end": 781,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 743,
                                "end": 747,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 744,
                                  "end": 747,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 746,
                                    "end": 747,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 746,
                                      "end": 747,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 749,
                                "end": 754,
                                "decorators": [],
                                "name": "b",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 751,
                                  "end": 754,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 753,
                                    "end": 754,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 753,
                                      "end": 754,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 756,
                                "end": 761,
                                "decorators": [],
                                "name": "c",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 758,
                                  "end": 761,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 760,
                                    "end": 761,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 760,
                                      "end": 761,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 763,
                                "end": 768,
                                "decorators": [],
                                "name": "d",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 765,
                                  "end": 768,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 767,
                                    "end": 768,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 767,
                                      "end": 768,
                                      "decorators": [],
                                      "name": "D",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 770,
                                "end": 775,
                                "decorators": [],
                                "name": "e",
                                "optional": true,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 772,
                                  "end": 775,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 774,
                                    "end": 775,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 774,
                                      "end": 775,
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 777,
                              "end": 781,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 780,
                                "end": 781,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 780,
                                  "end": 781,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 782,
                      "end": 785,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 784,
                        "end": 785,
                        "typeName": {
                          "type": "Identifier",
                          "start": 784,
                          "end": 785,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "body": {
                      "type": "CallExpression",
                      "start": 797,
                      "end": 818,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 797,
                        "end": 804,
                        "object": {
                          "type": "Identifier",
                          "start": 797,
                          "end": 798,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 799,
                          "end": 804,
                          "decorators": [],
                          "name": "apply",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 805,
                          "end": 809
                        },
                        {
                          "type": "Identifier",
                          "start": 811,
                          "end": 817,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 824,
              "end": 861,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 828,
                  "end": 860,
                  "id": {
                    "type": "Identifier",
                    "start": 828,
                    "end": 846,
                    "decorators": [],
                    "name": "rfunc",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 833,
                      "end": 846,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 835,
                        "end": 846,
                        "exprName": {
                          "type": "Identifier",
                          "start": 842,
                          "end": 846,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 849,
                    "end": 860,
                    "expression": {
                      "type": "Identifier",
                      "start": 849,
                      "end": 853,
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 857,
                      "end": 860
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 900,
              "end": 912,
              "argument": {
                "type": "Identifier",
                "start": 907,
                "end": 912,
                "decorators": [],
                "name": "rfunc",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
