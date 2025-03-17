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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 19,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 23,
            "end": 26,
            "value": 100,
            "raw": "100"
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 28,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 26,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 23,
              "end": 26,
              "value": 100,
              "raw": "100"
            },
            "computed": false
          }
        ]
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
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 24,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 23,
          "value": "m1",
          "raw": "'m1'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 33,
            "end": 36,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
