__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 356,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "Based",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
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
      "start": 17,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 30,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 44,
        "name": "Based",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 354,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 84,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 354,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 354,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 148,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 98,
                      "end": 146,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 104,
                        "end": 146,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 118,
                            "end": 123,
                            "expression": {
                              "type": "ThisExpression",
                              "start": 118,
                              "end": 122
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 157,
                    "end": 206,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 157,
                      "end": 205,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 163,
                        "end": 205,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 177,
                            "end": 182,
                            "expression": {
                              "type": "ThisExpression",
                              "start": 177,
                              "end": 181
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 215,
                    "end": 268,
                    "expression": {
                      "type": "CallExpression",
                      "start": 215,
                      "end": 267,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 216,
                        "end": 264,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 222,
                          "end": 264,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 236,
                              "end": 241,
                              "expression": {
                                "type": "ThisExpression",
                                "start": 236,
                                "end": 240
                              },
                              "directive": null
                            }
                          ]
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 277,
                    "end": 285,
                    "expression": {
                      "type": "CallExpression",
                      "start": 277,
                      "end": 284,
                      "callee": {
                        "type": "Super",
                        "start": 277,
                        "end": 282
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 294,
                    "end": 302,
                    "expression": {
                      "type": "CallExpression",
                      "start": 294,
                      "end": 301,
                      "callee": {
                        "type": "Super",
                        "start": 294,
                        "end": 299
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 323,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 311,
                      "end": 322,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 311,
                        "end": 317,
                        "object": {
                          "type": "ThisExpression",
                          "start": 311,
                          "end": 315
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 317,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 320,
                        "end": 322,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 332,
                    "end": 348,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 336,
                        "end": 347,
                        "id": {
                          "type": "Identifier",
                          "start": 336,
                          "end": 340,
                          "name": "that",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 343,
                          "end": 347
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
