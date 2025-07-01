__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 88,
                    "end": 90
                  },
                  "start": 81,
                  "end": 91
                }
              ],
              "start": 75,
              "end": 93
            },
            "expression": false,
            "start": 64,
            "end": 93
          },
          "definite": false,
          "start": 60,
          "end": 93
        }
      ],
      "declare": false,
      "start": 56,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 107
            },
            "optional": false,
            "computed": false,
            "start": 96,
            "end": 107
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 109
        },
        "right": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 112,
          "end": 115
        },
        "start": 96,
        "end": 115
      },
      "directive": null,
      "start": 96,
      "end": 116
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 154
          },
          "definite": false,
          "start": 149,
          "end": 154
        }
      ],
      "declare": false,
      "start": 145,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 156
}
```
