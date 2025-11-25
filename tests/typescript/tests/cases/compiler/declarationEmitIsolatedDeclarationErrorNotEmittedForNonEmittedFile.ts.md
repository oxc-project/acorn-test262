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
          "name": "RootConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 27
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
                "start": 28,
                "end": 29
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 28,
              "end": 29
            }
          ],
          "start": 27,
          "end": 30
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 41
              },
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
                    "start": 43,
                    "end": 44
                  },
                  "typeArguments": null,
                  "start": 43,
                  "end": 44
                },
                "start": 41,
                "end": 44
              },
              "accessibility": null,
              "static": false,
              "start": 37,
              "end": 45
            }
          ],
          "start": 31,
          "end": 47
        },
        "declare": false,
        "start": 7,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
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
          "name": "ErrorFormatterShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 36
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
                "start": 37,
                "end": 38
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 39,
                "end": 41
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 37,
              "end": 41
            }
          ],
          "start": 36,
          "end": 42
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 53
              },
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
                    "start": 55,
                    "end": 56
                  },
                  "typeArguments": null,
                  "start": 55,
                  "end": 56
                },
                "start": 53,
                "end": 56
              },
              "accessibility": null,
              "static": false,
              "start": 49,
              "end": 57
            }
          ],
          "start": 43,
          "end": 59
        },
        "declare": false,
        "start": 7,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 59
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PickFirstDefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 88
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TType",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 94
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 89,
              "end": 94
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPick",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 101
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 96,
              "end": 101
            }
          ],
          "start": 88,
          "end": 102
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSUndefinedKeyword",
            "start": 105,
            "end": 114
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "typeArguments": null,
            "start": 123,
            "end": 128
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 133,
              "end": 142
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPick",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 156
              },
              "typeArguments": null,
              "start": 151,
              "end": 156
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 163,
              "end": 168
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPick",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 180
              },
              "typeArguments": null,
              "start": 175,
              "end": 180
            },
            "start": 133,
            "end": 180
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 190
            },
            "typeArguments": null,
            "start": 185,
            "end": 190
          },
          "start": 105,
          "end": 190
        },
        "declare": false,
        "start": 67,
        "end": 191
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 60,
      "end": 191
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ErrorFormatter",
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 223
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
                "start": 224,
                "end": 225
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 226,
                "end": 228
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 224,
              "end": 228
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 231,
                "end": 233
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 229,
              "end": 233
            }
          ],
          "start": 223,
          "end": 234
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 245
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 249
                      },
                      "typeArguments": null,
                      "start": 248,
                      "end": 249
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 252
                      },
                      "typeArguments": null,
                      "start": 251,
                      "end": 252
                    }
                  ],
                  "start": 247,
                  "end": 253
                },
                "start": 245,
                "end": 253
              },
              "accessibility": null,
              "static": false,
              "start": 241,
              "end": 254
            }
          ],
          "start": 235,
          "end": 256
        },
        "declare": false,
        "start": 199,
        "end": 256
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 192,
      "end": 256
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DefaultErrorShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 291
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
                "start": 292,
                "end": 293
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 294,
                "end": 296
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 292,
              "end": 296
            }
          ],
          "start": 291,
          "end": 297
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 308
              },
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
                    "start": 310,
                    "end": 311
                  },
                  "typeArguments": null,
                  "start": 310,
                  "end": 311
                },
                "start": 308,
                "end": 311
              },
              "accessibility": null,
              "static": false,
              "start": 304,
              "end": 312
            }
          ],
          "start": 298,
          "end": 314
        },
        "declare": false,
        "start": 264,
        "end": 314
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 257,
      "end": 314
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 314
}
```
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
          "name": "MiddlewareFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 35
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
                "start": 36,
                "end": 37
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 38,
                "end": 40
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 36,
              "end": 40
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 43,
                "end": 45
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 41,
              "end": 45
            }
          ],
          "start": 35,
          "end": 46
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 57
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 61
                      },
                      "typeArguments": null,
                      "start": 60,
                      "end": 61
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "typeArguments": null,
                      "start": 63,
                      "end": 64
                    }
                  ],
                  "start": 59,
                  "end": 65
                },
                "start": 57,
                "end": 65
              },
              "accessibility": null,
              "static": false,
              "start": 53,
              "end": 66
            }
          ],
          "start": 47,
          "end": 68
        },
        "declare": false,
        "start": 7,
        "end": 68
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 68
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MiddlewareBuilder",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 103
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
                "start": 104,
                "end": 105
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 106,
                "end": 108
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 104,
              "end": 108
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 111,
                "end": 113
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 109,
              "end": 113
            }
          ],
          "start": 103,
          "end": 114
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 125
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 129
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 132
                    }
                  ],
                  "start": 127,
                  "end": 133
                },
                "start": 125,
                "end": 133
              },
              "accessibility": null,
              "static": false,
              "start": 121,
              "end": 134
            }
          ],
          "start": 115,
          "end": 136
        },
        "declare": false,
        "start": 76,
        "end": 136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 69,
      "end": 136
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 136
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RootConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RootConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./internals/config",
        "raw": "'./internals/config'",
        "start": 27,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrorFormatterShape",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 77
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrorFormatterShape",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 77
          },
          "importKind": "value",
          "start": 58,
          "end": 77
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "PickFirstDefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 95
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "PickFirstDefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 95
          },
          "importKind": "value",
          "start": 79,
          "end": 95
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrorFormatter",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 111
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrorFormatter",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 111
          },
          "importKind": "value",
          "start": 97,
          "end": 111
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "DefaultErrorShape",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 130
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "DefaultErrorShape",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 130
          },
          "importKind": "value",
          "start": 113,
          "end": 130
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./internals/utils",
        "raw": "'./internals/utils'",
        "start": 138,
        "end": 157
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 158
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TRPCBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 184
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TParams",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 192
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 192
          }
        ],
        "start": 184,
        "end": 193
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 206
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 215
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 230
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
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
                        ],
                        "start": 230,
                        "end": 243
                      },
                      "start": 224,
                      "end": 243
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 207,
                    "end": 243
                  }
                ],
                "start": 206,
                "end": 244
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "procedure",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 267
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 269,
                          "end": 271
                        },
                        "start": 267,
                        "end": 271
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 258,
                      "end": 272
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "middleware",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 281,
                        "end": 291
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TNewParams",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 294,
                                  "end": 304
                                },
                                "constraint": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Record",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 313,
                                    "end": 319
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
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
                                    ],
                                    "start": 319,
                                    "end": 332
                                  },
                                  "start": 313,
                                  "end": 332
                                },
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 294,
                                "end": 332
                              }
                            ],
                            "start": 293,
                            "end": 333
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSImportType",
                                  "source": {
                                    "type": "Literal",
                                    "value": "./middleware",
                                    "raw": "\"./middleware\"",
                                    "start": 345,
                                    "end": 359
                                  },
                                  "options": null,
                                  "qualifier": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "MiddlewareFunction",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 361,
                                    "end": 379
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "computed": false,
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_config",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 394,
                                              "end": 401
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "RootConfig",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 403,
                                                  "end": 413
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
                                                      "type": "TSTypeLiteral",
                                                      "members": [
                                                        {
                                                          "type": "TSPropertySignature",
                                                          "computed": false,
                                                          "optional": false,
                                                          "readonly": false,
                                                          "key": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "errorShape",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 432,
                                                            "end": 442
                                                          },
                                                          "typeAnnotation": {
                                                            "type": "TSTypeAnnotation",
                                                            "typeAnnotation": {
                                                              "type": "TSTypeReference",
                                                              "typeName": {
                                                                "type": "Identifier",
                                                                "decorators": [],
                                                                "name": "ErrorFormatterShape",
                                                                "optional": false,
                                                                "typeAnnotation": null,
                                                                "start": 444,
                                                                "end": 463
                                                              },
                                                              "typeArguments": {
                                                                "type": "TSTypeParameterInstantiation",
                                                                "params": [
                                                                  {
                                                                    "type": "TSTypeReference",
                                                                    "typeName": {
                                                                      "type": "Identifier",
                                                                      "decorators": [],
                                                                      "name": "PickFirstDefined",
                                                                      "optional": false,
                                                                      "typeAnnotation": null,
                                                                      "start": 464,
                                                                      "end": 480
                                                                    },
                                                                    "typeArguments": {
                                                                      "type": "TSTypeParameterInstantiation",
                                                                      "params": [
                                                                        {
                                                                          "type": "TSIndexedAccessType",
                                                                          "objectType": {
                                                                            "type": "TSTypeReference",
                                                                            "typeName": {
                                                                              "type": "Identifier",
                                                                              "decorators": [],
                                                                              "name": "TOptions",
                                                                              "optional": false,
                                                                              "typeAnnotation": null,
                                                                              "start": 481,
                                                                              "end": 489
                                                                            },
                                                                            "typeArguments": null,
                                                                            "start": 481,
                                                                            "end": 489
                                                                          },
                                                                          "indexType": {
                                                                            "type": "TSLiteralType",
                                                                            "literal": {
                                                                              "type": "Literal",
                                                                              "value": "errorFormatter",
                                                                              "raw": "\"errorFormatter\"",
                                                                              "start": 490,
                                                                              "end": 506
                                                                            },
                                                                            "start": 490,
                                                                            "end": 506
                                                                          },
                                                                          "start": 481,
                                                                          "end": 507
                                                                        },
                                                                        {
                                                                          "type": "TSTypeReference",
                                                                          "typeName": {
                                                                            "type": "Identifier",
                                                                            "decorators": [],
                                                                            "name": "ErrorFormatter",
                                                                            "optional": false,
                                                                            "typeAnnotation": null,
                                                                            "start": 509,
                                                                            "end": 523
                                                                          },
                                                                          "typeArguments": {
                                                                            "type": "TSTypeParameterInstantiation",
                                                                            "params": [
                                                                              {
                                                                                "type": "TSConditionalType",
                                                                                "checkType": {
                                                                                  "type": "TSIndexedAccessType",
                                                                                  "objectType": {
                                                                                    "type": "TSTypeReference",
                                                                                    "typeName": {
                                                                                      "type": "Identifier",
                                                                                      "decorators": [],
                                                                                      "name": "TParams",
                                                                                      "optional": false,
                                                                                      "typeAnnotation": null,
                                                                                      "start": 524,
                                                                                      "end": 531
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "start": 524,
                                                                                    "end": 531
                                                                                  },
                                                                                  "indexType": {
                                                                                    "type": "TSLiteralType",
                                                                                    "literal": {
                                                                                      "type": "Literal",
                                                                                      "value": "ctx",
                                                                                      "raw": "\"ctx\"",
                                                                                      "start": 532,
                                                                                      "end": 537
                                                                                    },
                                                                                    "start": 532,
                                                                                    "end": 537
                                                                                  },
                                                                                  "start": 524,
                                                                                  "end": 538
                                                                                },
                                                                                "extendsType": {
                                                                                  "type": "TSObjectKeyword",
                                                                                  "start": 547,
                                                                                  "end": 553
                                                                                },
                                                                                "trueType": {
                                                                                  "type": "TSIndexedAccessType",
                                                                                  "objectType": {
                                                                                    "type": "TSTypeReference",
                                                                                    "typeName": {
                                                                                      "type": "Identifier",
                                                                                      "decorators": [],
                                                                                      "name": "TParams",
                                                                                      "optional": false,
                                                                                      "typeAnnotation": null,
                                                                                      "start": 556,
                                                                                      "end": 563
                                                                                    },
                                                                                    "typeArguments": null,
                                                                                    "start": 556,
                                                                                    "end": 563
                                                                                  },
                                                                                  "indexType": {
                                                                                    "type": "TSLiteralType",
                                                                                    "literal": {
                                                                                      "type": "Literal",
                                                                                      "value": "ctx",
                                                                                      "raw": "\"ctx\"",
                                                                                      "start": 564,
                                                                                      "end": 569
                                                                                    },
                                                                                    "start": 564,
                                                                                    "end": 569
                                                                                  },
                                                                                  "start": 556,
                                                                                  "end": 570
                                                                                },
                                                                                "falseType": {
                                                                                  "type": "TSObjectKeyword",
                                                                                  "start": 573,
                                                                                  "end": 579
                                                                                },
                                                                                "start": 524,
                                                                                "end": 579
                                                                              },
                                                                              {
                                                                                "type": "TSTypeReference",
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "decorators": [],
                                                                                  "name": "DefaultErrorShape",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null,
                                                                                  "start": 581,
                                                                                  "end": 598
                                                                                },
                                                                                "typeArguments": null,
                                                                                "start": 581,
                                                                                "end": 598
                                                                              }
                                                                            ],
                                                                            "start": 523,
                                                                            "end": 599
                                                                          },
                                                                          "start": 509,
                                                                          "end": 599
                                                                        }
                                                                      ],
                                                                      "start": 480,
                                                                      "end": 600
                                                                    },
                                                                    "start": 464,
                                                                    "end": 600
                                                                  }
                                                                ],
                                                                "start": 463,
                                                                "end": 601
                                                              },
                                                              "start": 444,
                                                              "end": 601
                                                            },
                                                            "start": 442,
                                                            "end": 601
                                                          },
                                                          "accessibility": null,
                                                          "static": false,
                                                          "start": 432,
                                                          "end": 602
                                                        }
                                                      ],
                                                      "start": 414,
                                                      "end": 616
                                                    }
                                                  ],
                                                  "start": 413,
                                                  "end": 617
                                                },
                                                "start": 403,
                                                "end": 617
                                              },
                                              "start": 401,
                                              "end": 617
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 394,
                                            "end": 618
                                          }
                                        ],
                                        "start": 380,
                                        "end": 628
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TNewParams",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 630,
                                          "end": 640
                                        },
                                        "typeArguments": null,
                                        "start": 630,
                                        "end": 640
                                      }
                                    ],
                                    "start": 379,
                                    "end": 641
                                  },
                                  "start": 338,
                                  "end": 641
                                },
                                "start": 336,
                                "end": 641
                              },
                              "start": 334,
                              "end": 641
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSImportType",
                              "source": {
                                "type": "Literal",
                                "value": "./middleware",
                                "raw": "\"./middleware\"",
                                "start": 653,
                                "end": 667
                              },
                              "options": null,
                              "qualifier": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MiddlewareBuilder",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 669,
                                "end": 686
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeLiteral",
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "_config",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 701,
                                          "end": 708
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "RootConfig",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 710,
                                              "end": 720
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSTypeLiteral",
                                                  "members": [
                                                    {
                                                      "type": "TSPropertySignature",
                                                      "computed": false,
                                                      "optional": false,
                                                      "readonly": false,
                                                      "key": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "errorShape",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 739,
                                                        "end": 749
                                                      },
                                                      "typeAnnotation": {
                                                        "type": "TSTypeAnnotation",
                                                        "typeAnnotation": {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "ErrorFormatterShape",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 751,
                                                            "end": 770
                                                          },
                                                          "typeArguments": {
                                                            "type": "TSTypeParameterInstantiation",
                                                            "params": [
                                                              {
                                                                "type": "TSTypeReference",
                                                                "typeName": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "PickFirstDefined",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 771,
                                                                  "end": 787
                                                                },
                                                                "typeArguments": {
                                                                  "type": "TSTypeParameterInstantiation",
                                                                  "params": [
                                                                    {
                                                                      "type": "TSIndexedAccessType",
                                                                      "objectType": {
                                                                        "type": "TSTypeReference",
                                                                        "typeName": {
                                                                          "type": "Identifier",
                                                                          "decorators": [],
                                                                          "name": "TOptions",
                                                                          "optional": false,
                                                                          "typeAnnotation": null,
                                                                          "start": 788,
                                                                          "end": 796
                                                                        },
                                                                        "typeArguments": null,
                                                                        "start": 788,
                                                                        "end": 796
                                                                      },
                                                                      "indexType": {
                                                                        "type": "TSLiteralType",
                                                                        "literal": {
                                                                          "type": "Literal",
                                                                          "value": "errorFormatter",
                                                                          "raw": "\"errorFormatter\"",
                                                                          "start": 797,
                                                                          "end": 813
                                                                        },
                                                                        "start": 797,
                                                                        "end": 813
                                                                      },
                                                                      "start": 788,
                                                                      "end": 814
                                                                    },
                                                                    {
                                                                      "type": "TSTypeReference",
                                                                      "typeName": {
                                                                        "type": "Identifier",
                                                                        "decorators": [],
                                                                        "name": "ErrorFormatter",
                                                                        "optional": false,
                                                                        "typeAnnotation": null,
                                                                        "start": 816,
                                                                        "end": 830
                                                                      },
                                                                      "typeArguments": {
                                                                        "type": "TSTypeParameterInstantiation",
                                                                        "params": [
                                                                          {
                                                                            "type": "TSConditionalType",
                                                                            "checkType": {
                                                                              "type": "TSIndexedAccessType",
                                                                              "objectType": {
                                                                                "type": "TSTypeReference",
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "decorators": [],
                                                                                  "name": "TParams",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null,
                                                                                  "start": 831,
                                                                                  "end": 838
                                                                                },
                                                                                "typeArguments": null,
                                                                                "start": 831,
                                                                                "end": 838
                                                                              },
                                                                              "indexType": {
                                                                                "type": "TSLiteralType",
                                                                                "literal": {
                                                                                  "type": "Literal",
                                                                                  "value": "ctx",
                                                                                  "raw": "\"ctx\"",
                                                                                  "start": 839,
                                                                                  "end": 844
                                                                                },
                                                                                "start": 839,
                                                                                "end": 844
                                                                              },
                                                                              "start": 831,
                                                                              "end": 845
                                                                            },
                                                                            "extendsType": {
                                                                              "type": "TSObjectKeyword",
                                                                              "start": 854,
                                                                              "end": 860
                                                                            },
                                                                            "trueType": {
                                                                              "type": "TSIndexedAccessType",
                                                                              "objectType": {
                                                                                "type": "TSTypeReference",
                                                                                "typeName": {
                                                                                  "type": "Identifier",
                                                                                  "decorators": [],
                                                                                  "name": "TParams",
                                                                                  "optional": false,
                                                                                  "typeAnnotation": null,
                                                                                  "start": 863,
                                                                                  "end": 870
                                                                                },
                                                                                "typeArguments": null,
                                                                                "start": 863,
                                                                                "end": 870
                                                                              },
                                                                              "indexType": {
                                                                                "type": "TSLiteralType",
                                                                                "literal": {
                                                                                  "type": "Literal",
                                                                                  "value": "ctx",
                                                                                  "raw": "\"ctx\"",
                                                                                  "start": 871,
                                                                                  "end": 876
                                                                                },
                                                                                "start": 871,
                                                                                "end": 876
                                                                              },
                                                                              "start": 863,
                                                                              "end": 877
                                                                            },
                                                                            "falseType": {
                                                                              "type": "TSObjectKeyword",
                                                                              "start": 880,
                                                                              "end": 886
                                                                            },
                                                                            "start": 831,
                                                                            "end": 886
                                                                          },
                                                                          {
                                                                            "type": "TSTypeReference",
                                                                            "typeName": {
                                                                              "type": "Identifier",
                                                                              "decorators": [],
                                                                              "name": "DefaultErrorShape",
                                                                              "optional": false,
                                                                              "typeAnnotation": null,
                                                                              "start": 888,
                                                                              "end": 905
                                                                            },
                                                                            "typeArguments": null,
                                                                            "start": 888,
                                                                            "end": 905
                                                                          }
                                                                        ],
                                                                        "start": 830,
                                                                        "end": 906
                                                                      },
                                                                      "start": 816,
                                                                      "end": 906
                                                                    }
                                                                  ],
                                                                  "start": 787,
                                                                  "end": 907
                                                                },
                                                                "start": 771,
                                                                "end": 907
                                                              }
                                                            ],
                                                            "start": 770,
                                                            "end": 908
                                                          },
                                                          "start": 751,
                                                          "end": 908
                                                        },
                                                        "start": 749,
                                                        "end": 908
                                                      },
                                                      "accessibility": null,
                                                      "static": false,
                                                      "start": 739,
                                                      "end": 909
                                                    }
                                                  ],
                                                  "start": 721,
                                                  "end": 923
                                                }
                                              ],
                                              "start": 720,
                                              "end": 924
                                            },
                                            "start": 710,
                                            "end": 924
                                          },
                                          "start": 708,
                                          "end": 924
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 701,
                                        "end": 925
                                      }
                                    ],
                                    "start": 687,
                                    "end": 935
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TNewParams",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 937,
                                      "end": 947
                                    },
                                    "typeArguments": null,
                                    "start": 937,
                                    "end": 947
                                  }
                                ],
                                "start": 686,
                                "end": 948
                              },
                              "start": 646,
                              "end": 948
                            },
                            "start": 643,
                            "end": 948
                          },
                          "start": 293,
                          "end": 948
                        },
                        "start": 291,
                        "end": 948
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 281,
                      "end": 949
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "router",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 958,
                        "end": 964
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 966,
                          "end": 968
                        },
                        "start": 964,
                        "end": 968
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 958,
                      "end": 969
                    }
                  ],
                  "start": 248,
                  "end": 975
                },
                "start": 246,
                "end": 975
              },
              "body": null,
              "expression": false,
              "start": 206,
              "end": 976
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 200,
            "end": 976
          }
        ],
        "start": 194,
        "end": 978
      },
      "abstract": false,
      "declare": true,
      "start": 159,
      "end": 978
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "initTRPC",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TRPCBuilder",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1012,
                    "end": 1023
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSObjectKeyword",
                        "start": 1024,
                        "end": 1030
                      }
                    ],
                    "start": 1023,
                    "end": 1031
                  },
                  "start": 1012,
                  "end": 1031
                },
                "start": 1010,
                "end": 1031
              },
              "start": 1002,
              "end": 1031
            },
            "init": null,
            "definite": false,
            "start": 1002,
            "end": 1031
          }
        ],
        "declare": true,
        "start": 988,
        "end": 1032
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 981,
      "end": 1032
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1033,
      "end": 1043
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1043
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "initTRPC",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "initTRPC",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@trpc/server",
        "raw": "\"@trpc/server\"",
        "start": 25,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "trpc",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 52
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "initTRPC",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 63
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 70
              },
              "optional": false,
              "computed": false,
              "start": 55,
              "end": 70
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 55,
            "end": 72
          },
          "definite": false,
          "start": 48,
          "end": 72
        }
      ],
      "declare": false,
      "start": 42,
      "end": 73
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "middleware",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 98
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 105
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "middleware",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 116
              },
              "optional": false,
              "computed": false,
              "start": 101,
              "end": 116
            },
            "definite": false,
            "start": 88,
            "end": 116
          }
        ],
        "declare": false,
        "start": 82,
        "end": 117
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 75,
      "end": 117
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "router",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 137
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 144
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "router",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 151
              },
              "optional": false,
              "computed": false,
              "start": 140,
              "end": 151
            },
            "definite": false,
            "start": 131,
            "end": 151
          }
        ],
        "declare": false,
        "start": 125,
        "end": 152
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 118,
      "end": 152
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicProcedure",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 181
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "trpc",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "procedure",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 198
              },
              "optional": false,
              "computed": false,
              "start": 184,
              "end": 198
            },
            "definite": false,
            "start": 166,
            "end": 198
          }
        ],
        "declare": false,
        "start": 160,
        "end": 199
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 153,
      "end": 199
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 199
}
```
