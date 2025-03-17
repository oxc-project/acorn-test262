__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 80,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 80,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 80,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 78,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 29,
                "end": 78,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 42,
                    "end": 51,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 51,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 82,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 93,
        "end": 98,
        "left": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 95,
          "end": 98,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 124,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 107,
        "end": 124,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 111,
            "end": 123,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "name": "bVal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 118,
              "end": 123,
              "callee": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 120,
                  "end": 122,
                  "value": 10,
                  "raw": "10"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 125,
      "end": 146,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 132,
        "end": 146,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 136,
            "end": 145,
            "id": {
              "type": "Identifier",
              "start": 136,
              "end": 141,
              "name": "bVal2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
