__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 56,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 56,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 25,
                  "end": 37,
                  "argument": {
                    "type": "Literal",
                    "start": 32,
                    "end": 36,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 41,
                  "end": 54,
                  "argument": {
                    "type": "CallExpression",
                    "start": 48,
                    "end": 53,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 51,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 83,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 80,
        "end": 83,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 79,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 75,
          "end": 79
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
