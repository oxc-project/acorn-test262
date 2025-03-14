__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 58,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 55,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 21,
              "end": 55,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 55,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 40,
                    "end": 52,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 47,
                      "end": 51
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 33,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "params": []
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
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 68,
            "end": 77,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 68,
              "end": 75,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 68,
                "end": 71,
                "decorators": [],
                "name": "bar",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 72,
                "end": 75,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
