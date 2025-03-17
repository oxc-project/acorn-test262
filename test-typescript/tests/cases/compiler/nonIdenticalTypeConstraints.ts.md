__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 498,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 65,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 62,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 55,
                "end": 62
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
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "Different",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 103,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 107,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
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
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 95,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 95,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 95,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
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
      "type": "TSInterfaceDeclaration",
      "start": 111,
      "end": 159,
      "body": {
        "type": "TSInterfaceBody",
        "start": 146,
        "end": 159,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 144,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 144,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 144,
                "decorators": [],
                "name": "Different",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
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
      "type": "TSInterfaceDeclaration",
      "start": 160,
      "end": 208,
      "body": {
        "type": "TSInterfaceBody",
        "start": 195,
        "end": 208,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 201,
            "end": 206,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 205,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 173,
        "decorators": [],
        "name": "Qux",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 173,
        "end": 194,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 193,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 193,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 193,
                "decorators": [],
                "name": "Different",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
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
      "start": 209,
      "end": 252,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 239,
        "end": 252,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 245,
            "end": 250,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 249,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
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
        "start": 215,
        "end": 218,
        "decorators": [],
        "name": "Qux",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 218,
        "end": 238,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 237,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 237,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 237,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
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
      "start": 254,
      "end": 297,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 284,
        "end": 297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 290,
            "end": 295,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 294,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 294,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
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
        "start": 260,
        "end": 263,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 263,
        "end": 283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 264,
            "end": 282,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 274,
              "end": 282,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 274,
                "end": 282,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
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
      "type": "TSInterfaceDeclaration",
      "start": 298,
      "end": 345,
      "body": {
        "type": "TSInterfaceBody",
        "start": 332,
        "end": 345,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 338,
            "end": 343,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 342,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 311,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 311,
        "end": 331,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 312,
            "end": 330,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 322,
              "end": 330,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 322,
                "end": 330,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
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
      "type": "TSInterfaceDeclaration",
      "start": 346,
      "end": 393,
      "body": {
        "type": "TSInterfaceBody",
        "start": 380,
        "end": 393,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 386,
            "end": 391,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 390,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 389,
                "end": 390,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 390,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 359,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 359,
        "end": 379,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 378,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 370,
              "end": 378,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 378,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
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
      "start": 394,
      "end": 437,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 424,
        "end": 437,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 430,
            "end": 435,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 434,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 433,
                "end": 434,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
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
        "start": 400,
        "end": 403,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 403,
        "end": 423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 404,
            "end": 422,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 414,
              "end": 422,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 414,
                "end": 422,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
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
      "start": 439,
      "end": 466,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 453,
        "end": 466,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 459,
            "end": 464,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 460,
              "end": 463,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 462,
                "end": 463,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
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
        "start": 445,
        "end": 449,
        "decorators": [],
        "name": "Quux",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 449,
        "end": 452,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 450,
            "end": 451,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
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
      "type": "TSInterfaceDeclaration",
      "start": 467,
      "end": 498,
      "body": {
        "type": "TSInterfaceBody",
        "start": 485,
        "end": 498,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 491,
            "end": 496,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 492,
              "end": 495,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 494,
                "end": 495,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 481,
        "decorators": [],
        "name": "Quux",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 481,
        "end": 484,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 482,
            "end": 483,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
              "decorators": [],
              "name": "U",
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
