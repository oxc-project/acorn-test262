declarationEmitTypeAliasWithTypeParameters5.ts
```json
{
  "type": "Program",
  "start": 24,
  "end": 166,
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
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 112,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 80,
        "end": 112,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 85,
          "end": 91,
          "decorators": [],
          "name": "SubFoo",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 97,
          "end": 111,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 100,
            "end": 111,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              },
              {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "R",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 97,
            "end": 100,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 91,
          "end": 94,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 92,
              "end": 93,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "R",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 165,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 165,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 163,
            "argument": {
              "type": "TSAsExpression",
              "start": 142,
              "end": 162,
              "expression": {
                "type": "ObjectExpression",
                "start": 142,
                "end": 144,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 162,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 154,
                  "end": 162,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 155,
                      "end": 161
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 154,
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
        "start": 123,
        "end": 126,
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
