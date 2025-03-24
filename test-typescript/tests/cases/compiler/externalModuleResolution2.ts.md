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
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 35,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 33,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 33,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 27,
                  "end": 32,
                  "id": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "value": 1,
                    "raw": "1"
                  },
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
      "start": 36,
      "end": 47,
      "expression": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "name": "M2",
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
  "end": 60,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 46,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 44,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 31,
              "end": 44,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 35,
                  "end": 43,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 43,
                    "name": "Y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
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
    },
    {
      "type": "TSExportAssignment",
      "start": 47,
      "end": 58,
      "expression": {
        "type": "Identifier",
        "start": 56,
        "end": 58,
        "name": "M1",
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
  "end": 56,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 26,
          "value": "./foo",
          "raw": "'./foo'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 32,
      "expression": {
        "type": "MemberExpression",
        "start": 29,
        "end": 32,
        "object": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
