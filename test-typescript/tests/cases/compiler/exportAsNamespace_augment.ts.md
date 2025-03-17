__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 30,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 40,
              "end": 41,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 69,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 50,
        "end": 69,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 68,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 64,
              "decorators": [],
              "name": "conflict",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 67,
              "end": 68,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 280,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 28,
      "end": 133,
      "body": {
        "type": "TSModuleBlock",
        "start": 43,
        "end": 133,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 49,
            "end": 131,
            "body": {
              "type": "TSModuleBlock",
              "start": 61,
              "end": 131,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 71,
                  "end": 90,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 78,
                    "end": 90,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 84,
                        "end": 89,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 85,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 88,
                          "end": 89,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 99,
                  "end": 125,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 106,
                    "end": 125,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 112,
                        "end": 124,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 120,
                          "decorators": [],
                          "name": "conflict",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 123,
                          "end": 124,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 42,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 135,
      "end": 214,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 156,
        "end": 214,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 181,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 169,
              "end": 181,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 175,
                  "end": 180,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 179,
                    "end": 180,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 186,
            "end": 212,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 193,
              "end": 212,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 199,
                  "end": 211,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 207,
                    "decorators": [],
                    "name": "conflict",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 210,
                    "end": 211,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 150,
        "end": 155,
        "raw": "\"./a\"",
        "value": "./a"
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 245,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 216,
        "end": 244,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 216,
          "end": 231,
          "operator": "+",
          "left": {
            "type": "BinaryExpression",
            "start": 216,
            "end": 225,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 216,
              "end": 219,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 222,
              "end": 225,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 228,
            "end": 231,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 234,
          "end": 244,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 236,
            "end": 244,
            "decorators": [],
            "name": "conflict",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 279,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 246,
        "end": 278,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 246,
          "end": 264,
          "operator": "+",
          "left": {
            "type": "BinaryExpression",
            "start": 246,
            "end": 257,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 246,
              "end": 250,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 246,
                "end": 248,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 253,
              "end": 257,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 253,
                "end": 255,
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 260,
            "end": 264,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 260,
              "end": 262,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 267,
          "end": 278,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 278,
            "decorators": [],
            "name": "conflict",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
