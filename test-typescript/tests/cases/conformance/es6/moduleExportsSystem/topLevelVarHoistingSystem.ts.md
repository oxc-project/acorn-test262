__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 29,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 11,
        "end": 29,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 17,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 21,
                "end": 26,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 22,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 25,
                  "end": 26,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 9,
        "raw": "false",
        "value": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 67,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 67,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 50,
            "end": 65,
            "expression": {
              "type": "CallExpression",
              "start": 50,
              "end": 64,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 50,
                "end": 61,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 57,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 61,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 82,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 78,
          "end": 79,
          "exported": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
