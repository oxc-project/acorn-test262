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
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 79,
      "end": 253,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 253,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 178,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 110,
              "end": 178,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 110,
                "end": 119,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 110,
                  "end": 117,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 114,
                    "decorators": [],
                    "name": "comp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 117,
                    "decorators": [],
                    "name": "sp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 122,
                "end": 178,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 137,
                    "end": 177,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 149,
                      "end": 177,
                      "operator": "==",
                      "left": {
                        "type": "MemberExpression",
                        "start": 149,
                        "end": 152,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 149,
                          "end": 150,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "start": 157,
                        "end": 176,
                        "alternate": {
                          "type": "Literal",
                          "start": 173,
                          "end": 176,
                          "raw": "'0'",
                          "value": "0",
                          "regex": null,
                          "bigint": null
                        },
                        "consequent": {
                          "type": "Literal",
                          "start": 167,
                          "end": 170,
                          "raw": "'1'",
                          "value": "1",
                          "regex": null,
                          "bigint": null
                        },
                        "test": {
                          "type": "MemberExpression",
                          "start": 157,
                          "end": 164,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 157,
                            "end": 161,
                            "decorators": [],
                            "name": "comp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 164,
                            "decorators": [],
                            "name": "xp",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 122,
                  "end": 136,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 122,
                    "end": 131,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 122,
                      "end": 129,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 126,
                        "decorators": [],
                        "name": "comp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 129,
                        "decorators": [],
                        "name": "sp",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 136,
                    "decorators": [],
                    "name": "find",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          },
          {
            "type": "ForOfStatement",
            "start": 183,
            "end": 251,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 210,
              "end": 251,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 220,
                  "end": 245,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 220,
                    "end": 245,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 220,
                      "end": 226,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 224,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 226,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "start": 229,
                      "end": 245,
                      "argument": {
                        "type": "UnaryExpression",
                        "start": 230,
                        "end": 245,
                        "argument": {
                          "type": "ChainExpression",
                          "start": 231,
                          "end": 245,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 231,
                            "end": 245,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 231,
                              "end": 237,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 231,
                                "end": 235,
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 237,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 245,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "operator": "!",
                        "prefix": true
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 188,
              "end": 198,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 194,
                  "end": 198,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 198,
                    "decorators": [],
                    "name": "item",
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
              "type": "MemberExpression",
              "start": 202,
              "end": 208,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "decorators": [],
                "name": "comp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 90,
            "end": 94,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "decorators": [],
              "name": "comp",
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
        "start": 98,
        "end": 102,
        "decorators": [],
        "name": "list",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
