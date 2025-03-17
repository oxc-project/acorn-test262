__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 281,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 30,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
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
        "type": "TSTypeLiteral",
        "start": 34,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "T",
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
      "type": "TSInterfaceDeclaration",
      "start": 48,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 69,
          "end": 74,
          "expression": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 70,
            "end": 74,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 71,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 73,
                  "name": "M3",
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
        "start": 75,
        "end": 77,
        "body": []
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 77,
      "end": 78
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 89,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 99,
        "end": 111,
        "objectType": {
          "type": "TSTypeReference",
          "start": 99,
          "end": 101,
          "typeName": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "name": "M2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 102,
          "end": 110,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 108,
            "end": 110,
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 110,
              "name": "M2",
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
      "type": "FunctionDeclaration",
      "start": 124,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "name": "f",
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
          "start": 135,
          "end": 140,
          "name": "m",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 140,
                "name": "M3",
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
        "start": 142,
        "end": 163,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 146,
            "end": 161,
            "argument": {
              "type": "MemberExpression",
              "start": 153,
              "end": 160,
              "object": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 160,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 187,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 193,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 194,
            "end": 195,
            "name": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
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
        "start": 199,
        "end": 241,
        "types": [
          {
            "type": "TSMappedType",
            "start": 199,
            "end": 225,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 202,
              "end": 214,
              "name": {
                "type": "Identifier",
                "start": 202,
                "end": 203,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 207,
                "end": 214,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 213,
                  "end": 214,
                  "typeName": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 217,
              "end": 223
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 207,
              "end": 214,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 214,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 214,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 228,
            "end": 241,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 230,
                "end": 239,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 231,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 233,
                    "end": 239
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
      "start": 243,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 254,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 263,
          "end": 267,
          "expression": {
            "type": "Identifier",
            "start": 263,
            "end": 264,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 264,
            "end": 267,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 265,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "name": "Y",
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
        "start": 268,
        "end": 280,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 272,
            "end": 278,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 277,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 275,
                "end": 277,
                "literal": {
                  "type": "Literal",
                  "start": 275,
                  "end": 277,
                  "value": "",
                  "raw": "\"\""
                }
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
