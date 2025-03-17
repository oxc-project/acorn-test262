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
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 25,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "name": "Mode",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "name": "Open",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 17,
          "end": 25,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 19,
              "end": 23,
              "id": {
                "type": "Identifier",
                "start": 19,
                "end": 23,
                "name": "Open",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 62,
        "end": 99,
        "expression": {
          "type": "Literal",
          "start": 70,
          "end": 98,
          "value": "./enumFromExternalModule_0",
          "raw": "'./enumFromExternalModule_0'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 110,
            "end": 121,
            "object": {
              "type": "MemberExpression",
              "start": 110,
              "end": 116,
              "object": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 112,
                "end": 116,
                "name": "Mode",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "name": "Open",
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
