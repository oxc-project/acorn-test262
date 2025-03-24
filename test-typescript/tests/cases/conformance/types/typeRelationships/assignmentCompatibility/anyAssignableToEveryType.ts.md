__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 694,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
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
      "type": "ClassDeclaration",
      "start": 13,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
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
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
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
      "start": 42,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "name": "ac",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
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
      "start": 53,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 85,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
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
      "start": 86,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 95,
            "name": "ai",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
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
      "start": 98,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 107,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
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
        "start": 105,
        "end": 110,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 107,
            "end": 108,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
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
      "start": 111,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
            "name": "ae",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
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
      "start": 123,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 140,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 136,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "name": "a",
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
      "start": 142,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 155,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 155,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 149,
                "end": 155
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "name": "a",
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
      "start": 161,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 175,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 175,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 168,
                "end": 175
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "name": "a",
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
      "start": 181,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 192,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
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
            "start": 195,
            "end": 196,
            "name": "a",
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
      "start": 198,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 208,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 208,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 205,
                "end": 208
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "name": "a",
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
      "start": 214,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 225,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 225,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 221,
                "end": 225
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "name": "a",
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
      "start": 231,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 244,
            "name": "h",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 244,
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
            "start": 247,
            "end": 248,
            "name": "a",
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
      "start": 250,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 259,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 257,
                "end": 259,
                "members": []
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "name": "a",
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
      "start": 265,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 280,
            "name": "j",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 270,
              "end": 280,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 272,
                "end": 280,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 280,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 278,
                    "end": 280,
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
            "start": 283,
            "end": 284,
            "name": "a",
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
      "start": 286,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 301,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 301,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 301,
                "typeName": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 301,
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
            "start": 304,
            "end": 305,
            "name": "a",
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
      "start": 307,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 335,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 335,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 314,
                "end": 335,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 315,
                    "end": 324,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 326,
                  "end": 335,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 329,
                    "end": 335
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 338,
            "end": 339,
            "name": "a",
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
      "start": 341,
      "end": 348,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 347,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 341,
          "end": 343,
          "name": "ac",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 346,
          "end": 347,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 356,
      "expression": {
        "type": "AssignmentExpression",
        "start": 349,
        "end": 355,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 349,
          "end": 351,
          "name": "ai",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 354,
          "end": 355,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 364,
      "expression": {
        "type": "AssignmentExpression",
        "start": 357,
        "end": 363,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 357,
          "end": 359,
          "name": "ae",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 362,
          "end": 363,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 380,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 380,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 372,
                "end": 380,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 372,
                  "end": 378
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "name": "a",
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
      "start": 386,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 408,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 408,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 393,
                "end": 408,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 395,
                    "end": 406,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 398,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 398,
                      "end": 406,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 400,
                        "end": 406
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
            "start": 411,
            "end": 412,
            "name": "a",
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
      "start": 414,
      "end": 440,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 418,
          "end": 439,
          "id": {
            "type": "Identifier",
            "start": 418,
            "end": 435,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 419,
              "end": 435,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 421,
                "end": 435,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 421,
                  "end": 424,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 422,
                      "end": 423,
                      "name": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 423,
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
                    "start": 425,
                    "end": 429,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 426,
                      "end": 429,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 428,
                        "end": 429,
                        "typeName": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 429,
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
                  "start": 431,
                  "end": 435,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 434,
                    "end": 435,
                    "typeName": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 435,
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
            "start": 438,
            "end": 439,
            "name": "a",
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
      "start": 441,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 458,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 454,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 454,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 448,
                "end": 454,
                "typeName": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 454,
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
            "start": 457,
            "end": 458,
            "name": "a",
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
      "start": 460,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 473,
            "name": "q",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 473,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 467,
                "end": 473,
                "typeName": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 473,
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
            "start": 476,
            "end": 477,
            "name": "a",
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
      "start": 480,
      "end": 583,
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 492,
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
          "start": 529,
          "end": 533,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 530,
            "end": 533,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 532,
              "end": 533,
              "typeName": {
                "type": "Identifier",
                "start": 532,
                "end": 533,
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
          "start": 535,
          "end": 539,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 536,
            "end": 539,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 538,
              "end": 539,
              "typeName": {
                "type": "Identifier",
                "start": 538,
                "end": 539,
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
          "start": 541,
          "end": 545,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 542,
            "end": 545,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 544,
              "end": 545,
              "typeName": {
                "type": "Identifier",
                "start": 544,
                "end": 545,
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
        "start": 547,
        "end": 583,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 553,
            "end": 559,
            "expression": {
              "type": "AssignmentExpression",
              "start": 553,
              "end": 558,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 557,
                "end": 558,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 564,
            "end": 570,
            "expression": {
              "type": "AssignmentExpression",
              "start": 564,
              "end": 569,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 568,
                "end": 569,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 575,
            "end": 581,
            "expression": {
              "type": "AssignmentExpression",
              "start": 575,
              "end": 580,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 575,
                "end": 576,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
                "name": "a",
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
        "start": 492,
        "end": 528,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 493,
            "end": 494,
            "name": {
              "type": "Identifier",
              "start": 493,
              "end": 494,
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
            "start": 496,
            "end": 497,
            "name": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
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
            "start": 513,
            "end": 527,
            "name": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 523,
              "end": 527,
              "typeName": {
                "type": "Identifier",
                "start": 523,
                "end": 527,
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
