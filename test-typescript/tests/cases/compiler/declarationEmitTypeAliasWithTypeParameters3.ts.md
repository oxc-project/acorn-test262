__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 113,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 63,
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
        "end": 35,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 38,
        "end": 62,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 44,
            "end": 60,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
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
              "start": 47,
              "end": 50,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 48,
                  "end": 49,
                  "name": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
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
                }
              ]
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 57,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 57,
                  "end": 60,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 58,
                      "end": 59,
                      "typeName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
                        "name": "U",
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
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "name": "bar",
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
        "start": 79,
        "end": 112,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 85,
            "end": 110,
            "argument": {
              "type": "TSAsExpression",
              "start": 92,
              "end": 109,
              "expression": {
                "type": "ObjectExpression",
                "start": 92,
                "end": 94,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 101,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 101,
                  "end": 109,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 102,
                      "end": 108
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
