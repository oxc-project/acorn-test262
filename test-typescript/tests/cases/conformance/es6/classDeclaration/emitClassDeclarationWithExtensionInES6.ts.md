__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 314,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 59,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 57,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 35,
                  "end": 44,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "AssignmentPattern",
                  "start": 46,
                  "end": 52,
                  "left": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 50,
                    "end": 52,
                    "value": 10,
                    "raw": "10"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
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
      "start": 60,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 93,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
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
            "start": 98,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 155,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 111,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 105,
                      "end": 111
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 121,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 115,
                      "end": 121
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 155,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 133,
                    "end": 149,
                    "expression": {
                      "type": "CallExpression",
                      "start": 133,
                      "end": 148,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 142,
                        "object": {
                          "type": "Super",
                          "start": 133,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 142,
                          "name": "baz",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
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
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 165,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 313,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 220,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 193,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 193,
              "end": 220,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 220,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 206,
                    "end": 214,
                    "expression": {
                      "type": "CallExpression",
                      "start": 206,
                      "end": 213,
                      "callee": {
                        "type": "Super",
                        "start": 206,
                        "end": 211
                      },
                      "arguments": [],
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
            "type": "MethodDefinition",
            "start": 226,
            "end": 260,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 229,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 229,
              "end": 260,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 232,
                "end": 260,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 242,
                    "end": 254,
                    "expression": {
                      "type": "CallExpression",
                      "start": 242,
                      "end": 253,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 251,
                        "object": {
                          "type": "Super",
                          "start": 242,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 251,
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
            "type": "MethodDefinition",
            "start": 266,
            "end": 311,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 269,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 269,
              "end": 311,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 311,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 282,
                    "end": 305,
                    "expression": {
                      "type": "CallExpression",
                      "start": 282,
                      "end": 304,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 282,
                        "end": 291,
                        "object": {
                          "type": "Super",
                          "start": 282,
                          "end": 287
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 291,
                          "name": "baz",
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
                          "start": 292,
                          "end": 299,
                          "value": "hello",
                          "raw": "\"hello\""
                        },
                        {
                          "type": "Literal",
                          "start": 301,
                          "end": 303,
                          "value": 10,
                          "raw": "10"
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
