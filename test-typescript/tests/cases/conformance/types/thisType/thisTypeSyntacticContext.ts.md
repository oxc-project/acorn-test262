thisTypeSyntacticContext.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 35,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 30,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 30,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 17,
              "end": 30,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 19,
                  "end": 28,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 97,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 46,
                "end": 97,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 48,
                    "end": 58,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 59,
                    "end": 95,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "decorators": [],
                      "name": "test",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 66,
                        "end": 95,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 67,
                            "end": 86,
                            "decorators": [],
                            "name": "this",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 71,
                              "end": 86,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 73,
                                "end": 86,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 75,
                                    "end": 84,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 75,
                                      "end": 76,
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 76,
                                      "end": 84,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 78,
                                        "end": 84
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 88,
                          "end": 95,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 91,
                            "end": 95
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 100,
            "end": 108,
            "properties": [
              {
                "type": "Property",
                "start": 102,
                "end": 106,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 109,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 109,
          "end": 115,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 111,
            "end": 115,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 129,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 121,
          "end": 127,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 123,
            "end": 127,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 140,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 131,
          "end": 138,
          "computed": false,
          "object": {
            "type": "TSNonNullExpression",
            "start": 131,
            "end": 133,
            "expression": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "o",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 152,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 151,
        "arguments": [],
        "callee": {
          "type": "TSNonNullExpression",
          "start": 142,
          "end": 149,
          "expression": {
            "type": "MemberExpression",
            "start": 142,
            "end": 148,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "decorators": [],
              "name": "test",
              "optional": false
            }
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 165,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 164,
        "arguments": [],
        "callee": {
          "type": "TSNonNullExpression",
          "start": 153,
          "end": 162,
          "expression": {
            "type": "TSNonNullExpression",
            "start": 153,
            "end": 161,
            "expression": {
              "type": "TSNonNullExpression",
              "start": 153,
              "end": 160,
              "expression": {
                "type": "MemberExpression",
                "start": 153,
                "end": 159,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 159,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                }
              }
            }
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 178,
      "expression": {
        "type": "CallExpression",
        "start": 166,
        "end": 177,
        "arguments": [],
        "callee": {
          "type": "TSNonNullExpression",
          "start": 167,
          "end": 174,
          "expression": {
            "type": "MemberExpression",
            "start": 167,
            "end": 173,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
              "decorators": [],
              "name": "test",
              "optional": false
            }
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 190,
      "expression": {
        "type": "CallExpression",
        "start": 179,
        "end": 189,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 186,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 186,
            "decorators": [],
            "name": "test",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
