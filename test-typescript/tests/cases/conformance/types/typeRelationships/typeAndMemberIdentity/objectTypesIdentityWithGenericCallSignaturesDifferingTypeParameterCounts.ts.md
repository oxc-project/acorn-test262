__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 2509,
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
      "end": 145,
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
        "start": 108,
        "end": 145,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 143,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 118,
                  "end": 122,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 121,
                      "end": 122,
                      "typeName": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
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
                "start": 127,
                "end": 143,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 141,
                    "argument": {
                      "type": "Literal",
                      "start": 136,
                      "end": 140,
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
                "start": 123,
                "end": 126,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 125,
                  "end": 126,
                  "typeName": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
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
        "end": 107,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 106,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
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
      "type": "ClassDeclaration",
      "start": 147,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 164,
        "end": 201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 170,
            "end": 199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 173,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 199,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 174,
                  "end": 178,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
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
                "start": 183,
                "end": 199,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 185,
                    "end": 197,
                    "argument": {
                      "type": "Literal",
                      "start": 192,
                      "end": 196,
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
                "start": 179,
                "end": 182,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 181,
                  "end": 182,
                  "typeName": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 182,
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
        "start": 154,
        "end": 163,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 156,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 158,
            "end": 159,
            "name": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "name": "W",
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
            "start": 161,
            "end": 162,
            "name": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 203,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 214,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 216,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 218,
            "end": 219,
            "name": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 221,
            "end": 222,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 224,
            "end": 225,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 227,
        "end": 248,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 233,
            "end": 246,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 236,
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
                "start": 237,
                "end": 241,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 238,
                  "end": 241,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 240,
                    "end": 241,
                    "typeName": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 241,
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
              "start": 242,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
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
      "start": 250,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 262,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 263,
        "end": 296,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 269,
            "end": 294,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
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
              "start": 272,
              "end": 284,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 273,
                  "end": 274,
                  "name": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 276,
                  "end": 277,
                  "name": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 279,
                  "end": 280,
                  "name": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 280,
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
                  "start": 282,
                  "end": 283,
                  "name": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 283,
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 285,
                "end": 289,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 289,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 288,
                    "end": 289,
                    "typeName": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 289,
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
              "start": 290,
              "end": 293,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 292,
                "end": 293,
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
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
      "start": 298,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 336,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 305,
                "end": 336,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 307,
                    "end": 334,
                    "key": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 310,
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
                      "start": 310,
                      "end": 325,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 311,
                          "end": 312,
                          "name": {
                            "type": "Identifier",
                            "start": 311,
                            "end": 312,
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
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 314,
                          "end": 315,
                          "name": {
                            "type": "Identifier",
                            "start": 314,
                            "end": 315,
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
                          "start": 317,
                          "end": 318,
                          "name": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 318,
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
                          "start": 320,
                          "end": 321,
                          "name": {
                            "type": "Identifier",
                            "start": 320,
                            "end": 321,
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
                          "start": 323,
                          "end": 324,
                          "name": {
                            "type": "Identifier",
                            "start": 323,
                            "end": 324,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 326,
                        "end": 330,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 327,
                          "end": 330,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 329,
                            "end": 330,
                            "typeName": {
                              "type": "Identifier",
                              "start": 329,
                              "end": 330,
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
      "start": 337,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 341,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 345,
            "end": 390,
            "properties": [
              {
                "type": "Property",
                "start": 347,
                "end": 388,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 350,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 350,
                  "end": 388,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 369,
                      "end": 373,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 370,
                        "end": 373,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 372,
                          "end": 373,
                          "typeName": {
                            "type": "Identifier",
                            "start": 372,
                            "end": 373,
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
                    "start": 375,
                    "end": 388,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 377,
                        "end": 386,
                        "argument": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
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
                    "start": 350,
                    "end": 368,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 351,
                        "end": 352,
                        "name": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
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
                        "start": 354,
                        "end": 355,
                        "name": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 355,
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
                        "start": 357,
                        "end": 358,
                        "name": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 358,
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
                        "start": 360,
                        "end": 361,
                        "name": {
                          "type": "Identifier",
                          "start": 360,
                          "end": 361,
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
                        "start": 363,
                        "end": 364,
                        "name": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 364,
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
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 366,
                        "end": 367,
                        "name": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 367,
                          "name": "F",
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
      "start": 393,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 406,
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
          "start": 407,
          "end": 411,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 411,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 410,
              "end": 411,
              "typeName": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
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
      "start": 414,
      "end": 434,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 427,
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
          "start": 428,
          "end": 432,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 429,
            "end": 432,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 431,
              "end": 432,
              "typeName": {
                "type": "Identifier",
                "start": 431,
                "end": 432,
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
      "start": 444,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 457,
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
          "start": 458,
          "end": 464,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 459,
            "end": 464,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 461,
              "end": 464
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 466,
        "end": 469,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 471,
      "end": 508,
      "id": {
        "type": "Identifier",
        "start": 480,
        "end": 485,
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
          "start": 486,
          "end": 506,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 487,
            "end": 506,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 489,
              "end": 506,
              "typeName": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 490,
                "end": 506,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 491,
                    "end": 497
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
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
      "start": 509,
      "end": 546,
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 523,
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
          "start": 524,
          "end": 544,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 525,
            "end": 544,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 527,
              "end": 544,
              "typeName": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 528,
                "end": 544,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 529,
                    "end": 535
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 537,
                    "end": 543
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
      "start": 556,
      "end": 582,
      "id": {
        "type": "Identifier",
        "start": 565,
        "end": 570,
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
          "start": 571,
          "end": 577,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 577,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 574,
              "end": 577
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 579,
        "end": 582,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 584,
      "end": 630,
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 598,
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
          "start": 599,
          "end": 628,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 600,
            "end": 628,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 602,
              "end": 628,
              "typeName": {
                "type": "Identifier",
                "start": 602,
                "end": 603,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 603,
                "end": 628,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 604,
                    "end": 610
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 612,
                    "end": 618
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 620,
                    "end": 627
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
      "start": 631,
      "end": 677,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 645,
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
          "start": 646,
          "end": 675,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 647,
            "end": 675,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 649,
              "end": 675,
              "typeName": {
                "type": "Identifier",
                "start": 649,
                "end": 650,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 650,
                "end": 675,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 651,
                    "end": 657
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 659,
                    "end": 665
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 667,
                    "end": 674
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
      "start": 687,
      "end": 713,
      "id": {
        "type": "Identifier",
        "start": 696,
        "end": 701,
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
          "start": 702,
          "end": 708,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 703,
            "end": 708,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 705,
              "end": 708
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 710,
        "end": 713,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 715,
      "end": 768,
      "id": {
        "type": "Identifier",
        "start": 724,
        "end": 728,
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
          "start": 729,
          "end": 766,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 730,
            "end": 766,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 732,
              "end": 766,
              "typeName": {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 733,
                "end": 766,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 734,
                    "end": 740
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 742,
                    "end": 749
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 751,
                    "end": 757
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 759,
                    "end": 765
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
      "start": 769,
      "end": 822,
      "id": {
        "type": "Identifier",
        "start": 778,
        "end": 782,
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
          "start": 783,
          "end": 820,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 784,
            "end": 820,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 786,
              "end": 820,
              "typeName": {
                "type": "Identifier",
                "start": 786,
                "end": 787,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 787,
                "end": 820,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 788,
                    "end": 794
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 796,
                    "end": 803
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 805,
                    "end": 811
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 813,
                    "end": 819
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
      "start": 832,
      "end": 857,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 845,
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
          "start": 846,
          "end": 852,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 847,
            "end": 852,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 849,
              "end": 852
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 854,
        "end": 857,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 859,
      "end": 886,
      "id": {
        "type": "Identifier",
        "start": 868,
        "end": 872,
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
          "start": 873,
          "end": 884,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 874,
            "end": 884,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 876,
              "end": 884,
              "exprName": {
                "type": "Identifier",
                "start": 883,
                "end": 884,
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
      "start": 887,
      "end": 914,
      "id": {
        "type": "Identifier",
        "start": 896,
        "end": 900,
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
          "start": 901,
          "end": 912,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 902,
            "end": 912,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 904,
              "end": 912,
              "exprName": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
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
      "start": 924,
      "end": 949,
      "id": {
        "type": "Identifier",
        "start": 933,
        "end": 937,
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
          "start": 938,
          "end": 944,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 939,
            "end": 944,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 941,
              "end": 944
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 946,
        "end": 949,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 951,
      "end": 978,
      "id": {
        "type": "Identifier",
        "start": 960,
        "end": 964,
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
          "start": 965,
          "end": 976,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 966,
            "end": 976,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 968,
              "end": 976,
              "exprName": {
                "type": "Identifier",
                "start": 975,
                "end": 976,
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
      "start": 979,
      "end": 1006,
      "id": {
        "type": "Identifier",
        "start": 988,
        "end": 992,
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
          "start": 993,
          "end": 1004,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 994,
            "end": 1004,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 996,
              "end": 1004,
              "exprName": {
                "type": "Identifier",
                "start": 1003,
                "end": 1004,
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
      "start": 1016,
      "end": 1041,
      "id": {
        "type": "Identifier",
        "start": 1025,
        "end": 1029,
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
          "start": 1030,
          "end": 1036,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1031,
            "end": 1036,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1033,
              "end": 1036
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1038,
        "end": 1041,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1043,
      "end": 1063,
      "id": {
        "type": "Identifier",
        "start": 1052,
        "end": 1056,
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
          "start": 1057,
          "end": 1061,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1058,
            "end": 1061,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1060,
              "end": 1061,
              "typeName": {
                "type": "Identifier",
                "start": 1060,
                "end": 1061,
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
      "start": 1064,
      "end": 1100,
      "id": {
        "type": "Identifier",
        "start": 1073,
        "end": 1077,
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
          "start": 1078,
          "end": 1098,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1079,
            "end": 1098,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1081,
              "end": 1098,
              "typeName": {
                "type": "Identifier",
                "start": 1081,
                "end": 1082,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1082,
                "end": 1098,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1083,
                    "end": 1089
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1091,
                    "end": 1097
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
      "start": 1107,
      "end": 1132,
      "id": {
        "type": "Identifier",
        "start": 1116,
        "end": 1120,
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
          "start": 1121,
          "end": 1127,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1122,
            "end": 1127,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1124,
              "end": 1127
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1129,
        "end": 1132,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1134,
      "end": 1155,
      "id": {
        "type": "Identifier",
        "start": 1143,
        "end": 1148,
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
          "start": 1149,
          "end": 1153,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1150,
            "end": 1153,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1152,
              "end": 1153,
              "typeName": {
                "type": "Identifier",
                "start": 1152,
                "end": 1153,
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
      "start": 1156,
      "end": 1202,
      "id": {
        "type": "Identifier",
        "start": 1165,
        "end": 1170,
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
          "start": 1171,
          "end": 1200,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1172,
            "end": 1200,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1174,
              "end": 1200,
              "typeName": {
                "type": "Identifier",
                "start": 1174,
                "end": 1175,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1175,
                "end": 1200,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1176,
                    "end": 1182
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1184,
                    "end": 1190
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1192,
                    "end": 1199
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
      "start": 1209,
      "end": 1235,
      "id": {
        "type": "Identifier",
        "start": 1218,
        "end": 1223,
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
          "start": 1224,
          "end": 1230,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1225,
            "end": 1230,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1227,
              "end": 1230
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1232,
        "end": 1235,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1237,
      "end": 1257,
      "id": {
        "type": "Identifier",
        "start": 1246,
        "end": 1250,
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
          "start": 1251,
          "end": 1255,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1252,
            "end": 1255,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1254,
              "end": 1255,
              "typeName": {
                "type": "Identifier",
                "start": 1254,
                "end": 1255,
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
      "start": 1258,
      "end": 1309,
      "id": {
        "type": "Identifier",
        "start": 1267,
        "end": 1271,
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
          "start": 1272,
          "end": 1307,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1273,
            "end": 1307,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1275,
              "end": 1307,
              "typeName": {
                "type": "Identifier",
                "start": 1275,
                "end": 1276,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1276,
                "end": 1307,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1277,
                    "end": 1283
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1285,
                    "end": 1291
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1293,
                    "end": 1300
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1302,
                    "end": 1306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1302,
                      "end": 1306,
                      "name": "Date",
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1316,
      "end": 1341,
      "id": {
        "type": "Identifier",
        "start": 1325,
        "end": 1329,
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
          "start": 1330,
          "end": 1336,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1331,
            "end": 1336,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1333,
              "end": 1336
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1338,
        "end": 1341,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1343,
      "end": 1363,
      "id": {
        "type": "Identifier",
        "start": 1352,
        "end": 1356,
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
          "start": 1357,
          "end": 1361,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1358,
            "end": 1361,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1360,
              "end": 1361,
              "typeName": {
                "type": "Identifier",
                "start": 1360,
                "end": 1361,
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
      "start": 1364,
      "end": 1391,
      "id": {
        "type": "Identifier",
        "start": 1373,
        "end": 1377,
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
          "start": 1378,
          "end": 1389,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1379,
            "end": 1389,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1381,
              "end": 1389,
              "exprName": {
                "type": "Identifier",
                "start": 1388,
                "end": 1389,
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
      "start": 1410,
      "end": 1435,
      "id": {
        "type": "Identifier",
        "start": 1419,
        "end": 1423,
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
          "start": 1424,
          "end": 1430,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1425,
            "end": 1430,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1427,
              "end": 1430
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1432,
        "end": 1435,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1437,
      "end": 1473,
      "id": {
        "type": "Identifier",
        "start": 1446,
        "end": 1450,
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
          "start": 1451,
          "end": 1471,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1452,
            "end": 1471,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1454,
              "end": 1471,
              "typeName": {
                "type": "Identifier",
                "start": 1454,
                "end": 1455,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1455,
                "end": 1471,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1456,
                    "end": 1462
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1464,
                    "end": 1470
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
      "start": 1474,
      "end": 1525,
      "id": {
        "type": "Identifier",
        "start": 1483,
        "end": 1487,
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
          "start": 1488,
          "end": 1523,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1489,
            "end": 1523,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1491,
              "end": 1523,
              "typeName": {
                "type": "Identifier",
                "start": 1491,
                "end": 1492,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1492,
                "end": 1523,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1493,
                    "end": 1499
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1501,
                    "end": 1507
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1509,
                    "end": 1516
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1518,
                    "end": 1522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1518,
                      "end": 1522,
                      "name": "Date",
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1535,
      "end": 1560,
      "id": {
        "type": "Identifier",
        "start": 1544,
        "end": 1548,
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
          "start": 1549,
          "end": 1555,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1550,
            "end": 1555,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1552,
              "end": 1555
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1557,
        "end": 1560,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1562,
      "end": 1598,
      "id": {
        "type": "Identifier",
        "start": 1571,
        "end": 1575,
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
          "start": 1576,
          "end": 1596,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1577,
            "end": 1596,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1579,
              "end": 1596,
              "typeName": {
                "type": "Identifier",
                "start": 1579,
                "end": 1580,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1580,
                "end": 1596,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1581,
                    "end": 1587
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1589,
                    "end": 1595
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
      "start": 1599,
      "end": 1654,
      "id": {
        "type": "Identifier",
        "start": 1608,
        "end": 1612,
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
          "start": 1613,
          "end": 1652,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1614,
            "end": 1652,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1616,
              "end": 1652,
              "typeName": {
                "type": "Identifier",
                "start": 1616,
                "end": 1617,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1617,
                "end": 1652,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1618,
                    "end": 1624
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1626,
                    "end": 1632
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1634,
                    "end": 1651,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1634,
                      "end": 1635,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1635,
                      "end": 1651,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1636,
                          "end": 1642
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1644,
                          "end": 1650
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1664,
      "end": 1689,
      "id": {
        "type": "Identifier",
        "start": 1673,
        "end": 1677,
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
          "start": 1678,
          "end": 1684,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1679,
            "end": 1684,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1681,
              "end": 1684
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1686,
        "end": 1689,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1691,
      "end": 1729,
      "id": {
        "type": "Identifier",
        "start": 1700,
        "end": 1705,
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
          "start": 1706,
          "end": 1727,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1707,
            "end": 1727,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1709,
              "end": 1727,
              "typeName": {
                "type": "Identifier",
                "start": 1709,
                "end": 1710,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1710,
                "end": 1727,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1711,
                    "end": 1717
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1719,
                    "end": 1726
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
      "start": 1730,
      "end": 1758,
      "id": {
        "type": "Identifier",
        "start": 1739,
        "end": 1744,
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
          "start": 1745,
          "end": 1756,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1746,
            "end": 1756,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1748,
              "end": 1756,
              "exprName": {
                "type": "Identifier",
                "start": 1755,
                "end": 1756,
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
      "start": 1765,
      "end": 1791,
      "id": {
        "type": "Identifier",
        "start": 1774,
        "end": 1779,
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
          "start": 1780,
          "end": 1786,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1781,
            "end": 1786,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1783,
              "end": 1786
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1788,
        "end": 1791,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1793,
      "end": 1831,
      "id": {
        "type": "Identifier",
        "start": 1802,
        "end": 1807,
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
          "start": 1808,
          "end": 1829,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1809,
            "end": 1829,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1811,
              "end": 1829,
              "typeName": {
                "type": "Identifier",
                "start": 1811,
                "end": 1812,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1812,
                "end": 1829,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1813,
                    "end": 1819
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1821,
                    "end": 1828
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
      "start": 1832,
      "end": 1860,
      "id": {
        "type": "Identifier",
        "start": 1841,
        "end": 1846,
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
          "start": 1847,
          "end": 1858,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1848,
            "end": 1858,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1850,
              "end": 1858,
              "exprName": {
                "type": "Identifier",
                "start": 1857,
                "end": 1858,
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
      "start": 1867,
      "end": 1893,
      "id": {
        "type": "Identifier",
        "start": 1876,
        "end": 1881,
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
          "start": 1882,
          "end": 1888,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1883,
            "end": 1888,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1885,
              "end": 1888
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1890,
        "end": 1893,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1895,
      "end": 1957,
      "id": {
        "type": "Identifier",
        "start": 1904,
        "end": 1909,
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
          "start": 1910,
          "end": 1955,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1911,
            "end": 1955,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1913,
              "end": 1955,
              "typeName": {
                "type": "Identifier",
                "start": 1913,
                "end": 1914,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1914,
                "end": 1955,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1915,
                    "end": 1932,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1915,
                      "end": 1916,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1916,
                      "end": 1932,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1917,
                          "end": 1923
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1925,
                          "end": 1931
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1934,
                    "end": 1940
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1942,
                    "end": 1946,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1942,
                      "end": 1946,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1948,
                    "end": 1954
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
      "start": 1958,
      "end": 2012,
      "id": {
        "type": "Identifier",
        "start": 1967,
        "end": 1972,
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
          "start": 1973,
          "end": 2010,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1974,
            "end": 2010,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1976,
              "end": 2010,
              "typeName": {
                "type": "Identifier",
                "start": 1976,
                "end": 1977,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1977,
                "end": 2010,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1978,
                    "end": 1995,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1978,
                      "end": 1979,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1979,
                      "end": 1995,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1980,
                          "end": 1986
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1988,
                          "end": 1994
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1997,
                    "end": 2003
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2005,
                    "end": 2009,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2005,
                      "end": 2009,
                      "name": "Date",
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2022,
      "end": 2048,
      "id": {
        "type": "Identifier",
        "start": 2031,
        "end": 2036,
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
          "start": 2037,
          "end": 2043,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2038,
            "end": 2043,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2040,
              "end": 2043
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2045,
        "end": 2048,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2050,
      "end": 2073,
      "id": {
        "type": "Identifier",
        "start": 2059,
        "end": 2065,
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
          "start": 2066,
          "end": 2071,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2067,
            "end": 2071,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2069,
              "end": 2071,
              "typeName": {
                "type": "Identifier",
                "start": 2069,
                "end": 2071,
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
      "start": 2074,
      "end": 2121,
      "id": {
        "type": "Identifier",
        "start": 2083,
        "end": 2089,
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
          "start": 2090,
          "end": 2119,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2091,
            "end": 2119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2093,
              "end": 2119,
              "typeName": {
                "type": "Identifier",
                "start": 2093,
                "end": 2094,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2094,
                "end": 2119,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2095,
                    "end": 2101
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2103,
                    "end": 2109
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 2111,
                    "end": 2118
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
      "start": 2128,
      "end": 2155,
      "id": {
        "type": "Identifier",
        "start": 2137,
        "end": 2143,
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
          "start": 2144,
          "end": 2150,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2145,
            "end": 2150,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2147,
              "end": 2150
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2152,
        "end": 2155,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2157,
      "end": 2206,
      "id": {
        "type": "Identifier",
        "start": 2166,
        "end": 2171,
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
          "start": 2172,
          "end": 2204,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2173,
            "end": 2204,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2175,
              "end": 2204,
              "typeName": {
                "type": "Identifier",
                "start": 2175,
                "end": 2176,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2176,
                "end": 2204,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2177,
                    "end": 2183
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2185,
                    "end": 2189,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2185,
                      "end": 2189,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2191,
                    "end": 2197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2191,
                      "end": 2197,
                      "name": "RegExp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2199,
                    "end": 2203,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2199,
                      "end": 2203,
                      "name": "Date",
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2207,
      "end": 2235,
      "id": {
        "type": "Identifier",
        "start": 2216,
        "end": 2221,
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
          "start": 2222,
          "end": 2233,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2223,
            "end": 2233,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2225,
              "end": 2233,
              "exprName": {
                "type": "Identifier",
                "start": 2232,
                "end": 2233,
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
      "start": 2242,
      "end": 2268,
      "id": {
        "type": "Identifier",
        "start": 2251,
        "end": 2256,
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
          "start": 2257,
          "end": 2263,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2258,
            "end": 2263,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2260,
              "end": 2263
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2265,
        "end": 2268,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2270,
      "end": 2322,
      "id": {
        "type": "Identifier",
        "start": 2279,
        "end": 2284,
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
          "start": 2285,
          "end": 2320,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2286,
            "end": 2320,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2288,
              "end": 2320,
              "typeName": {
                "type": "Identifier",
                "start": 2288,
                "end": 2289,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2289,
                "end": 2320,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2290,
                    "end": 2296
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2298,
                    "end": 2302,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2298,
                      "end": 2302,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2304,
                    "end": 2310,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2304,
                      "end": 2310,
                      "name": "RegExp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 2312,
                    "end": 2319
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
      "start": 2323,
      "end": 2351,
      "id": {
        "type": "Identifier",
        "start": 2332,
        "end": 2337,
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
          "start": 2338,
          "end": 2349,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2339,
            "end": 2349,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2341,
              "end": 2349,
              "exprName": {
                "type": "Identifier",
                "start": 2348,
                "end": 2349,
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
      "start": 2358,
      "end": 2384,
      "id": {
        "type": "Identifier",
        "start": 2367,
        "end": 2372,
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
          "start": 2373,
          "end": 2379,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2374,
            "end": 2379,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2376,
              "end": 2379
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2381,
        "end": 2384,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2386,
      "end": 2408,
      "id": {
        "type": "Identifier",
        "start": 2395,
        "end": 2400,
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
          "start": 2401,
          "end": 2406,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2402,
            "end": 2406,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2404,
              "end": 2406,
              "typeName": {
                "type": "Identifier",
                "start": 2404,
                "end": 2406,
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
      "start": 2409,
      "end": 2476,
      "id": {
        "type": "Identifier",
        "start": 2418,
        "end": 2423,
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
          "start": 2424,
          "end": 2474,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2425,
            "end": 2474,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2427,
              "end": 2474,
              "typeName": {
                "type": "Identifier",
                "start": 2427,
                "end": 2428,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2428,
                "end": 2474,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2429,
                    "end": 2435
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2437,
                    "end": 2454,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2437,
                      "end": 2438,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2438,
                      "end": 2454,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2439,
                          "end": 2445
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2447,
                          "end": 2453
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2456,
                    "end": 2473,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2456,
                      "end": 2457,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2457,
                      "end": 2473,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2458,
                          "end": 2464
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2466,
                          "end": 2472
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2483,
      "end": 2509,
      "id": {
        "type": "Identifier",
        "start": 2492,
        "end": 2497,
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
          "start": 2498,
          "end": 2504,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2499,
            "end": 2504,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2501,
              "end": 2504
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2506,
        "end": 2509,
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
