__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 360,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 276,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 276,
        "body": [
          {
            "type": "StaticBlock",
            "start": 72,
            "end": 105,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 81,
                "end": 103,
                "expression": {
                  "type": "CallExpression",
                  "start": 81,
                  "end": 103,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 81,
                    "end": 92,
                    "object": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 88,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 92,
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
                      "type": "ThisExpression",
                      "start": 93,
                      "end": 97
                    },
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 110,
            "end": 153,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 121,
              "end": 153,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 153,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 151,
                    "expression": {
                      "type": "CallExpression",
                      "start": 129,
                      "end": 151,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 140,
                        "object": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 136,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
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
                          "type": "ThisExpression",
                          "start": 141,
                          "end": 145
                        },
                        {
                          "type": "Identifier",
                          "start": 147,
                          "end": 150,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 219,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 219,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 191,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 184,
                      "end": 191
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 219,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 195,
                    "end": 217,
                    "expression": {
                      "type": "CallExpression",
                      "start": 195,
                      "end": 217,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 195,
                        "end": 206,
                        "object": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 202,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 206,
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
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        {
                          "type": "Identifier",
                          "start": 213,
                          "end": 216,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 251,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 225,
              "end": 227,
              "name": "x"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 251,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 230,
                "end": 251,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 232,
                    "end": 249,
                    "expression": {
                      "type": "CallExpression",
                      "start": 232,
                      "end": 248,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 232,
                        "end": 243,
                        "object": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 239,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 243,
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
                          "type": "Identifier",
                          "start": 244,
                          "end": 247,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 274,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 274,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 260,
                "end": 274,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 262,
                    "end": 272,
                    "expression": {
                      "type": "CallExpression",
                      "start": 262,
                      "end": 271,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 262,
                        "end": 269,
                        "object": {
                          "type": "ThisExpression",
                          "start": 262,
                          "end": 266
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 267,
                          "end": 269,
                          "name": "x"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 297,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 290,
            "decorators": [],
            "name": "oldFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 293,
            "end": 296,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 318,
      "expression": {
        "type": "AssignmentExpression",
        "start": 298,
        "end": 317,
        "operator": "=",
        "left": {
          "type": "TSAsExpression",
          "start": 299,
          "end": 309,
          "expression": {
            "type": "Identifier",
            "start": 299,
            "end": 302,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 306,
            "end": 309
          }
        },
        "right": {
          "type": "Literal",
          "start": 313,
          "end": 317,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 330,
      "expression": {
        "type": "CallExpression",
        "start": 319,
        "end": 329,
        "callee": {
          "type": "MemberExpression",
          "start": 319,
          "end": 327,
          "object": {
            "type": "Identifier",
            "start": 319,
            "end": 325,
            "decorators": [],
            "name": "oldFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 342,
      "expression": {
        "type": "CallExpression",
        "start": 331,
        "end": 341,
        "callee": {
          "type": "MemberExpression",
          "start": 331,
          "end": 339,
          "object": {
            "type": "Identifier",
            "start": 331,
            "end": 337,
            "decorators": [],
            "name": "oldFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 338,
            "end": 339,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 360,
      "expression": {
        "type": "CallExpression",
        "start": 343,
        "end": 359,
        "callee": {
          "type": "MemberExpression",
          "start": 343,
          "end": 357,
          "object": {
            "type": "NewExpression",
            "start": 343,
            "end": 355,
            "callee": {
              "type": "Identifier",
              "start": 347,
              "end": 353,
              "decorators": [],
              "name": "oldFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
