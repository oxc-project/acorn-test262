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
      "id": {
        "type": "TSQualifiedName",
        "start": 16,
        "end": 23,
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 20,
          "end": 23,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 43,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 41,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 41,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 37,
                  "end": 40,
                  "id": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 40,
                    "name": "foo",
                    "typeAnnotation": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "expression": {
        "type": "AssignmentExpression",
        "start": 45,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 45,
          "end": 56,
          "object": {
            "type": "MemberExpression",
            "start": 45,
            "end": 52,
            "object": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 59,
          "end": 60,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
