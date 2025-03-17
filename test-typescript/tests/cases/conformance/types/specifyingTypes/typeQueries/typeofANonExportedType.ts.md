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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
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
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 11,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 18,
        "end": 35,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 22,
            "end": 34,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 55,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 49,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 51,
                  "end": 53,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 81,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 81,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 80,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 96,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 127,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 118,
        "end": 127,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 122,
            "end": 126,
            "definite": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 137,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExportNamedDeclaration",
      "start": 140,
      "end": 164,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 147,
        "end": 164,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 151,
            "end": 163,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 189,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 172,
        "end": 189,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 176,
            "end": 188,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 190,
      "end": 216,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 197,
        "end": 216,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 201,
            "end": 215,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 250,
      "body": {
        "type": "TSInterfaceBody",
        "start": 230,
        "end": 250,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 236,
            "end": 248,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 239,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 247,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 241,
                "end": 247
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 251,
      "end": 267,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 258,
        "end": 267,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 262,
            "end": 266,
            "definite": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 266,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 268,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 272,
          "end": 277,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 277,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExportNamedDeclaration",
      "start": 279,
      "end": 303,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 286,
        "end": 303,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 290,
            "end": 302,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 304,
      "end": 329,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 311,
        "end": 329,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 315,
            "end": 328,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 331,
      "end": 416,
      "body": {
        "type": "TSModuleBlock",
        "start": 340,
        "end": 416,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 346,
            "end": 366,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 353,
              "end": 366,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 357,
                  "end": 365,
                  "definite": false,
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
                    "raw": "''",
                    "value": ""
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 371,
            "end": 414,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 378,
              "end": 414,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 386,
                "end": 414,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 396,
                    "end": 408,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 399,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
                  }
                ]
              },
              "declare": false,
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
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 339,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 417,
      "end": 441,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 424,
        "end": 441,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 428,
            "end": 440,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 442,
      "end": 470,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 449,
        "end": 470,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 453,
            "end": 469,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 483,
        "end": 484,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 486,
      "end": 510,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 493,
        "end": 510,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 497,
            "end": 509,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 511,
      "end": 539,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 518,
        "end": 539,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 522,
            "end": 538,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSEnumDeclaration",
      "start": 541,
      "end": 557,
      "body": {
        "type": "TSEnumBody",
        "start": 548,
        "end": 557,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 554,
            "end": 555,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 547,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 558,
      "end": 583,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 565,
        "end": 583,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 569,
            "end": 582,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 584,
      "end": 611,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 591,
        "end": 611,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 595,
            "end": 610,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 613,
      "end": 640,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 620,
        "end": 640,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 624,
            "end": 639,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 642,
      "end": 660,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 657,
        "end": 660,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 654,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 661,
      "end": 745,
      "body": {
        "type": "TSModuleBlock",
        "start": 672,
        "end": 745,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 678,
            "end": 695,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 685,
              "end": 695,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 689,
                  "end": 694,
                  "definite": false,
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
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 700,
            "end": 743,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 707,
              "end": 743,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 715,
                "end": 743,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 725,
                    "end": 737,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 728,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
                  }
                ]
              },
              "declare": false,
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
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 668,
        "end": 671,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 746,
      "end": 773,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 753,
        "end": 773,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 757,
            "end": 772,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
