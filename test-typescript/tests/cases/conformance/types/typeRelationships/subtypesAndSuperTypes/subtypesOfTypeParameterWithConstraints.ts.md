__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 3603,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 109,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 109,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 107,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
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
              "start": 103,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 106,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 88,
        "end": 90,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 90,
        "end": 93,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 91,
            "end": 92,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
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
      "start": 111,
      "end": 191,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 150,
        "end": 191,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 156,
            "end": 171,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 157,
                "end": 166,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 160,
                    "end": 166
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 170,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 183,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
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
              "start": 179,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 182,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 117,
        "end": 119,
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 144,
        "end": 146,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 146,
        "end": 149,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 147,
            "end": 148,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 131,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 130,
              "end": 131,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 133,
            "end": 134,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "U",
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
      "start": 193,
      "end": 273,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 232,
        "end": 273,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 238,
            "end": 253,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 239,
                "end": 248,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 240,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 242,
                    "end": 248
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 251,
                "end": 252,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 258,
            "end": 265,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 261,
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
              "start": 261,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 264,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 199,
        "end": 201,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 226,
        "end": 228,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 228,
        "end": 231,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 229,
            "end": 230,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 201,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 202,
            "end": 213,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 212,
              "end": 213,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 216,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "U",
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
      "start": 275,
      "end": 358,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 314,
        "end": 358,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 320,
            "end": 335,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 321,
                "end": 330,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 322,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 324,
                    "end": 330
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 334,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 333,
                "end": 334,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 340,
            "end": 347,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 343,
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
              "start": 343,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 345,
                "end": 346,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 281,
        "end": 283,
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 308,
        "end": 310,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 310,
        "end": 313,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 311,
            "end": 312,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 283,
        "end": 299,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 284,
            "end": 295,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 294,
              "end": 295,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 297,
            "end": 298,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "U",
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
      "start": 360,
      "end": 440,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 399,
        "end": 440,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 405,
            "end": 420,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 406,
                "end": 415,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 407,
                  "end": 415,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 409,
                    "end": 415
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 419,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 418,
                "end": 419,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 418,
                  "end": 419,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 425,
            "end": 432,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 425,
              "end": 428,
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
              "start": 428,
              "end": 431,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 430,
                "end": 431,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 431,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 366,
        "end": 368,
        "decorators": [],
        "name": "D4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 393,
        "end": 395,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 395,
        "end": 398,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 396,
            "end": 397,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 368,
        "end": 384,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 369,
            "end": 380,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 379,
              "end": 380,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 369,
              "end": 370,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 382,
            "end": 383,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "decorators": [],
              "name": "U",
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
      "start": 510,
      "end": 603,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 562,
        "end": 603,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 568,
            "end": 583,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 569,
                "end": 578,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 570,
                  "end": 578,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 572,
                    "end": 578
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 582,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 581,
                "end": 582,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 582,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 588,
            "end": 595,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 588,
              "end": 591,
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
              "start": 591,
              "end": 594,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 593,
                "end": 594,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 594,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 516,
        "end": 518,
        "decorators": [],
        "name": "D5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 556,
        "end": 558,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 558,
        "end": 561,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 559,
            "end": 560,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 518,
        "end": 547,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 519,
            "end": 530,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 529,
              "end": 530,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 532,
            "end": 543,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 542,
              "end": 543,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 532,
              "end": 533,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 545,
            "end": 546,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 545,
              "end": 546,
              "decorators": [],
              "name": "V",
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
      "start": 605,
      "end": 692,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 657,
        "end": 692,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 663,
            "end": 678,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 664,
                "end": 673,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 665,
                  "end": 673,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 667,
                    "end": 673
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 674,
              "end": 677,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 676,
                "end": 677,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 677,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 683,
            "end": 690,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 683,
              "end": 686,
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
              "start": 686,
              "end": 689,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 688,
                "end": 689,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 689,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 611,
        "end": 613,
        "decorators": [],
        "name": "D6",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 651,
        "end": 653,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 653,
        "end": 656,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 654,
            "end": 655,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 654,
              "end": 655,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 613,
        "end": 642,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 614,
            "end": 625,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 624,
              "end": 625,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 624,
                "end": 625,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 627,
            "end": 638,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 637,
              "end": 638,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 637,
                "end": 638,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 627,
              "end": 628,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 640,
            "end": 641,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 640,
              "end": 641,
              "decorators": [],
              "name": "V",
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
      "start": 694,
      "end": 787,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 746,
        "end": 787,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 752,
            "end": 767,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 753,
                "end": 762,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 754,
                  "end": 762,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 756,
                    "end": 762
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 763,
              "end": 766,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 765,
                "end": 766,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 766,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 772,
            "end": 779,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 772,
              "end": 775,
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
              "start": 775,
              "end": 778,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 777,
                "end": 778,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 778,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 700,
        "end": 702,
        "decorators": [],
        "name": "D7",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 740,
        "end": 742,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 742,
        "end": 745,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 743,
            "end": 744,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 743,
              "end": 744,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 702,
        "end": 731,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 703,
            "end": 714,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 713,
              "end": 714,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 703,
              "end": 704,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 716,
            "end": 727,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 726,
              "end": 727,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 726,
                "end": 727,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 716,
              "end": 717,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 729,
            "end": 730,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 729,
              "end": 730,
              "decorators": [],
              "name": "V",
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
      "start": 860,
      "end": 956,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 912,
        "end": 956,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 918,
            "end": 933,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 919,
                "end": 928,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 920,
                  "end": 928,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 922,
                    "end": 928
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 929,
              "end": 932,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 931,
                "end": 932,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 931,
                  "end": 932,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 938,
            "end": 945,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 938,
              "end": 941,
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
              "start": 941,
              "end": 944,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 943,
                "end": 944,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 943,
                  "end": 944,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 866,
        "end": 868,
        "decorators": [],
        "name": "D8",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 906,
        "end": 908,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 908,
        "end": 911,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 909,
            "end": 910,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 909,
              "end": 910,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 868,
        "end": 897,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 869,
            "end": 880,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 879,
              "end": 880,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 879,
                "end": 880,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 869,
              "end": 870,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 882,
            "end": 893,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 892,
              "end": 893,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 892,
                "end": 893,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 882,
              "end": 883,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 895,
            "end": 896,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 895,
              "end": 896,
              "decorators": [],
              "name": "V",
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
      "start": 958,
      "end": 1051,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1010,
        "end": 1051,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1016,
            "end": 1031,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1017,
                "end": 1026,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1018,
                  "end": 1026,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1020,
                    "end": 1026
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1027,
              "end": 1030,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1029,
                "end": 1030,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1029,
                  "end": 1030,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1036,
            "end": 1043,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1036,
              "end": 1039,
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
              "start": 1039,
              "end": 1042,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1041,
                "end": 1042,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1042,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 964,
        "end": 966,
        "decorators": [],
        "name": "D9",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1004,
        "end": 1006,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1006,
        "end": 1009,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1007,
            "end": 1008,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1007,
              "end": 1008,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 966,
        "end": 995,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 967,
            "end": 978,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 977,
              "end": 978,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 977,
                "end": 978,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 967,
              "end": 968,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 980,
            "end": 991,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 990,
              "end": 991,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 990,
                "end": 991,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 980,
              "end": 981,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 993,
            "end": 994,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 993,
              "end": 994,
              "decorators": [],
              "name": "V",
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
      "start": 1053,
      "end": 1147,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1106,
        "end": 1147,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1112,
            "end": 1127,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1113,
                "end": 1122,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1114,
                  "end": 1122,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1116,
                    "end": 1122
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1123,
              "end": 1126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1125,
                "end": 1126,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1125,
                  "end": 1126,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1132,
            "end": 1139,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1132,
              "end": 1135,
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
              "start": 1135,
              "end": 1138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1137,
                "end": 1138,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1138,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1059,
        "end": 1062,
        "decorators": [],
        "name": "D10",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1100,
        "end": 1102,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1102,
        "end": 1105,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1103,
            "end": 1104,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1103,
              "end": 1104,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1062,
        "end": 1091,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1063,
            "end": 1074,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1073,
              "end": 1074,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1073,
                "end": 1074,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1063,
              "end": 1064,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1076,
            "end": 1087,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1086,
              "end": 1087,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1086,
                "end": 1087,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1076,
              "end": 1077,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1089,
            "end": 1090,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1089,
              "end": 1090,
              "decorators": [],
              "name": "V",
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
      "start": 1214,
      "end": 1311,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1267,
        "end": 1311,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1273,
            "end": 1288,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1274,
                "end": 1283,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1275,
                  "end": 1283,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1277,
                    "end": 1283
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1284,
              "end": 1287,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1286,
                "end": 1287,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1287,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1293,
            "end": 1300,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1293,
              "end": 1296,
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
              "start": 1296,
              "end": 1299,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1298,
                "end": 1299,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1298,
                  "end": 1299,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1220,
        "end": 1223,
        "decorators": [],
        "name": "D11",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1261,
        "end": 1263,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1263,
        "end": 1266,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1264,
            "end": 1265,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1264,
              "end": 1265,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1223,
        "end": 1252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1224,
            "end": 1235,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1234,
              "end": 1235,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1234,
                "end": 1235,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1224,
              "end": 1225,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1237,
            "end": 1248,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1247,
              "end": 1248,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1247,
                "end": 1248,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1237,
              "end": 1238,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1250,
            "end": 1251,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1250,
              "end": 1251,
              "decorators": [],
              "name": "V",
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
      "start": 1313,
      "end": 1410,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1366,
        "end": 1410,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1372,
            "end": 1387,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1373,
                "end": 1382,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1374,
                  "end": 1382,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1376,
                    "end": 1382
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1383,
              "end": 1386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1385,
                "end": 1386,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1385,
                  "end": 1386,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1392,
            "end": 1399,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1392,
              "end": 1395,
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
              "start": 1395,
              "end": 1398,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1397,
                "end": 1398,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1397,
                  "end": 1398,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1319,
        "end": 1322,
        "decorators": [],
        "name": "D12",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1360,
        "end": 1362,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1362,
        "end": 1365,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1363,
            "end": 1364,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1363,
              "end": 1364,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1322,
        "end": 1351,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1323,
            "end": 1334,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1333,
              "end": 1334,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1333,
                "end": 1334,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1323,
              "end": 1324,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1336,
            "end": 1347,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1346,
              "end": 1347,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1346,
                "end": 1347,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1336,
              "end": 1337,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1349,
            "end": 1350,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1349,
              "end": 1350,
              "decorators": [],
              "name": "V",
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
      "start": 1412,
      "end": 1506,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1465,
        "end": 1506,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1471,
            "end": 1486,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1472,
                "end": 1481,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1473,
                  "end": 1481,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1475,
                    "end": 1481
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1482,
              "end": 1485,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1484,
                "end": 1485,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1484,
                  "end": 1485,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1491,
            "end": 1498,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1491,
              "end": 1494,
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
              "start": 1494,
              "end": 1497,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1496,
                "end": 1497,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1496,
                  "end": 1497,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1418,
        "end": 1421,
        "decorators": [],
        "name": "D13",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1459,
        "end": 1461,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1461,
        "end": 1464,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1462,
            "end": 1463,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1462,
              "end": 1463,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1421,
        "end": 1450,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1422,
            "end": 1433,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1432,
              "end": 1433,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1432,
                "end": 1433,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1422,
              "end": 1423,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1435,
            "end": 1446,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1445,
              "end": 1446,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1445,
                "end": 1446,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1435,
              "end": 1436,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1448,
            "end": 1449,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1448,
              "end": 1449,
              "decorators": [],
              "name": "V",
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
      "start": 1588,
      "end": 1701,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1657,
        "end": 1701,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1663,
            "end": 1681,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1664,
                "end": 1673,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1665,
                  "end": 1673,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1667,
                    "end": 1673
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1674,
              "end": 1680,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1676,
                "end": 1680,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1676,
                  "end": 1680,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1686,
            "end": 1693,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1686,
              "end": 1689,
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
              "start": 1689,
              "end": 1692,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1691,
                "end": 1692,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1691,
                  "end": 1692,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1594,
        "end": 1597,
        "decorators": [],
        "name": "D14",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1648,
        "end": 1650,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1650,
        "end": 1656,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1651,
            "end": 1655,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1651,
              "end": 1655,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1597,
        "end": 1639,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1598,
            "end": 1609,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1608,
              "end": 1609,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1608,
                "end": 1609,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1598,
              "end": 1599,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1611,
            "end": 1622,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1621,
              "end": 1622,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1621,
                "end": 1622,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1611,
              "end": 1612,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1624,
            "end": 1638,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1634,
              "end": 1638,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1634,
                "end": 1638,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1624,
              "end": 1625,
              "decorators": [],
              "name": "V",
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
      "start": 1703,
      "end": 1810,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1769,
        "end": 1810,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1775,
            "end": 1790,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1776,
                "end": 1785,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1777,
                  "end": 1785,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1779,
                    "end": 1785
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1786,
              "end": 1789,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1788,
                "end": 1789,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1788,
                  "end": 1789,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1795,
            "end": 1802,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1795,
              "end": 1798,
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
              "start": 1798,
              "end": 1801,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1800,
                "end": 1801,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1800,
                  "end": 1801,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1709,
        "end": 1712,
        "decorators": [],
        "name": "D15",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1763,
        "end": 1765,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1765,
        "end": 1768,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1766,
            "end": 1767,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1766,
              "end": 1767,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1712,
        "end": 1754,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1713,
            "end": 1724,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1723,
              "end": 1724,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1723,
                "end": 1724,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1713,
              "end": 1714,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1726,
            "end": 1737,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1736,
              "end": 1737,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1736,
                "end": 1737,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1726,
              "end": 1727,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1739,
            "end": 1753,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1749,
              "end": 1753,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1749,
                "end": 1753,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1739,
              "end": 1740,
              "decorators": [],
              "name": "V",
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
      "start": 1812,
      "end": 1913,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1878,
        "end": 1913,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1884,
            "end": 1899,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1885,
                "end": 1894,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1886,
                  "end": 1894,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1888,
                    "end": 1894
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1895,
              "end": 1898,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1897,
                "end": 1898,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1897,
                  "end": 1898,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1904,
            "end": 1911,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1904,
              "end": 1907,
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
              "start": 1907,
              "end": 1910,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1909,
                "end": 1910,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1909,
                  "end": 1910,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1818,
        "end": 1821,
        "decorators": [],
        "name": "D16",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1872,
        "end": 1874,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1874,
        "end": 1877,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1875,
            "end": 1876,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1875,
              "end": 1876,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1821,
        "end": 1863,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1822,
            "end": 1833,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1832,
              "end": 1833,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1832,
                "end": 1833,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1822,
              "end": 1823,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1835,
            "end": 1846,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1845,
              "end": 1846,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1845,
                "end": 1846,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1835,
              "end": 1836,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1848,
            "end": 1862,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1858,
              "end": 1862,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1858,
                "end": 1862,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1848,
              "end": 1849,
              "decorators": [],
              "name": "V",
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
      "start": 1915,
      "end": 2016,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1981,
        "end": 2016,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1987,
            "end": 2002,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1988,
                "end": 1997,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1989,
                  "end": 1997,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1991,
                    "end": 1997
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1998,
              "end": 2001,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2000,
                "end": 2001,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2000,
                  "end": 2001,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2007,
            "end": 2014,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2007,
              "end": 2010,
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
              "start": 2010,
              "end": 2013,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2012,
                "end": 2013,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2012,
                  "end": 2013,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 1921,
        "end": 1924,
        "decorators": [],
        "name": "D17",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1975,
        "end": 1977,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1977,
        "end": 1980,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1978,
            "end": 1979,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1978,
              "end": 1979,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1924,
        "end": 1966,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1925,
            "end": 1936,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1935,
              "end": 1936,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1935,
                "end": 1936,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1925,
              "end": 1926,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1938,
            "end": 1949,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1948,
              "end": 1949,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1948,
                "end": 1949,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1938,
              "end": 1939,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1951,
            "end": 1965,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1961,
              "end": 1965,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1961,
                "end": 1965,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1951,
              "end": 1952,
              "decorators": [],
              "name": "V",
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
      "start": 2101,
      "end": 2214,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2170,
        "end": 2214,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2176,
            "end": 2194,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2177,
                "end": 2186,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2178,
                  "end": 2186,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2180,
                    "end": 2186
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2187,
              "end": 2193,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2189,
                "end": 2193,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2189,
                  "end": 2193,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2199,
            "end": 2206,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2199,
              "end": 2202,
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
              "start": 2202,
              "end": 2205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2204,
                "end": 2205,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2204,
                  "end": 2205,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 2107,
        "end": 2110,
        "decorators": [],
        "name": "D18",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2161,
        "end": 2163,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 2163,
        "end": 2169,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 2164,
            "end": 2168,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2164,
              "end": 2168,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2110,
        "end": 2152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2111,
            "end": 2122,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2121,
              "end": 2122,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2121,
                "end": 2122,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2111,
              "end": 2112,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2124,
            "end": 2135,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2134,
              "end": 2135,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2134,
                "end": 2135,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2124,
              "end": 2125,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2137,
            "end": 2151,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2147,
              "end": 2151,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2147,
                "end": 2151,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2137,
              "end": 2138,
              "decorators": [],
              "name": "V",
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
      "start": 2216,
      "end": 2326,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2282,
        "end": 2326,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2288,
            "end": 2303,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2289,
                "end": 2298,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2290,
                  "end": 2298,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2292,
                    "end": 2298
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2299,
              "end": 2302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2301,
                "end": 2302,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2301,
                  "end": 2302,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2308,
            "end": 2315,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2308,
              "end": 2311,
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
              "start": 2311,
              "end": 2314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2313,
                "end": 2314,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2313,
                  "end": 2314,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 2222,
        "end": 2225,
        "decorators": [],
        "name": "D19",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2276,
        "end": 2278,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 2278,
        "end": 2281,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 2279,
            "end": 2280,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2279,
              "end": 2280,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2225,
        "end": 2267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2226,
            "end": 2237,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2236,
              "end": 2237,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2236,
                "end": 2237,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2226,
              "end": 2227,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2239,
            "end": 2250,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2249,
              "end": 2250,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2249,
                "end": 2250,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2239,
              "end": 2240,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2252,
            "end": 2266,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2262,
              "end": 2266,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2262,
                "end": 2266,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2252,
              "end": 2253,
              "decorators": [],
              "name": "V",
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
      "start": 2328,
      "end": 2435,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2394,
        "end": 2435,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2400,
            "end": 2415,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2401,
                "end": 2410,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2402,
                  "end": 2410,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2404,
                    "end": 2410
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2411,
              "end": 2414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2413,
                "end": 2414,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2413,
                  "end": 2414,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2420,
            "end": 2427,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2420,
              "end": 2423,
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
              "start": 2423,
              "end": 2426,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2425,
                "end": 2426,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2425,
                  "end": 2426,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 2334,
        "end": 2337,
        "decorators": [],
        "name": "D20",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2388,
        "end": 2390,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 2390,
        "end": 2393,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 2391,
            "end": 2392,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2391,
              "end": 2392,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2337,
        "end": 2379,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2338,
            "end": 2349,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2348,
              "end": 2349,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2348,
                "end": 2349,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2338,
              "end": 2339,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2351,
            "end": 2362,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2361,
              "end": 2362,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2361,
                "end": 2362,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2351,
              "end": 2352,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2364,
            "end": 2378,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2374,
              "end": 2378,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2374,
                "end": 2378,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2364,
              "end": 2365,
              "decorators": [],
              "name": "V",
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
      "start": 2437,
      "end": 2538,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2503,
        "end": 2538,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2509,
            "end": 2524,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2510,
                "end": 2519,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2511,
                  "end": 2519,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2513,
                    "end": 2519
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2520,
              "end": 2523,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2522,
                "end": 2523,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2522,
                  "end": 2523,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2529,
            "end": 2536,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2529,
              "end": 2532,
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
              "start": 2532,
              "end": 2535,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2534,
                "end": 2535,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2534,
                  "end": 2535,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 2443,
        "end": 2446,
        "decorators": [],
        "name": "D21",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2497,
        "end": 2499,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 2499,
        "end": 2502,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 2500,
            "end": 2501,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2500,
              "end": 2501,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2446,
        "end": 2488,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2447,
            "end": 2458,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2457,
              "end": 2458,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2457,
                "end": 2458,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2447,
              "end": 2448,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2460,
            "end": 2471,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2470,
              "end": 2471,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2470,
                "end": 2471,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2460,
              "end": 2461,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2473,
            "end": 2487,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2483,
              "end": 2487,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2483,
                "end": 2487,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2473,
              "end": 2474,
              "decorators": [],
              "name": "V",
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
      "start": 2620,
      "end": 2733,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2689,
        "end": 2733,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2695,
            "end": 2713,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2696,
                "end": 2705,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2697,
                  "end": 2705,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2699,
                    "end": 2705
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2706,
              "end": 2712,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2708,
                "end": 2712,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2708,
                  "end": 2712,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2718,
            "end": 2725,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2718,
              "end": 2721,
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
              "start": 2721,
              "end": 2724,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2723,
                "end": 2724,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2723,
                  "end": 2724,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 2626,
        "end": 2629,
        "decorators": [],
        "name": "D22",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2680,
        "end": 2682,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 2682,
        "end": 2688,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 2683,
            "end": 2687,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2683,
              "end": 2687,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2629,
        "end": 2671,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2630,
            "end": 2641,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2640,
              "end": 2641,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2640,
                "end": 2641,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2630,
              "end": 2631,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2643,
            "end": 2654,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2653,
              "end": 2654,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2653,
                "end": 2654,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2643,
              "end": 2644,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2656,
            "end": 2670,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2666,
              "end": 2670,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2666,
                "end": 2670,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2656,
              "end": 2657,
              "decorators": [],
              "name": "V",
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
      "start": 2735,
      "end": 2845,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2801,
        "end": 2845,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2807,
            "end": 2822,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2808,
                "end": 2817,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2809,
                  "end": 2817,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2811,
                    "end": 2817
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2818,
              "end": 2821,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2820,
                "end": 2821,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2820,
                  "end": 2821,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2827,
            "end": 2834,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2827,
              "end": 2830,
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
              "start": 2830,
              "end": 2833,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2832,
                "end": 2833,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2832,
                  "end": 2833,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 2741,
        "end": 2744,
        "decorators": [],
        "name": "D23",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2795,
        "end": 2797,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 2797,
        "end": 2800,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 2798,
            "end": 2799,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2798,
              "end": 2799,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2744,
        "end": 2786,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2745,
            "end": 2756,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2755,
              "end": 2756,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2755,
                "end": 2756,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2745,
              "end": 2746,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2758,
            "end": 2769,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2768,
              "end": 2769,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2768,
                "end": 2769,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2758,
              "end": 2759,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2771,
            "end": 2785,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2781,
              "end": 2785,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2781,
                "end": 2785,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2771,
              "end": 2772,
              "decorators": [],
              "name": "V",
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
      "start": 2847,
      "end": 2957,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2913,
        "end": 2957,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2919,
            "end": 2934,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2920,
                "end": 2929,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2921,
                  "end": 2929,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2923,
                    "end": 2929
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2930,
              "end": 2933,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2932,
                "end": 2933,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2932,
                  "end": 2933,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2939,
            "end": 2946,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2939,
              "end": 2942,
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
              "start": 2942,
              "end": 2945,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2944,
                "end": 2945,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2944,
                  "end": 2945,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 2853,
        "end": 2856,
        "decorators": [],
        "name": "D24",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 2907,
        "end": 2909,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 2909,
        "end": 2912,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 2910,
            "end": 2911,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 2910,
              "end": 2911,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2856,
        "end": 2898,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2857,
            "end": 2868,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2867,
              "end": 2868,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2867,
                "end": 2868,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2857,
              "end": 2858,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2870,
            "end": 2881,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2880,
              "end": 2881,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2880,
                "end": 2881,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2870,
              "end": 2871,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2883,
            "end": 2897,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2893,
              "end": 2897,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2893,
                "end": 2897,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2883,
              "end": 2884,
              "decorators": [],
              "name": "V",
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
      "start": 2959,
      "end": 3066,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3025,
        "end": 3066,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 3031,
            "end": 3046,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3032,
                "end": 3041,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3033,
                  "end": 3041,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3035,
                    "end": 3041
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3042,
              "end": 3045,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3044,
                "end": 3045,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3044,
                  "end": 3045,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3051,
            "end": 3058,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3051,
              "end": 3054,
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
              "start": 3054,
              "end": 3057,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3056,
                "end": 3057,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3056,
                  "end": 3057,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 2965,
        "end": 2968,
        "decorators": [],
        "name": "D25",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 3019,
        "end": 3021,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 3021,
        "end": 3024,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 3022,
            "end": 3023,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3022,
              "end": 3023,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2968,
        "end": 3010,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2969,
            "end": 2980,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2979,
              "end": 2980,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2979,
                "end": 2980,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2969,
              "end": 2970,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2982,
            "end": 2993,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 2992,
              "end": 2993,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2992,
                "end": 2993,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2982,
              "end": 2983,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2995,
            "end": 3009,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3005,
              "end": 3009,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3005,
                "end": 3009,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2995,
              "end": 2996,
              "decorators": [],
              "name": "V",
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
      "start": 3142,
      "end": 3258,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3211,
        "end": 3258,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 3217,
            "end": 3235,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3218,
                "end": 3227,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3219,
                  "end": 3227,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3221,
                    "end": 3227
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3228,
              "end": 3234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3230,
                "end": 3234,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3230,
                  "end": 3234,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3240,
            "end": 3250,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3240,
              "end": 3243,
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
              "start": 3243,
              "end": 3249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3245,
                "end": 3249,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3245,
                  "end": 3249,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 3148,
        "end": 3151,
        "decorators": [],
        "name": "D26",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 3202,
        "end": 3204,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 3204,
        "end": 3210,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 3205,
            "end": 3209,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3205,
              "end": 3209,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3151,
        "end": 3193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3152,
            "end": 3163,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3162,
              "end": 3163,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3162,
                "end": 3163,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3152,
              "end": 3153,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3165,
            "end": 3176,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3175,
              "end": 3176,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3175,
                "end": 3176,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3165,
              "end": 3166,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3178,
            "end": 3192,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3188,
              "end": 3192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3188,
                "end": 3192,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3178,
              "end": 3179,
              "decorators": [],
              "name": "V",
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
      "start": 3260,
      "end": 3373,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3326,
        "end": 3373,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 3332,
            "end": 3347,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3333,
                "end": 3342,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3334,
                  "end": 3342,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3336,
                    "end": 3342
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3343,
              "end": 3346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3345,
                "end": 3346,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3345,
                  "end": 3346,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3352,
            "end": 3362,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3352,
              "end": 3355,
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
              "start": 3355,
              "end": 3361,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3357,
                "end": 3361,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3357,
                  "end": 3361,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 3266,
        "end": 3269,
        "decorators": [],
        "name": "D27",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 3320,
        "end": 3322,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 3322,
        "end": 3325,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 3323,
            "end": 3324,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3323,
              "end": 3324,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3269,
        "end": 3311,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3270,
            "end": 3281,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3280,
              "end": 3281,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3280,
                "end": 3281,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3270,
              "end": 3271,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3283,
            "end": 3294,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3293,
              "end": 3294,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3293,
                "end": 3294,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3283,
              "end": 3284,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3296,
            "end": 3310,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3306,
              "end": 3310,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3306,
                "end": 3310,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3296,
              "end": 3297,
              "decorators": [],
              "name": "V",
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
      "start": 3375,
      "end": 3488,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3441,
        "end": 3488,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 3447,
            "end": 3462,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3448,
                "end": 3457,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3449,
                  "end": 3457,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3451,
                    "end": 3457
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3458,
              "end": 3461,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3460,
                "end": 3461,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3460,
                  "end": 3461,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3467,
            "end": 3477,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3467,
              "end": 3470,
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
              "start": 3470,
              "end": 3476,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3472,
                "end": 3476,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3472,
                  "end": 3476,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 3381,
        "end": 3384,
        "decorators": [],
        "name": "D28",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 3435,
        "end": 3437,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 3437,
        "end": 3440,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 3438,
            "end": 3439,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3438,
              "end": 3439,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3384,
        "end": 3426,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3385,
            "end": 3396,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3395,
              "end": 3396,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3395,
                "end": 3396,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3385,
              "end": 3386,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3398,
            "end": 3409,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3408,
              "end": 3409,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3408,
                "end": 3409,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3398,
              "end": 3399,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3411,
            "end": 3425,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3421,
              "end": 3425,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3421,
                "end": 3425,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3411,
              "end": 3412,
              "decorators": [],
              "name": "V",
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
      "start": 3490,
      "end": 3603,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3556,
        "end": 3603,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 3562,
            "end": 3577,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3563,
                "end": 3572,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3564,
                  "end": 3572,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3566,
                    "end": 3572
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3573,
              "end": 3576,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3575,
                "end": 3576,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3575,
                  "end": 3576,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3582,
            "end": 3592,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3582,
              "end": 3585,
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
              "start": 3585,
              "end": 3591,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3587,
                "end": 3591,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3587,
                  "end": 3591,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 3496,
        "end": 3499,
        "decorators": [],
        "name": "D29",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 3550,
        "end": 3552,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 3552,
        "end": 3555,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 3553,
            "end": 3554,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3553,
              "end": 3554,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3499,
        "end": 3541,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3500,
            "end": 3511,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3510,
              "end": 3511,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3510,
                "end": 3511,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3500,
              "end": 3501,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3513,
            "end": 3524,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3523,
              "end": 3524,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3523,
                "end": 3524,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3513,
              "end": 3514,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3526,
            "end": 3540,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3536,
              "end": 3540,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3536,
                "end": 3540,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3526,
              "end": 3527,
              "decorators": [],
              "name": "V",
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
