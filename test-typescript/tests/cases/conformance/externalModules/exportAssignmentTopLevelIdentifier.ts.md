__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 39,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 39,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 37,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 21,
              "end": 37,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 25,
                  "end": 36,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 31,
                    "decorators": [],
                    "name": "answer",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 34,
                    "end": 36,
                    "raw": "42",
                    "value": 42
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
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 40,
      "end": 53,
      "expression": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
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
  "end": 59,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 33,
      "end": 58,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 54,
        "end": 58,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 53,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 46,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 46,
            "decorators": [],
            "name": "answer",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 53,
          "raw": "42",
          "value": 42
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
