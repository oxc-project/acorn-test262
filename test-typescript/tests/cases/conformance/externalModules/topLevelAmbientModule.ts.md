__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 45,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 31,
              "end": 45,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 35,
                  "end": 44,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 44,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 38,
                        "end": 44
                      }
                    },
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
      "declare": true,
      "global": false
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
  "start": 33,
  "end": 82,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 33,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 46,
        "end": 60,
        "expression": {
          "type": "Literal",
          "start": 54,
          "end": 59,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 70,
            "end": 80,
            "left": {
              "type": "MemberExpression",
              "start": 70,
              "end": 75,
              "object": {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 78,
              "end": 80,
              "value": 10,
              "raw": "10"
            }
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
