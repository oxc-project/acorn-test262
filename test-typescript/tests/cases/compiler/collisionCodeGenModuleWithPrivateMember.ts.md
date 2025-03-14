__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 84,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 84,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 16,
            "end": 32,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 25,
              "end": 32,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 24,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 53,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 45,
                  "end": 53,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 51,
                    "decorators": [],
                    "name": "m1",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 59,
            "end": 82,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 66,
              "end": 82,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 75,
                "end": 82,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 72,
                "end": 74,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 95,
            "end": 106,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 99,
              "end": 104,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 101,
                "decorators": [],
                "name": "m1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 102,
                "end": 104,
                "decorators": [],
                "name": "c1",
                "optional": false
              }
            }
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
