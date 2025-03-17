__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 345,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "v0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 10,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 8,
                "end": 10,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 10,
                  "decorators": [],
                  "name": "T0",
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
      "type": "TSTypeAliasDeclaration",
      "start": 12,
      "end": 34,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 22,
        "end": 33,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 22,
            "end": 28
          },
          {
            "type": "TSTypeReference",
            "start": 31,
            "end": 33,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 31,
              "end": 33,
              "decorators": [],
              "name": "I0",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 62,
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 62,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 54,
            "end": 60,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
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
              "start": 55,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 59,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 59,
                  "decorators": [],
                  "name": "T0",
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
        "start": 45,
        "end": 47,
        "decorators": [],
        "name": "I0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 74,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 74,
                  "decorators": [],
                  "name": "T1",
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
      "type": "TSTypeAliasDeclaration",
      "start": 76,
      "end": 98,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 83,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 86,
        "end": 97,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 86,
            "end": 92
          },
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 97,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 97,
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 99,
      "end": 127,
      "body": {
        "type": "TSInterfaceBody",
        "start": 112,
        "end": 127,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 118,
            "end": 125,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 124,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 124,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 111,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 139,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 139,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 139,
                  "decorators": [],
                  "name": "T2",
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
      "type": "TSTypeAliasDeclaration",
      "start": 141,
      "end": 163,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 151,
        "end": 162,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 151,
            "end": 157
          },
          {
            "type": "TSTypeReference",
            "start": 160,
            "end": 162,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 160,
              "end": 162,
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 164,
      "end": 196,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 196,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 183,
            "end": 194,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 193,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 193,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 193,
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 208,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 208,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "decorators": [],
                  "name": "T3",
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
      "type": "TSTypeAliasDeclaration",
      "start": 210,
      "end": 232,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 220,
        "end": 231,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 220,
            "end": 226
          },
          {
            "type": "TSTypeReference",
            "start": 229,
            "end": 231,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 229,
              "end": 231,
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 233,
      "end": 270,
      "body": {
        "type": "TSInterfaceBody",
        "start": 246,
        "end": 270,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 252,
            "end": 268,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 253,
                "end": 262,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 254,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 256,
                    "end": 262
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 267,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 267,
                  "decorators": [],
                  "name": "T3",
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
        "start": 243,
        "end": 245,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 282,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 282,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 282,
                  "decorators": [],
                  "name": "T4",
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
      "type": "TSTypeAliasDeclaration",
      "start": 284,
      "end": 306,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 291,
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 294,
        "end": 305,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 294,
            "end": 300
          },
          {
            "type": "TSTypeReference",
            "start": 303,
            "end": 305,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 303,
              "end": 305,
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 307,
      "end": 344,
      "body": {
        "type": "TSInterfaceBody",
        "start": 320,
        "end": 344,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 326,
            "end": 342,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 327,
                "end": 336,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 328,
                  "end": 336,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 330,
                    "end": 336
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 341,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 341,
                  "decorators": [],
                  "name": "T4",
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
        "start": 317,
        "end": 319,
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
