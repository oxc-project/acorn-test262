__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 80,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 80,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 78,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 29,
                "end": 78,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 53,
                  "end": 78,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 63,
                      "end": 72,
                      "argument": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 42,
                    "end": 51,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
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
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 82,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 93,
        "end": 98,
        "left": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 95,
          "end": 98,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 124,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 107,
        "end": 124,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 111,
            "end": 123,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "decorators": [],
              "name": "bVal",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 118,
              "end": 123,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 120,
                  "end": 122,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 125,
      "end": 146,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 132,
        "end": 146,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 136,
            "end": 145,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "decorators": [],
              "name": "bVal2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
