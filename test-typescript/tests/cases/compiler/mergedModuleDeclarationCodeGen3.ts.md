__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 28,
              "end": 46,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 46,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 40,
                "decorators": [],
                "name": "buz",
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
        "type": "TSQualifiedName",
        "start": 7,
        "end": 14,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 9,
          "decorators": [],
          "name": "my",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 10,
          "end": 14,
          "decorators": [],
          "name": "data",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 121,
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 121,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 74,
            "end": 119,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 97,
              "end": 119,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 107,
                  "end": 113,
                  "expression": {
                    "type": "CallExpression",
                    "start": 107,
                    "end": 112,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 110,
                      "decorators": [],
                      "name": "buz",
                      "optional": false
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
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 90,
                "decorators": [],
                "name": "my",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 92,
                "end": 95,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            ]
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 56,
        "end": 67,
        "left": {
          "type": "TSQualifiedName",
          "start": 56,
          "end": 63,
          "left": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "decorators": [],
            "name": "my",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 59,
            "end": 63,
            "decorators": [],
            "name": "data",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 64,
          "end": 67,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
