__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 204,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 103,
      "id": {
        "type": "TSQualifiedName",
        "start": 8,
        "end": 13,
        "left": {
          "type": "TSQualifiedName",
          "start": 8,
          "end": 11,
          "left": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 10,
            "end": 11,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 103,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 17,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "name": "XYZ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 30,
              "end": 35,
              "left": {
                "type": "TSQualifiedName",
                "start": 30,
                "end": 33,
                "left": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 101,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 45,
              "end": 101,
              "id": {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "name": "ping",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 68,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 60,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 62,
                      "end": 68
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 101,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 74,
                    "end": 98,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 78,
                      "end": 81,
                      "left": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 79,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 80,
                        "end": 81,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 83,
                      "end": 98,
                      "expression": {
                        "type": "CallExpression",
                        "start": 83,
                        "end": 97,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 83,
                          "end": 91,
                          "object": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 86,
                            "name": "XYZ",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 91,
                            "name": "pong",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 93,
                            "end": 96,
                            "left": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "-",
                            "right": {
                              "type": "Literal",
                              "start": 95,
                              "end": 96,
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    "alternate": null
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 105,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 204,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 117,
            "end": 136,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "name": "ABC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 130,
              "end": 135,
              "left": {
                "type": "TSQualifiedName",
                "start": 130,
                "end": 133,
                "left": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 138,
            "end": 202,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 145,
              "end": 202,
              "id": {
                "type": "Identifier",
                "start": 154,
                "end": 158,
                "name": "pong",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 159,
                  "end": 168,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 162,
                      "end": 168
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 202,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 174,
                    "end": 199,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 178,
                      "end": 183,
                      "left": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "start": 182,
                        "end": 183,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 185,
                      "end": 199,
                      "expression": {
                        "type": "CallExpression",
                        "start": 185,
                        "end": 198,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 185,
                          "end": 193,
                          "object": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 188,
                            "name": "ABC",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 193,
                            "name": "ping",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 194,
                            "end": 197,
                            "left": {
                              "type": "Identifier",
                              "start": 194,
                              "end": 195,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "-",
                            "right": {
                              "type": "Literal",
                              "start": 196,
                              "end": 197,
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    "alternate": null
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
