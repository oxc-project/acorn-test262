genericCallWithObjectTypeArgsAndConstraints.ts
```json
{
  "type": "Program",
  "start": 110,
  "end": 508,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 124,
            "end": 134,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
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
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 179,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 179,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 162,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 177,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
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
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 205,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 192,
        "end": 205,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 198,
            "end": 203,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 190,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 207,
      "end": 295,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 295,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 270,
            "end": 279,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 274,
                "end": 278,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 278,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 277,
                      "end": 278,
                      "typeName": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 278,
                        "decorators": [],
                        "name": "T",
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
          },
          {
            "type": "ReturnStatement",
            "start": 284,
            "end": 293,
            "argument": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 219,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 245,
          "end": 252,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 246,
            "end": 252,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 248,
              "end": 252,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 249,
                "end": 252,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 250,
                    "end": 251,
                    "typeName": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 254,
          "end": 262,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 262,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 258,
              "end": 262,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 259,
                "end": 262,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 260,
                    "end": 261,
                    "typeName": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 258,
                "end": 259,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 219,
        "end": 244,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 243,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 230,
              "end": 243,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 232,
                  "end": 241,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 235,
                      "end": 241
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 306,
            "end": 316,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 311,
              "end": 314,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 312,
                  "end": 313,
                  "typeName": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 313,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "decorators": [],
            "name": "d1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 327,
            "end": 337,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 332,
              "end": 335,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 333,
                  "end": 334,
                  "typeName": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 358,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 344,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 347,
            "end": 358,
            "arguments": [
              {
                "type": "Identifier",
                "start": 351,
                "end": 353,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 355,
                "end": 357,
                "decorators": [],
                "name": "d1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 347,
              "end": 350,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 370,
            "end": 381,
            "arguments": [
              {
                "type": "Identifier",
                "start": 374,
                "end": 376,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 378,
                "end": 380,
                "decorators": [],
                "name": "c1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 370,
              "end": 373,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 384,
      "end": 461,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 430,
        "end": 461,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 436,
            "end": 445,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 440,
                "end": 444,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 444,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 441,
                    "end": 444,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 443,
                      "end": 444,
                      "typeName": {
                        "type": "Identifier",
                        "start": 443,
                        "end": 444,
                        "decorators": [],
                        "name": "T",
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
          },
          {
            "type": "ReturnStatement",
            "start": 450,
            "end": 459,
            "argument": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 397,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 411,
          "end": 418,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 412,
            "end": 418,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 414,
              "end": 418,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 415,
                "end": 418,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 416,
                    "end": 417,
                    "typeName": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 414,
                "end": 415,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 420,
          "end": 428,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 428,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 424,
              "end": 428,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 425,
                "end": 428,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 426,
                    "end": 427,
                    "typeName": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 427,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "decorators": [],
                "name": "X",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 397,
        "end": 410,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 398,
            "end": 409,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 408,
              "end": 409,
              "typeName": {
                "type": "Identifier",
                "start": 408,
                "end": 409,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 463,
      "end": 484,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 483,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 468,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 471,
            "end": 483,
            "arguments": [
              {
                "type": "Identifier",
                "start": 476,
                "end": 478,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 480,
                "end": 482,
                "decorators": [],
                "name": "d1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 471,
              "end": 475,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 508,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 507,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 492,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 495,
            "end": 507,
            "arguments": [
              {
                "type": "Identifier",
                "start": 500,
                "end": 502,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 504,
                "end": 506,
                "decorators": [],
                "name": "c1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 495,
              "end": 499,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
