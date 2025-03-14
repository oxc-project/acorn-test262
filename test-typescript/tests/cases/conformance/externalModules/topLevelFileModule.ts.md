vs/foo_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
                }
              }
            },
            "init": null
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
vs/fum.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 19,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 28,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 20,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 22,
                  "end": 28
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "var"
      },
      "exportKind": "type",
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
  "end": 93,
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
          "raw": "\"./vs/foo_0\"",
          "value": "./vs/foo_0"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "fum",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 49,
        "end": 68,
        "expression": {
          "type": "Literal",
          "start": 57,
          "end": 67,
          "raw": "\"./vs/fum\"",
          "value": "./vs/fum"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 78,
            "end": 91,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 78,
              "end": 83,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 86,
              "end": 91,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 89,
                "decorators": [],
                "name": "fum",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "y",
                "optional": false
              }
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
