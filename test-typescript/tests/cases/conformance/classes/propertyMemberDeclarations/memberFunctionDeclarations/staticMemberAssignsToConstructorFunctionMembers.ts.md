__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 230,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 230,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 60,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 60,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 37,
                    "end": 54,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 37,
                      "end": 54,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 37,
                        "end": 42,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 38,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 39,
                          "end": 42,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 45,
                        "end": 54,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 51,
                          "end": 54,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
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
            "start": 66,
            "end": 228,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 228,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 228,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 123,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 106,
                      "end": 123,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 106,
                        "end": 111,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 107,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 111,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 114,
                        "end": 123,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 120,
                          "end": 123,
                          "body": []
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 158,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 141,
                      "end": 157,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 141,
                        "end": 146,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 146,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 149,
                        "end": 157,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 150,
                            "end": 151,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 173,
                    "end": 198,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 173,
                      "end": 197,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 173,
                        "end": 178,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 178,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 181,
                        "end": 197,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 196,
                          "end": 197,
                          "raw": "1",
                          "value": 1
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 182,
                            "end": 191,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 183,
                              "end": 191,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 185,
                                "end": 191
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 213,
                    "end": 222,
                    "argument": {
                      "type": "Literal",
                      "start": 220,
                      "end": 221,
                      "raw": "1",
                      "value": 1
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
                  "start": 77,
                  "end": 86,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 95,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 89,
                  "end": 95
                }
              },
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
        "name": "C",
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
