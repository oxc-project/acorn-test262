__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 396,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 396,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 396,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
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
              "start": 31,
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 80,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 32,
                  "end": 55,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 55,
                    "decorators": [],
                    "name": "greeting",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 49,
                        "end": 55
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "RestElement",
                  "start": 57,
                  "end": 71,
                  "argument": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 71,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 63,
                      "end": 71,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 63,
                        "end": 69
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 85,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 90,
              "decorators": [],
              "name": "greet",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 143,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 110,
                      "end": 142,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 110,
                        "end": 132,
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "start": 110,
                          "end": 116,
                          "raw": "\"<h1>\"",
                          "value": "<h1>",
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 119,
                          "end": 132,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 119,
                            "end": 123
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 132,
                            "decorators": [],
                            "name": "greeting",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 135,
                        "end": 142,
                        "raw": "\"</h1>\"",
                        "value": "</h1>",
                        "regex": null,
                        "bigint": null
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
            "type": "PropertyDefinition",
            "start": 154,
            "end": 172,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 171,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 165,
                "end": 171
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 177,
            "end": 201,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 187,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 195,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 189,
                "end": 195
              }
            },
            "value": {
              "type": "Literal",
              "start": 198,
              "end": 200,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 256,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 216,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 256,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 219,
                "end": 256,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 229,
                    "end": 250,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 236,
                      "end": 249,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 236,
                        "end": 240
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 241,
                        "end": 249,
                        "decorators": [],
                        "name": "greeting",
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
            "start": 261,
            "end": 314,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 274,
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 274,
              "end": 314,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 277,
                "end": 314,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 287,
                    "end": 308,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 294,
                      "end": 307,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 294,
                        "end": 298
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 307,
                        "decorators": [],
                        "name": "greeting",
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
            "start": 319,
            "end": 394,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 332,
              "decorators": [],
              "name": "greetings",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 394,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 352,
                "end": 394,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 362,
                    "end": 388,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 362,
                      "end": 387,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 362,
                        "end": 375,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 375,
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 387,
                        "decorators": [],
                        "name": "greetings",
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
                  "start": 333,
                  "end": 350,
                  "decorators": [],
                  "name": "greetings",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 344,
                      "end": 350
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
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Greeter",
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
