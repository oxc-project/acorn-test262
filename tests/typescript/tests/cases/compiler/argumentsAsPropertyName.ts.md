__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 26
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 51
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  ],
                  "start": 51,
                  "end": 59
                },
                "start": 46,
                "end": 59
              },
              "start": 44,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 59
          }
        ],
        "start": 29,
        "end": 61
      },
      "declare": false,
      "start": 15,
      "end": 61
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 83
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 87,
              "end": 90
            },
            "start": 85,
            "end": 90
          },
          "start": 84,
          "end": 90
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 63,
      "end": 92
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "myType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 128
              },
              "typeArguments": null,
              "start": 122,
              "end": 128
            },
            "start": 120,
            "end": 128
          },
          "start": 114,
          "end": 128
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 149,
                    "end": 150
                  },
                  "definite": false,
                  "start": 145,
                  "end": 150
                }
              ],
              "declare": false,
              "start": 141,
              "end": 150
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 156,
                "end": 158
              },
              "start": 152,
              "end": 158
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "start": 160,
              "end": 163
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 178
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 185
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 186,
                            "end": 195
                          },
                          "optional": false,
                          "computed": false,
                          "start": 179,
                          "end": 195
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 197
                        },
                        "optional": false,
                        "computed": true,
                        "start": 179,
                        "end": 198
                      }
                    ],
                    "optional": false,
                    "start": 175,
                    "end": 199
                  },
                  "directive": null,
                  "start": 175,
                  "end": 200
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 288
                      },
                      "init": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 291,
                        "end": 292
                      },
                      "definite": false,
                      "start": 287,
                      "end": 292
                    }
                  ],
                  "declare": false,
                  "start": 281,
                  "end": 293
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 303,
                            "end": 304
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 306,
                            "end": 307
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 309,
                            "end": 310
                          }
                        ],
                        "start": 302,
                        "end": 311
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 319
                      },
                      "optional": false,
                      "computed": false,
                      "start": 302,
                      "end": 319
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 330
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "use",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 334,
                                  "end": 337
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 338,
                                    "end": 339
                                  }
                                ],
                                "optional": false,
                                "start": 334,
                                "end": 340
                              },
                              "directive": null,
                              "start": 334,
                              "end": 341
                            }
                          ],
                          "start": 332,
                          "end": 343
                        },
                        "expression": false,
                        "start": 320,
                        "end": 343
                      }
                    ],
                    "optional": false,
                    "start": 302,
                    "end": 344
                  },
                  "directive": null,
                  "start": 302,
                  "end": 344
                }
              ],
              "start": 165,
              "end": 350
            },
            "start": 136,
            "end": 350
          }
        ],
        "start": 130,
        "end": 352
      },
      "expression": false,
      "start": 94,
      "end": 352
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 352
}
```
