__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "a",
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
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 33,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 27,
                      "end": 33
                    }
                  },
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
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 49,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 49,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 46,
                      "end": 49
                    }
                  },
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
                "properties": [
                  {
                    "type": "Property",
                    "start": 57,
                    "end": 58,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "RestElement",
                    "start": 60,
                    "end": 64,
                    "argument": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
