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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 20,
        "name": "arguments",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 24,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 34,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
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
              "start": 47,
              "end": 76,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 53,
                  "end": 74,
                  "expression": {
                    "type": "TSTypeAssertion",
                    "start": 53,
                    "end": 73,
                    "expression": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 73,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 63,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 63,
                        "name": "arguments",
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
