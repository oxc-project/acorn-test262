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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 31,
          "raw": "'./foo_1'",
          "value": "./foo_1"
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 72,
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 70,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 55,
              "end": 70,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "foo1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
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
        "start": 41,
        "end": 44,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
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
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 31,
          "raw": "\"./foo_2\"",
          "value": "./foo_2"
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 72,
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 70,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 55,
              "end": 70,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
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
        "start": 41,
        "end": 44,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
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
        "decorators": [],
        "name": "foo0",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 31,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 34,
      "end": 72,
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 70,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 55,
              "end": 70,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 69,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 63,
                    "end": 69,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "foo0",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
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
        "start": 41,
        "end": 44,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
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
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
