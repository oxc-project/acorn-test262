react.d.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 182,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 77,
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 77,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 79,
            "end": 128,
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
                  "key": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 124,
                    "decorators": [],
                    "name": "props",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 114,
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 130,
            "end": 180,
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
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 167,
                    "decorators": [],
                    "name": "ref",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 170,
                      "end": 176
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 159,
              "decorators": [],
              "name": "IntrinsicAttributes",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
file.tsx
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 298,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 72,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 45,
              "end": 72,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "decorators": [],
                  "name": "props",
                  "optional": true,
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
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 57,
                  "end": 70,
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 67,
                      "end": 70
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 145,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 82,
              "decorators": [],
              "name": "setState",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 82,
              "end": 145,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 83,
                  "end": 115,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 86,
                      "end": 115,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 87,
                          "end": 99,
                          "decorators": [],
                          "name": "prevState",
                          "optional": false,
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
                                "decorators": [],
                                "name": "S",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 101,
                          "end": 109,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
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
                                "decorators": [],
                                "name": "P",
                                "optional": false
                              }
                            }
                          }
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
                            "decorators": [],
                            "name": "S",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 137,
                  "decorators": [],
                  "name": "callback",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 128,
                      "end": 137,
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
                  }
                }
              ],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 147,
            "end": 194,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 155,
              "decorators": [],
              "name": "setState",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 155,
              "end": 194,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 156,
                  "end": 164,
                  "decorators": [],
                  "name": "state",
                  "optional": false,
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
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 166,
                  "end": 186,
                  "decorators": [],
                  "name": "callback",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 177,
                      "end": 186,
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
                  }
                }
              ],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 236,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 207,
              "decorators": [],
              "name": "forceUpdate",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 207,
              "end": 236,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 228,
                  "decorators": [],
                  "name": "callBack",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 219,
                      "end": 228,
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
                  }
                }
              ],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 260,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 244,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 244,
              "end": 260,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
                      "decorators": [],
                      "name": "JSX",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 259,
                      "decorators": [],
                      "name": "Element",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 262,
            "end": 271,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 267,
              "decorators": [],
              "name": "props",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 273,
            "end": 282,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 278,
              "decorators": [],
              "name": "state",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 284,
            "end": 296,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 291,
              "decorators": [],
              "name": "context",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 301,
      "end": 384,
      "body": {
        "type": "TSInterfaceBody",
        "start": 329,
        "end": 384,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 332,
            "end": 382,
            "params": [
              {
                "type": "Identifier",
                "start": 337,
                "end": 346,
                "decorators": [],
                "name": "props",
                "optional": true,
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
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 348,
                "end": 361,
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 356,
                  "end": 361,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 358,
                    "end": 361
                  }
                }
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
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 377,
                      "end": 380
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 373,
                  "decorators": [],
                  "name": "Component",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 325,
        "decorators": [],
        "name": "ComponentClass",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 325,
        "end": 328,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 326,
            "end": 327,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 326,
              "end": 327,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 386,
      "end": 496,
      "body": {
        "type": "TSModuleBlock",
        "start": 409,
        "end": 496,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 412,
            "end": 472,
            "body": {
              "type": "TSInterfaceBody",
              "start": 468,
              "end": 472,
              "body": []
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 440,
                "end": 467,
                "expression": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 454,
                  "decorators": [],
                  "name": "ComponentClass",
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
                          "key": {
                            "type": "Identifier",
                            "start": 456,
                            "end": 460,
                            "decorators": [],
                            "name": "reqd",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 460,
                            "end": 465,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 462,
                              "end": 465
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 422,
              "end": 431,
              "decorators": [],
              "name": "TestClass",
              "optional": false
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 493,
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
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
                        "decorators": [],
                        "name": "TestClass",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 408,
        "decorators": [],
        "name": "TestMod",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 525,
            "decorators": [],
            "name": "T",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 528,
            "end": 540,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 528,
              "end": 535,
              "decorators": [],
              "name": "TestMod",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 536,
              "end": 540,
              "decorators": [],
              "name": "Test",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 548,
            "decorators": [],
            "name": "t1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 551,
            "end": 556,
            "children": [],
            "closingElement": null,
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 579,
            "end": 581,
            "decorators": [],
            "name": "t2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 584,
            "end": 600,
            "children": [],
            "closingElement": null,
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
