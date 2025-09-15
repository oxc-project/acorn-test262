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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "start": 34,
                "end": 37
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
                      "start": 41,
                      "end": 47
                    },
                    "start": 39,
                    "end": 47
                  },
                  "start": 38,
                  "end": 47
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
                      "start": 66,
                      "end": 67
                    },
                    "start": 59,
                    "end": 68
                  }
                ],
                "start": 49,
                "end": 74
              },
              "expression": false,
              "start": 25,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 74
          }
        ],
        "start": 12,
        "end": 76
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 76
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 89
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
              "start": 103,
              "end": 104
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 112
              },
              "start": 107,
              "end": 112
            },
            "importKind": "value",
            "start": 96,
            "end": 113
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
                    "start": 129,
                    "end": 133
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 137
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 138,
                        "end": 140
                      }
                    ],
                    "optional": false,
                    "start": 136,
                    "end": 141
                  },
                  "definite": false,
                  "start": 129,
                  "end": 141
                }
              ],
              "declare": false,
              "start": 125,
              "end": 142
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 142
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
                    "start": 158,
                    "end": 163
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 167
                  },
                  "definite": false,
                  "start": 158,
                  "end": 167
                }
              ],
              "declare": false,
              "start": 154,
              "end": 168
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 147,
            "end": 168
          }
        ],
        "start": 90,
        "end": 170
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 78,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
