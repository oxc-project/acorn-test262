__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 246,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 246,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 24,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 24,
              "end": 41,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 39,
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 31,
                      "end": 39,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 50,
              "end": 67,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 65,
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 57,
                      "end": 65,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 77,
                  "end": 88,
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 83,
                      "end": 88,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 83,
                        "end": 86
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 244,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 106,
              "decorators": [],
              "name": "callTest",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 244,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 244,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 143,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 142,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 129,
                          "end": 141,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 130,
                              "end": 131,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 133,
                              "end": 134,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 136,
                              "end": 137,
                              "raw": "3",
                              "value": 3,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 139,
                              "end": 140,
                              "raw": "5",
                              "value": 5,
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 119,
                        "end": 128,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 119,
                          "end": 123
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 128,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 152,
                    "end": 170,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 152,
                      "end": 169,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 162,
                          "end": 168,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 163,
                              "end": 167,
                              "raw": "\"hi\"",
                              "value": "hi",
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 152,
                        "end": 161,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 152,
                          "end": 156
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 161,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 179,
                    "end": 193,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 179,
                      "end": 192,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 189,
                          "end": 191,
                          "elements": []
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 179,
                        "end": 188,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 179,
                          "end": 183
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 188,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 202,
                    "end": 229,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 202,
                      "end": 228,
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "start": 212,
                          "end": 227,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 213,
                              "end": 214,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 216,
                              "end": 217,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 219,
                              "end": 223,
                              "raw": "\"hi\"",
                              "value": "hi",
                              "regex": null,
                              "bigint": null
                            },
                            {
                              "type": "Literal",
                              "start": 225,
                              "end": 226,
                              "raw": "5",
                              "value": 5,
                              "regex": null,
                              "bigint": null
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 202,
                        "end": 211,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 202,
                          "end": 206
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 211,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "arrTest",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
