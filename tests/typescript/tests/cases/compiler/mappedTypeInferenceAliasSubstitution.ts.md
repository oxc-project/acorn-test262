__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
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
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 38
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
                        "name": "smth",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 42,
                        "end": 46
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 48,
                        "end": 49
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 42,
                      "end": 49
                    }
                  ],
                  "start": 40,
                  "end": 51
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 34,
                "end": 51
              }
            ],
            "start": 32,
            "end": 53
          },
          "definite": false,
          "start": 28,
          "end": 53
        }
      ],
      "declare": false,
      "start": 22,
      "end": 54
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Field",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 66
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 77,
              "end": 83
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 83
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 85,
            "end": 86
          }
        ],
        "start": 66,
        "end": 87
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 94
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 99
          },
          "typeArguments": null,
          "start": 98,
          "end": 99
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "typeArguments": null,
          "start": 102,
          "end": 103
        },
        "optional": false,
        "readonly": null,
        "start": 90,
        "end": 105
      },
      "declare": false,
      "start": 56,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 128,
                    "end": 134
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 118,
                  "end": 134
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 137
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 146,
                    "end": 152
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 136,
                  "end": 152
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 155
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 154,
                  "end": 155
                }
              ],
              "start": 117,
              "end": 156
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "typeArguments": null,
                      "start": 168,
                      "end": 169
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Field",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 177
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 178,
                              "end": 179
                            },
                            "typeArguments": null,
                            "start": 178,
                            "end": 179
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 181,
                              "end": 182
                            },
                            "typeArguments": null,
                            "start": 181,
                            "end": 182
                          }
                        ],
                        "start": 177,
                        "end": 183
                      },
                      "start": 172,
                      "end": 183
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 160,
                    "end": 185
                  },
                  "start": 158,
                  "end": 185
                },
                "start": 157,
                "end": 185
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 189
                },
                "typeArguments": null,
                "start": 188,
                "end": 189
              },
              "start": 186,
              "end": 189
            },
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 194,
                "end": 196
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 200,
                "end": 203
              },
              "start": 194,
              "end": 203
            },
            "id": null,
            "generator": false,
            "start": 117,
            "end": 204
          },
          "definite": false,
          "start": 113,
          "end": 204
        }
      ],
      "declare": false,
      "start": 107,
      "end": 205
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 214
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
              }
            ],
            "optional": false,
            "start": 217,
            "end": 221
          },
          "definite": false,
          "start": 212,
          "end": 221
        }
      ],
      "declare": false,
      "start": 206,
      "end": 222
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 235,
                  "end": 251
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 263,
                    "end": 269
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 253,
                  "end": 269
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 272
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 271,
                  "end": 272
                }
              ],
              "start": 234,
              "end": 273
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 282
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 283,
                            "end": 284
                          },
                          "typeArguments": null,
                          "start": 283,
                          "end": 284
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Field",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 286,
                            "end": 291
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 292,
                                  "end": 293
                                },
                                "typeArguments": null,
                                "start": 292,
                                "end": 293
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 295,
                                  "end": 296
                                },
                                "typeArguments": null,
                                "start": 295,
                                "end": 296
                              }
                            ],
                            "start": 291,
                            "end": 297
                          },
                          "start": 286,
                          "end": 297
                        }
                      ],
                      "start": 282,
                      "end": 298
                    },
                    "start": 277,
                    "end": 298
                  },
                  "start": 275,
                  "end": 298
                },
                "start": 274,
                "end": 298
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 302
                },
                "typeArguments": null,
                "start": 301,
                "end": 302
              },
              "start": 299,
              "end": 302
            },
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 307,
                "end": 309
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 313,
                "end": 316
              },
              "start": 307,
              "end": 316
            },
            "id": null,
            "generator": false,
            "start": 234,
            "end": 317
          },
          "definite": false,
          "start": 230,
          "end": 317
        }
      ],
      "declare": false,
      "start": 224,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 333
              }
            ],
            "optional": false,
            "start": 330,
            "end": 334
          },
          "definite": false,
          "start": 325,
          "end": 334
        }
      ],
      "declare": false,
      "start": 319,
      "end": 335
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 335
}
```
