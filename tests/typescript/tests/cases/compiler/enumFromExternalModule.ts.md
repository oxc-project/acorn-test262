__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mode",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 16
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Open",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 23
              },
              "initializer": null,
              "computed": false,
              "start": 19,
              "end": 23
            }
          ],
          "start": 17,
          "end": 25
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 26
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 59
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./enumFromExternalModule_0",
          "raw": "'./enumFromExternalModule_0'",
          "start": 70,
          "end": 98
        },
        "start": 62,
        "end": 99
      },
      "importKind": "value",
      "start": 51,
      "end": 100
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 107
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 111
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mode",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 116
              },
              "optional": false,
              "computed": false,
              "start": 110,
              "end": 116
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Open",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 121
            },
            "optional": false,
            "computed": false,
            "start": 110,
            "end": 121
          },
          "definite": false,
          "start": 106,
          "end": 121
        }
      ],
      "declare": false,
      "start": 102,
      "end": 122
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 51,
  "end": 122
}
```
