__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 34
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
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
                            "type": "ThisExpression",
                            "start": 47,
                            "end": 51
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 52,
                            "end": 55
                          },
                          "optional": false,
                          "computed": false,
                          "start": 47,
                          "end": 55
                        },
                        "right": {
                          "type": "Literal",
                          "value": "Hello",
                          "raw": "\"Hello\"",
                          "start": 58,
                          "end": 65
                        },
                        "start": 47,
                        "end": 65
                      },
                      "directive": null,
                      "start": 47,
                      "end": 66
                    }
                  ],
                  "start": 37,
                  "end": 72
                },
                "expression": false,
                "start": 34,
                "end": 72
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 23,
              "end": 72
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "slicey",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 83
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
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
                            "type": "ThisExpression",
                            "start": 96,
                            "end": 100
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 101,
                            "end": 104
                          },
                          "optional": false,
                          "computed": false,
                          "start": 96,
                          "end": 104
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 107,
                                "end": 111
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 112,
                                "end": 115
                              },
                              "optional": false,
                              "computed": false,
                              "start": 107,
                              "end": 115
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "slice",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 116,
                              "end": 121
                            },
                            "optional": false,
                            "computed": false,
                            "start": 107,
                            "end": 121
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 107,
                          "end": 123
                        },
                        "start": 96,
                        "end": 123
                      },
                      "directive": null,
                      "start": 96,
                      "end": 124
                    }
                  ],
                  "start": 86,
                  "end": 130
                },
                "expression": false,
                "start": 83,
                "end": 130
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 77,
              "end": 130
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 149,
                          "end": 153
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 149,
                        "end": 157
                      },
                      "directive": null,
                      "start": 149,
                      "end": 157
                    }
                  ],
                  "start": 139,
                  "end": 163
                },
                "expression": false,
                "start": 136,
                "end": 163
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 135,
              "end": 163
            }
          ],
          "start": 17,
          "end": 165
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 165
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 165
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 191
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "type": "ThisExpression",
                  "start": 200,
                  "end": 204
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "optional": false,
                "computed": false,
                "start": 200,
                "end": 206
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 209,
                "end": 210
              },
              "start": 200,
              "end": 210
            },
            "directive": null,
            "start": 200,
            "end": 211
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 216,
                  "end": 220
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 222
                },
                "optional": false,
                "computed": false,
                "start": 216,
                "end": 222
              },
              "right": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 238,
                              "end": 242
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 243,
                              "end": 244
                            },
                            "optional": false,
                            "computed": false,
                            "start": 238,
                            "end": 244
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toString",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 245,
                            "end": 253
                          },
                          "optional": false,
                          "computed": false,
                          "start": 238,
                          "end": 253
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 238,
                        "end": 255
                      },
                      "directive": null,
                      "start": 238,
                      "end": 256
                    }
                  ],
                  "start": 236,
                  "end": 258
                },
                "expression": false,
                "start": 225,
                "end": 258
              },
              "start": 216,
              "end": 258
            },
            "directive": null,
            "start": 216,
            "end": 258
          }
        ],
        "start": 194,
        "end": 260
      },
      "expression": false,
      "start": 181,
      "end": 260
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 260
}
```
