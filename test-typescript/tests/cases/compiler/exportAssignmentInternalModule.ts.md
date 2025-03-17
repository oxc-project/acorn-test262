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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 27,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 25,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 19,
              "end": 25,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 23,
                  "end": 24,
                  "id": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 29,
      "end": 40,
      "expression": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "M",
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
        "name": "modM",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 57,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 56,
          "value": "exportAssignmentInternalModule_A",
          "raw": "\"exportAssignmentInternalModule_A\""
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 76,
            "end": 82,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
              "name": "modM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "x",
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
