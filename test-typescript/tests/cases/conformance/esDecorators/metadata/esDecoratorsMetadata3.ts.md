__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 344,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "name": "appendMeta",
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
          "start": 20,
          "end": 31,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 46,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 46,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 40,
              "end": 46
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 195,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 54,
            "end": 193,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 61,
              "end": 192,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 72,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 192,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 132,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 93,
                        "end": 131,
                        "id": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 101,
                          "name": "existing",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "start": 104,
                          "end": 131,
                          "left": {
                            "type": "MemberExpression",
                            "start": 104,
                            "end": 125,
                            "object": {
                              "type": "MemberExpression",
                              "start": 104,
                              "end": 120,
                              "object": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 111,
                                "name": "context",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 112,
                                "end": 120,
                                "name": "metadata",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 124,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          },
                          "operator": "??",
                          "right": {
                            "type": "ArrayExpression",
                            "start": 129,
                            "end": 131,
                            "elements": []
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 186,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 141,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 141,
                        "end": 162,
                        "object": {
                          "type": "MemberExpression",
                          "start": 141,
                          "end": 157,
                          "object": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 148,
                            "name": "context",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 157,
                            "name": "metadata",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 161,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 165,
                        "end": 185,
                        "elements": [
                          {
                            "type": "SpreadElement",
                            "start": 166,
                            "end": 177,
                            "argument": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 177,
                              "name": "existing",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 179,
                            "end": 184,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 197,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 226,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 230,
        "body": []
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 197,
          "end": 218,
          "expression": {
            "type": "CallExpression",
            "start": 198,
            "end": 218,
            "callee": {
              "type": "Identifier",
              "start": 198,
              "end": 208,
              "name": "appendMeta",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 209,
                "end": 212,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 214,
                "end": 217,
                "value": "x",
                "raw": "'x'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 232,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 270,
        "end": 271,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 272,
        "end": 275,
        "body": []
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 232,
          "end": 253,
          "expression": {
            "type": "CallExpression",
            "start": 233,
            "end": 253,
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 243,
              "name": "appendMeta",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 244,
                "end": 247,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 249,
                "end": 252,
                "value": "z",
                "raw": "'z'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 298,
      "expression": {
        "type": "MemberExpression",
        "start": 277,
        "end": 297,
        "object": {
          "type": "MemberExpression",
          "start": 277,
          "end": 295,
          "object": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 279,
            "end": 294,
            "object": {
              "type": "Identifier",
              "start": 279,
              "end": 285,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 286,
              "end": 294,
              "name": "metadata",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 329,
      "expression": {
        "type": "MemberExpression",
        "start": 308,
        "end": 328,
        "object": {
          "type": "MemberExpression",
          "start": 308,
          "end": 326,
          "object": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 310,
            "end": 325,
            "object": {
              "type": "Identifier",
              "start": 310,
              "end": 316,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 317,
              "end": 325,
              "name": "metadata",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 327,
          "end": 328,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
