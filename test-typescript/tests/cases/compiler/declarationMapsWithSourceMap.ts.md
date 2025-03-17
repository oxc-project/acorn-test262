__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 72,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 23,
              "decorators": [],
              "name": "doThing",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 72,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 72,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 50,
                    "end": 66,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 57,
                      "end": 65,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 58,
                          "end": 64,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 59,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "start": 61,
                            "end": 64,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 61,
                              "end": 62,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 64,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ]
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
                  "start": 24,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 27,
                      "end": 38,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 28,
                          "end": 37,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 28,
                            "end": 29,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 29,
                            "end": 37,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 31,
                              "end": 37
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "make",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 124,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 101,
                    "end": 118,
                    "argument": {
                      "type": "NewExpression",
                      "start": 108,
                      "end": 117,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 115,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 10,
            "end": 19,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 40,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 21,
        "end": 39,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 31,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 32,
                "end": 37,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 37,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 21,
          "end": 30,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 30,
            "decorators": [],
            "name": "doThing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 68,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 60,
                "end": 67,
                "properties": [
                  {
                    "type": "Property",
                    "start": 61,
                    "end": 66,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 62,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 64,
                      "end": 66,
                      "raw": "12",
                      "value": 12
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 59,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 59,
                "decorators": [],
                "name": "doThing",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
