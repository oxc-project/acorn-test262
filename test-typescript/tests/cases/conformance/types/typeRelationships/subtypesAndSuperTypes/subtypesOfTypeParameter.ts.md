__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 2178,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 92,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "name": "foo",
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
              "start": 86,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
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
        "start": 73,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
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
      "type": "ClassDeclaration",
      "start": 94,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 102,
        "name": "D1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 147,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "foo",
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
              "start": 132,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "U",
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
        "start": 102,
        "end": 108,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 104,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 107,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 119,
        "end": 122,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 120,
            "end": 121,
            "typeName": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 149,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 160,
        "name": "f1",
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
          "start": 167,
          "end": 171,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 168,
            "end": 171,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 170,
              "end": 171,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 173,
          "end": 177,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 177,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 252,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 185,
            "end": 206,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 189,
                "end": 205,
                "id": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 193,
                  "end": 205,
                  "test": {
                    "type": "Literal",
                    "start": 193,
                    "end": 197,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 220,
            "end": 241,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 224,
                "end": 240,
                "id": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 228,
                  "end": 240,
                  "test": {
                    "type": "Literal",
                    "start": 228,
                    "end": 232,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 160,
        "end": 166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 161,
            "end": 162,
            "name": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 165,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 254,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 267,
        "end": 283,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 269,
            "end": 281,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 280,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
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
      "type": "ClassDeclaration",
      "start": 284,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 292,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 293,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 295,
            "end": 307,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 298,
              "name": "foo",
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
              "start": 298,
              "end": 306,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 300,
                "end": 306
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
      "start": 310,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 318,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 322,
        "end": 333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 324,
            "end": 331,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 327,
              "name": "foo",
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
              "start": 327,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 330,
                "typeName": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 330,
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
        "start": 318,
        "end": 321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 320,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
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
      "type": "TSEnumDeclaration",
      "start": 334,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 340,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 343,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 344,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 341,
        "end": 346,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 343,
            "end": 344,
            "id": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "name": "A",
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
      "type": "FunctionDeclaration",
      "start": 347,
      "end": 363,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 357,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 360,
        "end": 363,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 364,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 372,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 373,
        "end": 400,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 379,
            "end": 398,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 386,
              "end": 398,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 390,
                  "end": 397,
                  "id": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 393,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 396,
                    "end": 397,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 401,
      "end": 424,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 408,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 424,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 411,
            "end": 422,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 414,
              "name": "baz",
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
              "start": 414,
              "end": 422,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 416,
                "end": 422
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
      "type": "TSModuleDeclaration",
      "start": 425,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 433,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 434,
        "end": 461,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 440,
            "end": 459,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 447,
              "end": 459,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 451,
                  "end": 458,
                  "id": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 454,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 457,
                    "end": 458,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 484,
      "end": 2178,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 495,
        "name": "f2",
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
          "start": 502,
          "end": 506,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 506,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 505,
              "end": 506,
              "typeName": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 508,
          "end": 512,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 509,
            "end": 512,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 511,
              "end": 512,
              "typeName": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 514,
        "end": 2178,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 520,
            "end": 545,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 524,
                "end": 544,
                "id": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 526,
                  "name": "r0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 529,
                  "end": 544,
                  "test": {
                    "type": "Literal",
                    "start": 529,
                    "end": 533,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 537,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 540,
                    "end": 544,
                    "value": null,
                    "raw": "null"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 550,
            "end": 575,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 554,
                "end": 574,
                "id": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 556,
                  "name": "r0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 559,
                  "end": 574,
                  "test": {
                    "type": "Literal",
                    "start": 559,
                    "end": 563,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 566,
                    "end": 570,
                    "value": null,
                    "raw": "null"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 581,
            "end": 605,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 585,
                "end": 604,
                "id": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 604,
                  "name": "u",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 586,
                    "end": 604,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 588,
                      "end": 604,
                      "exprName": {
                        "type": "Identifier",
                        "start": 595,
                        "end": 604,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 610,
            "end": 633,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 614,
                "end": 632,
                "id": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 617,
                  "name": "r0b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 620,
                  "end": 632,
                  "test": {
                    "type": "Literal",
                    "start": 620,
                    "end": 624,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 631,
                    "end": 632,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 638,
            "end": 661,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 642,
                "end": 660,
                "id": {
                  "type": "Identifier",
                  "start": 642,
                  "end": 645,
                  "name": "r0b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 648,
                  "end": 660,
                  "test": {
                    "type": "Literal",
                    "start": 648,
                    "end": 652,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 655,
                    "end": 656,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 659,
                    "end": 660,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 667,
            "end": 689,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 671,
                "end": 688,
                "id": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 673,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 676,
                  "end": 688,
                  "test": {
                    "type": "Literal",
                    "start": 676,
                    "end": 680,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 683,
                    "end": 684,
                    "value": 1,
                    "raw": "1"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 688,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 695,
            "end": 717,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 699,
                "end": 716,
                "id": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 701,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 704,
                  "end": 716,
                  "test": {
                    "type": "Literal",
                    "start": 704,
                    "end": 708,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 711,
                    "end": 712,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 715,
                    "end": 716,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 723,
            "end": 746,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 727,
                "end": 745,
                "id": {
                  "type": "Identifier",
                  "start": 727,
                  "end": 729,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 732,
                  "end": 745,
                  "test": {
                    "type": "Literal",
                    "start": 732,
                    "end": 736,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 739,
                    "end": 741,
                    "value": "",
                    "raw": "''"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 745,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 751,
            "end": 774,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 755,
                "end": 773,
                "id": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 757,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 760,
                  "end": 773,
                  "test": {
                    "type": "Literal",
                    "start": 760,
                    "end": 764,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 767,
                    "end": 768,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 771,
                    "end": 773,
                    "value": "",
                    "raw": "''"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 780,
            "end": 805,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 784,
                "end": 804,
                "id": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 786,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 789,
                  "end": 804,
                  "test": {
                    "type": "Literal",
                    "start": 789,
                    "end": 793,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 796,
                    "end": 800,
                    "value": true,
                    "raw": "true"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 804,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 810,
            "end": 835,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 814,
                "end": 834,
                "id": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 816,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 819,
                  "end": 834,
                  "test": {
                    "type": "Literal",
                    "start": 819,
                    "end": 823,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 826,
                    "end": 827,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 830,
                    "end": 834,
                    "value": true,
                    "raw": "true"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 841,
            "end": 872,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 845,
                "end": 871,
                "id": {
                  "type": "Identifier",
                  "start": 845,
                  "end": 847,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 850,
                  "end": 871,
                  "test": {
                    "type": "Literal",
                    "start": 850,
                    "end": 854,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 857,
                    "end": 867,
                    "callee": {
                      "type": "Identifier",
                      "start": 861,
                      "end": 865,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 870,
                    "end": 871,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 877,
            "end": 908,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 881,
                "end": 907,
                "id": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 883,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 886,
                  "end": 907,
                  "test": {
                    "type": "Literal",
                    "start": 886,
                    "end": 890,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 894,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 897,
                    "end": 907,
                    "callee": {
                      "type": "Identifier",
                      "start": 901,
                      "end": 905,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 914,
            "end": 938,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 918,
                "end": 937,
                "id": {
                  "type": "Identifier",
                  "start": 918,
                  "end": 920,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 923,
                  "end": 937,
                  "test": {
                    "type": "Literal",
                    "start": 923,
                    "end": 927,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 930,
                    "end": 933,
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "flags": "",
                      "pattern": "1"
                    }
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 936,
                    "end": 937,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 943,
            "end": 967,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 947,
                "end": 966,
                "id": {
                  "type": "Identifier",
                  "start": 947,
                  "end": 949,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 952,
                  "end": 966,
                  "test": {
                    "type": "Literal",
                    "start": 952,
                    "end": 956,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 959,
                    "end": 960,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 963,
                    "end": 966,
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "flags": "",
                      "pattern": "1"
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 973,
            "end": 1004,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 977,
                "end": 1003,
                "id": {
                  "type": "Identifier",
                  "start": 977,
                  "end": 979,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 982,
                  "end": 1003,
                  "test": {
                    "type": "Literal",
                    "start": 982,
                    "end": 986,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 989,
                    "end": 999,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 991,
                        "end": 997,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 991,
                          "end": 994,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 996,
                          "end": 997,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1002,
                    "end": 1003,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1009,
            "end": 1040,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1013,
                "end": 1039,
                "id": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1015,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1018,
                  "end": 1039,
                  "test": {
                    "type": "Literal",
                    "start": 1018,
                    "end": 1022,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1025,
                    "end": 1026,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "start": 1029,
                    "end": 1039,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1031,
                        "end": 1037,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1031,
                          "end": 1034,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1036,
                          "end": 1037,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1046,
            "end": 1076,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1050,
                "end": 1075,
                "id": {
                  "type": "Identifier",
                  "start": 1050,
                  "end": 1052,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1055,
                  "end": 1075,
                  "test": {
                    "type": "Literal",
                    "start": 1055,
                    "end": 1059,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "start": 1062,
                    "end": 1071,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1068,
                      "end": 1071,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1074,
                    "end": 1075,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1081,
            "end": 1111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1085,
                "end": 1110,
                "id": {
                  "type": "Identifier",
                  "start": 1085,
                  "end": 1087,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1090,
                  "end": 1110,
                  "test": {
                    "type": "Literal",
                    "start": 1090,
                    "end": 1094,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1097,
                    "end": 1098,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "start": 1101,
                    "end": 1110,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1107,
                      "end": 1110,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1117,
            "end": 1163,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1121,
                "end": 1162,
                "id": {
                  "type": "Identifier",
                  "start": 1121,
                  "end": 1123,
                  "name": "r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1126,
                  "end": 1162,
                  "test": {
                    "type": "Literal",
                    "start": 1126,
                    "end": 1130,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "start": 1133,
                    "end": 1158,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1137,
                        "end": 1141,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1138,
                          "end": 1141,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1140,
                            "end": 1141,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1140,
                              "end": 1141,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1146,
                      "end": 1158,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1148,
                          "end": 1156,
                          "argument": {
                            "type": "Identifier",
                            "start": 1155,
                            "end": 1156,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1133,
                      "end": 1136,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1134,
                          "end": 1135,
                          "name": {
                            "type": "Identifier",
                            "start": 1134,
                            "end": 1135,
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
                    "returnType": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1161,
                    "end": 1162,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1168,
            "end": 1215,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1172,
                "end": 1214,
                "id": {
                  "type": "Identifier",
                  "start": 1172,
                  "end": 1175,
                  "name": "r8b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1178,
                  "end": 1214,
                  "test": {
                    "type": "Literal",
                    "start": 1178,
                    "end": 1182,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1185,
                    "end": 1186,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "start": 1189,
                    "end": 1214,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1193,
                        "end": 1197,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1194,
                          "end": 1197,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1196,
                            "end": 1197,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1196,
                              "end": 1197,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1202,
                      "end": 1214,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1204,
                          "end": 1212,
                          "argument": {
                            "type": "Identifier",
                            "start": 1211,
                            "end": 1212,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1189,
                      "end": 1192,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1190,
                          "end": 1191,
                          "name": {
                            "type": "Identifier",
                            "start": 1190,
                            "end": 1191,
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
                    "returnType": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1274,
            "end": 1285,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1278,
                "end": 1284,
                "id": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1284,
                  "name": "i1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1280,
                    "end": 1284,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1282,
                      "end": 1284,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1282,
                        "end": 1284,
                        "name": "I1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1290,
            "end": 1313,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1294,
                "end": 1312,
                "id": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1296,
                  "name": "r9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1299,
                  "end": 1312,
                  "test": {
                    "type": "Literal",
                    "start": 1299,
                    "end": 1303,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1306,
                    "end": 1308,
                    "name": "i1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1311,
                    "end": 1312,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1318,
            "end": 1341,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1322,
                "end": 1340,
                "id": {
                  "type": "Identifier",
                  "start": 1322,
                  "end": 1324,
                  "name": "r9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1327,
                  "end": 1340,
                  "test": {
                    "type": "Literal",
                    "start": 1327,
                    "end": 1331,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1334,
                    "end": 1335,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1338,
                    "end": 1340,
                    "name": "i1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1347,
            "end": 1358,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1351,
                "end": 1357,
                "id": {
                  "type": "Identifier",
                  "start": 1351,
                  "end": 1357,
                  "name": "c1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1353,
                    "end": 1357,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1355,
                      "end": 1357,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1355,
                        "end": 1357,
                        "name": "C1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1363,
            "end": 1387,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1367,
                "end": 1386,
                "id": {
                  "type": "Identifier",
                  "start": 1367,
                  "end": 1370,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1373,
                  "end": 1386,
                  "test": {
                    "type": "Literal",
                    "start": 1373,
                    "end": 1377,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1380,
                    "end": 1382,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1385,
                    "end": 1386,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1392,
            "end": 1416,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1396,
                "end": 1415,
                "id": {
                  "type": "Identifier",
                  "start": 1396,
                  "end": 1399,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1402,
                  "end": 1415,
                  "test": {
                    "type": "Literal",
                    "start": 1402,
                    "end": 1406,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1409,
                    "end": 1410,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1413,
                    "end": 1415,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1423,
            "end": 1442,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1427,
                "end": 1441,
                "id": {
                  "type": "Identifier",
                  "start": 1427,
                  "end": 1441,
                  "name": "c2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1429,
                    "end": 1441,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1431,
                      "end": 1441,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1431,
                        "end": 1433,
                        "name": "C2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1433,
                        "end": 1441,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1434,
                            "end": 1440
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1447,
            "end": 1471,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1451,
                "end": 1470,
                "id": {
                  "type": "Identifier",
                  "start": 1451,
                  "end": 1454,
                  "name": "r12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1457,
                  "end": 1470,
                  "test": {
                    "type": "Literal",
                    "start": 1457,
                    "end": 1461,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1464,
                    "end": 1466,
                    "name": "c2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1470,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1476,
            "end": 1500,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1480,
                "end": 1499,
                "id": {
                  "type": "Identifier",
                  "start": 1480,
                  "end": 1483,
                  "name": "r12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1486,
                  "end": 1499,
                  "test": {
                    "type": "Literal",
                    "start": 1486,
                    "end": 1490,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1494,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1497,
                    "end": 1499,
                    "name": "c2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1507,
            "end": 1530,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1511,
                "end": 1529,
                "id": {
                  "type": "Identifier",
                  "start": 1511,
                  "end": 1514,
                  "name": "r13",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1517,
                  "end": 1529,
                  "test": {
                    "type": "Literal",
                    "start": 1517,
                    "end": 1521,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1524,
                    "end": 1525,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1528,
                    "end": 1529,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1535,
            "end": 1558,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1539,
                "end": 1557,
                "id": {
                  "type": "Identifier",
                  "start": 1539,
                  "end": 1542,
                  "name": "r13",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1545,
                  "end": 1557,
                  "test": {
                    "type": "Literal",
                    "start": 1545,
                    "end": 1549,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1552,
                    "end": 1553,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1556,
                    "end": 1557,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1564,
            "end": 1589,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1568,
                "end": 1588,
                "id": {
                  "type": "Identifier",
                  "start": 1568,
                  "end": 1571,
                  "name": "r14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1574,
                  "end": 1588,
                  "test": {
                    "type": "Literal",
                    "start": 1574,
                    "end": 1578,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 1581,
                    "end": 1584,
                    "object": {
                      "type": "Identifier",
                      "start": 1581,
                      "end": 1582,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1583,
                      "end": 1584,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1587,
                    "end": 1588,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1594,
            "end": 1619,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1598,
                "end": 1618,
                "id": {
                  "type": "Identifier",
                  "start": 1598,
                  "end": 1601,
                  "name": "r14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1604,
                  "end": 1618,
                  "test": {
                    "type": "Literal",
                    "start": 1604,
                    "end": 1608,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1611,
                    "end": 1612,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 1615,
                    "end": 1618,
                    "object": {
                      "type": "Identifier",
                      "start": 1615,
                      "end": 1616,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1617,
                      "end": 1618,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1625,
            "end": 1642,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1629,
                "end": 1641,
                "id": {
                  "type": "Identifier",
                  "start": 1629,
                  "end": 1641,
                  "name": "af",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1631,
                    "end": 1641,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1633,
                      "end": 1641,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1640,
                        "end": 1641,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1647,
            "end": 1671,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1651,
                "end": 1670,
                "id": {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1654,
                  "name": "r15",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1657,
                  "end": 1670,
                  "test": {
                    "type": "Literal",
                    "start": 1657,
                    "end": 1661,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1664,
                    "end": 1666,
                    "name": "af",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1669,
                    "end": 1670,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1676,
            "end": 1700,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1680,
                "end": 1699,
                "id": {
                  "type": "Identifier",
                  "start": 1680,
                  "end": 1683,
                  "name": "r15",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1686,
                  "end": 1699,
                  "test": {
                    "type": "Literal",
                    "start": 1686,
                    "end": 1690,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1693,
                    "end": 1694,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1697,
                    "end": 1699,
                    "name": "af",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1706,
            "end": 1723,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1710,
                "end": 1722,
                "id": {
                  "type": "Identifier",
                  "start": 1710,
                  "end": 1722,
                  "name": "ac",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1712,
                    "end": 1722,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1714,
                      "end": 1722,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1721,
                        "end": 1722,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1728,
            "end": 1752,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1732,
                "end": 1751,
                "id": {
                  "type": "Identifier",
                  "start": 1732,
                  "end": 1735,
                  "name": "r16",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1738,
                  "end": 1751,
                  "test": {
                    "type": "Literal",
                    "start": 1738,
                    "end": 1742,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1745,
                    "end": 1747,
                    "name": "ac",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1750,
                    "end": 1751,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1757,
            "end": 1781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1761,
                "end": 1780,
                "id": {
                  "type": "Identifier",
                  "start": 1761,
                  "end": 1764,
                  "name": "r16",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1767,
                  "end": 1780,
                  "test": {
                    "type": "Literal",
                    "start": 1767,
                    "end": 1771,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1774,
                    "end": 1775,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1778,
                    "end": 1780,
                    "name": "ac",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1787,
            "end": 1880,
            "id": {
              "type": "Identifier",
              "start": 1796,
              "end": 1799,
              "name": "f17",
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
                "start": 1803,
                "end": 1807,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1804,
                  "end": 1807,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1806,
                    "end": 1807,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1806,
                      "end": 1807,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 1809,
              "end": 1880,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1819,
                  "end": 1842,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1823,
                      "end": 1841,
                      "id": {
                        "type": "Identifier",
                        "start": 1823,
                        "end": 1826,
                        "name": "r17",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1829,
                        "end": 1841,
                        "test": {
                          "type": "Literal",
                          "start": 1829,
                          "end": 1833,
                          "value": true,
                          "raw": "true"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1837,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 1840,
                          "end": 1841,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1851,
                  "end": 1874,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1855,
                      "end": 1873,
                      "id": {
                        "type": "Identifier",
                        "start": 1855,
                        "end": 1858,
                        "name": "r17",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1861,
                        "end": 1873,
                        "test": {
                          "type": "Literal",
                          "start": 1861,
                          "end": 1865,
                          "value": true,
                          "raw": "true"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 1868,
                          "end": 1869,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 1872,
                          "end": 1873,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1799,
              "end": 1802,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1800,
                  "end": 1801,
                  "name": {
                    "type": "Identifier",
                    "start": 1800,
                    "end": 1801,
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
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 1886,
            "end": 1992,
            "id": {
              "type": "Identifier",
              "start": 1895,
              "end": 1898,
              "name": "f18",
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
                "start": 1915,
                "end": 1919,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1916,
                  "end": 1919,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1918,
                    "end": 1919,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1918,
                      "end": 1919,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 1921,
              "end": 1992,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1931,
                  "end": 1954,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1935,
                      "end": 1953,
                      "id": {
                        "type": "Identifier",
                        "start": 1935,
                        "end": 1938,
                        "name": "r18",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1941,
                        "end": 1953,
                        "test": {
                          "type": "Literal",
                          "start": 1941,
                          "end": 1945,
                          "value": true,
                          "raw": "true"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 1948,
                          "end": 1949,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 1952,
                          "end": 1953,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1963,
                  "end": 1986,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1967,
                      "end": 1985,
                      "id": {
                        "type": "Identifier",
                        "start": 1967,
                        "end": 1970,
                        "name": "r18",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 1973,
                        "end": 1985,
                        "test": {
                          "type": "Literal",
                          "start": 1973,
                          "end": 1977,
                          "value": true,
                          "raw": "true"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 1980,
                          "end": 1981,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 1984,
                          "end": 1985,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1898,
              "end": 1914,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1899,
                  "end": 1900,
                  "name": {
                    "type": "Identifier",
                    "start": 1899,
                    "end": 1900,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1902,
                  "end": 1913,
                  "name": {
                    "type": "Identifier",
                    "start": 1902,
                    "end": 1903,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1912,
                    "end": 1913,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1912,
                      "end": 1913,
                      "name": "T",
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
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1998,
            "end": 2032,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2002,
                "end": 2031,
                "id": {
                  "type": "Identifier",
                  "start": 2002,
                  "end": 2005,
                  "name": "r19",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2008,
                  "end": 2031,
                  "test": {
                    "type": "Literal",
                    "start": 2008,
                    "end": 2012,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 2015,
                    "end": 2027,
                    "callee": {
                      "type": "Identifier",
                      "start": 2019,
                      "end": 2025,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2030,
                    "end": 2031,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2054,
            "end": 2088,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2058,
                "end": 2087,
                "id": {
                  "type": "Identifier",
                  "start": 2058,
                  "end": 2061,
                  "name": "r19",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2064,
                  "end": 2087,
                  "test": {
                    "type": "Literal",
                    "start": 2064,
                    "end": 2068,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2071,
                    "end": 2072,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 2075,
                    "end": 2087,
                    "callee": {
                      "type": "Identifier",
                      "start": 2079,
                      "end": 2085,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2111,
            "end": 2135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2115,
                "end": 2134,
                "id": {
                  "type": "Identifier",
                  "start": 2115,
                  "end": 2118,
                  "name": "r20",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2121,
                  "end": 2134,
                  "test": {
                    "type": "Literal",
                    "start": 2121,
                    "end": 2125,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 2128,
                    "end": 2130,
                    "properties": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2133,
                    "end": 2134,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2146,
            "end": 2170,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2150,
                "end": 2169,
                "id": {
                  "type": "Identifier",
                  "start": 2150,
                  "end": 2153,
                  "name": "r20",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2156,
                  "end": 2169,
                  "test": {
                    "type": "Literal",
                    "start": 2156,
                    "end": 2160,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2163,
                    "end": 2164,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "start": 2167,
                    "end": 2169,
                    "properties": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 495,
        "end": 501,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 496,
            "end": 497,
            "name": {
              "type": "Identifier",
              "start": 496,
              "end": 497,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 499,
            "end": 500,
            "name": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
