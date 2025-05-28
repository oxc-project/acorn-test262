__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 43,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 13,
            "end": 30,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 17,
                "end": 22,
                "id": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 21,
                  "end": 22,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 29,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 28,
                  "end": 29,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 31,
            "end": 41,
            "expression": {
              "type": "AssignmentExpression",
              "start": 31,
              "end": 40,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 35,
                "end": 40,
                "left": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 66,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 55,
            "end": 56,
            "value": 4,
            "raw": "4"
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 64,
            "end": 65,
            "value": 5,
            "raw": "5"
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
