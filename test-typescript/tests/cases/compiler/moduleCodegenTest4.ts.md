__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 45,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 17,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 18,
          "end": 45,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 20,
              "end": 43,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 27,
                "end": 43,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 31,
                    "end": 42,
                    "id": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 35,
                      "end": 42,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 65,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 64,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 52,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "name": "Baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
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
          "start": 55,
          "end": 64,
          "value": "goodbye",
          "raw": "\"goodbye\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 73,
      "expression": {
        "type": "UnaryExpression",
        "start": 66,
        "end": 72,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 71,
          "end": 72,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
