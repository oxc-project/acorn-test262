__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 21
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 25
        },
        "start": 18,
        "end": 25
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 42
                  },
                  "init": null,
                  "definite": false,
                  "start": 39,
                  "end": 42
                }
              ],
              "declare": false,
              "start": 35,
              "end": 43
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 28,
            "end": 43
          }
        ],
        "start": 26,
        "end": 45
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "EmptyStatement",
      "start": 45,
      "end": 46
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 50
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 54
            },
            "optional": false,
            "computed": false,
            "start": 47,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 58
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 58
        },
        "right": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 61,
          "end": 62
        },
        "start": 47,
        "end": 62
      },
      "directive": null,
      "start": 47,
      "end": 63
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
