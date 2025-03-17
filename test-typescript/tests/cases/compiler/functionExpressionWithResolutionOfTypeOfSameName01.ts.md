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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 26,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "f",
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
              "start": 39,
              "end": 52,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 45,
                  "end": 50,
                  "expression": {
                    "type": "TSTypeAssertion",
                    "start": 45,
                    "end": 49,
                    "expression": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 46,
                      "end": 47,
                      "typeName": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
