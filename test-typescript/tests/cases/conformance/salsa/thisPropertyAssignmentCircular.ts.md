__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 165,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 165,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 165,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 23,
              "end": 72,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 23,
                "end": 34,
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
                "start": 34,
                "end": 72,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 37,
                  "end": 72,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 47,
                      "end": 66,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 47,
                        "end": 65,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 47,
                          "end": 55,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 47,
                            "end": 51
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 52,
                            "end": 55,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 58,
                          "end": 65,
                          "raw": "\"Hello\"",
                          "value": "Hello"
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
              "start": 77,
              "end": 130,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 83,
                "decorators": [],
                "name": "slicey",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 83,
                "end": 130,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 86,
                  "end": 130,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 96,
                      "end": 124,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 96,
                        "end": 123,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 96,
                          "end": 104,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 96,
                            "end": 100
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 104,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 107,
                          "end": 123,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 107,
                            "end": 121,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 107,
                              "end": 115,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 107,
                                "end": 111
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 115,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 121,
                              "decorators": [],
                              "name": "slice",
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
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 135,
              "end": 163,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 136,
                "end": 163,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 139,
                  "end": 163,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 149,
                      "end": 157,
                      "directive": null,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 149,
                        "end": 157,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 149,
                          "end": 153
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 157,
                          "decorators": [],
                          "name": "foo",
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
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 181,
      "end": 260,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 260,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 200,
            "end": 211,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 200,
              "end": 210,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 200,
                "end": 206,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 200,
                  "end": 204
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 209,
                "end": 210,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 216,
            "end": 258,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 216,
              "end": 258,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 216,
                "end": 222,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 216,
                  "end": 220
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 222,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "FunctionExpression",
                "start": 225,
                "end": 258,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 236,
                  "end": 258,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 238,
                      "end": 256,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 238,
                        "end": 255,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 238,
                          "end": 253,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 238,
                            "end": 244,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 238,
                              "end": 242
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 243,
                              "end": 244,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 253,
                            "decorators": [],
                            "name": "toString",
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
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 191,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
