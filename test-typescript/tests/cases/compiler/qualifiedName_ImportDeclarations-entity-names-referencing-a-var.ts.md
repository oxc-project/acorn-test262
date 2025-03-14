__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 38,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 38,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 30,
                  "end": 37,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 37,
                    "raw": "100",
                    "value": 100
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
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Alpha",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 81,
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 81,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 60,
            "end": 79,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 71,
              "end": 78,
              "left": {
                "type": "Identifier",
                "start": 71,
                "end": 76,
                "decorators": [],
                "name": "Alpha",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 53,
        "decorators": [],
        "name": "Beta",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 92,
            "end": 99,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "decorators": [],
              "name": "Alpha",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "x",
              "optional": false
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
