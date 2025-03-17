__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 352,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 15,
      "end": 61,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 26,
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 29,
        "end": 61,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 44,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 59,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 51,
                  "end": 59,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 51,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 92,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 84,
          "end": 90,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 90,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 87,
              "end": 90
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 352,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 352,
        "body": [
          {
            "type": "ForStatement",
            "start": 136,
            "end": 350,
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 350,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 175,
                  "end": 200,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 175,
                    "end": 199,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 179,
                        "end": 198,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 179,
                          "end": 195,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 185,
                            "decorators": [],
                            "name": "myType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 195,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 197,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 178,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 281,
                  "end": 293,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 287,
                      "end": 292,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 288,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 291,
                        "end": 292,
                        "raw": "5",
                        "value": 5
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 302,
                  "end": 344,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 302,
                    "end": 344,
                    "arguments": [
                      {
                        "type": "FunctionExpression",
                        "start": 320,
                        "end": 343,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 332,
                          "end": 343,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 334,
                              "end": 341,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 334,
                                "end": 340,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 338,
                                    "end": 339,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 334,
                                  "end": 337,
                                  "decorators": [],
                                  "name": "use",
                                  "optional": false,
                                  "typeAnnotation": null
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
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 329,
                            "end": 330,
                            "decorators": [],
                            "name": "j",
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
                      "start": 302,
                      "end": 319,
                      "computed": false,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 302,
                        "end": 311,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 303,
                            "end": 304,
                            "raw": "1",
                            "value": 1
                          },
                          {
                            "type": "Literal",
                            "start": 306,
                            "end": 307,
                            "raw": "2",
                            "value": 2
                          },
                          {
                            "type": "Literal",
                            "start": 309,
                            "end": 310,
                            "raw": "3",
                            "value": 3
                          }
                        ]
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 319,
                        "decorators": [],
                        "name": "forEach",
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
            "init": {
              "type": "VariableDeclaration",
              "start": 141,
              "end": 150,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 145,
                  "end": 150,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 149,
                    "end": 150,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 152,
              "end": 158,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 156,
                "end": 158,
                "raw": "10",
                "value": 10
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 160,
              "end": 163,
              "argument": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 113,
        "decorators": [],
        "name": "myFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 114,
          "end": 128,
          "decorators": [],
          "name": "myType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 122,
              "end": 128,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 128,
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
