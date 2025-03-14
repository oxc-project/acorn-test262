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
              "decorators": [],
              "name": "XYZ",
              "optional": false
            },
            "importKind": "value",
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
                  "decorators": [],
                  "name": "X",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "Z",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 101,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 45,
              "end": 101,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 101,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 74,
                    "end": 98,
                    "alternate": null,
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 83,
                      "end": 98,
                      "expression": {
                        "type": "CallExpression",
                        "start": 83,
                        "end": 97,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 93,
                            "end": 96,
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 95,
                              "end": 96,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 83,
                          "end": 91,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 86,
                            "decorators": [],
                            "name": "XYZ",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 91,
                            "decorators": [],
                            "name": "pong",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 78,
                      "end": 81,
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "start": 78,
                        "end": 79,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 80,
                        "end": 81,
                        "raw": "0",
                        "value": 0
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
                "start": 54,
                "end": 58,
                "decorators": [],
                "name": "ping",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 68,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 60,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 62,
                      "end": 68
                    }
                  }
                }
              ]
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
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 10,
            "end": 11,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 105,
      "end": 204,
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
              "decorators": [],
              "name": "ABC",
              "optional": false
            },
            "importKind": "value",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 138,
            "end": 202,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 145,
              "end": 202,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 202,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 174,
                    "end": 199,
                    "alternate": null,
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 185,
                      "end": 199,
                      "expression": {
                        "type": "CallExpression",
                        "start": 185,
                        "end": 198,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "start": 194,
                            "end": 197,
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "start": 194,
                              "end": 195,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 196,
                              "end": 197,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 185,
                          "end": 193,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 188,
                            "decorators": [],
                            "name": "ABC",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 193,
                            "decorators": [],
                            "name": "ping",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 178,
                      "end": 183,
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 179,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 182,
                        "end": 183,
                        "raw": "0",
                        "value": 0
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
                "start": 154,
                "end": 158,
                "decorators": [],
                "name": "pong",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 159,
                  "end": 168,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 162,
                      "end": 168
                    }
                  }
                }
              ]
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
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
