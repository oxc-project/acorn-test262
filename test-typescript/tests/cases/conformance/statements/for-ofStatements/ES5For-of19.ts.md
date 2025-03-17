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
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "foo",
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 67,
                        "end": 68,
                        "id": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "name": "v",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
                          "name": "v",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
