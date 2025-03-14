__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 25,
        "body": {
          "type": "TSEnumBody",
          "start": 17,
          "end": 25,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 19,
              "end": 23,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 19,
                "end": 23,
                "decorators": [],
                "name": "Open",
                "optional": false
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Mode",
          "optional": false
        }
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
  "start": 51,
  "end": 123,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 51,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 62,
        "end": 99,
        "expression": {
          "type": "Literal",
          "start": 70,
          "end": 98,
          "raw": "'./enumFromExternalModule_0'",
          "value": "./enumFromExternalModule_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 110,
            "end": 121,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 110,
              "end": 116,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 112,
                "end": 116,
                "decorators": [],
                "name": "Mode",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "decorators": [],
              "name": "Open",
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
