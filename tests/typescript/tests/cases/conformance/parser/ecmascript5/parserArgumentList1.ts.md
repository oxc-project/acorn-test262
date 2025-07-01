__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "removeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 27
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 45
                },
                "typeArguments": null,
                "start": 34,
                "end": 45
              },
              "start": 33,
              "end": 45
            },
            "start": 29,
            "end": 45
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "className",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              },
              "start": 56,
              "end": 63
            },
            "start": 47,
            "end": 63
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 72
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "className",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 82
                  },
                  "optional": false,
                  "computed": false,
                  "start": 68,
                  "end": 82
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 89
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "className",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 90,
                        "end": 99
                      },
                      "optional": false,
                      "computed": false,
                      "start": 85,
                      "end": 99
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "replace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 107
                    },
                    "optional": false,
                    "computed": false,
                    "start": 85,
                    "end": 107
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_classNameRegexp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 124
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "className",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 134
                        }
                      ],
                      "optional": false,
                      "start": 108,
                      "end": 135
                    },
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "everything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 157
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "leftDelimiter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 172
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 178
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rightDelimiter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 194
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "leftDelimiter",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 207,
                                      "end": 220
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 221,
                                      "end": 227
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 207,
                                    "end": 227
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "rightDelimiter",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 230,
                                      "end": 244
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 245,
                                      "end": 251
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 230,
                                    "end": 251
                                  },
                                  "start": 207,
                                  "end": 251
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 256,
                                  "end": 257
                                },
                                "start": 207,
                                "end": 257
                              },
                              "consequent": {
                                "type": "Literal",
                                "value": " ",
                                "raw": "' '",
                                "start": 260,
                                "end": 263
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''",
                                "start": 266,
                                "end": 268
                              },
                              "start": 207,
                              "end": 268
                            },
                            "start": 200,
                            "end": 269
                          }
                        ],
                        "start": 196,
                        "end": 272
                      },
                      "expression": false,
                      "start": 137,
                      "end": 272
                    }
                  ],
                  "optional": false,
                  "start": 85,
                  "end": 273
                },
                "start": 68,
                "end": 273
              },
              "directive": null,
              "start": 68,
              "end": 274
            }
          ],
          "start": 65,
          "end": 276
        },
        "expression": false,
        "start": 7,
        "end": 276
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 276
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 276
}
```
