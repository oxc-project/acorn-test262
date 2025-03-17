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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 276,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 27,
          "name": "removeClass",
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
            "start": 29,
            "end": 45,
            "name": "node",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 34,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 45,
                  "name": "HTMLElement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 47,
            "end": 63,
            "name": "className",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 65,
          "end": 276,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 68,
              "end": 274,
              "expression": {
                "type": "AssignmentExpression",
                "start": 68,
                "end": 273,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 68,
                  "end": 82,
                  "object": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 72,
                    "name": "node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 82,
                    "name": "className",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 85,
                  "end": 273,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 107,
                    "object": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 99,
                      "object": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 89,
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 99,
                        "name": "className",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 107,
                      "name": "replace",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 135,
                      "callee": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 124,
                        "name": "_classNameRegexp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 125,
                          "end": 134,
                          "name": "className",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "FunctionExpression",
                      "start": 137,
                      "end": 272,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 147,
                          "end": 157,
                          "name": "everything",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 159,
                          "end": 172,
                          "name": "leftDelimiter",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 174,
                          "end": 178,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 180,
                          "end": 194,
                          "name": "rightDelimiter",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "test": {
                                "type": "BinaryExpression",
                                "start": 207,
                                "end": 257,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 207,
                                  "end": 251,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 207,
                                    "end": 227,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 207,
                                      "end": 220,
                                      "name": "leftDelimiter",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 221,
                                      "end": 227,
                                      "name": "length",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 230,
                                    "end": 251,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 230,
                                      "end": 244,
                                      "name": "rightDelimiter",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 245,
                                      "end": 251,
                                      "name": "length",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 256,
                                  "end": 257,
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "consequent": {
                                "type": "Literal",
                                "start": 260,
                                "end": 263,
                                "value": " ",
                                "raw": "' '"
                              },
                              "alternate": {
                                "type": "Literal",
                                "start": 266,
                                "end": 268,
                                "value": "",
                                "raw": "''"
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "directive": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
