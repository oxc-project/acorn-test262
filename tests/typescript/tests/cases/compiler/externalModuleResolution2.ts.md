__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 31
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 34,
                    "end": 35
                  },
                  "definite": false,
                  "start": 30,
                  "end": 35
                }
              ],
              "declare": false,
              "start": 26,
              "end": 36
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 36
          }
        ],
        "start": 13,
        "end": 38
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 50
      },
      "start": 39,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
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
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      },
                      "start": 39,
                      "end": 46
                    },
                    "start": 38,
                    "end": 46
                  },
                  "init": null,
                  "definite": false,
                  "start": 38,
                  "end": 46
                }
              ],
              "declare": false,
              "start": 34,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 47
          }
        ],
        "start": 21,
        "end": 49
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 61
      },
      "start": 50,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
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
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo",
          "raw": "'./foo'",
          "start": 19,
          "end": 26
        },
        "start": 11,
        "end": 27
      },
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 30
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 32
        },
        "optional": false,
        "computed": false,
        "start": 29,
        "end": 32
      },
      "directive": null,
      "start": 29,
      "end": 32
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
