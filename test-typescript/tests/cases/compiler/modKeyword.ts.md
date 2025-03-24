__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "name": "module",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 14,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 11,
                "end": 14
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "_",
            "typeAnnotation": null,
            "decorators": [],
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
              "object": {
                "type": "Identifier",
                "start": 38,
                "end": 44,
                "name": "module",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 52,
                "name": "exports",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
