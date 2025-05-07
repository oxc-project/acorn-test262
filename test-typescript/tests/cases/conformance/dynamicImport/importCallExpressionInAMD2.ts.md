__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 49,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 49,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 47,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 26,
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 26,
                "end": 47,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 29,
                  "end": 47,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 31,
                      "end": 46,
                      "argument": {
                        "type": "Literal",
                        "start": 38,
                        "end": 46,
                        "raw": "\"I am B\"",
                        "value": "I am B",
                        "regex": null,
                        "bigint": null
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 84,
  "end": 217,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 196,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 196,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 194,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 120,
              "end": 194,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 127,
                  "end": 193,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 136,
                    "end": 193,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 146,
                        "end": 168,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 150,
                            "end": 167,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 150,
                              "end": 151,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 154,
                              "end": 167,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 158,
                                "end": 165,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 158,
                                  "end": 163,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 164,
                                  "end": 165,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 177,
                        "end": 187,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 177,
                          "end": 186,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 177,
                            "end": 184,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 178,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 184,
                              "decorators": [],
                              "name": "print",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 127,
                      "end": 132,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 120,
                "end": 126,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 126,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 112,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 112,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 112,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 107,
                "end": 112,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 108,
                    "end": 111
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 107,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 217,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 198,
        "end": 216,
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 202,
            "end": 215,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 209,
              "end": 214,
              "raw": "\"./0\"",
              "value": "./0",
              "regex": null,
              "bigint": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 198,
          "end": 201,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
