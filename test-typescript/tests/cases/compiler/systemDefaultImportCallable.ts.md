__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 101,
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 99,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 98,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 98,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 38,
                      "end": 98,
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "start": 48,
                          "end": 92,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 48,
                            "end": 54,
                            "decorators": [],
                            "name": "repeat",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 55,
                              "end": 67,
                              "decorators": [],
                              "name": "text",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 59,
                                "end": 67,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 61,
                                  "end": 67
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 69,
                              "end": 82,
                              "decorators": [],
                              "name": "count",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 74,
                                "end": 82,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 76,
                                  "end": 82
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 83,
                            "end": 91,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 85,
                              "end": 91
                            }
                          },
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "core",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 102,
      "end": 217,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 144,
        "end": 217,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 150,
            "end": 188,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 187,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 187,
                  "decorators": [],
                  "name": "repeat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 162,
                      "end": 187,
                      "exprName": {
                        "type": "TSQualifiedName",
                        "start": 169,
                        "end": 187,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 169,
                          "end": 180,
                          "left": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 173,
                            "decorators": [],
                            "name": "core",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 180,
                            "decorators": [],
                            "name": "String",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 187,
                          "decorators": [],
                          "name": "repeat",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 193,
            "end": 215,
            "declaration": {
              "type": "Identifier",
              "start": 208,
              "end": 214,
              "decorators": [],
              "name": "repeat",
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 117,
        "end": 143,
        "raw": "\"core-js/fn/string/repeat\"",
        "value": "core-js/fn/string/repeat"
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
  "end": 108,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 45,
        "raw": "\"core-js/fn/string/repeat\"",
        "value": "core-js/fn/string/repeat"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "decorators": [],
            "name": "repeat",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 63,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 66,
            "end": 107,
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 73,
                "end": 103,
                "operator": "+",
                "left": {
                  "type": "CallExpression",
                  "start": 73,
                  "end": 97,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 73,
                    "end": 95,
                    "computed": false,
                    "object": {
                      "type": "NewExpression",
                      "start": 73,
                      "end": 83,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 81,
                        "decorators": [],
                        "name": "Date",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 95,
                      "decorators": [],
                      "name": "toUTCString",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 100,
                  "end": 103,
                  "raw": "\" \"",
                  "value": " "
                }
              },
              {
                "type": "Literal",
                "start": 105,
                "end": 106,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 66,
              "end": 72,
              "decorators": [],
              "name": "repeat",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
