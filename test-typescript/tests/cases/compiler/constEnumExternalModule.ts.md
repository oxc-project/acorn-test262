__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 28,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 28,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 26,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 23,
              "end": 26,
              "raw": "100",
              "value": 100
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 40,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "E",
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
  "end": 37,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 24,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 23,
          "raw": "'m1'",
          "value": "m1"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 33,
            "end": 36,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "V",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
