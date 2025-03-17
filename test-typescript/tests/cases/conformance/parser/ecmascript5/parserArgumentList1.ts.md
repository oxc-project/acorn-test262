__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 276,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 276,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 276,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 65,
          "end": 276,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 68,
              "end": 274,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 68,
                "end": 273,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 68,
                  "end": 82,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 72,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 82,
                    "decorators": [],
                    "name": "className",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "start": 85,
                  "end": 273,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 135,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 125,
                          "end": 134,
                          "decorators": [],
                          "name": "className",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 124,
                        "decorators": [],
                        "name": "_classNameRegexp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "FunctionExpression",
                      "start": 137,
                      "end": 272,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 196,
                        "end": 272,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 200,
                            "end": 269,
                            "argument": {
                              "type": "ConditionalExpression",
                              "start": 207,
                              "end": 268,
                              "alternate": {
                                "type": "Literal",
                                "start": 266,
                                "end": 268,
                                "raw": "''",
                                "value": ""
                              },
                              "consequent": {
                                "type": "Literal",
                                "start": 260,
                                "end": 263,
                                "raw": "' '",
                                "value": " "
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 207,
                                "end": 257,
                                "operator": "===",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 207,
                                  "end": 251,
                                  "operator": "+",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 207,
                                    "end": 227,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 207,
                                      "end": 220,
                                      "decorators": [],
                                      "name": "leftDelimiter",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 221,
                                      "end": 227,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 230,
                                    "end": 251,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 230,
                                      "end": 244,
                                      "decorators": [],
                                      "name": "rightDelimiter",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 245,
                                      "end": 251,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 256,
                                  "end": 257,
                                  "raw": "2",
                                  "value": 2
                                }
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 147,
                          "end": 157,
                          "decorators": [],
                          "name": "everything",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 159,
                          "end": 172,
                          "decorators": [],
                          "name": "leftDelimiter",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 174,
                          "end": 178,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 180,
                          "end": 194,
                          "decorators": [],
                          "name": "rightDelimiter",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 107,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 99,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 89,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 99,
                        "decorators": [],
                        "name": "className",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 107,
                      "decorators": [],
                      "name": "replace",
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
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 27,
          "decorators": [],
          "name": "removeClass",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 29,
            "end": 45,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 45,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 45,
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 47,
            "end": 63,
            "decorators": [],
            "name": "className",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
