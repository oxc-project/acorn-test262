conditionalDoesntLeakUninstantiatedTypeParameter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 462,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 38,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "Synthetic",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 34,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 33,
              "end": 34,
              "typeName": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
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
      "start": 39,
      "end": 117,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 64,
        "decorators": [],
        "name": "SyntheticDestination",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 73,
        "end": 116,
        "checkType": {
          "type": "TSTypeReference",
          "start": 73,
          "end": 74,
          "typeName": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "U",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 83,
          "end": 104,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 92,
            "end": 104,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSInferType",
                "start": 96,
                "end": 103,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 102,
                  "end": 103,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 92,
            "decorators": [],
            "name": "Synthetic",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 111,
          "end": 116
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 107,
          "end": 108,
          "typeName": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "V",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 66,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 272,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 136,
        "decorators": [],
        "name": "TestSynthetic",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 216,
        "end": 271,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 236,
          "end": 271,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 237,
              "end": 243
            },
            {
              "type": "TSTypeReference",
              "start": 245,
              "end": 270,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 254,
                "end": 270,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 255,
                    "end": 261
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 263,
                    "end": 269
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 245,
                "end": 254,
                "decorators": [],
                "name": "Synthetic",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 216,
          "end": 236,
          "decorators": [],
          "name": "SyntheticDestination",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 296,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 283,
                "end": 296,
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 296,
                  "decorators": [],
                  "name": "TestSynthetic",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 299,
            "end": 300,
            "raw": "3",
            "value": 3
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 391,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 385,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 372,
                "end": 385,
                "typeName": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 385,
                  "decorators": [],
                  "name": "TestSynthetic",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 388,
            "end": 391,
            "raw": "'3'",
            "value": "3"
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
