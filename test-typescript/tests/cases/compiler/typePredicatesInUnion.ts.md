typePredicatesInUnion.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 46,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "pred",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 23,
                "end": 28,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 26,
                    "end": 28,
                    "members": []
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 31,
                "end": 43,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 43,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 36,
                    "end": 43
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 47,
      "end": 92,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 92,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 65,
            "end": 90,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "decorators": [],
              "name": "pred",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 75,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 73,
                    "end": 75,
                    "members": []
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 78,
                "end": 89,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 83,
                    "end": 89
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 94,
      "end": 110,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "decorators": [],
        "name": "Or",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 104,
        "end": 109,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 104,
            "end": 105,
            "typeName": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 108,
            "end": 109,
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 178,
        "body": [
          {
            "type": "IfStatement",
            "start": 143,
            "end": 176,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 158,
              "end": 176,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 168,
                  "end": 170,
                  "expression": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 147,
              "end": 156,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 153,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 153,
                  "decorators": [],
                  "name": "pred",
                  "optional": false
                }
              },
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
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 123,
          "end": 128,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 128,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 128,
                "decorators": [],
                "name": "Or",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 130,
          "end": 135,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 131,
            "end": 135,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 133,
              "end": 135,
              "members": []
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
