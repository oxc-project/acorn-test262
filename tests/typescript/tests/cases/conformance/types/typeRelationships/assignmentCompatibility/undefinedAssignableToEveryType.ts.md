__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 866,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
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
      "type": "VariableDeclaration",
      "start": 29,
      "end": 39,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "decorators": [],
            "name": "ac",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "C",
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
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 70,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
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
      "start": 73,
      "end": 83,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 82,
            "decorators": [],
            "name": "ai",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "decorators": [],
                  "name": "I",
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
      "type": "TSEnumDeclaration",
      "start": 85,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 92,
        "end": 97,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 94,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 108,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 107,
            "decorators": [],
            "name": "ae",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 107,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "E",
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
      "start": 110,
      "end": 136,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 123,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 126,
            "end": 135,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 163,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 150,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 153,
            "end": 162,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 191,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 178,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 178,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 171,
                "end": 178
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 181,
            "end": 190,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 216,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 203,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 203,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 203,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 206,
            "end": 215,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 240,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 227,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 227,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 224,
                "end": 227
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 230,
            "end": 239,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 265,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 252,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 252,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 248,
                "end": 252
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 255,
            "end": 264,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 292,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 279,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 279,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 282,
            "end": 291,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 315,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 302,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 300,
                "end": 302,
                "members": []
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 305,
            "end": 314,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 344,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 343,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 331,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 321,
              "end": 331,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 323,
                "end": 331,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 326,
                  "end": 331,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 329,
                    "end": 331,
                    "members": []
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 334,
            "end": 343,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 373,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 372,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 360,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 360,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 352,
                "end": 360,
                "typeName": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 360,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 363,
            "end": 372,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 415,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 402,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 402,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 381,
                "end": 402,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 382,
                    "end": 391,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 383,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 385,
                        "end": 391
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 393,
                  "end": 402,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 396,
                    "end": 402
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 405,
            "end": 414,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 416,
      "end": 431,
      "expression": {
        "type": "AssignmentExpression",
        "start": 416,
        "end": 430,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 416,
          "end": 418,
          "decorators": [],
          "name": "ac",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 421,
          "end": 430,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 432,
      "end": 447,
      "expression": {
        "type": "AssignmentExpression",
        "start": 432,
        "end": 446,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 432,
          "end": 434,
          "decorators": [],
          "name": "ai",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 437,
          "end": 446,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 463,
      "expression": {
        "type": "AssignmentExpression",
        "start": 448,
        "end": 462,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 448,
          "end": 450,
          "decorators": [],
          "name": "ae",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 453,
          "end": 462,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 492,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 491,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 479,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 479,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 471,
                "end": 479,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 471,
                  "end": 477
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 482,
            "end": 491,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 493,
      "end": 528,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 527,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 515,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 515,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 500,
                "end": 515,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 502,
                    "end": 513,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 505,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 505,
                      "end": 513,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 507,
                        "end": 513
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 518,
            "end": 527,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 563,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 562,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 550,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 534,
              "end": 550,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 536,
                "end": 550,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 536,
                  "end": 539,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 537,
                      "end": 538,
                      "name": {
                        "type": "Identifier",
                        "start": 537,
                        "end": 538,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 540,
                    "end": 544,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 541,
                      "end": 544,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 543,
                        "end": 544,
                        "typeName": {
                          "type": "Identifier",
                          "start": 543,
                          "end": 544,
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
                  "start": 546,
                  "end": 550,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 549,
                    "end": 550,
                    "typeName": {
                      "type": "Identifier",
                      "start": 549,
                      "end": 550,
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
          "init": {
            "type": "Identifier",
            "start": 553,
            "end": 562,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 564,
      "end": 590,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 589,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 577,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 569,
              "end": 577,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 571,
                "end": 577,
                "typeName": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 577,
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 580,
            "end": 589,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 591,
      "end": 617,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 616,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 604,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 604,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 598,
                "end": 604,
                "typeName": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 604,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 607,
            "end": 616,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 619,
      "end": 732,
      "id": {
        "type": "Identifier",
        "start": 628,
        "end": 631,
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
        "start": 631,
        "end": 653,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 632,
            "end": 633,
            "name": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
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
            "start": 635,
            "end": 636,
            "name": {
              "type": "Identifier",
              "start": 635,
              "end": 636,
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
            "start": 638,
            "end": 652,
            "name": {
              "type": "Identifier",
              "start": 638,
              "end": 639,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 648,
              "end": 652,
              "typeName": {
                "type": "Identifier",
                "start": 648,
                "end": 652,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 654,
          "end": 658,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 655,
            "end": 658,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 657,
              "end": 658,
              "typeName": {
                "type": "Identifier",
                "start": 657,
                "end": 658,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 660,
          "end": 664,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 661,
            "end": 664,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 663,
              "end": 664,
              "typeName": {
                "type": "Identifier",
                "start": 663,
                "end": 664,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 666,
          "end": 670,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 667,
            "end": 670,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 669,
              "end": 670,
              "typeName": {
                "type": "Identifier",
                "start": 669,
                "end": 670,
                "decorators": [],
                "name": "V",
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
        "start": 672,
        "end": 732,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 678,
            "end": 692,
            "expression": {
              "type": "AssignmentExpression",
              "start": 678,
              "end": 691,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 678,
                "end": 679,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 682,
                "end": 691,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 697,
            "end": 711,
            "expression": {
              "type": "AssignmentExpression",
              "start": 697,
              "end": 710,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 697,
                "end": 698,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 701,
                "end": 710,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 716,
            "end": 730,
            "expression": {
              "type": "AssignmentExpression",
              "start": 716,
              "end": 729,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 716,
                "end": 717,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 720,
                "end": 729,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
