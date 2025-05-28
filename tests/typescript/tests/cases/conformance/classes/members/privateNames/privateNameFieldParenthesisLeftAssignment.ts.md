__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 322,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 322,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
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
        "start": 10,
        "end": 322,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 18,
              "name": "p"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 92,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 44,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 92,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 45,
                  "end": 58,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 58,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 52,
                      "end": 58
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 60,
                "end": 92,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 70,
                    "end": 86,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 70,
                      "end": 85,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 70,
                        "end": 77,
                        "object": {
                          "type": "ThisExpression",
                          "start": 70,
                          "end": 74
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 75,
                          "end": 77,
                          "name": "p"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 85,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 98,
            "end": 152,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 152,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 110,
                  "decorators": [],
                  "name": "p",
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
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 152,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 122,
                    "end": 146,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 122,
                      "end": 145,
                      "operator": "=",
                      "left": {
                        "type": "TSAsExpression",
                        "start": 123,
                        "end": 140,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 123,
                          "end": 130,
                          "object": {
                            "type": "ThisExpression",
                            "start": 123,
                            "end": 127
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 128,
                            "end": 130,
                            "name": "p"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 134,
                          "end": 140
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 158,
            "end": 216,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 160,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 216,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 161,
                  "end": 170,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 162,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 164,
                      "end": 170
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 172,
                "end": 216,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 182,
                    "end": 210,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 182,
                      "end": 209,
                      "operator": "=",
                      "left": {
                        "type": "TSAsExpression",
                        "start": 185,
                        "end": 202,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 185,
                          "end": 192,
                          "object": {
                            "type": "ThisExpression",
                            "start": 185,
                            "end": 189
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 190,
                            "end": 192,
                            "name": "p"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 196,
                          "end": 202
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 209,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 222,
            "end": 266,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 224,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 224,
              "end": 266,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 225,
                  "end": 234,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 226,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 228,
                      "end": 234
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 236,
                "end": 266,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 246,
                    "end": 260,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 246,
                      "end": 259,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 247,
                        "end": 254,
                        "object": {
                          "type": "ThisExpression",
                          "start": 247,
                          "end": 251
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 252,
                          "end": 254,
                          "name": "p"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 259,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 272,
            "end": 320,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 274,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 274,
              "end": 320,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 275,
                  "end": 284,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 276,
                    "end": 284,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 278,
                      "end": 284
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 286,
                "end": 320,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 296,
                    "end": 314,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 296,
                      "end": 313,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 299,
                        "end": 306,
                        "object": {
                          "type": "ThisExpression",
                          "start": 299,
                          "end": 303
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 304,
                          "end": 306,
                          "name": "p"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 313,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
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
