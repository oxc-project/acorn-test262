__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 17,
              "end": 19
            },
            "definite": false,
            "start": 11,
            "end": 19
          }
        ],
        "declare": false,
        "start": 7,
        "end": 20
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 29,
                "end": 31
              },
              "start": 22,
              "end": 32
            }
          ],
          "start": 19,
          "end": 34
        },
        "expression": false,
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
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
          "name": "M2",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 35
                    },
                    "init": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 38,
                      "end": 42
                    },
                    "definite": false,
                    "start": 34,
                    "end": 42
                  }
                ],
                "declare": false,
                "start": 30,
                "end": 43
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 23,
              "end": 43
            }
          ],
          "start": 20,
          "end": 45
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
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
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "../foo_0",
          "raw": "'../foo_0'",
          "start": 22,
          "end": 32
        },
        "start": 14,
        "end": 33
      },
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 46
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./test/foo_1",
          "raw": "'./test/foo_1'",
          "start": 57,
          "end": 71
        },
        "start": 49,
        "end": 72
      },
      "importKind": "value",
      "start": 35,
      "end": 73
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 85
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./.././test/foo_2",
          "raw": "'./.././test/foo_2'",
          "start": 96,
          "end": 115
        },
        "start": 88,
        "end": 116
      },
      "importKind": "value",
      "start": 74,
      "end": 117
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 126
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 129
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 129
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 131
        },
        "optional": false,
        "computed": false,
        "start": 122,
        "end": 131
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 147
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 151
                    },
                    "optional": false,
                    "computed": false,
                    "start": 143,
                    "end": 151
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 158
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "optional": false,
                      "computed": false,
                      "start": 154,
                      "end": 160
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 154,
                    "end": 162
                  },
                  "start": 143,
                  "end": 162
                },
                "definite": false,
                "start": 139,
                "end": 162
              }
            ],
            "declare": false,
            "start": 135,
            "end": 163
          }
        ],
        "start": 132,
        "end": 165
      },
      "alternate": null,
      "start": 119,
      "end": 165
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 165
}
```
