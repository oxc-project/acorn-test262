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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 34,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 18,
            "end": 32,
            "params": [
              {
                "type": "Identifier",
                "start": 26,
                "end": 30,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 29,
                    "end": 30,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 22,
              "end": 25,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 23,
                  "end": 24,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 54,
            "end": 70,
            "arguments": [
              {
                "type": "Literal",
                "start": 68,
                "end": 69,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
