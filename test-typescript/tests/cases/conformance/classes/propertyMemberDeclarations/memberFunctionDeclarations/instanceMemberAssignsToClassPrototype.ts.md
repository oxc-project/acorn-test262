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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 256,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 63,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 63,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 41,
                            "name": "prototype",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 45,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 48,
                        "end": 57,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 54,
                          "end": 57,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 254,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 254,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 82,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 76,
                      "end": 82
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 113,
                            "name": "prototype",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 117,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 120,
                        "end": 129,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 126,
                          "end": 129,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
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
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 158,
                            "name": "prototype",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 162,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 165,
                        "end": 173,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 166,
                            "end": 167,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 173,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
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
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 191,
                            "end": 200,
                            "name": "prototype",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 204,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 207,
                        "end": 223,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 208,
                            "end": 217,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 209,
                              "end": 217,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 211,
                                "end": 217
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Literal",
                          "start": 222,
                          "end": 223,
                          "value": 1,
                          "raw": "1"
                        },
                        "typeParameters": null,
                        "returnType": null
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
