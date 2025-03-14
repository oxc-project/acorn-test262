declarationEmitTypeAliasWithTypeParameters4.ts
```json
{
  "type": "Program",
  "start": 24,
  "end": 159,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 72,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 41,
        "end": 71,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 47,
            "end": 69,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 69,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 69,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 64,
                      "end": 65,
                      "typeName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 67,
                      "end": 68,
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "J",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 50,
              "end": 56,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 51,
                  "end": 52,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 54,
                  "end": 55,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "J",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "Y",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 73,
      "end": 105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 84,
        "decorators": [],
        "name": "SubFoo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 90,
        "end": 104,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 93,
          "end": 104,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 94,
              "end": 100
            },
            {
              "type": "TSTypeReference",
              "start": 102,
              "end": 103,
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "R",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 90,
          "end": 93,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "R",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 158,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 158,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 128,
            "end": 156,
            "argument": {
              "type": "TSAsExpression",
              "start": 135,
              "end": 155,
              "expression": {
                "type": "ObjectExpression",
                "start": 135,
                "end": 137,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 155,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 147,
                  "end": 155,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 148,
                      "end": 154
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 147,
                  "decorators": [],
                  "name": "SubFoo",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
