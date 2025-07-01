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
          "start": 14,
          "end": 17
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
                      "start": 31,
                      "end": 32
                    },
                    "init": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 35,
                      "end": 42
                    },
                    "definite": false,
                    "start": 31,
                    "end": 42
                  }
                ],
                "declare": false,
                "start": 27,
                "end": 43
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 20,
              "end": 43
            }
          ],
          "start": 18,
          "end": 45
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
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
            "start": 47,
            "end": 50
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 52
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 52
        },
        "right": {
          "type": "Literal",
          "value": "goodbye",
          "raw": "\"goodbye\"",
          "start": 55,
          "end": 64
        },
        "start": 47,
        "end": 64
      },
      "directive": null,
      "start": 47,
      "end": 65
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
          "start": 71,
          "end": 72
        },
        "prefix": true,
        "start": 66,
        "end": 72
      },
      "directive": null,
      "start": 66,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
