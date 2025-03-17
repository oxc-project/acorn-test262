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
        "end": 291,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 48,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 26,
              "end": 31,
              "name": "prop"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 48,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "start": 53,
            "end": 88,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 64,
              "end": 69,
              "name": "prop"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 88,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 83,
                  "name": "param",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 77,
                      "end": 83
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 88,
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
            "start": 94,
            "end": 129,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 105,
              "end": 112,
              "name": "roProp"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 129,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "start": 135,
            "end": 289,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 146,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 289,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 159,
                  "name": "name",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 159,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 173,
                          "name": "A1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 174,
                          "end": 179,
                          "name": "prop"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 182,
                        "end": 184,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "directive": null
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
                        "object": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 196,
                          "name": "A1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 197,
                          "end": 204,
                          "name": "roProp"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 207,
                        "end": 209,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 228,
                    "end": 250,
                    "expression": {
                      "type": "CallExpression",
                      "start": 228,
                      "end": 249,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 228,
                        "end": 239,
                        "object": {
                          "type": "Identifier",
                          "start": 228,
                          "end": 235,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 239,
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
                          "start": 240,
                          "end": 248,
                          "object": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 242,
                            "name": "A1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 243,
                            "end": 248,
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
                    "start": 259,
                    "end": 283,
                    "expression": {
                      "type": "CallExpression",
                      "start": 259,
                      "end": 282,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 259,
                        "end": 270,
                        "object": {
                          "type": "Identifier",
                          "start": 259,
                          "end": 266,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 270,
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
                          "start": 271,
                          "end": 281,
                          "object": {
                            "type": "Identifier",
                            "start": 271,
                            "end": 273,
                            "name": "A1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 274,
                            "end": 281,
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
