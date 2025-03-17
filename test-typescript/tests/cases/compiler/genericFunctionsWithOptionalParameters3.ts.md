__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 595,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "name": "Collection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 48,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 46,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 40,
                      "end": 41,
                      "typeName": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
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
                "start": 43,
                "end": 46,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 49,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "name": "Utils",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 244,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 71,
            "end": 142,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "name": "fold",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 75,
              "end": 81,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 76,
                  "end": 77,
                  "name": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 79,
                  "end": 80,
                  "name": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "S",
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
                "start": 82,
                "end": 99,
                "name": "c",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 86,
                    "end": 99,
                    "typeName": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 96,
                      "name": "Collection",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 96,
                      "end": 99,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 97,
                          "end": 98,
                          "typeName": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 98,
                            "name": "T",
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
                "start": 101,
                "end": 127,
                "name": "folder",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 127,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 110,
                    "end": 127,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 111,
                        "end": 115,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 115,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 114,
                            "end": 115,
                            "typeName": {
                              "type": "Identifier",
                              "start": 114,
                              "end": 115,
                              "name": "S",
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
                        "start": 117,
                        "end": 121,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 118,
                          "end": 121,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 120,
                            "end": 121,
                            "typeName": {
                              "type": "Identifier",
                              "start": 120,
                              "end": 121,
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
                      "start": 123,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 126,
                        "end": 127,
                        "typeName": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 127,
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
                "optional": true
              },
              {
                "type": "Identifier",
                "start": 129,
                "end": 137,
                "name": "init",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 134,
                  "end": 137,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "S",
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
              "start": 138,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "name": "T",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 147,
            "end": 242,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 156,
              "name": "mapReduce",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 156,
              "end": 165,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 157,
                  "end": 158,
                  "name": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 160,
                  "end": 161,
                  "name": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
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
                  "start": 163,
                  "end": 164,
                  "name": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
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
            "params": [
              {
                "type": "Identifier",
                "start": 166,
                "end": 182,
                "name": "c",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 169,
                    "end": 182,
                    "typeName": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 179,
                      "name": "Collection",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 179,
                      "end": 182,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 180,
                          "end": 181,
                          "typeName": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 181,
                            "name": "T",
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
                "start": 184,
                "end": 203,
                "name": "mapper",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 203,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 192,
                    "end": 203,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 193,
                        "end": 197,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 194,
                          "end": 197,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 196,
                            "end": 197,
                            "typeName": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 197,
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
                      "start": 199,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 202,
                        "end": 203,
                        "typeName": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 203,
                          "name": "U",
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
                "start": 205,
                "end": 225,
                "name": "reducer",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 212,
                  "end": 225,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 214,
                    "end": 225,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 215,
                        "end": 219,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 216,
                          "end": 219,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 218,
                            "end": 219,
                            "typeName": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 219,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 221,
                      "end": 225,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 224,
                        "end": 225,
                        "typeName": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 225,
                          "name": "V",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 241,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 238,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 238,
                  "end": 241,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 239,
                      "end": 240,
                      "typeName": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
                        "name": "V",
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
      "start": 245,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 261,
            "name": "utils",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 261,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 261,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 261,
                  "name": "Utils",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 271,
            "end": 295,
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 285,
              "name": "Collection",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 285,
              "end": 293,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 286,
                  "end": 292
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 306,
            "end": 375,
            "callee": {
              "type": "MemberExpression",
              "start": 306,
              "end": 321,
              "object": {
                "type": "Identifier",
                "start": 306,
                "end": 311,
                "name": "utils",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 312,
                "end": 321,
                "name": "mapReduce",
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
                "start": 322,
                "end": 323,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 325,
                "end": 344,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 332,
                  "end": 344,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 334,
                      "end": 342,
                      "argument": {
                        "type": "Literal",
                        "start": 341,
                        "end": 342,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 346,
                "end": 374,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 347,
                    "end": 348,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 353,
                  "end": 374,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 355,
                      "end": 372,
                      "argument": {
                        "type": "NewExpression",
                        "start": 362,
                        "end": 372,
                        "callee": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 370,
                          "name": "Date",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 386,
            "end": 471,
            "callee": {
              "type": "MemberExpression",
              "start": 386,
              "end": 401,
              "object": {
                "type": "Identifier",
                "start": 386,
                "end": 391,
                "name": "utils",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 392,
                "end": 401,
                "name": "mapReduce",
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
                "start": 402,
                "end": 403,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 405,
                "end": 432,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 406,
                    "end": 415,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 407,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 409,
                        "end": 415
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 420,
                  "end": 432,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 422,
                      "end": 430,
                      "argument": {
                        "type": "Literal",
                        "start": 429,
                        "end": 430,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 434,
                "end": 470,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 435,
                    "end": 444,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 436,
                      "end": 444,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 438,
                        "end": 444
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 449,
                  "end": 470,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 451,
                      "end": 468,
                      "argument": {
                        "type": "NewExpression",
                        "start": 458,
                        "end": 468,
                        "callee": {
                          "type": "Identifier",
                          "start": 462,
                          "end": 466,
                          "name": "Date",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 473,
      "end": 510,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 509,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 479,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 482,
            "end": 509,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 483,
                "end": 492,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 484,
                  "end": 492,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 497,
              "end": 509,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 499,
                  "end": 507,
                  "argument": {
                    "type": "Literal",
                    "start": 506,
                    "end": 507,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
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
      "start": 511,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 517,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 520,
            "end": 556,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 521,
                "end": 530,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 522,
                  "end": 530,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 524,
                    "end": 530
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 535,
              "end": 556,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 537,
                  "end": 554,
                  "argument": {
                    "type": "NewExpression",
                    "start": 544,
                    "end": 554,
                    "callee": {
                      "type": "Identifier",
                      "start": 548,
                      "end": 552,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
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
      "start": 558,
      "end": 594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 564,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 567,
            "end": 593,
            "callee": {
              "type": "MemberExpression",
              "start": 567,
              "end": 582,
              "object": {
                "type": "Identifier",
                "start": 567,
                "end": 572,
                "name": "utils",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 573,
                "end": 582,
                "name": "mapReduce",
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
                "start": 583,
                "end": 584,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 586,
                "end": 588,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 590,
                "end": 592,
                "name": "f2",
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
