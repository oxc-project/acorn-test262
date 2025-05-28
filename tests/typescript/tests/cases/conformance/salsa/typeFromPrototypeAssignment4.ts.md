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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "Multimap4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 42,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 25,
            "end": 40,
            "expression": {
              "type": "AssignmentExpression",
              "start": 25,
              "end": 39,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 25,
                "end": 34,
                "object": {
                  "type": "ThisExpression",
                  "start": 25,
                  "end": 29
                },
                "property": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 37,
                "end": 39,
                "properties": []
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
      "start": 42,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 196,
      "expression": {
        "type": "AssignmentExpression",
        "start": 45,
        "end": 195,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 45,
          "end": 67,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 54,
            "decorators": [],
            "name": "Multimap4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 55,
            "end": 66,
            "value": "prototype",
            "raw": "\"prototype\""
          },
          "optional": false,
          "computed": true
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 147,
                "end": 150,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 150,
                "end": 193,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                        "object": {
                          "type": "MemberExpression",
                          "start": 169,
                          "end": 178,
                          "object": {
                            "type": "ThisExpression",
                            "start": 169,
                            "end": 173
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 178,
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "start": 179,
                          "end": 187,
                          "left": {
                            "type": "Identifier",
                            "start": 179,
                            "end": 182,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 185,
                            "end": 187,
                            "value": "",
                            "raw": "''"
                          }
                        },
                        "optional": false,
                        "computed": true
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 247,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 246,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 198,
          "end": 230,
          "object": {
            "type": "MemberExpression",
            "start": 198,
            "end": 220,
            "object": {
              "type": "Identifier",
              "start": 198,
              "end": 207,
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 208,
              "end": 219,
              "value": "prototype",
              "raw": "\"prototype\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 221,
            "end": 229,
            "value": "add-on",
            "raw": "\"add-on\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "FunctionExpression",
          "start": 233,
          "end": 246,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 244,
            "end": 246,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 296,
      "expression": {
        "type": "AssignmentExpression",
        "start": 248,
        "end": 295,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 248,
          "end": 279,
          "object": {
            "type": "MemberExpression",
            "start": 248,
            "end": 270,
            "object": {
              "type": "Identifier",
              "start": 248,
              "end": 257,
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 258,
              "end": 269,
              "value": "prototype",
              "raw": "\"prototype\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 271,
            "end": 278,
            "value": "addon",
            "raw": "\"addon\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "FunctionExpression",
          "start": 282,
          "end": 295,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 293,
            "end": 295,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 355,
      "expression": {
        "type": "AssignmentExpression",
        "start": 297,
        "end": 354,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 297,
          "end": 338,
          "object": {
            "type": "MemberExpression",
            "start": 297,
            "end": 319,
            "object": {
              "type": "Identifier",
              "start": 297,
              "end": 306,
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 307,
              "end": 318,
              "value": "prototype",
              "raw": "\"prototype\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 320,
            "end": 337,
            "value": "__underscores__",
            "raw": "\"__underscores__\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "FunctionExpression",
          "start": 341,
          "end": 354,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 352,
            "end": 354,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 386,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 385,
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
            "callee": {
              "type": "Identifier",
              "start": 374,
              "end": 383,
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 400,
      "expression": {
        "type": "CallExpression",
        "start": 387,
        "end": 399,
        "callee": {
          "type": "MemberExpression",
          "start": 387,
          "end": 395,
          "object": {
            "type": "Identifier",
            "start": 387,
            "end": 391,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 392,
            "end": 395,
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 396,
            "end": 398,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 418,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 417,
        "callee": {
          "type": "MemberExpression",
          "start": 401,
          "end": 415,
          "object": {
            "type": "Identifier",
            "start": 401,
            "end": 405,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 406,
            "end": 414,
            "value": "add-on",
            "raw": "\"add-on\""
          },
          "optional": false,
          "computed": true
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 419,
      "end": 432,
      "expression": {
        "type": "CallExpression",
        "start": 419,
        "end": 431,
        "callee": {
          "type": "MemberExpression",
          "start": 419,
          "end": 429,
          "object": {
            "type": "Identifier",
            "start": 419,
            "end": 423,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 429,
            "decorators": [],
            "name": "addon",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 456,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 455,
        "callee": {
          "type": "MemberExpression",
          "start": 433,
          "end": 453,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 437,
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 438,
            "end": 453,
            "decorators": [],
            "name": "__underscores__",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
