__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
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
        "start": 17,
        "end": 47,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 45,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 26,
              "end": 32,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 27,
                  "end": 28,
                  "name": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 30,
                  "end": 31,
                  "name": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "J",
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 34,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 39,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 39,
                  "end": 45,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 40,
                      "end": 41,
                      "typeName": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 41,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 44,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "decorators": [],
                        "name": "J",
                        "optional": false,
                        "typeAnnotation": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 60,
        "decorators": [],
        "name": "SubFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
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
        "start": 66,
        "end": 80,
        "typeName": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 69,
          "end": 80,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            {
              "type": "TSTypeReference",
              "start": 78,
              "end": 79,
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 134,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 104,
            "end": 132,
            "argument": {
              "type": "TSAsExpression",
              "start": 111,
              "end": 131,
              "expression": {
                "type": "ObjectExpression",
                "start": 111,
                "end": 113,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 123,
                  "decorators": [],
                  "name": "SubFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 123,
                  "end": 131,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 124,
                      "end": 130
                    }
                  ]
                }
              }
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
