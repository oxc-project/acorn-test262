foo_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
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
        "name": "foo",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
foo_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
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
      "start": 86,
      "end": 111,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 107,
        "end": 111,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 89,
        "end": 106,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 89,
          "end": 99,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "decorators": [],
            "name": "answer",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 104,
          "end": 106,
          "raw": "42",
          "value": 42
        }
      }
    }
  ],
  "sourceType": "module"
}
```
