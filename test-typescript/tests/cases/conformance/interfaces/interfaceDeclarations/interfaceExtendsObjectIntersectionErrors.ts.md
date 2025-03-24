__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1522,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 24,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10,
        "end": 23,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 12,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 25,
      "end": 54,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 32,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 35,
        "end": 53,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 35,
            "end": 37,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 40,
            "end": 53,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 42,
                "end": 51,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 62,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 65,
        "end": 73,
        "elementType": {
          "type": "TSNumberKeyword",
          "start": 65,
          "end": 71
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 75,
      "end": 102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 85,
        "end": 101,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 86,
            "end": 92
          },
          {
            "type": "TSNumberKeyword",
            "start": 94,
            "end": 100
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 103,
      "end": 148,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 110,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 113,
        "end": 147,
        "constraint": {
          "type": "TSUnionType",
          "start": 121,
          "end": 136,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 121,
              "end": 124,
              "literal": {
                "type": "Literal",
                "start": 121,
                "end": 124,
                "raw": "'a'",
                "value": "a"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 127,
              "end": 130,
              "literal": {
                "type": "Literal",
                "start": 127,
                "end": 130,
                "raw": "'b'",
                "value": "b"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 133,
              "end": 136,
              "literal": {
                "type": "Literal",
                "start": 133,
                "end": 136,
                "raw": "'c'",
                "value": "c"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 139,
          "end": 145
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 150,
      "end": 187,
      "body": {
        "type": "TSInterfaceBody",
        "start": 174,
        "end": 187,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 185,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 171,
          "end": 173,
          "expression": {
            "type": "Identifier",
            "start": 171,
            "end": 173,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 162,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 188,
      "end": 225,
      "body": {
        "type": "TSInterfaceBody",
        "start": 212,
        "end": 225,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 214,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 223,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 217,
                "end": 223
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 209,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 209,
            "end": 211,
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 200,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 226,
      "end": 268,
      "body": {
        "type": "TSInterfaceBody",
        "start": 250,
        "end": 268,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 252,
            "end": 266,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 258,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 266,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 247,
          "end": 249,
          "expression": {
            "type": "Identifier",
            "start": 247,
            "end": 249,
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 238,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 269,
      "end": 306,
      "body": {
        "type": "TSInterfaceBody",
        "start": 293,
        "end": 306,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 295,
            "end": 304,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 295,
              "end": 296,
              "raw": "0",
              "value": 0
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 304,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 298,
                "end": 304
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 290,
          "end": 292,
          "expression": {
            "type": "Identifier",
            "start": 290,
            "end": 292,
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 281,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 307,
      "end": 344,
      "body": {
        "type": "TSInterfaceBody",
        "start": 331,
        "end": 344,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 333,
            "end": 342,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 342,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 336,
                "end": 342
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 328,
          "end": 330,
          "expression": {
            "type": "Identifier",
            "start": 328,
            "end": 330,
            "decorators": [],
            "name": "T5",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 319,
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 346,
      "end": 380,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 362,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 368,
        "end": 379,
        "abstract": false,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 375,
          "end": 379,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 378,
            "end": 379,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 362,
        "end": 365,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 363,
            "end": 364,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 363,
              "end": 364,
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
      "type": "TSDeclareFunction",
      "start": 381,
      "end": 431,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 409,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 414,
        "end": 430,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 416,
          "end": 430,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 427,
            "end": 430,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 428,
                "end": 429,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 429,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 416,
            "end": 427,
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 409,
        "end": 412,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 410,
            "end": 411,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
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
      "start": 433,
      "end": 481,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 468,
        "end": 481,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 470,
            "end": 479,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
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
              "start": 471,
              "end": 479,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 473,
                "end": 479
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
        "start": 439,
        "end": 441,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 450,
        "end": 467,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 450,
          "end": 461,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 461,
          "end": 465,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 462,
              "end": 464,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 464,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 482,
      "end": 530,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 517,
        "end": 530,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 519,
            "end": 528,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
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
              "start": 520,
              "end": 528,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
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
        "start": 488,
        "end": 490,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 499,
        "end": 516,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 510,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 510,
          "end": 514,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 511,
              "end": 513,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 511,
                "end": 513,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 531,
      "end": 584,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 566,
        "end": 584,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 568,
            "end": 582,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 568,
              "end": 574,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 582,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 576,
                "end": 582
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
        "start": 537,
        "end": 539,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 548,
        "end": 565,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 548,
          "end": 559,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 559,
          "end": 563,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 560,
              "end": 562,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 560,
                "end": 562,
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 585,
      "end": 633,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 620,
        "end": 633,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 622,
            "end": 631,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 622,
              "end": 623,
              "raw": "0",
              "value": 0
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 631,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 625,
                "end": 631
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
        "start": 591,
        "end": 593,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 602,
        "end": 619,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 602,
          "end": 613,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 613,
          "end": 617,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 614,
              "end": 616,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 614,
                "end": 616,
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 634,
      "end": 682,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 669,
        "end": 682,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 671,
            "end": 680,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 672,
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
              "start": 672,
              "end": 680,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 674,
                "end": 680
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
        "start": 640,
        "end": 642,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 651,
        "end": 668,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 651,
          "end": 662,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 662,
          "end": 666,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 663,
              "end": 665,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 663,
                "end": 665,
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 684,
      "end": 721,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 701,
        "end": 721,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 703,
            "end": 719,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 710,
              "end": 711,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 711,
              "end": 719,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 713,
                "end": 719
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 698,
        "end": 700,
        "decorators": [],
        "name": "CX",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 722,
      "end": 749,
      "body": {
        "type": "TSEnumBody",
        "start": 738,
        "end": 749,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 740,
            "end": 741,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 740,
              "end": 741,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 743,
            "end": 744,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 743,
              "end": 744,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 746,
            "end": 747,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 746,
              "end": 747,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 737,
        "decorators": [],
        "name": "EX",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 750,
      "end": 799,
      "body": {
        "type": "TSModuleBlock",
        "start": 771,
        "end": 799,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 773,
            "end": 797,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 780,
              "end": 797,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 786,
                  "end": 797,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 787,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 790,
                    "end": 797,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 768,
        "end": 770,
        "decorators": [],
        "name": "NX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 801,
      "end": 822,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 809,
        "decorators": [],
        "name": "TCX",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 812,
        "end": 821,
        "exprName": {
          "type": "Identifier",
          "start": 819,
          "end": 821,
          "decorators": [],
          "name": "CX",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 823,
      "end": 844,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 828,
        "end": 831,
        "decorators": [],
        "name": "TEX",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 834,
        "end": 843,
        "exprName": {
          "type": "Identifier",
          "start": 841,
          "end": 843,
          "decorators": [],
          "name": "EX",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 845,
      "end": 866,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 850,
        "end": 853,
        "decorators": [],
        "name": "TNX",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 856,
        "end": 865,
        "exprName": {
          "type": "Identifier",
          "start": 863,
          "end": 865,
          "decorators": [],
          "name": "NX",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 868,
      "end": 907,
      "body": {
        "type": "TSInterfaceBody",
        "start": 894,
        "end": 907,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 896,
            "end": 905,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 896,
              "end": 897,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 897,
              "end": 905,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 899,
                "end": 905
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 890,
          "end": 893,
          "expression": {
            "type": "Identifier",
            "start": 890,
            "end": 893,
            "decorators": [],
            "name": "TCX",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 878,
        "end": 881,
        "decorators": [],
        "name": "I10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 908,
      "end": 947,
      "body": {
        "type": "TSInterfaceBody",
        "start": 934,
        "end": 947,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 936,
            "end": 945,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 936,
              "end": 937,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 937,
              "end": 945,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 939,
                "end": 945
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 930,
          "end": 933,
          "expression": {
            "type": "Identifier",
            "start": 930,
            "end": 933,
            "decorators": [],
            "name": "TEX",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 918,
        "end": 921,
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 948,
      "end": 987,
      "body": {
        "type": "TSInterfaceBody",
        "start": 974,
        "end": 987,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 976,
            "end": 985,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 976,
              "end": 977,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 977,
              "end": 985,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 979,
                "end": 985
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 970,
          "end": 973,
          "expression": {
            "type": "Identifier",
            "start": 970,
            "end": 973,
            "decorators": [],
            "name": "TNX",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 961,
        "decorators": [],
        "name": "I12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 988,
      "end": 1037,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1014,
        "end": 1037,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1016,
            "end": 1035,
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
              "end": 1035,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1029,
                "end": 1035
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1010,
          "end": 1013,
          "expression": {
            "type": "Identifier",
            "start": 1010,
            "end": 1013,
            "decorators": [],
            "name": "TCX",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 998,
        "end": 1001,
        "decorators": [],
        "name": "I14",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1038,
      "end": 1087,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1064,
        "end": 1087,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1066,
            "end": 1085,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1067,
                "end": 1076,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1068,
                  "end": 1076,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1070,
                    "end": 1076
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1077,
              "end": 1085,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1079,
                "end": 1085
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1060,
          "end": 1063,
          "expression": {
            "type": "Identifier",
            "start": 1060,
            "end": 1063,
            "decorators": [],
            "name": "TEX",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1048,
        "end": 1051,
        "decorators": [],
        "name": "I15",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1088,
      "end": 1137,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1114,
        "end": 1137,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1116,
            "end": 1135,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1117,
                "end": 1126,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1118,
                  "end": 1126,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1120,
                    "end": 1126
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1127,
              "end": 1135,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1129,
                "end": 1135
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1110,
          "end": 1113,
          "expression": {
            "type": "Identifier",
            "start": 1110,
            "end": 1113,
            "decorators": [],
            "name": "TNX",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1098,
        "end": 1101,
        "decorators": [],
        "name": "I16",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1139,
      "end": 1182,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1144,
        "end": 1156,
        "decorators": [],
        "name": "Identifiable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1162,
        "end": 1181,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1162,
            "end": 1177,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1164,
                "end": 1175,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1167,
                  "decorators": [],
                  "name": "_id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1167,
                  "end": 1175,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1169,
                    "end": 1175
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 1180,
            "end": 1181,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1180,
              "end": 1181,
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
        "start": 1156,
        "end": 1159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1157,
            "end": 1158,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1157,
              "end": 1158,
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
      "start": 1184,
      "end": 1231,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1218,
        "end": 1231,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1220,
            "end": 1229,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1220,
              "end": 1221,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1221,
              "end": 1229,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1223,
                "end": 1229
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1206,
          "end": 1217,
          "expression": {
            "type": "Identifier",
            "start": 1206,
            "end": 1213,
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1213,
            "end": 1217,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1214,
                "end": 1216,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1214,
                  "end": 1216,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1194,
        "end": 1197,
        "decorators": [],
        "name": "I20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1232,
      "end": 1280,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1267,
        "end": 1280,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1269,
            "end": 1278,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1269,
              "end": 1270,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1270,
              "end": 1278,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1272,
                "end": 1278
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1254,
          "end": 1266,
          "expression": {
            "type": "Identifier",
            "start": 1254,
            "end": 1262,
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1262,
            "end": 1266,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1263,
                "end": 1265,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1265,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1242,
        "end": 1245,
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1281,
      "end": 1333,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1320,
        "end": 1333,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1322,
            "end": 1331,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1323,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1323,
              "end": 1331,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1325,
                "end": 1331
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1303,
          "end": 1319,
          "expression": {
            "type": "Identifier",
            "start": 1303,
            "end": 1315,
            "decorators": [],
            "name": "Identifiable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1315,
            "end": 1319,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1316,
                "end": 1318,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1318,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1291,
        "end": 1294,
        "decorators": [],
        "name": "I22",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1334,
      "end": 1401,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1388,
        "end": 1401,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1390,
            "end": 1399,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1390,
              "end": 1391,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1391,
              "end": 1399,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1393,
                "end": 1399
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1356,
          "end": 1387,
          "expression": {
            "type": "Identifier",
            "start": 1356,
            "end": 1368,
            "decorators": [],
            "name": "Identifiable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1368,
            "end": 1387,
            "params": [
              {
                "type": "TSIntersectionType",
                "start": 1369,
                "end": 1386,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1369,
                    "end": 1371,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1369,
                      "end": 1371,
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1374,
                    "end": 1386,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1376,
                        "end": 1385,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1376,
                          "end": 1377,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1377,
                          "end": 1385,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1379,
                            "end": 1385
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1344,
        "end": 1347,
        "decorators": [],
        "name": "I23",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1403,
      "end": 1442,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1408,
        "end": 1409,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1412,
        "end": 1441,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1412,
            "end": 1425,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1414,
                "end": 1423,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1414,
                  "end": 1415,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1415,
                  "end": 1423,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1417,
                    "end": 1423
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1428,
            "end": 1441,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1430,
                "end": 1439,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1431,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1431,
                  "end": 1439,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1433,
                    "end": 1439
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1444,
      "end": 1481,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1468,
        "end": 1481,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1470,
            "end": 1479,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1470,
              "end": 1471,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1471,
              "end": 1479,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1473,
                "end": 1479
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1466,
          "end": 1467,
          "expression": {
            "type": "Identifier",
            "start": 1466,
            "end": 1467,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1454,
        "end": 1457,
        "decorators": [],
        "name": "I30",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1482,
      "end": 1522,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1509,
        "end": 1522,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1511,
            "end": 1520,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1511,
              "end": 1512,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1512,
              "end": 1520,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1514,
                "end": 1520
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1507,
          "end": 1508,
          "expression": {
            "type": "Identifier",
            "start": 1507,
            "end": 1508,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1492,
        "end": 1495,
        "decorators": [],
        "name": "I31",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1495,
        "end": 1498,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1496,
            "end": 1497,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1496,
              "end": 1497,
              "decorators": [],
              "name": "T",
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
