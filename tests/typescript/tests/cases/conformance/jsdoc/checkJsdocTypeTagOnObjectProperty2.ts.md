__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 451,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 20,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 340,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 34,
            "end": 340,
            "properties": [
              {
                "type": "Property",
                "start": 72,
                "end": 79,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 75,
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
                  "start": 77,
                  "end": 79,
                  "raw": "42",
                  "value": 42
                }
              },
              {
                "type": "Property",
                "start": 125,
                "end": 161,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 132,
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
                  "start": 132,
                  "end": 161,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 137,
                    "end": 161,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 145,
                        "end": 157,
                        "argument": {
                          "type": "Literal",
                          "start": 152,
                          "end": 156,
                          "raw": "\"42\"",
                          "value": "42"
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
                      "start": 133,
                      "end": 135,
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
                "start": 207,
                "end": 229,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 214,
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 216,
                  "end": 229,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 224,
                    "end": 229,
                    "raw": "\"lol\"",
                    "value": "lol"
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 217,
                      "end": 219,
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
                "start": 275,
                "end": 307,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 284,
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
                  "start": 286,
                  "end": 307,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 299,
                    "end": 307,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 302,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 305,
                      "end": 307,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 287,
                      "end": 294,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 287,
                        "end": 290,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 291,
                        "end": 294,
                        "raw": "\"0\"",
                        "value": "0"
                      },
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 335,
                "end": 338,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 338,
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
                  "start": 335,
                  "end": 338,
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 341,
      "end": 355,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 355,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 341,
          "end": 344,
          "decorators": [],
          "name": "lol",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 347,
          "end": 355,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 400,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 386,
            "end": 400,
            "arguments": [
              {
                "type": "Literal",
                "start": 398,
                "end": 399,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 386,
              "end": 397,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 386,
                "end": 389,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 390,
                "end": 397,
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
      "type": "VariableDeclaration",
      "start": 425,
      "end": 451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 450,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 431,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 434,
            "end": 450,
            "arguments": [
              {
                "type": "Literal",
                "start": 446,
                "end": 449,
                "raw": "\"0\"",
                "value": "0"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 434,
              "end": 445,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 434,
                "end": 437,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 438,
                "end": 445,
                "decorators": [],
                "name": "method2",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
