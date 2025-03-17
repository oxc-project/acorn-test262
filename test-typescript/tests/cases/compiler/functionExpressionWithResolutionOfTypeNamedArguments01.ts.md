__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 76,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 24,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 24,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 20,
        "decorators": [],
        "name": "arguments",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 34,
            "end": 76,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 47,
              "end": 76,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 53,
                  "end": 74,
                  "directive": null,
                  "expression": {
                    "type": "TSTypeAssertion",
                    "start": 53,
                    "end": 73,
                    "expression": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 73,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 63,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 63,
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
              "start": 43,
              "end": 44,
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
