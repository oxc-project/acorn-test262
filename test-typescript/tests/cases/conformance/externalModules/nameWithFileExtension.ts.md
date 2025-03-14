foo_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 19,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 19,
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
  ],
  "sourceType": "module"
}
```
foo_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 35,
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
        "end": 34,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 33,
          "raw": "'./foo_0.js'",
          "value": "./foo_0.js"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 44,
            "end": 56,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 44,
              "end": 51,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 44,
                "end": 47,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 54,
              "end": 56,
              "raw": "42",
              "value": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
