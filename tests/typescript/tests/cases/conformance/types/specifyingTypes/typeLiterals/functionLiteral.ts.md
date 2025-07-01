__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 57,
              "end": 58
            },
            "id": null,
            "generator": false,
            "start": 51,
            "end": 58
          },
          "definite": false,
          "start": 47,
          "end": 58
        }
      ],
      "declare": false,
      "start": 43,
      "end": 59
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "start": 73,
                    "end": 84
                  }
                ],
                "start": 67,
                "end": 86
              },
              "start": 65,
              "end": 86
            },
            "start": 64,
            "end": 86
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 86
        }
      ],
      "declare": false,
      "start": 60,
      "end": 86
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 101,
                            "end": 107
                          },
                          "start": 99,
                          "end": 107
                        },
                        "start": 98,
                        "end": 107
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      },
                      "start": 108,
                      "end": 116
                    },
                    "start": 97,
                    "end": 117
                  }
                ],
                "start": 95,
                "end": 119
              },
              "start": 93,
              "end": 119
            },
            "start": 92,
            "end": 119
          },
          "init": null,
          "definite": false,
          "start": 92,
          "end": 119
        }
      ],
      "declare": false,
      "start": 88,
      "end": 120
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 132,
                        "end": 138
                      },
                      "start": 130,
                      "end": 138
                    },
                    "start": 129,
                    "end": 138
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 143,
                    "end": 149
                  },
                  "start": 140,
                  "end": 149
                },
                "start": 128,
                "end": 149
              },
              "start": 126,
              "end": 149
            },
            "start": 125,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 125,
          "end": 149
        }
      ],
      "declare": false,
      "start": 121,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 162,
                            "end": 163
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 162,
                          "end": 163
                        }
                      ],
                      "start": 161,
                      "end": 164
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 168,
                              "end": 169
                            },
                            "typeArguments": null,
                            "start": 168,
                            "end": 169
                          },
                          "start": 166,
                          "end": 169
                        },
                        "start": 165,
                        "end": 169
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 173
                        },
                        "typeArguments": null,
                        "start": 172,
                        "end": 173
                      },
                      "start": 170,
                      "end": 173
                    },
                    "start": 161,
                    "end": 174
                  }
                ],
                "start": 159,
                "end": 176
              },
              "start": 157,
              "end": 176
            },
            "start": 155,
            "end": 176
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 181
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 180,
                  "end": 181
                }
              ],
              "start": 179,
              "end": 182
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    },
                    "typeArguments": null,
                    "start": 186,
                    "end": 187
                  },
                  "start": 184,
                  "end": 187
                },
                "start": 183,
                "end": 187
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
            },
            "id": null,
            "generator": false,
            "start": 179,
            "end": 193
          },
          "definite": false,
          "start": 155,
          "end": 193
        }
      ],
      "declare": false,
      "start": 151,
      "end": 193
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 212,
                            "end": 218
                          },
                          "start": 210,
                          "end": 218
                        },
                        "start": 209,
                        "end": 218
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 221,
                        "end": 227
                      },
                      "start": 219,
                      "end": 227
                    },
                    "start": 204,
                    "end": 228
                  }
                ],
                "start": 202,
                "end": 230
              },
              "start": 200,
              "end": 230
            },
            "start": 199,
            "end": 230
          },
          "init": null,
          "definite": false,
          "start": 199,
          "end": 230
        }
      ],
      "declare": false,
      "start": 195,
      "end": 231
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 247,
                        "end": 253
                      },
                      "start": 245,
                      "end": 253
                    },
                    "start": 244,
                    "end": 253
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 258,
                    "end": 264
                  },
                  "start": 255,
                  "end": 264
                },
                "start": 239,
                "end": 264
              },
              "start": 237,
              "end": 264
            },
            "start": 236,
            "end": 264
          },
          "init": null,
          "definite": false,
          "start": 236,
          "end": 264
        }
      ],
      "declare": false,
      "start": 232,
      "end": 265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 265
}
```
