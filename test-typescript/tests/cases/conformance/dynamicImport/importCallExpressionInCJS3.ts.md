__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 72,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 71,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 71,
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 37,
          "end": 71,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 43,
              "end": 69,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 48,
                "name": "print",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 48,
                "end": 69,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 51,
                  "end": 69,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 53,
                      "end": 68,
                      "argument": {
                        "type": "Literal",
                        "start": 60,
                        "end": 68,
                        "value": "I am B",
                        "raw": "\"I am B\""
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
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 112,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 112,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 112,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 107,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 196,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 194,
            "expression": {
              "type": "CallExpression",
              "start": 120,
              "end": 194,
              "callee": {
                "type": "MemberExpression",
                "start": 120,
                "end": 126,
                "object": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 126,
                  "name": "then",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 127,
                  "end": 193,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 127,
                      "end": 132,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 150,
                              "end": 151,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "NewExpression",
                              "start": 154,
                              "end": 167,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 158,
                                "end": 165,
                                "object": {
                                  "type": "Identifier",
                                  "start": 158,
                                  "end": 163,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 164,
                                  "end": 165,
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "let",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 177,
                        "end": 187,
                        "expression": {
                          "type": "CallExpression",
                          "start": 177,
                          "end": 186,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 177,
                            "end": 184,
                            "object": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 178,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 184,
                              "name": "print",
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
                  "typeParameters": null,
                  "returnType": null
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
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 217,
      "expression": {
        "type": "CallExpression",
        "start": 198,
        "end": 216,
        "callee": {
          "type": "Identifier",
          "start": 198,
          "end": 201,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 202,
            "end": 215,
            "source": {
              "type": "Literal",
              "start": 209,
              "end": 214,
              "value": "./0",
              "raw": "\"./0\""
            },
            "options": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
