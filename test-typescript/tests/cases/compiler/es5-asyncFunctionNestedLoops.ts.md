__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 57,
        "name": "nestedLoops",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 211,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 66,
            "end": 209,
            "body": {
              "type": "WhileStatement",
              "start": 69,
              "end": 209,
              "test": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 209,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 97,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 89,
                      "end": 96,
                      "argument": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "WhileStatement",
                    "start": 106,
                    "end": 151,
                    "test": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 116,
                      "end": 151,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 130,
                          "end": 141,
                          "label": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "WhileStatement",
                    "start": 160,
                    "end": 203,
                    "test": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 170,
                      "end": 203,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 184,
                          "end": 193,
                          "label": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "label": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
