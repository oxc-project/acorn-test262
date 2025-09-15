__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 44
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 48,
                        "end": 54
                      },
                      "start": 46,
                      "end": 54
                    },
                    "start": 45,
                    "end": 54
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 74
                      },
                      "start": 66,
                      "end": 75
                    }
                  ],
                  "start": 56,
                  "end": 81
                },
                "expression": false,
                "start": 32,
                "end": 81
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 81
            }
          ],
          "start": 19,
          "end": 83
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 83
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 93
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 97
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 101
        },
        "start": 96,
        "end": 101
      },
      "importKind": "value",
      "start": 85,
      "end": 102
    },
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
              "name": "bVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 118
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 123,
                  "end": 125
                }
              ],
              "optional": false,
              "start": 121,
              "end": 126
            },
            "definite": false,
            "start": 114,
            "end": 126
          }
        ],
        "declare": false,
        "start": 110,
        "end": 127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 103,
      "end": 127
    },
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
              "name": "bVal2",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 144
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "definite": false,
            "start": 139,
            "end": 148
          }
        ],
        "declare": false,
        "start": 135,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 128,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
