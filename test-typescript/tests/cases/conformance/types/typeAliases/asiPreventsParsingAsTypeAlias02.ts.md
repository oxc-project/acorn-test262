asiPreventsParsingAsTypeAlias02.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 8,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "string",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 32,
      "end": 82,
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 82,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 58,
            "end": 62,
            "expression": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "type",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 80,
            "expression": {
              "type": "AssignmentExpression",
              "start": 67,
              "end": 79,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 67,
                "end": 70,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 73,
                "end": 79,
                "decorators": [],
                "name": "string",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 51,
        "decorators": [],
        "name": "container",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script"
}
```
