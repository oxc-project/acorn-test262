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
foo_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
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
        "end": 30,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 29,
          "raw": "\"vs/foo\"",
          "value": "vs/foo"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 40,
            "end": 50,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 40,
              "end": 45,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 40,
                "end": 43,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 48,
              "end": 50,
              "raw": "10",
              "value": 10
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
