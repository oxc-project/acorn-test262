__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IStringIndexSignature",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 38
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 49,
                      "end": 55
                    },
                    "start": 47,
                    "end": 55
                  },
                  "start": 46,
                  "end": 55
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 58,
                  "end": 64
                },
                "start": 56,
                "end": 64
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 45,
              "end": 65
            }
          ],
          "start": 39,
          "end": 67
        },
        "declare": false,
        "start": 7,
        "end": 67
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 67
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "INumberIndexSignature",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 106
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 117,
                      "end": 123
                    },
                    "start": 115,
                    "end": 123
                  },
                  "start": 114,
                  "end": 123
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 126,
                  "end": 132
                },
                "start": 124,
                "end": 132
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 113,
              "end": 133
            }
          ],
          "start": 107,
          "end": 135
        },
        "declare": false,
        "start": 75,
        "end": 135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 68,
      "end": 135
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IBothIndexSignature",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 173
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 184,
                      "end": 190
                    },
                    "start": 182,
                    "end": 190
                  },
                  "start": 181,
                  "end": 190
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 193,
                  "end": 196
                },
                "start": 191,
                "end": 196
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 180,
              "end": 197
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 206,
                      "end": 212
                    },
                    "start": 204,
                    "end": 212
                  },
                  "start": 203,
                  "end": 212
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 215,
                  "end": 221
                },
                "start": 213,
                "end": 221
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 202,
              "end": 222
            }
          ],
          "start": 174,
          "end": 224
        },
        "declare": false,
        "start": 144,
        "end": 224
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 137,
      "end": 224
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IIndexSignatureWithTypeParameter",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 275
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 277
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 276,
              "end": 277
            }
          ],
          "start": 275,
          "end": 278
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 289,
                      "end": 295
                    },
                    "start": 287,
                    "end": 295
                  },
                  "start": 286,
                  "end": 295
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 299
                  },
                  "typeArguments": null,
                  "start": 298,
                  "end": 299
                },
                "start": 296,
                "end": 299
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 285,
              "end": 300
            }
          ],
          "start": 279,
          "end": 302
        },
        "declare": false,
        "start": 233,
        "end": 302
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 226,
      "end": 302
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 303
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalStringIndexSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 37
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 48,
                    "end": 54
                  },
                  "start": 46,
                  "end": 54
                },
                "start": 45,
                "end": 54
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              },
              "start": 55,
              "end": 63
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 44,
            "end": 64
          }
        ],
        "start": 38,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalNumberIndexSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 104
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 115,
                    "end": 121
                  },
                  "start": 113,
                  "end": 121
                },
                "start": 112,
                "end": 121
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 111,
            "end": 131
          }
        ],
        "start": 105,
        "end": 133
      },
      "declare": false,
      "start": 67,
      "end": 133
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalBothIndexSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 170
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 181,
                    "end": 187
                  },
                  "start": 179,
                  "end": 187
                },
                "start": 178,
                "end": 187
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 190,
                "end": 193
              },
              "start": 188,
              "end": 193
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 177,
            "end": 194
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 203,
                    "end": 209
                  },
                  "start": 201,
                  "end": 209
                },
                "start": 200,
                "end": 209
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 212,
                "end": 218
              },
              "start": 210,
              "end": 218
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 199,
            "end": 219
          }
        ],
        "start": 171,
        "end": 221
      },
      "declare": false,
      "start": 135,
      "end": 221
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IGlobalIndexSignatureWithTypeParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 271
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 272,
            "end": 273
          }
        ],
        "start": 271,
        "end": 274
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 285,
                    "end": 291
                  },
                  "start": 283,
                  "end": 291
                },
                "start": 282,
                "end": 291
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 295
                },
                "typeArguments": null,
                "start": 294,
                "end": 295
              },
              "start": 292,
              "end": 295
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 281,
            "end": 296
          }
        ],
        "start": 275,
        "end": 298
      },
      "declare": false,
      "start": 223,
      "end": 298
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 298
}
```
