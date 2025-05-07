__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 278,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 24,
              "name": "prop"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 41,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 29,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 36,
                      "end": 38,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 74,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 50,
              "end": 55,
              "name": "prop"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 74,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 74,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 69,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 63,
                      "end": 69
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
            "start": 80,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 84,
              "end": 91,
              "name": "roProp"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 96,
                    "end": 106,
                    "argument": {
                      "type": "Literal",
                      "start": 103,
                      "end": 105,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 276,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 276,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 276,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 166,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 150,
                      "end": 165,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 160,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 150,
                          "end": 154
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 155,
                          "end": 160,
                          "name": "prop"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 163,
                        "end": 165,
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 193,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 175,
                      "end": 192,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 175,
                        "end": 187,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 175,
                          "end": 179
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 180,
                          "end": 187,
                          "name": "roProp"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 190,
                        "end": 192,
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 211,
                    "end": 235,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 211,
                      "end": 234,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 223,
                          "end": 233,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 223,
                            "end": 227
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 228,
                            "end": 233,
                            "name": "prop"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 211,
                        "end": 222,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 218,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 222,
                          "decorators": [],
                          "name": "log",
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
                    "start": 244,
                    "end": 270,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 244,
                      "end": 269,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 256,
                          "end": 268,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 256,
                            "end": 260
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 261,
                            "end": 268,
                            "name": "roProp"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 244,
                        "end": 255,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 251,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 255,
                          "decorators": [],
                          "name": "log",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 126,
                  "end": 138,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 132,
                      "end": 138
                    }
                  }
                }
              ],
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
        "end": 8,
        "decorators": [],
        "name": "A1",
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
