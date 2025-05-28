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
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 42,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 40,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 32,
              "end": 40,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 36,
                  "end": 39,
                  "id": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 39,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
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
      "declare": true,
      "global": false
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
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 59,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 55,
          "object": {
            "type": "MemberExpression",
            "start": 44,
            "end": 51,
            "object": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 58,
          "end": 59,
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
