__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1523,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 10,
        "end": 23,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 12,
            "end": 21,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
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
      "type": "TSTypeAliasDeclaration",
      "start": 25,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 32,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 35,
        "end": 53,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 35,
            "end": 37,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 62,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 75,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 82,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 103,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 110,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 113,
        "end": 147,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 116,
          "end": 136,
          "name": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "value": "a",
                  "raw": "'a'"
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
                  "value": "b",
                  "raw": "'b'"
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
                  "value": "c",
                  "raw": "'c'"
                }
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 139,
          "end": 145
        },
        "optional": null,
        "readonly": null,
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
                "value": "a",
                "raw": "'a'"
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
                "value": "b",
                "raw": "'b'"
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
                "value": "c",
                "raw": "'c'"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 150,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 162,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 171,
          "end": 173,
          "expression": {
            "type": "Identifier",
            "start": 171,
            "end": 173,
            "name": "T1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 174,
        "end": 187,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 185,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
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
      "start": 188,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 200,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 209,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 209,
            "end": 211,
            "name": "T2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 212,
        "end": 225,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 214,
            "end": 223,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 223,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 217,
                "end": 223
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
      "start": 226,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 238,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 247,
          "end": 249,
          "expression": {
            "type": "Identifier",
            "start": 247,
            "end": 249,
            "name": "T3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 250,
        "end": 268,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 252,
            "end": 266,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 258,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 266,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
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
      "start": 269,
      "end": 306,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 281,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 290,
          "end": 292,
          "expression": {
            "type": "Identifier",
            "start": 290,
            "end": 292,
            "name": "T4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 293,
        "end": 306,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 295,
            "end": 304,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 295,
              "end": 296,
              "value": 0,
              "raw": "0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 304,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 298,
                "end": 304
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
      "start": 307,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 319,
        "name": "I5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 328,
          "end": 330,
          "expression": {
            "type": "Identifier",
            "start": 328,
            "end": 330,
            "name": "T5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 331,
        "end": 344,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 333,
            "end": 342,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 342,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 336,
                "end": 342
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
      "type": "TSTypeAliasDeclaration",
      "start": 346,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 362,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 363,
              "end": 364,
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
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 368,
        "end": 379,
        "abstract": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 375,
          "end": 379,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 378,
            "end": 379,
            "typeName": {
              "type": "Identifier",
              "start": 378,
              "end": 379,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 381,
      "end": 431,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 409,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 409,
        "end": 412,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 410,
            "end": 411,
            "name": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 414,
        "end": 430,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 416,
          "end": 430,
          "typeName": {
            "type": "Identifier",
            "start": 416,
            "end": 427,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 427,
            "end": 430,
            "params": [
              {
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
            ]
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 433,
      "end": 481,
      "id": {
        "type": "Identifier",
        "start": 439,
        "end": 441,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 450,
        "end": 467,
        "callee": {
          "type": "Identifier",
          "start": 450,
          "end": 461,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 464,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 468,
        "end": 481,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 470,
            "end": 479,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
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
              "start": 471,
              "end": 479,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 473,
                "end": 479
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
      "start": 482,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 488,
        "end": 490,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 499,
        "end": 516,
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 510,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 511,
                "end": 513,
                "name": "T2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 517,
        "end": 530,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 519,
            "end": 528,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
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
              "start": 520,
              "end": 528,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
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
      "start": 531,
      "end": 584,
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 539,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 548,
        "end": 565,
        "callee": {
          "type": "Identifier",
          "start": 548,
          "end": 559,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 560,
                "end": 562,
                "name": "T3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 566,
        "end": 584,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 568,
            "end": 582,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 568,
              "end": 574,
              "name": "length",
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
              "start": 574,
              "end": 582,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 576,
                "end": 582
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
      "start": 585,
      "end": 633,
      "id": {
        "type": "Identifier",
        "start": 591,
        "end": 593,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 602,
        "end": 619,
        "callee": {
          "type": "Identifier",
          "start": 602,
          "end": 613,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 614,
                "end": 616,
                "name": "T4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 620,
        "end": 633,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 622,
            "end": 631,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 622,
              "end": 623,
              "value": 0,
              "raw": "0"
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
              "start": 623,
              "end": 631,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 625,
                "end": 631
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
      "start": 634,
      "end": 682,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 642,
        "name": "C5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 651,
        "end": 668,
        "callee": {
          "type": "Identifier",
          "start": 651,
          "end": 662,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 663,
                "end": 665,
                "name": "T5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 669,
        "end": 682,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 671,
            "end": 680,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 672,
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
              "start": 672,
              "end": 680,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 674,
                "end": 680
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
      "start": 684,
      "end": 721,
      "id": {
        "type": "Identifier",
        "start": 698,
        "end": 700,
        "name": "CX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 701,
        "end": 721,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 703,
            "end": 719,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 710,
              "end": 711,
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
              "start": 711,
              "end": 719,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 713,
                "end": 719
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 722,
      "end": 749,
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 737,
        "name": "EX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 740,
          "end": 741,
          "id": {
            "type": "Identifier",
            "start": 740,
            "end": 741,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 743,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 744,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 746,
          "end": 747,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 747,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 738,
        "end": 749,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 740,
            "end": 741,
            "id": {
              "type": "Identifier",
              "start": 740,
              "end": 741,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 743,
            "end": 744,
            "id": {
              "type": "Identifier",
              "start": 743,
              "end": 744,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 746,
            "end": 747,
            "id": {
              "type": "Identifier",
              "start": 746,
              "end": 747,
              "name": "C",
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
      "type": "TSModuleDeclaration",
      "start": 750,
      "end": 799,
      "id": {
        "type": "Identifier",
        "start": 768,
        "end": 770,
        "name": "NX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 771,
        "end": 799,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 773,
            "end": 797,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 780,
              "end": 797,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 786,
                  "end": 797,
                  "id": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 787,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 790,
                    "end": 797,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 801,
      "end": 822,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 809,
        "name": "TCX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 812,
        "end": 821,
        "exprName": {
          "type": "Identifier",
          "start": 819,
          "end": 821,
          "name": "CX",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 823,
      "end": 844,
      "id": {
        "type": "Identifier",
        "start": 828,
        "end": 831,
        "name": "TEX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 834,
        "end": 843,
        "exprName": {
          "type": "Identifier",
          "start": 841,
          "end": 843,
          "name": "EX",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 845,
      "end": 866,
      "id": {
        "type": "Identifier",
        "start": 850,
        "end": 853,
        "name": "TNX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 856,
        "end": 865,
        "exprName": {
          "type": "Identifier",
          "start": 863,
          "end": 865,
          "name": "NX",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 868,
      "end": 907,
      "id": {
        "type": "Identifier",
        "start": 878,
        "end": 881,
        "name": "I10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 890,
          "end": 893,
          "expression": {
            "type": "Identifier",
            "start": 890,
            "end": 893,
            "name": "TCX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 894,
        "end": 907,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 896,
            "end": 905,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 896,
              "end": 897,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 897,
              "end": 905,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 899,
                "end": 905
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
      "start": 908,
      "end": 947,
      "id": {
        "type": "Identifier",
        "start": 918,
        "end": 921,
        "name": "I11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 930,
          "end": 933,
          "expression": {
            "type": "Identifier",
            "start": 930,
            "end": 933,
            "name": "TEX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 934,
        "end": 947,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 936,
            "end": 945,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 936,
              "end": 937,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 937,
              "end": 945,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 939,
                "end": 945
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
      "start": 948,
      "end": 987,
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 961,
        "name": "I12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 970,
          "end": 973,
          "expression": {
            "type": "Identifier",
            "start": 970,
            "end": 973,
            "name": "TNX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 974,
        "end": 987,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 976,
            "end": 985,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 976,
              "end": 977,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 977,
              "end": 985,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 979,
                "end": 985
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
      "start": 988,
      "end": 1037,
      "id": {
        "type": "Identifier",
        "start": 998,
        "end": 1001,
        "name": "I14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1010,
          "end": 1013,
          "expression": {
            "type": "Identifier",
            "start": 1010,
            "end": 1013,
            "name": "TCX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1014,
        "end": 1037,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1016,
            "end": 1035,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1017,
                "end": 1026,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1018,
                  "end": 1026,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1020,
                    "end": 1026
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1027,
              "end": 1035,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1029,
                "end": 1035
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1038,
      "end": 1087,
      "id": {
        "type": "Identifier",
        "start": 1048,
        "end": 1051,
        "name": "I15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1060,
          "end": 1063,
          "expression": {
            "type": "Identifier",
            "start": 1060,
            "end": 1063,
            "name": "TEX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1064,
        "end": 1087,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1066,
            "end": 1085,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1067,
                "end": 1076,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1068,
                  "end": 1076,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1070,
                    "end": 1076
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1077,
              "end": 1085,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1079,
                "end": 1085
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1088,
      "end": 1137,
      "id": {
        "type": "Identifier",
        "start": 1098,
        "end": 1101,
        "name": "I16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1110,
          "end": 1113,
          "expression": {
            "type": "Identifier",
            "start": 1110,
            "end": 1113,
            "name": "TNX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1114,
        "end": 1137,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1116,
            "end": 1135,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1117,
                "end": 1126,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1118,
                  "end": 1126,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1120,
                    "end": 1126
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1127,
              "end": 1135,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1129,
                "end": 1135
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1139,
      "end": 1182,
      "id": {
        "type": "Identifier",
        "start": 1144,
        "end": 1156,
        "name": "Identifiable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1157,
              "end": 1158,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1164,
                  "end": 1167,
                  "name": "_id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1167,
                  "end": 1175,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1169,
                    "end": 1175
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 1180,
            "end": 1181,
            "typeName": {
              "type": "Identifier",
              "start": 1180,
              "end": 1181,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1184,
      "end": 1231,
      "id": {
        "type": "Identifier",
        "start": 1194,
        "end": 1197,
        "name": "I20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1206,
          "end": 1217,
          "expression": {
            "type": "Identifier",
            "start": 1206,
            "end": 1213,
            "name": "Partial",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1214,
                  "end": 1216,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1218,
        "end": 1231,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1220,
            "end": 1229,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1220,
              "end": 1221,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1221,
              "end": 1229,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1223,
                "end": 1229
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
      "start": 1232,
      "end": 1280,
      "id": {
        "type": "Identifier",
        "start": 1242,
        "end": 1245,
        "name": "I21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1254,
          "end": 1266,
          "expression": {
            "type": "Identifier",
            "start": 1254,
            "end": 1262,
            "name": "Readonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1265,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1267,
        "end": 1280,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1269,
            "end": 1278,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1269,
              "end": 1270,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1270,
              "end": 1278,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1272,
                "end": 1278
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
      "start": 1281,
      "end": 1333,
      "id": {
        "type": "Identifier",
        "start": 1291,
        "end": 1294,
        "name": "I22",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1303,
          "end": 1319,
          "expression": {
            "type": "Identifier",
            "start": 1303,
            "end": 1315,
            "name": "Identifiable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1316,
                  "end": 1318,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1320,
        "end": 1333,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1322,
            "end": 1331,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1322,
              "end": 1323,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1323,
              "end": 1331,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1325,
                "end": 1331
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
      "start": 1334,
      "end": 1401,
      "id": {
        "type": "Identifier",
        "start": 1344,
        "end": 1347,
        "name": "I23",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1356,
          "end": 1387,
          "expression": {
            "type": "Identifier",
            "start": 1356,
            "end": 1368,
            "name": "Identifiable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1369,
                      "end": 1371,
                      "name": "T1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1376,
                          "end": 1377,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1377,
                          "end": 1385,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1379,
                            "end": 1385
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1388,
        "end": 1401,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1390,
            "end": 1399,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1390,
              "end": 1391,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1391,
              "end": 1399,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1393,
                "end": 1399
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
      "type": "TSTypeAliasDeclaration",
      "start": 1403,
      "end": 1442,
      "id": {
        "type": "Identifier",
        "start": 1408,
        "end": 1409,
        "name": "U",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1414,
                  "end": 1415,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1415,
                  "end": 1423,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1417,
                    "end": 1423
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1431,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1431,
                  "end": 1439,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1433,
                    "end": 1439
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1444,
      "end": 1481,
      "id": {
        "type": "Identifier",
        "start": 1454,
        "end": 1457,
        "name": "I30",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1466,
          "end": 1467,
          "expression": {
            "type": "Identifier",
            "start": 1466,
            "end": 1467,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1468,
        "end": 1481,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1470,
            "end": 1479,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1470,
              "end": 1471,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1471,
              "end": 1479,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1473,
                "end": 1479
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
      "start": 1482,
      "end": 1522,
      "id": {
        "type": "Identifier",
        "start": 1492,
        "end": 1495,
        "name": "I31",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1507,
          "end": 1508,
          "expression": {
            "type": "Identifier",
            "start": 1507,
            "end": 1508,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1495,
        "end": 1498,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1496,
            "end": 1497,
            "name": {
              "type": "Identifier",
              "start": 1496,
              "end": 1497,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1509,
        "end": 1522,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1511,
            "end": 1520,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1511,
              "end": 1512,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1512,
              "end": 1520,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1514,
                "end": 1520
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
