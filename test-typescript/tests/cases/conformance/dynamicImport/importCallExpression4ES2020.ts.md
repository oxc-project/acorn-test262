0.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 17,
      "end": 66,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 24,
        "end": 66,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 32,
          "end": 66,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 38,
              "end": 64,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 43,
                "decorators": [],
                "name": "print",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 43,
                "end": 64,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 46,
                  "end": 64,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 48,
                      "end": 63,
                      "argument": {
                        "type": "Literal",
                        "start": 55,
                        "end": 63,
                        "raw": "\"I am B\"",
                        "value": "I am B"
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 75,
        "end": 106,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 90,
          "end": 106,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 92,
              "end": 104,
              "argument": {
                "type": "Literal",
                "start": 99,
                "end": 104,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 45,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 25,
          "end": 45,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 27,
              "end": 43,
              "argument": {
                "type": "Literal",
                "start": 34,
                "end": 42,
                "raw": "\"backup\"",
                "value": "backup"
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 22,
          "decorators": [],
          "name": "backup",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 363,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 362,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 362,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 73,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 56,
              "decorators": [],
              "name": "myModule",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ImportExpression",
              "start": 59,
              "end": 72,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 66,
                "end": 71,
                "raw": "\"./0\"",
                "value": "./0"
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 360,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 84,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 360,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 360,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 97,
                    "end": 130,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 103,
                        "end": 129,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 112,
                          "decorators": [],
                          "name": "loadAsync",
                          "optional": false
                        },
                        "init": {
                          "type": "ImportExpression",
                          "start": 115,
                          "end": 129,
                          "options": null,
                          "source": {
                            "type": "Literal",
                            "start": 123,
                            "end": 128,
                            "raw": "\"./0\"",
                            "value": "./0"
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 139,
                    "end": 354,
                    "expression": {
                      "type": "CallExpression",
                      "start": 139,
                      "end": 353,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 158,
                          "end": 214,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 166,
                            "end": 214,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 180,
                                "end": 204,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 180,
                                  "end": 203,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 192,
                                      "end": 202,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 192,
                                        "end": 200,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 192,
                                          "end": 196,
                                          "decorators": [],
                                          "name": "Zero",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 197,
                                          "end": 200,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        }
                                      },
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 180,
                                    "end": 191,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 180,
                                      "end": 187,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 188,
                                      "end": 191,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 158,
                              "end": 162,
                              "decorators": [],
                              "name": "Zero",
                              "optional": false
                            }
                          ]
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 216,
                          "end": 352,
                          "async": true,
                          "body": {
                            "type": "BlockStatement",
                            "start": 229,
                            "end": 352,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 243,
                                "end": 260,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 243,
                                  "end": 259,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 255,
                                      "end": 258,
                                      "decorators": [],
                                      "name": "err",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 243,
                                    "end": 254,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 243,
                                      "end": 250,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 251,
                                      "end": 254,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              },
                              {
                                "type": "VariableDeclaration",
                                "start": 273,
                                "end": 303,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 277,
                                    "end": 302,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 277,
                                      "end": 280,
                                      "decorators": [],
                                      "name": "one",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "start": 283,
                                      "end": 302,
                                      "argument": {
                                        "type": "ImportExpression",
                                        "start": 289,
                                        "end": 302,
                                        "options": null,
                                        "source": {
                                          "type": "Literal",
                                          "start": 296,
                                          "end": 301,
                                          "raw": "\"./1\"",
                                          "value": "./1"
                                        }
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "let"
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 316,
                                "end": 342,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 316,
                                  "end": 341,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 328,
                                      "end": 340,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 328,
                                        "end": 338,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 328,
                                          "end": 331,
                                          "decorators": [],
                                          "name": "one",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 332,
                                          "end": 338,
                                          "decorators": [],
                                          "name": "backup",
                                          "optional": false
                                        }
                                      },
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 316,
                                    "end": 327,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 316,
                                      "end": 323,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 324,
                                      "end": 327,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 222,
                              "end": 225,
                              "decorators": [],
                              "name": "err",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 139,
                        "end": 157,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 139,
                          "end": 152,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 139,
                            "end": 143
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 152,
                            "decorators": [],
                            "name": "myModule",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 157,
                          "decorators": [],
                          "name": "then",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
