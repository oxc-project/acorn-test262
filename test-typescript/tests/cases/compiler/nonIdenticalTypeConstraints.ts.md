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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "name": "Different",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 32,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "a",
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
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 47,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "b",
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
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 63,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "c",
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
              "start": 53,
              "end": 62,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 55,
                "end": 62
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
      "type": "ClassDeclaration",
      "start": 67,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 110,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 103,
            "end": 108,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "n",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 96,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 95,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 95,
                "name": "Function",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 111,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 144,
                "name": "Different",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 146,
        "end": 159,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 157,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 160,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 173,
        "name": "Qux",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 173,
        "end": 194,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 193,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 184,
              "end": 193,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 193,
                "name": "Different",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 195,
        "end": 208,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 201,
            "end": 206,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 205,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "ClassDeclaration",
      "start": 209,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 218,
        "name": "Qux",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 239,
        "end": 252,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 245,
            "end": 250,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "name": "n",
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
              "start": 246,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 249,
                "typeName": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 249,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 218,
        "end": 238,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 237,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 237,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 237,
                "name": "Function",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 254,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 263,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 284,
        "end": 297,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 290,
            "end": 295,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "name": "n",
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
              "start": 291,
              "end": 294,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 294,
                "typeName": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 263,
        "end": 283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 264,
            "end": 282,
            "name": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 274,
              "end": 282,
              "typeName": {
                "type": "Identifier",
                "start": 274,
                "end": 282,
                "name": "Function",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 298,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 311,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 311,
        "end": 331,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 312,
            "end": 330,
            "name": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 322,
              "end": 330,
              "typeName": {
                "type": "Identifier",
                "start": 322,
                "end": 330,
                "name": "Function",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 332,
        "end": 345,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 338,
            "end": 343,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 346,
      "end": 393,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 359,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 359,
        "end": 379,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 378,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 370,
              "end": 378,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 378,
                "name": "Function",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 380,
        "end": 393,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 386,
            "end": 391,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 386,
              "end": 387,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 390,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 389,
                "end": 390,
                "typeName": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 390,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "ClassDeclaration",
      "start": 394,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 403,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 424,
        "end": 437,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 430,
            "end": 435,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "name": "n",
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
              "start": 431,
              "end": 434,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 433,
                "end": 434,
                "typeName": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 403,
        "end": 423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 404,
            "end": 422,
            "name": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 414,
              "end": 422,
              "typeName": {
                "type": "Identifier",
                "start": 414,
                "end": 422,
                "name": "Function",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 439,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 445,
        "end": 449,
        "name": "Quux",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 453,
        "end": 466,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 459,
            "end": 464,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "name": "n",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 449,
        "end": 452,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 450,
            "end": 451,
            "name": {
              "type": "Identifier",
              "start": 450,
              "end": 451,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 467,
      "end": 498,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 481,
        "name": "Quux",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 481,
        "end": 484,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 482,
            "end": 483,
            "name": {
              "type": "Identifier",
              "start": 482,
              "end": 483,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 485,
        "end": 498,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 491,
            "end": 496,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 492,
              "end": 495,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 494,
                "end": 495,
                "typeName": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
