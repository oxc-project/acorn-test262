__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 110,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 110,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 24,
            "end": 26,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 31,
            "end": 108,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 46,
              "end": 108,
              "body": [
                {
                  "type": "ForOfStatement",
                  "start": 56,
                  "end": 102,
                  "await": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 76,
                    "end": 102,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 90,
                        "end": 92,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 91,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 61,
                    "end": 68,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 67,
                        "end": 68,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 72,
                    "end": 74,
                    "elements": []
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 16,
        "elements": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
