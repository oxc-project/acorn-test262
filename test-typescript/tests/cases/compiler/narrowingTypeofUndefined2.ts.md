__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 287,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 54,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "decorators": [],
        "name": "takeArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 46,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 46,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 46,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 37,
                "end": 46,
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 38,
                    "end": 45
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 47,
        "end": 53,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 49,
          "end": 53
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 287,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 287,
        "body": [
          {
            "type": "IfStatement",
            "start": 120,
            "end": 285,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 152,
              "end": 285,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 162,
                  "end": 177,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 162,
                    "end": 176,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 172,
                        "end": 175,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 171,
                      "decorators": [],
                      "name": "takeArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 186,
                  "end": 216,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 192,
                      "end": 215,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 209,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 193,
                          "end": 209,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 195,
                            "end": 209,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 200,
                              "end": 209,
                              "params": [
                                {
                                  "type": "TSUnknownKeyword",
                                  "start": 201,
                                  "end": 208
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 195,
                              "end": 200,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 215,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ForOfStatement",
                  "start": 226,
                  "end": 251,
                  "await": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 247,
                    "end": 251,
                    "body": []
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 231,
                    "end": 238,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 237,
                        "end": 238,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 238,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 245,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 260,
                  "end": 279,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 266,
                      "end": 278,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 267,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 270,
                        "end": 278,
                        "elements": [
                          {
                            "type": "SpreadElement",
                            "start": 271,
                            "end": 277,
                            "argument": {
                              "type": "Identifier",
                              "start": 274,
                              "end": 277,
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 124,
              "end": 150,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 124,
                "end": 134,
                "argument": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 139,
                "end": 150,
                "raw": "\"undefined\"",
                "value": "undefined",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 67,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 106,
          "end": 112,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 112,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 111,
              "end": 112,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 104,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 78,
              "end": 104,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 92,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 83,
                    "end": 92,
                    "params": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 84,
                        "end": 91
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 83,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 95,
                  "end": 104
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
