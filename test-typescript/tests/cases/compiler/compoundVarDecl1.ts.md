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
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 43,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 13,
            "end": 30,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 17,
                "end": 22,
                "definite": false,
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
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 29,
                "definite": false,
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
                  "raw": "1",
                  "value": 1,
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
            "start": 31,
            "end": 41,
            "directive": null,
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
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 56,
          "definite": false,
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
            "raw": "4",
            "value": 4,
            "regex": null,
            "bigint": null
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 65,
          "definite": false,
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
            "raw": "5",
            "value": 5,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
