__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 736,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 26,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 24,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
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
      "start": 27,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 51,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 51,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 48,
                "end": 51
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
      "start": 54,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 80,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 78,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 78,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 75,
                "end": 78
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
      "start": 81,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 95,
        "decorators": [],
        "name": "Kwah",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 96,
        "end": 109,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 107,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 102,
              "decorators": [],
              "name": "kwah",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 107,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 104,
                "end": 107
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
      "start": 121,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 132,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 134,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 136,
        "end": 153,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 142,
            "end": 151,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "decorators": [],
              "name": "aProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 155,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 166,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 170,
        "end": 187,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 185,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 181,
              "decorators": [],
              "name": "bProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 183,
                "end": 184,
                "typeName": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 189,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 200,
        "end": 203,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 201,
            "end": 202,
            "name": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 204,
        "end": 221,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 210,
            "end": 219,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 215,
              "decorators": [],
              "name": "cProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 218,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 218,
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 218,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 223,
      "end": 247,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 246,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 246,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 241,
                  "end": 246,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 242,
                      "end": 245,
                      "typeName": {
                        "type": "Identifier",
                        "start": 242,
                        "end": 245,
                        "decorators": [],
                        "name": "Foo",
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 272,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 271,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 271,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 271,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 271,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 266,
                  "end": 271,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 267,
                      "end": 270,
                      "typeName": {
                        "type": "Identifier",
                        "start": 267,
                        "end": 270,
                        "decorators": [],
                        "name": "Foo",
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 297,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 296,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 296,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 291,
                  "end": 296,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 292,
                      "end": 295,
                      "typeName": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 295,
                        "decorators": [],
                        "name": "Foo",
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 355,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 354,
            "decorators": [],
            "name": "thingOfInterfaces",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 354,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 329,
                "end": 354,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 329,
                    "end": 335,
                    "typeName": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 330,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 330,
                      "end": 335,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 331,
                          "end": 334,
                          "typeName": {
                            "type": "Identifier",
                            "start": 331,
                            "end": 334,
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 338,
                    "end": 344,
                    "typeName": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 339,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 339,
                      "end": 344,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 340,
                          "end": 343,
                          "typeName": {
                            "type": "Identifier",
                            "start": 340,
                            "end": 343,
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 347,
                    "end": 354,
                    "typeName": {
                      "type": "Identifier",
                      "start": 347,
                      "end": 348,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 348,
                      "end": 354,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 349,
                          "end": 353,
                          "typeName": {
                            "type": "Identifier",
                            "start": 349,
                            "end": 353,
                            "decorators": [],
                            "name": "Kwah",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 357,
      "end": 379,
      "expression": {
        "type": "AssignmentExpression",
        "start": 357,
        "end": 378,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 357,
          "end": 374,
          "decorators": [],
          "name": "thingOfInterfaces",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 377,
          "end": 378,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 402,
      "expression": {
        "type": "AssignmentExpression",
        "start": 380,
        "end": 401,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 380,
          "end": 397,
          "decorators": [],
          "name": "thingOfInterfaces",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 400,
          "end": 401,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 403,
      "end": 425,
      "expression": {
        "type": "AssignmentExpression",
        "start": 403,
        "end": 424,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 403,
          "end": 420,
          "decorators": [],
          "name": "thingOfInterfaces",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 423,
          "end": 424,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 437,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 443,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 443,
        "end": 446,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 444,
            "end": 445,
            "name": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 449,
        "end": 466,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 455,
            "end": 464,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 455,
              "end": 460,
              "decorators": [],
              "name": "xProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 460,
              "end": 463,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 462,
                "end": 463,
                "typeName": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 468,
      "end": 497,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 474,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 474,
        "end": 477,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 475,
            "end": 476,
            "name": {
              "type": "Identifier",
              "start": 475,
              "end": 476,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 480,
        "end": 497,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 486,
            "end": 495,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 486,
              "end": 491,
              "decorators": [],
              "name": "yProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 494,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 499,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 505,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 505,
        "end": 508,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 506,
            "end": 507,
            "name": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 511,
        "end": 528,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 517,
            "end": 526,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 517,
              "end": 522,
              "decorators": [],
              "name": "zProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 525,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 524,
                "end": 525,
                "typeName": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 530,
      "end": 554,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 544,
          "end": 553,
          "id": {
            "type": "Identifier",
            "start": 544,
            "end": 553,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 545,
              "end": 553,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 547,
                "end": 553,
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 548,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 548,
                  "end": 553,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 549,
                      "end": 552,
                      "typeName": {
                        "type": "Identifier",
                        "start": 549,
                        "end": 552,
                        "decorators": [],
                        "name": "Foo",
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 555,
      "end": 579,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 578,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 578,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 578,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 578,
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 573,
                  "end": 578,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 574,
                      "end": 577,
                      "typeName": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 577,
                        "decorators": [],
                        "name": "Foo",
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 580,
      "end": 604,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 603,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 603,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 595,
              "end": 603,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 597,
                "end": 603,
                "typeName": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 598,
                  "end": 603,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 599,
                      "end": 602,
                      "typeName": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 602,
                        "decorators": [],
                        "name": "Foo",
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 605,
      "end": 663,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 617,
          "end": 662,
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 662,
            "decorators": [],
            "name": "thingOfTypeAliases",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 662,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 637,
                "end": 662,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 637,
                    "end": 643,
                    "typeName": {
                      "type": "Identifier",
                      "start": 637,
                      "end": 638,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 638,
                      "end": 643,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 639,
                          "end": 642,
                          "typeName": {
                            "type": "Identifier",
                            "start": 639,
                            "end": 642,
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 646,
                    "end": 652,
                    "typeName": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 647,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 647,
                      "end": 652,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 648,
                          "end": 651,
                          "typeName": {
                            "type": "Identifier",
                            "start": 648,
                            "end": 651,
                            "decorators": [],
                            "name": "Baz",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 655,
                    "end": 662,
                    "typeName": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 656,
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 656,
                      "end": 662,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 657,
                          "end": 661,
                          "typeName": {
                            "type": "Identifier",
                            "start": 657,
                            "end": 661,
                            "decorators": [],
                            "name": "Kwah",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 665,
      "end": 688,
      "expression": {
        "type": "AssignmentExpression",
        "start": 665,
        "end": 687,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 665,
          "end": 683,
          "decorators": [],
          "name": "thingOfTypeAliases",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 686,
          "end": 687,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 689,
      "end": 712,
      "expression": {
        "type": "AssignmentExpression",
        "start": 689,
        "end": 711,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 689,
          "end": 707,
          "decorators": [],
          "name": "thingOfTypeAliases",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 710,
          "end": 711,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 713,
      "end": 736,
      "expression": {
        "type": "AssignmentExpression",
        "start": 713,
        "end": 735,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 713,
          "end": 731,
          "decorators": [],
          "name": "thingOfTypeAliases",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 734,
          "end": 735,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
