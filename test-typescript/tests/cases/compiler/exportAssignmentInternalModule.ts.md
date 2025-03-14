__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 27,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 25,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 19,
              "end": 25,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 23,
                  "end": 24,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "x",
                    "optional": false
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 29,
      "end": 40,
      "expression": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "M",
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
  "end": 83,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "modM",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 57,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 56,
          "raw": "\"exportAssignmentInternalModule_A\"",
          "value": "exportAssignmentInternalModule_A"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 76,
            "end": 82,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "decorators": [],
              "name": "modM",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "x",
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
