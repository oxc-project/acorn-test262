__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 19,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 19,
              "raw": "42",
              "value": 42
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 34,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 19,
          "end": 34,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 22,
              "end": 32,
              "argument": {
                "type": "Literal",
                "start": 29,
                "end": 31,
                "raw": "42",
                "value": 42
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": []
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 42,
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 42,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 20,
              "end": 40,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 27,
                "end": 40,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 31,
                    "end": 39,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 35,
                      "end": 39,
                      "raw": "true",
                      "value": true
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
          "start": 14,
          "end": 16,
          "decorators": [],
          "name": "M2",
          "optional": false
        },
        "kind": "module"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo0",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 33,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 32,
          "raw": "'../foo_0'",
          "value": "../foo_0"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 49,
        "end": 72,
        "expression": {
          "type": "Literal",
          "start": 57,
          "end": 71,
          "raw": "'./test/foo_1'",
          "value": "./test/foo_1"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 74,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 85,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 88,
        "end": 116,
        "expression": {
          "type": "Literal",
          "start": 96,
          "end": 115,
          "raw": "'./.././test/foo_2'",
          "value": "./.././test/foo_2"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 119,
      "end": 165,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 132,
        "end": 165,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 135,
            "end": 163,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 162,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 143,
                  "end": 162,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 143,
                    "end": 151,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 147,
                      "decorators": [],
                      "name": "foo0",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 151,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 154,
                    "end": 162,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 154,
                      "end": 160,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 158,
                        "decorators": [],
                        "name": "foo1",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "decorators": [],
                        "name": "f",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "MemberExpression",
        "start": 122,
        "end": 131,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 122,
          "end": 129,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "decorators": [],
            "name": "foo2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "M2",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 130,
          "end": 131,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
