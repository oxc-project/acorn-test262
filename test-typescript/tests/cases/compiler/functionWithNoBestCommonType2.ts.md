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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 56,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "value": true,
                    "raw": "true"
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
                    "callee": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 51,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "name": "bar",
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
        "start": 80,
        "end": 83,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 79,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 75,
          "end": 79
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
