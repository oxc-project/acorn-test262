__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 335,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "value": 123,
              "raw": "123"
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
            "type": "PropertyDefinition",
            "start": 27,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 27,
              "end": 29,
              "name": "a"
            },
            "value": {
              "type": "Literal",
              "start": 32,
              "end": 34,
              "value": 10,
              "raw": "10"
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
            "type": "PropertyDefinition",
            "start": 40,
            "end": 52,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 44,
              "end": 51,
              "value": "hello",
              "raw": "\"hello\""
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
            "type": "PropertyDefinition",
            "start": 57,
            "end": 60,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 57,
              "end": 59,
              "name": "b"
            },
            "value": null,
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
            "start": 65,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 168,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 105,
                    "expression": {
                      "type": "CallExpression",
                      "start": 84,
                      "end": 104,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 84,
                        "end": 95,
                        "object": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 91,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 95,
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
                          "start": 96,
                          "end": 103,
                          "object": {
                            "type": "ThisExpression",
                            "start": 96,
                            "end": 100
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 101,
                            "end": 103,
                            "name": "a"
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
                    "start": 114,
                    "end": 132,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 114,
                      "end": 131,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 114,
                        "end": 121,
                        "object": {
                          "type": "ThisExpression",
                          "start": 114,
                          "end": 118
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 119,
                          "end": 121,
                          "name": "a"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 124,
                        "end": 131,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 162,
                    "expression": {
                      "type": "CallExpression",
                      "start": 141,
                      "end": 161,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 141,
                        "end": 152,
                        "object": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 148,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 152,
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
                          "start": 153,
                          "end": 160,
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 158,
                            "end": 160,
                            "name": "b"
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
          },
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 192,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 180,
              "end": 182,
              "name": "m"
            },
            "value": {
              "type": "Literal",
              "start": 185,
              "end": 191,
              "value": "test",
              "raw": "\"test\""
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
            "type": "PropertyDefinition",
            "start": 197,
            "end": 207,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 204,
              "end": 206,
              "name": "x"
            },
            "value": null,
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
            "start": 212,
            "end": 302,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 223,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 223,
              "end": 302,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 302,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 257,
                    "expression": {
                      "type": "CallExpression",
                      "start": 236,
                      "end": 256,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 236,
                        "end": 247,
                        "object": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 243,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 247,
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
                          "start": 248,
                          "end": 255,
                          "object": {
                            "type": "ThisExpression",
                            "start": 248,
                            "end": 252
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 253,
                            "end": 255,
                            "name": "m"
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
                    "start": 266,
                    "end": 296,
                    "expression": {
                      "type": "CallExpression",
                      "start": 266,
                      "end": 295,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 266,
                        "end": 277,
                        "object": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 273,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 277,
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
                          "type": "AssignmentExpression",
                          "start": 278,
                          "end": 294,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 278,
                            "end": 285,
                            "object": {
                              "type": "ThisExpression",
                              "start": 278,
                              "end": 282
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 283,
                              "end": 285,
                              "name": "x"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 288,
                            "end": 294,
                            "value": "test",
                            "raw": "\"test\""
                          }
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
          },
          {
            "type": "PropertyDefinition",
            "start": 307,
            "end": 331,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 307,
              "end": 317,
              "name": "something"
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 320,
              "end": 330,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 326,
                "end": 330,
                "value": 1234,
                "raw": "1234"
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
