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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 20,
            "decorators": [],
            "name": "lol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 340,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 340,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 75,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 77,
                  "end": 79,
                  "value": 42,
                  "raw": "42"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 125,
                "end": 161,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 132,
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 132,
                  "end": 161,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                          "value": "42",
                          "raw": "\"42\""
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
                "start": 207,
                "end": 229,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 214,
                  "decorators": [],
                  "name": "method2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 216,
                  "end": 229,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Literal",
                    "start": 224,
                    "end": 229,
                    "value": "lol",
                    "raw": "\"lol\""
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
                "start": 275,
                "end": 307,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 284,
                  "decorators": [],
                  "name": "arrowFunc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 286,
                  "end": 307,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                      "right": {
                        "type": "Literal",
                        "start": 291,
                        "end": 294,
                        "value": "0",
                        "raw": "\"0\""
                      },
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 299,
                    "end": 307,
                    "left": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 302,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 305,
                      "end": 307,
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
              },
              {
                "type": "Property",
                "start": 335,
                "end": 338,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 338,
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 338,
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
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
      "start": 341,
      "end": 355,
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
          "value": "string",
          "raw": "\"string\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 400,
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
            "callee": {
              "type": "MemberExpression",
              "start": 386,
              "end": 397,
              "object": {
                "type": "Identifier",
                "start": 386,
                "end": 389,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 390,
                "end": 397,
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
                "start": 398,
                "end": 399,
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
      "type": "VariableDeclaration",
      "start": 425,
      "end": 451,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 450,
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
            "callee": {
              "type": "MemberExpression",
              "start": 434,
              "end": 445,
              "object": {
                "type": "Identifier",
                "start": 434,
                "end": 437,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 438,
                "end": 445,
                "decorators": [],
                "name": "method2",
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
                "start": 446,
                "end": 449,
                "value": "0",
                "raw": "\"0\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
