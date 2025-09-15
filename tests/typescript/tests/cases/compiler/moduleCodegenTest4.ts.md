__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
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
                      "start": 34,
                      "end": 35
                    },
                    "init": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 38,
                      "end": 45
                    },
                    "definite": false,
                    "start": 34,
                    "end": 45
                  }
                ],
                "declare": false,
                "start": 30,
                "end": 46
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 23,
              "end": 46
            }
          ],
          "start": 21,
          "end": 48
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 48
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
            "start": 50,
            "end": 53
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 55
          },
          "optional": false,
          "computed": false,
          "start": 50,
          "end": 55
        },
        "right": {
          "type": "Literal",
          "value": "goodbye",
          "raw": "\"goodbye\"",
          "start": 58,
          "end": 67
        },
        "start": 50,
        "end": 67
      },
      "directive": null,
      "start": 50,
      "end": 68
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 74,
          "end": 75
        },
        "prefix": true,
        "start": 69,
        "end": 75
      },
      "directive": null,
      "start": 69,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
