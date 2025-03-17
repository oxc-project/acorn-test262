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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 23,
              "name": "doThing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 72,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 24,
                  "end": 38,
                  "name": "x",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 28,
                            "end": 29,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 29,
                            "end": 37,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 31,
                              "end": 37
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 59,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 61,
                            "end": 64,
                            "object": {
                              "type": "Identifier",
                              "start": 61,
                              "end": 62,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 64,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
            "start": 77,
            "end": 124,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "name": "make",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 124,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 115,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 10,
            "end": 19,
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 40,
      "expression": {
        "type": "CallExpression",
        "start": 21,
        "end": 39,
        "callee": {
          "type": "MemberExpression",
          "start": 21,
          "end": 30,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 30,
            "name": "doThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 37,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 68,
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 59,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 59,
                "name": "doThing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 62,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 64,
                      "end": 66,
                      "value": 12,
                      "raw": "12"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
