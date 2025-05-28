__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 303,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 67,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 67,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 38,
          "decorators": [],
          "name": "IStringIndexSignature",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 39,
          "end": 67,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 45,
              "end": 65,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 49,
                      "end": 55
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 58,
                  "end": 64
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 135,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 75,
        "end": 135,
        "id": {
          "type": "Identifier",
          "start": 85,
          "end": 106,
          "decorators": [],
          "name": "INumberIndexSignature",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 107,
          "end": 135,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 113,
              "end": 133,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 114,
                  "end": 123,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 117,
                      "end": 123
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 124,
                "end": 132,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 126,
                  "end": 132
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 137,
      "end": 224,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 144,
        "end": 224,
        "id": {
          "type": "Identifier",
          "start": 154,
          "end": 173,
          "decorators": [],
          "name": "IBothIndexSignature",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 174,
          "end": 224,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 180,
              "end": 197,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 181,
                  "end": 190,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 190,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 184,
                      "end": 190
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 191,
                "end": 196,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 193,
                  "end": 196
                }
              },
              "readonly": false,
              "static": false,
              "accessibility": null
            },
            {
              "type": "TSIndexSignature",
              "start": 202,
              "end": 222,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 203,
                  "end": 212,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 204,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 206,
                      "end": 212
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 213,
                "end": 221,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 215,
                  "end": 221
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 226,
      "end": 302,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 233,
        "end": 302,
        "id": {
          "type": "Identifier",
          "start": 243,
          "end": 275,
          "decorators": [],
          "name": "IIndexSignatureWithTypeParameter",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 275,
          "end": 278,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 276,
              "end": 277,
              "name": {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 279,
          "end": 302,
          "body": [
            {
              "type": "TSIndexSignature",
              "start": 285,
              "end": 300,
              "parameters": [
                {
                  "type": "Identifier",
                  "start": 286,
                  "end": 295,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 289,
                      "end": 295
                    }
                  }
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 296,
                "end": 299,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 298,
                  "end": 299,
                  "typeName": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 298,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 37,
        "decorators": [],
        "name": "IGlobalStringIndexSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 66,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 44,
            "end": 64,
            "parameters": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 54,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 48,
                    "end": 54
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
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
      "start": 67,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 104,
        "decorators": [],
        "name": "IGlobalNumberIndexSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 133,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 111,
            "end": 131,
            "parameters": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 121,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 113,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 115,
                    "end": 121
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
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
      "start": 135,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 170,
        "decorators": [],
        "name": "IGlobalBothIndexSignature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 171,
        "end": 221,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 177,
            "end": 194,
            "parameters": [
              {
                "type": "Identifier",
                "start": 178,
                "end": 187,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 179,
                  "end": 187,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 181,
                    "end": 187
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 193,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 190,
                "end": 193
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 199,
            "end": 219,
            "parameters": [
              {
                "type": "Identifier",
                "start": 200,
                "end": 209,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 201,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 203,
                    "end": 209
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 212,
                "end": 218
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
      "start": 223,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 271,
        "decorators": [],
        "name": "IGlobalIndexSignatureWithTypeParameter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 271,
        "end": 274,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 272,
            "end": 273,
            "name": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 275,
        "end": 298,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 281,
            "end": 296,
            "parameters": [
              {
                "type": "Identifier",
                "start": 282,
                "end": 291,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 283,
                  "end": 291,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 285,
                    "end": 291
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 295,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
