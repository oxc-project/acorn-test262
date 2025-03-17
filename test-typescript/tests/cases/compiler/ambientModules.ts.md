__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 62,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 43,
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 43,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 41,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 41,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 37,
                  "end": 40,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 40,
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
        "start": 16,
        "end": 23,
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 20,
          "end": 23,
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
      "start": 43,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 61,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 45,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 45,
          "end": 56,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 45,
            "end": 52,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 59,
          "end": 60,
          "raw": "5",
          "value": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
