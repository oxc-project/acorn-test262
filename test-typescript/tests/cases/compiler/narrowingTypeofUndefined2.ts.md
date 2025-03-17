__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "name": "takeArray",
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
          "start": 27,
          "end": 46,
          "name": "arr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 46,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 46,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 47,
        "end": 53,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 49,
          "end": 53
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 67,
        "name": "fn",
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
          "start": 106,
          "end": 112,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 112,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 111,
              "end": 112,
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 287,
        "body": [
          {
            "type": "IfStatement",
            "start": 120,
            "end": 285,
            "test": {
              "type": "BinaryExpression",
              "start": 124,
              "end": 150,
              "left": {
                "type": "UnaryExpression",
                "start": 124,
                "end": 134,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 139,
                "end": 150,
                "value": "undefined",
                "raw": "\"undefined\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 152,
              "end": 285,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 162,
                  "end": 177,
                  "expression": {
                    "type": "CallExpression",
                    "start": 162,
                    "end": 176,
                    "callee": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 171,
                      "name": "takeArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 172,
                        "end": 175,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
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
                      "id": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 209,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 193,
                          "end": 209,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 195,
                            "end": 209,
                            "typeName": {
                              "type": "Identifier",
                              "start": 195,
                              "end": 200,
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 215,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ForOfStatement",
                  "start": 226,
                  "end": 251,
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 231,
                    "end": 238,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 237,
                        "end": 238,
                        "id": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 238,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 245,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 247,
                    "end": 251,
                    "body": []
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
                      "id": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 267,
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "arg",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 104,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 78,
              "end": 104,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 92,
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 83,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
