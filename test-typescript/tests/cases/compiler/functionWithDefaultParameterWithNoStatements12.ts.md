functionWithDefaultParameterWithNoStatements12.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 12,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 12,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 7,
                  "end": 10
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 40,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 40,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 28,
          "end": 35,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "v",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 67,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 67,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 55,
          "end": 62,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "v",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
