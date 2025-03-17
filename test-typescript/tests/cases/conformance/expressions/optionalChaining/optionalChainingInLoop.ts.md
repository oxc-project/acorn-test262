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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 73,
            "name": "list",
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
            },
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 90,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "name": "comp",
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
        "start": 98,
        "end": 102,
        "name": "list",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                    "name": "comp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 117,
                    "name": "sp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                        "name": "comp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 129,
                        "name": "sp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "name": "r",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 136,
                    "name": "find",
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
                    "start": 137,
                    "end": 177,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 138,
                        "end": 144,
                        "name": "k",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 139,
                          "end": 144,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 141,
                            "end": 144
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                            "name": "comp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 164,
                            "name": "xp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
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
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 194,
                  "end": 198,
                  "id": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 198,
                    "name": "item",
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
              "type": "MemberExpression",
              "start": 202,
              "end": 208,
              "object": {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "name": "comp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 226,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "start": 229,
                      "end": 245,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 230,
                        "end": 245,
                        "operator": "!",
                        "prefix": true,
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
                                "name": "item",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 237,
                                "name": "t",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 245,
                              "name": "length",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": true
                          }
                        }
                      }
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
