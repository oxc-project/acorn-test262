__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 280,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 60,
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
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "decorators": [],
        "name": "Orange",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 99,
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
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 77,
        "decorators": [],
        "name": "Apple",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 180,
      "async": false,
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
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "test",
        "optional": false
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
                "optional": false
              }
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
            "optional": false
          }
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
            "end": 139,
            "const": false,
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
                    "optional": false
                  }
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
                    "optional": false
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
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
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 279,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 235,
        "end": 279,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 241,
            "end": 263,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 247,
                "end": 262,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "x",
                  "optional": false
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
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
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
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 196,
        "decorators": [],
        "name": "test2",
        "optional": false
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
                "optional": false
              }
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
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 196,
        "end": 222,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 197,
            "end": 221,
            "const": false,
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
                    "optional": false
                  }
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
                    "optional": false
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "T",
              "optional": false
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
