__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "A1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 41,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 24,
              "name": "prop"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 41,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 41,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 29,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 36,
                      "end": 38,
                      "value": "",
                      "raw": "\"\""
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
            "start": 46,
            "end": 74,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 50,
              "end": 55,
              "name": "prop"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 74,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 69,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 63,
                      "end": 69
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 74,
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
            "start": 80,
            "end": 108,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 84,
              "end": 91,
              "name": "roProp"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 108,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 96,
                    "end": 106,
                    "argument": {
                      "type": "Literal",
                      "start": 103,
                      "end": 105,
                      "value": "",
                      "raw": "\"\""
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
            "start": 114,
            "end": 276,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 276,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 126,
                  "end": 138,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 132,
                      "end": 138
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 276,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 166,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 150,
                      "end": 165,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 160,
                        "object": {
                          "type": "ThisExpression",
                          "start": 150,
                          "end": 154
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 155,
                          "end": 160,
                          "name": "prop"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 163,
                        "end": 165,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 175,
                    "end": 193,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 175,
                      "end": 192,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 175,
                        "end": 187,
                        "object": {
                          "type": "ThisExpression",
                          "start": 175,
                          "end": 179
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 180,
                          "end": 187,
                          "name": "roProp"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 190,
                        "end": 192,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 211,
                    "end": 235,
                    "expression": {
                      "type": "CallExpression",
                      "start": 211,
                      "end": 234,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 211,
                        "end": 222,
                        "object": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 218,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 222,
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
                          "start": 223,
                          "end": 233,
                          "object": {
                            "type": "ThisExpression",
                            "start": 223,
                            "end": 227
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 228,
                            "end": 233,
                            "name": "prop"
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
                    "start": 244,
                    "end": 270,
                    "expression": {
                      "type": "CallExpression",
                      "start": 244,
                      "end": 269,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 244,
                        "end": 255,
                        "object": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 251,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 255,
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
                          "start": 256,
                          "end": 268,
                          "object": {
                            "type": "ThisExpression",
                            "start": 256,
                            "end": 260
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 261,
                            "end": 268,
                            "name": "roProp"
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
