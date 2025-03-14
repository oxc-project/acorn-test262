__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 607,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 256,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 256,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "cProp",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 24,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 72,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
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
              "start": 34,
              "end": 72,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 72,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 39,
                    "end": 70,
                    "argument": {
                      "type": "Literal",
                      "start": 46,
                      "end": 69,
                      "raw": "\"this never gets used.\"",
                      "value": "this never gets used."
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
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 254,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 254,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 254,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 115,
                    "end": 248,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 122,
                      "end": 248,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 136,
                          "end": 148,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 141,
                            "decorators": [],
                            "name": "cProp",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 148,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 162,
                          "end": 238,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 165,
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
                            "start": 165,
                            "end": 238,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 168,
                              "end": 238,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 186,
                                  "end": 224,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 193,
                                    "end": 223,
                                    "raw": "\"well this looks kinda C-ish.\"",
                                    "value": "well this looks kinda C-ish."
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
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 103,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    }
                  }
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 607,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 607,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 301,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "decorators": [],
              "name": "dProp",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 290,
              "end": 300,
              "async": false,
              "body": {
                "type": "ThisExpression",
                "start": 296,
                "end": 300
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 307,
            "end": 605,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 318,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 605,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 605,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 338,
                    "end": 347,
                    "expression": {
                      "type": "CallExpression",
                      "start": 338,
                      "end": 346,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 338,
                        "end": 343
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 357,
                    "end": 599,
                    "alternate": {
                      "type": "ReturnStatement",
                      "start": 587,
                      "end": 599,
                      "argument": {
                        "type": "Literal",
                        "start": 594,
                        "end": 598,
                        "raw": "null",
                        "value": null
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 382,
                      "end": 561,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 396,
                          "end": 406,
                          "expression": {
                            "type": "Literal",
                            "start": 396,
                            "end": 406,
                            "raw": "\"You win!\"",
                            "value": "You win!"
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 419,
                          "end": 551,
                          "argument": {
                            "type": "ObjectExpression",
                            "start": 426,
                            "end": 550,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 444,
                                "end": 452,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 449,
                                  "decorators": [],
                                  "name": "cProp",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 451,
                                  "end": 452,
                                  "raw": "1",
                                  "value": 1
                                }
                              },
                              {
                                "type": "Property",
                                "start": 470,
                                "end": 487,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 470,
                                  "end": 475,
                                  "decorators": [],
                                  "name": "dProp",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 477,
                                  "end": 487,
                                  "async": false,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 483,
                                    "end": 487
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": []
                                }
                              },
                              {
                                "type": "Property",
                                "start": 505,
                                "end": 536,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 505,
                                  "end": 508,
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
                                  "start": 508,
                                  "end": 536,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 511,
                                    "end": 536,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 513,
                                        "end": 534,
                                        "argument": {
                                          "type": "Literal",
                                          "start": 520,
                                          "end": 534,
                                          "raw": "\"You win!!!!!\"",
                                          "value": "You win!!!!!"
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
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 361,
                      "end": 380,
                      "operator": "<",
                      "left": {
                        "type": "CallExpression",
                        "start": 361,
                        "end": 374,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 361,
                          "end": 372,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 361,
                            "end": 365,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 372,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 377,
                        "end": 380,
                        "raw": "0.5",
                        "value": 0.5
                      }
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
                  "type": "AssignmentPattern",
                  "start": 319,
                  "end": 326,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 320,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 323,
                    "end": 326,
                    "raw": "100",
                    "value": 100
                  }
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
        "start": 264,
        "end": 265,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
