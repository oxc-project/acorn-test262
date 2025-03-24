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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 21,
          "name": "bluebird",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 66,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 31,
              "end": 64,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "name": "all",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "bluebird",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
              "accessibility": null
            }
          ]
        },
        "decorators": [],
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
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "runSampleWorks",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [
          {
            "type": "Identifier",
            "start": 125,
            "end": 139,
            "name": "a",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 141,
            "end": 156,
            "name": "b",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "B",
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
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 158,
            "end": 173,
            "name": "c",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "C",
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
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 175,
            "end": 190,
            "name": "d",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "D",
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
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 192,
            "end": 207,
            "name": "e",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "E",
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
            "optional": true
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 209,
          "end": 492,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 215,
              "end": 292,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 219,
                  "end": 291,
                  "id": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 225,
                    "name": "result",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "bluebird",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 247,
                            "name": "all",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 251,
                          "end": 254
                        }
                      },
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
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 260,
                                  "end": 261,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 263,
                                  "end": 264,
                                  "name": "c",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 266,
                                  "end": 267,
                                  "name": "d",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 269,
                                  "end": 270,
                                  "name": "e",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 272,
                              "end": 278,
                              "name": "filter",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 279,
                              "end": 289,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 279,
                                  "end": 281,
                                  "name": "el",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "UnaryExpression",
                                "start": 285,
                                "end": 289,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 286,
                                  "end": 289,
                                  "operator": "!",
                                  "prefix": true,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 287,
                                    "end": 289,
                                    "name": "el",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              },
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 297,
              "end": 392,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 301,
                  "end": 391,
                  "id": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 305,
                    "name": "func",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 308,
                    "end": 391,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 312,
                        "end": 354,
                        "name": "f",
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
                                "name": "a",
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
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 322,
                                "end": 327,
                                "name": "b",
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
                                      "name": "B",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": true
                              },
                              {
                                "type": "Identifier",
                                "start": 329,
                                "end": 334,
                                "name": "c",
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
                                      "name": "C",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": true
                              },
                              {
                                "type": "Identifier",
                                "start": 336,
                                "end": 341,
                                "name": "d",
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
                                      "name": "D",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": true
                              },
                              {
                                "type": "Identifier",
                                "start": 343,
                                "end": 348,
                                "name": "e",
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
                                      "name": "E",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": true
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
                                  "name": "T",
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 372,
                          "end": 377,
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
                          "type": "ThisExpression",
                          "start": 378,
                          "end": 382
                        },
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 390,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 397,
              "end": 439,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 401,
                  "end": 438,
                  "id": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 424,
                    "name": "rfunc",
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
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 427,
                    "end": 438,
                    "expression": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 431,
                      "name": "func",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "kind": "let",
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
                "name": "rfunc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
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
            },
            {
              "type": "TSTypeParameter",
              "start": 108,
              "end": 109,
              "name": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
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
              "start": 111,
              "end": 112,
              "name": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
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
              "start": 114,
              "end": 115,
              "name": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 117,
              "end": 118,
              "name": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "E",
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
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "runSampleBreaks",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [
          {
            "type": "Identifier",
            "start": 552,
            "end": 566,
            "name": "a",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 568,
            "end": 583,
            "name": "b",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "B",
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
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 585,
            "end": 600,
            "name": "c",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "C",
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
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 602,
            "end": 617,
            "name": "d",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "D",
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
            "optional": true
          },
          {
            "type": "Identifier",
            "start": 619,
            "end": 634,
            "name": "e",
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
                  "name": "bluebird",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "E",
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
            "optional": true
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 636,
          "end": 914,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 642,
              "end": 719,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 646,
                  "end": 718,
                  "id": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 652,
                    "name": "result",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "bluebird",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 671,
                            "end": 674,
                            "name": "all",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 678,
                          "end": 681
                        }
                      },
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
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 687,
                                  "end": 688,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 690,
                                  "end": 691,
                                  "name": "c",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 693,
                                  "end": 694,
                                  "name": "d",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 696,
                                  "end": 697,
                                  "name": "e",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 699,
                              "end": 705,
                              "name": "filter",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 706,
                              "end": 716,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 706,
                                  "end": 708,
                                  "name": "el",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "UnaryExpression",
                                "start": 712,
                                "end": 716,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 713,
                                  "end": 716,
                                  "operator": "!",
                                  "prefix": true,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 714,
                                    "end": 716,
                                    "name": "el",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              },
                              "typeParameters": null,
                              "returnType": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 724,
              "end": 819,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 728,
                  "end": 818,
                  "id": {
                    "type": "Identifier",
                    "start": 728,
                    "end": 732,
                    "name": "func",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 735,
                    "end": 818,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 739,
                        "end": 781,
                        "name": "f",
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
                                "name": "a",
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
                                      "name": "A",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 749,
                                "end": 754,
                                "name": "b",
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
                                      "name": "B",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": true
                              },
                              {
                                "type": "Identifier",
                                "start": 756,
                                "end": 761,
                                "name": "c",
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
                                      "name": "C",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": true
                              },
                              {
                                "type": "Identifier",
                                "start": 763,
                                "end": 768,
                                "name": "d",
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
                                      "name": "D",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": true
                              },
                              {
                                "type": "Identifier",
                                "start": 770,
                                "end": 775,
                                "name": "e",
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
                                      "name": "E",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": true
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
                                  "name": "T",
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
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 799,
                          "end": 804,
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
                          "type": "ThisExpression",
                          "start": 805,
                          "end": 809
                        },
                        {
                          "type": "Identifier",
                          "start": 811,
                          "end": 817,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 824,
              "end": 861,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 828,
                  "end": 860,
                  "id": {
                    "type": "Identifier",
                    "start": 828,
                    "end": 846,
                    "name": "rfunc",
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
                          "name": "func",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 849,
                    "end": 860,
                    "expression": {
                      "type": "Identifier",
                      "start": 849,
                      "end": 853,
                      "name": "func",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "kind": "let",
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
                "name": "rfunc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
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
            },
            {
              "type": "TSTypeParameter",
              "start": 535,
              "end": 536,
              "name": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
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
              "start": 538,
              "end": 539,
              "name": {
                "type": "Identifier",
                "start": 538,
                "end": 539,
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
              "start": 541,
              "end": 542,
              "name": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 544,
              "end": 545,
              "name": {
                "type": "Identifier",
                "start": 544,
                "end": 545,
                "name": "E",
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
        "returnType": null
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
