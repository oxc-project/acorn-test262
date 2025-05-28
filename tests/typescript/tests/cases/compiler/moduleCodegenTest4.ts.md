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
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
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
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 31,
                    "end": 42,
                    "id": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
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
        "argument": {
          "type": "Literal",
          "start": 71,
          "end": 72,
          "value": 0,
          "raw": "0"
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
