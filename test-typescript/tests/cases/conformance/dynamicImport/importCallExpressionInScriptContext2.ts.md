__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 39,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 39,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 24,
              "end": 37,
              "argument": {
                "type": "Literal",
                "start": 31,
                "end": 36,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "init": {
            "type": "ImportExpression",
            "start": 22,
            "end": 35,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 29,
              "end": 34,
              "raw": "\"./0\"",
              "value": "./0"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 61,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 61,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 55,
        "decorators": [],
        "name": "arguments",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
