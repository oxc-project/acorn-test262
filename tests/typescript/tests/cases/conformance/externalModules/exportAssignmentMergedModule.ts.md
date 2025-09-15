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
        "start": 10,
        "end": 13
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
                "start": 33,
                "end": 34
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
                      "start": 47,
                      "end": 48
                    },
                    "start": 40,
                    "end": 49
                  }
                ],
                "start": 36,
                "end": 52
              },
              "expression": false,
              "start": 24,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 52
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
                    "start": 65,
                    "end": 66
                  },
                  "init": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 69,
                    "end": 73
                  },
                  "definite": false,
                  "start": 65,
                  "end": 73
                }
              ],
              "declare": false,
              "start": 61,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 54,
            "end": 74
          }
        ],
        "start": 14,
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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 90
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
                "start": 110,
                "end": 111
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
                      "start": 115,
                      "end": 121
                    },
                    "start": 113,
                    "end": 121
                  },
                  "start": 112,
                  "end": 121
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
                      "start": 133,
                      "end": 134
                    },
                    "start": 126,
                    "end": 135
                  }
                ],
                "start": 122,
                "end": 138
              },
              "expression": false,
              "start": 101,
              "end": 138
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 94,
            "end": 138
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
                "start": 157,
                "end": 161
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
                            "start": 177,
                            "end": 183
                          },
                          "init": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 186,
                            "end": 188
                          },
                          "definite": false,
                          "start": 177,
                          "end": 188
                        }
                      ],
                      "declare": false,
                      "start": 173,
                      "end": 189
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 166,
                    "end": 189
                  }
                ],
                "start": 162,
                "end": 192
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 147,
              "end": 192
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 140,
            "end": 192
          }
        ],
        "start": 91,
        "end": 194
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 77,
      "end": 194
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 207
      },
      "start": 195,
      "end": 208
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 209
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
