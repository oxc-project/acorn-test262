__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 47,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 47,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "decorators": [],
          "name": "RootConfig",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 27,
          "end": 30,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 28,
              "end": 29,
              "name": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
          "start": 31,
          "end": 47,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 37,
              "end": 45,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 37,
                "end": 41,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
  "end": 314,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 36,
          "decorators": [],
          "name": "ErrorFormatterShape",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 36,
          "end": 42,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 37,
              "end": 41,
              "name": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 39,
                "end": 41,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 43,
          "end": 59,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 49,
              "end": 57,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 49,
                "end": 53,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 53,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 191,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 67,
        "end": 191,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 88,
          "decorators": [],
          "name": "PickFirstDefined",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 88,
          "end": 102,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 89,
              "end": 94,
              "name": {
                "type": "Identifier",
                "start": 89,
                "end": 94,
                "decorators": [],
                "name": "TType",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 96,
              "end": 101,
              "name": {
                "type": "Identifier",
                "start": 96,
                "end": 101,
                "decorators": [],
                "name": "TPick",
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
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 105,
          "end": 190,
          "checkType": {
            "type": "TSUndefinedKeyword",
            "start": 105,
            "end": 114
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 123,
            "end": 128,
            "typeName": {
              "type": "Identifier",
              "start": 123,
              "end": 128,
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSConditionalType",
            "start": 133,
            "end": 180,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 133,
              "end": 142
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 156,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 156,
                "decorators": [],
                "name": "TPick",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 163,
              "end": 168
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 180,
                "decorators": [],
                "name": "TPick",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 185,
            "end": 190,
            "typeName": {
              "type": "Identifier",
              "start": 185,
              "end": 190,
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
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
      "start": 192,
      "end": 256,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 199,
        "end": 256,
        "id": {
          "type": "Identifier",
          "start": 209,
          "end": 223,
          "decorators": [],
          "name": "ErrorFormatter",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 223,
          "end": 234,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 224,
              "end": 228,
              "name": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 226,
                "end": 228,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 229,
              "end": 233,
              "name": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 231,
                "end": 233,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 235,
          "end": 256,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 241,
              "end": 254,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 241,
                "end": 245,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 245,
                "end": 253,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 247,
                  "end": 253,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 249,
                      "typeName": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 249,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 251,
                      "end": 252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 252,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
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
      "start": 257,
      "end": 314,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 264,
        "end": 314,
        "id": {
          "type": "Identifier",
          "start": 274,
          "end": 291,
          "decorators": [],
          "name": "DefaultErrorShape",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 291,
          "end": 297,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 292,
              "end": 296,
              "name": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 294,
                "end": 296,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 298,
          "end": 314,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 304,
              "end": 312,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 304,
                "end": 308,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 308,
                "end": 311,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 310,
                  "end": 311,
                  "typeName": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 311,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
  "end": 136,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 68,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 68,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 35,
          "decorators": [],
          "name": "MiddlewareFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 35,
          "end": 46,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 36,
              "end": 40,
              "name": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 38,
                "end": 40,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 41,
              "end": 45,
              "name": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 43,
                "end": 45,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 47,
          "end": 68,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 53,
              "end": 66,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 53,
                "end": 57,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 57,
                "end": 65,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 59,
                  "end": 65,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 60,
                      "end": 61,
                      "typeName": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 63,
                      "end": 64,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
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
      "start": 69,
      "end": 136,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 76,
        "end": 136,
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 103,
          "decorators": [],
          "name": "MiddlewareBuilder",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 103,
          "end": 114,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 104,
              "end": 108,
              "name": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 106,
                "end": 108,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 109,
              "end": 113,
              "name": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 111,
                "end": 113,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 115,
          "end": 136,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 121,
              "end": 134,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 125,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 125,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 127,
                  "end": 133,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 131,
                      "end": 132,
                      "typeName": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
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
  "end": 1043,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "RootConfig",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "RootConfig",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 47,
        "value": "./internals/config",
        "raw": "'./internals/config'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 158,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 58,
          "end": 77,
          "imported": {
            "type": "Identifier",
            "start": 58,
            "end": 77,
            "decorators": [],
            "name": "ErrorFormatterShape",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 77,
            "decorators": [],
            "name": "ErrorFormatterShape",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 79,
          "end": 95,
          "imported": {
            "type": "Identifier",
            "start": 79,
            "end": 95,
            "decorators": [],
            "name": "PickFirstDefined",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 79,
            "end": 95,
            "decorators": [],
            "name": "PickFirstDefined",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 97,
          "end": 111,
          "imported": {
            "type": "Identifier",
            "start": 97,
            "end": 111,
            "decorators": [],
            "name": "ErrorFormatter",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 97,
            "end": 111,
            "decorators": [],
            "name": "ErrorFormatter",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 113,
          "end": 130,
          "imported": {
            "type": "Identifier",
            "start": 113,
            "end": 130,
            "decorators": [],
            "name": "DefaultErrorShape",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 113,
            "end": 130,
            "decorators": [],
            "name": "DefaultErrorShape",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 138,
        "end": 157,
        "value": "./internals/utils",
        "raw": "'./internals/utils'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 978,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 184,
        "decorators": [],
        "name": "TRPCBuilder",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 192,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 192,
              "decorators": [],
              "name": "TParams",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 194,
        "end": 978,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 200,
            "end": 976,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 206,
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 206,
              "end": 976,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 206,
                "end": 244,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 207,
                    "end": 243,
                    "name": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 215,
                      "decorators": [],
                      "name": "TOptions",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 224,
                      "end": 243,
                      "typeName": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 230,
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 230,
                        "end": 243,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 231,
                            "end": 237
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 239,
                            "end": 242
                          }
                        ]
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 246,
                "end": 975,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 248,
                  "end": 975,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 258,
                      "end": 272,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 267,
                        "decorators": [],
                        "name": "procedure",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 267,
                        "end": 271,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 269,
                          "end": 271,
                          "members": []
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 281,
                      "end": 949,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 291,
                        "decorators": [],
                        "name": "middleware",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 291,
                        "end": 948,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 293,
                          "end": 948,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 293,
                            "end": 333,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 294,
                                "end": 332,
                                "name": {
                                  "type": "Identifier",
                                  "start": 294,
                                  "end": 304,
                                  "decorators": [],
                                  "name": "TNewParams",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "start": 313,
                                  "end": 332,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 313,
                                    "end": 319,
                                    "decorators": [],
                                    "name": "Record",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 319,
                                    "end": 332,
                                    "params": [
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 320,
                                        "end": 326
                                      },
                                      {
                                        "type": "TSAnyKeyword",
                                        "start": 328,
                                        "end": 331
                                      }
                                    ]
                                  }
                                },
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            ]
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 334,
                              "end": 641,
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 336,
                                "end": 641,
                                "typeAnnotation": {
                                  "type": "TSImportType",
                                  "start": 338,
                                  "end": 641,
                                  "argument": {
                                    "type": "TSLiteralType",
                                    "start": 345,
                                    "end": 359,
                                    "literal": {
                                      "type": "Literal",
                                      "start": 345,
                                      "end": 359,
                                      "value": "./middleware",
                                      "raw": "\"./middleware\""
                                    }
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "start": 361,
                                    "end": 379,
                                    "decorators": [],
                                    "name": "MiddlewareFunction",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 379,
                                    "end": 641,
                                    "params": [
                                      {
                                        "type": "TSTypeLiteral",
                                        "start": 380,
                                        "end": 628,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 394,
                                            "end": 618,
                                            "computed": false,
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 394,
                                              "end": 401,
                                              "decorators": [],
                                              "name": "_config",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 401,
                                              "end": 617,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 403,
                                                "end": 617,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 403,
                                                  "end": 413,
                                                  "decorators": [],
                                                  "name": "RootConfig",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "start": 413,
                                                  "end": 617,
                                                  "params": [
                                                    {
                                                      "type": "TSTypeLiteral",
                                                      "start": 414,
                                                      "end": 616,
                                                      "members": [
                                                        {
                                                          "type": "TSPropertySignature",
                                                          "start": 432,
                                                          "end": 602,
                                                          "computed": false,
                                                          "optional": false,
                                                          "readonly": false,
                                                          "key": {
                                                            "type": "Identifier",
                                                            "start": 432,
                                                            "end": 442,
                                                            "decorators": [],
                                                            "name": "errorShape",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "start": 442,
                                                            "end": 601,
                                                            "typeAnnotation": {
                                                              "type": "TSTypeReference",
                                                              "start": 444,
                                                              "end": 601,
                                                              "typeName": {
                                                                "type": "Identifier",
                                                                "start": 444,
                                                                "end": 463,
                                                                "decorators": [],
                                                                "name": "ErrorFormatterShape",
                                                                "optional": false,
                                                                "typeAnnotation": null
                                                              },
                                                              "typeArguments": {
                                                                "type": "TSTypeParameterInstantiation",
                                                                "start": 463,
                                                                "end": 601,
                                                                "params": [
                                                                  {
                                                                    "type": "TSTypeReference",
                                                                    "start": 464,
                                                                    "end": 600,
                                                                    "typeName": {
                                                                      "type": "Identifier",
                                                                      "start": 464,
                                                                      "end": 480,
                                                                      "decorators": [],
                                                                      "name": "PickFirstDefined",
                                                                      "optional": false,
                                                                      "typeAnnotation": null
                                                                    },
                                                                    "typeArguments": {
                                                                      "type": "TSTypeParameterInstantiation",
                                                                      "start": 480,
                                                                      "end": 600,
                                                                      "params": [
                                                                        {
                                                                          "type": "TSIndexedAccessType",
                                                                          "start": 481,
                                                                          "end": 507,
                                                                          "objectType": {
                                                                            "type": "TSTypeReference",
                                                                            "start": 481,
                                                                            "end": 489,
                                                                            "typeName": {
                                                                              "type": "Identifier",
                                                                              "start": 481,
                                                                              "end": 489,
                                                                              "decorators": [],
                                                                              "name": "TOptions",
                                                                              "optional": false,
                                                                              "typeAnnotation": null
                                                                            },
                                                                            "typeArguments": null
                                                                          },
                                                                          "indexType": {
                                                                            "type": "TSLiteralType",
                                                                            "start": 490,
                                                                            "end": 506,
                                                                            "literal": {
                                                                              "type": "Literal",
                                                                              "start": 490,
                                                                              "end": 506,
                                                                              "value": "errorFormatter",
                                                                              "raw": "\"errorFormatter\""
                                                                            }
                                                                          }
                                                                        },
                                                                        {
                                                                          "type": "TSTypeReference",
                                                                          "start": 509,
                                                                          "end": 599,
                                                                          "typeName": {
                                                                            "type": "Identifier",
                                                                            "start": 509,
                                                                            "end": 523,
                                                                            "decorators": [],
                                                                            "name": "ErrorFormatter",
                                                                            "optional": false,
                                                                            "typeAnnotation": null
                                                                          },
                                                                          "typeArguments": {
                                                                            "type": "TSTypeParameterInstantiation",
                                                                            "start": 523,
                                                                            "end": 599,
                                                                            "params": [
                                                                              {
                                                                                "type": "TSConditionalType",
                                                                                "start": 524,
                                                                                "end": 579,
                                                                                "checkType": {
                                                                                  "type": "TSIndexedAccessType",
                                                                                  "start": 524,
                                                                                  "end": 538,
                                                                                  "objectType": {
                                                                                    "type": "TSTypeReference",
                                                                                    "start": 524,
                                                                                    "end": 531,
                                                                                    "typeName": {
                                                                                      "type": "Identifier",
                                                                                      "start": 524,
                                                                                      "end": 531,
                                                                                      "decorators": [],
                                                                                      "name": "TParams",
                                                                                      "optional": false,
                                                                                      "typeAnnotation": null
                                                                                    },
                                                                                    "typeArguments": null
                                                                                  },
                                                                                  "indexType": {
                                                                                    "type": "TSLiteralType",
                                                                                    "start": 532,
                                                                                    "end": 537,
                                                                                    "literal": {
                                                                                      "type": "Literal",
                                                                                      "start": 532,
                                                                                      "end": 537,
                                                                                      "value": "ctx",
                                                                                      "raw": "\"ctx\""
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "extendsType": {
                                                                                  "type": "TSObjectKeyword",
                                                                                  "start": 547,
                                                                                  "end": 553
                                                                                },
                                                                                "trueType": {
                                                                                  "type": "TSIndexedAccessType",
                                                                                  "start": 556,
                                                                                  "end": 570,
                                                                                  "objectType": {
                                                                                    "type": "TSTypeReference",
                                                                                    "start": 556,
                                                                                    "end": 563,
                                                                                    "typeName": {
                                                                                      "type": "Identifier",
                                                                                      "start": 556,
                                                                                      "end": 563,
                                                                                      "decorators": [],
                                                                                      "name": "TParams",
                                                                                      "optional": false,
                                                                                      "typeAnnotation": null
                                                                                    },
                                                                                    "typeArguments": null
                                                                                  },
                                                                                  "indexType": {
                                                                                    "type": "TSLiteralType",
                                                                                    "start": 564,
                                                                                    "end": 569,
                                                                                    "literal": {
                                                                                      "type": "Literal",
                                                                                      "start": 564,
                                                                                      "end": 569,
                                                                                      "value": "ctx",
                                                                                      "raw": "\"ctx\""
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "falseType": {
                                                                                  "type": "TSObjectKeyword",
                                                                                  "start": 573,
                                                                                  "end": 579
                                                                                }
                                                                              },
                                                                              {
                                                                                "type": "TSTypeReference",
                                                                                "start": 581,
                                                                                "end": 598,
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "start": 581,
                                                                                  "end": 598,
                                                                                  "decorators": [],
                                                                                  "name": "DefaultErrorShape",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null
                                                                                },
                                                                                "typeArguments": null
                                                                              }
                                                                            ]
                                                                          }
                                                                        }
                                                                      ]
                                                                    }
                                                                  }
                                                                ]
                                                              }
                                                            }
                                                          },
                                                          "accessibility": null,
                                                          "static": false
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              }
                                            },
                                            "accessibility": null,
                                            "static": false
                                          }
                                        ]
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 630,
                                        "end": 640,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 630,
                                          "end": 640,
                                          "decorators": [],
                                          "name": "TNewParams",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 643,
                            "end": 948,
                            "typeAnnotation": {
                              "type": "TSImportType",
                              "start": 646,
                              "end": 948,
                              "argument": {
                                "type": "TSLiteralType",
                                "start": 653,
                                "end": 667,
                                "literal": {
                                  "type": "Literal",
                                  "start": 653,
                                  "end": 667,
                                  "value": "./middleware",
                                  "raw": "\"./middleware\""
                                }
                              },
                              "options": null,
                              "qualifier": {
                                "type": "Identifier",
                                "start": 669,
                                "end": 686,
                                "decorators": [],
                                "name": "MiddlewareBuilder",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 686,
                                "end": 948,
                                "params": [
                                  {
                                    "type": "TSTypeLiteral",
                                    "start": 687,
                                    "end": 935,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 701,
                                        "end": 925,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 701,
                                          "end": 708,
                                          "decorators": [],
                                          "name": "_config",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 708,
                                          "end": 924,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 710,
                                            "end": 924,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 710,
                                              "end": 720,
                                              "decorators": [],
                                              "name": "RootConfig",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "start": 720,
                                              "end": 924,
                                              "params": [
                                                {
                                                  "type": "TSTypeLiteral",
                                                  "start": 721,
                                                  "end": 923,
                                                  "members": [
                                                    {
                                                      "type": "TSPropertySignature",
                                                      "start": 739,
                                                      "end": 909,
                                                      "computed": false,
                                                      "optional": false,
                                                      "readonly": false,
                                                      "key": {
                                                        "type": "Identifier",
                                                        "start": 739,
                                                        "end": 749,
                                                        "decorators": [],
                                                        "name": "errorShape",
                                                        "optional": false,
                                                        "typeAnnotation": null
                                                      },
                                                      "typeAnnotation": {
                                                        "type": "TSTypeAnnotation",
                                                        "start": 749,
                                                        "end": 908,
                                                        "typeAnnotation": {
                                                          "type": "TSTypeReference",
                                                          "start": 751,
                                                          "end": 908,
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "start": 751,
                                                            "end": 770,
                                                            "decorators": [],
                                                            "name": "ErrorFormatterShape",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "typeArguments": {
                                                            "type": "TSTypeParameterInstantiation",
                                                            "start": 770,
                                                            "end": 908,
                                                            "params": [
                                                              {
                                                                "type": "TSTypeReference",
                                                                "start": 771,
                                                                "end": 907,
                                                                "typeName": {
                                                                  "type": "Identifier",
                                                                  "start": 771,
                                                                  "end": 787,
                                                                  "decorators": [],
                                                                  "name": "PickFirstDefined",
                                                                  "optional": false,
                                                                  "typeAnnotation": null
                                                                },
                                                                "typeArguments": {
                                                                  "type": "TSTypeParameterInstantiation",
                                                                  "start": 787,
                                                                  "end": 907,
                                                                  "params": [
                                                                    {
                                                                      "type": "TSIndexedAccessType",
                                                                      "start": 788,
                                                                      "end": 814,
                                                                      "objectType": {
                                                                        "type": "TSTypeReference",
                                                                        "start": 788,
                                                                        "end": 796,
                                                                        "typeName": {
                                                                          "type": "Identifier",
                                                                          "start": 788,
                                                                          "end": 796,
                                                                          "decorators": [],
                                                                          "name": "TOptions",
                                                                          "optional": false,
                                                                          "typeAnnotation": null
                                                                        },
                                                                        "typeArguments": null
                                                                      },
                                                                      "indexType": {
                                                                        "type": "TSLiteralType",
                                                                        "start": 797,
                                                                        "end": 813,
                                                                        "literal": {
                                                                          "type": "Literal",
                                                                          "start": 797,
                                                                          "end": 813,
                                                                          "value": "errorFormatter",
                                                                          "raw": "\"errorFormatter\""
                                                                        }
                                                                      }
                                                                    },
                                                                    {
                                                                      "type": "TSTypeReference",
                                                                      "start": 816,
                                                                      "end": 906,
                                                                      "typeName": {
                                                                        "type": "Identifier",
                                                                        "start": 816,
                                                                        "end": 830,
                                                                        "decorators": [],
                                                                        "name": "ErrorFormatter",
                                                                        "optional": false,
                                                                        "typeAnnotation": null
                                                                      },
                                                                      "typeArguments": {
                                                                        "type": "TSTypeParameterInstantiation",
                                                                        "start": 830,
                                                                        "end": 906,
                                                                        "params": [
                                                                          {
                                                                            "type": "TSConditionalType",
                                                                            "start": 831,
                                                                            "end": 886,
                                                                            "checkType": {
                                                                              "type": "TSIndexedAccessType",
                                                                              "start": 831,
                                                                              "end": 845,
                                                                              "objectType": {
                                                                                "type": "TSTypeReference",
                                                                                "start": 831,
                                                                                "end": 838,
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "start": 831,
                                                                                  "end": 838,
                                                                                  "decorators": [],
                                                                                  "name": "TParams",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null
                                                                                },
                                                                                "typeArguments": null
                                                                              },
                                                                              "indexType": {
                                                                                "type": "TSLiteralType",
                                                                                "start": 839,
                                                                                "end": 844,
                                                                                "literal": {
                                                                                  "type": "Literal",
                                                                                  "start": 839,
                                                                                  "end": 844,
                                                                                  "value": "ctx",
                                                                                  "raw": "\"ctx\""
                                                                                }
                                                                              }
                                                                            },
                                                                            "extendsType": {
                                                                              "type": "TSObjectKeyword",
                                                                              "start": 854,
                                                                              "end": 860
                                                                            },
                                                                            "trueType": {
                                                                              "type": "TSIndexedAccessType",
                                                                              "start": 863,
                                                                              "end": 877,
                                                                              "objectType": {
                                                                                "type": "TSTypeReference",
                                                                                "start": 863,
                                                                                "end": 870,
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "start": 863,
                                                                                  "end": 870,
                                                                                  "decorators": [],
                                                                                  "name": "TParams",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null
                                                                                },
                                                                                "typeArguments": null
                                                                              },
                                                                              "indexType": {
                                                                                "type": "TSLiteralType",
                                                                                "start": 871,
                                                                                "end": 876,
                                                                                "literal": {
                                                                                  "type": "Literal",
                                                                                  "start": 871,
                                                                                  "end": 876,
                                                                                  "value": "ctx",
                                                                                  "raw": "\"ctx\""
                                                                                }
                                                                              }
                                                                            },
                                                                            "falseType": {
                                                                              "type": "TSObjectKeyword",
                                                                              "start": 880,
                                                                              "end": 886
                                                                            }
                                                                          },
                                                                          {
                                                                            "type": "TSTypeReference",
                                                                            "start": 888,
                                                                            "end": 905,
                                                                            "typeName": {
                                                                              "type": "Identifier",
                                                                              "start": 888,
                                                                              "end": 905,
                                                                              "decorators": [],
                                                                              "name": "DefaultErrorShape",
                                                                              "optional": false,
                                                                              "typeAnnotation": null
                                                                            },
                                                                            "typeArguments": null
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      },
                                                      "accessibility": null,
                                                      "static": false
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 937,
                                    "end": 947,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 937,
                                      "end": 947,
                                      "decorators": [],
                                      "name": "TNewParams",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 958,
                      "end": 969,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 958,
                        "end": 964,
                        "decorators": [],
                        "name": "router",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 964,
                        "end": 968,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 966,
                          "end": 968,
                          "members": []
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 981,
      "end": 1032,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 988,
        "end": 1032,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1002,
            "end": 1031,
            "id": {
              "type": "Identifier",
              "start": 1002,
              "end": 1031,
              "decorators": [],
              "name": "initTRPC",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1010,
                "end": 1031,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1012,
                  "end": 1031,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1012,
                    "end": 1023,
                    "decorators": [],
                    "name": "TRPCBuilder",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1023,
                    "end": 1031,
                    "params": [
                      {
                        "type": "TSObjectKeyword",
                        "start": 1024,
                        "end": 1030
                      }
                    ]
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1033,
      "end": 1043,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
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
  "end": 199,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "initTRPC",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "initTRPC",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 39,
        "value": "@trpc/server",
        "raw": "\"@trpc/server\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 73,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "decorators": [],
            "name": "trpc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 55,
            "end": 72,
            "callee": {
              "type": "MemberExpression",
              "start": 55,
              "end": 70,
              "object": {
                "type": "Identifier",
                "start": 55,
                "end": 63,
                "decorators": [],
                "name": "initTRPC",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 64,
                "end": 70,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 117,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 82,
        "end": 117,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 88,
            "end": 116,
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 98,
              "decorators": [],
              "name": "middleware",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 101,
              "end": 116,
              "object": {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 106,
                "end": 116,
                "decorators": [],
                "name": "middleware",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 118,
      "end": 152,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 125,
        "end": 152,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 131,
            "end": 151,
            "id": {
              "type": "Identifier",
              "start": 131,
              "end": 137,
              "decorators": [],
              "name": "router",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 140,
              "end": 151,
              "object": {
                "type": "Identifier",
                "start": 140,
                "end": 144,
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 145,
                "end": 151,
                "decorators": [],
                "name": "router",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 199,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 160,
        "end": 199,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 166,
            "end": 198,
            "id": {
              "type": "Identifier",
              "start": 166,
              "end": 181,
              "decorators": [],
              "name": "publicProcedure",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 184,
              "end": 198,
              "object": {
                "type": "Identifier",
                "start": 184,
                "end": 188,
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 189,
                "end": 198,
                "decorators": [],
                "name": "procedure",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
