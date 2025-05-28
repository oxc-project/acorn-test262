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
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 26,
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 29,
        "end": 61,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 59,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 44,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 51,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 113,
        "decorators": [],
        "name": "myFunction",
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
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 128,
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 352,
        "body": [
          {
            "type": "ForStatement",
            "start": 136,
            "end": 350,
            "init": {
              "type": "VariableDeclaration",
              "start": 141,
              "end": 150,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 145,
                  "end": 150,
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
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 152,
              "end": 158,
              "left": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 156,
                "end": 158,
                "value": 10,
                "raw": "10"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 160,
              "end": 163,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 350,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 175,
                  "end": 200,
                  "expression": {
                    "type": "CallExpression",
                    "start": 175,
                    "end": 199,
                    "callee": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 178,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 179,
                        "end": 198,
                        "object": {
                          "type": "MemberExpression",
                          "start": 179,
                          "end": 195,
                          "object": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 185,
                            "decorators": [],
                            "name": "myType",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 195,
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 197,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 281,
                  "end": 293,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 287,
                      "end": 292,
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
                        "value": 5,
                        "raw": "5"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 302,
                  "end": 344,
                  "expression": {
                    "type": "CallExpression",
                    "start": 302,
                    "end": 344,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 302,
                      "end": 319,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 302,
                        "end": 311,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 303,
                            "end": 304,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 306,
                            "end": 307,
                            "value": 2,
                            "raw": "2"
                          },
                          {
                            "type": "Literal",
                            "start": 309,
                            "end": 310,
                            "value": 3,
                            "raw": "3"
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 319,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "FunctionExpression",
                        "start": 320,
                        "end": 343,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
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
                        "body": {
                          "type": "BlockStatement",
                          "start": 332,
                          "end": 343,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 334,
                              "end": 341,
                              "expression": {
                                "type": "CallExpression",
                                "start": 334,
                                "end": 340,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 334,
                                  "end": 337,
                                  "decorators": [],
                                  "name": "use",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
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
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "expression": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
