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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 19,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 19,
              "value": 42,
              "raw": "42"
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 34,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "value": 42,
                "raw": "42"
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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 42,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "name": "M2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 42,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 20,
              "end": 40,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 27,
                "end": 40,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 31,
                    "end": 39,
                    "id": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 35,
                      "end": 39,
                      "value": true,
                      "raw": "true"
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
        "name": "foo0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 33,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 32,
          "value": "../foo_0",
          "raw": "'../foo_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 49,
        "end": 72,
        "expression": {
          "type": "Literal",
          "start": 57,
          "end": 71,
          "value": "./test/foo_1",
          "raw": "'./test/foo_1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 74,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 85,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 88,
        "end": 116,
        "expression": {
          "type": "Literal",
          "start": 96,
          "end": 115,
          "value": "./.././test/foo_2",
          "raw": "'./.././test/foo_2'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 119,
      "end": 165,
      "test": {
        "type": "MemberExpression",
        "start": 122,
        "end": 131,
        "object": {
          "type": "MemberExpression",
          "start": 122,
          "end": 129,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "name": "M2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 130,
          "end": 131,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 143,
                  "end": 162,
                  "left": {
                    "type": "MemberExpression",
                    "start": 143,
                    "end": 151,
                    "object": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 147,
                      "name": "foo0",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 151,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "start": 154,
                    "end": 162,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 154,
                      "end": 160,
                      "object": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 158,
                        "name": "foo1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
