__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 103,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 18,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 38,
          "name": "arguments",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 103,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 46,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 50,
                "end": 65,
                "id": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 60,
                  "name": "_arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 63,
                  "end": 65,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 71,
            "end": 101,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 75,
                "end": 100,
                "id": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 79,
                  "end": 100,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 85,
                    "end": 100,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 100,
                      "name": "arguments",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
