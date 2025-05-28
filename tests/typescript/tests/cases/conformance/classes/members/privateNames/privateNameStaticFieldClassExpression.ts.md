__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 363,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 361,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 361,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 184,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 25,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 28,
              "end": 183,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 183,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 130,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
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
                        "start": 58,
                        "end": 130,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 72,
                            "end": 93,
                            "expression": {
                              "type": "CallExpression",
                              "start": 72,
                              "end": 92,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 72,
                                "end": 83,
                                "object": {
                                  "type": "Identifier",
                                  "start": 72,
                                  "end": 79,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 83,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 84,
                                  "end": 91,
                                  "value": "hello",
                                  "raw": "\"hello\""
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 106,
                            "end": 120,
                            "expression": {
                              "type": "NewExpression",
                              "start": 106,
                              "end": 119,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 110,
                                "end": 117,
                                "object": {
                                  "type": "Identifier",
                                  "start": 110,
                                  "end": 111,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 112,
                                  "end": 117,
                                  "name": "foo2"
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": []
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
                    "type": "PropertyDefinition",
                    "start": 139,
                    "end": 157,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 153,
                      "end": 156,
                      "value": 123,
                      "raw": "123"
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 166,
                    "end": 177,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 171,
                      "decorators": [],
                      "name": "field",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 174,
                      "end": 176,
                      "value": 10,
                      "raw": "10"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 189,
            "end": 255,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 196,
              "end": 201,
              "name": "foo2"
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 204,
              "end": 254,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 210,
                "end": 213,
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
                "start": 214,
                "end": 254,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 224,
                    "end": 248,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 241,
                      "decorators": [],
                      "name": "otherClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 244,
                      "end": 247,
                      "value": 123,
                      "raw": "123"
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 359,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 359,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 265,
                "end": 359,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 275,
                    "end": 299,
                    "expression": {
                      "type": "CallExpression",
                      "start": 275,
                      "end": 299,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 275,
                        "end": 286,
                        "object": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 282,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 286,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 287,
                          "end": 298,
                          "object": {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 293,
                            "object": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 288,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 289,
                              "end": 293,
                              "name": "foo"
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 294,
                            "end": 298,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 325,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 308,
                      "end": 324,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 308,
                        "end": 319,
                        "object": {
                          "type": "MemberExpression",
                          "start": 308,
                          "end": 314,
                          "object": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 309,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 310,
                            "end": 314,
                            "name": "foo"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 319,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 322,
                        "end": 324,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 334,
                    "end": 353,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 334,
                      "end": 352,
                      "object": {
                        "type": "NewExpression",
                        "start": 334,
                        "end": 346,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 338,
                          "end": 344,
                          "object": {
                            "type": "Identifier",
                            "start": 338,
                            "end": 339,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 340,
                            "end": 344,
                            "name": "foo"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": []
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 352,
                        "decorators": [],
                        "name": "field",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
