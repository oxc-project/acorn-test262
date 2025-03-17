__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1825,
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
      "end": 76,
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
        "type": "TSFunctionType",
        "start": 65,
        "end": 75,
        "typeParameters": null,
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 87,
        "end": 110,
        "abstract": false,
        "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 100,
                  "end": 108,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 102,
                    "end": 108
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "name": "T5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 132,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 139,
        "name": "T6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 160,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 167,
        "name": "T7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 170,
        "end": 204,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 173,
          "end": 193,
          "name": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "value": "a",
                  "raw": "'a'"
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
                  "value": "b",
                  "raw": "'b'"
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
          "start": 196,
          "end": 202
        },
        "optional": null,
        "readonly": null,
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
                "value": "a",
                "raw": "'a'"
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
                "value": "b",
                "raw": "'b'"
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
                "value": "c",
                "raw": "'c'"
              }
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
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
      "start": 207,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 219,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 228,
          "end": 230,
          "expression": {
            "type": "Identifier",
            "start": 228,
            "end": 230,
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
        "start": 231,
        "end": 244,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 233,
            "end": 242,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 242,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
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
      "start": 245,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 257,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 266,
          "end": 268,
          "expression": {
            "type": "Identifier",
            "start": 266,
            "end": 268,
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
        "start": 269,
        "end": 282,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 271,
            "end": 280,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 280,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 274,
                "end": 280
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
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 295,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 304,
          "end": 306,
          "expression": {
            "type": "Identifier",
            "start": 304,
            "end": 306,
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
        "start": 307,
        "end": 320,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 309,
            "end": 318,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 318,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 312,
                "end": 318
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
      "start": 321,
      "end": 358,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 333,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 342,
          "end": 344,
          "expression": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
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
        "start": 345,
        "end": 358,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 347,
            "end": 356,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 356,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 350,
                "end": 356
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
      "start": 359,
      "end": 396,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 371,
        "name": "I5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 380,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 380,
            "end": 382,
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
        "start": 383,
        "end": 396,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 385,
            "end": 394,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 386,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 386,
              "end": 394,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 388,
                "end": 394
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
      "start": 397,
      "end": 434,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 409,
        "name": "I6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 418,
          "end": 420,
          "expression": {
            "type": "Identifier",
            "start": 418,
            "end": 420,
            "name": "T6",
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
        "start": 421,
        "end": 434,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 423,
            "end": 432,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 424,
              "end": 432,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 426,
                "end": 432
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
      "start": 435,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 445,
        "end": 447,
        "name": "I7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 456,
          "end": 458,
          "expression": {
            "type": "Identifier",
            "start": 456,
            "end": 458,
            "name": "T7",
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
        "start": 459,
        "end": 472,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 461,
            "end": 470,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 470,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
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
      "start": 474,
      "end": 508,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 490,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
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
        "start": 496,
        "end": 507,
        "abstract": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 503,
          "end": 507,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 506,
            "end": 507,
            "typeName": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
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
      "start": 509,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 537,
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
        "start": 537,
        "end": 540,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 538,
            "end": 539,
            "name": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
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
        "start": 542,
        "end": 558,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 544,
          "end": 558,
          "typeName": {
            "type": "Identifier",
            "start": 544,
            "end": 555,
            "name": "Constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 555,
            "end": 558,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 556,
                "end": 557,
                "typeName": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 557,
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
      "start": 561,
      "end": 609,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 569,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 578,
        "end": 595,
        "callee": {
          "type": "Identifier",
          "start": 578,
          "end": 589,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 590,
                "end": 592,
                "name": "I1",
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
        "start": 596,
        "end": 609,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 598,
            "end": 607,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 598,
              "end": 599,
              "name": "x",
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
              "start": 599,
              "end": 607,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 601,
                "end": 607
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
      "start": 610,
      "end": 658,
      "id": {
        "type": "Identifier",
        "start": 616,
        "end": 618,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 627,
        "end": 644,
        "callee": {
          "type": "Identifier",
          "start": 627,
          "end": 638,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 639,
                "end": 641,
                "name": "I2",
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
        "start": 645,
        "end": 658,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 647,
            "end": 656,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "name": "x",
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
              "start": 648,
              "end": 656,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 650,
                "end": 656
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
      "start": 659,
      "end": 707,
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 667,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 676,
        "end": 693,
        "callee": {
          "type": "Identifier",
          "start": 676,
          "end": 687,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 688,
                "end": 690,
                "name": "I3",
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
        "start": 694,
        "end": 707,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 696,
            "end": 705,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 697,
              "name": "x",
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
              "start": 697,
              "end": 705,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 699,
                "end": 705
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
      "start": 708,
      "end": 756,
      "id": {
        "type": "Identifier",
        "start": 714,
        "end": 716,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 725,
        "end": 742,
        "callee": {
          "type": "Identifier",
          "start": 725,
          "end": 736,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 737,
                "end": 739,
                "name": "I4",
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
        "start": 743,
        "end": 756,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 745,
            "end": 754,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 746,
              "name": "x",
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
              "start": 746,
              "end": 754,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 748,
                "end": 754
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
      "start": 757,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 763,
        "end": 765,
        "name": "C5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 774,
        "end": 791,
        "callee": {
          "type": "Identifier",
          "start": 774,
          "end": 785,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 786,
                "end": 788,
                "name": "I5",
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
        "start": 792,
        "end": 805,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 794,
            "end": 803,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "name": "x",
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
              "start": 795,
              "end": 803,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 797,
                "end": 803
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
      "start": 806,
      "end": 854,
      "id": {
        "type": "Identifier",
        "start": 812,
        "end": 814,
        "name": "C6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 823,
        "end": 840,
        "callee": {
          "type": "Identifier",
          "start": 823,
          "end": 834,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 835,
                "end": 837,
                "name": "I6",
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
        "start": 841,
        "end": 854,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 843,
            "end": 852,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 843,
              "end": 844,
              "name": "x",
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
              "start": 844,
              "end": 852,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 846,
                "end": 852
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
      "start": 855,
      "end": 903,
      "id": {
        "type": "Identifier",
        "start": 861,
        "end": 863,
        "name": "C7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 872,
        "end": 889,
        "callee": {
          "type": "Identifier",
          "start": 872,
          "end": 883,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 884,
                "end": 886,
                "name": "I7",
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
        "start": 890,
        "end": 903,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 892,
            "end": 901,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 892,
              "end": 893,
              "name": "x",
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
              "start": 893,
              "end": 901,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 895,
                "end": 901
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
      "type": "TSDeclareFunction",
      "start": 905,
      "end": 944,
      "id": {
        "type": "Identifier",
        "start": 922,
        "end": 924,
        "name": "fx",
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
          "start": 925,
          "end": 934,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 926,
            "end": 934,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 928,
              "end": 934
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 935,
        "end": 943,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 937,
          "end": 943
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 945,
      "end": 975,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 961,
        "name": "CX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 962,
        "end": 975,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 964,
            "end": 973,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 964,
              "end": 965,
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
              "start": 965,
              "end": 973,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 967,
                "end": 973
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
      "start": 976,
      "end": 1003,
      "id": {
        "type": "Identifier",
        "start": 989,
        "end": 991,
        "name": "EX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 994,
          "end": 995,
          "id": {
            "type": "Identifier",
            "start": 994,
            "end": 995,
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
          "start": 997,
          "end": 998,
          "id": {
            "type": "Identifier",
            "start": 997,
            "end": 998,
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
          "start": 1000,
          "end": 1001,
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1001,
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
        "start": 992,
        "end": 1003,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 994,
            "end": 995,
            "id": {
              "type": "Identifier",
              "start": 994,
              "end": 995,
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
            "start": 997,
            "end": 998,
            "id": {
              "type": "Identifier",
              "start": 997,
              "end": 998,
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
            "start": 1000,
            "end": 1001,
            "id": {
              "type": "Identifier",
              "start": 1000,
              "end": 1001,
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
      "start": 1004,
      "end": 1047,
      "id": {
        "type": "Identifier",
        "start": 1022,
        "end": 1024,
        "name": "NX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1025,
        "end": 1047,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1027,
            "end": 1045,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1034,
              "end": 1045,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1040,
                  "end": 1045,
                  "id": {
                    "type": "Identifier",
                    "start": 1040,
                    "end": 1041,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1044,
                    "end": 1045,
                    "value": 1,
                    "raw": "1"
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
      "start": 1049,
      "end": 1070,
      "id": {
        "type": "Identifier",
        "start": 1054,
        "end": 1057,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 1060,
        "end": 1069,
        "exprName": {
          "type": "Identifier",
          "start": 1067,
          "end": 1069,
          "name": "fx",
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
      "start": 1071,
      "end": 1092,
      "id": {
        "type": "Identifier",
        "start": 1076,
        "end": 1079,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 1082,
        "end": 1091,
        "exprName": {
          "type": "Identifier",
          "start": 1089,
          "end": 1091,
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
      "start": 1093,
      "end": 1114,
      "id": {
        "type": "Identifier",
        "start": 1098,
        "end": 1101,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 1104,
        "end": 1113,
        "exprName": {
          "type": "Identifier",
          "start": 1111,
          "end": 1113,
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
      "start": 1115,
      "end": 1136,
      "id": {
        "type": "Identifier",
        "start": 1120,
        "end": 1123,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 1126,
        "end": 1135,
        "exprName": {
          "type": "Identifier",
          "start": 1133,
          "end": 1135,
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
      "start": 1138,
      "end": 1177,
      "id": {
        "type": "Identifier",
        "start": 1148,
        "end": 1151,
        "name": "I10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1160,
          "end": 1163,
          "expression": {
            "type": "Identifier",
            "start": 1160,
            "end": 1163,
            "name": "T10",
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
        "start": 1164,
        "end": 1177,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1166,
            "end": 1175,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1166,
              "end": 1167,
              "name": "x",
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1178,
      "end": 1217,
      "id": {
        "type": "Identifier",
        "start": 1188,
        "end": 1191,
        "name": "I11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1200,
          "end": 1203,
          "expression": {
            "type": "Identifier",
            "start": 1200,
            "end": 1203,
            "name": "T11",
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
        "start": 1204,
        "end": 1217,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1206,
            "end": 1215,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1206,
              "end": 1207,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1207,
              "end": 1215,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1209,
                "end": 1215
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
      "start": 1218,
      "end": 1257,
      "id": {
        "type": "Identifier",
        "start": 1228,
        "end": 1231,
        "name": "I12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1240,
          "end": 1243,
          "expression": {
            "type": "Identifier",
            "start": 1240,
            "end": 1243,
            "name": "T12",
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
        "start": 1244,
        "end": 1257,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1246,
            "end": 1255,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1246,
              "end": 1247,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1247,
              "end": 1255,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1249,
                "end": 1255
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
      "start": 1258,
      "end": 1297,
      "id": {
        "type": "Identifier",
        "start": 1268,
        "end": 1271,
        "name": "I13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1280,
          "end": 1283,
          "expression": {
            "type": "Identifier",
            "start": 1280,
            "end": 1283,
            "name": "T13",
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
        "start": 1284,
        "end": 1297,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1286,
            "end": 1295,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1286,
              "end": 1287,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1287,
              "end": 1295,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1289,
                "end": 1295
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
      "start": 1299,
      "end": 1342,
      "id": {
        "type": "Identifier",
        "start": 1304,
        "end": 1316,
        "name": "Identifiable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1317,
              "end": 1318,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1324,
                  "end": 1327,
                  "name": "_id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1327,
                  "end": 1335,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1329,
                    "end": 1335
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 1340,
            "end": 1341,
            "typeName": {
              "type": "Identifier",
              "start": 1340,
              "end": 1341,
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
      "start": 1344,
      "end": 1391,
      "id": {
        "type": "Identifier",
        "start": 1354,
        "end": 1357,
        "name": "I20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1366,
          "end": 1377,
          "expression": {
            "type": "Identifier",
            "start": 1366,
            "end": 1373,
            "name": "Partial",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1374,
                  "end": 1376,
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
        "start": 1378,
        "end": 1391,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1380,
            "end": 1389,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1380,
              "end": 1381,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1381,
              "end": 1389,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1383,
                "end": 1389
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
      "start": 1392,
      "end": 1440,
      "id": {
        "type": "Identifier",
        "start": 1402,
        "end": 1405,
        "name": "I21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1414,
          "end": 1426,
          "expression": {
            "type": "Identifier",
            "start": 1414,
            "end": 1422,
            "name": "Readonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1423,
                  "end": 1425,
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
        "start": 1427,
        "end": 1440,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1429,
            "end": 1438,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1429,
              "end": 1430,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1430,
              "end": 1438,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1432,
                "end": 1438
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
      "start": 1441,
      "end": 1493,
      "id": {
        "type": "Identifier",
        "start": 1451,
        "end": 1454,
        "name": "I22",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1463,
          "end": 1479,
          "expression": {
            "type": "Identifier",
            "start": 1463,
            "end": 1475,
            "name": "Identifiable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1478,
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
        "start": 1480,
        "end": 1493,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1482,
            "end": 1491,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1482,
              "end": 1483,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1483,
              "end": 1491,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1485,
                "end": 1491
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
      "start": 1494,
      "end": 1561,
      "id": {
        "type": "Identifier",
        "start": 1504,
        "end": 1507,
        "name": "I23",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1516,
          "end": 1547,
          "expression": {
            "type": "Identifier",
            "start": 1516,
            "end": 1528,
            "name": "Identifiable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 1529,
                      "end": 1531,
                      "name": "T1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1536,
                          "end": 1537,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1537,
                          "end": 1545,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1539,
                            "end": 1545
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
        "start": 1548,
        "end": 1561,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1550,
            "end": 1559,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1550,
              "end": 1551,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1551,
              "end": 1559,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1553,
                "end": 1559
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
      "start": 1563,
      "end": 1621,
      "id": {
        "type": "Identifier",
        "start": 1569,
        "end": 1572,
        "name": "C20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 1581,
        "end": 1607,
        "callee": {
          "type": "Identifier",
          "start": 1581,
          "end": 1592,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 1593,
                "end": 1600,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1600,
                "end": 1604,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1601,
                    "end": 1603,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1601,
                      "end": 1603,
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
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 1608,
        "end": 1621,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1610,
            "end": 1619,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1610,
              "end": 1611,
              "name": "x",
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
              "start": 1611,
              "end": 1619,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1613,
                "end": 1619
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
      "start": 1622,
      "end": 1681,
      "id": {
        "type": "Identifier",
        "start": 1628,
        "end": 1631,
        "name": "C21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 1640,
        "end": 1667,
        "callee": {
          "type": "Identifier",
          "start": 1640,
          "end": 1651,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 1652,
                "end": 1660,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1660,
                "end": 1664,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1661,
                    "end": 1663,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1661,
                      "end": 1663,
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
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 1668,
        "end": 1681,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1670,
            "end": 1679,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1670,
              "end": 1671,
              "name": "x",
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
              "start": 1671,
              "end": 1679,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1673,
                "end": 1679
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
      "start": 1682,
      "end": 1745,
      "id": {
        "type": "Identifier",
        "start": 1688,
        "end": 1691,
        "name": "C22",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 1700,
        "end": 1731,
        "callee": {
          "type": "Identifier",
          "start": 1700,
          "end": 1711,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 1712,
                "end": 1724,
                "name": "Identifiable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1724,
                "end": 1728,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1725,
                    "end": 1727,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1727,
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
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 1732,
        "end": 1745,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1734,
            "end": 1743,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1734,
              "end": 1735,
              "name": "x",
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
              "start": 1735,
              "end": 1743,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1737,
                "end": 1743
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
      "start": 1746,
      "end": 1824,
      "id": {
        "type": "Identifier",
        "start": 1752,
        "end": 1755,
        "name": "C23",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 1764,
        "end": 1810,
        "callee": {
          "type": "Identifier",
          "start": 1764,
          "end": 1775,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 1776,
                "end": 1788,
                "name": "Identifiable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 1789,
                          "end": 1791,
                          "name": "T1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1796,
                              "end": 1797,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1797,
                              "end": 1805,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1799,
                                "end": 1805
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
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 1811,
        "end": 1824,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1813,
            "end": 1822,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1813,
              "end": 1814,
              "name": "x",
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
              "start": 1814,
              "end": 1822,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1816,
                "end": 1822
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
