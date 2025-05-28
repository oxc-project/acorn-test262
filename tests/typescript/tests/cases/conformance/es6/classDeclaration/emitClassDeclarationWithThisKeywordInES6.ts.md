__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 236,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 236,
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
        "end": 236,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 21,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 20,
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
          },
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 68,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 68,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 68,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 50,
                    "end": 62,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 50,
                      "end": 61,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 56,
                        "object": {
                          "type": "ThisExpression",
                          "start": 50,
                          "end": 54
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
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
                        "start": 59,
                        "end": 61,
                        "value": 10,
                        "raw": "10"
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
            "start": 73,
            "end": 98,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 98,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 84,
                  "end": 93,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 87,
                      "end": 93
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 98,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 139,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 139,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 109,
                "end": 139,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 133,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 132,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 119,
                        "end": 124,
                        "object": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 124,
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
                          "start": 125,
                          "end": 131,
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 130,
                            "end": 131,
                            "decorators": [],
                            "name": "x",
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
            "start": 145,
            "end": 183,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 183,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 183,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 163,
                    "end": 177,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 170,
                      "end": 176,
                      "object": {
                        "type": "ThisExpression",
                        "start": 170,
                        "end": 174
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 176,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 189,
            "end": 234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 195,
              "decorators": [],
              "name": "bX",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 234,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 196,
                  "end": 205,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 197,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 199,
                      "end": 205
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 207,
                "end": 234,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 228,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 217,
                      "end": 227,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 223,
                        "object": {
                          "type": "ThisExpression",
                          "start": 217,
                          "end": 221
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 223,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 227,
                        "decorators": [],
                        "name": "y",
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
            "kind": "set",
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
