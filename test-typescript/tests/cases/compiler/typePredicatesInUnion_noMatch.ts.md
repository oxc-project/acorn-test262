__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 53,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 51,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "pred",
              "optional": false,
              "typeAnnotation": null
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
              },
              {
                "type": "Identifier",
                "start": 30,
                "end": 35,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 33,
                    "end": 35,
                    "members": []
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 38,
                "end": 50,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 43,
                    "end": 50
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 54,
      "end": 106,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 106,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 72,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "decorators": [],
              "name": "pred",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 80,
                    "end": 82,
                    "members": []
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 84,
                "end": 89,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 87,
                    "end": 89,
                    "members": []
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 92,
                "end": 103,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 97,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 124,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 115,
        "decorators": [],
        "name": "Or",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 118,
        "end": 123,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 118,
            "end": 119,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 122,
            "end": 123,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 126,
      "end": 213,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 213,
        "body": [
          {
            "type": "IfStatement",
            "start": 164,
            "end": 211,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 182,
              "end": 211,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 192,
                  "end": 194,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 193,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 203,
                  "end": 205,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 168,
              "end": 180,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 168,
                "end": 174,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 174,
                  "decorators": [],
                  "name": "pred",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 137,
          "end": 142,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 138,
            "end": 142,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 142,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 142,
                "decorators": [],
                "name": "Or",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 144,
          "end": 149,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 145,
            "end": 149,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 147,
              "end": 149,
              "members": []
            }
          }
        },
        {
          "type": "Identifier",
          "start": 151,
          "end": 156,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 156,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 154,
              "end": 156,
              "members": []
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
