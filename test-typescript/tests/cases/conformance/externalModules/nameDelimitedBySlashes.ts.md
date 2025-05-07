__ESTREE_TEST__:PASS:
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
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 19,
              "raw": "42",
              "value": 42,
              "regex": null,
              "bigint": null
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
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 36,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 35,
          "raw": "'./test/foo_0'",
          "value": "./test/foo_0",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 46,
            "end": 58,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 46,
              "end": 53,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 49,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 50,
                "end": 53,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 56,
              "end": 58,
              "raw": "42",
              "value": 42,
              "regex": null,
              "bigint": null
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
