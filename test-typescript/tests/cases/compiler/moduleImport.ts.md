__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 102,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 102,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 16,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "XYZ",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 29,
              "end": 34,
              "left": {
                "type": "TSQualifiedName",
                "start": 29,
                "end": 32,
                "left": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 100,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 44,
              "end": 100,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 100,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 73,
                    "end": 97,
                    "alternate": null,
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 82,
                      "end": 97,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 82,
                        "end": 96,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 92,
                            "end": 95,
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 93,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 94,
                              "end": 95,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 82,
                          "end": 90,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 82,
                            "end": 85,
                            "decorators": [],
                            "name": "XYZ",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 86,
                            "end": 90,
                            "decorators": [],
                            "name": "pong",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 77,
                      "end": 80,
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 79,
                        "end": 80,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 53,
                "end": 57,
                "decorators": [],
                "name": "ping",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 67,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 61,
                      "end": 67
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 12,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 10,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 104,
      "end": 203,
      "body": {
        "type": "TSModuleBlock",
        "start": 113,
        "end": 203,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 116,
            "end": 135,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 129,
              "end": 134,
              "left": {
                "type": "TSQualifiedName",
                "start": 129,
                "end": 132,
                "left": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 137,
            "end": 201,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 144,
              "end": 201,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 169,
                "end": 201,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 173,
                    "end": 198,
                    "alternate": null,
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 184,
                      "end": 198,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 184,
                        "end": 197,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 193,
                            "end": 196,
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 194,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 195,
                              "end": 196,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 184,
                          "end": 192,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 184,
                            "end": 187,
                            "decorators": [],
                            "name": "ABC",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 188,
                            "end": 192,
                            "decorators": [],
                            "name": "ping",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 177,
                      "end": 182,
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 181,
                        "end": 182,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 153,
                "end": 157,
                "decorators": [],
                "name": "pong",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 167,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 159,
                    "end": 167,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 161,
                      "end": 167
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
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
