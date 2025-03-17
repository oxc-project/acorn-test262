__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 11,
          "end": 30,
          "name": "this",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 35,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 97,
            "name": "o",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 59,
                    "end": 95,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 66,
                        "end": 95,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 67,
                            "end": 86,
                            "name": "this",
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
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 75,
                                      "end": 76,
                                      "name": "n",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 76,
                                      "end": 84,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 78,
                                        "end": 84
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 111,
            "end": 115,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 129,
        "callee": {
          "type": "MemberExpression",
          "start": 121,
          "end": 127,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 123,
            "end": 127,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 140,
        "callee": {
          "type": "MemberExpression",
          "start": 131,
          "end": 138,
          "object": {
            "type": "TSNonNullExpression",
            "start": 131,
            "end": 133,
            "expression": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 152,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 151,
        "callee": {
          "type": "TSNonNullExpression",
          "start": 142,
          "end": 149,
          "expression": {
            "type": "MemberExpression",
            "start": 142,
            "end": 148,
            "object": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 165,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 164,
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
                "object": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 159,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          }
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 166,
      "end": 178,
      "expression": {
        "type": "CallExpression",
        "start": 166,
        "end": 177,
        "callee": {
          "type": "TSNonNullExpression",
          "start": 167,
          "end": 174,
          "expression": {
            "type": "MemberExpression",
            "start": 167,
            "end": 173,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 190,
      "expression": {
        "type": "CallExpression",
        "start": 179,
        "end": 189,
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 186,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 186,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
