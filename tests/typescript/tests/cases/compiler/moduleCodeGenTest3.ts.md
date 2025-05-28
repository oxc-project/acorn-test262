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
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 24,
                  "end": 35,
                  "id": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
