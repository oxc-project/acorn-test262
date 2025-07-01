__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 27,
                      "end": 33
                    },
                    "start": 25,
                    "end": 33
                  },
                  "start": 24,
                  "end": 33
                },
                "init": null,
                "definite": false,
                "start": 24,
                "end": 33
              }
            ],
            "declare": false,
            "start": 20,
            "end": 34
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 46,
                      "end": 49
                    },
                    "start": 44,
                    "end": 49
                  },
                  "start": 43,
                  "end": 49
                },
                "init": null,
                "definite": false,
                "start": 43,
                "end": 49
              }
            ],
            "declare": false,
            "start": 39,
            "end": 49
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 58
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 58
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 57,
                    "end": 58
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 64
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 60,
                    "end": 64
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 66
              },
              "right": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 70,
                  "end": 73
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 77,
                  "end": 80
                },
                "start": 70,
                "end": 80
              },
              "start": 55,
              "end": 81
            },
            "directive": null,
            "start": 54,
            "end": 83
          }
        ],
        "start": 14,
        "end": 85
      },
      "expression": false,
      "start": 0,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
