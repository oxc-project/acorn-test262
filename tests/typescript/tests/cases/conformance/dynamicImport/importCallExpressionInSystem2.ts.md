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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 49,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 49,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 47,
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
              "value": {
                "type": "FunctionExpression",
                "start": 26,
                "end": 47,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "value": "I am B",
                        "raw": "\"I am B\""
                      }
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 107,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 126,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 127,
                  "end": 193,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 136,
                    "end": 193,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 146,
                        "end": 168,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 150,
                            "end": 167,
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 158,
                                "end": 165,
                                "object": {
                                  "type": "Identifier",
                                  "start": 158,
                                  "end": 163,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 164,
                                  "end": 165,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": []
                            },
                            "definite": false
                          }
                        ],
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 179,
                              "end": 184,
                              "decorators": [],
                              "name": "print",
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
                    ]
                  },
                  "id": null,
                  "generator": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
            "options": null,
            "phase": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
