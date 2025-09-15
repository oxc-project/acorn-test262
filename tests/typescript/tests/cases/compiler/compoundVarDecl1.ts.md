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
        "start": 10,
        "end": 13
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
                  "start": 20,
                  "end": 21
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 24,
                  "end": 25
                },
                "definite": false,
                "start": 20,
                "end": 25
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 28
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 31,
                  "end": 32
                },
                "definite": false,
                "start": 27,
                "end": 32
              }
            ],
            "declare": false,
            "start": 16,
            "end": 33
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
                "start": 34,
                "end": 35
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 42,
                  "end": 43
                },
                "start": 38,
                "end": 43
              },
              "start": 34,
              "end": 43
            },
            "directive": null,
            "start": 34,
            "end": 44
          }
        ],
        "start": 14,
        "end": 46
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 46
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
            "start": 52,
            "end": 55
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 58,
            "end": 59
          },
          "definite": false,
          "start": 52,
          "end": 59
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 64
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 67,
            "end": 68
          },
          "definite": false,
          "start": 61,
          "end": 68
        }
      ],
      "declare": false,
      "start": 48,
      "end": 69
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 69
}
```
