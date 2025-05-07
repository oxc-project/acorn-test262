__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 42,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 40,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 32,
              "end": 40,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 36,
                  "end": 39,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 39,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
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
      "declare": true,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 15,
        "end": 22,
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 18,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 19,
          "end": 22,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "EmptyStatement",
      "start": 42,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 59,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 55,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 44,
            "end": 51,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 58,
          "end": 59,
          "raw": "5",
          "value": 5,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
