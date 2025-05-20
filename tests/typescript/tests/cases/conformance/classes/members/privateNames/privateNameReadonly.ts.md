__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 114,
          "definite": false,
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
            "end": 114,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 114,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 31,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 22,
                    "end": 26,
                    "name": "bar"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 26,
                    "end": 31,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 29,
                      "end": 31,
                      "body": []
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
                  "start": 36,
                  "end": 112,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 39,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 39,
                    "end": 112,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 42,
                      "end": 112,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 52,
                          "end": 106,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 52,
                            "end": 105,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 52,
                              "end": 61,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 52,
                                "end": 56
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 57,
                                "end": 61,
                                "name": "bar"
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 64,
                              "end": 105,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 76,
                                  "end": 104,
                                  "raw": "\"should log this then throw\"",
                                  "value": "should log this then throw"
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 64,
                                "end": 75,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 64,
                                  "end": 71,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 72,
                                  "end": 75,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
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
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 143,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 142,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 128,
            "end": 141,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 128,
              "end": 139,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 128,
                "end": 135,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 136,
                "end": 139,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 127,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 123,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 127,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
