__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "red",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 12,
            "end": 15
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "green",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 22
            },
            "initializer": null,
            "computed": false,
            "start": 17,
            "end": 22
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 28
            },
            "initializer": null,
            "computed": false,
            "start": 24,
            "end": 28
          }
        ],
        "start": 9,
        "end": 30
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 44
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
                    "name": "answer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 65
                  },
                  "init": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 68,
                    "end": 70
                  },
                  "definite": false,
                  "start": 59,
                  "end": 70
                }
              ],
              "declare": false,
              "start": 55,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 48,
            "end": 71
          }
        ],
        "start": 45,
        "end": 73
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 31,
      "end": 73
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 86
      },
      "start": 74,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_0",
          "raw": "\"./foo_0\"",
          "start": 21,
          "end": 30
        },
        "start": 13,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "color",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 47
                },
                "typeArguments": null,
                "start": 44,
                "end": 47
              },
              "start": 42,
              "end": 47
            },
            "start": 37,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 47
        }
      ],
      "declare": false,
      "start": 33,
      "end": 48
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "color",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 57
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 65
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "green",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 62,
          "end": 71
        },
        "start": 52,
        "end": 71
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "color",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 80
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 86
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 93
                },
                "optional": false,
                "computed": false,
                "start": 83,
                "end": 93
              },
              "start": 75,
              "end": 93
            },
            "directive": null,
            "start": 75,
            "end": 94
          }
        ],
        "start": 72,
        "end": 96
      },
      "alternate": null,
      "start": 49,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
