__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 31,
          "value": "./foo_1",
          "raw": "'./foo_1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 70,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 55,
              "end": 70,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "name": "foo1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
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
      "start": 73,
      "end": 86,
      "expression": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "name": "Foo",
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
  "end": 87,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 31,
          "value": "./foo_2",
          "raw": "\"./foo_2\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 70,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 55,
              "end": 70,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "name": "foo2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
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
      "start": 73,
      "end": 86,
      "expression": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "name": "Foo",
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
  "end": 87,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "foo0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 31,
          "value": "./foo_0",
          "raw": "\"./foo_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 70,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 55,
              "end": 70,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "name": "foo0",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
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
      "start": 73,
      "end": 86,
      "expression": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "name": "Foo",
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
