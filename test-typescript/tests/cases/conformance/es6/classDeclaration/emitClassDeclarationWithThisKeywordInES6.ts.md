__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 236,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 236,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 20,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 68,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
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
              "start": 37,
              "end": 68,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 68,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 50,
                    "end": 62,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 50,
                      "end": 61,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 56,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 50,
                          "end": 54
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 59,
                        "end": 61,
                        "raw": "10",
                        "value": 10
                      }
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
            "start": 73,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 98,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 98,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 84,
                  "end": 93,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 87,
                      "end": 93
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
            "start": 103,
            "end": 139,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "foo",
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
              "end": 139,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 139,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 133,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 132,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 125,
                          "end": 131,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 119,
                        "end": 124,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 124,
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 183,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 183,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 183,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 163,
                    "end": 177,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 170,
                      "end": 176,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 170,
                        "end": 174
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 176,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
            "start": 189,
            "end": 234,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 195,
              "decorators": [],
              "name": "bX",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 234,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 207,
                "end": 234,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 228,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 217,
                      "end": 227,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 223,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 217,
                          "end": 221
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 223,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 227,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
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
                  "start": 196,
                  "end": 205,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 199,
                      "end": 205
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
        "end": 7,
        "decorators": [],
        "name": "B",
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
