declarationEmitTypeAliasWithTypeParameters3.ts
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
        "start": 38,
        "end": 62,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 44,
            "end": 60,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
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
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 60,
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 57,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 47,
              "end": 50,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 48,
                  "end": 49,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "U",
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
        "end": 35,
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
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 64,
      "end": 112,
      "async": false,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 101,
                  "decorators": [],
                  "name": "Foo",
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
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
