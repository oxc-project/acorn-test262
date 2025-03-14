__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 291,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 291,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 48,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 26,
              "end": 31,
              "name": "prop"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 36,
                    "end": 46,
                    "argument": {
                      "type": "Literal",
                      "start": 43,
                      "end": 45,
                      "raw": "\"\"",
                      "value": ""
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
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 88,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 64,
              "end": 69,
              "name": "prop"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 88,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 88,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 83,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 77,
                      "end": 83
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 129,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 105,
              "end": 112,
              "name": "roProp"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 129,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 129,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 117,
                    "end": 127,
                    "argument": {
                      "type": "Literal",
                      "start": 124,
                      "end": 126,
                      "raw": "\"\"",
                      "value": ""
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
          },
          {
            "type": "MethodDefinition",
            "start": 135,
            "end": 289,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 146,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 289,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 289,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 171,
                    "end": 185,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 171,
                      "end": 184,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 171,
                        "end": 179,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 173,
                          "decorators": [],
                          "name": "A1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 174,
                          "end": 179,
                          "name": "prop"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 182,
                        "end": 184,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 194,
                    "end": 210,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 194,
                      "end": 209,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 194,
                        "end": 204,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 196,
                          "decorators": [],
                          "name": "A1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 197,
                          "end": 204,
                          "name": "roProp"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 207,
                        "end": 209,
                        "raw": "\"\"",
                        "value": ""
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 228,
                    "end": 250,
                    "expression": {
                      "type": "CallExpression",
                      "start": 228,
                      "end": 249,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 240,
                          "end": 248,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 242,
                            "decorators": [],
                            "name": "A1",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 243,
                            "end": 248,
                            "name": "prop"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 228,
                        "end": 239,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 235,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 239,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 259,
                    "end": 283,
                    "expression": {
                      "type": "CallExpression",
                      "start": 259,
                      "end": 282,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 271,
                          "end": 281,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 273,
                            "decorators": [],
                            "name": "A1",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 274,
                            "end": 281,
                            "name": "roProp"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 259,
                        "end": 270,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 266,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 270,
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 159,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 159,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "A1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
