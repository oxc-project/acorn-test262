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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 256,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "name": "cProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 24,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 72,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 254,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 89,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 254,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 103,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 141,
                            "name": "cProp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 148,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 162,
                          "end": 238,
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 162,
                            "end": 165,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 165,
                            "end": 238,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 258,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 276,
        "end": 607,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 301,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 287,
              "name": "dProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 290,
              "end": 300,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "ThisExpression",
                "start": 296,
                "end": 300
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 307,
            "end": 605,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 318,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 605,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 319,
                  "end": 326,
                  "left": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 320,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 323,
                    "end": 326,
                    "value": 100,
                    "raw": "100"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 344,
                          "end": 345,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                            "name": "Math",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 372,
                            "name": "random",
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
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 449,
                                  "name": "cProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 451,
                                  "end": 452,
                                  "value": 1,
                                  "raw": "1"
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 470,
                                "end": 487,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 470,
                                  "end": 475,
                                  "name": "dProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 477,
                                  "end": 487,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 483,
                                    "end": 487
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 505,
                                "end": 536,
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 505,
                                  "end": 508,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 508,
                                  "end": 536,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
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
                                  "declare": false,
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
