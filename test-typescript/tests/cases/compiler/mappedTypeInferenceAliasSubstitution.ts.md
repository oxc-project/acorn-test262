__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 336,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 32,
            "end": 53,
            "properties": [
              {
                "type": "Property",
                "start": 34,
                "end": 51,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 40,
                  "end": 51,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 42,
                      "end": 49,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 46,
                        "decorators": [],
                        "name": "smth",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 48,
                        "end": 49,
                        "raw": "5",
                        "value": 5
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 56,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 66,
        "decorators": [],
        "name": "Field",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 90,
        "end": 105,
        "constraint": {
          "type": "TSTypeReference",
          "start": 98,
          "end": 99,
          "typeName": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        "key": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 103,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "R",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 83,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 77,
              "end": 83
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "R",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 204,
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "start": 194,
              "end": 203,
              "expression": {
                "type": "ObjectExpression",
                "start": 194,
                "end": 196,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 200,
                "end": 203
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 157,
                "end": 185,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "start": 160,
                    "end": 185,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 168,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    },
                    "key": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 183,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 177,
                        "end": 183,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 178,
                            "end": 179,
                            "typeName": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 179,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 181,
                            "end": 182,
                            "typeName": {
                              "type": "Identifier",
                              "start": 181,
                              "end": 182,
                              "decorators": [],
                              "name": "R",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 177,
                        "decorators": [],
                        "name": "Field",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 189,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "decorators": [],
                  "name": "R",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 117,
              "end": 156,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 118,
                  "end": 134,
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 128,
                    "end": 134
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 136,
                  "end": 152,
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 146,
                    "end": 152
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 154,
                  "end": 155,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "R",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 214,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 217,
            "end": 221,
            "arguments": [
              {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 234,
            "end": 317,
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "start": 307,
              "end": 316,
              "expression": {
                "type": "ObjectExpression",
                "start": 307,
                "end": 309,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 313,
                "end": 316
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 274,
                "end": 298,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 298,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 277,
                    "end": 298,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 282,
                      "end": 298,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 283,
                          "end": 284,
                          "typeName": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 284,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 286,
                          "end": 297,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 291,
                            "end": 297,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 292,
                                "end": 293,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 292,
                                  "end": 293,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 295,
                                "end": 296,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 295,
                                  "end": 296,
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 286,
                            "end": 291,
                            "decorators": [],
                            "name": "Field",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 282,
                      "decorators": [],
                      "name": "Field",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 301,
                "end": 302,
                "typeName": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 302,
                  "decorators": [],
                  "name": "R",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 234,
              "end": 273,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 235,
                  "end": 251,
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 253,
                  "end": 269,
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 263,
                    "end": 269
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 271,
                  "end": 272,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "decorators": [],
                    "name": "R",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 334,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 330,
            "end": 334,
            "arguments": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 333,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
