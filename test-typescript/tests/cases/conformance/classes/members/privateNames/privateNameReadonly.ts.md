__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
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
            "end": 114,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 114,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 31,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 22,
                    "end": 26,
                    "name": "bar"
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 26,
                    "end": 31,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 29,
                      "end": 31,
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
                  "start": 36,
                  "end": 112,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 39,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 39,
                    "end": 112,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 42,
                      "end": 112,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 52,
                          "end": 106,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 52,
                            "end": 105,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 52,
                              "end": 61,
                              "object": {
                                "type": "ThisExpression",
                                "start": 52,
                                "end": 56
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 57,
                                "end": 61,
                                "name": "bar"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 64,
                              "end": 105,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 64,
                                "end": 75,
                                "object": {
                                  "type": "Identifier",
                                  "start": 64,
                                  "end": 71,
                                  "name": "console",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 72,
                                  "end": 75,
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
                                  "start": 76,
                                  "end": 104,
                                  "value": "should log this then throw",
                                  "raw": "\"should log this then throw\""
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 143,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 142,
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 127,
          "object": {
            "type": "Identifier",
            "start": 116,
            "end": 123,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 127,
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
            "start": 128,
            "end": 141,
            "callee": {
              "type": "MemberExpression",
              "start": 128,
              "end": 139,
              "object": {
                "type": "NewExpression",
                "start": 128,
                "end": 135,
                "callee": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 136,
                "end": 139,
                "name": "foo",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
