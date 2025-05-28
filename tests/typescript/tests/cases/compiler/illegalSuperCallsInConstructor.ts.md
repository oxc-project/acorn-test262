__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 389,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 389,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 45,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 389,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 387,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 76,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 387,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 387,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 89,
                    "end": 112,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 93,
                        "end": 111,
                        "id": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 95,
                          "decorators": [],
                          "name": "r2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 98,
                          "end": 111,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "start": 104,
                            "end": 111,
                            "callee": {
                              "type": "Super",
                              "start": 104,
                              "end": 109
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 121,
                    "end": 148,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 125,
                        "end": 148,
                        "id": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 127,
                          "decorators": [],
                          "name": "r3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 130,
                          "end": 148,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 136,
                            "end": 148,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 138,
                                "end": 146,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 138,
                                  "end": 145,
                                  "callee": {
                                    "type": "Super",
                                    "start": 138,
                                    "end": 143
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 157,
                    "end": 190,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 161,
                        "end": 190,
                        "id": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 163,
                          "decorators": [],
                          "name": "r4",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 166,
                          "end": 190,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 178,
                            "end": 190,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 180,
                                "end": 188,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 180,
                                  "end": 187,
                                  "callee": {
                                    "type": "Super",
                                    "start": 180,
                                    "end": 185
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
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 199,
                    "end": 381,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 203,
                        "end": 381,
                        "id": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 205,
                          "decorators": [],
                          "name": "r5",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 208,
                          "end": 381,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 222,
                              "end": 298,
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "start": 226,
                                "end": 229,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 229,
                                "end": 298,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 232,
                                  "end": 298,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 250,
                                      "end": 258,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 250,
                                        "end": 257,
                                        "callee": {
                                          "type": "Super",
                                          "start": 250,
                                          "end": 255
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      },
                                      "directive": null
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 275,
                                      "end": 284,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 282,
                                        "end": 283,
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 312,
                              "end": 371,
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "start": 316,
                                "end": 319,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 319,
                                "end": 371,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 320,
                                    "end": 329,
                                    "decorators": [],
                                    "name": "v",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 321,
                                      "end": 329,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 323,
                                        "end": 329
                                      }
                                    }
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 331,
                                  "end": 371,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 349,
                                      "end": 357,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 349,
                                        "end": 356,
                                        "callee": {
                                          "type": "Super",
                                          "start": 349,
                                          "end": 354
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
