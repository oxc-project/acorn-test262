__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 48,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 22,
            "end": 46,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 36,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 30,
                    "end": 36
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 42,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 42,
                  "end": 45,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 44,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 82,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 68,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 60,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 60,
                  "end": 68,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 71,
            "end": 81,
            "callee": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 79,
                "end": 80,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
