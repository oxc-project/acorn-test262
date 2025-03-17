__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "T",
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
            "start": 36,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "Y",
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
        "type": "TSTypeLiteral",
        "start": 41,
        "end": 71,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 47,
            "end": 69,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 50,
              "end": 56,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 51,
                  "end": 52,
                  "name": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "name": "U",
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
                  "start": 54,
                  "end": 55,
                  "name": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "name": "J",
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 67,
                      "end": 68,
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "name": "J",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
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
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 112,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 80,
        "end": 112,
        "id": {
          "type": "Identifier",
          "start": 85,
          "end": 91,
          "name": "SubFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "R",
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
          "type": "TSTypeReference",
          "start": 97,
          "end": 111,
          "typeName": {
            "type": "Identifier",
            "start": 97,
            "end": 100,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "R",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 154,
                  "name": "SubFoo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            }
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
