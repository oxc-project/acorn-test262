__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 73,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 73,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 71,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 56,
                    "end": 65,
                    "argument": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 44,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 38,
                      "end": 44
                    }
                  }
                }
              ]
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 164,
      "body": {
        "type": "TSModuleBlock",
        "start": 84,
        "end": 164,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 90,
            "end": 107,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 101,
              "end": 106,
              "left": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 136,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 119,
              "end": 136,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 123,
                  "end": 135,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 127,
                    "decorators": [],
                    "name": "bVal",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 130,
                    "end": 135,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 132,
                        "end": 134,
                        "raw": "10",
                        "value": 10
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false
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
            "start": 141,
            "end": 162,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 148,
              "end": 162,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 152,
                  "end": 161,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 157,
                    "decorators": [],
                    "name": "bVal2",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "b",
                    "optional": false
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
