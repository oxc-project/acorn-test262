__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 490,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 20,
            "decorators": [],
            "name": "lol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 23,
            "end": 34,
            "raw": "\"hello Lol\"",
            "value": "hello Lol"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 383,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 383,
            "properties": [
              {
                "type": "Property",
                "start": 85,
                "end": 99,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 88,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 99,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 137,
                "end": 146,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 140,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 146,
                  "raw": "\"42\"",
                  "value": "42"
                }
              },
              {
                "type": "Property",
                "start": 192,
                "end": 231,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 199,
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 199,
                  "end": 231,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 204,
                    "end": 231,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 212,
                        "end": 227,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 219,
                          "end": 226,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 221,
                            "decorators": [],
                            "name": "n1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 224,
                            "end": 226,
                            "raw": "42",
                            "value": 42
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
                      "start": 200,
                      "end": 202,
                      "decorators": [],
                      "name": "n1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 259,
                "end": 262,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 262,
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 262,
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 290,
                "end": 307,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 291,
                  "end": 302,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 291,
                    "end": 294,
                    "raw": "'b'",
                    "value": "b"
                  },
                  "right": {
                    "type": "Literal",
                    "start": 297,
                    "end": 302,
                    "raw": "'ar1'",
                    "value": "ar1"
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 305,
                  "end": 307,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 353,
                "end": 381,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 362,
                  "decorators": [],
                  "name": "arrowFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 364,
                  "end": 381,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 373,
                    "end": 381,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 376,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 379,
                      "end": 381,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 365,
                      "end": 368,
                      "decorators": [],
                      "name": "num",
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
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 402,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 384,
        "end": 402,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 384,
          "end": 391,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 384,
            "end": 387,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 388,
            "end": 391,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 394,
          "end": 402,
          "raw": "'string'",
          "value": "string"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 403,
      "end": 410,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 403,
        "end": 410,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 403,
          "end": 406,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 407,
          "end": 410,
          "decorators": [],
          "name": "lol",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 411,
      "end": 431,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 411,
        "end": 430,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 411,
          "end": 418,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 411,
            "end": 414,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 415,
            "end": 418,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 421,
          "end": 430,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 454,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 440,
            "end": 454,
            "arguments": [
              {
                "type": "Literal",
                "start": 452,
                "end": 453,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 440,
              "end": 451,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 440,
                "end": 443,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 451,
                "decorators": [],
                "name": "method1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 472,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 456,
        "end": 471,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 456,
          "end": 464,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 456,
            "end": 459,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 460,
            "end": 464,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 467,
          "end": 471,
          "raw": "\"42\"",
          "value": "42"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 473,
      "end": 490,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 473,
        "end": 489,
        "arguments": [
          {
            "type": "Literal",
            "start": 487,
            "end": 488,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 473,
          "end": 486,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 473,
            "end": 476,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 477,
            "end": 486,
            "decorators": [],
            "name": "arrowFunc",
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
