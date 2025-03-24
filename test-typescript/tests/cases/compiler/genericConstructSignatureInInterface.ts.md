__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 34,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 18,
            "end": 32,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 22,
              "end": 25,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 23,
                  "end": 24,
                  "name": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
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
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 30,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 29,
                    "end": 30,
                    "typeName": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 54,
            "end": 70,
            "callee": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 68,
                "end": 69,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 59,
              "end": 67,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 60,
                  "end": 66
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
