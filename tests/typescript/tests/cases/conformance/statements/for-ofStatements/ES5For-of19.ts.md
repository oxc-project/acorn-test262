__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 110,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 16,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 110,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 24,
            "end": 26,
            "expression": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 31,
            "end": 108,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 61,
                    "end": 68,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 67,
                        "end": 68,
                        "id": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 72,
                    "end": 74,
                    "elements": []
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 76,
                    "end": 102,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 90,
                        "end": 92,
                        "expression": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 91,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
