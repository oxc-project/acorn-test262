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
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 38,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 36,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 20,
              "end": 36,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 24,
                  "end": 35,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 28,
                    "end": 35,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
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
        "name": "Baz",
        "optional": false
      },
      "kind": "module"
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "Baz",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 48,
          "end": 57,
          "raw": "\"goodbye\"",
          "value": "goodbye"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
