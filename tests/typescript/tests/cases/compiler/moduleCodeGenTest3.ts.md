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
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 27,
                    "end": 28
                  },
                  "init": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 31,
                    "end": 38
                  },
                  "definite": false,
                  "start": 27,
                  "end": 38
                }
              ],
              "declare": false,
              "start": 23,
              "end": 39
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 39
          }
        ],
        "start": 14,
        "end": 41
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 48
        },
        "right": {
          "type": "Literal",
          "value": "goodbye",
          "raw": "\"goodbye\"",
          "start": 51,
          "end": 60
        },
        "start": 43,
        "end": 60
      },
      "directive": null,
      "start": 43,
      "end": 61
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
