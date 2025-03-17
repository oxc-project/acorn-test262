__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 253,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 253,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 38,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 35,
              "end": 37,
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
          },
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 54,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 85,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 79,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 67,
                      "end": 78,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 67,
                        "end": 73,
                        "object": {
                          "type": "ThisExpression",
                          "start": 67,
                          "end": 71
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 76,
                        "end": 78,
                        "value": 10,
                        "raw": "10"
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
            "start": 90,
            "end": 115,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 115,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 110,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 104,
                      "end": 110
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 115,
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
            "start": 120,
            "end": 156,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 156,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 136,
                    "end": 150,
                    "expression": {
                      "type": "CallExpression",
                      "start": 136,
                      "end": 149,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 136,
                        "end": 141,
                        "object": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 141,
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
                          "start": 142,
                          "end": 148,
                          "object": {
                            "type": "ThisExpression",
                            "start": 142,
                            "end": 146
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 148,
                            "name": "x",
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
            "start": 162,
            "end": 200,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 200,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 200,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 180,
                    "end": 194,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 193,
                      "object": {
                        "type": "ThisExpression",
                        "start": 187,
                        "end": 191
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "name": "x",
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
            "start": 206,
            "end": 251,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 212,
              "name": "bX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 212,
              "end": 251,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 213,
                  "end": 222,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 214,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 216,
                      "end": 222
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 224,
                "end": 251,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 245,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 234,
                      "end": 244,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 240,
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 243,
                        "end": 244,
                        "name": "y",
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
