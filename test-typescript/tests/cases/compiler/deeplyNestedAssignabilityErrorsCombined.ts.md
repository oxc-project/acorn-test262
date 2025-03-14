deeplyNestedAssignabilityErrorsCombined.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 347,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 77,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 75,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 13,
                  "end": 75,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 15,
                      "end": 73,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 15,
                        "end": 16,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 18,
                        "end": 73,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 20,
                            "end": 71,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 20,
                              "end": 21,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 23,
                              "end": 71,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 25,
                                  "end": 69,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 25,
                                    "end": 26,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 28,
                                    "end": 69,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 30,
                                        "end": 67,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 30,
                                          "end": 31,
                                          "decorators": [],
                                          "name": "e",
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "ObjectExpression",
                                          "start": 33,
                                          "end": 67,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 35,
                                              "end": 65,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 35,
                                                "end": 36,
                                                "decorators": [],
                                                "name": "f",
                                                "optional": false
                                              },
                                              "kind": "init",
                                              "method": true,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "FunctionExpression",
                                                "start": 36,
                                                "end": 65,
                                                "async": false,
                                                "body": {
                                                  "type": "BlockStatement",
                                                  "start": 39,
                                                  "end": 65,
                                                  "body": [
                                                    {
                                                      "type": "ReturnStatement",
                                                      "start": 41,
                                                      "end": 63,
                                                      "argument": {
                                                        "type": "ObjectExpression",
                                                        "start": 48,
                                                        "end": 62,
                                                        "properties": [
                                                          {
                                                            "type": "Property",
                                                            "start": 50,
                                                            "end": 60,
                                                            "computed": false,
                                                            "key": {
                                                              "type": "Identifier",
                                                              "start": 50,
                                                              "end": 51,
                                                              "decorators": [],
                                                              "name": "g",
                                                              "optional": false
                                                            },
                                                            "kind": "init",
                                                            "method": false,
                                                            "optional": false,
                                                            "shorthand": false,
                                                            "value": {
                                                              "type": "Literal",
                                                              "start": 53,
                                                              "end": 60,
                                                              "raw": "\"hello\"",
                                                              "value": "hello"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                },
                                                "declare": false,
                                                "expression": false,
                                                "generator": false,
                                                "id": null,
                                                "params": []
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 87,
            "end": 154,
            "properties": [
              {
                "type": "Property",
                "start": 89,
                "end": 152,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 92,
                  "end": 152,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 94,
                      "end": 150,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 97,
                        "end": 150,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 99,
                            "end": 148,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 99,
                              "end": 100,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 102,
                              "end": 148,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 104,
                                  "end": 146,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 104,
                                    "end": 105,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 107,
                                    "end": 146,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 109,
                                        "end": 144,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 109,
                                          "end": 110,
                                          "decorators": [],
                                          "name": "e",
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "ObjectExpression",
                                          "start": 112,
                                          "end": 144,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 114,
                                              "end": 142,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 114,
                                                "end": 115,
                                                "decorators": [],
                                                "name": "f",
                                                "optional": false
                                              },
                                              "kind": "init",
                                              "method": true,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "FunctionExpression",
                                                "start": 115,
                                                "end": 142,
                                                "async": false,
                                                "body": {
                                                  "type": "BlockStatement",
                                                  "start": 118,
                                                  "end": 142,
                                                  "body": [
                                                    {
                                                      "type": "ReturnStatement",
                                                      "start": 120,
                                                      "end": 140,
                                                      "argument": {
                                                        "type": "ObjectExpression",
                                                        "start": 127,
                                                        "end": 139,
                                                        "properties": [
                                                          {
                                                            "type": "Property",
                                                            "start": 129,
                                                            "end": 137,
                                                            "computed": false,
                                                            "key": {
                                                              "type": "Identifier",
                                                              "start": 129,
                                                              "end": 130,
                                                              "decorators": [],
                                                              "name": "g",
                                                              "optional": false
                                                            },
                                                            "kind": "init",
                                                            "method": false,
                                                            "optional": false,
                                                            "shorthand": false,
                                                            "value": {
                                                              "type": "Literal",
                                                              "start": 132,
                                                              "end": 137,
                                                              "raw": "12345",
                                                              "value": 12345
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                },
                                                "declare": false,
                                                "expression": false,
                                                "generator": false,
                                                "id": null,
                                                "params": []
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 162,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 161,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 164,
      "end": 192,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 192,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 182,
            "end": 190,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 186,
              "end": 190,
              "raw": "\"ok\"",
              "value": "ok"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 175,
        "decorators": [],
        "name": "Ctor1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 194,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 219,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 216,
              "end": 218,
              "raw": "12",
              "value": 12
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 205,
        "decorators": [],
        "name": "Ctor2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 229,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 232,
            "end": 279,
            "properties": [
              {
                "type": "Property",
                "start": 234,
                "end": 277,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 237,
                  "end": 277,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 239,
                      "end": 275,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 242,
                        "end": 275,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 244,
                            "end": 273,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 244,
                              "end": 245,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 247,
                              "end": 273,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 249,
                                  "end": 271,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 249,
                                    "end": 250,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 252,
                                    "end": 271,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 254,
                                        "end": 269,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 254,
                                          "end": 255,
                                          "decorators": [],
                                          "name": "e",
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "ObjectExpression",
                                          "start": 257,
                                          "end": 269,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 259,
                                              "end": 267,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 259,
                                                "end": 260,
                                                "decorators": [],
                                                "name": "f",
                                                "optional": false
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "Identifier",
                                                "start": 262,
                                                "end": 267,
                                                "decorators": [],
                                                "name": "Ctor1",
                                                "optional": false
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "decorators": [],
            "name": "y2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 290,
            "end": 337,
            "properties": [
              {
                "type": "Property",
                "start": 292,
                "end": 335,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 295,
                  "end": 335,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 297,
                      "end": 333,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 298,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 300,
                        "end": 333,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 302,
                            "end": 331,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 302,
                              "end": 303,
                              "decorators": [],
                              "name": "c",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "start": 305,
                              "end": 331,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 307,
                                  "end": 329,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 307,
                                    "end": 308,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ObjectExpression",
                                    "start": 310,
                                    "end": 329,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 312,
                                        "end": 327,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 312,
                                          "end": 313,
                                          "decorators": [],
                                          "name": "e",
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "ObjectExpression",
                                          "start": 315,
                                          "end": 327,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 317,
                                              "end": 325,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 317,
                                                "end": 318,
                                                "decorators": [],
                                                "name": "f",
                                                "optional": false
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": false,
                                              "value": {
                                                "type": "Identifier",
                                                "start": 320,
                                                "end": 325,
                                                "decorators": [],
                                                "name": "Ctor2",
                                                "optional": false
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 347,
      "expression": {
        "type": "AssignmentExpression",
        "start": 339,
        "end": 346,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 339,
          "end": 341,
          "decorators": [],
          "name": "x2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 344,
          "end": 346,
          "decorators": [],
          "name": "y2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
