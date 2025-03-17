__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 52,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 16,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 26,
            "end": 52,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 39,
              "end": 52,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 45,
                  "end": 50,
                  "directive": null,
                  "expression": {
                    "type": "TSTypeAssertion",
                    "start": 45,
                    "end": 49,
                    "expression": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 46,
                      "end": 47,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
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
