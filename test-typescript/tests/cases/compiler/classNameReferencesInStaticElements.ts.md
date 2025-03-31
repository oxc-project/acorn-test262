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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 92,
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
                      "type": "ThisExpression",
                      "start": 93,
                      "end": 97
                    },
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "name": "Foo",
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
          {
            "type": "PropertyDefinition",
            "start": 110,
            "end": 153,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 121,
              "end": 153,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
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
                          "type": "ThisExpression",
                          "start": 141,
                          "end": 145
                        },
                        {
                          "type": "Identifier",
                          "start": 147,
                          "end": 150,
                          "name": "Foo",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 219,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 219,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 191,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 184,
                      "end": 191
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 206,
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
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        {
                          "type": "Identifier",
                          "start": 213,
                          "end": 216,
                          "name": "Foo",
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
            "start": 225,
            "end": 251,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 225,
              "end": 227,
              "name": "x"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 251,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 243,
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
                          "type": "Identifier",
                          "start": 244,
                          "end": 247,
                          "name": "Foo",
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
          },
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 274,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 274,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "type": "VariableDeclaration",
      "start": 278,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 290,
            "name": "oldFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 293,
            "end": 296,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "oldFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "name": "x",
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
            "name": "oldFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 338,
            "end": 339,
            "name": "y",
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
              "name": "oldFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "name": "x",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
