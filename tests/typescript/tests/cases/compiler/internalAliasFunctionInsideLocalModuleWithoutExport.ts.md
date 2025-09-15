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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 103
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 122
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 126
                },
                "start": 121,
                "end": 126
              },
              "importKind": "value",
              "start": 110,
              "end": 127
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
                    "name": "bVal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 140
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 144
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 145,
                        "end": 147
                      }
                    ],
                    "optional": false,
                    "start": 143,
                    "end": 148
                  },
                  "definite": false,
                  "start": 136,
                  "end": 148
                }
              ],
              "declare": false,
              "start": 132,
              "end": 149
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
                      "start": 165,
                      "end": 170
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 174
                    },
                    "definite": false,
                    "start": 165,
                    "end": 174
                  }
                ],
                "declare": false,
                "start": 161,
                "end": 175
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 154,
              "end": 175
            }
          ],
          "start": 104,
          "end": 177
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 92,
        "end": 177
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 85,
      "end": 177
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 177
}
```
