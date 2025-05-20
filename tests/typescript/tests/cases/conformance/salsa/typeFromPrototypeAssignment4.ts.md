__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 456,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 42,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 25,
            "end": 40,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 25,
              "end": 39,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 25,
                "end": 34,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 25,
                  "end": 29
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ObjectExpression",
                "start": 37,
                "end": 39,
                "properties": []
              }
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
        "end": 18,
        "decorators": [],
        "name": "Multimap4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 42,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 196,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 45,
        "end": 195,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 45,
          "end": 67,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 54,
            "decorators": [],
            "name": "Multimap4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 55,
            "end": 66,
            "raw": "\"prototype\"",
            "value": "prototype"
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 70,
          "end": 195,
          "properties": [
            {
              "type": "Property",
              "start": 147,
              "end": 193,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 147,
                "end": 150,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 150,
                "end": 193,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 156,
                  "end": 193,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 162,
                      "end": 189,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 169,
                        "end": 188,
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 169,
                          "end": 178,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 169,
                            "end": 173
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 178,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "BinaryExpression",
                          "start": 179,
                          "end": 187,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 182,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 185,
                            "end": 187,
                            "raw": "''",
                            "value": ""
                          }
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
                    "type": "Identifier",
                    "start": 151,
                    "end": 154,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 247,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 246,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 198,
          "end": 230,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 198,
            "end": 220,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 198,
              "end": 207,
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 208,
              "end": 219,
              "raw": "\"prototype\"",
              "value": "prototype"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 221,
            "end": 229,
            "raw": "\"add-on\"",
            "value": "add-on"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 233,
          "end": 246,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 244,
            "end": 246,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 296,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 248,
        "end": 295,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 248,
          "end": 279,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 248,
            "end": 270,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 248,
              "end": 257,
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 258,
              "end": 269,
              "raw": "\"prototype\"",
              "value": "prototype"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 271,
            "end": 278,
            "raw": "\"addon\"",
            "value": "addon"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 282,
          "end": 295,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 293,
            "end": 295,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 355,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 297,
        "end": 354,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 297,
          "end": 338,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 297,
            "end": 319,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 297,
              "end": 306,
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 307,
              "end": 318,
              "raw": "\"prototype\"",
              "value": "prototype"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 320,
            "end": 337,
            "raw": "\"__underscores__\"",
            "value": "__underscores__"
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 341,
          "end": 354,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 352,
            "end": 354,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 367,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 370,
            "end": 385,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 374,
              "end": 383,
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 400,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 387,
        "end": 399,
        "arguments": [
          {
            "type": "Literal",
            "start": 396,
            "end": 398,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 387,
          "end": 395,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 387,
            "end": 391,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 392,
            "end": 395,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 418,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 417,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 401,
          "end": 415,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 401,
            "end": 405,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 406,
            "end": 414,
            "raw": "\"add-on\"",
            "value": "add-on"
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 419,
      "end": 432,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 419,
        "end": 431,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 419,
          "end": 429,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 419,
            "end": 423,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 429,
            "decorators": [],
            "name": "addon",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 456,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 455,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 433,
          "end": 453,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 437,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 438,
            "end": 453,
            "decorators": [],
            "name": "__underscores__",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
