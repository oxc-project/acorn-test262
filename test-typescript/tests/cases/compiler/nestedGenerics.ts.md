nestedGenerics.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 25,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 24,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 24,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "type": "VariableDeclaration",
      "start": 29,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 52,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 52,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 39,
                  "end": 52,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 40,
                      "end": 51,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 43,
                        "end": 51,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 44,
                            "end": 50
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 43,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 39,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
