__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_1",
          "raw": "'./foo_1'",
          "start": 22,
          "end": 31
        },
        "start": 14,
        "end": 32
      },
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 70
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "optional": false,
                    "computed": false,
                    "start": 66,
                    "end": 72
                  },
                  "definite": false,
                  "start": 62,
                  "end": 72
                }
              ],
              "declare": false,
              "start": 58,
              "end": 73
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 73
          }
        ],
        "start": 48,
        "end": 75
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 34,
      "end": 75
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 88
      },
      "start": 76,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_2",
          "raw": "\"./foo_2\"",
          "start": 22,
          "end": 31
        },
        "start": 14,
        "end": 32
      },
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 70
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "optional": false,
                    "computed": false,
                    "start": 66,
                    "end": 72
                  },
                  "definite": false,
                  "start": 62,
                  "end": 72
                }
              ],
              "declare": false,
              "start": 58,
              "end": 73
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 73
          }
        ],
        "start": 48,
        "end": 75
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 34,
      "end": 75
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 88
      },
      "start": 76,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_0",
          "raw": "\"./foo_0\"",
          "start": 22,
          "end": 31
        },
        "start": 14,
        "end": 32
      },
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 70
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "optional": false,
                    "computed": false,
                    "start": 66,
                    "end": 72
                  },
                  "definite": false,
                  "start": 62,
                  "end": 72
                }
              ],
              "declare": false,
              "start": 58,
              "end": 73
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 73
          }
        ],
        "start": 48,
        "end": 75
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 34,
      "end": 75
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 88
      },
      "start": 76,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
