__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 2058,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 90,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 69,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
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
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 90,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 76,
                    "end": 88,
                    "argument": {
                      "type": "Literal",
                      "start": 83,
                      "end": 87,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 61,
                "end": 64,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 62,
                    "end": 63,
                    "name": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
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
                "start": 70,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 73,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 142,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 140,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 114,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 140,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 115,
                  "end": 119,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 118,
                      "end": 119,
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
                        "name": "U",
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
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 140,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 126,
                    "end": 138,
                    "argument": {
                      "type": "Literal",
                      "start": 133,
                      "end": 137,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 120,
                "end": 123,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 122,
                  "end": 123,
                  "typeName": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "U",
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
    {
      "type": "ClassDeclaration",
      "start": 144,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 192,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 161,
            "end": 190,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 164,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 190,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 169,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 169,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 168,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "name": "V",
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
              "body": {
                "type": "BlockStatement",
                "start": 174,
                "end": 190,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 176,
                    "end": 188,
                    "argument": {
                      "type": "Literal",
                      "start": 183,
                      "end": 187,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 170,
                "end": 173,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 172,
                  "end": 173,
                  "typeName": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "name": "V",
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 194,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 207,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "name": "X",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 209,
        "end": 230,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 215,
            "end": 228,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 219,
                "end": 223,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 220,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "name": "X",
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
              "start": 224,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 227,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 232,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 244,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 245,
        "end": 269,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 251,
            "end": 267,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 254,
              "end": 257,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 255,
                  "end": 256,
                  "name": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 256,
                    "name": "Y",
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
                "start": 258,
                "end": 262,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 259,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 261,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "name": "Y",
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
              "start": 263,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 297,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 297,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 278,
                "end": 297,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 280,
                    "end": 295,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 283,
                      "end": 286,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 284,
                          "end": 285,
                          "name": {
                            "type": "Identifier",
                            "start": 284,
                            "end": 285,
                            "name": "Z",
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
                        "start": 287,
                        "end": 291,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 288,
                          "end": 291,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 290,
                            "end": 291,
                            "typeName": {
                              "type": "Identifier",
                              "start": 290,
                              "end": 291,
                              "name": "Z",
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
                      "start": 292,
                      "end": 295,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 294,
                        "end": 295,
                        "typeName": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "name": "Z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 306,
            "end": 336,
            "properties": [
              {
                "type": "Property",
                "start": 308,
                "end": 334,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 311,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 311,
                  "end": 334,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 315,
                      "end": 319,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 316,
                        "end": 319,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 318,
                          "end": 319,
                          "typeName": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 319,
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
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 321,
                    "end": 334,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 323,
                        "end": 332,
                        "argument": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 331,
                          "name": "x",
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
                    "start": 311,
                    "end": 314,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 312,
                        "end": 313,
                        "name": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 313,
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
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 339,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 352,
        "name": "foo1",
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
          "start": 353,
          "end": 357,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 354,
            "end": 357,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 356,
              "end": 357,
              "typeName": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 360,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 373,
        "name": "foo1",
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
          "start": 374,
          "end": 378,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 375,
            "end": 378,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 377,
              "end": 378,
              "typeName": {
                "type": "Identifier",
                "start": 377,
                "end": 378,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 403,
        "name": "foo1",
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
          "start": 404,
          "end": 410,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 405,
            "end": 410,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 407,
              "end": 410
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 415,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 417,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 431,
        "name": "foo1b",
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
          "start": 432,
          "end": 444,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 433,
            "end": 444,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 435,
              "end": 444,
              "typeName": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 436,
                "end": 444,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 437,
                    "end": 443
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 447,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 461,
        "name": "foo1b",
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
          "start": 462,
          "end": 474,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 463,
            "end": 474,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 465,
              "end": 474,
              "typeName": {
                "type": "Identifier",
                "start": 465,
                "end": 466,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 466,
                "end": 474,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 467,
                    "end": 473
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 486,
      "end": 512,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 500,
        "name": "foo1b",
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
          "start": 501,
          "end": 507,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 502,
            "end": 507,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 504,
              "end": 507
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 509,
        "end": 512,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 514,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 523,
        "end": 528,
        "name": "foo1c",
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
          "start": 529,
          "end": 541,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 530,
            "end": 541,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 532,
              "end": 541,
              "typeName": {
                "type": "Identifier",
                "start": 532,
                "end": 533,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 533,
                "end": 541,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 534,
                    "end": 540
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 544,
      "end": 573,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 558,
        "name": "foo1c",
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
          "start": 559,
          "end": 571,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 560,
            "end": 571,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 562,
              "end": 571,
              "typeName": {
                "type": "Identifier",
                "start": 562,
                "end": 563,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 563,
                "end": 571,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 564,
                    "end": 570
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 583,
      "end": 609,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 597,
        "name": "foo1c",
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
          "start": 598,
          "end": 604,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 599,
            "end": 604,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 601,
              "end": 604
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 606,
        "end": 609,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 611,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 620,
        "end": 624,
        "name": "foo2",
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
          "start": 625,
          "end": 637,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 626,
            "end": 637,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 628,
              "end": 637,
              "typeName": {
                "type": "Identifier",
                "start": 628,
                "end": 629,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 629,
                "end": 637,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 630,
                    "end": 636
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 640,
      "end": 668,
      "id": {
        "type": "Identifier",
        "start": 649,
        "end": 653,
        "name": "foo2",
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
          "start": 654,
          "end": 666,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 655,
            "end": 666,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 657,
              "end": 666,
              "typeName": {
                "type": "Identifier",
                "start": 657,
                "end": 658,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 658,
                "end": 666,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 659,
                    "end": 665
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 678,
      "end": 703,
      "id": {
        "type": "Identifier",
        "start": 687,
        "end": 691,
        "name": "foo2",
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
          "start": 692,
          "end": 698,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 693,
            "end": 698,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 695,
              "end": 698
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 700,
        "end": 703,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 705,
      "end": 732,
      "id": {
        "type": "Identifier",
        "start": 714,
        "end": 718,
        "name": "foo3",
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
          "start": 719,
          "end": 730,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 720,
            "end": 730,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 722,
              "end": 730,
              "exprName": {
                "type": "Identifier",
                "start": 729,
                "end": 730,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 733,
      "end": 760,
      "id": {
        "type": "Identifier",
        "start": 742,
        "end": 746,
        "name": "foo3",
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
          "start": 747,
          "end": 758,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 748,
            "end": 758,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 750,
              "end": 758,
              "exprName": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 770,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 779,
        "end": 783,
        "name": "foo3",
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
          "start": 784,
          "end": 790,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 785,
            "end": 790,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 787,
              "end": 790
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 792,
        "end": 795,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 797,
      "end": 824,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 810,
        "name": "foo4",
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
          "start": 811,
          "end": 822,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 812,
            "end": 822,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 814,
              "end": 822,
              "exprName": {
                "type": "Identifier",
                "start": 821,
                "end": 822,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 825,
      "end": 852,
      "id": {
        "type": "Identifier",
        "start": 834,
        "end": 838,
        "name": "foo4",
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
          "start": 839,
          "end": 850,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 840,
            "end": 850,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 842,
              "end": 850,
              "exprName": {
                "type": "Identifier",
                "start": 849,
                "end": 850,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 862,
      "end": 887,
      "id": {
        "type": "Identifier",
        "start": 871,
        "end": 875,
        "name": "foo4",
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
          "start": 876,
          "end": 882,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 877,
            "end": 882,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 879,
              "end": 882
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 884,
        "end": 887,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 889,
      "end": 909,
      "id": {
        "type": "Identifier",
        "start": 898,
        "end": 902,
        "name": "foo5",
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
          "start": 903,
          "end": 907,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 904,
            "end": 907,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 906,
              "end": 907,
              "typeName": {
                "type": "Identifier",
                "start": 906,
                "end": 907,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 910,
      "end": 938,
      "id": {
        "type": "Identifier",
        "start": 919,
        "end": 923,
        "name": "foo5",
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
          "start": 924,
          "end": 936,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 925,
            "end": 936,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 927,
              "end": 936,
              "typeName": {
                "type": "Identifier",
                "start": 927,
                "end": 928,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 928,
                "end": 936,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 929,
                    "end": 935
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 945,
      "end": 970,
      "id": {
        "type": "Identifier",
        "start": 954,
        "end": 958,
        "name": "foo5",
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
          "start": 959,
          "end": 965,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 960,
            "end": 965,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 962,
              "end": 965
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 967,
        "end": 970,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 972,
      "end": 993,
      "id": {
        "type": "Identifier",
        "start": 981,
        "end": 986,
        "name": "foo5b",
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
          "start": 987,
          "end": 991,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 988,
            "end": 991,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 990,
              "end": 991,
              "typeName": {
                "type": "Identifier",
                "start": 990,
                "end": 991,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 994,
      "end": 1023,
      "id": {
        "type": "Identifier",
        "start": 1003,
        "end": 1008,
        "name": "foo5b",
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
          "start": 1009,
          "end": 1021,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1010,
            "end": 1021,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1012,
              "end": 1021,
              "typeName": {
                "type": "Identifier",
                "start": 1012,
                "end": 1013,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1013,
                "end": 1021,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1014,
                    "end": 1020
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1030,
      "end": 1056,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1044,
        "name": "foo5b",
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
          "start": 1045,
          "end": 1051,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1046,
            "end": 1051,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1048,
              "end": 1051
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1053,
        "end": 1056,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1058,
      "end": 1078,
      "id": {
        "type": "Identifier",
        "start": 1067,
        "end": 1071,
        "name": "foo6",
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
          "start": 1072,
          "end": 1076,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1073,
            "end": 1076,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1075,
              "end": 1076,
              "typeName": {
                "type": "Identifier",
                "start": 1075,
                "end": 1076,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1079,
      "end": 1107,
      "id": {
        "type": "Identifier",
        "start": 1088,
        "end": 1092,
        "name": "foo6",
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
          "start": 1093,
          "end": 1105,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1094,
            "end": 1105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1096,
              "end": 1105,
              "typeName": {
                "type": "Identifier",
                "start": 1096,
                "end": 1097,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1097,
                "end": 1105,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1098,
                    "end": 1104
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1114,
      "end": 1139,
      "id": {
        "type": "Identifier",
        "start": 1123,
        "end": 1127,
        "name": "foo6",
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
          "start": 1128,
          "end": 1134,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1129,
            "end": 1134,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1131,
              "end": 1134
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1136,
        "end": 1139,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1141,
      "end": 1161,
      "id": {
        "type": "Identifier",
        "start": 1150,
        "end": 1154,
        "name": "foo7",
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
          "start": 1155,
          "end": 1159,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1156,
            "end": 1159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1158,
              "end": 1159,
              "typeName": {
                "type": "Identifier",
                "start": 1158,
                "end": 1159,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1162,
      "end": 1189,
      "id": {
        "type": "Identifier",
        "start": 1171,
        "end": 1175,
        "name": "foo7",
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
          "start": 1176,
          "end": 1187,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1177,
            "end": 1187,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1179,
              "end": 1187,
              "exprName": {
                "type": "Identifier",
                "start": 1186,
                "end": 1187,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1199,
      "end": 1224,
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1212,
        "name": "foo7",
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
          "start": 1213,
          "end": 1219,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1214,
            "end": 1219,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1216,
              "end": 1219
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1221,
        "end": 1224,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1226,
      "end": 1254,
      "id": {
        "type": "Identifier",
        "start": 1235,
        "end": 1239,
        "name": "foo8",
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
          "start": 1240,
          "end": 1252,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1241,
            "end": 1252,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1243,
              "end": 1252,
              "typeName": {
                "type": "Identifier",
                "start": 1243,
                "end": 1244,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1244,
                "end": 1252,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1245,
                    "end": 1251
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1255,
      "end": 1283,
      "id": {
        "type": "Identifier",
        "start": 1264,
        "end": 1268,
        "name": "foo8",
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
          "start": 1269,
          "end": 1281,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1270,
            "end": 1281,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1272,
              "end": 1281,
              "typeName": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1273,
                "end": 1281,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1274,
                    "end": 1280
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1293,
      "end": 1318,
      "id": {
        "type": "Identifier",
        "start": 1302,
        "end": 1306,
        "name": "foo8",
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
          "start": 1307,
          "end": 1313,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1308,
            "end": 1313,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1310,
              "end": 1313
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1315,
        "end": 1318,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1320,
      "end": 1348,
      "id": {
        "type": "Identifier",
        "start": 1329,
        "end": 1333,
        "name": "foo9",
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
          "start": 1334,
          "end": 1346,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1335,
            "end": 1346,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1337,
              "end": 1346,
              "typeName": {
                "type": "Identifier",
                "start": 1337,
                "end": 1338,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1338,
                "end": 1346,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1339,
                    "end": 1345
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1349,
      "end": 1377,
      "id": {
        "type": "Identifier",
        "start": 1358,
        "end": 1362,
        "name": "foo9",
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
          "start": 1363,
          "end": 1375,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1364,
            "end": 1375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1366,
              "end": 1375,
              "typeName": {
                "type": "Identifier",
                "start": 1366,
                "end": 1367,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1367,
                "end": 1375,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1368,
                    "end": 1374
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1387,
      "end": 1412,
      "id": {
        "type": "Identifier",
        "start": 1396,
        "end": 1400,
        "name": "foo9",
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
          "start": 1401,
          "end": 1407,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1402,
            "end": 1407,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1404,
              "end": 1407
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1409,
        "end": 1412,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1414,
      "end": 1443,
      "id": {
        "type": "Identifier",
        "start": 1423,
        "end": 1428,
        "name": "foo10",
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
          "start": 1429,
          "end": 1441,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1430,
            "end": 1441,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1432,
              "end": 1441,
              "typeName": {
                "type": "Identifier",
                "start": 1432,
                "end": 1433,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1433,
                "end": 1441,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1434,
                    "end": 1440
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1444,
      "end": 1472,
      "id": {
        "type": "Identifier",
        "start": 1453,
        "end": 1458,
        "name": "foo10",
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
          "start": 1459,
          "end": 1470,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1460,
            "end": 1470,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1462,
              "end": 1470,
              "exprName": {
                "type": "Identifier",
                "start": 1469,
                "end": 1470,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1479,
      "end": 1505,
      "id": {
        "type": "Identifier",
        "start": 1488,
        "end": 1493,
        "name": "foo10",
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
          "start": 1494,
          "end": 1500,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1495,
            "end": 1500,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1497,
              "end": 1500
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1502,
        "end": 1505,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1507,
      "end": 1536,
      "id": {
        "type": "Identifier",
        "start": 1516,
        "end": 1521,
        "name": "foo11",
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
          "start": 1522,
          "end": 1534,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1523,
            "end": 1534,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1525,
              "end": 1534,
              "typeName": {
                "type": "Identifier",
                "start": 1525,
                "end": 1526,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1526,
                "end": 1534,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1527,
                    "end": 1533
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1537,
      "end": 1565,
      "id": {
        "type": "Identifier",
        "start": 1546,
        "end": 1551,
        "name": "foo11",
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
          "start": 1552,
          "end": 1563,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1553,
            "end": 1563,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1555,
              "end": 1563,
              "exprName": {
                "type": "Identifier",
                "start": 1562,
                "end": 1563,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1572,
      "end": 1598,
      "id": {
        "type": "Identifier",
        "start": 1581,
        "end": 1586,
        "name": "foo11",
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
          "start": 1587,
          "end": 1593,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1588,
            "end": 1593,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1590,
              "end": 1593
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1595,
        "end": 1598,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1600,
      "end": 1629,
      "id": {
        "type": "Identifier",
        "start": 1609,
        "end": 1614,
        "name": "foo12",
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
          "start": 1615,
          "end": 1627,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1616,
            "end": 1627,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1618,
              "end": 1627,
              "typeName": {
                "type": "Identifier",
                "start": 1618,
                "end": 1619,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1619,
                "end": 1627,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1620,
                    "end": 1626
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1630,
      "end": 1659,
      "id": {
        "type": "Identifier",
        "start": 1639,
        "end": 1644,
        "name": "foo12",
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
          "start": 1645,
          "end": 1657,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1646,
            "end": 1657,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1648,
              "end": 1657,
              "typeName": {
                "type": "Identifier",
                "start": 1648,
                "end": 1649,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1649,
                "end": 1657,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1650,
                    "end": 1656
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1669,
      "end": 1695,
      "id": {
        "type": "Identifier",
        "start": 1678,
        "end": 1683,
        "name": "foo12",
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
          "start": 1684,
          "end": 1690,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1685,
            "end": 1690,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1687,
              "end": 1690
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1692,
        "end": 1695,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1697,
      "end": 1720,
      "id": {
        "type": "Identifier",
        "start": 1706,
        "end": 1712,
        "name": "foo12b",
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
          "start": 1713,
          "end": 1718,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1714,
            "end": 1718,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1716,
              "end": 1718,
              "typeName": {
                "type": "Identifier",
                "start": 1716,
                "end": 1718,
                "name": "I2",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1721,
      "end": 1751,
      "id": {
        "type": "Identifier",
        "start": 1730,
        "end": 1736,
        "name": "foo12b",
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
          "start": 1737,
          "end": 1749,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1738,
            "end": 1749,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1740,
              "end": 1749,
              "typeName": {
                "type": "Identifier",
                "start": 1740,
                "end": 1741,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1741,
                "end": 1749,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1742,
                    "end": 1748
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1758,
      "end": 1785,
      "id": {
        "type": "Identifier",
        "start": 1767,
        "end": 1773,
        "name": "foo12b",
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
          "start": 1774,
          "end": 1780,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1775,
            "end": 1780,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1777,
              "end": 1780
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1782,
        "end": 1785,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1787,
      "end": 1816,
      "id": {
        "type": "Identifier",
        "start": 1796,
        "end": 1801,
        "name": "foo13",
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
          "start": 1802,
          "end": 1814,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1803,
            "end": 1814,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1805,
              "end": 1814,
              "typeName": {
                "type": "Identifier",
                "start": 1805,
                "end": 1806,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1806,
                "end": 1814,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1807,
                    "end": 1813
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1817,
      "end": 1845,
      "id": {
        "type": "Identifier",
        "start": 1826,
        "end": 1831,
        "name": "foo13",
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
          "start": 1832,
          "end": 1843,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1833,
            "end": 1843,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1835,
              "end": 1843,
              "exprName": {
                "type": "Identifier",
                "start": 1842,
                "end": 1843,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1852,
      "end": 1878,
      "id": {
        "type": "Identifier",
        "start": 1861,
        "end": 1866,
        "name": "foo13",
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
          "start": 1867,
          "end": 1873,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1868,
            "end": 1873,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1870,
              "end": 1873
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1875,
        "end": 1878,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1880,
      "end": 1909,
      "id": {
        "type": "Identifier",
        "start": 1889,
        "end": 1894,
        "name": "foo14",
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
          "start": 1895,
          "end": 1907,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1896,
            "end": 1907,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1898,
              "end": 1907,
              "typeName": {
                "type": "Identifier",
                "start": 1898,
                "end": 1899,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1899,
                "end": 1907,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1900,
                    "end": 1906
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1910,
      "end": 1938,
      "id": {
        "type": "Identifier",
        "start": 1919,
        "end": 1924,
        "name": "foo14",
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
          "start": 1925,
          "end": 1936,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1926,
            "end": 1936,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1928,
              "end": 1936,
              "exprName": {
                "type": "Identifier",
                "start": 1935,
                "end": 1936,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1945,
      "end": 1971,
      "id": {
        "type": "Identifier",
        "start": 1954,
        "end": 1959,
        "name": "foo14",
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
          "start": 1960,
          "end": 1966,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1961,
            "end": 1966,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1963,
              "end": 1966
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1968,
        "end": 1971,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1973,
      "end": 1995,
      "id": {
        "type": "Identifier",
        "start": 1982,
        "end": 1987,
        "name": "foo15",
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
          "start": 1988,
          "end": 1993,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1989,
            "end": 1993,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1991,
              "end": 1993,
              "typeName": {
                "type": "Identifier",
                "start": 1991,
                "end": 1993,
                "name": "I2",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1996,
      "end": 2025,
      "id": {
        "type": "Identifier",
        "start": 2005,
        "end": 2010,
        "name": "foo15",
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
          "start": 2011,
          "end": 2023,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2012,
            "end": 2023,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2014,
              "end": 2023,
              "typeName": {
                "type": "Identifier",
                "start": 2014,
                "end": 2015,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2015,
                "end": 2023,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2016,
                    "end": 2022
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2032,
      "end": 2058,
      "id": {
        "type": "Identifier",
        "start": 2041,
        "end": 2046,
        "name": "foo15",
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
          "start": 2047,
          "end": 2053,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2048,
            "end": 2053,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2050,
              "end": 2053
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2055,
        "end": 2058,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
