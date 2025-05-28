__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 256,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 256,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 256,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 63,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 63,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 63,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 30,
                    "end": 57,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 30,
                      "end": 57,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 30,
                        "end": 45,
                        "object": {
                          "type": "MemberExpression",
                          "start": 30,
                          "end": 41,
                          "object": {
                            "type": "Identifier",
                            "start": 30,
                            "end": 31,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 41,
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 45,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 48,
                        "end": 57,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 54,
                          "end": 57,
                          "body": []
                        },
                        "id": null,
                        "generator": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 254,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 254,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 82,
                  "decorators": [],
                  "name": "x",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 254,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 129,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 129,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 117,
                        "object": {
                          "type": "MemberExpression",
                          "start": 102,
                          "end": 113,
                          "object": {
                            "type": "Identifier",
                            "start": 102,
                            "end": 103,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 113,
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 117,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 120,
                        "end": 129,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 126,
                          "end": 129,
                          "body": []
                        },
                        "id": null,
                        "generator": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 147,
                    "end": 174,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 147,
                      "end": 173,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 147,
                        "end": 162,
                        "object": {
                          "type": "MemberExpression",
                          "start": 147,
                          "end": 158,
                          "object": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 148,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 158,
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 162,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 165,
                        "end": 173,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 173,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 189,
                    "end": 224,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 189,
                      "end": 223,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 189,
                        "end": 204,
                        "object": {
                          "type": "MemberExpression",
                          "start": 189,
                          "end": 200,
                          "object": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 190,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 191,
                            "end": 200,
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 204,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 207,
                        "end": 223,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 208,
                            "end": 217,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 209,
                              "end": 217,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 211,
                                "end": 217
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "start": 222,
                          "end": 223,
                          "value": 1,
                          "raw": "1"
                        },
                        "id": null,
                        "generator": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 239,
                    "end": 248,
                    "argument": {
                      "type": "Literal",
                      "start": 246,
                      "end": 247,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
