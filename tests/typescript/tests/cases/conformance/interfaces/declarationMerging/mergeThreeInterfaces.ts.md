__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 1080,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 80,
        "end": 100,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 98,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 89,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 97,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 91,
                "end": 97
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
      "start": 102,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 114,
        "end": 134,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 132,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 131,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 125,
                "end": 131
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
      "start": 136,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 148,
        "end": 169,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 167,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 166,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 159,
                "end": 166
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
      "start": 171,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "A",
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
      "start": 181,
      "end": 195,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 187,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 190,
            "end": 195,
            "object": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "foo",
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
      "type": "VariableDeclaration",
      "start": 196,
      "end": 211,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 202,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 205,
            "end": 210,
            "object": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "decorators": [],
              "name": "bar",
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
      "type": "VariableDeclaration",
      "start": 212,
      "end": 227,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 218,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 221,
            "end": 226,
            "object": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "baz",
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
      "start": 251,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 262,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 262,
        "end": 265,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 264,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
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
        "start": 266,
        "end": 281,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 272,
            "end": 279,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 275,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 283,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 294,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 294,
        "end": 297,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 295,
            "end": 296,
            "name": {
              "type": "Identifier",
              "start": 295,
              "end": 296,
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
        "start": 298,
        "end": 313,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 304,
            "end": 311,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 307,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 310,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 310,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
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
      "start": 315,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 326,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 326,
        "end": 329,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 327,
            "end": 328,
            "name": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
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
        "start": 330,
        "end": 345,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 336,
            "end": 343,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 339,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
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
      "start": 347,
      "end": 364,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 363,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 363,
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 355,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 355,
                  "end": 363,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 356,
                      "end": 362
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 379,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 371,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 374,
            "end": 379,
            "object": {
              "type": "Identifier",
              "start": 374,
              "end": 375,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 376,
              "end": 379,
              "decorators": [],
              "name": "foo",
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
      "type": "VariableDeclaration",
      "start": 380,
      "end": 395,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 389,
            "end": 394,
            "object": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 391,
              "end": 394,
              "decorators": [],
              "name": "bar",
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
      "type": "VariableDeclaration",
      "start": 396,
      "end": 411,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 410,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 402,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 405,
            "end": 410,
            "object": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 407,
              "end": 410,
              "decorators": [],
              "name": "baz",
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
      "type": "TSModuleDeclaration",
      "start": 467,
      "end": 1080,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 475,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 476,
        "end": 1080,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 482,
            "end": 522,
            "id": {
              "type": "Identifier",
              "start": 492,
              "end": 493,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 494,
              "end": 522,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 504,
                  "end": 516,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 507,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 507,
                    "end": 515,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 509,
                      "end": 515
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
            "start": 528,
            "end": 568,
            "id": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 540,
              "end": 568,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 550,
                  "end": 562,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 553,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 553,
                    "end": 561,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 555,
                      "end": 561
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
            "start": 574,
            "end": 615,
            "id": {
              "type": "Identifier",
              "start": 584,
              "end": 585,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 586,
              "end": 615,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 596,
                  "end": 609,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 596,
                    "end": 599,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 599,
                    "end": 608,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 601,
                      "end": 608
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
            "start": 621,
            "end": 630,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 625,
                "end": 629,
                "id": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 629,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 626,
                    "end": 629,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 628,
                      "end": 629,
                      "typeName": {
                        "type": "Identifier",
                        "start": 628,
                        "end": 629,
                        "decorators": [],
                        "name": "A",
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
            "start": 635,
            "end": 650,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 639,
                "end": 649,
                "id": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 641,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 644,
                  "end": 649,
                  "object": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 645,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 649,
                    "decorators": [],
                    "name": "foo",
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
            "type": "VariableDeclaration",
            "start": 673,
            "end": 688,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 677,
                "end": 687,
                "id": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 679,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 682,
                  "end": 687,
                  "object": {
                    "type": "Identifier",
                    "start": 682,
                    "end": 683,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 687,
                    "decorators": [],
                    "name": "bar",
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
            "type": "VariableDeclaration",
            "start": 736,
            "end": 751,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 740,
                "end": 750,
                "id": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 742,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 745,
                  "end": 750,
                  "object": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 746,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 747,
                    "end": 750,
                    "decorators": [],
                    "name": "baz",
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
            "start": 783,
            "end": 821,
            "id": {
              "type": "Identifier",
              "start": 793,
              "end": 794,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 794,
              "end": 797,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 795,
                  "end": 796,
                  "name": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 796,
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
              "start": 798,
              "end": 821,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 808,
                  "end": 815,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 808,
                    "end": 811,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 811,
                    "end": 814,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 813,
                      "end": 814,
                      "typeName": {
                        "type": "Identifier",
                        "start": 813,
                        "end": 814,
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
            "start": 827,
            "end": 865,
            "id": {
              "type": "Identifier",
              "start": 837,
              "end": 838,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 838,
              "end": 841,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 839,
                  "end": 840,
                  "name": {
                    "type": "Identifier",
                    "start": 839,
                    "end": 840,
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
              "start": 842,
              "end": 865,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 852,
                  "end": 859,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 852,
                    "end": 855,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 855,
                    "end": 858,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 857,
                      "end": 858,
                      "typeName": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 858,
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
            "start": 871,
            "end": 909,
            "id": {
              "type": "Identifier",
              "start": 881,
              "end": 882,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 882,
              "end": 885,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 883,
                  "end": 884,
                  "name": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 884,
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
              "start": 886,
              "end": 909,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 896,
                  "end": 903,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 899,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 899,
                    "end": 902,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 901,
                      "end": 902,
                      "typeName": {
                        "type": "Identifier",
                        "start": 901,
                        "end": 902,
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
            "start": 915,
            "end": 932,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 919,
                "end": 931,
                "id": {
                  "type": "Identifier",
                  "start": 919,
                  "end": 931,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 920,
                    "end": 931,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 922,
                      "end": 931,
                      "typeName": {
                        "type": "Identifier",
                        "start": 922,
                        "end": 923,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 923,
                        "end": 931,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 924,
                            "end": 930
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
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 937,
            "end": 951,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 941,
                "end": 951,
                "id": {
                  "type": "Identifier",
                  "start": 941,
                  "end": 943,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 946,
                  "end": 951,
                  "object": {
                    "type": "Identifier",
                    "start": 946,
                    "end": 947,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 948,
                    "end": 951,
                    "decorators": [],
                    "name": "foo",
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
            "type": "VariableDeclaration",
            "start": 974,
            "end": 989,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 978,
                "end": 988,
                "id": {
                  "type": "Identifier",
                  "start": 978,
                  "end": 980,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 983,
                  "end": 988,
                  "object": {
                    "type": "Identifier",
                    "start": 983,
                    "end": 984,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 985,
                    "end": 988,
                    "decorators": [],
                    "name": "bar",
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
            "type": "VariableDeclaration",
            "start": 1037,
            "end": 1052,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1041,
                "end": 1051,
                "id": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1043,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1046,
                  "end": 1051,
                  "object": {
                    "type": "Identifier",
                    "start": 1046,
                    "end": 1047,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1048,
                    "end": 1051,
                    "decorators": [],
                    "name": "baz",
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
