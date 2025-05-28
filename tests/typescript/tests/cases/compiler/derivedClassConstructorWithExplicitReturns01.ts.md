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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 256,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "cProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 24,
              "value": 10,
              "raw": "10"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 72,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 72,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "this never gets used.",
                      "raw": "\"this never gets used.\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 254,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 254,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              ],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 141,
                            "decorators": [],
                            "name": "cProp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 148,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 162,
                          "end": 238,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 165,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 165,
                            "end": 238,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
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
                                    "value": "well this looks kinda C-ish.",
                                    "raw": "\"well this looks kinda C-ish.\""
                                  }
                                }
                              ]
                            },
                            "expression": false
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 607,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 607,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 301,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "decorators": [],
              "name": "dProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 290,
              "end": 300,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ThisExpression",
                "start": 296,
                "end": 300
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 307,
            "end": 605,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 318,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 605,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 323,
                    "end": 326,
                    "value": 100,
                    "raw": "100"
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                      "callee": {
                        "type": "Super",
                        "start": 338,
                        "end": 343
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 357,
                    "end": 599,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 361,
                      "end": 380,
                      "left": {
                        "type": "CallExpression",
                        "start": 361,
                        "end": 374,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 361,
                          "end": 372,
                          "object": {
                            "type": "Identifier",
                            "start": 361,
                            "end": 365,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 372,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 377,
                        "end": 380,
                        "value": 0.5,
                        "raw": "0.5"
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
                            "value": "You win!",
                            "raw": "\"You win!\""
                          },
                          "directive": null
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
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 449,
                                  "decorators": [],
                                  "name": "cProp",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 451,
                                  "end": 452,
                                  "value": 1,
                                  "raw": "1"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 470,
                                "end": 487,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 470,
                                  "end": 475,
                                  "decorators": [],
                                  "name": "dProp",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 477,
                                  "end": 487,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 483,
                                    "end": 487
                                  },
                                  "id": null,
                                  "generator": false
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 505,
                                "end": 536,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 505,
                                  "end": 508,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 508,
                                  "end": 536,
                                  "id": null,
                                  "generator": false,
                                  "async": false,
                                  "declare": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
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
                                          "value": "You win!!!!!",
                                          "raw": "\"You win!!!!!\""
                                        }
                                      }
                                    ]
                                  },
                                  "expression": false
                                },
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "ReturnStatement",
                      "start": 587,
                      "end": 599,
                      "argument": {
                        "type": "Literal",
                        "start": 594,
                        "end": 598,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
