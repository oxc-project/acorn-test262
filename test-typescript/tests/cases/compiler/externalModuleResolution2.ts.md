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
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 35,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 33,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 33,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 27,
                  "end": 32,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "raw": "1",
                    "value": 1,
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 36,
      "end": 47,
      "expression": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
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
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 46,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 24,
            "end": 44,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 31,
              "end": 44,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 35,
                  "end": 43,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 43,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 36,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
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
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 47,
      "end": 58,
      "expression": {
        "type": "Identifier",
        "start": 56,
        "end": 58,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 26,
          "raw": "'./foo'",
          "value": "./foo",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 32,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 29,
        "end": 32,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
