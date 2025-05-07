__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1824,
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
      "end": 76,
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
        "type": "TSFunctionType",
        "start": 65,
        "end": 75,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 68,
          "end": 75,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 71,
            "end": 75
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 111,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 87,
        "end": 110,
        "abstract": false,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 94,
          "end": 110,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 97,
            "end": 110,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 99,
                "end": 108,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
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
                  "start": 100,
                  "end": 108,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 102,
                    "end": 108
                  }
                }
              }
            ]
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 131,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 122,
        "end": 130,
        "elementType": {
          "type": "TSNumberKeyword",
          "start": 122,
          "end": 128
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 132,
      "end": 159,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 139,
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 142,
        "end": 158,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 143,
            "end": 149
          },
          {
            "type": "TSNumberKeyword",
            "start": 151,
            "end": 157
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 160,
      "end": 205,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 167,
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 170,
        "end": 204,
        "constraint": {
          "type": "TSUnionType",
          "start": 178,
          "end": 193,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 178,
              "end": 181,
              "literal": {
                "type": "Literal",
                "start": 178,
                "end": 181,
                "raw": "'a'",
                "value": "a",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 184,
              "end": 187,
              "literal": {
                "type": "Literal",
                "start": 184,
                "end": 187,
                "raw": "'b'",
                "value": "b",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "TSLiteralType",
              "start": 190,
              "end": 193,
              "literal": {
                "type": "Literal",
                "start": 190,
                "end": 193,
                "raw": "'c'",
                "value": "c",
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 196,
          "end": 202
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 207,
      "end": 244,
      "body": {
        "type": "TSInterfaceBody",
        "start": 231,
        "end": 244,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 233,
            "end": 242,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
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
              "start": 234,
              "end": 242,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 228,
          "end": 230,
          "expression": {
            "type": "Identifier",
            "start": 228,
            "end": 230,
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
        "start": 217,
        "end": 219,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 245,
      "end": 282,
      "body": {
        "type": "TSInterfaceBody",
        "start": 269,
        "end": 282,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 271,
            "end": 280,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
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
              "start": 272,
              "end": 280,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 274,
                "end": 280
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 266,
          "end": 268,
          "expression": {
            "type": "Identifier",
            "start": 266,
            "end": 268,
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
        "start": 255,
        "end": 257,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 283,
      "end": 320,
      "body": {
        "type": "TSInterfaceBody",
        "start": 307,
        "end": 320,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 309,
            "end": 318,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
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
              "start": 310,
              "end": 318,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 312,
                "end": 318
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 304,
          "end": 306,
          "expression": {
            "type": "Identifier",
            "start": 304,
            "end": 306,
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
        "start": 293,
        "end": 295,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 321,
      "end": 358,
      "body": {
        "type": "TSInterfaceBody",
        "start": 345,
        "end": 358,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 347,
            "end": 356,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
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
              "start": 348,
              "end": 356,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 350,
                "end": 356
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 342,
          "end": 344,
          "expression": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
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
        "start": 331,
        "end": 333,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 359,
      "end": 396,
      "body": {
        "type": "TSInterfaceBody",
        "start": 383,
        "end": 396,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 385,
            "end": 394,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
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
              "start": 386,
              "end": 394,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 388,
                "end": 394
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 380,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 380,
            "end": 382,
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
        "start": 369,
        "end": 371,
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 397,
      "end": 434,
      "body": {
        "type": "TSInterfaceBody",
        "start": 421,
        "end": 434,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 423,
            "end": 432,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
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
              "start": 424,
              "end": 432,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 426,
                "end": 432
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 418,
          "end": 420,
          "expression": {
            "type": "Identifier",
            "start": 418,
            "end": 420,
            "decorators": [],
            "name": "T6",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 409,
        "decorators": [],
        "name": "I6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 435,
      "end": 472,
      "body": {
        "type": "TSInterfaceBody",
        "start": 459,
        "end": 472,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 461,
            "end": 470,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
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
              "start": 462,
              "end": 470,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 456,
          "end": 458,
          "expression": {
            "type": "Identifier",
            "start": 456,
            "end": 458,
            "decorators": [],
            "name": "T7",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 445,
        "end": 447,
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 474,
      "end": 508,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 490,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 496,
        "end": 507,
        "abstract": false,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 503,
          "end": 507,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 506,
            "end": 507,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
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
        "start": 490,
        "end": 493,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 491,
            "end": 492,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
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
      "start": 509,
      "end": 559,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 537,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 542,
        "end": 558,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 544,
          "end": 558,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 555,
            "end": 558,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 556,
                "end": 557,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 557,
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
            "start": 544,
            "end": 555,
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 537,
        "end": 540,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 538,
            "end": 539,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
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
      "start": 561,
      "end": 609,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 596,
        "end": 609,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 598,
            "end": 607,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 598,
              "end": 599,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 599,
              "end": 607,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 601,
                "end": 607
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
        "start": 567,
        "end": 569,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 578,
        "end": 595,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 578,
          "end": 589,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 589,
          "end": 593,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 590,
              "end": 592,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 590,
                "end": 592,
                "decorators": [],
                "name": "I1",
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
      "start": 610,
      "end": 658,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 645,
        "end": 658,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 647,
            "end": 656,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 648,
              "end": 656,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 650,
                "end": 656
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
        "start": 616,
        "end": 618,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 627,
        "end": 644,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 627,
          "end": 638,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 638,
          "end": 642,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 639,
              "end": 641,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 639,
                "end": 641,
                "decorators": [],
                "name": "I2",
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
      "start": 659,
      "end": 707,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 694,
        "end": 707,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 696,
            "end": 705,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 697,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 697,
              "end": 705,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 699,
                "end": 705
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
        "start": 665,
        "end": 667,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 676,
        "end": 693,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 676,
          "end": 687,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 687,
          "end": 691,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 688,
              "end": 690,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 688,
                "end": 690,
                "decorators": [],
                "name": "I3",
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
      "start": 708,
      "end": 756,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 743,
        "end": 756,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 745,
            "end": 754,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 746,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 746,
              "end": 754,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 748,
                "end": 754
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
        "start": 714,
        "end": 716,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 725,
        "end": 742,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 725,
          "end": 736,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 736,
          "end": 740,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 737,
              "end": 739,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 737,
                "end": 739,
                "decorators": [],
                "name": "I4",
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
      "start": 757,
      "end": 805,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 792,
        "end": 805,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 794,
            "end": 803,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 795,
              "end": 803,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 797,
                "end": 803
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
        "start": 763,
        "end": 765,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 774,
        "end": 791,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 774,
          "end": 785,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 785,
          "end": 789,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 786,
              "end": 788,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 786,
                "end": 788,
                "decorators": [],
                "name": "I5",
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
      "start": 806,
      "end": 854,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 841,
        "end": 854,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 843,
            "end": 852,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 843,
              "end": 844,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 844,
              "end": 852,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 846,
                "end": 852
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
        "start": 812,
        "end": 814,
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 823,
        "end": 840,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 823,
          "end": 834,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 834,
          "end": 838,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 835,
              "end": 837,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 835,
                "end": 837,
                "decorators": [],
                "name": "I6",
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
      "start": 855,
      "end": 903,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 890,
        "end": 903,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 892,
            "end": 901,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 892,
              "end": 893,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 893,
              "end": 901,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 895,
                "end": 901
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
        "start": 861,
        "end": 863,
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 872,
        "end": 889,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 872,
          "end": 883,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 883,
          "end": 887,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 884,
              "end": 886,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 884,
                "end": 886,
                "decorators": [],
                "name": "I7",
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
      "type": "TSDeclareFunction",
      "start": 905,
      "end": 944,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 924,
        "decorators": [],
        "name": "fx",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 925,
          "end": 934,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 926,
            "end": 934,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 928,
              "end": 934
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 935,
        "end": 943,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 937,
          "end": 943
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 945,
      "end": 975,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 962,
        "end": 975,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 964,
            "end": 973,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 964,
              "end": 965,
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
              "start": 965,
              "end": 973,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 967,
                "end": 973
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
        "start": 959,
        "end": 961,
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
      "start": 976,
      "end": 1003,
      "body": {
        "type": "TSEnumBody",
        "start": 992,
        "end": 1003,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 994,
            "end": 995,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 994,
              "end": 995,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 997,
            "end": 998,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 997,
              "end": 998,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 1000,
            "end": 1001,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1000,
              "end": 1001,
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
        "start": 989,
        "end": 991,
        "decorators": [],
        "name": "EX",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1004,
      "end": 1047,
      "body": {
        "type": "TSModuleBlock",
        "start": 1025,
        "end": 1047,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1027,
            "end": 1045,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1034,
              "end": 1045,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1040,
                  "end": 1045,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1040,
                    "end": 1041,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1044,
                    "end": 1045,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
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
        "start": 1022,
        "end": 1024,
        "decorators": [],
        "name": "NX",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1049,
      "end": 1070,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1054,
        "end": 1057,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 1060,
        "end": 1069,
        "exprName": {
          "type": "Identifier",
          "start": 1067,
          "end": 1069,
          "decorators": [],
          "name": "fx",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1071,
      "end": 1092,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1076,
        "end": 1079,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 1082,
        "end": 1091,
        "exprName": {
          "type": "Identifier",
          "start": 1089,
          "end": 1091,
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
      "start": 1093,
      "end": 1114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1098,
        "end": 1101,
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 1104,
        "end": 1113,
        "exprName": {
          "type": "Identifier",
          "start": 1111,
          "end": 1113,
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
      "start": 1115,
      "end": 1136,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1120,
        "end": 1123,
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 1126,
        "end": 1135,
        "exprName": {
          "type": "Identifier",
          "start": 1133,
          "end": 1135,
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
      "start": 1138,
      "end": 1177,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1164,
        "end": 1177,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1166,
            "end": 1175,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1166,
              "end": 1167,
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
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1160,
          "end": 1163,
          "expression": {
            "type": "Identifier",
            "start": 1160,
            "end": 1163,
            "decorators": [],
            "name": "T10",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1148,
        "end": 1151,
        "decorators": [],
        "name": "I10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1178,
      "end": 1217,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1204,
        "end": 1217,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1206,
            "end": 1215,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1206,
              "end": 1207,
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
              "start": 1207,
              "end": 1215,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1209,
                "end": 1215
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1200,
          "end": 1203,
          "expression": {
            "type": "Identifier",
            "start": 1200,
            "end": 1203,
            "decorators": [],
            "name": "T11",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1188,
        "end": 1191,
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1218,
      "end": 1257,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1244,
        "end": 1257,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1246,
            "end": 1255,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1246,
              "end": 1247,
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
              "start": 1247,
              "end": 1255,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1249,
                "end": 1255
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1240,
          "end": 1243,
          "expression": {
            "type": "Identifier",
            "start": 1240,
            "end": 1243,
            "decorators": [],
            "name": "T12",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1228,
        "end": 1231,
        "decorators": [],
        "name": "I12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1258,
      "end": 1297,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1284,
        "end": 1297,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1286,
            "end": 1295,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1286,
              "end": 1287,
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
              "start": 1287,
              "end": 1295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1289,
                "end": 1295
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1280,
          "end": 1283,
          "expression": {
            "type": "Identifier",
            "start": 1280,
            "end": 1283,
            "decorators": [],
            "name": "T13",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1268,
        "end": 1271,
        "decorators": [],
        "name": "I13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1299,
      "end": 1342,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1304,
        "end": 1316,
        "decorators": [],
        "name": "Identifiable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1322,
        "end": 1341,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1322,
            "end": 1337,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1324,
                "end": 1335,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1324,
                  "end": 1327,
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
                  "start": 1327,
                  "end": 1335,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1329,
                    "end": 1335
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 1340,
            "end": 1341,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1340,
              "end": 1341,
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
        "start": 1316,
        "end": 1319,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1317,
            "end": 1318,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1317,
              "end": 1318,
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
      "start": 1344,
      "end": 1391,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1378,
        "end": 1391,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1380,
            "end": 1389,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1380,
              "end": 1381,
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
              "start": 1381,
              "end": 1389,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1383,
                "end": 1389
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1366,
          "end": 1377,
          "expression": {
            "type": "Identifier",
            "start": 1366,
            "end": 1373,
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1373,
            "end": 1377,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1374,
                "end": 1376,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1374,
                  "end": 1376,
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
        "start": 1354,
        "end": 1357,
        "decorators": [],
        "name": "I20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1392,
      "end": 1440,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1427,
        "end": 1440,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1429,
            "end": 1438,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1429,
              "end": 1430,
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
              "start": 1430,
              "end": 1438,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1432,
                "end": 1438
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1414,
          "end": 1426,
          "expression": {
            "type": "Identifier",
            "start": 1414,
            "end": 1422,
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1422,
            "end": 1426,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1423,
                "end": 1425,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1423,
                  "end": 1425,
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
        "start": 1402,
        "end": 1405,
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1441,
      "end": 1493,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1480,
        "end": 1493,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1482,
            "end": 1491,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1482,
              "end": 1483,
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
              "start": 1483,
              "end": 1491,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1485,
                "end": 1491
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1463,
          "end": 1479,
          "expression": {
            "type": "Identifier",
            "start": 1463,
            "end": 1475,
            "decorators": [],
            "name": "Identifiable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1475,
            "end": 1479,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1476,
                "end": 1478,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1478,
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
        "start": 1451,
        "end": 1454,
        "decorators": [],
        "name": "I22",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1494,
      "end": 1561,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1548,
        "end": 1561,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1550,
            "end": 1559,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1550,
              "end": 1551,
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
              "start": 1551,
              "end": 1559,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1553,
                "end": 1559
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1516,
          "end": 1547,
          "expression": {
            "type": "Identifier",
            "start": 1516,
            "end": 1528,
            "decorators": [],
            "name": "Identifiable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1528,
            "end": 1547,
            "params": [
              {
                "type": "TSIntersectionType",
                "start": 1529,
                "end": 1546,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1529,
                    "end": 1531,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1529,
                      "end": 1531,
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1534,
                    "end": 1546,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1536,
                        "end": 1545,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1536,
                          "end": 1537,
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
                          "start": 1537,
                          "end": 1545,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1539,
                            "end": 1545
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
        "start": 1504,
        "end": 1507,
        "decorators": [],
        "name": "I23",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1563,
      "end": 1621,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1608,
        "end": 1621,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1610,
            "end": 1619,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1610,
              "end": 1611,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1611,
              "end": 1619,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1613,
                "end": 1619
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
        "start": 1569,
        "end": 1572,
        "decorators": [],
        "name": "C20",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 1581,
        "end": 1607,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1581,
          "end": 1592,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1592,
          "end": 1605,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1593,
              "end": 1604,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1600,
                "end": 1604,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1601,
                    "end": 1603,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1601,
                      "end": 1603,
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1593,
                "end": 1600,
                "decorators": [],
                "name": "Partial",
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
      "start": 1622,
      "end": 1681,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1668,
        "end": 1681,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1670,
            "end": 1679,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1670,
              "end": 1671,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1671,
              "end": 1679,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1673,
                "end": 1679
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
        "start": 1628,
        "end": 1631,
        "decorators": [],
        "name": "C21",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 1640,
        "end": 1667,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1640,
          "end": 1651,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1651,
          "end": 1665,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1652,
              "end": 1664,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1660,
                "end": 1664,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1661,
                    "end": 1663,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1661,
                      "end": 1663,
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1652,
                "end": 1660,
                "decorators": [],
                "name": "Readonly",
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
      "start": 1682,
      "end": 1745,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1732,
        "end": 1745,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1734,
            "end": 1743,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1734,
              "end": 1735,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1735,
              "end": 1743,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1737,
                "end": 1743
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
        "start": 1688,
        "end": 1691,
        "decorators": [],
        "name": "C22",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 1700,
        "end": 1731,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1700,
          "end": 1711,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1711,
          "end": 1729,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1712,
              "end": 1728,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1724,
                "end": 1728,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1725,
                    "end": 1727,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1727,
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1712,
                "end": 1724,
                "decorators": [],
                "name": "Identifiable",
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
      "start": 1746,
      "end": 1824,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1811,
        "end": 1824,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1813,
            "end": 1822,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1813,
              "end": 1814,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1814,
              "end": 1822,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1816,
                "end": 1822
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
        "start": 1752,
        "end": 1755,
        "decorators": [],
        "name": "C23",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 1764,
        "end": 1810,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1764,
          "end": 1775,
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1775,
          "end": 1808,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1776,
              "end": 1807,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1788,
                "end": 1807,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 1789,
                    "end": 1806,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1789,
                        "end": 1791,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1789,
                          "end": 1791,
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 1794,
                        "end": 1806,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1796,
                            "end": 1805,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1796,
                              "end": 1797,
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
                              "start": 1797,
                              "end": 1805,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1799,
                                "end": 1805
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1776,
                "end": 1788,
                "decorators": [],
                "name": "Identifiable",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
