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
      "end": 29,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 29,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 18,
            "end": 27,
            "argument": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 38,
            "end": 67,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 54,
              "end": 67,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 56,
                  "end": 65,
                  "argument": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 74,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 77,
            "end": 85,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 93,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 96,
            "end": 107,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 96,
              "end": 99,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 97,
                  "end": 98,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 158,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 156,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 156,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 141,
                    "end": 150,
                    "argument": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 160,
      "end": 203,
      "body": {
        "type": "TSInterfaceBody",
        "start": 172,
        "end": 203,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 178,
            "end": 185,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 190,
            "end": 201,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 194,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 198,
                "end": 199,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 227,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 212,
                "end": 227,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 218,
                    "end": 225,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 221,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ],
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 237,
            "end": 344,
            "properties": [
              {
                "type": "Property",
                "start": 243,
                "end": 275,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 246,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 246,
                  "end": 275,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 250,
                    "end": 275,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 260,
                        "end": 269,
                        "argument": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 268,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 247,
                      "end": 248,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 281,
                "end": 325,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 284,
                  "end": 325,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 300,
                    "end": 325,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 310,
                        "end": 319,
                        "argument": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 296,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 331,
                "end": 342,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 334,
                  "end": 342,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 342,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 335,
                      "end": 336,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
