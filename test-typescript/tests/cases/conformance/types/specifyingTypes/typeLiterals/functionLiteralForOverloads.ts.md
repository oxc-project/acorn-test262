__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 51,
  "end": 346,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 111,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 58,
                "end": 111,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 64,
                    "end": 84,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 65,
                        "end": 74,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 66,
                          "end": 74,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 68,
                            "end": 74
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 89,
                    "end": 109,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 90,
                        "end": 99,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 93,
                            "end": 99
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 114,
            "end": 122,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 192,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 133,
                "end": 192,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 139,
                    "end": 162,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 139,
                      "end": 142,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 140,
                          "end": 141,
                          "name": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 141,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 143,
                        "end": 152,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 144,
                          "end": 152,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 146,
                            "end": 152
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 153,
                      "end": 161,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 155,
                        "end": 161
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 167,
                    "end": 190,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 167,
                      "end": 170,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 168,
                          "end": 169,
                          "name": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 169,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 171,
                        "end": 180,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 172,
                          "end": 180,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 174,
                            "end": 180
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 183,
                        "end": 189
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 195,
            "end": 203,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 263,
            "name": "f3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 263,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 214,
                "end": 263,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 220,
                    "end": 238,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 220,
                      "end": 223,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 221,
                          "end": 222,
                          "name": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 222,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 224,
                        "end": 228,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 225,
                          "end": 228,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 227,
                            "end": 228,
                            "typeName": {
                              "type": "Identifier",
                              "start": 227,
                              "end": 228,
                              "name": "T",
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
                      "start": 229,
                      "end": 237,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 231,
                        "end": 237
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 243,
                    "end": 261,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 243,
                      "end": 246,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 244,
                          "end": 245,
                          "name": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 245,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 247,
                        "end": 251,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 248,
                          "end": 251,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 250,
                            "end": 251,
                            "typeName": {
                              "type": "Identifier",
                              "start": 250,
                              "end": 251,
                              "name": "T",
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
                      "start": 252,
                      "end": 260,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 254,
                        "end": 260
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 266,
            "end": 274,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 334,
            "name": "f4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 334,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 285,
                "end": 334,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 291,
                    "end": 309,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 291,
                      "end": 294,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 292,
                          "end": 293,
                          "name": {
                            "type": "Identifier",
                            "start": 292,
                            "end": 293,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 295,
                        "end": 304,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 296,
                          "end": 304,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 298,
                            "end": 304
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 314,
                    "end": 332,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 314,
                      "end": 317,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 315,
                          "end": 316,
                          "name": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 316,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 318,
                        "end": 327,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 319,
                          "end": 327,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 321,
                            "end": 327
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 328,
                      "end": 331,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 330,
                        "end": 331,
                        "typeName": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 331,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 337,
            "end": 345,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 338,
                "end": 339,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
