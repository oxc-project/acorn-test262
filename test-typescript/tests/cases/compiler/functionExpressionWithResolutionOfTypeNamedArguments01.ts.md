__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 23,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 23,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "arguments",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 33,
            "end": 75,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 46,
              "end": 75,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 52,
                  "end": 73,
                  "directive": null,
                  "expression": {
                    "type": "TSTypeAssertion",
                    "start": 52,
                    "end": 72,
                    "expression": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 72,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 53,
                      "end": 62,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 62,
                        "decorators": [],
                        "name": "arguments",
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
              "start": 42,
              "end": 43,
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
