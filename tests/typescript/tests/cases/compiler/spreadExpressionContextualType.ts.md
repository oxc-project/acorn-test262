__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 279,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "decorators": [],
        "name": "Orange",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 39,
        "end": 60,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 45,
            "end": 58,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
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
      "start": 62,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 77,
        "decorators": [],
        "name": "Apple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 78,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 84,
            "end": 97,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
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
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 114,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 115,
            "end": 139,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 125,
              "end": 139,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 125,
                  "end": 130,
                  "typeName": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 130,
                    "decorators": [],
                    "name": "Apple",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 133,
                  "end": 139,
                  "typeName": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 139,
                    "decorators": [],
                    "name": "Orange",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
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
          "start": 141,
          "end": 148,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 148,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 147,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 149,
        "end": 152,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 151,
          "end": 152,
          "typeName": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 153,
        "end": 180,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 159,
            "end": 178,
            "argument": {
              "type": "ObjectExpression",
              "start": 166,
              "end": 177,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 168,
                  "end": 175,
                  "argument": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 175,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 279,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 196,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 222,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 221,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 207,
              "end": 221,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 207,
                  "end": 212,
                  "typeName": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 212,
                    "decorators": [],
                    "name": "Apple",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 215,
                  "end": 221,
                  "typeName": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 221,
                    "decorators": [],
                    "name": "Orange",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
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
          "start": 223,
          "end": 230,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 231,
        "end": 234,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 233,
          "end": 234,
          "typeName": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 235,
        "end": 279,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 241,
            "end": 263,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 247,
                "end": 262,
                "id": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 251,
                  "end": 262,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 253,
                      "end": 260,
                      "argument": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 260,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 268,
            "end": 277,
            "argument": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
