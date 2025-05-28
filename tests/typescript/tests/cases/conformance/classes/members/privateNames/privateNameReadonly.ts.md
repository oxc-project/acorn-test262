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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 114,
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
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 114,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 31,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 22,
                    "end": 26,
                    "name": "bar"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 26,
                    "end": 31,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 29,
                      "end": 31,
                      "body": []
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
                  "start": 36,
                  "end": 112,
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
                  "value": {
                    "type": "FunctionExpression",
                    "start": 39,
                    "end": 112,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                              "optional": false,
                              "computed": false
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
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 72,
                                  "end": 75,
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
                                  "type": "Literal",
                                  "start": 76,
                                  "end": 104,
                                  "value": "should log this then throw",
                                  "raw": "\"should log this then throw\""
                                }
                              ],
                              "optional": false
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
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 127,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 136,
                "end": 139,
                "decorators": [],
                "name": "foo",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
