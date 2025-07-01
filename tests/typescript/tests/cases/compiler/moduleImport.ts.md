__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "start": 7,
          "end": 10
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 12
        },
        "start": 7,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "XYZ",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 26
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 30
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 32
                },
                "start": 29,
                "end": 32
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "start": 29,
              "end": 34
            },
            "importKind": "value",
            "start": 16,
            "end": 35
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ping",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 57
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
                    },
                    "start": 59,
                    "end": 67
                  },
                  "start": 58,
                  "end": 67
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 79,
                        "end": 80
                      },
                      "start": 77,
                      "end": 80
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "XYZ",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 82,
                            "end": 85
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pong",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 86,
                            "end": 90
                          },
                          "optional": false,
                          "computed": false,
                          "start": 82,
                          "end": 90
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 92,
                              "end": 93
                            },
                            "operator": "-",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 94,
                              "end": 95
                            },
                            "start": 92,
                            "end": 95
                          }
                        ],
                        "optional": false,
                        "start": 82,
                        "end": 96
                      },
                      "directive": null,
                      "start": 82,
                      "end": 97
                    },
                    "alternate": null,
                    "start": 73,
                    "end": 97
                  }
                ],
                "start": 69,
                "end": 100
              },
              "expression": false,
              "start": 44,
              "end": 100
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 37,
            "end": 100
          }
        ],
        "start": 13,
        "end": 102
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 102
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 126
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 130
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "start": 129,
                "end": 132
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "start": 129,
              "end": 134
            },
            "importKind": "value",
            "start": 116,
            "end": 135
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "pong",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 157
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 161,
                      "end": 167
                    },
                    "start": 159,
                    "end": 167
                  },
                  "start": 158,
                  "end": 167
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 178
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 181,
                        "end": 182
                      },
                      "start": 177,
                      "end": 182
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ABC",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 184,
                            "end": 187
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ping",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 188,
                            "end": 192
                          },
                          "optional": false,
                          "computed": false,
                          "start": 184,
                          "end": 192
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 193,
                              "end": 194
                            },
                            "operator": "-",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 195,
                              "end": 196
                            },
                            "start": 193,
                            "end": 196
                          }
                        ],
                        "optional": false,
                        "start": 184,
                        "end": 197
                      },
                      "directive": null,
                      "start": 184,
                      "end": 198
                    },
                    "alternate": null,
                    "start": 173,
                    "end": 198
                  }
                ],
                "start": 169,
                "end": 201
              },
              "expression": false,
              "start": 144,
              "end": 201
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 137,
            "end": 201
          }
        ],
        "start": 113,
        "end": 203
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 104,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
