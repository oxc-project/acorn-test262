__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "a",
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
        "start": 14,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 34,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 33,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 49,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 49,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
                "properties": [
                  {
                    "type": "Property",
                    "start": 57,
                    "end": 58,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 60,
                    "end": 64,
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
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
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
