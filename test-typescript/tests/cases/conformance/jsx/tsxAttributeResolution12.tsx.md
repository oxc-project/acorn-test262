__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 182,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 77,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 79,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 114,
              "name": "ElementAttributesProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 115,
              "end": 128,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 119,
                  "end": 125,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 124,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 130,
            "end": 180,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 159,
              "name": "IntrinsicAttributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 160,
              "end": 180,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 164,
                  "end": 177,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 167,
                    "name": "ref",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 170,
                      "end": 176
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 603,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 298,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 45,
              "end": 72,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 55,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "P",
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
                  "start": 57,
                  "end": 70,
                  "name": "context",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 67,
                      "end": 70
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 82,
              "name": "setState",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 82,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 115,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 86,
                      "end": 115,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 87,
                          "end": 99,
                          "name": "prevState",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 99,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 98,
                              "end": 99,
                              "typeName": {
                                "type": "Identifier",
                                "start": 98,
                                "end": 99,
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
                          "start": 101,
                          "end": 109,
                          "name": "props",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 106,
                            "end": 109,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 108,
                              "end": 109,
                              "typeName": {
                                "type": "Identifier",
                                "start": 108,
                                "end": 109,
                                "name": "P",
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
                        "start": 111,
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 137,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 128,
                      "end": 137,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 131,
                        "end": 137,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 134,
                          "end": 137
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 138,
                "end": 144,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 140,
                  "end": 144
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 194,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 155,
              "name": "setState",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 155,
              "end": 194,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 156,
                  "end": 164,
                  "name": "state",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 161,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 163,
                      "end": 164,
                      "typeName": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
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
                  "start": 166,
                  "end": 186,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 177,
                      "end": 186,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 180,
                        "end": 186,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 183,
                          "end": 186
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 187,
                "end": 193,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 189,
                  "end": 193
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 236,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 207,
              "name": "forceUpdate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 207,
              "end": 236,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 228,
                  "name": "callBack",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 219,
                      "end": 228,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 222,
                        "end": 228,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 225,
                          "end": 228
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 229,
                "end": 235,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 231,
                  "end": 235
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 260,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 244,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 244,
              "end": 260,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 246,
                "end": 259,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 248,
                  "end": 259,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 248,
                    "end": 259,
                    "left": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 251,
                      "name": "JSX",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 259,
                      "name": "Element",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 262,
            "end": 271,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 267,
              "name": "props",
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
              "start": 267,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 269,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 273,
            "end": 282,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 278,
              "name": "state",
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
              "start": 278,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 281,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 284,
            "end": 296,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 291,
              "name": "context",
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
              "start": 291,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 293,
                "end": 295,
                "members": []
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "P",
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
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 301,
      "end": 384,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 325,
        "name": "ComponentClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 325,
        "end": 328,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 326,
            "end": 327,
            "name": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
              "name": "P",
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
        "start": 329,
        "end": 384,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 332,
            "end": 382,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 337,
                "end": 346,
                "name": "props",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 343,
                  "end": 346,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 345,
                    "end": 346,
                    "typeName": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "name": "P",
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
                "start": 348,
                "end": 361,
                "name": "context",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 356,
                  "end": 361,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 358,
                    "end": 361
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 381,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 364,
                "end": 381,
                "typeName": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 373,
                  "name": "Component",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 373,
                  "end": 381,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 374,
                      "end": 375,
                      "typeName": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 377,
                      "end": 380
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 386,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 408,
        "name": "TestMod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 409,
        "end": 496,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 412,
            "end": 472,
            "id": {
              "type": "Identifier",
              "start": 422,
              "end": 431,
              "name": "TestClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 440,
                "end": 467,
                "expression": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 454,
                  "name": "ComponentClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 454,
                  "end": 467,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 455,
                      "end": 466,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 456,
                          "end": 465,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 456,
                            "end": 460,
                            "name": "reqd",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 460,
                            "end": 465,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 462,
                              "end": 465
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 468,
              "end": 472,
              "body": []
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 474,
            "end": 494,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 478,
                "end": 493,
                "id": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 493,
                  "name": "Test",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 482,
                    "end": 493,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 484,
                      "end": 493,
                      "typeName": {
                        "type": "Identifier",
                        "start": 484,
                        "end": 493,
                        "name": "TestClass",
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
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 541,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 540,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 525,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 528,
            "end": 540,
            "object": {
              "type": "Identifier",
              "start": 528,
              "end": 535,
              "name": "TestMod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 536,
              "end": 540,
              "name": "Test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 542,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 548,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 551,
            "end": 556,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 551,
              "end": 556,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 552,
                "end": 553,
                "name": "T"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 575,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 579,
          "end": 600,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 581,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 584,
            "end": 600,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 584,
              "end": 600,
              "attributes": [],
              "name": {
                "type": "JSXMemberExpression",
                "start": 585,
                "end": 597,
                "object": {
                  "type": "JSXIdentifier",
                  "start": 585,
                  "end": 592,
                  "name": "TestMod"
                },
                "property": {
                  "type": "JSXIdentifier",
                  "start": 593,
                  "end": 597,
                  "name": "Test"
                }
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
