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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "v0",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 10,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 8,
                "end": 10,
                "typeName": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 10,
                  "name": "T0",
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
      "type": "TSTypeAliasDeclaration",
      "start": 12,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "T0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 31,
              "end": 33,
              "name": "I0",
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
      "start": 35,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "name": "I0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 62,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 54,
            "end": 60,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 59,
                  "name": "T0",
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
      "type": "VariableDeclaration",
      "start": 64,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 74,
                  "name": "T1",
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
      "type": "TSTypeAliasDeclaration",
      "start": 76,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 83,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 97,
              "name": "I1",
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
      "start": 99,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 111,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 112,
        "end": 127,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 118,
            "end": 125,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 124,
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 139,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 139,
                  "name": "T2",
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
      "type": "TSTypeAliasDeclaration",
      "start": 141,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 160,
              "end": 162,
              "name": "I2",
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
      "start": 164,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 196,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 183,
            "end": 194,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 193,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 193,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 193,
                  "name": "T2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 208,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 208,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 206,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "name": "T3",
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
      "type": "TSTypeAliasDeclaration",
      "start": 210,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 217,
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 229,
              "end": 231,
              "name": "I3",
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
      "start": 233,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 245,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 246,
        "end": 270,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 252,
            "end": 268,
            "parameters": [
              {
                "type": "Identifier",
                "start": 253,
                "end": 262,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 254,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 256,
                    "end": 262
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 267,
                  "name": "T3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 272,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 282,
            "name": "v4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 280,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 282,
                  "name": "T4",
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
      "type": "TSTypeAliasDeclaration",
      "start": 284,
      "end": 306,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 291,
        "name": "T4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 303,
              "end": 305,
              "name": "I4",
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
      "start": 307,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 319,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 320,
        "end": 344,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 326,
            "end": 342,
            "parameters": [
              {
                "type": "Identifier",
                "start": 327,
                "end": 336,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 328,
                  "end": 336,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 330,
                    "end": 336
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 341,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 341,
                  "name": "T4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
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
