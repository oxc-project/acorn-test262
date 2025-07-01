__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
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
                "start": 32,
                "end": 37
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 38,
                    "end": 45
                  }
                ],
                "start": 37,
                "end": 46
              },
              "start": 32,
              "end": 46
            },
            "start": 30,
            "end": 46
          },
          "start": 27,
          "end": 46
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 49,
          "end": 53
        },
        "start": 47,
        "end": 53
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 83
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 84,
                        "end": 91
                      }
                    ],
                    "start": 83,
                    "end": 92
                  },
                  "start": 78,
                  "end": 92
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 95,
                  "end": 104
                }
              ],
              "start": 78,
              "end": 104
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 104
          }
        ],
        "start": 67,
        "end": 105
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 112
              },
              "typeArguments": null,
              "start": 111,
              "end": 112
            },
            "start": 109,
            "end": 112
          },
          "start": 106,
          "end": 112
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 134
                },
                "prefix": true,
                "start": 124,
                "end": 134
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "undefined",
                "raw": "\"undefined\"",
                "start": 139,
                "end": 150
              },
              "start": 124,
              "end": 150
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "takeArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 171
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 175
                      }
                    ],
                    "optional": false,
                    "start": 162,
                    "end": 176
                  },
                  "directive": null,
                  "start": 162,
                  "end": 177
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
                        "name": "n",
                        "optional": false,
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
                              "start": 195,
                              "end": 200
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSUnknownKeyword",
                                  "start": 201,
                                  "end": 208
                                }
                              ],
                              "start": 200,
                              "end": 209
                            },
                            "start": 195,
                            "end": 209
                          },
                          "start": 193,
                          "end": 209
                        },
                        "start": 192,
                        "end": 209
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 215
                      },
                      "definite": false,
                      "start": 192,
                      "end": 215
                    }
                  ],
                  "declare": false,
                  "start": 186,
                  "end": 216
                },
                {
                  "type": "ForOfStatement",
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 237,
                          "end": 238
                        },
                        "init": null,
                        "definite": false,
                        "start": 237,
                        "end": 238
                      }
                    ],
                    "declare": false,
                    "start": 231,
                    "end": 238
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 245
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 247,
                    "end": 251
                  },
                  "start": 226,
                  "end": 251
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
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 266,
                        "end": 267
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 274,
                              "end": 277
                            },
                            "start": 271,
                            "end": 277
                          }
                        ],
                        "start": 270,
                        "end": 278
                      },
                      "definite": false,
                      "start": 266,
                      "end": 278
                    }
                  ],
                  "declare": false,
                  "start": 260,
                  "end": 279
                }
              ],
              "start": 152,
              "end": 285
            },
            "alternate": null,
            "start": 120,
            "end": 285
          }
        ],
        "start": 114,
        "end": 287
      },
      "expression": false,
      "start": 56,
      "end": 287
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 287
}
```
