__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 594,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 48,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null
      },
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
        "start": 20,
        "end": 48,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 46,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 46,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 49,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "decorators": [],
        "name": "Utils",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "fold",
              "optional": false,
              "typeAnnotation": null
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 79,
                  "end": 80,
                  "name": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "S",
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
                "start": 82,
                "end": 99,
                "decorators": [],
                "name": "c",
                "optional": true,
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
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
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
                "start": 101,
                "end": 127,
                "decorators": [],
                "name": "folder",
                "optional": true,
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
                        "decorators": [],
                        "name": "s",
                        "optional": false,
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
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 117,
                        "end": 121,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
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
              },
              {
                "type": "Identifier",
                "start": 129,
                "end": 137,
                "decorators": [],
                "name": "init",
                "optional": true,
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
                      "decorators": [],
                      "name": "S",
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "mapReduce",
              "optional": false,
              "typeAnnotation": null
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 160,
                  "end": 161,
                  "name": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "U",
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
                  "start": 163,
                  "end": 164,
                  "name": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "V",
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
                "start": 166,
                "end": 182,
                "decorators": [],
                "name": "c",
                "optional": false,
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
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "T",
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
                "start": 184,
                "end": 203,
                "decorators": [],
                "name": "mapper",
                "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
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
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 205,
                "end": 225,
                "decorators": [],
                "name": "reducer",
                "optional": false,
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
                        "decorators": [],
                        "name": "y",
                        "optional": false,
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
                              "decorators": [],
                              "name": "U",
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
                          "decorators": [],
                          "name": "V",
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
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 261,
            "decorators": [],
            "name": "utils",
            "optional": false,
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
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 296,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 268,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 271,
            "end": 295,
            "callee": {
              "type": "Identifier",
              "start": 275,
              "end": 285,
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 376,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "utils",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 312,
                "end": 321,
                "decorators": [],
                "name": "mapReduce",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 322,
                "end": 323,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 325,
                "end": 344,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 346,
                "end": 374,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 347,
                    "end": 348,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 472,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "utils",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 392,
                "end": 401,
                "decorators": [],
                "name": "mapReduce",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 405,
                "end": 432,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 406,
                    "end": 415,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 407,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 409,
                        "end": 415
                      }
                    }
                  }
                ],
                "returnType": null,
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
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 434,
                "end": 470,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 435,
                    "end": 444,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 436,
                      "end": 444,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 438,
                        "end": 444
                      }
                    }
                  }
                ],
                "returnType": null,
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
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 473,
      "end": 510,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 509,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 479,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 482,
            "end": 509,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 483,
                "end": 492,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 484,
                  "end": 492,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  }
                }
              }
            ],
            "returnType": null,
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
      "start": 511,
      "end": 557,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 517,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 520,
            "end": 556,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 521,
                "end": 530,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 522,
                  "end": 530,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 524,
                    "end": 530
                  }
                }
              }
            ],
            "returnType": null,
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
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
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
      "start": 558,
      "end": 594,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 564,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "utils",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 573,
                "end": 582,
                "decorators": [],
                "name": "mapReduce",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 583,
                "end": 584,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 586,
                "end": 588,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 590,
                "end": 592,
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
