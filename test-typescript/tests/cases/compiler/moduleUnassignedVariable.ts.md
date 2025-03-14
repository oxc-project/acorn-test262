__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 171,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 171,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 34,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 33,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 39,
            "end": 68,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 55,
              "end": 68,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 57,
                  "end": 66,
                  "argument": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "a",
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
              "start": 48,
              "end": 52,
              "decorators": [],
              "name": "fooA",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 112,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 106,
              "end": 112,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 110,
                  "end": 111,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 117,
            "end": 146,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 133,
              "end": 146,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 135,
                  "end": 144,
                  "argument": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "b",
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
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "fooB",
              "optional": false
            },
            "params": []
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
        "name": "Bar",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
