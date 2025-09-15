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
            "start": 10,
            "end": 11
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 10,
          "end": 13
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "start": 10,
        "end": 15
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
              "start": 26,
              "end": 29
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
                  "start": 32,
                  "end": 33
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "start": 32,
                "end": 35
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              "start": 32,
              "end": 37
            },
            "importKind": "value",
            "start": 19,
            "end": 38
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
                "start": 56,
                "end": 60
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
                      "start": 64,
                      "end": 70
                    },
                    "start": 62,
                    "end": 70
                  },
                  "start": 61,
                  "end": 70
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
                        "start": 80,
                        "end": 81
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 82,
                        "end": 83
                      },
                      "start": 80,
                      "end": 83
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
                            "start": 85,
                            "end": 88
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pong",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 93
                          },
                          "optional": false,
                          "computed": false,
                          "start": 85,
                          "end": 93
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
                              "start": 95,
                              "end": 96
                            },
                            "operator": "-",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 97,
                              "end": 98
                            },
                            "start": 95,
                            "end": 98
                          }
                        ],
                        "optional": false,
                        "start": 85,
                        "end": 99
                      },
                      "directive": null,
                      "start": 85,
                      "end": 100
                    },
                    "alternate": null,
                    "start": 76,
                    "end": 100
                  }
                ],
                "start": 72,
                "end": 103
              },
              "expression": false,
              "start": 47,
              "end": 103
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 40,
            "end": 103
          }
        ],
        "start": 16,
        "end": 105
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 105
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
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
              "start": 129,
              "end": 132
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
                  "start": 135,
                  "end": 136
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 138
                },
                "start": 135,
                "end": 138
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "start": 135,
              "end": 140
            },
            "importKind": "value",
            "start": 122,
            "end": 141
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
                "start": 159,
                "end": 163
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
                      "start": 167,
                      "end": 173
                    },
                    "start": 165,
                    "end": 173
                  },
                  "start": 164,
                  "end": 173
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
                        "start": 183,
                        "end": 184
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 187,
                        "end": 188
                      },
                      "start": 183,
                      "end": 188
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
                            "start": 190,
                            "end": 193
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ping",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 194,
                            "end": 198
                          },
                          "optional": false,
                          "computed": false,
                          "start": 190,
                          "end": 198
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
                              "start": 199,
                              "end": 200
                            },
                            "operator": "-",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 201,
                              "end": 202
                            },
                            "start": 199,
                            "end": 202
                          }
                        ],
                        "optional": false,
                        "start": 190,
                        "end": 203
                      },
                      "directive": null,
                      "start": 190,
                      "end": 204
                    },
                    "alternate": null,
                    "start": 179,
                    "end": 204
                  }
                ],
                "start": 175,
                "end": 207
              },
              "expression": false,
              "start": 150,
              "end": 207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 143,
            "end": 207
          }
        ],
        "start": 119,
        "end": 209
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 107,
      "end": 209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 209
}
```
