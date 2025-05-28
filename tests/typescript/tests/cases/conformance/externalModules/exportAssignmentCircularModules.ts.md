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
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "Foo",
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
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "Foo",
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
  "end": 86,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "foo0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
