__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 253,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 253,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 253,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
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
              "start": 35,
              "end": 37,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 85,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 54,
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
              "start": 54,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 85,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 79,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 67,
                      "end": 78,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 67,
                        "end": 73,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 67,
                          "end": 71
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 76,
                        "end": 78,
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
            "start": 90,
            "end": 115,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
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
              "start": 100,
              "end": 115,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 115,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 110,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 104,
                      "end": 110
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
            "start": 120,
            "end": 156,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
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
              "start": 123,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 136,
                    "end": 150,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 136,
                      "end": 149,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 142,
                          "end": 148,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 142,
                            "end": 146
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 148,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 136,
                        "end": 141,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 141,
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
            "start": 162,
            "end": 200,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
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
              "start": 167,
              "end": 200,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 200,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 180,
                    "end": 194,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 193,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 187,
                        "end": 191
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
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
            "start": 206,
            "end": 251,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 212,
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
              "start": 212,
              "end": 251,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 224,
                "end": 251,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 245,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 234,
                      "end": 244,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 240,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 243,
                        "end": 244,
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
                  "start": 213,
                  "end": 222,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 214,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 216,
                      "end": 222
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
        "start": 23,
        "end": 24,
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
