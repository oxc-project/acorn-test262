__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 364,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 361,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 184,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 25,
              "name": "foo"
            },
            "value": {
              "type": "ClassExpression",
              "start": 28,
              "end": 183,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 183,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 44,
                    "end": 130,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 55,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 55,
                      "end": 130,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                  "name": "console",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 83,
                                  "name": "log",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 84,
                                  "end": 91,
                                  "value": "hello",
                                  "raw": "\"hello\""
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
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
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 112,
                                  "end": 117,
                                  "name": "foo2"
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
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
                    "type": "PropertyDefinition",
                    "start": 139,
                    "end": 157,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 153,
                      "end": 156,
                      "value": 123,
                      "raw": "123"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 166,
                    "end": 177,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 171,
                      "name": "field",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 174,
                      "end": 176,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
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
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 189,
            "end": 255,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 196,
              "end": 201,
              "name": "foo2"
            },
            "value": {
              "type": "ClassExpression",
              "start": 204,
              "end": 254,
              "id": {
                "type": "Identifier",
                "start": 210,
                "end": 213,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 214,
                "end": 254,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 224,
                    "end": 248,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 241,
                      "name": "otherClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 244,
                      "end": 247,
                      "value": 123,
                      "raw": "123"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
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
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 359,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 262,
              "end": 359,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 286,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 289,
                              "end": 293,
                              "name": "foo"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 294,
                            "end": 298,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 310,
                            "end": 314,
                            "name": "foo"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 319,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 340,
                            "end": 344,
                            "name": "foo"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 352,
                        "name": "field",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
