__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                "expression": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 106,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 89,
        "end": 106,
        "id": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 100,
          "end": 105,
          "left": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 102,
            "end": 105,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 131,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 131,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 118,
            "end": 130,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 122,
              "decorators": [],
              "name": "bVal",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 125,
              "end": 130,
              "callee": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 127,
                  "end": 129,
                  "value": 10,
                  "raw": "10"
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 132,
      "end": 153,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 139,
        "end": 153,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 143,
            "end": 152,
            "id": {
              "type": "Identifier",
              "start": 143,
              "end": 148,
              "decorators": [],
              "name": "bVal2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
