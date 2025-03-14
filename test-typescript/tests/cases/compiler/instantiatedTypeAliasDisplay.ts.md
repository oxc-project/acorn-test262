instantiatedTypeAliasDisplay.ts
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
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 80,
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
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "Y",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 65,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 108,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "Z",
        "optional": false
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
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 103,
            "end": 107,
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
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "Y",
              "optional": false
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 91,
            "end": 92,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 110,
      "end": 149,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 129,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 134,
        "end": 148,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 136,
          "end": 148,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "Z",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 129,
        "end": 132,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 131,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 150,
      "end": 225,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 169,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 189,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 191,
          "end": 195,
          "decorators": [],
          "name": "b",
          "optional": false,
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
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 197,
          "end": 201,
          "decorators": [],
          "name": "c",
          "optional": false,
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
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 203,
          "end": 207,
          "decorators": [],
          "name": "d",
          "optional": false,
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
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 208,
        "end": 224,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 210,
          "end": 224,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "Z",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 169,
        "end": 184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 170,
            "end": 171,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 173,
            "end": 174,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 176,
            "end": 177,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 180,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 182,
            "end": 183,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 235,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 238,
            "end": 250,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 238,
              "end": 240,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 282,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 303,
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
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 287,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
