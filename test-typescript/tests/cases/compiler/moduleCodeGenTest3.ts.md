__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 38,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 36,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 20,
              "end": 36,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 24,
                  "end": 35,
                  "id": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 28,
                    "end": 35,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 58,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 57,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 40,
          "end": 45,
          "object": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "name": "Baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 48,
          "end": 57,
          "value": "goodbye",
          "raw": "\"goodbye\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
