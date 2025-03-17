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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
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
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
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
      "type": "VariableDeclaration",
      "start": 29,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "name": "ac",
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
                  "name": "C",
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
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 82,
            "name": "ai",
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
                  "name": "I",
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
      "type": "TSEnumDeclaration",
      "start": 85,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 94,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 107,
            "name": "ae",
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
                  "name": "E",
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
      "start": 110,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 123,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 126,
            "end": 135,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 150,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 153,
            "end": 162,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 178,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 178,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 171,
                "end": 178
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 181,
            "end": 190,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 203,
            "name": "e",
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
                  "name": "Date",
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
          "init": {
            "type": "Identifier",
            "start": 206,
            "end": 215,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 227,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 227,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 224,
                "end": 227
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 230,
            "end": 239,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 252,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 252,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 248,
                "end": 252
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 255,
            "end": 264,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 279,
            "name": "h",
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
                  "name": "Object",
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
          "init": {
            "type": "Identifier",
            "start": 282,
            "end": 291,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 302,
            "name": "i",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 305,
            "end": 314,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 343,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 331,
            "name": "j",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 334,
            "end": 343,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 372,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 360,
            "name": "k",
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
                  "name": "Function",
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
          "init": {
            "type": "Identifier",
            "start": 363,
            "end": 372,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 374,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 402,
            "name": "l",
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 383,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 385,
                        "end": 391
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 405,
            "end": 414,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "ac",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 421,
          "end": 430,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "ai",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 437,
          "end": 446,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "ae",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 453,
          "end": 462,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 491,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 479,
            "name": "m",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 482,
            "end": 491,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 493,
      "end": 528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 527,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 515,
            "name": "n",
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
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 518,
            "end": 527,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 563,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 562,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 550,
            "name": "o",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 540,
                    "end": 544,
                    "name": "x",
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
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 553,
            "end": 562,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 564,
      "end": 590,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 589,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 577,
            "name": "p",
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
                  "name": "Number",
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
          "init": {
            "type": "Identifier",
            "start": 580,
            "end": 589,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 591,
      "end": 617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 616,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 604,
            "name": "q",
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
                  "name": "String",
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
          "init": {
            "type": "Identifier",
            "start": 607,
            "end": 616,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "foo",
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
          "start": 654,
          "end": 658,
          "name": "x",
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
        },
        {
          "type": "Identifier",
          "start": 660,
          "end": 664,
          "name": "y",
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
        },
        {
          "type": "Identifier",
          "start": 666,
          "end": 670,
          "name": "z",
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 682,
                "end": 691,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 701,
                "end": 710,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 720,
                "end": 729,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
            "start": 635,
            "end": 636,
            "name": {
              "type": "Identifier",
              "start": 635,
              "end": 636,
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
            "start": 638,
            "end": 652,
            "name": {
              "type": "Identifier",
              "start": 638,
              "end": 639,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 648,
              "end": 652,
              "typeName": {
                "type": "Identifier",
                "start": 648,
                "end": 652,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
