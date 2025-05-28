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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 73,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 49,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 21,
              "end": 49,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 5,
                      "raw": "5"
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 71,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 58,
              "end": 71,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 62,
                  "end": 70,
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
                    "value": true,
                    "raw": "true"
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 74,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 85,
        "end": 185,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 88,
            "end": 132,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 95,
              "end": 132,
              "id": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "c",
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
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 134,
            "end": 183,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 141,
              "end": 183,
              "id": {
                "type": "Identifier",
                "start": 148,
                "end": 152,
                "decorators": [],
                "name": "Test",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 153,
                "end": 183,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 157,
                    "end": 180,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 164,
                      "end": 180,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 168,
                          "end": 179,
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
                            "value": 42,
                            "raw": "42"
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "value": "./foo_0",
          "raw": "\"./foo_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 57,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 56,
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
            "callee": {
              "type": "MemberExpression",
              "start": 49,
              "end": 54,
              "object": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 58,
      "end": 102,
      "test": {
        "type": "UnaryExpression",
        "start": 61,
        "end": 68,
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "start": 62,
          "end": 68,
          "operator": "!",
          "argument": {
            "type": "MemberExpression",
            "start": 63,
            "end": 68,
            "object": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "prefix": true
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 69,
        "end": 102,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 100,
            "expression": {
              "type": "AssignmentExpression",
              "start": 72,
              "end": 99,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 72,
                "end": 87,
                "object": {
                  "type": "MemberExpression",
                  "start": 72,
                  "end": 80,
                  "object": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 75,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 80,
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 87,
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "CallExpression",
                "start": 90,
                "end": 99,
                "callee": {
                  "type": "MemberExpression",
                  "start": 90,
                  "end": 95,
                  "object": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 93,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 96,
                    "end": 98,
                    "value": 42,
                    "raw": "42"
                  }
                ],
                "optional": false
              }
            },
            "directive": null
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
