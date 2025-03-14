__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 17,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 16,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 16,
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
  "end": 99,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 99,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 99,
        "body": {
          "type": "TSModuleBlock",
          "start": 23,
          "end": 99,
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "start": 29,
              "end": 78,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "start": 42,
                "end": 77,
                "expression": {
                  "type": "Literal",
                  "start": 50,
                  "end": 76,
                  "raw": "\"importInsideModule_file1\"",
                  "value": "importInsideModule_file1"
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "start": 83,
              "end": 97,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 87,
                  "end": 96,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 91,
                    "end": 96,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 94,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
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
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 22,
          "decorators": [],
          "name": "myModule",
          "optional": false
        },
        "kind": "module"
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
