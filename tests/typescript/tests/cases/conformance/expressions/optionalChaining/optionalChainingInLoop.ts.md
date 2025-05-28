__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 253,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 78,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 73,
            "decorators": [],
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 73,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 68,
                "end": 73,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 68,
                  "end": 71
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 76,
            "end": 78,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 79,
      "end": 253,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 94,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 90,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "decorators": [],
              "name": "comp",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 98,
        "end": 102,
        "decorators": [],
        "name": "list",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 253,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 178,
            "expression": {
              "type": "AssignmentExpression",
              "start": 110,
              "end": 178,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 110,
                "end": 119,
                "object": {
                  "type": "MemberExpression",
                  "start": 110,
                  "end": 117,
                  "object": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 114,
                    "decorators": [],
                    "name": "comp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 117,
                    "decorators": [],
                    "name": "sp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "CallExpression",
                "start": 122,
                "end": 178,
                "callee": {
                  "type": "MemberExpression",
                  "start": 122,
                  "end": 136,
                  "object": {
                    "type": "MemberExpression",
                    "start": 122,
                    "end": 131,
                    "object": {
                      "type": "MemberExpression",
                      "start": 122,
                      "end": 129,
                      "object": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 126,
                        "decorators": [],
                        "name": "comp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 129,
                        "decorators": [],
                        "name": "sp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 136,
                    "decorators": [],
                    "name": "find",
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
                    "start": 137,
                    "end": 177,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 138,
                        "end": 144,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 139,
                          "end": 144,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 141,
                            "end": 144
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 149,
                      "end": 177,
                      "left": {
                        "type": "MemberExpression",
                        "start": 149,
                        "end": 152,
                        "object": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "==",
                      "right": {
                        "type": "ConditionalExpression",
                        "start": 157,
                        "end": 176,
                        "test": {
                          "type": "MemberExpression",
                          "start": 157,
                          "end": 164,
                          "object": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 161,
                            "decorators": [],
                            "name": "comp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 164,
                            "decorators": [],
                            "name": "xp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "consequent": {
                          "type": "Literal",
                          "start": 167,
                          "end": 170,
                          "value": "1",
                          "raw": "'1'"
                        },
                        "alternate": {
                          "type": "Literal",
                          "start": 173,
                          "end": 176,
                          "value": "0",
                          "raw": "'0'"
                        }
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ForOfStatement",
            "start": 183,
            "end": 251,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 188,
              "end": 198,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 194,
                  "end": 198,
                  "id": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 198,
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "MemberExpression",
              "start": 202,
              "end": 208,
              "object": {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "decorators": [],
                "name": "comp",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 210,
              "end": 251,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 220,
                  "end": 245,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 220,
                    "end": 245,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 220,
                      "end": 226,
                      "object": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 224,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 226,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "start": 229,
                      "end": 245,
                      "operator": "!",
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 230,
                        "end": 245,
                        "operator": "!",
                        "argument": {
                          "type": "ChainExpression",
                          "start": 231,
                          "end": 245,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 231,
                            "end": 245,
                            "object": {
                              "type": "MemberExpression",
                              "start": 231,
                              "end": 237,
                              "object": {
                                "type": "Identifier",
                                "start": 231,
                                "end": 235,
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 237,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 245,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "computed": false
                          }
                        },
                        "prefix": true
                      },
                      "prefix": true
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
