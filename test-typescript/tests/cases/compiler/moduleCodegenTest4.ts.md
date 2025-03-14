moduleCodegenTest4.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 45,
        "body": {
          "type": "TSModuleBlock",
          "start": 18,
          "end": 45,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 20,
              "end": 43,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 27,
                "end": 43,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 31,
                    "end": 42,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 35,
                      "end": 42,
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
          "start": 14,
          "end": 17,
          "decorators": [],
          "name": "Baz",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 50,
            "decorators": [],
            "name": "Baz",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 55,
          "end": 64,
          "raw": "\"goodbye\"",
          "value": "goodbye"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 73,
      "expression": {
        "type": "UnaryExpression",
        "start": 66,
        "end": 72,
        "argument": {
          "type": "Literal",
          "start": 71,
          "end": 72,
          "raw": "0",
          "value": 0
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
}
```
