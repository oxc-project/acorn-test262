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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "Greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 396,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 80,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 80,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "greeting",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 49,
                        "end": 55
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 80,
                "body": []
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
            "start": 85,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 90,
              "name": "greet",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "left": {
                        "type": "BinaryExpression",
                        "start": 110,
                        "end": 132,
                        "left": {
                          "type": "Literal",
                          "start": 110,
                          "end": 116,
                          "value": "<h1>",
                          "raw": "\"<h1>\""
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "start": 119,
                          "end": 132,
                          "object": {
                            "type": "ThisExpression",
                            "start": 119,
                            "end": 123
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 132,
                            "name": "greeting",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 135,
                        "end": 142,
                        "value": "</h1>",
                        "raw": "\"</h1>\""
                      }
                    }
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
            "start": 154,
            "end": 172,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 177,
            "end": 201,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 187,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 198,
              "end": 200,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 206,
            "end": 256,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 214,
              "end": 216,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 256,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 236,
                        "end": 240
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 241,
                        "end": 249,
                        "name": "greeting",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 314,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 274,
              "name": "greetings",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 274,
              "end": 314,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 294,
                        "end": 298
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 307,
                        "name": "greeting",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
            "start": 319,
            "end": 394,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 323,
              "end": 332,
              "name": "greetings",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 394,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 333,
                  "end": 350,
                  "name": "greetings",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 344,
                      "end": 350
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 352,
                "end": 394,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 362,
                    "end": 388,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 362,
                      "end": 387,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 362,
                        "end": 375,
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 375,
                          "name": "greeting",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 387,
                        "name": "greetings",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
