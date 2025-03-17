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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": 1,
              "raw": "1"
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
              "value": 2,
              "raw": "2"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
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
          "start": 40,
          "end": 44,
          "name": "a",
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
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 38,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 37,
              "end": 38,
              "typeName": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "A",
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
              "typeName": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 51,
              "end": 52,
              "typeName": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": 2,
              "raw": "2"
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
              "value": 3,
              "raw": "3"
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
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
          "start": 141,
          "end": 150,
          "name": "ab",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 149,
                  "end": 150,
                  "typeName": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "ab",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 126,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 126,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "name": "A",
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
          },
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 139,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "name": "B",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 158,
                  "end": 159,
                  "typeName": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 159,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            {
              "type": "TSTypeReference",
              "start": 163,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 167,
              "end": 168,
              "typeName": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
