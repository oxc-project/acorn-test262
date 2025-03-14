foo_0.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 45,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 31,
              "end": 45,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 35,
                  "end": 44,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 44,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 38,
                        "end": 44
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
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo"
      }
    }
  ],
  "sourceType": "module"
}
```
foo_1.ts
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
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 46,
        "end": 60,
        "expression": {
          "type": "Literal",
          "start": 54,
          "end": 59,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 70,
            "end": 80,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 70,
              "end": 75,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 78,
              "end": 80,
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
