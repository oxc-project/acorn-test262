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
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 17,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 33,
          "end": 48
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 59,
              "end": 65
            },
            "start": 57,
            "end": 65
          },
          "start": 50,
          "end": 65
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unused",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 83
                },
                "init": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 86,
                  "end": 88
                },
                "definite": false,
                "start": 77,
                "end": 88
              }
            ],
            "declare": false,
            "start": 73,
            "end": 89
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 101
              },
              "right": {
                "type": "Literal",
                "value": "dummy value",
                "raw": "\"dummy value\"",
                "start": 104,
                "end": 117
              },
              "start": 94,
              "end": 117
            },
            "directive": null,
            "start": 94,
            "end": 118
          }
        ],
        "start": 67,
        "end": 120
      },
      "expression": false,
      "start": 0,
      "end": 120
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
