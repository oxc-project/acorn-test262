__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 15,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 14,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 9,
            "end": 10,
            "literal": {
              "type": "Literal",
              "start": 9,
              "end": 10,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSLiteralType",
            "start": 13,
            "end": 14,
            "literal": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "raw": "2",
              "value": 2
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 66,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 55,
            "end": 64,
            "argument": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 40,
          "end": 44,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 44,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 43,
              "end": 44,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 45,
        "end": 52,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 47,
          "end": 52,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 47,
              "end": 48,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 51,
              "end": 52,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 38,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 37,
              "end": 38,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 96,
        "end": 101,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 96,
            "end": 97,
            "literal": {
              "type": "Literal",
              "start": 96,
              "end": 97,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSLiteralType",
            "start": 100,
            "end": 101,
            "literal": {
              "type": "Literal",
              "start": 100,
              "end": 101,
              "raw": "3",
              "value": 3
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 183,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 183,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 171,
            "end": 181,
            "argument": {
              "type": "Identifier",
              "start": 178,
              "end": 180,
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 141,
          "end": 150,
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 150,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 145,
              "end": 150,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 145,
                  "end": 146,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 149,
                  "end": 150,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 151,
        "end": 168,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 153,
          "end": 168,
          "types": [
            {
              "type": "TSUnionType",
              "start": 154,
              "end": 159,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 155,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 158,
                  "end": 159,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 163,
              "end": 164,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 167,
              "end": 168,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 126,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 139,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
