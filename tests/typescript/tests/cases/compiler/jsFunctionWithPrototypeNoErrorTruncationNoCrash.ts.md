__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 494,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 18,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 47,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 26,
            "end": 45,
            "expression": {
              "type": "AssignmentExpression",
              "start": 26,
              "end": 45,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 26,
                "end": 38,
                "object": {
                  "type": "ThisExpression",
                  "start": 26,
                  "end": 30
                },
                "property": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 38,
                  "decorators": [],
                  "name": "example",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 41,
                "end": 45,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 494,
      "expression": {
        "type": "AssignmentExpression",
        "start": 49,
        "end": 493,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 49,
          "end": 64,
          "object": {
            "type": "Identifier",
            "start": 49,
            "end": 54,
            "decorators": [],
            "name": "Color",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 64,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 67,
          "end": 493,
          "properties": [
            {
              "type": "Property",
              "start": 70,
              "end": 104,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 70,
                "end": 76,
                "decorators": [],
                "name": "negate",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 78,
                "end": 104,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 90,
                  "end": 104,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 91,
                      "end": 103,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 98,
                        "end": 102
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 107,
              "end": 147,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 107,
                "end": 114,
                "decorators": [],
                "name": "lighten",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 116,
                "end": 147,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 126,
                    "end": 131,
                    "decorators": [],
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 133,
                  "end": 147,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 134,
                      "end": 146,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 141,
                        "end": 145
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 150,
              "end": 189,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 150,
                "end": 156,
                "decorators": [],
                "name": "darken",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 158,
                "end": 189,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 168,
                    "end": 173,
                    "decorators": [],
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 175,
                  "end": 189,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 176,
                      "end": 188,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 183,
                        "end": 187
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 192,
              "end": 233,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 192,
                "end": 200,
                "decorators": [],
                "name": "saturate",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 202,
                "end": 233,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 212,
                    "end": 217,
                    "decorators": [],
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 219,
                  "end": 233,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 220,
                      "end": 232,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 227,
                        "end": 231
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 236,
              "end": 279,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 236,
                "end": 246,
                "decorators": [],
                "name": "desaturate",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 248,
                "end": 279,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 258,
                    "end": 263,
                    "decorators": [],
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 265,
                  "end": 279,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 266,
                      "end": 278,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 273,
                        "end": 277
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 282,
              "end": 321,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 282,
                "end": 288,
                "decorators": [],
                "name": "whiten",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 290,
                "end": 321,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 300,
                    "end": 305,
                    "decorators": [],
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 307,
                  "end": 321,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 308,
                      "end": 320,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 315,
                        "end": 319
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 324,
              "end": 364,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 324,
                "end": 331,
                "decorators": [],
                "name": "blacken",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 333,
                "end": 364,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 343,
                    "end": 348,
                    "decorators": [],
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 350,
                  "end": 364,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 351,
                      "end": 363,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 358,
                        "end": 362
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 367,
              "end": 404,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 367,
                "end": 376,
                "decorators": [],
                "name": "greyscale",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 378,
                "end": 404,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 390,
                  "end": 404,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 391,
                      "end": 403,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 398,
                        "end": 402
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 407,
              "end": 447,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 407,
                "end": 414,
                "decorators": [],
                "name": "clearer",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 416,
                "end": 447,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 426,
                    "end": 431,
                    "decorators": [],
                    "name": "ratio",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 433,
                  "end": 447,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 434,
                      "end": 446,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 441,
                        "end": 445
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 450,
              "end": 490,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 450,
                "end": 456,
                "decorators": [],
                "name": "toJSON",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 458,
                "end": 490,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 470,
                  "end": 490,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 471,
                      "end": 489,
                      "argument": {
                        "type": "CallExpression",
                        "start": 478,
                        "end": 488,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 478,
                          "end": 486,
                          "object": {
                            "type": "ThisExpression",
                            "start": 478,
                            "end": 482
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 486,
                            "decorators": [],
                            "name": "rgb",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
