__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 161,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 161,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 161,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 22,
                  "end": 46,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 22,
                    "end": 28,
                    "name": "field"
                  },
                  "typeAnnotation": null,
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
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
                  "start": 51,
                  "end": 75,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 51,
                    "end": 58,
                    "name": "method"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 58,
                    "end": 75,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                  "start": 80,
                  "end": 120,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 98,
                    "decorators": [],
                    "name": "getInstance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 98,
                    "end": 120,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        }
                      ]
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
                  "start": 125,
                  "end": 158,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 133,
                    "decorators": [],
                    "name": "getField",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 133,
                    "end": 158,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "optional": false,
                            "computed": false
                          }
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
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 171,
            "end": 174,
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
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 188,
                    "decorators": [],
                    "name": "getInstance",
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
              "property": {
                "type": "Identifier",
                "start": 191,
                "end": 199,
                "decorators": [],
                "name": "getField",
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
        ],
        "optional": false
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
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 206,
              "end": 217,
              "decorators": [],
              "name": "getInstance",
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
        "property": {
          "type": "PrivateIdentifier",
          "start": 220,
          "end": 227,
          "name": "method"
        },
        "optional": false,
        "computed": false
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
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 240,
              "end": 251,
              "decorators": [],
              "name": "getInstance",
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
        "property": {
          "type": "PrivateIdentifier",
          "start": 254,
          "end": 260,
          "name": "field"
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
