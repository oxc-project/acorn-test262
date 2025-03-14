contextualTyping22.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 26,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 8,
                "end": 26,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9,
                    "end": 17,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 17,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 11,
                        "end": 17
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 18,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 29,
            "end": 50,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 40,
              "end": 50,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 41,
                  "end": 49,
                  "argument": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 52,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 52,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 52,
          "end": 55,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 58,
          "end": 79,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 69,
            "end": 79,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 70,
                "end": 78,
                "argument": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
