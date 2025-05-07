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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 83,
                  "decorators": [],
                  "name": "unused",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 86,
                  "end": 88,
                  "raw": "20",
                  "value": 20,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 94,
            "end": 118,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 94,
              "end": 117,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 94,
                "end": 101,
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 104,
                "end": 117,
                "raw": "\"dummy value\"",
                "value": "dummy value",
                "regex": null,
                "bigint": null
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
        "end": 16,
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 48,
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          }
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 65,
          "decorators": [],
          "name": "person3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 65,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 59,
              "end": 65
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
