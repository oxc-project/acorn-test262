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
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 40,
                  "end": 51,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 42,
                      "end": 49,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 46,
                        "name": "smth",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 48,
                        "end": 49,
                        "value": 5,
                        "raw": "5"
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 56,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 66,
        "name": "Field",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 77,
              "end": 83
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "R",
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
        "start": 90,
        "end": 105,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 93,
          "end": 99,
          "name": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 98,
            "end": 99,
            "typeName": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
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
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 98,
          "end": 99,
          "typeName": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 204,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 157,
                "end": 185,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "start": 160,
                    "end": 185,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 163,
                      "end": 169,
                      "name": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 168,
                        "end": 169,
                        "typeName": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 183,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 177,
                        "name": "Field",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 181,
                            "end": 182,
                            "typeName": {
                              "type": "Identifier",
                              "start": 181,
                              "end": 182,
                              "name": "R",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "optional": null,
                    "readonly": null,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 168,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "key": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 117,
              "end": 156,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 118,
                  "end": 134,
                  "name": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 128,
                    "end": 134
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 136,
                  "end": 152,
                  "name": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 146,
                    "end": 152
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 154,
                  "end": 155,
                  "name": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "R",
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
                  "name": "R",
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 214,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 217,
            "end": 221,
            "callee": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "name": "v",
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
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 234,
            "end": 317,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 274,
                "end": 298,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 298,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 277,
                    "end": 298,
                    "typeName": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 282,
                      "name": "Field",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 286,
                          "end": 297,
                          "typeName": {
                            "type": "Identifier",
                            "start": 286,
                            "end": 291,
                            "name": "Field",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 295,
                                "end": 296,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 295,
                                  "end": 296,
                                  "name": "R",
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 234,
              "end": 273,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 235,
                  "end": 251,
                  "name": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 253,
                  "end": 269,
                  "name": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 263,
                    "end": 269
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 271,
                  "end": 272,
                  "name": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "name": "R",
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
                  "name": "R",
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 330,
            "end": 334,
            "callee": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 333,
                "name": "v",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
