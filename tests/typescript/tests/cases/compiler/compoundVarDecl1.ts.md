__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 18
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 21,
                  "end": 22
                },
                "definite": false,
                "start": 17,
                "end": 22
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 25
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 28,
                  "end": 29
                },
                "definite": false,
                "start": 24,
                "end": 29
              }
            ],
            "declare": false,
            "start": 13,
            "end": 30
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 36
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 39,
                  "end": 40
                },
                "start": 35,
                "end": 40
              },
              "start": 31,
              "end": 40
            },
            "directive": null,
            "start": 31,
            "end": 41
          }
        ],
        "start": 11,
        "end": 43
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 52
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 55,
            "end": 56
          },
          "definite": false,
          "start": 49,
          "end": 56
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 61
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 64,
            "end": 65
          },
          "definite": false,
          "start": 58,
          "end": 65
        }
      ],
      "declare": false,
      "start": 45,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
