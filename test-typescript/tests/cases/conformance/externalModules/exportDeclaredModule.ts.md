foo1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 75,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 42,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 28,
              "end": 42,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 41,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 41,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 45,
            "end": 73,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 52,
              "end": 73,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 64,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 66,
                  "end": 72
                }
              }
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
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "decorators": [],
        "name": "M1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 76,
      "end": 88,
      "expression": {
        "type": "Identifier",
        "start": 85,
        "end": 87,
        "decorators": [],
        "name": "M1",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "raw": "'./foo1'",
          "value": "./foo1"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 49,
            "end": 57,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 49,
              "end": 55,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 49,
                "end": 53,
                "decorators": [],
                "name": "foo1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            },
            "optional": false
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
