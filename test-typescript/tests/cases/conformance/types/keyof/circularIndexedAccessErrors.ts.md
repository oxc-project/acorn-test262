__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 491,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10,
        "end": 39,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 26,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 19,
                "end": 26,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 22,
                  "end": 25,
                  "literal": {
                    "type": "Literal",
                    "start": 22,
                    "end": 25,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 19,
                  "end": 21,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 21,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 42,
      "end": 118,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 49,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 73,
        "end": 118,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 90,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 82,
                "end": 90,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 88,
                  "end": 89,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 82,
                  "end": 87,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 84,
                    "end": 87,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 85,
                        "end": 86,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 86,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 84,
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 106,
            "end": 116,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 115,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 109,
                "end": 115
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 49,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 50,
            "end": 69,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 60,
              "end": 69,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 60,
                  "end": 63,
                  "literal": {
                    "type": "Literal",
                    "start": 60,
                    "end": 63,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 66,
                  "end": 69,
                  "literal": {
                    "type": "Literal",
                    "start": 66,
                    "end": 69,
                    "raw": "\"y\"",
                    "value": "y"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 143,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 143,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 138,
                  "end": 143,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 139,
                      "end": 142,
                      "literal": {
                        "type": "Literal",
                        "start": 139,
                        "end": 142,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 138,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 152,
            "decorators": [],
            "name": "x2x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 155,
            "end": 159,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 155,
              "end": 157,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 162,
      "end": 210,
      "body": {
        "type": "TSInterfaceBody",
        "start": 192,
        "end": 210,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 198,
            "end": 208,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 201,
                "end": 207,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 203,
                  "end": 206,
                  "literal": {
                    "type": "Literal",
                    "start": 203,
                    "end": 206,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 201,
                  "end": 202,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 172,
        "end": 174,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 190,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 190,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 187,
                "end": 190,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 188,
                    "end": 189,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 187,
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 212,
      "end": 274,
      "body": {
        "type": "TSInterfaceBody",
        "start": 242,
        "end": 274,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 248,
            "end": 262,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 261,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 251,
                "end": 261,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 257,
                  "end": 260,
                  "literal": {
                    "type": "Literal",
                    "start": 257,
                    "end": 260,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 251,
                  "end": 256,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 253,
                    "end": 256,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 254,
                        "end": 255,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 253,
                    "decorators": [],
                    "name": "T4",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 222,
        "end": 224,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 224,
        "end": 241,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 225,
            "end": 240,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 240,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 237,
                "end": 240,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 239,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 237,
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 276,
      "end": 314,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 285,
        "end": 314,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 291,
            "end": 302,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 301,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 294,
                "end": 301,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 297,
                  "end": 300,
                  "literal": {
                    "type": "Literal",
                    "start": 297,
                    "end": 300,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 294,
                  "end": 296,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 296,
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 284,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 316,
      "end": 382,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 325,
        "end": 382,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 331,
            "end": 344,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 343,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 334,
                "end": 343,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 339,
                  "end": 342,
                  "literal": {
                    "type": "Literal",
                    "start": 339,
                    "end": 342,
                    "raw": "\"y\"",
                    "value": "y"
                  }
                },
                "objectType": {
                  "type": "TSThisType",
                  "start": 334,
                  "end": 338
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 349,
            "end": 362,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 361,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 352,
                "end": 361,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 357,
                  "end": 360,
                  "literal": {
                    "type": "Literal",
                    "start": 357,
                    "end": 360,
                    "raw": "\"z\"",
                    "value": "z"
                  }
                },
                "objectType": {
                  "type": "TSThisType",
                  "start": 352,
                  "end": 356
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 367,
            "end": 380,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 379,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 370,
                "end": 379,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 375,
                  "end": 378,
                  "literal": {
                    "type": "Literal",
                    "start": 375,
                    "end": 378,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "objectType": {
                  "type": "TSThisType",
                  "start": 370,
                  "end": 374
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 324,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 406,
      "end": 443,
      "body": {
        "type": "TSInterfaceBody",
        "start": 420,
        "end": 443,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 426,
            "end": 441,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 426,
              "end": 431,
              "decorators": [],
              "name": "hello",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 440,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 433,
                "end": 440
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 419,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 445,
      "end": 491,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 488,
        "end": 491,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 457,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 457,
        "end": 485,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 458,
            "end": 484,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 468,
              "end": 484,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 468,
                  "end": 471,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 468,
                    "end": 471,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSIndexedAccessType",
                  "start": 474,
                  "end": 484,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 476,
                    "end": 483,
                    "literal": {
                      "type": "Literal",
                      "start": 476,
                      "end": 483,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 474,
                    "end": 475,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 475,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
