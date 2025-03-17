__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "app",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 99,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 97,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 96,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 96,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 96,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 35,
                      "end": 96,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 41,
                          "end": 92,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 41,
                            "end": 44,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 44,
                            "end": 91,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 46,
                              "end": 91,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 54,
                                  "end": 85,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 54,
                                    "end": 61,
                                    "name": "someFun",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 61,
                                    "end": 84,
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "start": 63,
                                      "end": 84,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 64,
                                          "end": 75,
                                          "name": "arg",
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 67,
                                            "end": 75,
                                            "typeAnnotation": {
                                              "type": "TSNumberKeyword",
                                              "start": 69,
                                              "end": 75
                                            }
                                          },
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "start": 77,
                                        "end": 84,
                                        "typeAnnotation": {
                                          "type": "TSVoidKeyword",
                                          "start": 80,
                                          "end": 84
                                        }
                                      }
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 165,
      "expression": {
        "type": "AssignmentExpression",
        "start": 101,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 101,
          "end": 112,
          "object": {
            "type": "MemberExpression",
            "start": 101,
            "end": 108,
            "object": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "name": "app",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 105,
              "end": 108,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 112,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 115,
          "end": 164,
          "callee": {
            "type": "FunctionExpression",
            "start": 116,
            "end": 161,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 128,
              "end": 161,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 132,
                  "end": 159,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 139,
                    "end": 158,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 141,
                        "end": 156,
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 148,
                          "name": "someFun",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 148,
                          "end": 156,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 149,
                              "end": 152,
                              "name": "arg",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 154,
                            "end": 156,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 190,
      "expression": {
        "type": "CallExpression",
        "start": 167,
        "end": 189,
        "callee": {
          "type": "MemberExpression",
          "start": 167,
          "end": 186,
          "object": {
            "type": "MemberExpression",
            "start": 167,
            "end": 178,
            "object": {
              "type": "MemberExpression",
              "start": 167,
              "end": 174,
              "object": {
                "type": "Identifier",
                "start": 167,
                "end": 170,
                "name": "app",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 174,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 179,
            "end": 186,
            "name": "someFun",
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
            "start": 187,
            "end": 188,
            "value": 1,
            "raw": "1"
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
