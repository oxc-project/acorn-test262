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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 38,
                        "end": 44
                      },
                      "start": 36,
                      "end": 44
                    },
                    "start": 35,
                    "end": 44
                  },
                  "init": null,
                  "definite": false,
                  "start": 35,
                  "end": 44
                }
              ],
              "declare": false,
              "start": 31,
              "end": 45
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 45
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 69,
                  "end": 75
                },
                "start": 67,
                "end": 75
              },
              "body": null,
              "expression": false,
              "start": 55,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 48,
            "end": 76
          }
        ],
        "start": 21,
        "end": 78
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 90
      },
      "start": 79,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 92
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
          "value": "./foo1",
          "raw": "'./foo1'",
          "start": 22,
          "end": 30
        },
        "start": 14,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "start": 37,
            "end": 46
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 53
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 55
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 49,
            "end": 57
          },
          "definite": false,
          "start": 37,
          "end": 57
        }
      ],
      "declare": false,
      "start": 33,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
