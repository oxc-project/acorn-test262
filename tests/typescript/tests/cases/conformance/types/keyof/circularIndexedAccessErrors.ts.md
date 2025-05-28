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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10,
        "end": 39,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 27,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 26,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 19,
                "end": 26,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 19,
                  "end": 21,
                  "typeName": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 21,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 22,
                  "end": 25,
                  "literal": {
                    "type": "Literal",
                    "start": 22,
                    "end": 25,
                    "value": "x",
                    "raw": "\"x\""
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 42,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 49,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "value": "x",
                    "raw": "\"x\""
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
                    "value": "y",
                    "raw": "\"y\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 90,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 82,
                "end": 90,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 82,
                  "end": 87,
                  "typeName": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 84,
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 84,
                    "end": 87,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 85,
                        "end": 86,
                        "typeName": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 86,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 88,
                  "end": 89,
                  "typeName": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 106,
            "end": 116,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 115,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 109,
                "end": 115
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 144,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 143,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 138,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "value": "x",
                        "raw": "\"x\""
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 160,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 159,
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
            "object": {
              "type": "Identifier",
              "start": 155,
              "end": 157,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 162,
      "end": 210,
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
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 190,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 187,
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 187,
                "end": 190,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 188,
                    "end": 189,
                    "typeName": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 192,
        "end": 210,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 198,
            "end": 208,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 201,
                "end": 207,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 201,
                  "end": 202,
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 203,
                  "end": 206,
                  "literal": {
                    "type": "Literal",
                    "start": 203,
                    "end": 206,
                    "value": "x",
                    "raw": "\"x\""
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 212,
      "end": 274,
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
            "name": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 237,
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 237,
                "end": 240,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 239,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 242,
        "end": 274,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 248,
            "end": 262,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 261,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 251,
                "end": 261,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 251,
                  "end": 256,
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 253,
                    "decorators": [],
                    "name": "T4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 253,
                    "end": 256,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 254,
                        "end": 255,
                        "typeName": {
                          "type": "Identifier",
                          "start": 254,
                          "end": 255,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 257,
                  "end": 260,
                  "literal": {
                    "type": "Literal",
                    "start": 257,
                    "end": 260,
                    "value": "x",
                    "raw": "\"x\""
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 276,
      "end": 314,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 285,
        "end": 314,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 291,
            "end": 302,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 301,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 294,
                "end": 301,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 294,
                  "end": 296,
                  "typeName": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 296,
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 297,
                  "end": 300,
                  "literal": {
                    "type": "Literal",
                    "start": 297,
                    "end": 300,
                    "value": "x",
                    "raw": "\"x\""
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 316,
      "end": 382,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 325,
        "end": 382,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 331,
            "end": 344,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 343,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 334,
                "end": 343,
                "objectType": {
                  "type": "TSThisType",
                  "start": 334,
                  "end": 338
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 339,
                  "end": 342,
                  "literal": {
                    "type": "Literal",
                    "start": 339,
                    "end": 342,
                    "value": "y",
                    "raw": "\"y\""
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 349,
            "end": 362,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 361,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 352,
                "end": 361,
                "objectType": {
                  "type": "TSThisType",
                  "start": 352,
                  "end": 356
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 357,
                  "end": 360,
                  "literal": {
                    "type": "Literal",
                    "start": 357,
                    "end": 360,
                    "value": "z",
                    "raw": "\"z\""
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 367,
            "end": 380,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 367,
              "end": 368,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 379,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 370,
                "end": 379,
                "objectType": {
                  "type": "TSThisType",
                  "start": 370,
                  "end": 374
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 375,
                  "end": 378,
                  "literal": {
                    "type": "Literal",
                    "start": 375,
                    "end": 378,
                    "value": "x",
                    "raw": "\"x\""
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 406,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 419,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 420,
        "end": 443,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 426,
            "end": 441,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 426,
              "end": 431,
              "decorators": [],
              "name": "hello",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 440,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 433,
                "end": 440
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 445,
      "end": 491,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 457,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 457,
        "end": 485,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 458,
            "end": 484,
            "name": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 468,
              "end": 484,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 468,
                  "end": 471,
                  "typeName": {
                    "type": "Identifier",
                    "start": 468,
                    "end": 471,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSIndexedAccessType",
                  "start": 474,
                  "end": 484,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 474,
                    "end": 475,
                    "typeName": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 475,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 476,
                    "end": 483,
                    "literal": {
                      "type": "Literal",
                      "start": 476,
                      "end": 483,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 488,
        "end": 491,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
