__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 773,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 11,
      "end": 35,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 18,
        "end": 35,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 22,
            "end": 34,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 34,
              "decorators": [],
              "name": "r1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 26,
                  "end": 34,
                  "exprName": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "x",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 56,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 44,
            "end": 55,
            "properties": [
              {
                "type": "Property",
                "start": 46,
                "end": 53,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 49,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 51,
                  "end": 53,
                  "value": "",
                  "raw": "''"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 81,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 81,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 80,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 80,
              "decorators": [],
              "name": "r2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 70,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 72,
                  "end": 80,
                  "exprName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "y",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 110,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
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
        "start": 90,
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 96,
            "end": 108,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
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
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 127,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 118,
        "end": 127,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 122,
            "end": 126,
            "id": {
              "type": "Identifier",
              "start": 122,
              "end": 126,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 123,
                "end": 126,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 125,
                  "end": 126,
                  "typeName": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 137,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
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
      "type": "ExportNamedDeclaration",
      "start": 140,
      "end": 164,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 147,
        "end": 164,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 151,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 151,
              "end": 163,
              "decorators": [],
              "name": "r3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 153,
                "end": 163,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 155,
                  "end": 163,
                  "exprName": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 189,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 172,
        "end": 189,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 176,
            "end": 188,
            "id": {
              "type": "Identifier",
              "start": 176,
              "end": 188,
              "decorators": [],
              "name": "r4",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 178,
                "end": 188,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 180,
                  "end": 188,
                  "exprName": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 188,
                    "decorators": [],
                    "name": "c",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 190,
      "end": 216,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 197,
        "end": 216,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 201,
            "end": 215,
            "id": {
              "type": "Identifier",
              "start": 201,
              "end": 215,
              "decorators": [],
              "name": "r4b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 204,
                "end": 215,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 206,
                  "end": 215,
                  "exprName": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 215,
                    "decorators": [],
                    "name": "c2",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 230,
        "end": 250,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 236,
            "end": 248,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 239,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 247,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 241,
                "end": 247
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
      "type": "ExportNamedDeclaration",
      "start": 251,
      "end": 267,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 258,
        "end": 267,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 262,
            "end": 266,
            "id": {
              "type": "Identifier",
              "start": 262,
              "end": 266,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 263,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 265,
                  "end": 266,
                  "typeName": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 266,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 278,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 272,
            "end": 277,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 277,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 277,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
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
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 303,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 286,
        "end": 303,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 290,
            "end": 302,
            "id": {
              "type": "Identifier",
              "start": 290,
              "end": 302,
              "decorators": [],
              "name": "r5",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 292,
                "end": 302,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 294,
                  "end": 302,
                  "exprName": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 302,
                    "decorators": [],
                    "name": "i",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 304,
      "end": 329,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 311,
        "end": 329,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 315,
            "end": 328,
            "id": {
              "type": "Identifier",
              "start": 315,
              "end": 328,
              "decorators": [],
              "name": "r5",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 317,
                "end": 328,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 319,
                  "end": 328,
                  "exprName": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 328,
                    "decorators": [],
                    "name": "i2",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 331,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 339,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 340,
        "end": 416,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 346,
            "end": 366,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 353,
              "end": 366,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 357,
                  "end": 365,
                  "id": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 360,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 363,
                    "end": 365,
                    "value": "",
                    "raw": "''"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 371,
            "end": 414,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 378,
              "end": 414,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 384,
                "end": 385,
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
                "start": 386,
                "end": 414,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 396,
                    "end": 408,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 399,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 399,
                      "end": 407,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 401,
                        "end": 407
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 417,
      "end": 441,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 424,
        "end": 441,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 428,
            "end": 440,
            "id": {
              "type": "Identifier",
              "start": 428,
              "end": 440,
              "decorators": [],
              "name": "r6",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 430,
                "end": 440,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 432,
                  "end": 440,
                  "exprName": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 440,
                    "decorators": [],
                    "name": "M",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 442,
      "end": 470,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 449,
        "end": 470,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 453,
            "end": 469,
            "id": {
              "type": "Identifier",
              "start": 453,
              "end": 469,
              "decorators": [],
              "name": "r7",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 455,
                "end": 469,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 457,
                  "end": 469,
                  "exprName": {
                    "type": "TSQualifiedName",
                    "start": 464,
                    "end": 469,
                    "left": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 465,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 469,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 472,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 480,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 483,
        "end": 484,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 486,
      "end": 510,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 493,
        "end": 510,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 497,
            "end": 509,
            "id": {
              "type": "Identifier",
              "start": 497,
              "end": 509,
              "decorators": [],
              "name": "r8",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 499,
                "end": 509,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 501,
                  "end": 509,
                  "exprName": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 509,
                    "decorators": [],
                    "name": "Z",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 511,
      "end": 539,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 518,
        "end": 539,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 522,
            "end": 538,
            "id": {
              "type": "Identifier",
              "start": 522,
              "end": 538,
              "decorators": [],
              "name": "r9",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 524,
                "end": 538,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 526,
                  "end": 538,
                  "exprName": {
                    "type": "TSQualifiedName",
                    "start": 533,
                    "end": 538,
                    "left": {
                      "type": "Identifier",
                      "start": 533,
                      "end": 534,
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 535,
                      "end": 538,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSEnumDeclaration",
      "start": 541,
      "end": 557,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 547,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 548,
        "end": 557,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 554,
            "end": 555,
            "id": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
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
      "type": "ExportNamedDeclaration",
      "start": 558,
      "end": 583,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 565,
        "end": 583,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 569,
            "end": 582,
            "id": {
              "type": "Identifier",
              "start": 569,
              "end": 582,
              "decorators": [],
              "name": "r10",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 572,
                "end": 582,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 574,
                  "end": 582,
                  "exprName": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 584,
      "end": 611,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 591,
        "end": 611,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 595,
            "end": 610,
            "id": {
              "type": "Identifier",
              "start": 595,
              "end": 610,
              "decorators": [],
              "name": "r11",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 598,
                "end": 610,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 600,
                  "end": 610,
                  "exprName": {
                    "type": "TSQualifiedName",
                    "start": 607,
                    "end": 610,
                    "left": {
                      "type": "Identifier",
                      "start": 607,
                      "end": 608,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 609,
                      "end": 610,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 613,
      "end": 640,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 620,
        "end": 640,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 624,
            "end": 639,
            "id": {
              "type": "Identifier",
              "start": 624,
              "end": 639,
              "decorators": [],
              "name": "r12",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 627,
                "end": 639,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 629,
                  "end": 639,
                  "exprName": {
                    "type": "Identifier",
                    "start": 636,
                    "end": 639,
                    "decorators": [],
                    "name": "r12",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 642,
      "end": 660,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 654,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 657,
        "end": 660,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 661,
      "end": 745,
      "id": {
        "type": "Identifier",
        "start": 668,
        "end": 671,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 672,
        "end": 745,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 678,
            "end": 695,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 685,
              "end": 695,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 689,
                  "end": 694,
                  "id": {
                    "type": "Identifier",
                    "start": 689,
                    "end": 690,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 693,
                    "end": 694,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 700,
            "end": 743,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 707,
              "end": 743,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
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
                "start": 715,
                "end": 743,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 725,
                    "end": 737,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 728,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 728,
                      "end": 736,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 730,
                        "end": 736
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 746,
      "end": 773,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 753,
        "end": 773,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 757,
            "end": 772,
            "id": {
              "type": "Identifier",
              "start": 757,
              "end": 772,
              "decorators": [],
              "name": "r13",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 760,
                "end": 772,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 762,
                  "end": 772,
                  "exprName": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 772,
                    "decorators": [],
                    "name": "foo",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
