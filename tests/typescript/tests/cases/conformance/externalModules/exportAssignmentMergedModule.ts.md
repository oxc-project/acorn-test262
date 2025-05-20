__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 73,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 73,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 49,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 21,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 49,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 37,
                    "end": 46,
                    "argument": {
                      "type": "Literal",
                      "start": 44,
                      "end": 45,
                      "raw": "5",
                      "value": 5
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 71,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 58,
              "end": 71,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 62,
                  "end": 70,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 66,
                    "end": 70,
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
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 74,
      "end": 185,
      "body": {
        "type": "TSModuleBlock",
        "start": 85,
        "end": 185,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 88,
            "end": 132,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 95,
              "end": 132,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 132,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 120,
                    "end": 129,
                    "argument": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "a",
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
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 115,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 134,
            "end": 183,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 141,
              "end": 183,
              "body": {
                "type": "TSModuleBlock",
                "start": 153,
                "end": 183,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 157,
                    "end": 180,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 164,
                      "end": 180,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 168,
                          "end": 179,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 174,
                            "decorators": [],
                            "name": "answer",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 177,
                            "end": 179,
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
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 152,
                "decorators": [],
                "name": "Test",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
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
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 186,
      "end": 199,
      "expression": {
        "type": "Identifier",
        "start": 195,
        "end": 198,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 102,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 49,
            "end": 56,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 49,
              "end": 54,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 58,
      "end": 102,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 69,
        "end": 102,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 100,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 72,
              "end": 99,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 72,
                "end": 87,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 72,
                  "end": 80,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 75,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 80,
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 87,
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 90,
                "end": 99,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 96,
                    "end": 98,
                    "raw": "42",
                    "value": 42
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 90,
                  "end": 95,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 93,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 61,
        "end": 68,
        "argument": {
          "type": "UnaryExpression",
          "start": 62,
          "end": 68,
          "argument": {
            "type": "MemberExpression",
            "start": 63,
            "end": 68,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "operator": "!",
          "prefix": true
        },
        "operator": "!",
        "prefix": true
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
