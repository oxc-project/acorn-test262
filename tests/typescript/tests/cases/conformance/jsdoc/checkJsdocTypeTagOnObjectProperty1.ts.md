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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 34,
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
            "value": "hello Lol",
            "raw": "\"hello Lol\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 383,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 383,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 88,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 99,
                  "decorators": [],
                  "name": "undefined",
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
                "start": 137,
                "end": 146,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 140,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 146,
                  "value": "42",
                  "raw": "\"42\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 192,
                "end": 231,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 199,
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 199,
                  "end": 231,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                          "left": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 221,
                            "decorators": [],
                            "name": "n1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 224,
                            "end": 226,
                            "value": 42,
                            "raw": "42"
                          }
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
              },
              {
                "type": "Property",
                "start": 259,
                "end": 262,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 262,
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 262,
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 290,
                "end": 307,
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "start": 291,
                  "end": 302,
                  "left": {
                    "type": "Literal",
                    "start": 291,
                    "end": 294,
                    "value": "b",
                    "raw": "'b'"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 297,
                    "end": 302,
                    "value": "ar1",
                    "raw": "'ar1'"
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 305,
                  "end": 307,
                  "value": 42,
                  "raw": "42"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 353,
                "end": 381,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 362,
                  "decorators": [],
                  "name": "arrowFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 364,
                  "end": 381,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "BinaryExpression",
                    "start": 373,
                    "end": 381,
                    "left": {
                      "type": "Identifier",
                      "start": 373,
                      "end": 376,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 379,
                      "end": 381,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 402,
      "expression": {
        "type": "AssignmentExpression",
        "start": 384,
        "end": 402,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 384,
          "end": 391,
          "object": {
            "type": "Identifier",
            "start": 384,
            "end": 387,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 388,
            "end": 391,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 394,
          "end": 402,
          "value": "string",
          "raw": "'string'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 403,
      "end": 410,
      "expression": {
        "type": "MemberExpression",
        "start": 403,
        "end": 410,
        "object": {
          "type": "Identifier",
          "start": 403,
          "end": 406,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 407,
          "end": 410,
          "decorators": [],
          "name": "lol",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 411,
      "end": 431,
      "expression": {
        "type": "AssignmentExpression",
        "start": 411,
        "end": 430,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 411,
          "end": 418,
          "object": {
            "type": "Identifier",
            "start": 411,
            "end": 414,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 415,
            "end": 418,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 455,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 454,
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
            "callee": {
              "type": "MemberExpression",
              "start": 440,
              "end": 451,
              "object": {
                "type": "Identifier",
                "start": 440,
                "end": 443,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 444,
                "end": 451,
                "decorators": [],
                "name": "method1",
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
                "start": 452,
                "end": 453,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 472,
      "expression": {
        "type": "AssignmentExpression",
        "start": 456,
        "end": 471,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 456,
          "end": 464,
          "object": {
            "type": "Identifier",
            "start": 456,
            "end": 459,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 460,
            "end": 464,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 467,
          "end": 471,
          "value": "42",
          "raw": "\"42\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 473,
      "end": 490,
      "expression": {
        "type": "CallExpression",
        "start": 473,
        "end": 489,
        "callee": {
          "type": "MemberExpression",
          "start": 473,
          "end": 486,
          "object": {
            "type": "Identifier",
            "start": 473,
            "end": 476,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 477,
            "end": 486,
            "decorators": [],
            "name": "arrowFunc",
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
            "start": 487,
            "end": 488,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
