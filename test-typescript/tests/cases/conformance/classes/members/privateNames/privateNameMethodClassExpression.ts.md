__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 161,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 161,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 22,
                  "end": 46,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 22,
                    "end": 28,
                    "name": "field"
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 31,
                    "end": 45,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 31,
                      "end": 43,
                      "object": {
                        "type": "ThisExpression",
                        "start": 31,
                        "end": 35
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 36,
                        "end": 43,
                        "name": "method"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
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
                  "start": 51,
                  "end": 75,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 51,
                    "end": 58,
                    "name": "method"
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 58,
                    "end": 75,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 61,
                      "end": 75,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 63,
                          "end": 73,
                          "argument": {
                            "type": "Literal",
                            "start": 70,
                            "end": 72,
                            "value": 42,
                            "raw": "42"
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
                  "start": 80,
                  "end": 120,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 98,
                    "name": "getInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 98,
                    "end": 120,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 101,
                      "end": 120,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 103,
                          "end": 118,
                          "argument": {
                            "type": "NewExpression",
                            "start": 110,
                            "end": 117,
                            "callee": {
                              "type": "Identifier",
                              "start": 114,
                              "end": 115,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
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
                  "start": 125,
                  "end": 158,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 133,
                    "name": "getField",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 133,
                    "end": 158,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 136,
                      "end": 158,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 138,
                          "end": 156,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 145,
                            "end": 156,
                            "object": {
                              "type": "ThisExpression",
                              "start": 145,
                              "end": 149
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 150,
                              "end": 156,
                              "name": "field"
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 203,
      "expression": {
        "type": "CallExpression",
        "start": 163,
        "end": 202,
        "callee": {
          "type": "MemberExpression",
          "start": 163,
          "end": 174,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 170,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 171,
            "end": 174,
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
            "type": "CallExpression",
            "start": 175,
            "end": 201,
            "callee": {
              "type": "MemberExpression",
              "start": 175,
              "end": 199,
              "object": {
                "type": "CallExpression",
                "start": 175,
                "end": 190,
                "callee": {
                  "type": "MemberExpression",
                  "start": 175,
                  "end": 188,
                  "object": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 176,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 188,
                    "name": "getInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 199,
                "name": "getField",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 228,
      "expression": {
        "type": "MemberExpression",
        "start": 204,
        "end": 227,
        "object": {
          "type": "CallExpression",
          "start": 204,
          "end": 219,
          "callee": {
            "type": "MemberExpression",
            "start": 204,
            "end": 217,
            "object": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 206,
              "end": 217,
              "name": "getInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 220,
          "end": 227,
          "name": "method"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 261,
      "expression": {
        "type": "MemberExpression",
        "start": 238,
        "end": 260,
        "object": {
          "type": "CallExpression",
          "start": 238,
          "end": 253,
          "callee": {
            "type": "MemberExpression",
            "start": 238,
            "end": 251,
            "object": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 240,
              "end": 251,
              "name": "getInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "PrivateIdentifier",
          "start": 254,
          "end": 260,
          "name": "field"
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
