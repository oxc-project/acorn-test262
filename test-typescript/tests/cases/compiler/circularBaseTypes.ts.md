circularBaseTypes.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "M",
        "optional": false
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
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 48,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 75,
        "end": 77,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 69,
          "end": 74,
          "expression": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "M",
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
                  "decorators": [],
                  "name": "M3",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "decorators": [],
        "name": "M2",
        "optional": false
      }
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "decorators": [],
        "name": "M3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 99,
        "end": 111,
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
              "decorators": [],
              "name": "M2",
              "optional": false
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 99,
          "end": 101,
          "typeName": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "M2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 124,
      "end": 163,
      "async": false,
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
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 160,
                "decorators": [],
                "name": "value",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 135,
          "end": 140,
          "decorators": [],
          "name": "m",
          "optional": false,
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
                "decorators": [],
                "name": "M3",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 187,
      "end": 242,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "X",
        "optional": false
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 217,
              "end": 223
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
                "key": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 231,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 233,
                    "end": 239
                  }
                }
              }
            ]
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 243,
      "end": 280,
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
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "\"\"",
                  "value": ""
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 263,
          "end": 267,
          "expression": {
            "type": "Identifier",
            "start": 263,
            "end": 264,
            "decorators": [],
            "name": "X",
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
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 254,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
