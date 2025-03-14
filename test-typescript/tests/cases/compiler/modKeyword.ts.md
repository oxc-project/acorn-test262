modKeyword.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 14,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 11,
                "end": 14
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
      "type": "VariableDeclaration",
      "start": 16,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "_",
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 38,
            "end": 58,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 38,
              "end": 52,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 38,
                "end": 44,
                "decorators": [],
                "name": "module",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 52,
                "decorators": [],
                "name": "exports",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
