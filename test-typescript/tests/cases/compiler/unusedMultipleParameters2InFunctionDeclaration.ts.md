__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "greeter",
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
          "start": 17,
          "end": 31,
          "name": "person",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 48,
          "name": "person2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 65,
          "name": "person3",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 59,
              "end": 65
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 120,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 73,
            "end": 89,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 77,
                "end": 88,
                "id": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 83,
                  "name": "unused",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 86,
                  "end": 88,
                  "value": 20,
                  "raw": "20"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 94,
            "end": 118,
            "expression": {
              "type": "AssignmentExpression",
              "start": 94,
              "end": 117,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 94,
                "end": 101,
                "name": "person2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 104,
                "end": 117,
                "value": "dummy value",
                "raw": "\"dummy value\""
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
