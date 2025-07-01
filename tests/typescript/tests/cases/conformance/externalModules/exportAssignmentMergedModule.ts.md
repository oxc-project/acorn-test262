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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
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
                      "value": 5,
                      "raw": "5",
                      "start": 44,
                      "end": 45
                    },
                    "start": 37,
                    "end": 46
                  }
                ],
                "start": 33,
                "end": 49
              },
              "expression": false,
              "start": 21,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 14,
            "end": 49
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "init": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 66,
                    "end": 70
                  },
                  "definite": false,
                  "start": 62,
                  "end": 70
                }
              ],
              "declare": false,
              "start": 58,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 71
          }
        ],
        "start": 11,
        "end": 73
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 84
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
                  },
                  "start": 106,
                  "end": 115
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "start": 120,
                    "end": 129
                  }
                ],
                "start": 116,
                "end": 132
              },
              "expression": false,
              "start": 95,
              "end": 132
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 88,
            "end": 132
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 152
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
                            "name": "answer",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 168,
                            "end": 174
                          },
                          "init": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 177,
                            "end": 179
                          },
                          "definite": false,
                          "start": 168,
                          "end": 179
                        }
                      ],
                      "declare": false,
                      "start": 164,
                      "end": 180
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 157,
                    "end": 180
                  }
                ],
                "start": 153,
                "end": 183
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 141,
              "end": 183
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 134,
            "end": 183
          }
        ],
        "start": 85,
        "end": 185
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 74,
      "end": 185
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 198
      },
      "start": 186,
      "end": 199
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 200
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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_0",
          "raw": "\"./foo_0\"",
          "start": 21,
          "end": 30
        },
        "start": 13,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "start": 37,
            "end": 46
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 52
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 49,
            "end": 56
          },
          "definite": false,
          "start": 37,
          "end": 56
        }
      ],
      "declare": false,
      "start": 33,
      "end": 57
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 66
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "optional": false,
            "computed": false,
            "start": 63,
            "end": 68
          },
          "prefix": true,
          "start": 62,
          "end": 68
        },
        "prefix": true,
        "start": 61,
        "end": 68
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 75
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 80
                  },
                  "optional": false,
                  "computed": false,
                  "start": 72,
                  "end": 80
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 87
                },
                "optional": false,
                "computed": false,
                "start": 72,
                "end": 87
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 93
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  },
                  "optional": false,
                  "computed": false,
                  "start": 90,
                  "end": 95
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 96,
                    "end": 98
                  }
                ],
                "optional": false,
                "start": 90,
                "end": 99
              },
              "start": 72,
              "end": 99
            },
            "directive": null,
            "start": 72,
            "end": 100
          }
        ],
        "start": 69,
        "end": 102
      },
      "alternate": null,
      "start": 58,
      "end": 102
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
