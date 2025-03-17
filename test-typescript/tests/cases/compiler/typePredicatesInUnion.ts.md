__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 46,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 44,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "name": "pred",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 23,
                "end": 28,
                "name": "x",
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 31,
                "end": 43,
                "parameterName": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 47,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 92,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 65,
            "end": 90,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "name": "pred",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 75,
                "name": "x",
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
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 78,
                "end": 89,
                "parameterName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 94,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "name": "Or",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 108,
            "end": 109,
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
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
          "start": 123,
          "end": 128,
          "name": "o",
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
                "name": "Or",
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
          "start": 130,
          "end": 135,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 178,
        "body": [
          {
            "type": "IfStatement",
            "start": 143,
            "end": 176,
            "test": {
              "type": "CallExpression",
              "start": 147,
              "end": 156,
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 153,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 153,
                  "name": "pred",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
