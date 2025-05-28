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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 165,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 165,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 23,
              "end": 72,
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
              "value": {
                "type": "FunctionExpression",
                "start": 34,
                "end": 72,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 37,
                  "end": 72,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 47,
                      "end": 66,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 47,
                        "end": 65,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 47,
                          "end": 55,
                          "object": {
                            "type": "ThisExpression",
                            "start": 47,
                            "end": 51
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 52,
                            "end": 55,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 58,
                          "end": 65,
                          "value": "Hello",
                          "raw": "\"Hello\""
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 77,
              "end": 130,
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
              "value": {
                "type": "FunctionExpression",
                "start": 83,
                "end": 130,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 86,
                  "end": 130,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 96,
                      "end": 124,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 96,
                        "end": 123,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 96,
                          "end": 104,
                          "object": {
                            "type": "ThisExpression",
                            "start": 96,
                            "end": 100
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 104,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 107,
                          "end": 123,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 107,
                            "end": 121,
                            "object": {
                              "type": "MemberExpression",
                              "start": 107,
                              "end": 115,
                              "object": {
                                "type": "ThisExpression",
                                "start": 107,
                                "end": 111
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 115,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 121,
                              "decorators": [],
                              "name": "slice",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
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
              "start": 135,
              "end": 163,
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
              "value": {
                "type": "FunctionExpression",
                "start": 136,
                "end": 163,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 139,
                  "end": 163,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 149,
                      "end": 157,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 149,
                        "end": 157,
                        "object": {
                          "type": "ThisExpression",
                          "start": 149,
                          "end": 153
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 157,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 181,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 191,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 260,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 200,
            "end": 211,
            "expression": {
              "type": "AssignmentExpression",
              "start": 200,
              "end": 210,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 200,
                "end": 206,
                "object": {
                  "type": "ThisExpression",
                  "start": 200,
                  "end": 204
                },
                "property": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 209,
                "end": 210,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 216,
            "end": 258,
            "expression": {
              "type": "AssignmentExpression",
              "start": 216,
              "end": 258,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 216,
                "end": 222,
                "object": {
                  "type": "ThisExpression",
                  "start": 216,
                  "end": 220
                },
                "property": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 222,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "FunctionExpression",
                "start": 225,
                "end": 258,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 236,
                  "end": 258,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 238,
                      "end": 256,
                      "expression": {
                        "type": "CallExpression",
                        "start": 238,
                        "end": 255,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 238,
                          "end": 253,
                          "object": {
                            "type": "MemberExpression",
                            "start": 238,
                            "end": 244,
                            "object": {
                              "type": "ThisExpression",
                              "start": 238,
                              "end": 242
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 243,
                              "end": 244,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 253,
                            "decorators": [],
                            "name": "toString",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
