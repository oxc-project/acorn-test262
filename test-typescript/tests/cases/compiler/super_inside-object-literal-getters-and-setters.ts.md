__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 518,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 20,
        "name": "ObjectLiteral",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 296,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 294,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 50,
                  "name": "ThisInObjectLiteral",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 53,
                  "end": 294,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 63,
                      "end": 72,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 67,
                        "name": "_foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 69,
                        "end": 72,
                        "value": "1",
                        "raw": "'1'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 82,
                      "end": 142,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 89,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 89,
                        "end": 142,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 100,
                          "end": 142,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 114,
                              "end": 132,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 121,
                                "end": 131,
                                "object": {
                                  "type": "Super",
                                  "start": 121,
                                  "end": 126
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 127,
                                  "end": 131,
                                  "name": "_foo",
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        }
                      },
                      "kind": "get",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 152,
                      "end": 218,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 159,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 159,
                        "end": 218,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 160,
                            "end": 173,
                            "name": "value",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 165,
                              "end": 173,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 167,
                                "end": 173
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "BlockStatement",
                          "start": 175,
                          "end": 218,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 189,
                              "end": 208,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 189,
                                "end": 207,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 189,
                                  "end": 199,
                                  "object": {
                                    "type": "Super",
                                    "start": 189,
                                    "end": 194
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 195,
                                    "end": 199,
                                    "name": "_foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 202,
                                  "end": 207,
                                  "name": "value",
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
                      "kind": "set",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 228,
                      "end": 288,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 232,
                        "name": "test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 234,
                        "end": 288,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 246,
                          "end": 288,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 260,
                              "end": 278,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 267,
                                "end": 277,
                                "object": {
                                  "type": "Super",
                                  "start": 267,
                                  "end": 272
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 273,
                                  "end": 277,
                                  "name": "_foo",
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
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 298,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 305,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 306,
        "end": 346,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 308,
            "end": 344,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 319,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 319,
              "end": 344,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 330,
                "end": 344,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 332,
                    "end": 342,
                    "argument": {
                      "type": "Literal",
                      "start": 339,
                      "end": 341,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 321,
                "end": 329,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 323,
                  "end": 329
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
    {
      "type": "ClassDeclaration",
      "start": 347,
      "end": 516,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 368,
        "name": "SuperObjectTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 377,
        "end": 378,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 379,
        "end": 516,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 385,
            "end": 514,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 399,
              "name": "testing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 399,
              "end": 514,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 402,
                "end": 514,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 412,
                    "end": 508,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 416,
                        "end": 507,
                        "id": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 420,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 423,
                          "end": 507,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 437,
                              "end": 497,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 441,
                                "end": 442,
                                "name": "F",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 442,
                                "end": 497,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 445,
                                  "end": 497,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 463,
                                      "end": 483,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 470,
                                        "end": 482,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 470,
                                          "end": 480,
                                          "object": {
                                            "type": "Super",
                                            "start": 470,
                                            "end": 475
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 476,
                                            "end": 480,
                                            "name": "test",
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
                                    }
                                  ]
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "get",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "accessibility": "public"
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
