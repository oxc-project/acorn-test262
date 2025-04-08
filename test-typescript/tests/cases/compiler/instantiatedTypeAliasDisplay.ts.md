__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 324,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "A",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
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
      "start": 52,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 65,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "B",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 67,
        "end": 80,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 73,
            "end": 78,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "B",
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
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 93,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 91,
            "end": 92,
            "name": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "name": "B",
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
        "type": "TSUnionType",
        "start": 96,
        "end": 107,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 96,
            "end": 100,
            "typeName": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 97,
              "end": 100,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 98,
                  "end": 99,
                  "typeName": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 103,
            "end": 107,
            "typeName": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 107,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 105,
                  "end": 106,
                  "typeName": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 110,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 129,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 129,
        "end": 132,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 131,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "name": "A",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 134,
        "end": 148,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 136,
          "end": 148,
          "typeName": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "Z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 137,
            "end": 148,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 138,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 150,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
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
          "start": 185,
          "end": 189,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 186,
            "end": 189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 189,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "A",
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
        {
          "type": "Identifier",
          "start": 191,
          "end": 195,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 192,
            "end": 195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 194,
              "end": 195,
              "typeName": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "name": "B",
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
        {
          "type": "Identifier",
          "start": 197,
          "end": 201,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 201,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 201,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "name": "C",
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
        {
          "type": "Identifier",
          "start": 203,
          "end": 207,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 204,
            "end": 207,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 206,
              "end": 207,
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "name": "D",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 169,
        "end": 184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 170,
            "end": 171,
            "name": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 173,
            "end": 174,
            "name": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 176,
            "end": 177,
            "name": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 180,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 183,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "E",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 208,
        "end": 224,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 210,
          "end": 224,
          "typeName": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "name": "Z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 211,
            "end": 224,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 212,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSArrayType",
                "start": 215,
                "end": 223,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 215,
                  "end": 221
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 250,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 235,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 238,
            "end": 250,
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 240,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 240,
              "end": 248,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 241,
                  "end": 247
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 303,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 303,
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 287,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 288,
                "end": 290,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 292,
                "end": 294,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 296,
                "end": 298,
                "properties": []
              },
              {
                "type": "ObjectExpression",
                "start": 300,
                "end": 302,
                "properties": []
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
