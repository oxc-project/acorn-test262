destructuringObjectBindingPatternAndAssignment5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 34,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 33,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 33,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 27,
                      "end": 33
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 49,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 49,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 46,
                      "end": 49
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 54,
            "end": 83,
            "expression": {
              "type": "AssignmentExpression",
              "start": 55,
              "end": 81,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 55,
                "end": 66,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 57,
                    "end": 58,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  {
                    "type": "RestElement",
                    "start": 60,
                    "end": 64,
                    "argument": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "right": {
                "type": "TSAsExpression",
                "start": 70,
                "end": 80,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 70,
                  "end": 73,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 77,
                  "end": 80
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
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
